# Autonomous Navigation

## 1. Overview

This section documents the autonomous navigation system implemented on the powered wheelchair using ROS 2 Humble and Nav2.

The system enables the wheelchair to plan paths, avoid obstacles, and navigate toward selected destinations using its map, localization, odometry, and sensor data.

## 2. Navigation Components

The navigation system includes:

- Nav2 navigation framework.
- Global and local costmaps.
- Global path planner.
- Local trajectory controller (DWB).
- AMCL localization.
- LiDAR and depth camera obstacle data.
- Velocity smoothing.
- Custom destination navigation node.

## 3. Configuration

Main Nav2 configuration:

```text
~/wheelchair_nav2/config/nav2_params.yaml
```

Main launch file:

```text
~/wheelchair_nav2/launch/wheelchair_system.launch.py
```

## 4. Navigation Interface

The wheelchair supports predefined destination selection through a custom Foxglove Studio panel.

The interface provides six destination buttons and a navigation cancellation button.

**Foxglove navigation interface:**

[INSERT IMAGE HERE]

## 5. Documentation Contents

| File | Description |
|---|---|
| `nav2_architecture.md` | Navigation system architecture. |
| `nav2_configuration.md` | Nav2 parameters and configuration. |
| `costmap_configuration.md` | Global and local costmaps. |
| `path_planning.md` | Global path planning. |
| `dwb_controller.md` | Local trajectory control. |
| `obstacle_avoidance.md` | Sensor-based obstacle detection and avoidance. |
| `navigation_execution.md` | Sending and executing navigation goals. |
| `recovery_behaviours.md` | Navigation recovery behaviours. |
| `navigation_testing.md` | Autonomous navigation testing. |

## 6. Supporting Materials

**Navigation screenshots:**

[INSERT IMAGE HERE]

**Navigation test results:**

[TEST RESULTS TO BE ADDED]
