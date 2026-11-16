# Hardware Startup

## 1. Purpose

This document describes the preliminary hardware checks and startup procedure for the powered wheelchair autonomous navigation system.

## 2. Hardware Components

The main hardware components include:

- LattePanda 3 Delta robot computer
- RoboClaw HV60 motor controller
- Left and right drive motors
- Emergency stop system
- Velodyne VLP-16 LiDAR
- Intel RealSense D455 depth camera
- Powered wheelchair electrical and battery system

## 3. Pre-Startup Safety Checks

Before powering on the system:

1. Ensure the wheelchair is stationary.
2. Keep the drive wheels clear of obstacles and people.
3. Make sure the emergency stop is accessible.
4. Inspect cables and electrical connections for visible damage.
5. Check that the LiDAR and depth camera are securely mounted.
6. Confirm that the wheelchair battery and power connections are in a safe condition.
7. Keep the wheelchair in a controlled test area.

**Do not begin a movement test until the emergency stop has been physically checked and its operation confirmed.**

## 4. Hardware Power-Up

Use the following as a preliminary sequence, subject to the wheelchair's verified electrical design and manufacturer's instructions:

1. Check the wheelchair's main power and battery condition.
2. Check the motor controller and its power connections.
3. Power on the LattePanda.
4. Confirm that the LattePanda has completed its startup.
5. Confirm that the VLP-16 LiDAR is powered.
6. Confirm that the Intel RealSense D455 is connected.
7. Check that no hardware fault or unexpected motor movement is present.

Do not connect or disconnect motor-controller, battery, or sensor power cables while the equipment is energized unless the manufacturer's procedure explicitly permits it.

## 5. Hardware Verification

After startup, verify the following components.

| Component | Verification |
|---|---|
| LattePanda | Computer boots and is accessible through SSH |
| RoboClaw | Controller is detected and communication is available |
| Emergency stop | Physical operation and motor-disable behavior are verified |
| VLP-16 | LiDAR data is being received |
| RealSense D455 | Camera data is being received |
| Drive motors | No unexpected movement or fault is present |

## 6. ROS 2 Hardware Checks

Once the ROS 2 environment is loaded on the LattePanda, use:

```bash
ros2 node list
```

Check the available topics:

```bash
ros2 topic list
```

Check LiDAR point cloud data:

```bash
ros2 topic hz /velodyne_points
```

Check the camera topics:

```bash
ros2 topic list | grep camera
```

Check the motor controller node:

```bash
ros2 node list | grep basicmicro
```

These commands check ROS 2 visibility and communication. They do not independently prove that the hardware is safe to operate.

## 7. Before Enabling Wheelchair Movement

Confirm all of the following:

- The wheelchair is in a controlled test area.
- The emergency stop has been tested.
- The motor controller is communicating correctly.
- Sensor data is available.
- No unexpected motor movement is occurring.
- A responsible operator is ready to stop the system.

## 8. Important Safety Notes

- Never assume that powering on the system means the wheelchair is ready for autonomous movement.
- Do not perform motor tests with the drive wheels on the ground unless the test procedure specifically requires it and the area is controlled.
- Keep people clear of the wheelchair's movement path.
- Stop testing immediately if hardware behavior is unexpected.
- Follow the manufacturer's electrical and operating instructions.
