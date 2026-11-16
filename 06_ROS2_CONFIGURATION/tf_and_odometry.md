# TF and Odometry Configuration

## 1. Overview

The powered wheelchair uses wheel encoder feedback and ROS 2 TF2 to estimate its movement and maintain relationships between coordinate frames.

Odometry provides an estimate of the wheelchair's position, orientation, and velocity over time.

TF2 distributes the coordinate transforms required by mapping, localization, sensor processing, and autonomous navigation.

## 2. Odometry Source

The RoboClaw motor controller provides wheel encoder measurements.

The custom ROS 2 driver processes these measurements to calculate wheelchair odometry.

Package:

`basicmicro_ros2`

Node:

`/basicmicro_node`

Main source file:

```text
~/ros2_ws/src/basicmicro_ros2/
```

## 3. Odometry Topic

Main odometry topic:

`/odom`

Message type:

`nav_msgs/msg/Odometry`

Recorded frame configuration:

| Field | Frame |
|---|---|
| Header frame | `odom` |
| Child frame | `base_footprint` |

The driver publishes odometry information based on wheel encoder feedback.

## 4. Recorded Odometry Parameters

The following values were previously inspected or used during project development.

| Parameter | Recorded Value |
|---|---:|
| Wheel radius | 0.165 m |
| Wheel separation | 0.493 m |
| Encoder counts per revolution | 233102 |
| Gear ratio | 1.0 |

**Important:** These are historical recorded driver parameters. Verify the current driver configuration and physical calibration before treating them as final values.

## 5. TF Frame Relationships

The main transform relationships include:

```text
map
 └── odom
      └── base_footprint
           └── base_link
```

The main transform responsibilities are:

| Transform | Publisher / Source |
|---|---|
| `map` → `odom` | AMCL during localization |
| `odom` → `base_footprint` | Wheelchair odometry driver |
| `base_footprint` → `base_link` | Static transform publisher |

Verify the active configuration and ensure that each transform has only one publisher.

## 6. Odometry and TF Verification

Check odometry data:

```bash
ros2 topic echo /odom
```

Check odometry publishing frequency:

```bash
ros2 topic hz /odom
```

Check the robot transform:

```bash
ros2 run tf2_ros tf2_echo odom base_footprint
```

Check the base frame transform:

```bash
ros2 run tf2_ros tf2_echo base_footprint base_link
```

## 7. Odometry Calibration

Odometry accuracy depends on:

- Correct wheel radius.
- Correct wheel separation.
- Accurate encoder readings.
- Correct motor direction configuration.
- Proper encoder scaling.
- Consistent physical wheel movement.

Previous calibration tests included a 1 m forward movement test and a 360-degree right-turn test.

**Detailed calibration measurements and results:**

[TO BE ADDED]

## 8. Odometry and TF Visualization

**Odometry data in Foxglove Studio:**

[INSERT IMAGE HERE]

**TF visualization:**

[INSERT IMAGE HERE]

**Wheelchair movement test:**

[INSERT VIDEO OR IMAGE HERE]

## 9. Additional Information

**Verified driver parameters:**

[TO BE ADDED]

**Odometry source code:**

[INSERT CODE HERE]

**Calibration procedure:**

[TO BE ADDED]

**Additional TF troubleshooting notes:**

[TO BE ADDED]
