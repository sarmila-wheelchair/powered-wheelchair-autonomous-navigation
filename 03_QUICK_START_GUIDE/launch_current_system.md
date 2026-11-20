## 1. Before You Start

-Battery charged *(not below 23V)*; chair powered on and RoboClaw connected via USB.

-Velodyne and D455 clean, plugged in, and unobstructed.

-Area clear. The chair does not detect stairs or drop-offs yet.

-Park the chair at the home position.

<img width="438" height="264" alt="image" src="https://github.com/user-attachments/assets/a745512b-9b23-4316-b16b-db5660dd8448" />

-AMCL always resets to the initial pose (0, 0, 0) on startup.

-A person should be present with access to the emergency stop.

## 2. Start the System

bash

ssh wheelchair@192.168.0.109                                        # ip add when using Wheelchair 5G network

source /opt/ros/humble/setup.bash                                   # ignore if already saved in ~/.bashrc

ros2 launch ~/wheelchair_nav2/launch/wheelchair_system.launch.py    # launch file 

This starts the motor driver, sensors, static TFs, point-cloud-to-scan nodes, AMCL and Nav2 (using whole_floor_map.yaml), the goal relay, the place navigation node, and Foxglove bridge. The D455 emitter is enabled automatically about 15 seconds after launch.

Launch foxglove on xps terminal separately.

## 3. Verify Localization

-Open Foxglove and connect to ws://192.168.0.109:8765.

-Check that the laser scan lines up with the map walls.

-Always set the pose manually using Foxglove’s 2D pose estimate tool.

## 4. Send the Chair to a Place

- May use goal_pose to send chair places
- May use foxglove publish panel to send chair to saved places including ; home, washroom, elevator_1, elevator_2, emergency_exit_corridor
- Always publish a panel for 'cancel' to cancel or disrupt the wheelchair's navigation as a software emergency stop.

## 5. Shutdown

- Cancel any active goal and stop the chair.
- Press Ctrl+C in the launch terminal.
- Power off the chair and charge.
