# Foxglove Issues

## 1. Foxglove Cannot Connect

**Possible causes:**
- Foxglove Bridge is not running.
- Incorrect IP address or port.
- Network connectivity issues.

**Checks:**
- Verify Foxglove Bridge is running on the LattePanda.
- Confirm the WebSocket address.
- Check port `8765`.
- Verify network connectivity between the LattePanda and XPS 13.

## 2. Robot or TF Frames Not Visible

**Possible causes:**
- Missing TF data.
- Incorrect fixed frame.
- Frame configuration mismatch.

**Checks:**
- Verify `/tf` and `/tf_static`.
- Check the fixed frame setting.
- Inspect the TF tree.
- Confirm the required transforms are available.

## 3. Point Cloud Visualization Is Slow

**Possible causes:**
- High point cloud data rate.
- Large point cloud data volume.
- Multiple 3D visualization layers enabled.

**Checks:**
- Use throttled point cloud topics.
- Reduce the number of simultaneously displayed layers.
- Monitor Foxglove Studio CPU usage.

## 4. 3D Scene Display Problems

**Possible symptoms:**
- Missing textures.
- Blank or incomplete 3D visualization.
- WebGL or graphics-related errors.

**Checks:**
- Restart Foxglove Studio.
- Check graphics driver support.
- Verify the selected visualization topics and fixed frame.

[ADD SCREENSHOTS OF FOXGLOVE ERRORS AND VERIFIED SOLUTIONS HERE]
