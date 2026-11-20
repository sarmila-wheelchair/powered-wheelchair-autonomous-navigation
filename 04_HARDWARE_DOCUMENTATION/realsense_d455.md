# Intel RealSense D455 Depth Camera

## 1. Hardware Identification

| Parameter | Details |
|---|---|
| Manufacturer | Intel |
| Model | RealSense D455 |
| Sensor type | Stereo depth camera |
| ROS 2 distribution | Humble |
| ROS 2 driver | `realsense2_camera` |
| Camera name | `camera0` |
| USB connection | `[USB]` |
| Firmware version | 5.17.3.10 |
| RealSense SDK version | 2.58.4 |
| ROS wrapper version | 4.58.4 |


## 2. Physical Installation

The D455 is mounted on the powered wheelchair.

Recorded mounting measurements:

| Parameter | Measurement |
|---|---|
| Horizontal position | 36 cm in front of `base_link` |
| Side position | Approximately 18 cm to the left |
| Camera base height | Approximately 28 cm above floor |
| Camera center height | Approximately 29 cm above floor |

Verify these measurements against the current physical installation.

### Mounting Photograph

<img width="160" height="251" alt="image" src="https://github.com/user-attachments/assets/5bf18de5-21f6-4f0a-9072-377de33b13bd" />

## 3. ROS 2 Configuration

Configuration file:

```text
/home/wheelchair/wheelchair_nav2/config/d455.yaml
```

## 4. Point Cloud Processing

The project uses a throttled RealSense point cloud to reduce processing requirements.

Previously observed throttled frequency:

Approximately 1.85–1.88 Hz.

Set throttled frequency ; 2Hz


