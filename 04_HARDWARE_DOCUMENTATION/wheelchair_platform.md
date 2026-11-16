# Powered Wheelchair Platform

## 1. Overview

The powered wheelchair is the physical mobile platform used for autonomous navigation.

It is equipped with two independently controlled drive motors, a motor controller, onboard computing hardware, and environmental sensors.

The platform is designed to support mapping, localization, obstacle detection, and autonomous navigation using ROS 2.

## 2. Platform Configuration

| Parameter | Details |
|---|---|
| Platform | Powered wheelchair |
| Drive configuration | Differential drive |
| Drive motors | Two |
| Motor controller | RoboClaw HV60 2x60A |
| Robot computer | LattePanda 3 Delta |
| Main LiDAR | Velodyne VLP-16 |
| Depth camera | Intel RealSense D455 |
| ROS 2 distribution | Humble |

Additional information:

- Wheelchair manufacturer: `[TO BE ADDED]`
- Wheelchair model: `[TO BE ADDED]`
- Maximum payload: `[TO BE ADDED]`
- Battery specifications: `[TO BE ADDED]`
- Overall weight: `[TO BE ADDED]`

## 3. Physical Dimensions

Previously recorded wheelchair geometry:

| Parameter | Measurement |
|---|---|
| Front-to-back wheelbase | 90 cm |
| Left-to-right wheel distance | 68 cm |
| Base footprint center height above floor | 17 cm |
| Front edge from `base_link` | Approximately 45 cm |
| Rear edge from `base_link` | Approximately 45 cm |

These dimensions should be verified against the latest physical measurements.

### Additional Measurements

| Parameter | Measurement |
|---|---|
| Overall wheelchair length | `[TO BE ADDED]` |
| Overall wheelchair width | `[TO BE ADDED]` |
| Overall wheelchair height | `[TO BE ADDED]` |
| Wheel diameter | `[TO BE ADDED]` |
| Wheel radius | 16.5 cm (previously recorded; verify) |
| Ground clearance | `[TO BE ADDED]` |
| Seat height | `[TO BE ADDED]` |

## 4. Drive System

The wheelchair uses a differential-drive arrangement.

The left and right drive motors are controlled independently through the RoboClaw motor controller.

This arrangement allows the wheelchair to:

- Move forward.
- Move backward.
- Turn left.
- Turn right.
- Rotate in place.

### Motor Configuration

| Parameter | Details |
|---|---|
| Left motor channel | `[VERIFY M1/M2 ASSIGNMENT]` |
| Right motor channel | `[VERIFY M1/M2 ASSIGNMENT]` |
| Motor controller | RoboClaw HV60 |
| Drive type | Differential drive |

### Motor Photographs

`[INSERT LEFT MOTOR PHOTOGRAPH HERE]`

`[INSERT RIGHT MOTOR PHOTOGRAPH HERE]`

## 5. Robot Coordinate Reference

The wheelchair uses the following coordinate frames:

- `map`
- `odom`
- `base_footprint`
- `base_link`

The `base_footprint` frame represents the floor-level reference for the robot.

The `base_link` frame is positioned approximately 17 cm above the floor.

### Base Frame Relationship

Previously configured relationship:

```text
base_footprint
       |
       | Z = +0.17 m
       |
       v
   base_link
```

### Coordinate Frame Diagram

`[INSERT ROBOT COORDINATE FRAME DIAGRAM HERE]`

## 6. Sensor Mounting Positions

### 6.1 Velodyne VLP-16

Previously recorded mounting information:

- Approximately 50 cm behind `base_link`.
- Approximately 132–135 cm above the floor.

Photograph:

`[INSERT VLP-16 MOUNTING PHOTOGRAPH HERE]`

### 6.2 Intel RealSense D455

Previously recorded mounting information:

- Approximately 35 cm in front of `base_link`.
- Approximately 18 cm to the left.
- Camera base approximately 28 cm above the floor.
- Camera center approximately 29 cm above the floor.

Photograph:

`[INSERT D455 MOUNTING PHOTOGRAPH HERE]`

## 7. Footprint Configuration

The robot footprint represents the physical area occupied by the wheelchair.

A previously used Nav2 footprint was:

```yaml
footprint: "[[ -0.50, -0.40 ],
            [ -0.50,  0.40 ],
            [  0.50,  0.40 ],
            [  0.50, -0.40 ]]"
```

This corresponds approximately to:

- Length: 1.0 m
- Width: 0.8 m

**Important:** Verify the active footprint in the current Nav2 configuration and compare it with the actual wheelchair dimensions.

### Footprint Diagram

`[INSERT TOP-VIEW WHEELCHAIR FOOTPRINT DIAGRAM HERE]`

## 8. Power System

Document the wheelchair's electrical power system.

| Component | Details |
|---|---|
| Main battery | `[TO BE ADDED]` |
| Battery voltage | `[TO BE ADDED]` |
| Battery capacity | `[TO BE ADDED]` |
| Motor controller supply | `[TO BE ADDED]` |
| Computer power supply | `[TO BE ADDED]` |
| Sensor power supply | `[TO BE ADDED]` |

### Electrical Diagram

`[INSERT COMPLETE POWER DISTRIBUTION DIAGRAM HERE]`

## 9. Safety Features

Document the wheelchair's physical safety features:

- Emergency stop.
- Motor controller protection.
- Battery protection.
- Mechanical braking system.
- Manual wheelchair controls.
- Physical power switches.

Additional safety information:

`[ADD VERIFIED SAFETY FEATURE DETAILS HERE]`

## 10. Testing and Measurements

Record the following physical and operational tests:

- Wheel diameter measurement.
- Wheelbase measurement.
- Track width measurement.
- Overall footprint measurement.
- Forward and reverse movement.
- Left and right rotation.
- Turning clearance.
- Braking performance.

### Measurement Records

`[INSERT MEASUREMENT TABLES AND TEST RESULTS HERE]`

### Photographs

`[INSERT WHEELCHAIR FRONT VIEW HERE]`

`[INSERT WHEELCHAIR SIDE VIEW HERE]`

`[INSERT WHEELCHAIR TOP VIEW HERE]`

## 11. References

- Motor controller documentation: `roboclaw_motor_controller.md`
- LiDAR documentation: `velodyne_vlp16.md`
- Camera documentation: `realsense_d455.md`
- Robot geometry documentation: `[LINK TO BE ADDED]`
