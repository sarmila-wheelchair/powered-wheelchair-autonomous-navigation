# Map Creation

## 1. Overview

The wheelchair uses SLAM Toolbox to create 2D occupancy grid maps of its operating environment.

Maps are generated using LiDAR scan data, odometry, and TF information.

## 2. 2 Methods: 

1. For mapping all layers and capture low and high obstacles (best for in a small room)
2. For mapping single 2D slice (best for large scale area)


## 4. Current Map

Latest saved map:

```text
whole_floor_map
```

Storage location:

```text
~/wheelchair_nav2/maps/
```


