# Testing and Utility Scripts

## 1. Overview

This document describes the scripts and utilities used to test, verify, and troubleshoot the powered wheelchair autonomous navigation system.

Testing scripts help evaluate motor movement, encoder feedback, odometry accuracy, turning performance, and navigation behaviour.

## 2. Motor Movement Testing

Motor movement scripts are used to test basic wheelchair movement.

Typical tests include:

- Forward movement.
- Backward movement.
- Left turning.
- Right turning.
- Stopping.

**Test script filenames:**

[TO BE ADDED]

**Source code:**

[INSERT CODE HERE]

## 3. Distance Testing

Distance testing evaluates the accuracy of the wheelchair's odometry.

A previous forward movement test was performed over an intended distance of 1 metre.

Historical observations:

| Measurement | Result |
|---|---:|
| Odometry Distance | 1.004 m |
| Physical Distance | Approximately 1.10 m |

These results are historical and should not be treated as the final calibrated performance.

**Distance testing script:**

[INSERT CODE HERE]

**Updated test results:**

[TEST RESULTS TO BE ADDED]

## 4. Rotation Testing

Rotation testing evaluates the accuracy of the wheelchair's angular odometry.

A previous right-turn test was performed with an intended rotation of 360°.

Historical observations:

| Measurement | Result |
|---|---:|
| Odometry Rotation | Approximately 360.3° |
| Physical Rotation | Approximately 355° |

These results are historical and require further calibration.

**Rotation testing script:**

[INSERT CODE HERE]

**Updated test results:**

[TEST RESULTS TO BE ADDED]

## 5. Navigation Testing

Navigation tests evaluate the wheelchair's ability to reach predefined destinations.

Testing should include:

- Navigation to each predefined destination.
- Navigation cancellation.
- Obstacle avoidance.
- Path planning.
- Goal completion.
- Recovery from unsuccessful navigation attempts.

**Navigation testing scripts:**

[INSERT CODE HERE]

**Navigation test results:**

[TEST RESULTS TO BE ADDED]

## 6. ROS 2 Diagnostic Commands

The following commands can help inspect the running ROS 2 system.

List active nodes:

```bash
ros2 node list
```

List active topics:

```bash
ros2 topic list
```

Check odometry messages:

```bash
ros2 topic echo /odom
```

Check velocity commands:

```bash
ros2 topic echo /cmd_vel
```

Check topic publishing frequency:

```bash
ros2 topic hz /odom
```

Inspect the navigation action:

```bash
ros2 action info /navigate_to_pose
```

Inspect TF information:

```bash
ros2 run tf2_tools view_frames
```

## 7. Utility Scripts

Additional utility scripts may be used for:

- System startup and shutdown.
- Sensor verification.
- TF inspection.
- Navigation testing.
- Performance monitoring.
- Data recording and analysis.

**Utility script list:**

[TO BE ADDED]

**Source code:**

[INSERT CODE HERE]

## 8. Test Records

Testing records should include:

| Test Date | Test Name | Configuration | Result | Notes |
|---|---|---|---|---|
| [DATE] | [TEST NAME] | [CONFIGURATION] | [RESULT] | [NOTES] |
| [DATE] | [TEST NAME] | [CONFIGURATION] | [RESULT] | [NOTES] |
| [DATE] | [TEST NAME] | [CONFIGURATION] | [RESULT] | [NOTES] |

## 9. Supporting Materials

**Terminal screenshots:**

[INSERT IMAGE HERE]

**Test videos:**

[INSERT VIDEO LINK HERE]

**Recorded ROS 2 data:**

[LINK TO ROS BAG FILES OR DATA]

**Plots and analysis:**

[INSERT IMAGE HERE]

## 10. Additional Notes

[ADDITIONAL TESTING AND IMPLEMENTATION DETAILS TO BE ADDED]
