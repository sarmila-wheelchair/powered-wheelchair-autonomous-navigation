# Hardware Overview

This document describes the main hardware components used in the Powered Wheelchair Autonomous Navigation System.

## 1. Main Computing Unit

**Device:** LattePanda 3 Delta

Responsibilities:
- Runs Ubuntu and ROS 2 Humble.
- Hosts the main ROS 2 robot nodes.
- Processes LiDAR and depth camera data.
- Runs SLAM Toolbox, AMCL and Nav2.
- Handles autonomous navigation and motor communication.

## 2. Development Computer

**Device:** Dell XPS 13

Responsibilities:
- Remote access to the LattePanda through SSH.
- Software development and configuration editing.
- Foxglove Studio visualization.
- Monitoring ROS 2 topics and robot performance.

## 3. Motor Controller

**Device:** RoboClaw HV60 2x60A V4.4.9

Responsibilities:
- Controls the left and right wheelchair drive motors.
- Receives motor speed commands.
- Reads wheel encoder feedback.
- Communicates with ROS 2 through serial communication.

Known configuration:
- Serial device: `/dev/ttyACM0`
- Baud rate: `38400`
- Controller address: `128`

## 4. LiDAR Sensor

**Device:** Velodyne VLP-16

Responsibilities:
- Provides 3D environmental perception.
- Detects surrounding obstacles.
- Supplies point cloud data for navigation and mapping.

Known configuration:
- IP address: `192.168.1.201`
- UDP data port: `2368`
- Expected rotation rate: `600 RPM`

## 5. Depth Camera

**Device:** Intel RealSense D455

Responsibilities:
- Provides depth information.
- Generates 3D point cloud data.
- Supports obstacle detection and environmental perception.

Known configuration:
- Camera name: `camera0`
- Resolution: `424 × 240`
- Frame rate: `15 FPS`
- ROS 2 driver: RealSense ROS

## 6. Drive System

The wheelchair uses a differential-drive configuration.

The left and right drive motors are controlled independently to produce:
- Forward movement.
- Reverse movement.
- Left rotation.
- Right rotation.

Wheel encoder feedback is used to calculate odometry.

## 7. Hardware Integration

The hardware components communicate through the LattePanda running ROS 2 Humble.

The XPS 13 is used as the remote development and visualization computer.

**Note:** Hardware parameters should be verified against the actual connected devices before deployment.
