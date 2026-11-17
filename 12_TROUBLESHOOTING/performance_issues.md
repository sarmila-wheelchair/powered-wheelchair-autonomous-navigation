# Performance Issues

## 1. High CPU Usage

**Possible symptoms:**
- Foxglove Studio becomes slow.
- 3D Scene updates are delayed.
- Visualization becomes unresponsive.

**Possible causes:**
- High point cloud processing load.
- Multiple visualization layers running simultaneously.
- High sensor publishing rates.

**Checks:**
- Monitor CPU usage on both computers.
- Disable unnecessary visualization layers.
- Use throttled point cloud topics.
- Compare CPU usage with individual sensor topics enabled.

## 2. Delayed Sensor Updates

**Possible causes:**
- High processing load.
- Network communication delays.
- Excessive point cloud data.

**Checks:**
- Check topic publishing rates using `ros2 topic hz`.
- Inspect network connectivity.
- Verify throttle node configuration.

## 3. Delayed TF or Map Updates

**Possible causes:**
- CPU overload.
- Delayed sensor processing.
- Transform publishing or timestamp issues.

**Checks:**
- Monitor CPU usage.
- Inspect TF update rates.
- Check ROS 2 logs for timing warnings.

## 4. Performance Optimization

- Keep sensor processing rates appropriate for the onboard computer.
- Use throttling where necessary.
- Avoid displaying unnecessary point clouds simultaneously.
- Monitor LattePanda and XPS 13 resource usage separately.

[ADD FUTURE PERFORMANCE TEST RESULTS AND VERIFIED SOLUTIONS HERE]
