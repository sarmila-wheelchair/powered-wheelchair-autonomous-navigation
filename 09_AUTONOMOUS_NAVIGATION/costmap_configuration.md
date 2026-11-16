# Costmap Configuration

## 1. Overview

Nav2 uses two costmaps to support autonomous navigation:

- **Global Costmap:** Combines the static map and sensor observations to support global path planning.
- **Local Costmap:** Uses nearby sensor observations to support local obstacle avoidance.

## 2. Robot Coordinate Frames

Both costmaps use `base_footprint` as the robot base frame.

```text
odom
 └── base_footprint
      └── base_link
```

The static transform between `base_footprint` and `base_link` has a Z offset of 0.17 m.

## 3. Local Costmap

| Parameter | Active Configuration |
|---|---|
| Global Frame | `odom` |
| Robot Base Frame | `base_footprint` |
| Width | 6 m |
| Height | 6 m |
| Resolution | 0.05 m |
| Update Frequency | 5 Hz |
| Publish Frequency | 3 Hz |
| Rolling Window | Enabled |

**Costmap Layers:**
- Camera Layer (VoxelLayer)
- LiDAR Layer (VoxelLayer)
- Inflation Layer

## 4. Global Costmap

| Parameter | Active Configuration |
|---|---|
| Global Frame | `map` |
| Robot Base Frame | `base_footprint` |
| Width | 6 m |
| Height | 6 m |
| Resolution | 0.05 m |
| Update Frequency | 3 Hz |
| Publish Frequency | 2 Hz |
| Rolling Window | Disabled |

**Costmap Layers:**
- Static Layer
- Camera Layer (VoxelLayer)
- LiDAR Layer (VoxelLayer)
- Inflation Layer

## 5. Sensor Sources

Both costmaps use the following point cloud sources:

| Sensor | Topic | Data Type |
|---|---|---|
| RealSense D455 | `/camera/camera/depth/color/points_throttled` | PointCloud2 |
| Velodyne VLP-16 | `/velodyne_points_throttled` | PointCloud2 |

Both sources are configured for obstacle marking and clearing.

### Height Filtering

| Sensor | Minimum Height | Maximum Height |
|---|---:|---:|
| D455 | 0.07 m | 0.50 m |
| VLP-16 | 0.50 m | 1.00 m |

## 6. Inflation Layer

Both costmaps use the following inflation settings:

| Parameter | Value |
|---|---:|
| Inflation Radius | 0.7 m |
| Cost Scaling Factor | 15.0 |

## 7. Footprint Configuration

The configured robot footprint is:

```yaml
footprint: "[[-0.50, -0.40], [-0.50, 0.40], [0.50, 0.40], [0.50, -0.40]]"
```

This footprint is configured in both the local and global costmaps.

## 8. Visualization and Testing

**Local Costmap:**

[INSERT FOXGLOVE SCREENSHOT HERE]

**Global Costmap:**

[INSERT FOXGLOVE SCREENSHOT HERE]

**Testing Observations:**

[TO BE ADDED]
