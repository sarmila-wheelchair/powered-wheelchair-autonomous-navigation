ros2 launch ~/wheelchair_nav2/launch/wheelchair_system.launch.py


import os

from launch import LaunchDescription
from launch.actions import IncludeLaunchDescription, ExecuteProcess, TimerAction
from launch.launch_description_sources import PythonLaunchDescriptionSource
from launch_ros.actions import Node
from ament_index_python.packages import get_package_share_directory


def generate_launch_description():

    velodyne_launch = IncludeLaunchDescription(
        PythonLaunchDescriptionSource(
            os.path.join(
                get_package_share_directory('velodyne'),
                'launch',
                'velodyne-all-nodes-VLP16-launch.py'
            )
        ),
    )

    realsense_launch = IncludeLaunchDescription(
        PythonLaunchDescriptionSource(
            os.path.join(
                get_package_share_directory('realsense2_camera'),
                'launch',
                'rs_launch.py'
            )
        ),
        launch_arguments={
            'config_file': '/home/wheelchair/wheelchair_nav2/config/d455.yaml'
        }.items()
    )

    set_emitter = TimerAction(
        period=15.0,
        actions=[
            ExecuteProcess(
                cmd=['bash', '-c',
                     'for i in 1 2 3 4 5 6 7 8; do '
                     'ros2 param set /camera/camera depth_module.emitter_enabled 1 && '
                     'ros2 param set /camera/camera depth_module.emitter_always_on true && exit 0; '
                     'sleep 3; done; exit 1'],
                name='set_emitter',
                output='screen'
            )
        ]
    )

    localization_launch = IncludeLaunchDescription(
        PythonLaunchDescriptionSource(
            os.path.join(
                get_package_share_directory('nav2_bringup'),
                'launch',
                'localization_launch.py'
            )
        ),
        launch_arguments={
            'map': '/home/wheelchair/wheelchair_nav2/maps/whole_floor_map.yaml',
            'params_file': '/home/wheelchair/wheelchair_nav2/config/nav2_params.yaml',
            'use_sim_time': 'False',
            'autostart': 'True',
        }.items()
    )

    nav2_launch = IncludeLaunchDescription(
        PythonLaunchDescriptionSource(
            os.path.join(
                get_package_share_directory('nav2_bringup'),
                'launch',
                'navigation_launch.py'
            )
        ),
        launch_arguments={
            'params_file': '/home/wheelchair/wheelchair_nav2/config/nav2_params.yaml',
            'use_sim_time': 'False',
        }.items()
    )

    return LaunchDescription([

        Node(
            package='basicmicro_ros2',
            executable='basicmicro_node.py',
            name='basicmicro_node',
            parameters=[{
                'port':'/dev/serial/by-id/usb-Basicmicro_Inc._USB_Roboclaw_2x60HV60-if00',
                'baud': 38400,
            }],
            output='screen'
        ),

        velodyne_launch,

        Node(
            package='tf2_ros',
            executable='static_transform_publisher',
            name='base_to_velodyne',
            arguments=['--x', '-0.50', '--y', '0.0', '--z', '1.18',
                       '--roll', '0', '--pitch', '0', '--yaw', '0',
                       '--frame-id', 'base_link', '--child-frame-id', 'velodyne'],
            output='screen'
        ),

        # base_footprint to base_link (17 cm above floor)
        Node(
            package='tf2_ros',
            executable='static_transform_publisher',
            name='base_footprint_to_base_link',
            arguments=['--x', '0.0', '--y', '0.0', '--z', '0.17',
                       '--roll', '0.0', '--pitch', '0.0', '--yaw', '0.0',
                       '--frame-id', 'base_footprint',
                       '--child-frame-id', 'base_link'],
            output='screen'
        ),

        realsense_launch,
        set_emitter,

        Node(
            package='tf2_ros',
            executable='static_transform_publisher',
            name='base_to_camera0',
            arguments=['--x', '0.350', '--y', '0.180', '--z', '0.120',
                       '--roll', '0', '--pitch', '0.2', '--yaw', '0',
                       '--frame-id', 'base_link', '--child-frame-id', 'camera0_link'],
            output='screen'
        ),

        Node(
            package='topic_tools',
            executable='throttle',
            name='throttle_velodyne',
            arguments=['messages', '/velodyne_points', '3.0',
                       '/velodyne_points_throttled'],
            output='screen'
        ),

        Node(
            package='topic_tools',
            executable='throttle',
            name='throttle_realsense',
            arguments=['messages', '/camera/camera/depth/color/points', '2.0',
                       '/camera/camera/depth/color/points_throttled'],
            output='screen'
        ),

        # ---- New robust 3D-to-2D projection node for Wheelchair Safety ----
        Node(
            package='pointcloud_to_laserscan',
            executable='pointcloud_to_laserscan_node',
            name='pointcloud_to_laserscan',
            remappings=[
                ('cloud_in', '/velodyne_points_throttled'),
                ('scan', '/scan_filtered')
            ],
            parameters=[{
                'target_frame': 'base_footprint', # Flattens the scan relative to the ground plane
                'transform_tolerance': 0.05,
                'min_height': 0.50,                # 10cm off the floor (cuts out tyre/floor noise)
                'max_height': 1.0,                # 1.2m high (captures overhanging tables & obstacles)
                'angle_min': -3.14159,            # 360-degree coverage
                'angle_max': 3.14159,
                'angle_increment': 0.007,         # High density ~0.4 degree steps
                'scan_time': 0.1,
                'range_min': 0.2,
                'range_max': 5.0,
                'use_inf': True
            }],
            output='screen'
        ),
        # ---- D455 3D-to-2D projection ----
        Node(
            package='pointcloud_to_laserscan',
            executable='pointcloud_to_laserscan_node',
            name='d455_pointcloud_to_laserscan',
            remappings=[
                ('cloud_in', '/camera/camera/depth/color/points_throttled'),
                ('scan', '/d455_scan_filtered')
            ],
            parameters=[{
                'target_frame': 'base_footprint',
                'transform_tolerance': 0.05,
                'min_height': 0.07,
                'max_height': 0.5,
                'angle_min': -1.5708,
                'angle_max': 1.5708,
                'angle_increment': 0.007,
                'scan_time': 0.1,
                'range_min': 0.02,
                'range_max': 2.0,
                'use_inf': True
            }],
            output='screen'
        ),

        localization_launch,
        nav2_launch,

        ExecuteProcess(
            cmd=['python3', '/home/wheelchair/wheelchair_nav2/scripts/goal_stamp_relay.py'],
            name='goal_stamp_relay',
            output='screen'
        ),

        ExecuteProcess(
            cmd=['python3', '/home/wheelchair/wheelchair_nav2/scripts/place_nav_node.py'],
            name='place_nav_node',
            output='screen'
        ),

        Node(
            package='foxglove_bridge',
            executable='foxglove_bridge',
            name='foxglove_bridge',
            parameters=[{
                'port': 8765,
                'send_buffer_limit': 100000000,
                'use_sim_time': False,
            }],
            output='screen'
        ),
    ])

