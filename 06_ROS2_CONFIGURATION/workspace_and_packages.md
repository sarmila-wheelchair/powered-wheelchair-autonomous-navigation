# ROS 2 Workspace and Packages

## 1. Overview

The powered wheelchair project uses ROS 2 workspaces to organize its software packages, source code, and executable nodes.

The main workspace is located on the LattePanda 3 Delta.

## 2. Main ROS 2 Workspace

Workspace location:

```text
~/ros2_ws/
```

Main workspace structure:

```text
ros2_ws/
├── build/
├── install/
├── log/
└── src/
    └── basicmicro_ros2/
```

The `src` directory contains the source packages used by the project.

## 3. RoboClaw ROS 2 Package

Package name:

`basicmicro_ros2`

Package location:

```text
~/ros2_ws/src/basicmicro_ros2/
```

Main functionality:

- Communicates with the RoboClaw motor controller.
- Sends motor speed commands.
- Reads wheel encoder information.
- Processes wheel odometry.
- Publishes robot odometry information.

Main node:

`/basicmicro_node`

Main source file:

```text
basicmicro_ros2/basicmicro_node.py
```

**Additional package files:**

[TO BE ADDED]

## 4. Wheelchair Navigation Package

Project directory:

```text
~/wheelchair_nav2/
```

Main directory structure:

```text
wheelchair_nav2/
├── launch/
├── config/
├── maps/
└── scripts/
```

### Directory Functions

| Directory | Purpose |
|---|---|
| `launch/` | Launch files for the wheelchair system. |
| `config/` | Navigation and sensor configuration files. |
| `maps/` | Saved maps used for localization and navigation. |
| `scripts/` | Custom Python scripts and project utilities. |

## 5. Important Project Files

| File | Location |
|---|---|
| Main system launch file | `launch/wheelchair_system.launch.py` |
| Nav2 configuration | `config/nav2_params.yaml` |
| D455 configuration | `config/d455.yaml` |
| Custom destination navigation node | `scripts/place_nav_node.py` |

## 6. Useful Workspace Commands

List packages in the workspace:

```bash
cd ~/ros2_ws
colcon list
```

Build a specific package:

```bash
cd ~/ros2_ws
colcon build --packages-select basicmicro_ros2 --symlink-install
```

Source the workspace:

```bash
source ~/ros2_ws/install/setup.bash
```

List installed ROS 2 packages:

```bash
ros2 pkg list
```

## 7. Additional Packages

Other packages used by the project include:

| Package | Purpose |
|---|---|
| `nav2_bringup` | Nav2 system bringup. |
| `nav2_map_server` | Map loading and saving. |
| `nav2_amcl` | Adaptive Monte Carlo localization. |
| `slam_toolbox` | SLAM and map generation. |
| `velodyne` | Velodyne LiDAR driver components. |
| `realsense2_camera` | Intel RealSense camera driver. |
| `pointcloud_to_laserscan` | Converts point clouds into laser scans. |
| `foxglove_bridge` | Connects ROS 2 data to Foxglove Studio. |

Verify the installed package list before finalizing this table.

## 8. Additional Documentation

**Complete workspace directory listing:**

[TO BE ADDED]

**Complete package list:**

[TO BE ADDED]

**Package dependencies:**

[TO BE ADDED]

**Additional source code locations:**

[TO BE ADDED]
