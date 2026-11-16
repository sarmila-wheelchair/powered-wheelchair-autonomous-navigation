# Robot Geometry and TF

This section documents the physical dimensions, coordinate frames, sensor mounting positions, and Transform (TF) configuration of the powered wheelchair.

Accurate geometry and TF configuration are important for:
- Correct robot localization and odometry.
- Accurate sensor positioning in the robot's coordinate system.
- Mapping and obstacle detection.
- Nav2 path planning and autonomous navigation.
- Correct visualization in Foxglove Studio.

## Contents

| File | Description |
|---|---|
| `robot_dimensions.md` | Physical dimensions of the wheelchair. |
| `coordinate_frames.md` | Explanation of the robot's coordinate frames. |
| `static_transforms.md` | Static TF relationships between the robot and sensors. |
| `tf_tree.md` | Overview of the complete TF tree. |
| `footprint_configuration.md` | Robot footprint used by Nav2. |
| `sensor_mounting_positions.md` | Mounting positions of the Velodyne and RealSense sensors. |

## Important Notes

- `base_footprint` represents the wheelchair at floor level.
- `base_link` is positioned approximately 0.17 m above the floor.
- Physical measurements and software configuration values must be documented separately where they differ.
- All TF values should be verified against the actual launch files and robot configuration before being treated as final.

## Documentation Status

Some measurements, transform values, and configuration details still require verification.

**Pending additions:**
- [TO BE ADDED] Verified robot dimension diagram.
- [TO BE ADDED] Complete TF tree screenshot.
- [TO BE ADDED] Verified static transform values.
- [TO BE ADDED] Sensor mounting photographs.
