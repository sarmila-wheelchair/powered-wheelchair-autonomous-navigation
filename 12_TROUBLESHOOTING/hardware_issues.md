# Hardware Issues

## 1. RoboClaw Communication

**Possible symptoms:**
- RoboClaw node fails to connect.
- Motor commands are not executed.
- Encoder feedback is unavailable.

**Checks:**
- Verify the USB connection to the RoboClaw controller.
- Confirm the correct serial device path.
- Check the baud rate (38400).
- Ensure the controller is powered and responding.

## 2. Motor Movement Issues

**Possible symptoms:**
- One or both wheels do not move.
- Wheel direction is incorrect.
- Wheel movement is inconsistent.

**Checks:**
- Inspect motor and controller wiring.
- Verify motor channel assignments.
- Check motor direction configuration.
- Confirm that the emergency stop is released.

## 3. Emergency Stop

The emergency-stop circuit uses an S3 normally closed (NC) connection.

**Checks:**
- Inspect the emergency-stop wiring.
- Verify the NC circuit is closed during normal operation.
- Confirm that the emergency stop has been released before testing.

## 4. Encoder Feedback

**Possible symptoms:**
- Odometry does not update.
- Encoder readings are incorrect.
- Wheel movement does not match odometry.

**Checks:**
- Verify encoder connections.
- Check encoder readings from the RoboClaw.
- Inspect encoder configuration and direction.

[ADD PHOTOGRAPHS OR ADDITIONAL HARDWARE FAULTS HERE]
