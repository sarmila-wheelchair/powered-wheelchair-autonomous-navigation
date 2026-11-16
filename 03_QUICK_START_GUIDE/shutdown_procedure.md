# System Shutdown Procedure

## 1. Purpose

This document describes the safe shutdown procedure for the powered wheelchair autonomous navigation system.

## 2. Before Shutdown

Before shutting down:

- Stop autonomous navigation.
- Cancel any active navigation goal.
- Ensure the wheelchair is stationary.
- Confirm that the drive motors are no longer receiving movement commands.
- Keep the emergency stop accessible.
- Make sure no person or object is in a hazardous position around the wheelchair.

## 3. Stop ROS 2 Activities

1. Cancel any active navigation task.
2. Stop teleoperation commands, if active.
3. Stop the wheelchair system using the appropriate shutdown procedure for the running launch process.
4. Confirm that the robot is no longer being commanded to move.

Do not simply close a terminal while the wheelchair may still be receiving movement commands.

## 4. Close Foxglove

On the XPS:

1. Stop using the visualization panels.
2. Disconnect Foxglove Studio from the ROS 2 system.
3. Close Foxglove Studio when it is no longer required.

## 5. Shut Down the LattePanda

After the ROS 2 system has stopped safely, shut down the LattePanda using the operating system's normal shutdown procedure.

The standard Linux command is:

```bash
sudo shutdown now
```

Wait for the LattePanda to complete its shutdown before removing its power.

## 6. Hardware Power-Down

Follow the verified wheelchair electrical shutdown procedure and the manufacturers' instructions.

The exact order for switching off the motor controller, wheelchair power, sensors, and battery system must be confirmed against the actual electrical design.

Do not disconnect energized battery or motor-controller wiring.

## 7. Final Safety Checks

After shutdown:

- Confirm that the wheelchair is stationary.
- Confirm that the ROS 2 system is no longer running.
- Confirm that the LattePanda has shut down.
- Check that no unexpected motor activity is present.
- Leave the wheelchair in its designated safe parking location.

## 8. Important Notes

- Always stop movement before shutting down software.
- Do not use computer shutdown as a substitute for the emergency stop.
- Follow the manufacturer's instructions for electrical power-down.
- Record any shutdown problems or unexpected behavior in the development log.

## 9. Verification Status

The software shutdown command is documented as a standard Linux command. The complete ROS 2 termination sequence and physical electrical shutdown order must be tested and verified before this document is treated as the official operating procedure.
