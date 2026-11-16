# Robot Footprint Configuration

## 1. Overview

The robot footprint represents the physical area occupied by the powered wheelchair when viewed from above.

Nav2 uses the footprint for:

- Obstacle avoidance.
- Collision checking.
- Costmap generation.
- Path planning.
- Safe autonomous navigation through corridors and narrow spaces.

## 2. Physical Footprint Measurements

The following dimensions have been recorded:

| Parameter | Measurement |
|---|---:|
| Front extension from reference point | 0.45 m |
| Rear extension from reference point | 0.45 m |
| Left-right wheel distance | 0.68 m |

The actual outer dimensions of the wheelchair footprint must be verified separately from the wheel measurements.

## 3. Recorded Nav2 Footprint

A later Nav2 configuration contained the following footprint:

```yaml
footprint: "[[ -0.50, -0.40 ], [ -0.50, 0.40 ], [ 0.50, 0.40 ], [ 0.50, -0.40 ]]"
```

This represents a rectangular footprint measuring approximately:

- Length: 1.00 m
- Width: 0.80 m

**Important:** This is a previously observed configuration, not yet confirmed as the current active footprint. Verify the actual physical wheelchair boundary and active Nav2 configuration before treating it as final.

## 4. Nav2 Configuration Location

The main Nav2 parameter file is:

```text
~/wheelchair_nav2/config/nav2_params.yaml
```

The footprint may be configured separately for the local and global costmaps.

## 5. Footprint Verification

Check the footprint settings:

```bash
grep -n -A 8 -B 4 "footprint:" ~/wheelchair_nav2/config/nav2_params.yaml
```

Verify both local and global costmap configurations.

## 6. Footprint Visualization

The footprint should represent the wheelchair's actual occupied area, including relevant protruding components.

**Top-view wheelchair footprint drawing:**

[INSERT IMAGE HERE]

**Foxglove or Nav2 footprint screenshot:**

[INSERT IMAGE HERE]

## 7. Future Improvements

Potential improvements include:

- Measuring the actual outer boundary of the wheelchair.
- Including protruding components where necessary.
- Verifying footprint alignment with `base_link` and `base_footprint`.
- Testing collision checking in narrow corridors.
- Evaluating footprint performance during turning and reversing.

## 8. Additional Information

**Verified active footprint:**  
[TO BE ADDED]

**Measurement method:**  
[TO BE ADDED]

**Footprint test results:**  
[TEST RESULTS TO BE ADDED]
