# Sensor Processing Scripts

## 1. Overview

The powered wheelchair uses two primary sensing systems:

1. Velodyne VLP-16 LiDAR.
2. Intel RealSense D455 depth camera.

Sensor processing components prepare the incoming data for visualization, obstacle detection, localization, and autonomous navigation.

The processing pipeline also uses throttling to reduce the amount of sensor data being processed and transmitted.

## 2. Velodyne VLP-16 Processing

The VLP-16 produces 3D point cloud data.

Raw point cloud topic:

```text
/velodyne_points
```

Throttled point cloud topic:

```text
/velodyne_points_throttled
```

The throttled point cloud is configured with a target rate of approximately 2 Hz.

### Point Cloud to Laser Scan

The project uses `pointcloud_to_laserscan` to convert 3D LiDAR data into a 2D laser scan.

Configured output topic:

```text
/scan_filtered
```

Target frame:

```text
base_footprint
```

This filtered scan is intended for use by 2D mapping, localization, and navigation components, depending on the active configuration.

**Processing configuration:**

[INSERT CODE HERE]

## 3. Intel RealSense D455 Processing

The Intel RealSense D455 provides depth information and point cloud data.

Configuration file:

```text
~/wheelchair_nav2/config/d455.yaml
```

Raw point cloud topic:

```text
/camera/camera/depth/color/points
```

Throttled point cloud topic:

```text
/camera/camera/depth/color/points_throttled
```

The throttled point cloud is configured for approximately 2 Hz.

The D455 point cloud is used as a source of 3D information for obstacle detection and costmap processing.

**Camera configuration:**

[INSERT CONFIGURATION HERE]

## 4. Data Throttling

Throttling reduces the frequency of incoming point cloud messages.

This helps manage CPU usage and data transmission requirements.

| Sensor | Topic | Target Frequency |
|---|---|---:|
| VLP-16 | `/velodyne_points_throttled` | 2 Hz |
| D455 | `/camera/camera/depth/color/points_throttled` | 2 Hz |

The actual publishing frequencies may differ slightly from the configured target rates.

**Throttling implementation:**

[INSERT CODE HERE]

## 5. Sensor Data Pipeline

The general sensor processing flow is:

```text
VLP-16 LiDAR
     |
     v
Raw Point Cloud
     |
     v
Point Cloud Throttling
     |
     v
pointcloud_to_laserscan
     |
     v
/scan_filtered
     |
     v
2D Navigation / Localization


Intel RealSense D455
     |
     v
Depth and Point Cloud
     |
     v
Point Cloud Throttling
     |
     v
3D Obstacle Information
     |
     v
Nav2 Costmap Processing
```

**Note:** Verify the active topic connections and costmap subscriptions before treating this as the final runtime architecture.

## 6. Visualization

Foxglove Studio is used to visualize sensor data remotely.

The visualization can include:

- VLP-16 point cloud.
- D455 point cloud.
- Filtered laser scan.
- Robot TF frames.
- Local and global costmaps.

**Sensor visualization screenshots:**

[INSERT IMAGE HERE]

## 7. Performance Considerations

Point cloud processing can require significant CPU and network resources.

The project uses throttling to reduce processing and visualization load.

Performance testing should consider:

- Point cloud publishing frequency.
- CPU usage.
- Foxglove Studio performance.
- Sensor data delay.
- Navigation obstacle detection reliability.

**Performance measurements:**

[TEST RESULTS TO BE ADDED]

## 8. Source Code and Configuration

**Sensor processing source files:**

[LINK TO SOURCE FILES]

**VLP-16 processing configuration:**

[INSERT CODE HERE]

**D455 processing configuration:**

[INSERT CODE HERE]

**Point cloud conversion configuration:**

[INSERT CODE HERE]

## 9. Testing and Verification

The following should be verified:

- Raw sensor topics are publishing.
- Throttled topics are publishing.
- Point cloud frames are correct.
- Filtered laser scans are visible.
- Costmaps receive the intended sensor data.
- Sensor processing does not introduce unacceptable delays.

**Test results:**

[TEST RESULTS TO BE ADDED]

## 10. Additional Notes

[ADDITIONAL IMPLEMENTATION DETAILS TO BE ADDED]
