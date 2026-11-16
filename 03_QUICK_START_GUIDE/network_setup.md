# Network Setup

## 1. Purpose

This document describes the network connections required for the powered wheelchair autonomous navigation system.

The network connects the LattePanda robot computer, the XPS development computer, and the Velodyne VLP-16 LiDAR.

## 2. Network Architecture

The system uses two computers:

| Device | Role |
|---|---|
| LattePanda 3 Delta | Main robot computer. Runs ROS 2 nodes, sensors, mapping, localization, and Nav2. |
| Dell XPS 13 | Remote development and monitoring computer. Runs SSH client, Foxglove Bridge, and Foxglove Studio. |
| Velodyne VLP-16 | LiDAR sensor connected to the robot network. |

## 3. Known Network Configuration

The following VLP-16 network settings have been used in the project:

| Parameter | Configuration |
|---|---|
| LiDAR model | Velodyne VLP-16 |
| LiDAR IP address | `192.168.1.201` |
| LattePanda network interface | `enp1s0` |
| LattePanda IP address on LiDAR network | `192.168.1.100` |
| LiDAR UDP data port | `2368` |

These settings describe the known LiDAR network configuration. Confirm the current network configuration before making changes.

## 4. Remote Access Through SSH

The XPS connects to the LattePanda using SSH.

SSH provides remote terminal access without requiring a monitor or keyboard connected to the LattePanda.

Before operating the robot, confirm that:

- The LattePanda is powered on.
- Both computers have the required network connectivity.
- SSH access is working.
- The correct computer is being used for each task.

## 5. Foxglove Communication

Foxglove Studio runs on the XPS, while the robot's ROS 2 system runs on the LattePanda.

The Foxglove Bridge provides communication between the ROS 2 system and Foxglove Studio.

Confirm that the bridge is running and that the XPS can connect to its configured address and port.

## 6. ROS 2 Communication

The ROS 2 computers must have compatible communication settings when communicating across the network.

Important settings include:

- `ROS_DOMAIN_ID`
- `ROS_LOCALHOST_ONLY`
- Network interface configuration
- Firewall settings, if applicable

Do not change these settings without checking the current working configuration.

## 7. Network Verification

Before launching autonomous navigation, verify:

- The LattePanda can communicate with the VLP-16.
- The XPS can connect to the LattePanda through SSH.
- The Foxglove Bridge is reachable from the XPS.
- Required ROS 2 topics are visible in Foxglove Studio.

## 8. Safety Note

Network connectivity does not guarantee that the wheelchair is safe to move. Check the emergency stop, motor controller, sensors, and surrounding area before any movement test.
