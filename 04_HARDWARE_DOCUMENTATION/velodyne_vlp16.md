# Velodyne VLP-16 LiDAR

## 1. Overview

The Velodyne VLP-16 is a 3D LiDAR sensor used by the powered wheelchair for environmental perception.

It provides point cloud data for mapping, obstacle detection, visualization, and navigation.

## 2. Hardware Identification

| Parameter | Details |
|---|---|
| Manufacturer | Velodyne |
| Model | VLP-16 |
| Sensor type | 3D LiDAR |
| Number of laser channels | 16 |
| Rotation speed used in this project | 600 RPM |
| LiDAR IP address | `192.168.1.201` |
| Data port | UDP 2368 |
| Connected computer | LattePanda 3 Delta |

### Additional Information

- Serial number: `[TO BE ADDED]`
- Firmware version: `[TO BE ADDED]`
- Purchase date: `[TO BE ADDED]`
- Manufacturer datasheet: `[INSERT LINK]`

## 3. Physical Installation

The VLP-16 is mounted on the powered wheelchair.

Previously recorded mounting information:

| Parameter | Measurement |
|---|---|
| Position relative to `base_link` | Approximately 0.50 m behind |
| Height above floor | Approximately 1.32–1.35 m |
| Sensor frame | `velodyne` |

Verify these measurements against the current physical installation.

### Installation Photograph

`[INSERT VLP-16 MOUNTING PHOTOGRAPH HERE]`

### Mounting Diagram

`[INSERT SENSOR POSITION AND DIMENSION DIAGRAM HERE]`

## 4. Network Configuration

The VLP-16 communicates with the LattePanda over Ethernet.

| Parameter | Value |
|---|---|
| Sensor IP | `192.168.1.201` |
| LattePanda interface | `enp1s0` |
| LattePanda sensor-network IP | `192.168.1.100` |
| UDP data port | `2368` |
| Rotation speed | 600 RPM |

### Network Diagram

`[INSERT ETHERNET CONNECTION DIAGRAM HERE]`

## 5. ROS 2 Integration

The VLP-16 is integrated into the ROS 2 Humble system using the Velodyne ROS 2 driver.

### Main ROS 2 Topic

Raw point cloud:

```text
/velodyne_points
```

Throttled point cloud:

```text
/velodyne_points_throttled
```

Filtered 2D scan:

```text
/scan_filtered
```

The project uses point cloud throttling to reduce processing load before downstream processing.

### Data Flow

```text
Velodyne VLP-16
       |
       v
Velodyne ROS 2 Driver
       |
       v
/velodyne_points
       |
       v
Point Cloud Throttling
       |
       v
/velodyne_points_throttled
       |
       v
PointCloud-to-Laserscan
       |
       v
/scan_filtered
       |
       v
Navigation / Obstacle Processing
```

Verify the actual active launch configuration before treating this flow as the complete current pipeline.

## 6. Coordinate Frames and TF

The LiDAR uses the `velodyne` coordinate frame.

Its position relative to the wheelchair is defined through a static transform.

Previously recorded mounting configuration:

- Approximately 0.50 m behind `base_link`.
- Approximately 1.32 m above the floor.

### TF Configuration

`[INSERT CURRENT STATIC TRANSFORM COMMAND OR LAUNCH CONFIGURATION HERE]`

### TF Verification

```bash
ros2 run tf2_ros tf2_echo base_link velodyne
```

Record the verified translation and rotation:

`[ADD TF OUTPUT HERE]`

## 7. Point Cloud Configuration

The VLP-16 provides 3D point cloud data.

Previously observed operating characteristics:

| Parameter | Observation |
|---|---|
| Rotation speed | 600 RPM |
| Expected scan frequency | Approximately 10 Hz |
| Observed raw point cloud frequency | Approximately 9.6–9.9 Hz |
| Throttled frequency target | 2.0 Hz |

### Point Cloud Verification

```bash
ros2 topic hz /velodyne_points
```

Check throttled data:

```bash
ros2 topic hz /velodyne_points_throttled
```

### Additional Configuration

- Driver launch file: `[INSERT FILE PATH]`
- Driver parameters: `[INSERT CONFIGURATION]`
- Packet configuration: `[INSERT DETAILS]`

## 8. Point Cloud to 2D LaserScan

The project converts the 3D LiDAR point cloud into a 2D LaserScan for navigation processing.

Relevant node:

`pointcloud_to_laserscan`

Input:

```text
/velodyne_points_throttled
```

Output:

```text
/scan_filtered
```

Target frame:

```text
base_footprint
```

### Filtering Parameters

| Parameter | Current / Known Setting |
|---|---|
| Target frame | `base_footprint` |
| Transform tolerance | 0.05 s |
| Minimum range | 0.2 m |
| Maximum range | 12.0 m |
| Minimum height | `[VERIFY CURRENT VALUE]` |
| Maximum height | `[VERIFY CURRENT VALUE]` |

Insert the complete verified configuration:

`[INSERT POINTCLOUD_TO_LASERSCAN CONFIGURATION HERE]`

## 9. Testing and Calibration

Document the following:

- LiDAR network connectivity.
- Packet reception.
- Point cloud frequency.
- Point cloud visualization.
- TF alignment.
- Obstacle detection.
- LaserScan filtering.
- Mapping performance.

### Test Results

`[INSERT TERMINAL OUTPUTS, SCREENSHOTS, AND TEST RESULTS HERE]`

## 10. Troubleshooting

| Issue | Possible Area to Investigate |
|---|---|
| No point cloud | Sensor power, Ethernet, UDP packets |
| Incorrect point cloud position | Static TF configuration |
| Low point cloud frequency | Network and processing load |
| Missing obstacles | Height filtering and sensor visibility |
| Incorrect LaserScan | Point cloud conversion parameters |
| High CPU usage | Point cloud frequency and visualization load |

## 11. Images and Diagrams

### Sensor Photograph

`[INSERT VLP-16 PHOTOGRAPH HERE]`

### Point Cloud Visualization

`[INSERT FOXGLOVE SCREENSHOT HERE]`

### Coordinate Frame Diagram

`[INSERT TF DIAGRAM HERE]`

## 12. References

- Manufacturer: Velodyne
- Product datasheet: `[INSERT OFFICIAL DATASHEET LINK]`
- ROS 2 driver: `[INSERT GITHUB LINK]`
- Project launch configuration: `[INSERT FILE LINK]`
