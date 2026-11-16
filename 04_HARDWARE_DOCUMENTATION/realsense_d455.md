# Intel RealSense D455 Depth Camera

## 1. Overview

The Intel RealSense D455 is a depth camera used by the powered wheelchair for environmental perception.

It provides depth information and 3D point cloud data to support obstacle detection, visualization, and navigation.

## 2. Hardware Identification

| Parameter | Details |
|---|---|
| Manufacturer | Intel |
| Model | RealSense D455 |
| Sensor type | Stereo depth camera |
| ROS 2 distribution | Humble |
| ROS 2 driver | `realsense2_camera` |
| Camera name | `camera0` |
| USB connection | `[VERIFY CONNECTION TYPE]` |
| Firmware version | 5.17.3.10 |
| RealSense SDK version | 2.58.4 |
| ROS wrapper version | 4.58.4 |

Additional information:

- Serial number: `[TO BE ADDED]`
- Purchase date: `[TO BE ADDED]`
- Manufacturer datasheet: `[INSERT LINK]`

## 3. Physical Installation

The D455 is mounted on the powered wheelchair.

Previously recorded mounting measurements:

| Parameter | Measurement |
|---|---|
| Horizontal position | Approximately 35 cm in front of `base_link` |
| Side position | Approximately 18 cm to the left |
| Camera base height | Approximately 28 cm above floor |
| Camera center height | Approximately 29 cm above floor |

Verify these measurements against the current physical installation.

### Mounting Photograph

`[INSERT D455 MOUNTING PHOTOGRAPH HERE]`

### Mounting Diagram

`[INSERT CAMERA POSITION AND DIMENSION DIAGRAM HERE]`

## 4. ROS 2 Configuration

Configuration file:

```text
/home/wheelchair/wheelchair_nav2/config/d455.yaml
```

Previously recorded settings:

| Parameter | Value |
|---|---|
| Camera name | `camera0` |
| Frame | `camera0_depth_optical_frame` |
| Publish TF | `false` |
| Resolution | 424 × 240 |
| Frame rate | 15 FPS |
| Exposure | 900 |
| Gain | 16 |
| Point cloud enabled | `true` |
| Depth alignment | `true` |
| Decimation filter | 2 |
| Emitter enabled | `true` |

These are previously recorded settings. Check the current YAML file before making changes.

## 5. ROS 2 Topics

The RealSense camera publishes depth, image, and point cloud information.

Main point cloud topic:

```text
/camera/camera/depth/color/points
```

Throttled point cloud topic:

```text
/camera/camera/depth/color/points_throttled
```

### Additional Topics

`[INSERT CURRENT CAMERA TOPIC LIST HERE]`

### Topic Verification

```bash
ros2 topic list | grep camera
```

Check the raw point cloud frequency:

```bash
ros2 topic hz /camera/camera/depth/color/points
```

Check the throttled point cloud frequency:

```bash
ros2 topic hz /camera/camera/depth/color/points_throttled
```

## 6. Point Cloud Processing

The project uses a throttled RealSense point cloud to reduce processing requirements.

Previously observed throttled frequency:

Approximately 1.85–1.88 Hz.

### Data Flow

```text
Intel RealSense D455
          |
          v
RealSense ROS 2 Driver
          |
          v
Raw Depth Point Cloud
          |
          v
Point Cloud Throttling
          |
          v
Throttled Point Cloud
          |
          v
Foxglove / Navigation Processing
```

Verify the actual consumers and processing stages in the current launch configuration.

## 7. Coordinate Frames and TF

The camera uses several coordinate frames, including:

- `camera0_link`
- `camera0_depth_frame`
- `camera0_depth_optical_frame`

The camera's transform is configured through the wheelchair system launch file.

Previously recorded approximate mounting transform relative to `base_link`:

```text
Translation:
X = 0.350 m
Y = 0.180 m
Z = 0.120 m

Rotation (RPY):
Roll  = -101.459 degrees
Pitch = 0 degrees
Yaw   = -90 degrees
```

**Important:** These values were recorded for a particular camera optical frame. Confirm the exact parent and child frames before reusing them.

### TF Configuration

`[INSERT CURRENT CAMERA STATIC TRANSFORM HERE]`

### TF Verification

```bash
ros2 run tf2_ros tf2_echo base_link camera0_depth_optical_frame
```

Record the current verified output:

`[INSERT TF OUTPUT HERE]`

## 8. Camera Performance

Previously recorded operating configuration:

| Parameter | Value |
|---|---|
| Image resolution | 424 × 240 |
| Frame rate | 15 FPS |
| Throttled point cloud target | 2.0 Hz |
| Observed throttled frequency | Approximately 1.85–1.88 Hz |

Higher image resolutions have previously caused increased processing load.

### Performance Testing

Record:

- CPU usage.
- Camera frame rate.
- Point cloud frequency.
- Point cloud quality.
- Processing latency.
- USB connection stability.

`[INSERT PERFORMANCE TEST RESULTS HERE]`

## 9. Testing and Verification

Recommended tests:

1. Confirm camera detection.
2. Verify depth image publication.
3. Verify point cloud publication.
4. Check camera coordinate frames.
5. Verify static transform alignment.
6. Visualize the point cloud in Foxglove.
7. Test obstacle visibility.
8. Monitor CPU usage during operation.

### Test Results

`[INSERT TERMINAL OUTPUTS AND TEST RESULTS HERE]`

## 10. Troubleshooting

| Issue | Possible Area to Investigate |
|---|---|
| Camera not detected | USB connection and device access |
| No depth image | Driver configuration |
| No point cloud | Point cloud enable parameter |
| Incorrect point cloud position | Camera TF configuration |
| Low frame rate | Resolution and processing load |
| High CPU usage | Point cloud frequency and visualization |
| Missing obstacles | Camera field of view and filtering |

## 11. Images and Diagrams

### Camera Photograph

`[INSERT REALSENSE D455 PHOTOGRAPH HERE]`

### Depth Image

`[INSERT DEPTH IMAGE SCREENSHOT HERE]`

### Point Cloud Visualization

`[INSERT FOXGLOVE SCREENSHOT HERE]`

### Camera Coordinate Frames

`[INSERT TF DIAGRAM HERE]`

## 12. References

- Manufacturer: Intel RealSense
- Product datasheet: `[INSERT OFFICIAL DATASHEET LINK]`
- ROS 2 wrapper: `[INSERT GITHUB LINK]`
- Configuration file: `~/wheelchair_nav2/config/d455.yaml`
