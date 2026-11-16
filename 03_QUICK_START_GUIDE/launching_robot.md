# Launching the Wheelchair System

## 1. Purpose

This document describes the procedure for launching the powered wheelchair ROS 2 system.

The main ROS 2 nodes, sensor drivers, localization, and navigation components run on the LattePanda 3 Delta.

## 2. System Architecture

| Computer | Responsibilities |
|---|---|
| LattePanda 3 Delta | ROS 2 nodes, motor controller, LiDAR, depth camera, localization, and Nav2 |
| Dell XPS 13 | SSH access, Foxglove Bridge, Foxglove Studio, and monitoring |

## 3. Pre-Launch Checklist

Before launching the system:

- Complete the hardware startup checks.
- Confirm the emergency stop is accessible and verified.
- Ensure the wheelchair is stationary.
- Confirm the LattePanda is accessible through SSH.
- Check that the required sensors are connected.
- Confirm the ROS 2 environment is available.

## 4. Access the LattePanda

From the XPS terminal, connect to the LattePanda using the configured SSH connection.

Use the project's verified SSH command. Do not assume an IP address or username if the network configuration has changed.

Confirm that the terminal prompt belongs to the LattePanda before running robot commands.

## 5. Load the ROS 2 Environment

On the LattePanda, load ROS 2 Humble:

```bash
source /opt/ros/humble/setup.bash
```

Load the required workspace environment:

```bash
source ~/ros2_ws/install/setup.bash
```

If the wheelchair navigation workspace is built and required for the launch, source it as well:

```bash
source ~/wheelchair_nav2/install/setup.bash
```

## 6. Launch the Wheelchair System

The main wheelchair system launch file is located at:

```text
~/wheelchair_nav2/launch/wheelchair_system.launch.py
```

The launch file is responsible for starting the configured robot system components.

Before documenting a launch command as final, verify the exact package name and launch invocation used by the working system.

Do not start a second copy of the system if the launch is already running.

## 7. Verify the Running System

After launching, open another terminal on the LattePanda and check the active ROS 2 nodes:

```bash
ros2 node list
```

Check the available topics:

```bash
ros2 topic list
```

Check the odometry topic:

```bash
ros2 topic echo /odom --once
```

Check the LiDAR point cloud:

```bash
ros2 topic hz /velodyne_points
```

Check the camera topics:

```bash
ros2 topic list | grep camera
```

Confirm that the expected sensor and navigation components are running before proceeding.

## 8. Navigation Readiness

Before sending any navigation goal:

- Confirm that the correct map is loaded.
- Confirm that localization is working.
- Check the robot's position and orientation in Foxglove.
- Confirm that the costmaps and sensor data are updating.
- Check that the wheelchair's path is clear.
- Keep the emergency stop accessible.

Do not assume that a successful launch means autonomous navigation is safe.

## 9. Important Notes

- The LattePanda is responsible for running the robot's ROS 2 system.
- The XPS is used for remote access and visualization.
- Do not edit or launch files from the wrong computer.
- Record verified launch commands and configuration changes in the development log.

## 10. Verification Status

The launch file path is documented from the project configuration. The exact package name, launch command, startup order, and successful startup checks must be verified before this procedure is considered final.
