# Mapping TF Relationships

## 1. Overview

The mapping and localization system relies on TF2 coordinate transforms to track the wheelchair's position relative to the environment.

## 2. Main TF Tree

The main coordinate frame relationships are:

```text
map
 └── odom
      └── base_footprint
           └── base_link
```

## 3. Transform Publishers

| Transform | Publisher | Purpose |
|---|---|---|
| `map → odom` | AMCL | Connects the map and odometry frames. |
| `odom → base_footprint` | RoboClaw odometry driver | Tracks wheelchair movement. |
| `base_footprint → base_link` | Static transform publisher | Represents the vertical offset between the base frames. |

## 4. Sensor Frames

The LiDAR and D455 are connected to the wheelchair's base coordinate frame through static transforms.

**Sensor frame relationships:**

[INSERT TF TREE SCREENSHOT HERE]

**Current transform values:**

[INSERT VERIFIED TRANSFORM VALUES HERE]

## 5. Verification

Generate a TF frame diagram using:

```bash
ros2 run tf2_tools view_frames
```

Check that:

- All required frames are connected.
- Transform directions are correct.
- Static transforms remain consistent.
- Odometry updates during movement.
- The map-to-odometry transform updates during localization.

**TF verification results:**

[TO BE ADDED]
