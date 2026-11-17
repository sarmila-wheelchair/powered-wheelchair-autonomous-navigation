# Localization Issues

## 1. AMCL Localization Failure

**Possible symptoms:**
- Robot position does not appear on the map.
- Robot pose jumps unexpectedly.
- AMCL fails to converge.

**Checks:**
- Verify the map is loaded.
- Confirm `/scan` is publishing.
- Check the `map`, `odom`, and `base_footprint` transforms.
- Verify AMCL frame and topic configuration.
- Check initial pose configuration.

## 2. Robot Position Drift

**Possible symptoms:**
- Estimated position differs from actual position.
- Robot pose gradually drifts during movement.

**Possible causes:**
- Incorrect wheel calibration.
- Odometry inaccuracies.
- Incorrect TF configuration.

**Checks:**
- Compare physical movement with `/odom`.
- Verify wheel radius and wheel separation.
- Inspect the `odom` to `base_footprint` transform.

## 3. Map Rotation or Movement

**Possible symptoms:**
- Map appears to rotate when the wheelchair turns.
- Map visualization does not remain stable.

**Checks:**
- Inspect the `map` to `odom` transform.
- Check the `odom` to `base_footprint` transform.
- Verify AMCL and odometry are publishing the expected transforms.
- Check transform timestamps and update rates.

[ADD VERIFIED CAUSES AND SOLUTIONS FROM FURTHER TESTING HERE]
