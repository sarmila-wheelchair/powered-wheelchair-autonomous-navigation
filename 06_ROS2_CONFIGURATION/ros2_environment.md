# ROS 2 Environment Configuration

## 1. Overview

The powered wheelchair autonomous navigation system uses ROS 2 Humble as its primary robotics middleware.

ROS 2 provides communication between the motor controller, sensors, processing nodes, localization, mapping, and autonomous navigation components.

## 2. Operating Environment

| Component | Configuration |
|---|---|
| ROS 2 Distribution | Humble |
| Robot Computer | LattePanda 3 Delta |
| Robot Operating System | [TO BE VERIFIED] |
| Development Laptop | Dell XPS 13 |
| ROS 2 Workspace | `~/ros2_ws/` |
| Navigation Package Directory | `~/wheelchair_nav2/` |

## 3. ROS 2 Installation

ROS 2 Humble is installed on the LattePanda computer.

The ROS 2 installation directory is:

```text
/opt/ros/humble/
```

The standard ROS 2 setup script is:

```bash
source /opt/ros/humble/setup.bash
```

## 4. Workspace Environment

The main workspace is:

```text
~/ros2_ws/
```

To source the workspace:

```bash
source ~/ros2_ws/install/setup.bash
```

The workspace should be sourced after the ROS 2 installation.

## 5. ROS 2 Environment Variables

The ROS 2 environment includes variables that control communication between devices.

Important variables include:

| Variable | Purpose | Configuration |
|---|---|---|
| `ROS_DISTRO` | ROS 2 distribution | `humble` |
| `ROS_DOMAIN_ID` | ROS 2 communication domain | [TO BE VERIFIED] |
| `ROS_LOCALHOST_ONLY` | Restricts communication to the local computer when enabled | [TO BE VERIFIED] |
| `RMW_IMPLEMENTATION` | Middleware implementation | [TO BE VERIFIED] |

Check the environment using:

```bash
printenv | grep -E 'ROS_|RMW_'
```

## 6. Network Communication

The LattePanda and XPS 13 communicate through the network.

ROS 2 communication settings must allow the relevant devices to discover and communicate with each other.

**Network configuration:**

[TO BE ADDED]

**ROS_DOMAIN_ID configuration:**

[TO BE ADDED]

## 7. Useful ROS 2 Commands

Check the ROS 2 distribution:

```bash
echo $ROS_DISTRO
```

List active ROS 2 nodes:

```bash
ros2 node list
```

List available topics:

```bash
ros2 topic list
```

Display ROS 2 environment variables:

```bash
printenv | grep ROS
```

## 8. Additional Information

**Installation procedure:**

[TO BE ADDED]

**Middleware configuration:**

[TO BE ADDED]

**Environment setup screenshots:**

[INSERT IMAGE HERE]

**Additional notes:**

[TO BE ADDED]
