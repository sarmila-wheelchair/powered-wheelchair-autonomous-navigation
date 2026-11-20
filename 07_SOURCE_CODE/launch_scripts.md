# ROS 2 Launch Scripts

## 1. Main Launch File

Main project directory:

```text
~/wheelchair_nav2/launch/
```

Main launch file:

```text
wheelchair_system.launch.py
```

This launch file is used to bring up the wheelchair's main software system.

## 2. Main Launch Responsibilities

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

## 3. Configuration Files

Important configuration files include:

| File | Location | Purpose |
|---|---|---|
| Main Launch File | `~/wheelchair_nav2/launch/wheelchair_system.launch.py` | Starts the main wheelchair system. |
| Nav2 Parameters | `~/wheelchair_nav2/config/nav2_params.yaml` | Configures navigation and localization parameters. |
| D455 Configuration | `~/wheelchair_nav2/config/d455.yaml` | Configures the RealSense D455 camera. |
| Destination Node | `~/wheelchair_nav2/scripts/place_nav_node.py` | Provides predefined destination navigation. |


## 4. Sensor Processing Launch Configuration

The main launch file includes sensor data processing components.

These include:

- LiDAR point cloud throttling.
- RealSense point cloud throttling.
- Point cloud to laser scan conversion.

The filtered laser scan topic currently configured in the project is

```text
/scan_filtered
```
instead of scan to reduce cpu load & to combine both sensors into one topic. 

Configured bridge port:

```text
8765
```
