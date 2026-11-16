# DWB Controller Configuration

## 1. Overview

The wheelchair uses the Dynamic Window Based (DWB) controller to follow the global path and generate velocity commands while navigating around obstacles.

## 2. Controller Configuration

| Parameter | Value |
|---|---:|
| Controller Plugin | `dwb_core::DWBLocalPlanner` |
| Controller Frequency | 20 Hz |
| Maximum Linear Velocity (X) | 0.4 m/s |
| Maximum Angular Velocity | 0.7 rad/s |
| Simulation Time | 1.7 s |
| Linear Acceleration Limit | 0.8 m/s² |
| Angular Acceleration Limit | 1.5 rad/s² |
| X Velocity Samples | 8 |
| Angular Velocity Samples | 10 |

## 3. Trajectory Evaluation

The DWB controller evaluates candidate trajectories using the following critics:

- `RotateToGoal`
- `Oscillation`
- `BaseObstacle`
- `ObstacleFootprint`
- `GoalAlign`
- `PathAlign`
- `PathDist`
- `GoalDist`

These critics help evaluate obstacle clearance, path alignment, goal direction, and final positioning.

## 4. Critic Weights

| Critic | Scale |
|---|---:|
| BaseObstacle | 0.02 |
| ObstacleFootprint | 0.02 |
| PathAlign | 50.0 |
| PathDist | 50.0 |
| GoalAlign | 30.0 |
| GoalDist | 30.0 |
| RotateToGoal | 32.0 |
| Oscillation | 1.0 |

## 5. Goal Tolerances

| Parameter | Value |
|---|---:|
| XY Goal Tolerance | 0.08 m |
| Stopped Velocity Threshold | 0.03 m/s |

The controller's XY tolerance is configured separately from the Nav2 Goal Checker tolerance.

## 6. Testing

**Controller behaviour and observations:**

[ADD FOXGLOVE SCREENSHOTS AND TEST RESULTS HERE]
