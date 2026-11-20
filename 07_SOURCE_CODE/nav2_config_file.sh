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
    bt_loop_duration: 50          # ms, default is 10; this is  tick-rate warning
    global_frame: map
    robot_base_frame: base_footprint
    odom_topic: /odom

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
      xy_goal_tolerance: 0.25 
      yaw_goal_tolerance: 0.25 
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

      BaseObstacle.scale: 0.02             #how close center of robot gets to the obstacle
      ObstacleFootprint.scale: 0.02        #was 0.3 ,footprint of robot against costmap obstacle
      PathAlign.scale: 50.0                #whether robot heading is parallel to global path
      PathDist.scale: 50.0                 #how close t stays near global path
      GoalAlign.scale: 30.0                #was20.0  #robot facing towards goal 
      GoalDist.scale: 30.0                 #was20.0 # closeness of robot to final goal
      RotateToGoal.scale: 32.0             # robot prioritize stopping its forward momentum to spin in place and align itself w final goal
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
