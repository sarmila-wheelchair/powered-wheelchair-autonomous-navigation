# SLAM Toolbox Configuration

## 1. Overview

SLAM Toolbox is used in the powered wheelchair project to perform Simultaneous Localization and Mapping (SLAM).

It allows the wheelchair to build a 2D map of its environment while estimating its movement within that environment.

The project uses the asynchronous online SLAM mode.

## 2. Software Configuration

| Parameter | Configuration |
|---|---|
| ROS 2 Distribution | Humble |
| SLAM Package | `slam_toolbox` |
| Mapping Mode | Online Asynchronous |
| Main Node | `slam_toolbox` |
| Map Type | 2D Occupancy Grid |
| Map Resolution | 0.05 m (previously configured) |
| Simulation Time | Disabled (`false`) |

**Current configuration file:**

[INSERT CONFIGURATION FILE PATH]

## 3. Sensor Inputs

The mapping system uses LiDAR scan data and odometry information.

| Input | Description |
|---|---|
| Laser Scan | Provides environmental measurements. |
| Odometry | Provides estimated wheelchair movement. |
| TF | Provides coordinate frame relationships. |

The scan topic used in the mapping configuration should be verified against the active launch file.

Previously configured scan topic:

```text
/scan
```

**Current scan topic:**

[TO BE VERIFIED]

## 4. Coordinate Frames

The mapping configuration uses the following frames:

| Frame Parameter | Previously Configured Value |
|---|---|
| Map Frame | `map` |
| Odometry Frame | `odom` |
| Base Frame | `base_link` |

Verify these values against the current SLAM Toolbox configuration.

## 5. Launching SLAM Toolbox

The project uses the asynchronous online SLAM node.

Example command:

```bash
ros2 launch slam_toolbox online_async_launch.py
```

**Note:** Confirm the actual launch command and parameters used in the current system before running it alongside the main wheelchair launch file.

## 6. Mapping Process

The general mapping workflow is:

1. Start the wheelchair's ROS 2 system.
2. Verify LiDAR scan data.
3. Verify odometry and TF availability.
4. Start SLAM Toolbox.
5. Drive the wheelchair through the environment.
6. Allow the mapping system to build the occupancy grid.
7. Review the resulting map.
8. Save the completed map.

## 7. Configuration Parameters

**Current SLAM Toolbox YAML configuration:**

[INSERT CODE HERE]

Important parameters to document include:

- Scan topic.
- Map frame.
- Odometry frame.
- Base frame.
- Map resolution.
- Minimum and maximum laser range.
- Scan matching settings.
- Loop closure settings.
- Transform publication settings.

## 8. Mapping Screenshots

**SLAM Toolbox running:**

[INSERT IMAGE HERE]

**Map during construction:**

[INSERT IMAGE HERE]

**Completed map:**

[INSERT IMAGE HERE]

## 9. Testing and Verification

Mapping should be evaluated for:

- Map completeness.
- Wall alignment.
- Consistency of repeated structures.
- Loop closure performance.
- Odometry drift.
- Map quality after completing a full exploration route.

**Mapping test results:**

[TEST RESULTS TO BE ADDED]

## 10. Additional Notes

[ADDITIONAL SLAM CONFIGURATION DETAILS TO BE ADDED]
