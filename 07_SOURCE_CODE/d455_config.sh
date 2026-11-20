camera_name: 'camera0'
publish_tf: true
initial_reset: true

enable_color: true
enable_depth: true
enable_infra1: false
enable_infra2: false

rgb_camera.color_profile: "424x240x15"
rgb_camera.enable_auto_exposure: false

depth_module.depth_profile: "424x240x15"
depth_module.infra_profile: "424x240x15"
depth_module.exposure: 400
depth_module.gain: 16
depth_module.enable_auto_exposure: false

clip_distance: 2.0

spatial_filter.enable: false
temporal_filter.enable: false

pointcloud.enable: true
align_depth.enable: true

decimation_filter.enable: true
decimation_filter.filter_magnitude: 2
