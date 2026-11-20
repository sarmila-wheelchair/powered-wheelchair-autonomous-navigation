# Network Setup

## 1. Purpose

This document describes the network connections required for the powered wheelchair autonomous navigation system.

The network connects the LattePanda robot computer, the XPS development computer, and the Velodyne VLP-16 LiDAR.

## 2. Network Architecture

The system uses two computers:

| Device | Role |
|---|---|
| LattePanda 3 Delta | Main robot computer. Runs ROS 2 nodes, sensors, mapping, localization, Foxglove Bridge and Nav2. |
| Dell XPS 13 | Remote development and monitoring computer. Runs SSH client and Foxglove Studio. |
| Velodyne VLP-16 | LiDAR sensor connected to the robot network via Ethernet. |

## 3. Known Network Configuration

The following VLP-16 network settings have been used in the project:

| Parameter | Configuration |
|---|---|
| LiDAR model | Velodyne VLP-16 |
| LiDAR IP address | `192.168.1.201` |
| LattePanda network interface | `enp1s0` |
| LattePanda IP address on LiDAR network | `192.168.1.100` |
| LiDAR UDP data port | `2368` |

These settings describe the current LiDAR network configuration. Confirm the current network configuration before making changes.

