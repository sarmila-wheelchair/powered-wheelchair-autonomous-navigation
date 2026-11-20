# Foxglove Setup


## 1. System Architecture

The project uses two computers:

| Computer | Foxglove Component |
|---|---|
| LattePanda 3 Delta | Foxglove Bridge |
| Dell XPS 13 | Foxglove Studio |


## 2. Open Foxglove Studio

On the XPS:

1. Open Foxglove Studio.
2. Select the option to open a connection.
3. Choose a WebSocket connection.
4. Enter the address of the Foxglove Bridge running on the LattePanda.

The usual address format is:

```text
ws://<LATTEPANDA_IP>:8765
```

Replace `<LATTEPANDA_IP>` with the LattePanda's reachable network IP address.

The port shown here is the project's known Foxglove Bridge port. Confirm the actual port in the active launch configuration if the connection fails.

## 3. Verify the Connection

After connecting, check that Foxglove Studio can receive the expected ROS 2 data.

Useful topics to check include:

| Topic | Purpose |
|---|---|
| `/tf` | Robot coordinate transforms |
| `/tf_static` | Static coordinate transforms |
| `/odom` | Wheelchair odometry |
| `/map` | Occupancy grid map |
| `/scan` | 2D laser scan |
| `/velodyne_points` | VLP-16 point cloud |
| `/camera/camera/depth/color/points_throttled` | Throttled depth-camera point cloud |
| `/cmd_vel` | Velocity commands |

Topic availability depends on which nodes are currently running.

## 4. Visualization Panels

Foxglove can be configured with panels to monitor:

- Robot position and orientation
- Occupancy grid map
- LiDAR point cloud
- Depth-camera point cloud
- Robot transforms
- Odometry
- Navigation goals and paths
- Local and global costmaps
- Navigation status


## 5. Troubleshooting

If Foxglove Studio cannot connect:

1. Check whether the Foxglove Bridge node is running.
2. Confirm the bridge IP address and port.
3. Check network connectivity between the XPS and LattePanda.
4. Restart the connection in Foxglove Studio if necessary.          # this actually helps


## 6. Performance Considerations

Displaying large point clouds (esp vlp) and multiple visualization panels can increase CPU %.

For better performance:

- Avoid displaying unnecessary high-volume topics.
- Use throttled point clouds where appropriate.
- Close unused panels.
- Monitor CPU usage when displaying 3D data.
- Keep the visualization configuration focused on the task.

  <img width="760" height="340" alt="Screenshot from 2026-11-12 16-43-56" src="https://github.com/user-attachments/assets/91dfee5b-c6e3-4d1d-9939-b0582040faaf" />

