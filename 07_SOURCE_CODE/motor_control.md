# Motor Control Commands

## 1. Motor Controller

| Parameter | Configuration |
|---|---|
| Controller | RoboClaw HV60 2x60A |
| Communication | USB Serial |
| Serial Port | `/dev/ttyACM0` |
| Baud Rate | 38400 |
| Controller Address | 128 |
| ROS 2 Driver Node | `/basicmicro_node` |

## 2. ROS 2 Velocity Commands

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

## 6. Velocity Smoothing

A velocity smoother is configured in the ROS 2 navigation system to regulate velocity commands before they reach the motor controller.

Its purpose is to help produce controlled acceleration, deceleration, and turning behaviour.

Although  motor's speed is configured in nav2 config file, velocity smoother is able to override it.
