# Foxglove Setup

## 1. Purpose

This document describes how to connect Foxglove Studio to the powered wheelchair ROS 2 system for visualization and monitoring.

## 2. System Architecture

The project uses two computers:

| Computer | Foxglove Component |
|---|---|
| LattePanda 3 Delta | Foxglove Bridge |
| Dell XPS 13 | Foxglove Studio |

The Foxglove Bridge runs on the LattePanda as part of the wheelchair system launch. Foxglove Studio runs on the XPS.

## 3. Start the Wheelchair System

1. Power on the LattePanda.
2. Connect to it from the XPS using SSH.
3. Launch the wheelchair ROS 2 system using the verified launch procedure.
4. Confirm that the Foxglove Bridge has started successfully.

The bridge must be running before Foxglove Studio can connect.

## 4. Open Foxglove Studio

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

## 5. Verify the Connection

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

## 6. Visualization Panels

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

Save useful panel layouts as Foxglove layouts for future sessions.

## 7. Destination Navigation Interface

The project includes a Foxglove interface for selecting predefined wheelchair destinations and requesting navigation.

The interface also provides a cancellation control.

Before using destination navigation, confirm that:

- The correct map is loaded.
- Localization is working.
- The robot's position is correct.
- The navigation system is active.
- The wheelchair's path is clear.
- The emergency stop is accessible.

## 8. Troubleshooting

If Foxglove Studio cannot connect:

1. Confirm that the wheelchair system is running on the LattePanda.
2. Check whether the Foxglove Bridge node is running.
3. Confirm the bridge IP address and port.
4. Check network connectivity between the XPS and LattePanda.
5. Confirm that firewall settings are not blocking the connection.
6. Restart the connection in Foxglove Studio if necessary.

If the connection works but topics are missing, check whether the corresponding ROS 2 nodes and publishers are running.

## 9. Performance Considerations

Displaying large point clouds and multiple visualization panels can increase computer resource usage.

For better performance:

- Avoid displaying unnecessary high-volume topics.
- Use throttled point clouds where appropriate.
- Close unused panels.
- Monitor CPU usage when displaying 3D data.
- Keep the visualization configuration focused on the task.

## 10. Important Notes

- Foxglove Bridge runs on the LattePanda.
- Foxglove Studio runs on the XPS.
- The bridge must be reachable over the network.
- Do not confuse the Foxglove Bridge with Foxglove Studio.
- Record changes to bridge settings and visualization layouts in the development log.
