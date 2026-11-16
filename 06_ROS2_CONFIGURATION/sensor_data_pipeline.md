# Sensor Data Pipeline

## 1. Overview

The powered wheelchair uses two primary perception sensors:

- Velodyne VLP-16 LiDAR.
- Intel RealSense D455 depth camera.

Both sensors provide environmental information for mapping, obstacle detection, and autonomous navigation.

ROS 2 nodes process and distribute the sensor data to the appropriate components.

## 2. VLP-16 LiDAR Data Pipeline

### 2.1 Raw Point Cloud

The VLP-16 publishes 3D point cloud data.

Topic:

`/velodyne_points`

Message type:

`sensor_msgs/msg/PointCloud2`

The raw point cloud is approximately 10 Hz under the recorded operating configuration.

### 2.2 Point Cloud Throttling

To reduce processing and visualization load, the project uses a throttled point cloud.

Topic:

`/velodyne_points_throttled`

Target frequency:

2.0 Hz

### 2.3 Point Cloud to Laser Scan

The throttled point cloud is processed by `pointcloud_to_laserscan`.

Output topic:

`/scan_filtered`

Message type:

`sensor_msgs/msg/LaserScan`

The generated 2D laser scan is used as an input for navigation and localization, depending on the active configuration.

## 3. Intel RealSense D455 Data Pipeline

### 3.1 Depth and Point Cloud Generation

The D455 publishes depth information and 3D point cloud data.

Raw point cloud topic:

`/camera/camera/depth/color/points`

Message type:

`sensor_msgs/msg/PointCloud2`

### 3.2 Point Cloud Throttling

The project uses a throttling process to reduce the point cloud publishing rate.

Throttled topic:

`/camera/camera/depth/color/points_throttled`

Target frequency:

2.0 Hz

The observed frequency has been approximately 1.85–1.88 Hz.

### 3.3 Costmap Integration

The processed D455 point cloud is used as an obstacle source for the Nav2 local costmap, subject to the active configuration.

## 4. Navigation Data Flow

The sensor data pipeline supports the following navigation functions:

- LiDAR-based environmental perception.
- Generation of 2D laser scans.
- Depth camera obstacle detection.
- Local costmap updates.
- Mapping and localization.
- Autonomous path planning and obstacle avoidance.

## 5. Simplified Sensor Data Flow Diagram

```text
          VLP-16 LiDAR
                |
                v
       /velodyne_points
                |
                v
       Point Cloud Throttle
                |
                v
  /velodyne_points_throttled
                |
                v
    Point Cloud to Laser Scan
                |
                v
          /scan_filtered
                |
                v
       Mapping / Localization
          / Nav2 Costmaps


        RealSense D455
                |
                v
   Raw Depth / Point Cloud
                |
                v
       Point Cloud Throttle
                |
                v
 /camera/.../points_throttled
                |
                v
       Nav2 Local Costmap
```

**Note:** This is a simplified documentation diagram. Confirm the actual topic connections in the active launch files and Nav2 configuration.

## 6. Performance Considerations

Point cloud processing can place a significant load on the robot computer and visualization laptop.

The project uses throttling to reduce unnecessary processing.

Important considerations include:

- Point cloud publishing frequency.
- Sensor image resolution.
- CPU utilization.
- Costmap update frequency.
- Foxglove visualization performance.
- Network bandwidth.

## 7. Verification Commands

Check LiDAR publishing frequency:

```bash
ros2 topic hz /velodyne_points
```

Check throttled LiDAR frequency:

```bash
ros2 topic hz /velodyne_points_throttled
```

Check filtered scan frequency:

```bash
ros2 topic hz /scan_filtered
```

Check D455 throttled point cloud frequency:

```bash
ros2 topic hz /camera/camera/depth/color/points_throttled
```

Inspect topic connections:

```bash
ros2 topic info /scan_filtered
```

## 8. Supporting Materials

**Complete sensor data flow diagram:**

[INSERT IMAGE HERE]

**LiDAR point cloud visualization:**

[INSERT IMAGE HERE]

**D455 point cloud visualization:**

[INSERT IMAGE HERE]

**Filtered laser scan visualization:**

[INSERT IMAGE HERE]

## 9. Additional Information

**Verified topic connections:**

[TO BE ADDED]

**Point cloud filtering configuration:**

[TO BE ADDED]

**Performance measurements:**

[TO BE ADDED]

**Additional processing nodes:**

[TO BE ADDED]
