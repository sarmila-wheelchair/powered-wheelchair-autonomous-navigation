# Motor Control Commands

## 1. Overview

This document describes how motor movement commands are handled by the powered wheelchair's ROS 2 control system.

The RoboClaw motor controller receives commands from the ROS 2 motor driver to control the left and right drive motors.

Motor control is used for manual movement, testing, and autonomous navigation.

## 2. Motor Controller

| Parameter | Configuration |
|---|---|
| Controller | RoboClaw HV60 2x60A |
| Communication | USB Serial |
| Serial Port | `/dev/ttyACM0` |
| Baud Rate | 38400 |
| Controller Address | 128 |
| ROS 2 Driver Node | `/basicmicro_node` |

## 3. ROS 2 Velocity Commands

The ROS 2 navigation and control system uses velocity commands to request wheelchair movement.

The commonly used velocity topic is:

```text
/cmd_vel
```

The velocity command contains:

| Field | Description |
|---|---|
| `linear.x` | Forward or backward velocity |
| `angular.z` | Rotational velocity |

The motor driver converts these velocity requests into left and right motor commands.

**Actual command subscription and conversion implementation:**

[INSERT CODE HERE]

## 4. RoboClaw Motor Commands

The driver uses the following RoboClaw method:

```python
SpeedM1M2(address, right_speed, left_speed)
```

The current implementation passes the right motor command first and the left motor command second.

The physical motor channel assignment and direction conventions should be verified against the actual wiring and driver implementation.

**Motor command implementation:**

[INSERT CODE HERE]

## 5. Movement Commands

The wheelchair supports the following basic movement types:

| Movement | Description |
|---|---|
| Forward | Both wheels move forward. |
| Backward | Both wheels move backward. |
| Turn Left | Left and right wheel speeds differ to rotate left. |
| Turn Right | Left and right wheel speeds differ to rotate right. |
| Stop | Motor commands bring the wheelchair to a stop. |

**Movement command implementation:**

[INSERT CODE HERE]

## 6. Velocity Smoothing

A velocity smoother is configured in the ROS 2 navigation system to regulate velocity commands before they reach the motor controller.

Its purpose is to help produce controlled acceleration, deceleration, and turning behaviour.

**Active velocity smoother configuration:**

[INSERT CONFIGURATION HERE]

**Velocity smoother test results:**

[TEST RESULTS TO BE ADDED]

## 7. Emergency Stop

The wheelchair includes a physical emergency-stop arrangement.

The emergency-stop circuit is associated with the RoboClaw controller's S3 input, reported as normally closed (NC).

The exact circuit behaviour, wiring, and stopping response must be verified and documented before relying on it as a safety function.

See the safety documentation in `02_COMMON_NOTICES/emergency_stop.md`.

## 8. Testing

Motor control should be tested carefully with the wheelchair in a safe, controlled environment.

Recommended test records:

- Forward movement.
- Backward movement.
- Left turning.
- Right turning.
- Stop response.
- Low-speed operation.
- Velocity smoothing behaviour.

**Test commands:**

[INSERT TEST COMMANDS HERE]

**Test results:**

[TEST RESULTS TO BE ADDED]

**Photos and videos:**

[INSERT IMAGE OR VIDEO LINK HERE]

## 9. Source Code

**Motor control source file:**

[LINK TO SOURCE FILE]

**Relevant code:**

[INSERT CODE HERE]

## 10. Additional Notes

[ADDITIONAL IMPLEMENTATION DETAILS TO BE ADDED]
