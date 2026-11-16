
# Project Objectives

## 1. Primary Objective

To develop an autonomous powered wheelchair capable of navigating indoor environments using ROS 2, environmental sensors and autonomous navigation algorithms.

## 2. Technical Objectives

### 2.1 Motor Control
- Control the wheelchair's left and right drive motors using RoboClaw.
- Establish reliable serial communication.
- Implement accurate motor speed control.
- Obtain wheel encoder feedback.

### 2.2 Odometry
- Calculate robot position and orientation using wheel encoders.
- Publish odometry through ROS 2.
- Calibrate wheel radius and wheel separation.
- Improve rotational and linear accuracy.

### 2.3 Environmental Perception
- Integrate Velodyne VLP-16 LiDAR.
- Integrate Intel RealSense D455 depth camera.
- Detect surrounding obstacles.
- Publish sensor information for navigation.

### 2.4 Mapping and Localization
- Generate indoor maps using SLAM Toolbox.
- Save and reuse occupancy grid maps.
- Implement AMCL for localization.
- Maintain accurate TF transformations.

### 2.5 Autonomous Navigation
- Implement ROS 2 Nav2.
- Navigate between predefined destinations.
- Configure DWB local planning.
- Implement obstacle avoidance.
- Configure recovery behaviours.
- Support safe stopping and navigation cancellation.

### 2.6 Visualization and Monitoring
- Integrate Foxglove Studio.
- Visualize robot position, maps, sensor data and navigation.
- Monitor ROS 2 topics and system performance.
- Provide a destination selection interface.

## 3. Long-Term Goals

- Reliable autonomous navigation across an entire indoor floor.
- Navigation through narrow corridors and complex environments.
- Improved localization accuracy.
- Reliable obstacle avoidance.
- Safe and repeatable wheelchair operation.
