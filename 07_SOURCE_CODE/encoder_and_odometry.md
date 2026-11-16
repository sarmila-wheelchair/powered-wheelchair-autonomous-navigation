# Wheel Encoder and Odometry

## 1. Overview

The powered wheelchair uses wheel encoder feedback to estimate its movement.

The encoder readings from the RoboClaw motor controller are processed by the ROS 2 motor driver to calculate wheel rotation, linear displacement, angular displacement, and odometry.

Odometry provides an estimate of the wheelchair's position and orientation over time.

## 2. Encoder Configuration

The RoboClaw driver reads encoder measurements from the motor controller.

Current encoder assignments in the driver:

```python
left_enc_raw = encoders[2]
right_enc_raw = encoders[1]
```

| Parameter | Previously Observed Value |
|---|---:|
| Encoder Counts per Revolution | 233102 |
| Gear Ratio | 1.0 |
| Wheel Radius | 0.165 m |
| Wheel Separation | 0.493 m |

**Note:** These are previously observed software configuration values. Confirm the currently active values and calibration before treating them as final.

## 3. Differential Drive Odometry

The wheelchair uses two independently driven wheels.

The difference between the left and right wheel movements determines the wheelchair's rotation.

The standard differential-drive equations are:

Linear displacement:

```text
Δs = (Δs_right + Δs_left) / 2
```

Angular displacement:

```text
Δθ = (Δs_right - Δs_left) / b
```

Where:

- `Δs_right` = right wheel displacement.
- `Δs_left` = left wheel displacement.
- `b` = effective wheel separation.

These equations describe the general differential-drive model. The exact implementation should be documented using the actual driver source code.

## 4. Odometry Topic

The motor driver publishes:

```text
/odom
```

Current observed frame information:

| Field | Value |
|---|---|
| Header Frame | `odom` |
| Child Frame | `base_footprint` |

The odometry message provides position, orientation, and velocity information for the wheelchair.

## 5. TF Relationship

The odometry system provides the transform:

```text
odom → base_footprint
```

This transform represents the estimated movement of the wheelchair relative to its odometry reference frame.

The localization system provides the map-to-odometry relationship:

```text
map → odom
```

Together, these transforms support localization and autonomous navigation.

## 6. Calibration and Accuracy

Encoder-based odometry must be calibrated against actual wheelchair movement.

Previous test observations:

| Test | Recorded Odometry | Physical Measurement |
|---|---:|---:|
| Forward movement test | 1.004 m | Approximately 1.10 m |
| Right 360° rotation test | Approximately 360.3° | Approximately 355° |

These are historical test observations, not final calibrated results.

**Updated calibration results:**

[CALIBRATION RESULTS TO BE ADDED]

## 7. Source Code

**Encoder reading implementation:**

[INSERT CODE HERE]

**Wheel displacement calculation:**

[INSERT CODE HERE]

**Odometry calculation and publishing:**

[INSERT CODE HERE]

**Source file link:**

[LINK TO SOURCE FILE]

## 8. Testing and Verification

The following tests should be documented:

- Forward and backward distance accuracy.
- Left and right turning accuracy.
- Encoder count consistency.
- Odometry drift.
- TF transform stability.
- Odometry behaviour during autonomous navigation.

**Test procedure:**

[TEST PROCEDURE TO BE ADDED]

**Test results:**

[TEST RESULTS TO BE ADDED]

**Supporting images and plots:**

[INSERT IMAGE HERE]

## 9. Additional Notes

[ADDITIONAL IMPLEMENTATION DETAILS TO BE ADDED]
