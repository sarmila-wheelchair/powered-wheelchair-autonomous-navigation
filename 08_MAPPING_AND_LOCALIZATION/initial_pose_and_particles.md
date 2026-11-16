# Initial Pose and Particle Cloud

## 1. Initial Pose

AMCL requires an initial estimate of the wheelchair's position and orientation on the saved map.

The initial pose is provided through the ROS 2 localization system, typically using the `2D Pose Estimate` interface in a visualization tool or an equivalent pose-publishing method.

## 2. Particle Cloud

AMCL uses a particle filter to represent possible wheelchair positions.

As sensor measurements are received, the particle distribution is updated to estimate the most likely robot pose.

## 3. Foxglove Visualization

The following localization information can be inspected in Foxglove Studio:

- Estimated wheelchair pose.
- Particle cloud, if published and visualized.
- Map and LiDAR scan alignment.

**Localization screenshot:**

[INSERT IMAGE HERE]

## 4. Verification

Check that:

- The initial pose matches the wheelchair's actual position.
- The particle cloud converges around the estimated position.
- LiDAR scans align with mapped walls and obstacles.
- Localization remains stable during wheelchair movement.

**Initial pose and particle observations:**

[TO BE ADDED]
