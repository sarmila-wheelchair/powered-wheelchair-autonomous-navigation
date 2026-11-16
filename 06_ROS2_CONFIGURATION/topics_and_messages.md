# ROS 2 Topics and Messages

## 1. Overview

ROS 2 topics allow different nodes to exchange information through a publish-subscribe communication system.

The powered wheelchair uses topics to transmit motor commands, odometry, sensor measurements, maps, transforms, and navigation information.

## 2. Motor Control and Odometry Topics

| Topic | Message Type | Function |
|---|---|---|
| `/cmd_vel` | `geometry_msgs/msg/Twist` | Sends velocity commands to the wheelchair. |
| `/odom` | `nav_msgs/msg/Odometry` | Publishes robot position, orientation, and velocity estimates. |
| `/tf` | `tf2_msgs/msg/TFMessage` | Publishes dynamic coordinate transforms. |
| `/tf_static` | `tf2_msgs/msg/TFMessage` | Publishes static coordinate transforms. |

Verify the actual publishers and subscribers for each topic.

## 3. LiDAR Topics

| Topic | Message Type | Function |
|---|---|---|
| `/velodyne_points` | `sensor_msgs/msg/PointCloud2` | Raw VLP-16 point cloud. |
| `/velodyne_points_throttled` | `sensor_msgs/msg/PointCloud2` | Reduced-rate point cloud used for processing. |
| `/scan_filtered` | `sensor_msgs/msg/LaserScan` | Filtered 2D laser scan generated from point cloud data. |

## 4. RealSense D455 Topics

| Topic | Message Type | Function |
|---|---|---|
| `/camera/camera/depth/color/points` | `sensor_msgs/msg/PointCloud2` | Depth camera point cloud. |
| `/camera/camera/depth/color/points_throttled` | `sensor_msgs/msg/PointCloud2` | Reduced-rate point cloud for processing. |

Other camera topics may include depth images, color images, and camera information.

**Additional active camera topics:**

[TO BE ADDED]

## 5. Mapping and Localization Topics

| Topic | Message Type | Function |
|---|---|---|
| `/map` | `nav_msgs/msg/OccupancyGrid` | Publishes the occupancy grid map. |
| `/scan` | `sensor_msgs/msg/LaserScan` | Laser scan input used by localization and mapping, depending on configuration. |
| `/amcl_pose` | `geometry_msgs/msg/PoseWithCovarianceStamped` | Publishes the estimated robot pose from AMCL. |
| `/particle_cloud` | `geometry_msgs/msg/PoseArray` | Displays AMCL particle estimates. |

**Important:** The active Nav2 and SLAM configurations determine which scan topic is used. Verify whether `/scan` or `/scan_filtered` is connected in each operating mode.

## 6. Navigation Topics and Actions

Nav2 uses topics, services, and actions to manage autonomous navigation.

Important interfaces include:

| Interface | Type | Function |
|---|---|---|
| `/navigate_to_pose` | Action | Sends a navigation goal to a destination. |
| `/cmd_vel` | Topic | Carries velocity commands. |
| `/plan` | Topic | Publishes a planned path, depending on planner configuration. |
| `/local_costmap/costmap` | Topic | Publishes the local costmap. |
| `/global_costmap/costmap` | Topic | Publishes the global costmap. |

## 7. Topic Verification Commands

List active topics:

```bash
ros2 topic list
```

Inspect a topic's message type:

```bash
ros2 topic type /odom
```

Inspect topic information:

```bash
ros2 topic info /odom
```

Display topic data:

```bash
ros2 topic echo /odom
```

Check publishing frequency:

```bash
ros2 topic hz /velodyne_points
```

## 8. Topic Communication Diagram

[INSERT ROS 2 TOPIC COMMUNICATION DIAGRAM HERE]

## 9. Additional Information

**Complete verified topic list:**

[TO BE ADDED]

**Topic publisher and subscriber details:**

[TO BE ADDED]

**Message type reference:**

[TO BE ADDED]

**QoS configuration:**

[TO BE ADDED]

**Additional notes:**

[TO BE ADDED]
