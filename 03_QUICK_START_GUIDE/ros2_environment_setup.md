# ROS 2 Environment Setup

## 1. ROS 2 Distribution

The project uses:

- **ROS 2 distribution:** Humble
- **Operating environment:** Ubuntu
- **Main robot computer:** LattePanda 3 Delta

## 2. Computer Responsibilities

### 2.1 LattePanda 3 Delta

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
- Foxglove Bridge

### 2.2 Dell XPS 13

The XPS is used for remote development and monitoring. It runs:

- SSH client for accessing the LattePanda
- Foxglove Studio
- Development and monitoring tools

## 3. ROS 2 Workspace

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


- Run Foxglove Bridge and Foxglove Studio on the XPS.
- Confirm which computer's terminal is active before executing commands.
- Do not modify environment variables without checking the existing working configuration.
- Record changes to ROS 2 packages, workspace setup, and environment settings in the development log.
