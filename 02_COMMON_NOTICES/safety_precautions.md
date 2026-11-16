# Safety Precautions

## 1. General Safety

The Powered Wheelchair Autonomous Navigation System is an experimental autonomous mobility platform.

Safety precautions must be followed during development, testing and operation.

- Never test autonomous navigation in an occupied public area without appropriate supervision and safeguards.
- Keep the wheelchair's test area clear of people and unexpected obstacles.
- Always have a trained operator ready to intervene.
- Do not leave the wheelchair operating autonomously without supervision.
- Verify the physical emergency stop before every test session.

## 2. Motor Safety

The wheelchair uses a RoboClaw HV60 2x60A motor controller.

- Ensure the drive wheels are clear of obstacles before motor testing.
- Check motor direction before autonomous operation.
- Verify left and right motor responses independently.
- Avoid sudden changes in motor speed commands.
- Test movement commands at low speeds before increasing speed.
- Ensure the motor controller and wiring are properly secured.

## 3. Sensor Safety

The wheelchair uses:
- Velodyne VLP-16 LiDAR.
- Intel RealSense D455 depth camera.

Before navigation:
- Confirm both sensors are powered.
- Verify that sensor data is being published.
- Check sensor mounting positions.
- Confirm TF transformations are correct.
- Ensure obstacle detection is functioning.

Sensor blind spots and processing delays must be considered.

## 4. Autonomous Navigation Safety

Before activating Nav2:

- Verify the correct map is loaded.
- Confirm AMCL localization is accurate.
- Check the robot's position in Foxglove.
- Verify local and global costmaps.
- Ensure obstacle detection is functioning.
- Test navigation in a controlled environment.

Never assume that a valid navigation path guarantees a physically safe route.

## 5. Emergency Stop

The physical emergency stop system must remain available during all powered testing.

The RoboClaw S3 emergency-stop input is configured using a normally-closed (NC) connection.

Verify its actual stopping behaviour and wiring before operation.

Software commands such as cancelling navigation must not be treated as substitutes for the physical emergency stop.

## 6. Testing Precautions

For every new software or hardware modification:

1. Inspect the hardware.
2. Verify communication.
3. Test with drive wheels safely elevated when appropriate.
4. Test at low speed in a controlled environment.
5. Verify stopping behaviour.
6. Record the test results.

## 7. Important Warning

Autonomous navigation, LiDAR perception and depth-camera obstacle detection are not safety-certified protective systems.

The wheelchair must not carry a passenger during initial or unvalidated autonomous testing.

All safety-critical functions require independent verification before any occupied autonomous operation.
