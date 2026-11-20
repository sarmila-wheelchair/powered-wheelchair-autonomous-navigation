# TF Tree Structure

## 1. Main TF Structure

The following is the intended high-level frame structure:

```text
map
 └── odom
      └── base_footprint
           └── base_link
                ├── velodyne
                └── camera0_link
                     └── camera0_depth_optical_frame
```

## 2. Transform Publishers

The project uses different ROS 2 components to publish transforms.

| Component | Transform responsibility |
|---|---|
| Wheelchair motor/odometry node | Publishes odometry-related transform, subject to its configuration. |
| AMCL | Publishes the global `map` to `odom` transform during localization. |
| Static transform publisher | Publishes fixed relationships between robot and sensor frames. |

The exact publisher configuration should be verified against the active launch files.


