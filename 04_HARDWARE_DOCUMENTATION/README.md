# Hardware Documentation

## 1. Purpose

This section contains the technical documentation for the physical hardware used in the powered wheelchair autonomous navigation project.

It records hardware specifications, configurations, connections, installation details, and operational information.

## 2. Hardware Components

The project uses the following main hardware components:

| Component | Model | Main Function |
|---|---|---|
| Robot Computer | LattePanda 3 Delta | Runs ROS 2 and autonomous navigation |
| Motor Controller | RoboClaw HV60 2x60A | Controls the wheelchair drive motors |
| LiDAR Sensor | Velodyne VLP-16 | Provides 3D laser scanning data |
| Depth Camera | Intel RealSense D455 | Provides depth and point cloud data |
| Development Computer | Dell XPS 13 | Remote development and visualization |

## 3. Documentation Structure

Individual hardware documentation will be maintained in the following files:

- `lattepanda_computer.md`
- `roboclaw_motor_controller.md`
- `velodyne_vlp16.md`
- `realsense_d455.md`
- `wheelchair_platform.md`
- `electrical_connections.md`

## 4. Documentation Requirements

Each hardware document should include, where applicable:

- Manufacturer and model
- Technical specifications
- Physical dimensions and mounting position
- Electrical requirements
- Communication interfaces
- Wiring and connection details
- ROS 2 integration
- Configuration settings
- Testing and verification results
- Known limitations

## 5. Important Notes

- Record actual hardware configurations rather than assumed specifications.
- Keep wiring information consistent with the physical wheelchair.
- Document changes to sensor mounting positions and electrical connections.
- Include photographs or diagrams when they help explain the installation.
- Do not publish confidential information or sensitive network credentials.
