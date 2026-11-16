# Nav2 Configuration

## 1. Configuration File

The main Nav2 parameters are stored in:

```text
~/wheelchair_nav2/config/nav2_params.yaml
```

## 2. Main Configuration

| Component | Configuration |
|---|---|
| Localization | AMCL |
| Planner | Nav2 Planner Server |
| Controller | DWB |
| Global Costmap | Global obstacle representation |
| Local Costmap | Local obstacle representation |
| Velocity Smoother | Nav2 Velocity Smoother |
| Navigation Interface | BT Navigator |

## 3. Important Parameters

Previously observed controller settings:

| Parameter | Value |
|---|---:|
| Controller Frequency | 5.0 Hz |
| Maximum Linear Velocity (X) | 0.30 m/s |
| Maximum Angular Velocity (Z) | 0.50 rad/s |
| Simulation Time | 1.7 s |

These are previously observed values and should be checked against the active configuration.

## 4. Configuration File

**Current Nav2 YAML configuration:**

[INSERT RELEVANT YAML HERE]

## 5. Verification

After launching Nav2, verify that:

- Required navigation nodes are active.
- Costmaps receive sensor data.
- Planner generates paths.
- Controller publishes velocity commands.
- Navigation goals can be executed.

**Configuration screenshots:**

[INSERT IMAGE HERE]

**Additional notes:**

[TO BE ADDED]
