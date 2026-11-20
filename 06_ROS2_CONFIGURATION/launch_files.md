# ROS 2 Launch Files


## 1. Main System Launch File

Full path:

```text
~/wheelchair_nav2/launch/wheelchair_system.launch.py
```

- Starting the Velodyne VLP-16 driver.
- Starting the Intel RealSense D455 camera.
- Publishing static transforms.
- Starting point cloud throttling processes.
- Converting selected point cloud data into laser scans.
- Starting the Foxglove Bridge.
- Coordinating other robot system components.

Nav2 configuration is maintained in:

- AMCL localization.
- Map server.
- Planner server.
- Controller server.
- Behavior server.
- BT Navigator.
- Costmaps.
- Velocity smoother.
