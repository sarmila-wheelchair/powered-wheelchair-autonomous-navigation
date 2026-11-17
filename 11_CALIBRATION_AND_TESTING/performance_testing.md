# Performance Testing

## 1. Purpose

This document records the performance of the wheelchair's onboard computer and visualization system during operation.

## 2. CPU Usage

Testing was performed while visualizing sensor data in Foxglove Studio.

| Component / Test | Observed CPU Usage |
|---|---:|
| Foxglove Studio, all topics disabled | Approximately 9.8% |
| D455 point cloud visualization | Approximately 80% |
| Grid and VLP point cloud visualization | Approximately 38–55% |

*Values are observations from previous tests and may vary with the visualization setup.*

## 3. Sensor Data Rates

| Sensor Data | Observed Rate |
|---|---:|
| VLP-16 raw point cloud | Approximately 9.6–9.9 Hz |
| D455 throttled point cloud | Approximately 1.85–1.88 Hz |

## 4. Performance Considerations

- Point cloud visualization can significantly increase CPU usage.
- Throttling reduces the frequency of point cloud data.
- Displaying multiple sensor streams simultaneously can increase processing load.

## 5. Further Testing

[ADD LATTEPANDA CPU, MEMORY, AND ROS 2 NODE PERFORMANCE RESULTS HERE]
