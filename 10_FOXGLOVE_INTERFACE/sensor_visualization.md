# Sensor Visualization

## 1. Overview

Foxglove Studio visualizes sensor data from the Velodyne VLP-16 LiDAR and Intel RealSense D455 depth camera through the 3D Scene panel.

## 2. Velodyne VLP-16

| Item | Topic / Frame |
|---|---|
| Raw Point Cloud | `/velodyne_points` |
| Throttled Point Cloud | `/velodyne_points_throttled` |
| Frame | `velodyne` |

**Visualization Screenshot:**

[INSERT VLP-16 POINT CLOUD SCREENSHOT HERE]

## 3. Intel RealSense D455

| Item | Topic |
|---|---|
| Raw Point Cloud | `/camera/camera/depth/color/points` |
| Throttled Point Cloud | `/camera/camera/depth/color/points_throttled` |

**Visualization Screenshot:**

[INSERT D455 POINT CLOUD SCREENSHOT HERE]

## 4. Combined Sensor Visualization

[INSERT FOXGLOVE SCREENSHOT SHOWING BOTH SENSOR POINT CLOUDS HERE]

## 5. Verification

Confirm that:

- Both sensor point clouds are visible.
- Sensor positions match their TF frames.
- Point clouds update during operation.
