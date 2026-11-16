# Path Planning

## 1. Overview

Path planning is handled by the Nav2 Planner Server. It generates a global path from the wheelchair's current position to the selected navigation goal while considering the global costmap.

## 2. Planner Configuration

The current configuration uses:

| Parameter | Value |
|---|---|
| Planner Plugin | `nav2_navfn_planner/NavfnPlanner` |
| Planner ID | `GridBased` |
| Expected Planner Frequency | 0.5 Hz |
| Goal Tolerance | 0.5 m |
| A* Search | Enabled |
| Allow Unknown Space | Enabled |

## 3. Path Planning Process

1. Receive a navigation goal.
2. Obtain the wheelchair's current localized position.
3. Generate a global path using the global costmap.
4. Send the path to the Controller Server for execution.
5. Replan when required by the navigation behavior tree.

## 4. Visualization

**Example Global Path in Foxglove:**

[INSERT FOXGLOVE SCREENSHOT HERE]

## 5. Testing

**Test observations:**

[ADD PATH PLANNING TEST RESULTS HERE]
