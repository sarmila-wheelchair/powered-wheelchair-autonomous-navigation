# Static Transforms

## 1. Overview

Static transforms define fixed positions and orientations between coordinate frames.

In this powered wheelchair project, static transforms are used to describe the mounting positions of the LiDAR, depth camera, and main robot reference frames.

These transforms are important for correctly positioning sensor data in the robot coordinate system.

## 2. Base Frame Transform

The recorded relationship between the two main robot frames is:

- Parent frame: `base_footprint`
- Child frame: `base_link`
- Vertical offset: approximately 0.17 m

The expected translation is:

```text
x = 0.0
y = 0.0
z = 0.17
```

Rotation values and the active launch configuration should be verified.

## 3. VLP-16 LiDAR Transform

The VLP-16 is mounted approximately 50 cm behind the `base_link` reference point.

Recorded mounting information:

| Parameter | Value |
|---|---:|
| X position | Approximately -0.50 m |
| Y position | [TO BE VERIFIED] |
| Z position | [TO BE VERIFIED] |
| Frame ID | `velodyne` |

Earlier configurations used different mounting values. Confirm the active transform in the wheelchair launch file before documenting the final configuration.

**Active static transform command:**

[INSERT VERIFIED COMMAND HERE]

## 4. Intel RealSense D455 Transform

The Intel RealSense D455 is mounted toward the front-left side of the wheelchair.

Recorded approximate physical mounting position:

| Parameter | Value |
|---|---:|
| X position | Approximately +0.35 m |
| Y position | Approximately +0.18 m |
| Z position | [TO BE VERIFIED] |
| Camera frame | `camera0_link` |
| Optical frame | `camera0_depth_optical_frame` |

The optical frame has a different orientation convention from the robot's main frame.

**Active static transform command:**

[INSERT VERIFIED COMMAND HERE]

## 5. Transform Configuration Location

The main wheelchair launch file is:

```text
~/wheelchair_nav2/launch/wheelchair_system.launch.py
```

Static transforms may be configured directly in this launch file or through separate launch files.

Verify the actual configuration before making changes.

## 6. Verification

Use the following command to inspect a transform:

```bash
ros2 run tf2_ros tf2_echo base_footprint base_link
```

To inspect the sensor transforms:

```bash
ros2 run tf2_ros tf2_echo base_link velodyne
```

```bash
ros2 run tf2_ros tf2_echo base_link camera0_link
```

The frame names must match the active TF tree.

## 7. Supporting Materials

**Static transform configuration screenshot:**

[INSERT IMAGE HERE]

**Sensor mounting diagram:**

[INSERT IMAGE HERE]

**Additional transform measurements:**

[TO BE ADDED]
