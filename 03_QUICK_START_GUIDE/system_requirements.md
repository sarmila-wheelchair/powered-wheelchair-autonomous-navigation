# System Requirements

## 1. Purpose

This document describes the main hardware and software requirements for operating and developing the powered wheelchair autonomous navigation system.

## 2. Hardware Requirements

### 2.1 Robot Computer

- **Computer:** LattePanda 3 Delta
- **Operating mode:** Headless operation
- **Connection:** Network connection for remote access through SSH
- **Role:** Runs the ROS 2 system, robot drivers, sensors, mapping, localization, and autonomous navigation.

### 2.2 Development and Monitoring Computer

- **Computer:** Dell XPS 13
- **Role:** Connects to the LattePanda through SSH and runs Foxglove Studio and the Foxglove Bridge.
- **Purpose:** Remote development, system monitoring, and visualization.

### 2.3 Robot Hardware

The wheelchair system includes:

- Powered wheelchair platform
- RoboClaw HV60 motor controller
- Left and right drive motors
- Emergency stop system
- Velodyne VLP-16 LiDAR
- Intel RealSense D455 depth camera

Refer to `01_PROJECT_OVERVIEW/hardware_overview.md` for the hardware overview.

## 3. Software Requirements

| Software | Purpose |
|---|---|
| Ubuntu | Operating system |
| ROS 2 Humble | Robot software framework |
| Nav2 | Autonomous navigation |
| SLAM Toolbox | Mapping |
| AMCL | Robot localization |
| Foxglove Studio | Robot visualization and monitoring |
| Foxglove Bridge | Sends ROS data to Foxglove Studio |
| RoboClaw ROS 2 driver | Motor controller communication |
| Velodyne ROS 2 driver | LiDAR data acquisition |
| RealSense ROS 2 driver | Depth camera data acquisition |

## 4. Network Requirements

- The LattePanda and XPS must have network connectivity for remote communication.
- SSH must be available for remote terminal access.
- The Foxglove Bridge must be reachable from the XPS.
- The VLP-16 requires network communication with the LattePanda.

Refer to `network_setup.md` for network configuration details.

## 5. Important Notes

- The LattePanda is the main robot computer.
- The XPS is used for remote access, development, and visualization.
- ROS 2 robot nodes and Nav2 run on the LattePanda.
- Foxglove Bridge and Foxglove Studio run on the XPS.
- Hardware and software versions should be recorded when they are verified.

## 6. Verification Status

This document records the known system requirements. Exact operating system versions, hardware connection details, and software package versions should be checked against the working system before being treated as final requirements.
