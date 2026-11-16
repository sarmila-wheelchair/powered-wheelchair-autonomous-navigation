# Quick Start Guide

## 1. Purpose

This section provides instructions for starting, configuring and preparing the Powered Wheelchair Autonomous Navigation System.

It is intended to help developers and operators understand the startup sequence and access the main robot software.

## 2. System Architecture

The project uses two computers.

### Main Robot Computer
**Device:** LattePanda 3 Delta

Runs:
- Ubuntu
- ROS 2 Humble
- RoboClaw motor-control node
- Velodyne VLP-16 driver
- Intel RealSense D455 driver
- SLAM Toolbox
- AMCL
- Nav2
- Wheelchair system launch files

### Development and Visualization Computer
**Device:** Dell XPS 13

Runs:
- SSH client
- Foxglove Studio
- Foxglove Bridge
- Development and monitoring tools

## 3. Startup Documentation

The following procedures will be documented in this section:

1. System Requirements
2. Network Setup
3. ROS 2 Environment Setup
4. Hardware Startup
5. Launching the Wheelchair System
6. Foxglove Connection
7. System Shutdown

## 4. Important Notes

- The LattePanda is responsible for running the main robot software.
- The XPS is used for remote access and visualization.
- Both computers must have appropriate ROS 2 network connectivity.
- Verify sensor communication before autonomous operation.
- Verify the physical emergency stop before powered testing.

## 5. Safety Reminder

Always perform initial startup and navigation testing in a controlled environment.

Do not activate autonomous navigation until motor control, odometry, sensor data, localization and emergency stopping have been verified.

## 6. Documentation Status

Startup commands and configuration details will be added to the individual guides after verification against the working system.
