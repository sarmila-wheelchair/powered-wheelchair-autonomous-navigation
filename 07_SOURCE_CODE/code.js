intern2@intern2-XPS-13-9343:~$ ssh wheelchair@192.168.0.109
Welcome to Ubuntu 22.04.5 LTS (GNU/Linux 6.8.0-138-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/pro

Expanded Security Maintenance for Applications is not enabled.

469 updates can be applied immediately.
50 of these updates are standard security updates.
To see these additional updates run: apt list --upgradable

146 additional security updates can be applied with ESM Apps.
Learn more about enabling ESM Apps service at https://ubuntu.com/esm

Failed to connect to https://changelogs.ubuntu.com/meta-release-lts. Check your Internet connection or proxy settings

Last login: Mon Nov 16 16:43:11 2026 from 192.168.0.123
wheelchair@wheelchair-LattePanda-3-Delta:~$ cat ~/wheelchair_nav2/launch/wheelchair_system.launch.py
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

wheelchair@wheelchair-LattePanda-3-Delta:~$ ^C
wheelchair@wheelchair-LattePanda-3-Delta:~$ nano rs_launch.py
wheelchair@wheelchair-LattePanda-3-Delta:~$ nano ~/.rs_launch.py
wheelchair@wheelchair-LattePanda-3-Delta:~$ cat /home/wheelchair/wheelchair_nav2/config/d455.yaml

camera_name: 'camera0'
publish_tf: true
initial_reset: true

enable_color: true
enable_depth: true
enable_infra1: false
enable_infra2: false

rgb_camera.color_profile: "424x240x15"
rgb_camera.enable_auto_exposure: false

depth_module.depth_profile: "424x240x15"
depth_module.infra_profile: "424x240x15"
depth_module.exposure: 400
depth_module.gain: 16
depth_module.enable_auto_exposure: false
#depth_module.emitter_enabled: 1
#depth_module.emitter_always_on: true
#depth_module.emitter_on_off: true

clip_distance: 2.0

spatial_filter.enable: false
temporal_filter.enable: false

pointcloud.enable: true
align_depth.enable: true

decimation_filter.enable: true
decimation_filter.filter_magnitude: 2
wheelchair@wheelchair-LattePanda-3-Delta:~$ cat localization_launch.py
cat: localization_launch.py: No such file or directory
wheelchair@wheelchair-LattePanda-3-Delta:~$ cat ~/.localization_launch.py
cat: /home/wheelchair/.localization_launch.py: No such file or directory
wheelchair@wheelchair-LattePanda-3-Delta:~$ cat /home/wheelchair/wheelchair_nav2/maps/whole_floor_map.yaml
image: whole_floor_map.pgm
mode: trinary
resolution: 0.05
origin: [-2.45, -6.82, 0]
negate: 0
occupied_thresh: 0.65
free_thresh: 0.25wheelchair@wheelchair-LattePand/home/wheelchair/wheelchair_nav2/config/nav2_params.yaml/nav2_params.yaml
amcl:
  ros__parameters:
    use_sim_time: false
    gui_publish_rate: 5.0

    global_frame_id: map
    odom_frame_id: odom
    base_frame_id: base_footprint

    scan_topic: /scan

    robot_model_type: "nav2_amcl::DifferentialMotionModel"

    min_particles: 500
    max_particles: 2000
    pf_err: 0.05
    pf_z: 0.99

    update_min_d: 0.10
    update_min_a: 0.10

    resample_interval: 1
    transform_tolerance: 2.5 #was 2.5

    tf_broadcast: true
    save_pose_rate: 0.5

    laser_model_type: likelihood_field
    laser_max_range: 5.0
    laser_min_range: 0.1
    max_beams: 60

    set_initial_pose: true
    always_reset_initial_pose: true
    initial_pose:
      x: 0.0
      y: 0.0
      z: 0.0
      yaw: 0.0

bt_navigator:
  ros__parameters:
    use_sim_time: false
    bt_loop_duration: 50          # ms, default is 10; this is your tick-rate warning
    global_frame: map
    robot_base_frame: base_footprint
    odom_topic: /odom

#    default_nav_to_pose_bt_xml: /home/wheelchair/wheelchair_nav2/config/nav_custom.xml 
    default_nav_to_pose_bt_xml: /opt/ros/humble/share/nav2_bt_navigator/behavior_trees/navigate_w_recovery_and_replanning_only_if_path_becomes_invalid.xml
    default_nav_through_poses_bt_xml: /opt/ros/humble/share/nav2_bt_navigator/behavior_trees/navigate_through_poses_w_replanning_and_recovery.xml

map_server:
  ros__parameters:
    use_sim_time: false
    yaml_filename: "/home/wheelchair/wheelchair_nav2/maps/whole_floor_map.yaml"

controller_server:
  ros__parameters:
    use_sim_time: false
    controller_frequency: 20.0

    min_x_velocity_threshold: 0.001
    min_y_velocity_threshold: 0.001
    min_theta_velocity_threshold: 0.001

    failure_tolerance: 3.0 #was 1.0

    progress_checker_plugins: ["progress_checker"]
    goal_checker_plugins: ["goal_checker"]
    controller_plugins: ["FollowPath"]

    progress_checker:
      plugin: "nav2_controller::SimpleProgressChecker"
      required_movement_radius: 0.03
      required_movement_angle: 0.2
      movement_time_allowance: 8.0  #was 10.0

    goal_checker:
      plugin: "nav2_controller::SimpleGoalChecker"
      xy_goal_tolerance: 0.25 # 0.08 #was 0.15
      yaw_goal_tolerance: 0.25 # 0.05 #was 0.25
      stateful: true

    FollowPath:
      plugin: "dwb_core::DWBLocalPlanner"

      debug_trajectory_details: false

      min_vel_x: 0.0
      max_vel_x: 0.4 #was0.30

      min_vel_y: 0.0
      max_vel_y: 0.0

      max_vel_theta: 0.7 #was 0.8

      min_speed_xy: 0.0
      max_speed_xy: 0.4 #was 0.30

      min_speed_theta: 0.0

      acc_lim_x: 0.8
      acc_lim_y: 0.0
      acc_lim_theta: 1.5 #ws 0.8

      decel_lim_x: -1.5 #was -0.8
      decel_lim_y: 0.0
      decel_lim_theta: -1.5 #was -0.8

      vx_samples: 8 #was 8
      vy_samples: 1
      vtheta_samples: 10

      sim_time: 1.7 #was 2.5

      linear_granularity: 0.05
      angular_granularity: 0.025

      transform_tolerance: 2.0 # was 0.5

      xy_goal_tolerance: 0.08 #to match simplegoalchecker
      trans_stopped_velocity: 0.03 #was 0.01

      short_circuit_trajectory_evaluation: true
      stateful: true

      critics:
        - RotateToGoal
        - Oscillation
        - BaseObstacle
        - ObstacleFootprint
        - GoalAlign
        - PathAlign
        - PathDist
        - GoalDist

      BaseObstacle.scale: 0.02 #how close center of robot gets to the obstacle
      ObstacleFootprint.scale: 0.02 #was 0.3 ,footprint of robot against costmap obstacle
      PathAlign.scale: 50.0 #whether robot heading is parallel to global path
      PathDist.scale: 50.0 #how close t stays near global path
      GoalAlign.scale: 30.0 #was20.0  #robot facing towards goal 
      GoalDist.scale: 30.0 #was20.0 # closeness of robot to final goal
      RotateToGoal.scale: 32.0 # robot prioritize stopping its forward momentum to spin in place and align itself w final goal
      Oscillation.scale: 1.0
      PathAlign.forward_point_distance: 0.2
      GoalAlign.forward_point_distance: 0.4
      RotateToGoal.slowing_factor: 10.0
      RotateToGoal.lookahead_time: -1.0

planner_server:
  ros__parameters:
    use_sim_time: false
    expected_planner_frequency: 0.5 #was 1.0
    transform_timeout: 0.1

    planner_plugins: ["GridBased"]

    GridBased:
      plugin: "nav2_navfn_planner/NavfnPlanner"
      tolerance: 0.5
      use_astar: true
      allow_unknown: true

local_costmap:
  local_costmap:
    ros__parameters:
      use_sim_time: false

      update_frequency: 5.0
      publish_frequency: 3.0
      transform_tolerance: 2.0

      always_send_full_costmap: true

      global_frame: odom
      robot_base_frame: base_footprint

      rolling_window: true

      width: 6
      height: 6
      resolution: 0.05

      footprint: "[[-0.50, -0.40], [-0.50, 0.40], [0.50, 0.40], [0.50, -0.40]]"

      track_unknown_space: false

      plugins:
       - camera_layer
       - lidar_layer
       - inflation_layer

      camera_layer:
        plugin: "nav2_costmap_2d::VoxelLayer"
        enabled: true
        publish_voxel_map: false
        origin_z: -0.15
        z_resolution: 0.05
        z_voxels: 16
        max_obstacle_height: 0.5
        min_obstacle_height: 0.07
        mark_threshold: 1 #was 1
        combination_method: 1   # 1 = Maximum (0 = Overwrite). Keep at 1 so lidar_layer can't wipe camera cells.

        observation_sources: d455

        d455:
          topic: /camera/camera/depth/color/points_throttled
          data_type: "PointCloud2"
          marking: true
          clearing: true
          obstacle_min_range: 0.1
          obstacle_max_range: 2.0
          min_obstacle_height: 0.07 #was 0.04
          max_obstacle_height: 0.5

      lidar_layer:
        plugin: "nav2_costmap_2d::VoxelLayer"
        enabled: true
        publish_voxel_map: false
        origin_z: -0.10
        z_resolution: 0.10
        z_voxels: 16
        max_obstacle_height: 1.0 #was 1.5
        min_obstacle_height: 0.5 #was 0.4
        mark_threshold: 0
        combination_method: 1

        observation_sources: velodyne
        velodyne:
          topic: /velodyne_points_throttled
          data_type: "PointCloud2"
          marking: true
          clearing: true
          observation_persistence: 0.0
          obstacle_max_range: 5.0
          obstacle_min_range: 0.2
          raytrace_max_range: 5.0
          raytrace_min_range: 0.2
          min_obstacle_height: 0.5
          max_obstacle_height: 1.0

      inflation_layer:
        plugin: "nav2_costmap_2d::InflationLayer"
        enabled: true
        inflation_radius: 0.7
        cost_scaling_factor: 15.0   # was 3.0

global_costmap:
  global_costmap:
    ros__parameters:
      use_sim_time: false

      update_frequency: 3.0
      publish_frequency: 2.0
      transform_tolerance: 2.0

      always_send_full_costmap: true

      global_frame: map
      robot_base_frame: base_footprint

      rolling_window: false #WAS FALSE

      width: 6
      height: 6
      resolution: 0.05

      footprint: "[[-0.50, -0.40], [-0.50, 0.40], [0.50, 0.40], [0.50, -0.40]]"

      track_unknown_space: false

      plugins:
        - static_layer
        - camera_layer
        - lidar_layer
        - inflation_layer

      static_layer:
        plugin: "nav2_costmap_2d::StaticLayer"
        map_subscribe_transient_local: true

      camera_layer:
        plugin: "nav2_costmap_2d::VoxelLayer"
        enabled: true
        publish_voxel_map: false
        origin_z: -0.15 #was -0.10
        z_resolution: 0.05
        z_voxels: 16 #was 16
        max_obstacle_height: 0.5 #was 2.5
        min_obstacle_height: 0.07 #was 0.04
        mark_threshold: 1 #how many points so that its mrked as an obstacle
        combination_method: 1

        observation_sources: d455

        d455:
          topic: /camera/camera/depth/color/points_throttled
          data_type: "PointCloud2"
          marking: true
          clearing: true
          obstacle_min_range: 0.1
          obstacle_max_range: 2.0
          min_obstacle_height: 0.07
          max_obstacle_height: 0.5

      lidar_layer:
        plugin: "nav2_costmap_2d::VoxelLayer"
        enabled: true
        publish_voxel_map: false
        origin_z: -0.10
        z_resolution: 0.10
        z_voxels: 16
        max_obstacle_height: 1.0
        min_obstacle_height: 0.5 #was 0.05
        mark_threshold: 0
        combination_method: 1

        observation_sources: velodyne

        velodyne:
          topic: /velodyne_points_throttled
          data_type: "PointCloud2"
          marking: true
          clearing: true
          observation_persistence: 0.0
          obstacle_min_range: 0.2
          obstacle_max_range: 4.0
          raytrace_min_range: 0.2
          raytrace_max_range: 5.0
          min_obstacle_height: 0.5 #was 0.22
          max_obstacle_height: 1.0

      inflation_layer:
        plugin: "nav2_costmap_2d::InflationLayer"
        enabled: true
        inflation_radius: 0.7
        cost_scaling_factor: 15.0   # was 3.0

behavior_server:
  ros__parameters:
    use_sim_time: false

    global_frame: odom
    robot_base_frame: base_footprint

    cycle_frequency: 10.0

    behavior_plugins:
      - spin
      - backup
      - drive_on_heading
      - wait

    simulate_ahead_time: 2.0
    max_rotational_vel: 0.3
    min_rotational_vel: 0.1
    rotational_acc_lim: 0.4

    spin:
      plugin: "nav2_behaviors/Spin"

    backup:
      plugin: "nav2_behaviors/BackUp"

    drive_on_heading:
      plugin: "nav2_behaviors/DriveOnHeading"

    wait:
      plugin: "nav2_behaviors/Wait"

waypoint_follower:
  ros__parameters:
    use_sim_time: false

    loop_rate: 20
    stop_on_failure: false

    waypoint_task_executor_plugin: "wait_at_waypoint"

    wait_at_waypoint:
      plugin: "nav2_waypoint_follower::WaitAtWaypoint"
      enabled: false

velocity_smoother:
  ros__parameters:
    use_sim_time: false

    smoothing_frequency: 20.0
    scale_velocities: false

    feedback: "OPEN_LOOP"

    max_velocity:
      - 0.4 #was 0.25
      - 0.0
      - 0.7

    min_velocity:
      - 0.0
      - 0.0
      - -0.7

    max_accel:
      - 0.8
      - 0.0
      - 1.5

    max_decel:
      - -0.8
      - 0.0
      - -1.5 # was-0.8

    odom_topic: /odom
    odom_duration: 0.1

    deadband_velocity:
      - 0.0
      - 0.0
      - 0.0

    velocity_timeout: 1.0

    enable_stamped_cmd_vel: false

wheelchair@wheelchair-LattePanda-3-Delta:~$ cat /home/wheelchair/wheelchair_nav2/scripts/goal_stamp_relay.py
import rclpy
from rclpy.node import Node
from geometry_msgs.msg import PoseStamped
from builtin_interfaces.msg import Time


class GoalStampRelay(Node):
    def __init__(self):
        super().__init__('goal_stamp_relay')
        self.pub = self.create_publisher(PoseStamped, '/goal_pose', 10)
        self.create_subscription(PoseStamped, '/goal_pose_raw', self.cb, 10)

    def cb(self, msg):
        msg.header.stamp = Time()  # zero stamp = use latest transform
        if not msg.header.frame_id:
            msg.header.frame_id = 'map'
        self.pub.publish(msg)


def main():
    rclpy.init()
    rclpy.spin(GoalStampRelay())


if __name__ == '__main__':
    main()
wheelchair@wheelchair-LattePanda-3-Delta:~$ cat /home/wheelchair/wheelchair_nav2/scripts/place_nav_node.py
#!/usr/bin/env python3
import math
import rclpy
from rclpy.node import Node
from rclpy.action import ActionClient
from action_msgs.msg import GoalStatus
from nav2_msgs.action import NavigateToPose
from std_msgs.msg import Empty, String

# name: (x, y, yaw in radians) -- EDIT THESE
PLACES = {
    "elevator_1":              (13.510,  27.062, -1.573),
    "elevator_2":              (15.984,  26.999, -1.642),
    "home":                    (-0.270,  0.168,  -0.013),
    "emergency_exit_corridor": (18.687,  -2.040,  1.513),
    "washroom":                (11.434,  10.257,  0.008),
}

class PlaceNav(Node):
    def __init__(self):
        super().__init__("place_nav_node")
        self.client = ActionClient(self, NavigateToPose, "navigate_to_pose")
        self.status_pub = self.create_publisher(String, "/place_nav/status", 10)
        self.create_subscription(String, "/go_to_place", self.on_go, 10)
        self.create_subscription(Empty, "/cancel_navigation", self.on_cancel, 10)
        self.create_timer(1.0, self.publish_status)  # repeat status once a second

        self.busy = False
        self.goal_handle = None
        self.place = None
        self.state = "READY"
        self.detail = ""
        self.get_logger().info("Ready. Places: " + ", ".join(PLACES))

    # ---------- status ----------
    def set_status(self, state, detail=""):
        self.state, self.detail = state, detail
        self.get_logger().info(f"{state} {detail}".strip())
        self.publish_status()

    def publish_status(self):
        msg = String()
        msg.data = f"{self.state} {self.detail}".strip()
        self.status_pub.publish(msg)

    # ---------- go ----------
    def on_go(self, msg):
        name = msg.data.strip().lower().replace(" ", "_")

        if self.busy:
            self.get_logger().warn(
                f"Ignoring '{name}': already going to {self.place}. Cancel first.")
            return
        if name not in PLACES:
            self.set_status("REJECTED", f"unknown place '{msg.data}'")
            return
        if not self.client.server_is_ready():
            self.set_status("REJECTED", "Nav2 not ready")
            return

        x, y, yaw = PLACES[name]
        goal = NavigateToPose.Goal()
        goal.pose.header.frame_id = "map"
        goal.pose.header.stamp = self.get_clock().now().to_msg()
        goal.pose.pose.position.x = x
        goal.pose.pose.position.y = y
        goal.pose.pose.orientation.z = math.sin(yaw / 2.0)
        goal.pose.pose.orientation.w = math.cos(yaw / 2.0)

        self.busy = True
        self.place = name
        self.goal_handle = None
        self.set_status("SENDING", name)
        future = self.client.send_goal_async(goal, feedback_callback=self.on_feedback)
        future.add_done_callback(self.on_goal_response)

    def on_goal_response(self, future):
        handle = future.result()
        if not handle.accepted:
            self.busy = False
            self.set_status("REJECTED", f"Nav2 refused {self.place}")
            return
        self.goal_handle = handle
        self.set_status("NAVIGATING", self.place)
        handle.get_result_async().add_done_callback(self.on_result)

    def on_feedback(self, fb_msg):
        dist = fb_msg.feedback.distance_remaining
        self.detail = f"{self.place} ({dist:.1f} m left)"

    def on_result(self, future):
        status = future.result().status
        place = self.place
        self.busy = False
        self.goal_handle = None
        if status == GoalStatus.STATUS_SUCCEEDED:
            self.set_status("ARRIVED", place)
        elif status == GoalStatus.STATUS_CANCELED:
            self.set_status("CANCELED", place)
        else:
            self.set_status("FAILED", f"{place} (code {status})")

    # ---------- cancel ----------
    def on_cancel(self, _msg):
        if not self.busy:
            self.get_logger().info("Cancel received but nothing is active.")
            return
        if self.goal_handle is None:
            self.get_logger().warn("Goal not accepted yet. Press cancel again.")
            return
        self.get_logger().info("Cancelling...")
        self.goal_handle.cancel_goal_async()


def main():
    rclpy.init()
    node = PlaceNav()
    try:
        rclpy.spin(node)
    except KeyboardInterrupt:
        pass
    node.destroy_node()
    rclpy.shutdown()


if __name__ == "__main__":
    main()
wheelchair@wheelchair-LattePanda-3-Delta:~$ client_loop: send disconnect: Broken pipe
intern2@intern2-XPS-13-9343:~$ 
