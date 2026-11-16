# Destination Navigation Node

## 1. Overview

The powered wheelchair includes a custom ROS 2 node that allows users to navigate to predefined destinations through the Foxglove Studio interface.

The node communicates with the ROS 2 Nav2 navigation system to send navigation goals and cancel active navigation requests.

This provides a convenient destination-selection interface without manually publishing navigation goals.

## 2. Source Code Location

Project directory:

```text
~/wheelchair_nav2/scripts/
```

Python source file:

```text
place_nav_node.py
```

**Source code link:**

[LINK TO SOURCE FILE]

## 3. Main Functions

The destination navigation node provides the following functionality:

- Publishes predefined destination requests.
- Sends navigation goals to Nav2.
- Allows users to select destinations through Foxglove.
- Supports cancellation of active navigation.
- Communicates with the Nav2 navigation action server.

The navigation action used is:

```text
/navigate_to_pose
```

## 4. Predefined Destinations

The current Foxglove interface provides six predefined destinations.

| No. | Destination Name | Map Coordinates |
|---|---|---|
| 1 | Destination 1 | [TO BE ADDED] |
| 2 | Destination 2 | [TO BE ADDED] |
| 3 | Destination 3 | [TO BE ADDED] |
| 4 | Destination 4 | [TO BE ADDED] |
| 5 | Destination 5 | [TO BE ADDED] |
| 6 | Destination 6 | [TO BE ADDED] |

Replace the temporary destination names with the actual names used in the system.

## 5. Foxglove Interface

The Foxglove Studio interface includes a custom destination-control panel.

The panel currently provides:

- Six destination buttons.
- A navigation cancellation button.
- Controls for requesting navigation to predefined locations.

**Foxglove destination panel screenshot:**

[INSERT IMAGE HERE]

## 6. Navigation Workflow

The general navigation workflow is:

1. The user selects a destination in Foxglove Studio.
2. The destination request is received by `place_nav_node.py`.
3. The node sends a navigation goal to Nav2.
4. Nav2 plans and executes the navigation task.
5. The wheelchair moves toward the selected destination.
6. The user can request cancellation when required.

**Navigation workflow diagram:**

[INSERT IMAGE HERE]

## 7. Navigation Cancellation

The destination interface includes a cancel-navigation button.

When activated, the node requests cancellation of the active navigation goal.

This allows the user to stop an ongoing navigation task through the Foxglove interface.

**Cancellation implementation:**

[INSERT CODE HERE]

## 8. Source Code

**Complete Python implementation:**

[INSERT CODE HERE]

**Important functions and callbacks:**

[CODE EXPLANATION TO BE ADDED]

**ROS 2 topics, services, and actions used:**

[TO BE VERIFIED AND ADDED]

## 9. Testing and Verification

The current system has been tested with all six predefined destinations.

The destination buttons successfully initiate navigation, and the cancellation button successfully cancels navigation.

Further testing records should include:

- Navigation success rate.
- Goal position accuracy.
- Navigation time.
- Obstacle avoidance performance.
- Cancellation response time.
- Behaviour when a destination is unreachable.

**Detailed test results:**

[TEST RESULTS TO BE ADDED]

## 10. Future Improvements

Potential improvements include:

- Displaying the wheelchair's current navigation status.
- Showing the selected destination.
- Providing navigation progress feedback.
- Adding more destinations.
- Supporting user-defined destinations.
- Displaying clear success, failure, and cancellation messages.
- Improving the interface for accessibility and ease of use.

## 11. Additional Notes

[ADDITIONAL IMPLEMENTATION DETAILS TO BE ADDED]
