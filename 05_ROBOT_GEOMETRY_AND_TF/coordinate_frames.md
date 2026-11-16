# Robot Coordinate Frames

## 1. Overview

The powered wheelchair uses ROS 2 TF2 (Transform Library 2) to manage coordinate frames.

Coordinate frames describe the position and orientation of the robot, sensors, and environment relative to one another.

They are essential for mapping, localization, sensor processing, and autonomous navigation.

## 2. Main Coordinate Frames

| Frame ID | Description |
|---|---|
| `map` | Global reference frame used by the saved map and localization system. |
| `odom` | Local odometry reference frame representing the robot's movement over time. |
| `base_footprint` | Floor-level reference frame for the wheelchair. |
| `base_link` | Main robot reference frame, positioned approximately 17 cm above the floor. |
| `velodyne` | Coordinate frame associated with the VLP-16 LiDAR. |
| `camera0_link` | Reference frame associated with the Intel RealSense D455 camera. |
| `camera0_depth_optical_frame` | Optical reference frame used by the D455 depth sensor. |

## 3. Important Frame Relationships

The main robot frame relationships include:

- `map` → `odom`
- `odom` → `base_footprint`
- `base_footprint` → `base_link`
- `base_link` → sensor frames

The exact active parent-child relationships must be verified using the live TF tree.

## 4. Base Frame Configuration

### 4.1 base_footprint

The `base_footprint` frame represents the wheelchair at floor level.

It is used as a reference for the robot's planar movement.

### 4.2 base_link

The `base_link` frame represents the main robot reference point.

The recorded vertical distance between `base_footprint` and `base_link` is approximately 0.17 m.

**Recorded transform:**

[TO BE VERIFIED AGAINST LIVE TF]

## 5. Sensor Frames

### 5.1 VLP-16 LiDAR

The LiDAR publishes sensor data using its configured frame ID.

Recorded frame:

`velodyne`

### 5.2 Intel RealSense D455

The D455 uses camera-specific frames, including:

- `camera0_link`
- `camera0_depth_optical_frame`

The camera's optical frame is important when interpreting depth and point cloud data.

## 6. TF Verification

The TF tree can be inspected using:

```bash
ros2 run tf2_tools view_frames
```

Individual transforms can be checked using:

```bash
ros2 run tf2_ros tf2_echo base_footprint base_link
```

Replace the frame names to inspect other relationships.

## 7. Supporting Materials

**Coordinate frame diagram:**

[INSERT IMAGE HERE]

**Live TF tree screenshot from Foxglove Studio:**

[INSERT IMAGE HERE]

**Additional frame details:**

[TO BE ADDED]
