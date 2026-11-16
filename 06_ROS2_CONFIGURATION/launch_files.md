# ROS 2 Launch Files

## 1. Overview

ROS 2 launch files are used to start and configure multiple nodes and components together.

The powered wheelchair uses Python-based ROS 2 launch files to coordinate the motor controller, sensors, data processing, and autonomous navigation components.

## 2. Main Launch Directory

Location:

```text
~/wheelchair_nav2/launch/
```

## 3. Main System Launch File

Filename:

`wheelchair_system.launch.py`

Full path:

```text
~/wheelchair_nav2/launch/wheelchair_system.launch.py
```

This is the main wheelchair system launch file.

It coordinates the startup of the robot's required components.

Recorded responsibilities include:

- Starting the Velodyne VLP-16 driver.
- Starting the Intel RealSense D455 camera.
- Publishing static transforms.
- Starting point cloud throttling processes.
- Converting selected point cloud data into laser scans.
- Starting the Foxglove Bridge.
- Coordinating other robot system components.

**Note:** The exact list of launched components should be verified against the current launch file.

## 4. Navigation Launch Configuration

Nav2 configuration is maintained in:

```text
~/wheelchair_nav2/config/nav2_params.yaml
```

The launch configuration should load the appropriate parameters for:

- AMCL localization.
- Map server.
- Planner server.
- Controller server.
- Behavior server.
- BT Navigator.
- Costmaps.
- Velocity smoother.

**Active navigation launch files:**

[TO BE ADDED]

## 5. Sensor Configuration Files

### 5.1 RealSense D455

Configuration file:

```text
~/wheelchair_nav2/config/d455.yaml
```

This file contains camera parameters such as:

- Camera name.
- Frame configuration.
- Image resolution.
- Frame rate.
- Exposure and gain.
- Point cloud settings.
- Depth processing options.

### 5.2 Velodyne VLP-16

The LiDAR driver configuration is:

[TO BE VERIFIED]

**Configuration file path:**

[TO BE ADDED]

## 6. Custom Launch Components

The project also includes a custom destination navigation node.

Python script:

```text
~/wheelchair_nav2/scripts/place_nav_node.py
```

This node provides predefined destination navigation commands and a cancellation function through the Foxglove interface.

**Node launch configuration:**

[TO BE ADDED]

## 7. Launch File Verification

Inspect the main launch file:

```bash
nano ~/wheelchair_nav2/launch/wheelchair_system.launch.py
```

List launch files:

```bash
find ~/wheelchair_nav2/launch -maxdepth 2 -type f
```

Inspect the navigation configuration:

```bash
nano ~/wheelchair_nav2/config/nav2_params.yaml
```

## 8. Launch Architecture Diagram

[INSERT LAUNCH FILE ARCHITECTURE DIAGRAM HERE]

## 9. Additional Information

**Complete launch file list:**

[TO BE ADDED]

**Launch arguments:**

[TO BE ADDED]

**Startup order and dependencies:**

[TO BE ADDED]

**Launch troubleshooting notes:**

[TO BE ADDED]
