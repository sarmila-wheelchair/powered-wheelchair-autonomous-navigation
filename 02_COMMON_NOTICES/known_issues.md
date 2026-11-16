# Known Issues and Technical Limitations

## 1. Overview

This document records known technical issues, limitations and troubleshooting observations encountered during development of the Powered Wheelchair Autonomous Navigation System.

Issues should be updated whenever a problem is resolved, modified or discovered.

---

## 2. Odometry Calibration

**Component:** RoboClaw Motor Control

**Issue:** Difference between reported odometry distance and actual physical wheelchair movement.

**Observation:**
- During a 1-metre movement test, odometry reported approximately 1.004 metres.
- Physical movement was approximately 1.10 metres.

**Investigation:**
Wheel radius calibration was identified as a possible source of the discrepancy.

**Status:** Calibration requires continued verification.

---

## 3. Rotation Calibration

**Component:** Wheel Odometry

**Issue:** Physical rotation does not perfectly match the commanded rotation.

**Observation:**
- A commanded 360-degree right turn produced approximately 355 degrees of physical rotation during an earlier test.
- Rotation calibration was investigated using wheel separation.

**Status:** Requires continued physical verification.

---

## 4. Foxglove CPU Consumption

**Component:** Foxglove Studio

**Issue:** High CPU consumption when visualizing 3D sensor data.

**Observations:**
- Foxglove CPU usage increased significantly when displaying point clouds.
- D455 point cloud visualization alone previously produced approximately 80% CPU usage.
- Disabling unnecessary topics reduced CPU consumption.
- VLP-16 point cloud visualization also increased processing load.

**Investigation:**
Topic selection, point cloud frequency and visualization settings were investigated.

**Status:** Performance optimization ongoing.

---

## 5. Sensor Data Processing Load

**Components:** VLP-16 and RealSense D455

**Issue:** High-frequency point cloud processing can increase CPU utilization.

**Current observations:**
- VLP-16 raw point cloud publication is approximately 10 Hz.
- VLP-16 point cloud throttling is configured at 2 Hz.
- D455 point cloud throttling is configured at approximately 2 Hz.

**Investigation:**
Throttling sensor data before downstream processing was used to reduce processing load.

**Status:** Performance requires continued monitoring.

---

## 6. TF and Visualization Delay

**Component:** TF2 and Foxglove

**Issue:** During wheelchair rotation, the map visualization sometimes appears to rotate or lag before catching up.

**Investigation:**
- Checked odometry transformations.
- Reviewed `map → odom` and `odom → base_footprint`.
- Investigated TF publishers.
- Considered processing delays and CPU utilization.

**Status:** Requires further investigation.

---

## 7. Nav2 Recovery Delay

**Component:** Nav2 DWB Controller

**Issue:** Recovery behaviour may take too long to activate when the controller cannot find valid trajectories.

**Investigation:**
- Reviewed DWB controller configuration.
- Investigated recovery behaviour timing.
- Reviewed velocity and trajectory parameters.

**Status:** Requires further testing and tuning.

---

## 8. Mapping and Map Saving

**Component:** SLAM Toolbox and Nav2 Map Server

**Issue:** Map saving and map file management required troubleshooting during development.

**Previous work:**
- Used `map_saver_cli`.
- Configured map saving with a timeout.
- Enabled transient-local map subscription.
- Successfully saved occupancy grid map files.

**Status:** Map saving procedure established. Future map files should be checked before deployment.

---

## 9. General Troubleshooting Guidelines

When encountering a new problem:

1. Record the date and time.
2. Identify the affected ROS 2 node or component.
3. Record the terminal error messages.
4. Describe the observed behaviour.
5. Record the investigation performed.
6. Document the solution or workaround.
7. Verify the result through testing.

---

## 10. Issue Tracking Template

Use this template when documenting future problems.

### Issue Title

**Date:**

**Affected Component:**

**Problem Description:**

**Observed Behaviour:**

**Investigation:**

**Solution or Workaround:**

**Test Results:**

**Status:** Open / Investigating / Resolved

---

## 11. Important Reminder

A problem should only be marked as resolved after it has been verified through actual testing.

Historical observations must not automatically be treated as current system conditions.
