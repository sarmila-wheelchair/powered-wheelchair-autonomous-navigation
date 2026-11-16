# Nav2 Architecture

## 1. Overview

The powered wheelchair uses the ROS 2 Navigation2 (Nav2) framework to perform autonomous navigation.

Nav2 coordinates localization, path planning, obstacle avoidance, and motor velocity control.

## 2. Main Components

| Component | Function |
|---|---|
| AMCL | Estimates the wheelchair's position on the map. |
| Planner Server | Generates a global path to the navigation goal. |
| Controller Server | Calculates velocity commands to follow the path. |
| Costmaps | Represent obstacles and free space. |
| Behavior Server | Provides configured recovery and navigation behaviours. |
| Velocity Smoother | Regulates velocity commands. |
| BT Navigator | Coordinates the navigation task using behaviour trees. |

## 3. Navigation Data Flow

```text
Destination Goal
       |
       v
   BT Navigator
       |
       v
  Planner Server
       |
       v
   Global Path
       |
       v
 Controller Server
       |
       v
 Velocity Smoother
       |
       v
 RoboClaw Driver
       |
       v
 Wheelchair Movement
```

Costmaps, localization, and sensor data support the navigation process.

## 4. Configuration

Main configuration file:

```text
~/wheelchair_nav2/config/nav2_params.yaml
```

**Current Nav2 architecture diagram:**

[INSERT IMAGE HERE]

**Additional implementation details:**

[TO BE ADDED]
