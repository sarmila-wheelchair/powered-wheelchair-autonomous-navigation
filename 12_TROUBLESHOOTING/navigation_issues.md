# Navigation Issues

## 1. Navigation Goal Not Executed

**Possible symptoms:**
- Wheelchair does not respond to a navigation goal.
- Goal is rejected or remains pending.

**Checks:**
- Verify Nav2 nodes are running.
- Check the `/navigate_to_pose` action server.
- Confirm the goal pose is valid.
- Verify the robot is localized on the map.

## 2. Planned Path Is Unavailable

**Possible symptoms:**
- No path is displayed.
- Planner fails to find a valid route.

**Checks:**
- Verify the global costmap is updating.
- Check the map and obstacle data.
- Inspect planner configuration.
- Confirm the goal is in a reachable area.

## 3. Wheelchair Stops During Navigation

**Possible causes:**
- Obstacle detected in the costmap.
- Controller cannot find a valid velocity command.
- Navigation goal is blocked.
- Safety or emergency-stop condition is active.

**Checks:**
- Inspect local and global costmaps.
- Check `/cmd_vel`.
- Review Nav2 logs and controller status.
- Verify the emergency stop is released.

## 4. Navigation Cancellation Failure

**Checks:**
- Verify the `/navigate_to_pose` action server is active.
- Check whether the navigation goal is still running.
- Inspect the custom `place_nav_node.py` cancellation logic.

[ADD VERIFIED ERROR MESSAGES AND SOLUTIONS HERE]
