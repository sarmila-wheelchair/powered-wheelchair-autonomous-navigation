# Sensor Issues

## 1. Velodyne VLP-16

**Possible symptoms:**
- No LiDAR point cloud.
- Missing or incomplete scan data.
- Sensor connection failure.

**Checks:**
- Verify the sensor IP address (`192.168.1.201`).
- Check the Ethernet connection.
- Confirm UDP data is received on port `2368`.
- Check `/velodyne_points` using `ros2 topic hz`.
- Verify the sensor frame is `velodyne`.

## 2. Intel RealSense D455

**Possible symptoms:**
- No depth image or point cloud.
- Camera connection failure.
- Point cloud updates slowly.

**Checks:**
- Verify the USB connection.
- Check camera detection.
- Inspect the camera node and its parameters.
- Check `/camera/camera/depth/color/points`.
- Verify the camera TF configuration.

## 3. Point Cloud Throttling

The system uses throttled point cloud topics to reduce processing load.

| Sensor | Throttled Topic | Configured Rate |
|---|---|---:|
| VLP-16 | `/velodyne_points_throttled` | 3 Hz |
| D455 | `/camera/camera/depth/color/points_throttled` | 2 Hz |

Check the corresponding throttle nodes if the output topics stop updating.

## 4. Point Cloud to LaserScan

**Possible symptoms:**
- No filtered laser scan.
- Incorrect obstacle detection.
- Missing scan data.

**Checks:**
- Verify the point cloud input topic.
- Check the target frame `base_footprint`.
- Inspect minimum and maximum height filters.
- Check `/scan_filtered` and `/d455_scan_filtered`.

[ADD SENSOR ERROR MESSAGES AND VERIFIED SOLUTIONS HERE]
