# Map Creation

## 1. Overview

The wheelchair uses SLAM Toolbox to create 2D occupancy grid maps of its operating environment.

Maps are generated using LiDAR scan data, odometry, and TF information.

## 2. Mapping Procedure

1. Start the wheelchair ROS 2 system.
2. Verify LiDAR, odometry, and TF data.
3. Launch SLAM Toolbox in asynchronous online mode.
4. Drive the wheelchair through the environment.
5. Monitor map construction.
6. Review the completed map for accuracy and consistency.

## 3. Saving a Map

Maps are saved using the ROS 2 Nav2 map saver:

```bash
ros2 run nav2_map_server map_saver_cli \
  -f ~/wheelchair_nav2/maps/MAP_NAME
```

Replace `MAP_NAME` with the desired map filename.

The saved map normally consists of:

- A `.pgm` occupancy grid image.
- A `.yaml` metadata file.

## 4. Current Map

Latest saved map:

```text
whole_floor_map
```

Storage location:

```text
~/wheelchair_nav2/maps/
```

**Map image:**

[INSERT MAP IMAGE HERE]

## 5. Map Quality Verification

Check the saved map for:

- Missing or incomplete areas.
- Distorted walls.
- Duplicate structures.
- Alignment errors.
- Excessive mapping drift.

**Map verification results:**

[TO BE ADDED]
