# Costmap Configuration

## 1. Overview

Nav2 uses two costmaps to support autonomous navigation:

- **Global Costmap:** Represents obstacles across the mapped environment.
- **Local Costmap:** Represents nearby obstacles around the moving wheelchair.

## 2. Global Costmap

The global costmap is used by the planner to generate paths while considering mapped obstacles.

Previously observed configuration:

| Parameter | Value |
|---|---|
| Global Frame | `map` |
| Robot Base Frame | `base_link` |
| Resolution | 0.05 m |
| Footprint | Configured in Nav2 YAML |

## 3. Local Costmap

The local costmap provides nearby obstacle information for the controller.

Previously observed configuration:

| Parameter | Value |
|---|---|
| Global Frame | `odom` |
| Robot Base Frame | `base_link` |
| Width | 16 m |
| Height | 16 m |
| Resolution | 0.05 m |

## 4. Sensor Sources

The costmaps are configured to use sensor data from:

- Velodyne VLP-16 LiDAR.
- Intel RealSense D455 depth camera.

The exact active layer and topic configuration should be verified against `nav2_params.yaml`.

**Current sensor source configuration:**

[INSERT YAML HERE]

## 5. Costmap Visualization

**Global costmap:**

[INSERT IMAGE HERE]

**Local costmap:**

[INSERT IMAGE HERE]

## 6. Verification

Check that:

- Obstacles appear in the expected locations.
- Sensor data updates the costmaps.
- The wheelchair footprint is correctly represented.
- Nearby obstacles are reflected in the local costmap.

**Test observations:**

[TO BE ADDED]
