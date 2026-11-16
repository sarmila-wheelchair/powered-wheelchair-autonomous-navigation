# Mapping and Localization

## 1. Overview

This section documents the mapping and localization systems used by the powered wheelchair autonomous navigation project.

The wheelchair uses ROS 2 mapping and localization components to build an environmental map, estimate its position within the mapped environment, and provide spatial information for autonomous navigation.

The project uses SLAM Toolbox for mapping and Nav2 AMCL for localization.

## 2. Mapping System

SLAM Toolbox is used to create a 2D occupancy grid map of the operating environment.

The mapping process uses LiDAR scan data and odometry information to estimate the wheelchair's movement and construct a map.

**Mapping configuration:**

[INSERT CONFIGURATION HERE]

## 3. Localization System

Nav2 AMCL (Adaptive Monte Carlo Localization) is used to estimate the wheelchair's position and orientation within a previously saved map.

AMCL uses sensor measurements and a particle filter to estimate the robot's pose.

**AMCL configuration:**

[INSERT CONFIGURATION HERE]

## 4. Map Files

Saved maps are stored in:

```text
~/wheelchair_nav2/maps/
```

Map files generally include:

| File Type | Purpose |
|---|---|
| `.yaml` | Map metadata and image reference. |
| `.pgm` | Occupancy grid image. |

Additional map formats or supporting files:

[TO BE ADDED]

## 5. TF Relationships

The mapping and localization system uses the following main coordinate frames:

```text
map
 |
 v
odom
 |
 v
base_footprint
 |
 v
base_link
```

The map-to-odometry transform is provided by the localization system, while odometry provides the relationship between `odom` and `base_footprint`.

## 6. Documentation Contents

| File | Description |
|---|---|
| `slam_toolbox_configuration.md` | SLAM Toolbox setup and parameters. |
| `map_creation.md` | Mapping procedure and map generation. |
| `saved_maps.md` | Saved map files and metadata. |
| `amcl_localization.md` | AMCL configuration and operation. |
| `initial_pose_and_particles.md` | Initial pose estimation and particle cloud. |
| `mapping_tf_relationships.md` | Coordinate frames and transform relationships. |
| `localization_testing.md` | Localization testing and accuracy evaluation. |

## 7. Supporting Materials

**Occupancy grid maps:**

[INSERT IMAGE HERE]

**SLAM Toolbox screenshots:**

[INSERT IMAGE HERE]

**AMCL particle cloud screenshots:**

[INSERT IMAGE HERE]

**Mapping and localization test results:**

[TEST RESULTS TO BE ADDED]

## 8. Additional Notes

[ADDITIONAL MAPPING AND LOCALIZATION DETAILS TO BE ADDED]
