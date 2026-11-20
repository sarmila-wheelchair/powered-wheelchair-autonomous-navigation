# Robot Footprint Configuration

## 1. Physical Footprint Measurements

The following dimensions have been recorded:

| Parameter | Measurement |
|---|---:|
| Front extension from reference point | 0.45 m |
| Rear extension from reference point | 0.45 m |
| Left-right wheel distance | 0.68 m |

## 3. Recorded Nav2 Footprint

A later Nav2 configuration contained the following footprint:

```yaml
footprint: "[[ -0.50, -0.40 ], [ -0.50, 0.40 ], [ 0.50, 0.40 ], [ 0.50, -0.40 ]]"
```

This represents a rectangular footprint measuring approximately:

- Length: 1.00 m
- Width: 0.80 m

## 4. Nav2 Configuration Location

The main Nav2 parameter file is:

```text
~/wheelchair_nav2/config/nav2_params.yaml
```

The footprint may be configured separately for the local and global costmaps. # to allow better navigation 

