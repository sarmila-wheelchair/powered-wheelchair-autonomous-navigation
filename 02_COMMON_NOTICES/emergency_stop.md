# Emergency Stop System

## 1. Overview

The emergency stop system is an essential safety feature of the Powered Wheelchair Autonomous Navigation System.

Its purpose is to provide a physical method of stopping motor operation during unexpected movement or emergencies.

## 2. Hardware Configuration

**Motor Controller:** RoboClaw HV60 2x60A V4.4.9

**Emergency Stop Input:** S3

**Wiring Configuration:** Normally Closed (NC) connection.

The emergency stop circuit is connected to the RoboClaw controller through its S3 input. 
To reset the emergency stop, just untwist the button. 

## 3. Emergency Stop Responsibilities

The emergency stop system must:

- Provide an independent physical stopping mechanism.
- Interrupt or disable motor operation when activated.
- Remain accessible to the operator.
- Be checked before powered testing.
- Be independent of ROS 2 navigation commands.

## 4. Verification Procedure

Before operation:

1. Inspect the emergency stop wiring.
2. Verify the normally-closed circuit.
3. Check the RoboClaw input configuration.
4. Verify that activating the emergency stop produces the intended motor stopping response.
5. Verify that releasing or resetting the emergency stop does not unexpectedly restart motor movement.

## 5. Important Warnings

- Never bypass the emergency stop circuit during operation.
- Never rely exclusively on software commands to stop the wheelchair.
- Do not assume that cancelling a Nav2 goal stops the motors immediately.
- Do not modify the emergency stop wiring without verifying the controller documentation.
- Never operate the wheelchair if the emergency stop is not functioning correctly.

## 6. Documentation

The following information are added in the next folder:

- Emergency stop button model.
- Emergency stop button mount CAD file.

<img width="568" height="635" alt="image" src="https://github.com/user-attachments/assets/1972dd3c-e9f8-4c9e-abdc-5a8c451298e7" />



