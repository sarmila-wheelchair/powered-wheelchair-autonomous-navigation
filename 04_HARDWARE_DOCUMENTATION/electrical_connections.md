# Electrical Connections and Wiring Documentation

## 1. Purpose

This document records the electrical connections and power distribution of the powered wheelchair autonomous navigation system.

It is intended to serve as a reference for hardware maintenance, troubleshooting, system modifications, and future development.

**Important:** This document is a template. Complete and verify all wiring details against the actual wheelchair electrical system before using it as a wiring reference.

## 2. Main Electrical Components

| Component | Function |
|---|---|
| Wheelchair battery | Main electrical power source |
| RoboClaw HV60 2x60A | Controls left and right drive motors |
| Left drive motor | Drives the left side |
| Right drive motor | Drives the right side |
| LattePanda 3 Delta | Main robot computer |
| Velodyne VLP-16 | 3D LiDAR sensor |
| Intel RealSense D455 | Depth camera |
| Emergency stop | Safety-related shutdown/control circuit |

## 3. Overall Electrical Architecture

### Power Distribution Diagram

`[INSERT COMPLETE ELECTRICAL POWER DISTRIBUTION DIAGRAM HERE]`

### Main Connections

| Source | Destination | Connection Details |
|---|---|---|
| Battery | RoboClaw | `[TO BE ADDED]` |
| RoboClaw M1 | Drive motor | `[VERIFY PHYSICAL CONNECTION]` |
| RoboClaw M2 | Drive motor | `[VERIFY PHYSICAL CONNECTION]` |
| LattePanda | RoboClaw | USB serial |
| LattePanda | VLP-16 | Ethernet |
| LattePanda | D455 | `[VERIFY USB CONNECTION]` |
| Emergency stop | Motor control circuit | `[INSERT VERIFIED WIRING]` |

## 4. Battery and Power Supply

Document the battery and power distribution specifications.

| Parameter | Details |
|---|---|
| Battery manufacturer | `[TO BE ADDED]` |
| Battery model | `[TO BE ADDED]` |
| Battery chemistry | `[TO BE ADDED]` |
| Nominal voltage | `[TO BE ADDED]` |
| Capacity | `[TO BE ADDED]` |
| Battery protection | `[TO BE ADDED]` |
| Main fuse rating | `[TO BE ADDED]` |
| Power distribution method | `[TO BE ADDED]` |

### Battery Photograph

`[INSERT BATTERY PHOTOGRAPH HERE]`

### Battery Wiring Diagram

`[INSERT BATTERY WIRING DIAGRAM HERE]`

## 5. RoboClaw Motor Connections

The RoboClaw HV60 controls the two wheelchair drive motors.

Previously documented communication settings:

| Parameter | Value |
|---|---|
| USB serial device | `/dev/ttyACM0` |
| Baud rate | 38400 |
| Controller address | 128 |

### Motor Channel Assignments

| Channel | Physical Motor | Direction |
|---|---|---|
| M1 | `[VERIFY]` | `[TO BE ADDED]` |
| M2 | `[VERIFY]` | `[TO BE ADDED]` |

### Motor Wiring Diagram

`[INSERT ROBOCLAW MOTOR WIRING DIAGRAM HERE]`

## 6. Emergency Stop Circuit

The wheelchair includes an emergency stop system.

Previously recorded information:

- Emergency stop connection associated with RoboClaw S3.
- S3 was documented as normally closed (NC).

### Information to Verify

| Parameter | Details |
|---|---|
| Emergency stop model | `[TO BE ADDED]` |
| Contact configuration | Normally closed (NC), previously recorded |
| Controller connection | S3, previously recorded |
| Exact wiring | `[TO BE VERIFIED]` |
| Motor-disable behavior | `[TO BE TESTED]` |
| Reset procedure | `[TO BE DOCUMENTED]` |

### Emergency Stop Wiring Diagram

`[INSERT VERIFIED EMERGENCY STOP CIRCUIT DIAGRAM HERE]`

**Safety requirement:** Do not assume that the emergency stop is functional based only on its wiring configuration. Its actual behavior must be physically tested and verified under a controlled procedure.

## 7. Computer and Sensor Connections

### 7.1 LattePanda 3 Delta

Document the computer's power supply and peripheral connections.

- Power input: `[TO BE ADDED]`
- USB connections: `[TO BE ADDED]`
- Ethernet connections: `[TO BE ADDED]`

Photograph:

`[INSERT LATTEPANDA CONNECTION PHOTOGRAPH HERE]`

### 7.2 Velodyne VLP-16

- Network connection: Ethernet
- Sensor IP: `192.168.1.201`
- Data port: UDP 2368

Additional connection details:

`[TO BE ADDED]`

### 7.3 Intel RealSense D455

- Computer connection: USB
- Camera configuration: `camera0`

Additional connection details:

`[TO BE ADDED]`

## 8. Cable Management

Document:

- Motor power cables.
- Encoder cables.
- USB cables.
- Ethernet cables.
- Sensor power cables.
- Emergency stop wiring.
- Cable routing and mounting.

### Cable Routing Photographs

`[INSERT CABLE ROUTING PHOTOGRAPHS HERE]`

## 9. Electrical Safety

Before performing electrical maintenance:

1. Stop wheelchair movement.
2. Shut down the ROS 2 system.
3. Isolate electrical power according to the manufacturer's procedure.
4. Verify that the circuit is in a safe condition before handling wiring.
5. Avoid short circuits and exposed conductors.
6. Use appropriately rated cables, connectors, fuses, and protection devices.
7. Have battery and motor-controller wiring checked by a qualified person where necessary.

Never modify the emergency stop or motor power wiring without understanding and verifying the complete circuit.

## 10. Electrical Testing Records

| Test | Date | Result | Remarks |
|---|---|---|---|
| Battery voltage | `[DATE]` | `[RESULT]` | |
| Power distribution | `[DATE]` | `[RESULT]` | |
| Motor connections | `[DATE]` | `[RESULT]` | |
| Emergency stop | `[DATE]` | `[RESULT]` | |
| Sensor power | `[DATE]` | `[RESULT]` | |

## 11. Additional Documentation

### Electrical Schematic

`[INSERT COMPLETE ELECTRICAL SCHEMATIC HERE]`

### Wiring Photographs

`[INSERT HIGH-RESOLUTION WIRING PHOTOGRAPHS HERE]`

### Component Datasheets

`[INSERT MANUFACTURER DATASHEETS HERE]`

### Additional Notes

`[ADD ELECTRICAL MODIFICATIONS AND MAINTENANCE HISTORY HERE]`

## 12. References

- RoboClaw documentation: `roboclaw_motor_controller.md`
- Wheelchair platform: `wheelchair_platform.md`
- Hardware overview: `README.md`
