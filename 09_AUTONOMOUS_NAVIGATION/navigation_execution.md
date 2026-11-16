# Navigation Execution

## 1. Overview

The wheelchair executes autonomous navigation goals through the Nav2 navigation stack.

Navigation goals can be sent through the Foxglove destination interface or through ROS 2 navigation actions.

## 2. Destination Interface

A custom ROS 2 Python node, `place_nav_node.py`, provides predefined destinations.

The Foxglove interface currently supports:

- Six predefined destination buttons.
- Sending navigation goals.
- Cancelling active navigation.

**Destination Configuration:**

[ADD DESTINATION NAMES AND MAP COORDINATES HERE]

## 3. Navigation Action

Nav2 uses the `/navigate_to_pose` action to execute individual navigation goals.

The action is handled by the Nav2 BT Navigator.

## 4. Navigation Process

1. Select a destination in Foxglove.
2. The destination node sends the corresponding navigation goal.
3. Nav2 plans a path to the destination.
4. The controller generates velocity commands.
5. The wheelchair follows the path while accounting for detected obstacles.
6. Navigation ends when the goal is reached or cancelled.

## 5. Navigation Cancellation

The Foxglove interface includes a cancel button to stop an active navigation goal.

## 6. Testing

**Navigation test results:**

[ADD DESTINATION TEST RESULTS AND SCREENSHOTS HERE]
