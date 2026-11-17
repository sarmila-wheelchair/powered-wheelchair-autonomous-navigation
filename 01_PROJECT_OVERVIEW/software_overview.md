# Software Overview

This document describes the software architecture and technologies used in the Powered Wheelchair Autonomous Navigation System.

## 1. Operating System

**Platform:** Ubuntu Linux

The Ubuntu operating system runs on the LattePanda 3 Delta and provides the environment for ROS 2 and all robot software components.

## 2. Robot Middleware

**Framework:** ROS 2 Humble

ROS 2 provides communication between the wheelchair's hardware, sensors and autonomous navigation software.

## 3. Motor Control and Odometry

**Package:** basicmicro_ros2

The custom RoboClaw ROS 2 integration handles:
- Serial communication with the RoboClaw controller.
- Left and right motor speed commands.
- Wheel encoder feedback.
- Wheel odometry calculations.
- Odometry publication through `/odom`.

## 4. Mapping

**Software:** SLAM Toolbox

SLAM Toolbox is used to:
- Build indoor occupancy grid maps.
- Estimate the robot's position during mapping.
- Generate maps of corridors and rooms.
- Save maps for future autonomous navigation.

## 5. Localization

**Software:** AMCL (Adaptive Monte Carlo Localization)

AMCL estimates the wheelchair's position and orientation using:
- A previously saved map.
- Laser scan data.
- Wheel odometry.
- TF transformations.

## 6. Autonomous Navigation

**Framework:** Nav2

Nav2 manages autonomous movement toward selected destinations.

Main components include:
- Global path planning.
- Local trajectory planning.
- DWB Controller.
- Local and global costmaps.
- Obstacle avoidance.
- Velocity smoothing.
- Recovery behaviours.

## 7. Sensor Processing

The system integrates two main environmental sensors.

### Velodyne VLP-16
- Provides 3D LiDAR point clouds.
- Supplies environmental information.
- Supports obstacle detection and laser scan generation.

### Intel RealSense D455
- Provides depth images.
- Generates point clouds.
- Supports 3D obstacle perception.

## 8. Visualization and Monitoring

**Software:** Foxglove Studio

Foxglove is used on the Dell XPS 13 to:
- Visualize occupancy grid maps.
- Display the wheelchair's position.
- Monitor LiDAR point clouds.
- Display RealSense point clouds.
- Monitor TF transformations.
- Observe navigation paths and costmaps.
- Monitor ROS 2 topics.

The Foxglove Bridge runs on the XPS 13, while the main robot ROS 2 nodes run on the LattePanda.

## 9. Programming Language

**Primary language:** Python

Python is used for:
- Custom ROS 2 nodes.
- Motor control integration.
- Navigation-related scripts.
- Automated movement and testing scripts.

## 10. Software Architecture Summary

| Software | Main Function |
|---|---|
| Ubuntu | Operating system |
| ROS 2 Humble | Robot communication |
| basicmicro_ros2 | Motor control and odometry |
| SLAM Toolbox | Mapping |
| AMCL | Localization |
| Nav2 | Autonomous navigation |
| DWB | Local trajectory planning |
| Foxglove Studio | Visualization |
| Python | Custom programming |
