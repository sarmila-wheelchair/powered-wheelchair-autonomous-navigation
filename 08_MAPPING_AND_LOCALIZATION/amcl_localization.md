# AMCL Localization

## 1. Overview

The wheelchair uses Nav2 AMCL (Adaptive Monte Carlo Localization) to estimate its position and orientation within a previously saved map.

AMCL uses LiDAR scan measurements, odometry, and a particle filter to estimate the robot's pose.

## 2. Configuration

AMCL parameters are configured in:

```text
~/wheelchair_nav2/config/nav2_params.yaml
```

Previously configured settings:

| Parameter | Value |
|---|---:|
| Global Frame | `map` |
| Odometry Frame | `odom` |
| Robot Base Frame | `base_link` |
| Scan Topic | `/scan` |
| Transform Tolerance | 2.0 s |
| Minimum Particles | 500 |
| Maximum Particles | 2000 |

**Note:** Make sure the update frequency for amcl is 20HZ to avoid delayed data or 'world spinning issues'

## 3. Localization Inputs

AMCL uses:

- A previously saved occupancy grid map.
- Laser scan measurements.
- Wheelchair odometry.
- TF transforms.

## 4. Localization Process

1. Load the saved map.
2. Start AMCL.
3. Set the wheelchair's initial pose on the map.
4. Allow AMCL to update its particle distribution.
5. Monitor the estimated robot position.
6. Confirm localization stability before autonomous navigation.

## 5. TF Relationship

AMCL provides the transform:

```text
map → odom
```

The motor controller's odometry provides:

```text
odom → base_footprint
```

Together, these transforms establish the wheelchair's estimated position in the map.

