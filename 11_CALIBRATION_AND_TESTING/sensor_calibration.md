# Sensor Calibration

## 1. Purpose

This document records the mounting configuration and calibration checks for the wheelchair's LiDAR and depth camera.

## 2. Velodyne VLP-16

| Parameter | Configuration |
|---|---|
| Sensor frame | `velodyne` |
| Parent frame | `base_link` |
| X offset | -0.50 m |
| Y offset | 0.00 m |
| Z offset | 1.18 m |
| Roll, pitch, yaw | 0, 0, 0 |

## 3. Intel RealSense D455

| Parameter | Configuration |
|---|---|
| Sensor frame | `camera0_link` |
| Parent frame | `base_link` |
| X offset | 0.350 m |
| Y offset | 0.180 m |
| Z offset | 0.120 m |
| Pitch | 0.2 rad |

## 4. Calibration Verification

Check that:

- Sensor positions match their physical mounting locations.
- TF transforms are published correctly.
- LiDAR and depth camera data align with the robot frame.
- Detected obstacles appear at the expected positions.

## 5. Calibration Evidence

[INSERT SENSOR MOUNTING PHOTOGRAPHS OR CALIBRATION RESULTS HERE]
