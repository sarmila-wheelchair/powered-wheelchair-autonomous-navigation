# Recovery Behaviours

## 1. Overview

Nav2 provides recovery behaviours to help the wheelchair respond when navigation cannot proceed normally.

## 2. Configured Behaviours

The current Nav2 configuration includes:

| Behaviour | Purpose |
|---|---|
| Spin | Rotate the wheelchair in place. |
| BackUp | Move the wheelchair backwards. |
| DriveOnHeading | Move in a specified direction. |
| Wait | Pause navigation temporarily. |

## 3. Configuration

| Parameter | Value |
|---|---:|
| Behaviour Cycle Frequency | 10 Hz |
| Simulation Ahead Time | 2.0 s |
| Maximum Rotational Velocity | 0.3 rad/s |
| Minimum Rotational Velocity | 0.1 rad/s |
| Rotational Acceleration Limit | 0.4 rad/s² |

## 4. Testing

**Recovery behaviour observations:**

[ADD TEST RESULTS AND FOXGLOVE SCREENSHOTS HERE]
