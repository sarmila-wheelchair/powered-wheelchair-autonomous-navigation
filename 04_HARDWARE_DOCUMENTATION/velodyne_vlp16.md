# Velodyne VLP-16 LiDAR

## 1. Hardware Identification

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

## 2. Physical Installation

The VLP-16 is mounted on the powered wheelchair.

Previously recorded mounting information:

| Parameter | Measurement |
|---|---|
| Position relative to `base_link` |  0.50 m behind |
| Height above floor | 1.35 m |
| Sensor frame | `velodyne` |

### Installation Photograph

<img width="338" height="433" alt="image" src="https://github.com/user-attachments/assets/9fb69a1d-d8f2-40e8-abc7-9187ddc77143" />

## 3. Network Configuration

The VLP-16 communicates with the LattePanda over Ethernet.

| Parameter | Value |
|---|---|
| Sensor IP | `192.168.1.201` |
| LattePanda interface | `enp1s0` |
| LattePanda sensor-network IP | `192.168.1.100` |
| UDP data port | `2368` |
| Rotation speed | 600 RPM |
