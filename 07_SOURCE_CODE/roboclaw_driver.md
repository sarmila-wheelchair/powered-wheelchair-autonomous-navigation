# RoboClaw Motor Controller Driver

## 1. Overview

The RoboClaw motor controller driver provides the communication interface between the ROS 2 system and the RoboClaw motor controller installed on the powered wheelchair.

It enables the wheelchair to receive motor velocity commands, control the left and right drive motors, read wheel encoder measurements, and publish odometry information.

The driver is implemented in Python and integrated into the ROS 2 Humble environment.

## 2. Hardware Information

| Parameter | Configuration |
|---|---|
| Motor Controller | RoboClaw HV60 2x60A |
| Firmware Version | 4.4.9 |
| Communication Interface | USB Serial |
| Serial Device | `/dev/ttyACM0` |
| Baud Rate | 38400 |
| RoboClaw Address | 128 |
| ROS 2 Package | `basicmicro_ros2` |
| ROS 2 Node | `/basicmicro_node` |

## 3. Source Code Location

ROS 2 package:

```text
~/ros2_ws/src/basicmicro_ros2/
```

Main driver file:

```text
basicmicro_node.py
```

**Source code link:**

[LINK TO SOURCE FILE]

## 4. Main Driver Responsibilities

The driver performs the following functions:

1. Establishes serial communication with the RoboClaw controller.
2. Receives velocity commands from the ROS 2 system.
3. Converts velocity commands into motor controller commands.
4. Sends speed commands to the left and right motors.
5. Reads wheel encoder measurements.
6. Calculates wheel movement and odometry.
7. Publishes odometry information through `/odom`.

## 5. Motor Control Interface

The driver uses the RoboClaw motor control method:

```python
SpeedM1M2(address, right_speed, left_speed)
```

The motor channel assignment and direction conventions should be verified against the physical wheelchair wiring.

**Motor control implementation:**

[INSERT CODE HERE]

## 6. Wheel Encoder Processing

The driver reads encoder measurements from the RoboClaw controller.

The current implementation uses:

```python
left_enc_raw = encoders[2]
right_enc_raw = encoders[1]
```

These encoder readings are used to calculate wheel movement.

**Encoder processing implementation:**

[INSERT CODE HERE]

## 7. Odometry Publishing

The driver publishes the wheelchair's estimated movement through:

```text
/odom
```

The current odometry message uses:

| Field | Value |
|---|---|
| Header Frame | `odom` |
| Child Frame | `base_footprint` |

The odometry information is used by the ROS 2 navigation system for tracking the wheelchair's movement.

**Odometry implementation:**

[INSERT CODE HERE]

## 8. Important Configuration Parameters

Previously observed driver parameters:

| Parameter | Previously Observed Value |
|---|---:|
| Wheel Radius | 0.165 m |
| Wheel Separation | 0.493 m |
| Encoder Counts per Revolution | 233102 |
| Gear Ratio | 1.0 |

These values are historical configuration values. Verify them against the currently running driver and physical calibration before using them as final specifications.

## 9. Building the Package

The package can be built from the ROS 2 workspace:

```bash
cd ~/ros2_ws
colcon build --packages-select basicmicro_ros2 --symlink-install
```

Source the workspace:

```bash
source ~/ros2_ws/install/setup.bash
```

## 10. Testing and Verification

The driver should be tested to verify:

- Successful serial communication.
- Correct motor direction.
- Independent left and right motor control.
- Encoder feedback.
- Odometry accuracy.
- Correct stopping behaviour.

**Test results:**

[TEST RESULTS TO BE ADDED]

**Testing screenshots:**

[INSERT IMAGE HERE]

## 11. Additional Notes

Further implementation details, code explanations, wiring information, and calibration results can be added here.

[ADDITIONAL NOTES TO BE ADDED]
