# Source Code

## 1. Overview

This section documents the source code developed and used for the powered wheelchair autonomous navigation project.

The software is built using ROS 2 Humble and Python, together with supporting ROS 2 packages and hardware drivers.

The source code is responsible for motor control, encoder feedback, odometry calculation, sensor processing, system startup, and autonomous navigation.

## 2. Main Software Components

| Component | Description |
|---|---|
| RoboClaw Motor Controller Driver | Communicates with the RoboClaw controller and controls the wheelchair motors. |
| Wheel Encoder Processing | Reads encoder measurements and processes wheel movement. |
| Odometry Implementation | Calculates the wheelchair's estimated movement and publishes `/odom`. |
| Destination Navigation Node | Provides predefined navigation destinations and cancellation functionality. |
| Main System Launch File | Starts the required robot components. |
| Sensor Processing | Processes LiDAR and depth camera data. |
| Testing Scripts | Used to test motor movement, turning, and navigation performance. |

## 3. Source Code Organization

The main ROS 2 workspace is:

```text
~/ros2_ws/
```

The wheelchair navigation project is:

```text
~/wheelchair_nav2/
```

Important source code locations include:

```text
ros2_ws/src/basicmicro_ros2/
wheelchair_nav2/launch/
wheelchair_nav2/scripts/
```

## 4. Documentation Contents

| File | Description |
|---|---|
| `roboclaw_driver.md` | RoboClaw motor controller driver implementation. |
| `encoder_and_odometry.md` | Wheel encoder processing and odometry calculations. |
| `motor_control.md` | Motor speed commands and movement control. |
| `destination_navigation.md` | Custom destination navigation node and Foxglove controls. |
| `launch_scripts.md` | Main launch files and startup scripts. |
| `sensor_processing_scripts.md` | LiDAR and depth camera processing scripts. |
| `testing_scripts.md` | Scripts used for movement and navigation testing. |

## 5. Source Code Availability

Actual source code should be added to this repository after reviewing and organizing the working files from the LattePanda.

**Important:** Do not assume that documentation copies of source code are automatically synchronized with the files running on the robot.

## 6. Code Documentation Format

Each major software component should include:

- Filename and package location.
- Purpose and functionality.
- Dependencies.
- Important functions and classes.
- ROS 2 topics, services, and actions.
- Configuration parameters.
- Example usage.
- Testing results.

## 7. Code and Supporting Materials

**Source code files:**

[INSERT CODE HERE]

**Software architecture diagram:**

[INSERT IMAGE HERE]

**Execution screenshots:**

[INSERT IMAGE HERE]

**Additional implementation notes:**

[TO BE ADDED]
