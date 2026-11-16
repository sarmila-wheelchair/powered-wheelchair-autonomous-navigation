# Software Precautions

## 1. Overview

This document describes important software precautions when developing, modifying and operating the Powered Wheelchair Autonomous Navigation System.

The system uses ROS 2 Humble and multiple interconnected software packages.

## 2. Computer Architecture

The project uses two computers.

### LattePanda 3 Delta
- Main robot computer.
- Runs ROS 2 Humble.
- Runs motor control nodes.
- Runs LiDAR and camera drivers.
- Runs SLAM Toolbox, AMCL and Nav2.
- Handles autonomous navigation.

### Dell XPS 13
- Used for remote SSH access.
- Used for software development.
- Runs Foxglove Studio.
- Runs the Foxglove Bridge.
- Used for monitoring and visualization.

**Important:** Editing a software file on the XPS does not automatically modify the corresponding file on the LattePanda.

Always verify which computer contains the active configuration.

## 3. ROS 2 Environment

Before executing ROS 2 commands:

- Verify the correct ROS 2 distribution.
- Source the ROS 2 Humble environment.
- Check the ROS_DOMAIN_ID.
- Verify network connectivity.
- Confirm the correct computer is being accessed.

Avoid running duplicate ROS 2 nodes unintentionally.

## 4. Configuration File Precautions

Important configuration files include:

- `nav2_params.yaml`
- `d455.yaml`
- Wheelchair system launch files.
- SLAM Toolbox configuration.
- RoboClaw motor-control source files.

Before modifying any configuration:

1. Create a backup.
2. Identify the parameter being changed.
3. Record the original value.
4. Modify only the required section.
5. Rebuild packages when necessary.
6. Verify the changes.
7. Record test results.

## 5. ROS 2 Node Precautions

Before launching the navigation system:

- Check running ROS 2 nodes.
- Verify sensor availability.
- Check topic publication rates.
- Verify TF transformations.
- Check odometry publication.
- Confirm that Nav2 nodes are active.

Avoid launching duplicate hardware drivers or motor-control nodes.

## 6. TF Transformation Precautions

The wheelchair uses several coordinate frames, including:

- `map`
- `odom`
- `base_footprint`
- `base_link`
- `velodyne`
- Camera coordinate frames.

When modifying TF configurations:

- Verify parent and child frames.
- Check translation and rotation values.
- Avoid duplicate TF publishers.
- Verify sensor mounting transformations.
- Confirm the robot moves correctly in the visualization.

Incorrect transformations can cause localization and navigation problems.

## 7. Nav2 Configuration Precautions

Before changing Nav2 parameters:

- Back up the existing YAML file.
- Verify the robot base frame.
- Verify the global frame.
- Check local and global costmaps.
- Confirm obstacle detection sources.
- Review controller velocity limits.
- Check recovery behaviour configuration.

Always test navigation changes in a controlled environment.

## 8. Source Code and Package Precautions

Before modifying Python source files:

- Preserve a working copy.
- Check the package dependencies.
- Avoid changing unrelated functions.
- Build the affected package when required.
- Check terminal output for errors.
- Verify node functionality after rebuilding.

## 9. GitHub Backup and Version Control

GitHub is used as the central documentation and source-code repository.

Important practices:

- Commit working configurations.
- Use descriptive commit messages.
- Preserve known-good versions.
- Record significant modifications.
- Avoid uploading credentials or private keys.
- Keep documentation synchronized with actual software.

## 10. Software Recovery

If a software modification causes problems:

1. Stop autonomous operation.
2. Identify the modified file.
3. Check terminal errors.
4. Compare against the previous working version.
5. Restore the known-good configuration if necessary.
6. Rebuild affected packages.
7. Verify the system before testing again.

## 11. Important Reminder

Never assume that a successful software launch means the wheelchair is safe to operate.

Always verify motor control, odometry, localization, sensor data, obstacle detection and emergency stopping independently.
