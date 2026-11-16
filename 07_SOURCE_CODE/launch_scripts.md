# ROS 2 Launch Scripts

## 1. Overview

ROS 2 launch files are used to start and configure the software components required for the powered wheelchair autonomous navigation system.

The main launch file coordinates the startup of the robot drivers, sensors, navigation components, and supporting nodes.

The robot's ROS 2 nodes run on the LattePanda 3 Delta computer.

## 2. Main Launch File

Main project directory:

```text
~/wheelchair_nav2/launch/
```

Main launch file:

```text
wheelchair_system.launch.py
```

This launch file is used to bring up the wheelchair's main software system.

**Source code link:**

[LINK TO SOURCE FILE]

## 3. Main Launch Responsibilities

The main launch file coordinates the startup of relevant components, including:

- RoboClaw motor controller driver.
- Velodyne VLP-16 LiDAR driver.
- Intel RealSense D455 camera.
- Static TF publishers.
- Sensor data throttling and processing.
- Point cloud to laser scan conversion.
- Nav2 navigation components.
- Foxglove Bridge.
- Custom destination navigation node.

**Note:** The exact nodes and launch configurations should be verified against the current version of `wheelchair_system.launch.py`.

## 4. Configuration Files

Important configuration files include:

| File | Location | Purpose |
|---|---|---|
| Main Launch File | `~/wheelchair_nav2/launch/wheelchair_system.launch.py` | Starts the main wheelchair system. |
| Nav2 Parameters | `~/wheelchair_nav2/config/nav2_params.yaml` | Configures navigation and localization parameters. |
| D455 Configuration | `~/wheelchair_nav2/config/d455.yaml` | Configures the RealSense D455 camera. |
| Destination Node | `~/wheelchair_nav2/scripts/place_nav_node.py` | Provides predefined destination navigation. |

Additional configuration files:

[TO BE ADDED]

## 5. Sensor Launch Configuration

### 5.1 Velodyne VLP-16

The LiDAR driver provides 3D point cloud data.

Main topic:

```text
/velodyne_points
```

A throttled point cloud is also used:

```text
/velodyne_points_throttled
```

### 5.2 Intel RealSense D455

The D455 provides depth camera data and point cloud information.

Configuration file:

```text
~/wheelchair_nav2/config/d455.yaml
```

Throttled point cloud topic:

```text
/camera/camera/depth/color/points_throttled
```

**Sensor launch implementation:**

[INSERT CODE HERE]

## 6. Sensor Processing Launch Configuration

The main launch file includes sensor data processing components.

These include:

- LiDAR point cloud throttling.
- RealSense point cloud throttling.
- Point cloud to laser scan conversion.

The filtered laser scan topic currently configured in the project is:

```text
/scan_filtered
```

**Processing configuration:**

[INSERT CODE HERE]

## 7. Static Transform Publishers

Static transforms establish the physical relationships between the wheelchair base and its sensors.

The base frame relationship includes:

```text
base_footprint → base_link
```

Sensor transforms include the relationships between the robot base and the mounted LiDAR and depth camera.

**Static transform implementation:**

[INSERT CODE HERE]

**Transform diagram:**

[INSERT IMAGE HERE]

## 8. Foxglove Bridge

Foxglove Bridge runs on the LattePanda as part of the robot launch configuration.

It allows Foxglove Studio running on the XPS 13 to connect to the robot's ROS 2 data.

Configured bridge port:

```text
8765
```

**Foxglove Bridge launch configuration:**

[INSERT CODE HERE]

## 9. Launching the System

The main launch command is:

```bash
ros2 launch wheelchair_nav2 wheelchair_system.launch.py
```

**Note:** Confirm the actual ROS 2 package name and launch command against the installed package configuration before using this command.

## 10. Testing and Verification

After launching the system, verify:

- Required ROS 2 nodes are running.
- Sensor topics are publishing.
- TF transforms are available.
- Odometry is publishing.
- Nav2 components are active.
- Foxglove Bridge is accessible.
- Destination navigation controls are working.

**Launch screenshots:**

[INSERT IMAGE HERE]

**Launch verification results:**

[TEST RESULTS TO BE ADDED]

## 11. Additional Notes

[ADDITIONAL LAUNCH CONFIGURATION DETAILS TO BE ADDED]
