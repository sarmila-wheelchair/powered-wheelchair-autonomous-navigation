# Hardware Precautions

## 1. Overview

This document describes hardware precautions for the Powered Wheelchair Autonomous Navigation System.

All hardware inspection, installation, maintenance and modifications must be performed carefully to avoid equipment damage and unsafe operation.

## 2. LattePanda 3 Delta

The LattePanda 3 Delta acts as the main robot computer.

Precautions:
- Ensure stable power supply.
- Avoid disconnecting power during software updates or file operations.
- Maintain adequate ventilation.
- Secure USB and Ethernet connections.
- Avoid accidental disconnection of sensor communication cables.

## 3. RoboClaw Motor Controller

**Controller:** RoboClaw HV60 2x60A V4.4.9

Precautions:
- Verify motor wiring before powering the controller.
- Check motor polarity and direction.
- Inspect encoder connections.
- Verify serial communication settings.
- Monitor controller temperature.
- Avoid short circuits.
- Ensure appropriate electrical protection is installed.

Never modify motor wiring while the controller is powered.

## 4. Motors and Encoders

Precautions:
- Inspect motor connections regularly.
- Verify left and right motor direction.
- Check encoder feedback.
- Inspect mechanical mounting.
- Ensure wheels rotate freely when testing.
- Secure the wheelchair before performing stationary motor tests.

## 5. Velodyne VLP-16 LiDAR

Precautions:
- Verify the sensor power supply.
- Check Ethernet connections.
- Verify the configured IP address.
- Keep the sensor optical surfaces clean.
- Ensure the sensor is securely mounted.
- Avoid obstructing the sensor's field of view.

Known network configuration:
- IP address: `192.168.1.201`
- UDP port: `2368`
- Rotation rate: `600 RPM`

## 6. Intel RealSense D455

Precautions:
- Secure the camera mounting.
- Protect the camera from physical impacts.
- Keep the lenses clean.
- Verify USB connection stability.
- Monitor camera temperature.
- Confirm depth and point cloud streams are functioning.

Current configuration:
- Camera name: `camera0`
- Resolution: `424 × 240`
- Frame rate: `15 FPS`

## 7. Electrical and Wiring Precautions

- Inspect wiring for damage.
- Secure loose cables.
- Prevent cables from contacting moving wheels.
- Verify connector polarity.
- Avoid exposed electrical connections.
- Disconnect power before hardware modifications.
- Use appropriately rated fuses and electrical protection.

## 8. Mechanical Precautions

- Inspect wheel mounting.
- Check motor mounting bolts.
- Verify sensor mounting stability.
- Inspect the wheelchair frame.
- Ensure cables cannot become entangled in moving components.

## 9. Before Hardware Testing

1. Inspect all electrical connections.
2. Check motor controller wiring.
3. Verify sensor connections.
4. Confirm the emergency stop is functional.
5. Ensure the test area is clear.
6. Have an operator ready to intervene.

## 10. Maintenance Records

Record the following whenever hardware maintenance is performed:

- Date of maintenance.
- Component inspected.
- Issue identified.
- Action performed.
- Test results.
- Person responsible.

**Important:** Always refer to the manufacturer's electrical and mechanical specifications before modifying hardware.
