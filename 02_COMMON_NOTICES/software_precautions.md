# Software Precautions

## 1. Computer Architecture

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

## 2. ROS 2 Environment

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
