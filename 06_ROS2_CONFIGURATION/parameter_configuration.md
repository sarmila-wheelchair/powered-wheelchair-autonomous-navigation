# ROS 2 Parameter Configuration

## 1. Overview

ROS 2 parameters allow nodes to be configured without modifying their source code.

The powered wheelchair uses YAML configuration files and runtime parameters to control sensor behavior, robot geometry, localization, mapping, and autonomous navigation.

## 2. Main Configuration Directory

Location:

```text
~/wheelchair_nav2/config/
```

## 3. Nav2 Parameter Configuration

Main file:

`nav2_params.yaml`

Full path:

```text
~/wheelchair_nav2/config/nav2_params.yaml
```

This file contains parameters for the Nav2 navigation system.

Main configuration components include:

| Component | Function |
|---|---|
| AMCL | Robot localization on a saved map. |
| Map Server | Loads the occupancy grid map. |
| Planner Server | Generates global navigation paths. |
| Controller Server | Calculates local movement commands. |
| Behavior Server | Executes navigation recovery behaviors. |
| BT Navigator | Manages navigation behavior trees. |
| Local Costmap | Represents nearby obstacles. |
| Global Costmap | Represents obstacles across the map. |
| Velocity Smoother | Smooths velocity commands before motor control. |

## 4. RealSense D455 Configuration

File:

`d455.yaml`

Location:

```text
~/wheelchair_nav2/config/d455.yaml
```

Recorded camera settings include:

| Parameter | Recorded Value |
|---|---|
| Camera name | `camera0` |
| Image resolution | 424 × 240 |
| Frame rate | 15 FPS |
| Exposure | 900 |
| Gain | 16 |
| Point cloud | Enabled |
| Align depth to color | Enabled |
| Decimation filter | 2 |
| Publish TF | Disabled |

These are recorded settings and should be checked against the active configuration.

## 5. Runtime Parameters

ROS 2 allows parameters to be inspected and changed while nodes are running.

List node parameters:

```bash
ros2 param list /basicmicro_node
```

Get a parameter:

```bash
ros2 param get /basicmicro_node wheel_radius
```

Set a parameter:

```bash
ros2 param set /basicmicro_node wheel_radius 0.165
```

**Important:** Only change parameters when their effects are understood. A runtime parameter change may not persist after restarting the node.

## 6. Parameter Verification

Inspect the Nav2 configuration:

```bash
nano ~/wheelchair_nav2/config/nav2_params.yaml
```

Inspect the camera configuration:

```bash
nano ~/wheelchair_nav2/config/d455.yaml
```

List parameters for a running node:

```bash
ros2 param list /controller_server
```

## 7. Configuration Management

Important practices:

- Keep backups before modifying YAML files.
- Document the reason for parameter changes.
- Record tested values and their results.
- Verify that launch files load the intended configuration.
- Distinguish between recorded historical values and currently active values.

## 8. Configuration Screenshots

**Nav2 YAML configuration:**

[INSERT IMAGE HERE]

**D455 YAML configuration:**

[INSERT IMAGE HERE]

**Runtime parameter inspection:**

[INSERT IMAGE HERE]

## 9. Additional Information

**Complete Nav2 parameter reference:**

[TO BE ADDED]

**Other sensor configuration files:**

[TO BE ADDED]

**Parameter tuning history:**

[TO BE ADDED]

**Verified final configuration:**

[TO BE ADDED]
