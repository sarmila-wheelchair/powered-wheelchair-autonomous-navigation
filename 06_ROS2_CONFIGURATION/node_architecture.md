# ROS 2 Node Architecture

## 1. Overview

The powered wheelchair uses multiple ROS 2 nodes to control the motors, process sensor data, estimate robot position, generate maps, and perform autonomous navigation.

Each node performs a specific function and communicates with other nodes through ROS 2 topics, services, or actions.

All robot-side ROS 2 nodes run on the LattePanda 3 Delta.

## 2. Main ROS 2 Nodes

| Node / Component | Main Function |
|---|---|
| `/basicmicro_node` | Communicates with the RoboClaw motor controller, controls motor speeds, reads encoder data, and publishes odometry. |
| Velodyne driver | Receives and processes VLP-16 LiDAR data. |
| RealSense camera node | Publishes D455 depth and point cloud data. |
| `pointcloud_to_laserscan` | Converts selected 3D point cloud data into a 2D laser scan. |
| `slam_toolbox` | Performs simultaneous localization and mapping when mapping mode is used. |
| `/amcl` | Estimates the wheelchair's position on a saved map. |
| Nav2 nodes | Perform path planning, obstacle avoidance, and autonomous navigation. |
| `place_nav_node` | Provides custom destination navigation commands. |
| Foxglove Bridge | Streams ROS 2 data to Foxglove Studio. |

**Note:** Some components may contain multiple ROS 2 nodes. Verify their exact runtime names using `ros2 node list`.

## 3. Motor Control and Odometry

### RoboClaw Node

Node name:

`/basicmicro_node`

Package:

`basicmicro_ros2`

Main responsibilities:

- Communicating with the RoboClaw controller.
- Sending left and right motor speed commands.
- Reading wheel encoder counts.
- Calculating wheel odometry.
- Publishing `/odom`.

The motor controller communicates through a serial connection.

Recorded serial device:

`/dev/ttyACM0`

## 4. Sensor Processing Nodes

### Velodyne VLP-16

Receives LiDAR measurements and publishes 3D point cloud data.

Main topic:

`/velodyne_points`

A throttled point cloud is also used:

`/velodyne_points_throttled`

### Intel RealSense D455

Publishes depth images and point cloud information.

The project uses a throttled point cloud for processing:

`/camera/camera/depth/color/points_throttled`

### Point Cloud to Laser Scan

Converts selected point cloud data into a 2D laser scan for navigation.

The filtered scan topic is:

`/scan_filtered`

Verify the active input topic and conversion parameters in the launch configuration.

## 5. Mapping and Localization Nodes

### SLAM Toolbox

Used during mapping to construct an occupancy grid map from sensor data and robot movement.

### AMCL

Used during localization to estimate the wheelchair's position on an existing map.

AMCL publishes the global transform between `map` and `odom`.

## 6. Autonomous Navigation Nodes

Nav2 provides the main autonomous navigation functionality.

Its responsibilities include:

- Global path planning.
- Local trajectory planning.
- Obstacle avoidance.
- Costmap generation.
- Navigation behavior execution.
- Goal management.

The custom destination navigation node provides an interface for sending predefined destination goals.

## 7. Foxglove Visualization

Foxglove Bridge runs on the LattePanda.

Foxglove Studio runs on the XPS 13 and connects to the bridge to visualize robot data.

The interface is used to monitor:

- Robot position and odometry.
- TF frames.
- LiDAR point clouds.
- Depth camera point clouds.
- Maps and costmaps.
- Navigation goals and paths.
- Robot navigation status.

## 8. Node Architecture Diagram

[INSERT ROS 2 NODE ARCHITECTURE DIAGRAM HERE]

## 9. Runtime Verification

List active nodes:

```bash
ros2 node list
```

Inspect a node:

```bash
ros2 node info /basicmicro_node
```

Inspect active topics:

```bash
ros2 topic list
```

## 10. Additional Information

**Verified complete node list:**

[TO BE ADDED]

**Node communication diagram:**

[INSERT IMAGE HERE]

**Node configuration and parameters:**

[TO BE ADDED]

**Additional notes:**

[TO BE ADDED]
