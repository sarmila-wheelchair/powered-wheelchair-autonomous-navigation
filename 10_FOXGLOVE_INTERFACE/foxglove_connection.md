# Foxglove Connection Setup

## 1. Overview

Foxglove Studio connects to the ROS 2 system through the Foxglove Bridge running on the LattePanda 3 Delta.

## 2. System Arrangement

| Component | Device |
|---|---|
| Foxglove Bridge | LattePanda 3 Delta |
| Foxglove Studio | XPS 13 |
| Bridge Port | `8765` |

## 3. Bridge Configuration

The bridge is launched through:

`wheelchair_system.launch.py`

Configured parameters:

| Parameter | Value |
|---|---|
| Port | `8765` |
| Use Simulation Time | `false` |
| Send Buffer Limit | `100000000` |

## 4. Connection Procedure

1. Start the wheelchair ROS 2 system on the LattePanda.
2. Confirm that the Foxglove Bridge is running.
3. Open Foxglove Studio on the XPS 13.
4. Select the WebSocket connection option.
5. Enter the LattePanda's network address and port.

**WebSocket Address:**

[INSERT LATTEPANDA IP ADDRESS HERE]

Example format:

`ws://<LATTEPANDA_IP>:8765`

## 5. Connection Verification

Confirm that:

- Foxglove Studio connects successfully.
- ROS 2 topics are visible.
- TF and odometry data are available.
- Sensor and map visualizations receive data.

**Connection Screenshot:**

[INSERT SCREENSHOT HERE]
