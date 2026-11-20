# Robot Coordinate Frames

## 1. Main Coordinate Frames

| Frame ID | Description |
|---|---|
| `map` | Global reference frame used by the saved map and localization system. |
| `odom` | Local odometry reference frame representing the robot's movement over time. |
| `base_footprint` | Floor-level reference frame for the wheelchair. |
| `base_link` | Main robot reference frame, positioned approximately 17 cm above the floor(at motor shaft). |
| `velodyne` | Coordinate frame associated with the VLP-16 LiDAR. |
| `camera0_link` | Reference frame associated with the Intel RealSense D455 camera. |
| `camera0_depth_optical_frame` | Optical reference frame used by the D455 depth sensor. |

## 2. Important Frame Relationships

The main robot frame relationships include:

- `map` → `odom`
- `odom` → `base_footprint`
- `base_footprint` → `base_link`
- `base_link` → sensor frames

The exact active parent-child relationships must be verified using the live TF tree.

## 3. Base Frame Configuration

### 3.1 base_footprint

The `base_footprint` frame represents the wheelchair at floor level.

It is used as a reference for the robot's planar movement.

### 3.2 base_link

The `base_link` frame represents the main robot reference point.

The recorded vertical distance between `base_footprint` and `base_link` is  0.17 m.



**Additional frame details:**

[TO BE ADDED]
