# RoboClaw Motor Controller

## 1. Hardware Identification

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

### Wiring Diagram

<img width="438" height="533" alt="image" src="https://github.com/user-attachments/assets/37ae84f5-2799-46a6-b966-adf76704ed9d" />


## 2. Motor Control Configuration

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


## 3. Odometry Integration

Encoder feedback from the RoboClaw is used to calculate wheelchair movement.

The driver publishes odometry on:

```text
/odom
```

Relevant coordinate frames:

- Parent frame: `odom`
- Child frame: `base_footprint`



