# Software Precautions

## 1. Overview

This document describes important software precautions when developing, modifying and operating the Powered Wheelchair Autonomous Navigation System.

The system uses ROS 2 Humble and multiple interconnected software packages.

## 2. Computer Architecture

The project uses two computers.

### LattePanda 3 Delta
- Main robot computer.
- Runs ROS 2 Humble.
- Runs motor control nodes.
- Runs LiDAR and camera drivers.
- Runs SLAM Toolbox, AMCL and Nav2.
- Handles autonomous navigation.
-  Runs the Foxglove Bridge

### Dell XPS 13
- Used for remote SSH access.
- Used for software development.
- Used for monitoring and visualization.

Always verify which computer contains the active configuration.

## 3. ROS 2 Environment

Before executing ROS 2 commands:

- Verify the correct ROS 2 distribution.
- Source the ROS 2 Humble environment.
- Check the ROS_DOMAIN_ID.
- Verify network connectivity.
- Confirm the correct computer is being accessed.

# Wheelchair ROS 2 networking on xps bashrc
export ROS_DOMAIN_ID=1
export ROS_LOCALHOST_ONLY=0
export RMW_IMPLEMENTATION=rmw_fastrtps_cpp
export ROS_STATIC_PEERS="192.168.1.41"          #lattepanda ip add, use "192.168.1.27" on lattepanda 

source /opt/ros/humble/setup.bash
source ~/ros2_ws/install/setup.bash


## 4. Configuration File Precautions

Important configuration files include:

- `nav2_params.yaml`
- `d455.yaml`
- Wheelchair system launch files.
- SLAM Toolbox configuration.
- RoboClaw motor-control source files.

Before modifying any configuration:

1. Create a backup.
2. Identify the parameter being changed.
3. Record the original value.
4. Modify only the required section.
5. Rebuild packages when necessary.
6. Verify the changes.
7. Record test results.

## 5. ROS 2 Node Precautions

Before launching the navigation system:

- Check running ROS 2 nodes.
- Verify sensor availability.
- Check topic publication rates.
- Verify TF transformations.
- Check odometry publication.
- Confirm that Nav2 nodes are active.

## 6. TF Transformation Precautions

The wheelchair uses several coordinate frames, including:

- `map`
- `odom`
- `base_footprint`
- `base_link`
- `velodyne`
- Camera coordinate frames.

When modifying TF configurations:

- Verify parent and child frames.
- Check translation and rotation values.
- Avoid duplicate TF publishers.
- Verify sensor mounting transformations.
- Confirm the robot moves correctly in the visualization.

Incorrect transformations can cause localization and navigation problems.

## 7. Nav2 Configuration Precautions

Before changing Nav2 parameters:

- Back up the existing YAML file.
- Verify the robot base frame.
- Verify the global frame.
- Check local and global costmaps.
- Confirm obstacle detection sources.
- Review controller velocity limits.
- Check recovery behaviour configuration.


