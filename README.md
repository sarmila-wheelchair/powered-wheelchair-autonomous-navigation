# Powered Wheelchair – Autonomous Navigation System

Welcome to the technical documentation repository for the Powered Wheelchair Autonomous Navigation Project.

## 1. Project Overview

This project focuses on developing an autonomous powered wheelchair using ROS 2. The system integrates motor control, wheel odometry, LiDAR sensing, depth cameras, environment mapping, localization and autonomous navigation.

The objective is to enable the wheelchair to navigate indoor environments safely and autonomously.

## 2. Hardware Components

| Component | Description |
|---|---|
| Main Computer | LattePanda 3 Delta |
| Motor Controller | RoboClaw HV60 2x60A |
| LiDAR | Velodyne VLP-16 |
| Depth Camera | Intel RealSense D455 |
| Drive System | Differential Drive |

## 3. Software and Frameworks

| Software | Purpose |
|---|---|
| Ubuntu | Operating system |
| ROS 2 Humble | Robot middleware |
| Nav2 | Autonomous navigation |
| SLAM Toolbox | Environment mapping |
| AMCL | Localization |
| Foxglove Studio | Robot visualization |
| Python | Custom ROS 2 nodes |

## 4. Main Project Features

- Motor control and encoder feedback.
- Wheel odometry.
- 3D LiDAR integration.
- Depth camera integration.
- Environment mapping.
- AMCL localization.
- Autonomous navigation using Nav2.
- Obstacle detection and avoidance.
- Foxglove monitoring interface.
- Predefined destination navigation.

## 5. Documentation

Detailed documentation will be organized into the following sections:

1. Project Overview
2. Common Notices and Safety
3. Quick Start Guide
4. Hardware Documentation
5. Robot Geometry and TF
6. ROS 2 Configuration
7. Source Code
8. Mapping and Localization
9. Autonomous Navigation
10. Foxglove Interface
11. Calibration and Testing
12. Troubleshooting
13. Development History
14. References

## 6. Development Environment

- Main robot computer: LattePanda 3 Delta
- Development computer: Dell XPS 13
- ROS 2 distribution: Humble
- Communication: ROS 2 network
- Visualization: Foxglove Studio

## 7. Project Status

The project includes motor control, sensor integration, mapping, localization, autonomous navigation and a Foxglove-based destination interface.

Further development, testing and documentation are ongoing.

---

**Repository Purpose:** Centralized storage for project documentation, source code, configurations, testing records and development history.
