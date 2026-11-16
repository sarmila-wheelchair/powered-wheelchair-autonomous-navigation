# Sensor Mounting Positions

## 1. Overview

The powered wheelchair uses two primary perception sensors:

1. Velodyne VLP-16 LiDAR.
2. Intel RealSense D455 depth camera.

Both sensors provide environmental information for mapping, localization, obstacle detection, and autonomous navigation.

Their physical mounting positions must correspond to their configured ROS 2 transforms.

## 2. Velodyne VLP-16 LiDAR

### 2.1 Sensor Information

| Parameter | Details |
|---|---|
| Sensor | Velodyne VLP-16 |
| Frame ID | `velodyne` |
| Approximate position | Rear side of `base_link` |
| Approximate horizontal offset | 0.50 m behind `base_link` |
| Height above floor | Approximately 1.32–1.35 m |
| Network IP | `192.168.1.201` |
| Data type | 3D point cloud |

### 2.2 Function

The VLP-16 provides 3D LiDAR measurements of the surrounding environment.

Its data is used for:

- Environmental mapping.
- Obstacle detection.
- Point cloud visualization.
- Generating filtered 2D laser scans for Nav2.

### 2.3 Mounting Images

**VLP-16 mounting photograph:**

[INSERT IMAGE HERE]

**VLP-16 mounting position diagram:**

[INSERT IMAGE HERE]

## 3. Intel RealSense D455

### 3.1 Sensor Information

| Parameter | Details |
|---|---|
| Sensor | Intel RealSense D455 |
| Camera name | `camera0` |
| Camera frame | `camera0_link` |
| Optical frame | `camera0_depth_optical_frame` |
| Approximate forward offset | 0.35 m from `base_link` |
| Approximate left offset | 0.18 m from `base_link` |
| Mounting height | Approximately 0.28–0.29 m above floor |
| Data type | Depth images and 3D point clouds |

### 3.2 Function

The D455 provides depth information and 3D point clouds of nearby objects.

Its data is used for:

- Close-range obstacle detection.
- 3D environmental visualization.
- Local costmap obstacle information.
- Detecting objects that may not be represented adequately by the LiDAR scan.

### 3.3 Mounting Images

**D455 mounting photograph:**

[INSERT IMAGE HERE]

**D455 mounting position diagram:**

[INSERT IMAGE HERE]

## 4. Sensor Position Reference

Both sensor positions are described relative to the robot's main reference frame.

The recorded physical measurements are approximate and must be checked against the active static transforms.

| Sensor | Reference frame | Position verification |
|---|---|---|
| VLP-16 | `base_link` | [TO BE VERIFIED] |
| D455 | `base_link` | [TO BE VERIFIED] |

## 5. Sensor Alignment and Calibration

Correct sensor alignment is important for accurate mapping and obstacle detection.

Verification should include:

- Confirming sensor orientation.
- Checking mounting stability.
- Comparing physical measurements with TF transforms.
- Checking point cloud alignment in Foxglove Studio.
- Confirming that sensor data appears in the correct robot position.

## 6. Additional Information

**Final verified sensor coordinates:**  
[TO BE ADDED]

**Sensor mounting measurements:**  
[TO BE ADDED]

**Calibration procedure:**  
[TO BE ADDED]

**Additional photographs and diagrams:**  
[INSERT HERE]
