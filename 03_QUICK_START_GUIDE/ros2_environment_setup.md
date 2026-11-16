# ROS 2 Environment Setup

## 1. Purpose

This document describes the ROS 2 environment used by the powered wheelchair autonomous navigation system and explains which computer runs the robot software.

## 2. ROS 2 Distribution

The project uses:

- **ROS 2 distribution:** Humble
- **Operating environment:** Ubuntu
- **Main robot computer:** LattePanda 3 Delta

## 3. Computer Responsibilities

### 3.1 LattePanda 3 Delta

The LattePanda is the main robot computer. It runs:

- ROS 2 Humble
- RoboClaw motor controller driver
- Velodyne VLP-16 driver
- Intel RealSense D455 driver
- SLAM Toolbox
- AMCL
- Nav2
- Wheelchair system launch files
- Supporting ROS 2 nodes

### 3.2 Dell XPS 13

The XPS is used for remote development and monitoring. It runs:

- SSH client for accessing the LattePanda
- Foxglove Bridge
- Foxglove Studio
- Development and monitoring tools

**Important:** The ROS 2 workspace and robot launch files on the LattePanda are separate from any local workspace on the XPS. Editing a local XPS copy does not automatically update the LattePanda.

## 4. ROS 2 Workspace

The main robot workspace on the LattePanda is:

```text
~/ros2_ws
```

The RoboClaw ROS 2 driver package is located at:

```text
~/ros2_ws/src/basicmicro_ros2
```

The wheelchair navigation project files are located at:

```text
~/wheelchair_nav2
```

## 5. ROS 2 Environment Variables

The ROS 2 environment may use the following variables:

| Variable | Purpose |
|---|---|
| `ROS_DOMAIN_ID` | Identifies the ROS 2 communication domain |
| `ROS_LOCALHOST_ONLY` | Controls whether ROS 2 communication is restricted to the local computer |
| `ROS_DISTRO` | Identifies the installed ROS 2 distribution |

The actual values should be checked on each computer before changing the environment configuration.

## 6. Loading the ROS 2 Environment

On the LattePanda, the ROS 2 Humble environment must be available before running ROS 2 commands.

The standard ROS 2 environment setup command is:

```bash
source /opt/ros/humble/setup.bash
```

To use packages built in the main workspace, also source:

```bash
source ~/ros2_ws/install/setup.bash
```

If the wheelchair navigation workspace has its own built environment, source its setup file when required:

```bash
source ~/wheelchair_nav2/install/setup.bash
```

Only source workspace setup files that exist and are required for the task.

## 7. Verification Commands

Use these commands on the LattePanda to check the ROS 2 environment:

Check the ROS 2 distribution:

```bash
echo $ROS_DISTRO
```

Check the ROS 2 domain:

```bash
echo $ROS_DOMAIN_ID
```

Check the localhost setting:

```bash
echo $ROS_LOCALHOST_ONLY
```

Check available ROS 2 nodes:

```bash
ros2 node list
```

Check available ROS 2 topics:

```bash
ros2 topic list
```

## 8. Important Notes

- Run robot hardware drivers and navigation nodes on the LattePanda.
- Run Foxglove Bridge and Foxglove Studio on the XPS.
- Confirm which computer's terminal is active before executing commands.
- Do not modify environment variables without checking the existing working configuration.
- Record changes to ROS 2 packages, workspace setup, and environment settings in the development log.
