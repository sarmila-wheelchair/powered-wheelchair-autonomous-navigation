# TF Tree Structure

## 1. Overview

The TF tree describes the spatial relationships between all coordinate frames in the powered wheelchair system.

ROS 2 TF2 maintains these relationships and allows different nodes to calculate the relative position and orientation of the robot and its sensors.

The TF tree is important for:

- Robot localization.
- LiDAR and depth camera data processing.
- Mapping and obstacle detection.
- Nav2 autonomous navigation.
- Sensor visualization in Foxglove Studio.

## 2. Main TF Structure

The following is the intended high-level frame structure:

```text
map
 └── odom
      └── base_footprint
           └── base_link
                ├── velodyne
                └── camera0_link
                     └── camera0_depth_optical_frame
```

**Important:** This is a documentation-level representation. The actual live TF tree must be checked to confirm every parent-child relationship.

## 3. Transform Publishers

The project uses different ROS 2 components to publish transforms.

| Component | Transform responsibility |
|---|---|
| Wheelchair motor/odometry node | Publishes odometry-related transform, subject to its configuration. |
| AMCL | Publishes the global `map` to `odom` transform during localization. |
| Static transform publisher | Publishes fixed relationships between robot and sensor frames. |
| Other sensor drivers | May publish sensor transforms if TF publishing is enabled. |

The exact publisher configuration should be verified against the active launch files.

## 4. TF Verification Commands

Generate a TF tree report:

```bash
ros2 run tf2_tools view_frames
```

Check the main robot transform:

```bash
ros2 run tf2_ros tf2_echo odom base_footprint
```

Check the global localization transform:

```bash
ros2 run tf2_ros tf2_echo map odom
```

Check the sensor transforms:

```bash
ros2 run tf2_ros tf2_echo base_link velodyne
```

```bash
ros2 run tf2_ros tf2_echo base_link camera0_link
```

## 5. TF Visualization

Foxglove Studio can be used to visualize the robot's coordinate frames and inspect their spatial relationships.

**TF tree generated using `view_frames`:**

[INSERT IMAGE HERE]

**Foxglove 3D Scene screenshot:**

[INSERT IMAGE HERE]

## 6. Common TF Issues

Potential issues include:

- Missing coordinate frames.
- Incorrect parent-child relationships.
- Incorrect sensor mounting offsets.
- Multiple nodes publishing the same transform.
- Incorrect frame IDs in sensor messages.
- Delayed or unavailable transforms.
- Incorrect timestamps.

## 7. Additional Documentation

**Verified TF tree:**  
[TO BE ADDED]

**Transform publisher configuration:**  
[TO BE ADDED]

**TF troubleshooting notes:**  
[TO BE ADDED]
