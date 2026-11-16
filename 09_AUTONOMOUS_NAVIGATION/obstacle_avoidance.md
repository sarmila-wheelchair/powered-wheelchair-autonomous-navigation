# Obstacle Avoidance

## 1. Overview

The wheelchair uses the Velodyne VLP-16 LiDAR and Intel RealSense D455 depth camera to detect obstacles during autonomous navigation.

Nav2 processes their sensor data through the local and global costmaps.

## 2. Obstacle Detection Sources

| Sensor | Input Topic | Processing |
|---|---|---|
| Velodyne VLP-16 | `/velodyne_points_throttled` | 3D point cloud |
| RealSense D455 | `/camera/camera/depth/color/points_throttled` | 3D point cloud |

Both sensors provide obstacle marking and clearing data to the costmaps.

## 3. LiDAR Scan Processing

The VLP-16 point cloud is also converted into a filtered 2D laser scan.

| Parameter | Configuration |
|---|---|
| Input | `/velodyne_points_throttled` |
| Output | `/scan_filtered` |
| Target Frame | `base_footprint` |
| Minimum Height | 0.50 m |
| Maximum Height | 1.00 m |
| Maximum Range | 5.0 m |

## 4. D455 Scan Processing

The D455 point cloud is converted into a separate filtered 2D scan.

| Parameter | Configuration |
|---|---|
| Input | `/camera/camera/depth/color/points_throttled` |
| Output | `/d455_scan_filtered` |
| Target Frame | `base_footprint` |
| Minimum Height | 0.07 m |
| Maximum Height | 0.50 m |
| Maximum Range | 2.0 m |

## 5. Obstacle Avoidance

The DWB controller evaluates candidate trajectories using costmap information and obstacle-related critics, including:

- `BaseObstacle`
- `ObstacleFootprint`

This helps the wheelchair select trajectories that account for detected obstacles.

## 6. Testing

**Obstacle detection and avoidance observations:**

[ADD TEST RESULTS AND FOXGLOVE SCREENSHOTS HERE]
