# ROS 2 Issues

## 1. ROS 2 Nodes Not Visible

**Possible causes:**
- ROS 2 nodes are not running.
- Incorrect `ROS_DOMAIN_ID`.
- Network communication problems.

**Checks:**
- Run `ros2 node list`.
- Verify `ROS_DOMAIN_ID` on both computers.
- Check network connectivity.
- Confirm that `ROS_LOCALHOST_ONLY` is set appropriately.

## 2. Topics Not Available

**Possible causes:**
- The publishing node has stopped.
- Incorrect topic names.
- ROS 2 communication issues.

**Checks:**
- Run `ros2 topic list`.
- Run `ros2 topic info <topic_name>`.
- Check the relevant node and launch-file configuration.

## 3. TF Transform Errors

**Possible causes:**
- Missing transforms.
- Incorrect frame names.
- Incorrect static transform configuration.
- Delayed transform data.

**Checks:**
- Run `ros2 run tf2_ros tf2_echo <source_frame> <target_frame>`.
- Inspect the TF tree.
- Verify static transforms in the launch files.

## 4. Odometry Frame Issues

The wheelchair odometry uses:

- Parent frame: `odom`
- Child frame: `base_footprint`

Check that the odometry message and TF tree use the expected frame names.

[ADD ERROR MESSAGES AND VERIFIED SOLUTIONS HERE]
