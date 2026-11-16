# ROS 2 Configuration

## 1. Overview

This section documents the ROS 2 software architecture and configuration used in the powered wheelchair autonomous navigation project.

The system is built using **ROS 2 Humble** and runs on a LattePanda 3 Delta computer.

ROS 2 provides the communication framework connecting the wheelchair's motor controller, sensors, odometry, mapping, localization, and autonomous navigation components.

## 2. ROS 2 System Architecture

The main ROS 2 components include:

- RoboClaw motor controller interface.
- Wheel encoder and odometry processing.
- Velodyne VLP-16 LiDAR driver.
- Intel RealSense D455 camera driver.
- TF2 transform system.
- Point cloud processing.
- Laser scan generation.
- SLAM Toolbox.
- AMCL localization.
- Nav2 autonomous navigation.
- Foxglove Bridge.

The robot's ROS 2 nodes and Foxglove Bridge run on the LattePanda 3 Delta.

Foxglove Studio runs on the separate XPS 13 laptop.

## 3. ROS 2 Workspace

The main ROS 2 workspace is:

```text
~/ros2_ws/
```

The RoboClaw ROS 2 package is located at:

```text
~/ros2_ws/src/basicmicro_ros2/
```

Additional workspace packages:

[TO BE ADDED]

## 4. Project Configuration Directory

The wheelchair navigation package uses the following directory:

```text
~/wheelchair_nav2/
```

Important configuration locations:

| File or Directory | Purpose |
|---|---|
| `launch/` | Main robot and navigation launch files. |
| `config/` | ROS 2 parameter and sensor configuration files. |
| `maps/` | Saved occupancy grid maps. |
| `scripts/` | Custom ROS 2 Python scripts. |

## 5. Documentation Contents

| File | Description |
|---|---|
| `ros2_environment.md` | ROS 2 installation and environment configuration. |
| `workspace_and_packages.md` | Workspace structure and installed packages. |
| `node_architecture.md` | ROS 2 nodes and their responsibilities. |
| `topics_and_messages.md` | Important ROS 2 topics and message types. |
| `launch_files.md` | Main launch files and startup configuration. |
| `parameter_configuration.md` | YAML configuration and ROS 2 parameters. |
| `tf_and_odometry.md` | TF publishers, transforms, and odometry configuration. |
| `sensor_data_pipeline.md` | LiDAR and depth camera data processing pipelines. |

## 6. Configuration Files and Code

**ROS 2 package list:**

[TO BE ADDED]

**Launch file screenshots or code:**

[INSERT HERE]

**YAML configuration files:**

[INSERT HERE]

**Additional ROS 2 configuration details:**

[TO BE ADDED]

## 7. Important Notes

- All robot-side ROS 2 nodes run on the LattePanda.
- The XPS 13 is used for remote access and Foxglove Studio visualization.
- Configuration changes should be tested before deployment.
- Keep backups of working launch files and YAML configurations.
- Document verified settings rather than assuming default values.
