# RoboClaw Motor Controller

## 1. Overview

The RoboClaw motor controller is responsible for controlling the left and right drive motors of the powered wheelchair.

It receives motor commands from the ROS 2 control software and provides encoder feedback for wheelchair odometry.

## 2. Hardware Identification

| Parameter | Details |
|---|---|
| Manufacturer | Basicmicro |
| Model | RoboClaw HV60 2x60A |
| Hardware version | 4.4.9 |
| Motor channels | 2 |
| Communication interface | USB Serial |
| Serial device | `/dev/ttyACM0` |
| Baud rate | 38400 |
| Controller address | 128 |

**Additional information to be added:**
- Serial number: `[TO BE ADDED]`
- Purchase date: `[TO BE ADDED]`
- Manufacturer datasheet: `[INSERT LINK]`
- Controller photograph: `[INSERT IMAGE HERE]`

## 3. Main Functions

The RoboClaw controller provides:

- Independent control of left and right drive motors.
- Motor speed commands.
- Encoder feedback.
- Serial communication with the robot computer.
- Motor control and protection features supported by the controller.

## 4. Electrical Connections

Document the physical connections between:

- RoboClaw and left motor.
- RoboClaw and right motor.
- RoboClaw and LattePanda.
- RoboClaw and wheelchair battery.
- Emergency stop circuit.
- Encoder connections.

### Wiring Diagram

`[INSERT ROBOCLAW WIRING DIAGRAM HERE]`

### Connection Details

| Connection | Description | Details |
|---|---|---|
| M1 | Motor channel 1 | `[TO BE VERIFIED]` |
| M2 | Motor channel 2 | `[TO BE VERIFIED]` |
| USB | Communication with LattePanda | `/dev/ttyACM0` |
| Battery input | Controller power | `[TO BE ADDED]` |
| Emergency stop | Safety circuit | S3, normally closed (NC), as previously documented; verify physical wiring and operation |

**Important:** Confirm the physical motor-channel assignments and emergency-stop circuit against the actual wiring before making electrical changes.

## 5. ROS 2 Integration

The project uses the `basicmicro_ros2` package.

Package location:

```text
~/ros2_ws/src/basicmicro_ros2
```

ROS 2 node:

```text
/basicmicro_node
```

### Communication Configuration

| Parameter | Value |
|---|---|
| Serial port | `/dev/ttyACM0` |
| Baud rate | 38400 |
| Address | 128 |
| Driver package | `basicmicro_ros2` |
| ROS 2 distribution | Humble |

### Source Code Location

Main driver source:

```text
~/ros2_ws/src/basicmicro_ros2
```

Specific source file:

`[INSERT MAIN DRIVER FILE NAME]`

Additional code documentation:

`[INSERT CODE OR GITHUB FILE LINK HERE]`

## 6. Motor Control Configuration

The controller receives speed commands for the left and right motors.

The driver uses:

```python
SpeedM1M2(address, right_speed, left_speed)
```

Encoder readings are obtained using:

```python
left_enc_raw = encoders[2]
right_enc_raw = encoders[1]
```

**Note:** Preserve the actual channel mapping used by the working driver. Do not change motor direction or channel assignments without controlled testing.

### Motor Configuration Parameters

| Parameter | Current Value |
|---|---|
| Wheel radius | 0.165 m |
| Wheel separation used in earlier configuration | 0.493 m |
| Encoder counts per revolution | 233102 |
| Gear ratio | 1.0 |

These are previously recorded driver parameters. Verify them against the latest configuration and physical measurements.

## 7. Odometry Integration

Encoder feedback from the RoboClaw is used to calculate wheelchair movement.

The driver publishes odometry on:

```text
/odom
```

Relevant coordinate frames:

- Parent frame: `odom`
- Child frame: `base_footprint`

### Odometry Calibration

Record calibration results here.

| Test | Commanded Movement | Recorded Odometry | Physical Measurement |
|---|---|---|---|
| Straight-line test | 1.0 m | 1.004 m | 1.10 m |
| Right rotation | 360° | Approximately 360.3° in an earlier test | Approximately 355° in an earlier test |

**Additional calibration results:** `[ADD LATEST RESULTS HERE]`

## 8. Motor Controller Testing

Document the following tests:

- USB serial communication test.
- Left motor direction test.
- Right motor direction test.
- Forward movement test.
- Reverse movement test.
- In-place rotation test.
- Encoder feedback test.
- Emergency stop test.

### Test Results

`[INSERT TEST PROCEDURES, TERMINAL OUTPUTS, AND RESULTS HERE]`

## 9. Troubleshooting

| Issue | Possible Area to Investigate |
|---|---|
| Controller not detected | USB connection and serial device |
| Serial communication failure | Port, baud rate, and controller address |
| Incorrect motor direction | Motor wiring and channel mapping |
| Incorrect odometry | Encoder configuration and wheel calibration |
| Unequal wheel movement | Motor configuration and mechanical differences |
| Unexpected movement | Stop testing and inspect the control and safety circuits |

## 10. Images and Diagrams

### RoboClaw Controller

`[INSERT CONTROLLER PHOTOGRAPH HERE]`

### Motor Wiring

`[INSERT MOTOR WIRING IMAGE HERE]`

### Emergency Stop Circuit

`[INSERT EMERGENCY STOP WIRING DIAGRAM HERE]`

## 11. Future Improvements

- Document the complete electrical wiring.
- Record verified controller configuration parameters.
- Include motor calibration procedures.
- Add emergency-stop verification results.
- Maintain a record of firmware and driver updates.

## 12. References

- Manufacturer: Basicmicro
- Product documentation: `[INSERT OFFICIAL DATASHEET LINK]`
- ROS 2 driver source: `[INSERT GITHUB LINK]`
