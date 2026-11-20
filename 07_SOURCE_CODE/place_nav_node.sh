#!/usr/bin/env python3
import math
import rclpy
from rclpy.node import Node
from rclpy.action import ActionClient
from action_msgs.msg import GoalStatus
from nav2_msgs.action import NavigateToPose
from std_msgs.msg import Empty, String

# name: (x, y, yaw in radians) -- EDIT THESE
PLACES = {
    "elevator_1":              (13.510,  27.062, -1.573),
    "elevator_2":              (15.984,  26.999, -1.642),
    "home":                    (-0.270,  0.168,  -0.013),
    "emergency_exit_corridor": (18.687,  -2.040,  1.513),
    "washroom":                (11.434,  10.257,  0.008),
}

class PlaceNav(Node):
    def __init__(self):
        super().__init__("place_nav_node")
        self.client = ActionClient(self, NavigateToPose, "navigate_to_pose")
        self.status_pub = self.create_publisher(String, "/place_nav/status", 10)
        self.create_subscription(String, "/go_to_place", self.on_go, 10)
        self.create_subscription(Empty, "/cancel_navigation", self.on_cancel, 10)
        self.create_timer(1.0, self.publish_status)  # repeat status once a second

        self.busy = False
        self.goal_handle = None
        self.place = None
        self.state = "READY"
        self.detail = ""
        self.get_logger().info("Ready. Places: " + ", ".join(PLACES))

    # ---------- status ----------
    def set_status(self, state, detail=""):
        self.state, self.detail = state, detail
        self.get_logger().info(f"{state} {detail}".strip())
        self.publish_status()

    def publish_status(self):
        msg = String()
        msg.data = f"{self.state} {self.detail}".strip()
        self.status_pub.publish(msg)

    # ---------- go ----------
    def on_go(self, msg):
        name = msg.data.strip().lower().replace(" ", "_")

        if self.busy:
            self.get_logger().warn(
                f"Ignoring '{name}': already going to {self.place}. Cancel first.")
            return
        if name not in PLACES:
            self.set_status("REJECTED", f"unknown place '{msg.data}'")
            return
        if not self.client.server_is_ready():
            self.set_status("REJECTED", "Nav2 not ready")
            return

        x, y, yaw = PLACES[name]
        goal = NavigateToPose.Goal()
        goal.pose.header.frame_id = "map"
        goal.pose.header.stamp = self.get_clock().now().to_msg()
        goal.pose.pose.position.x = x
        goal.pose.pose.position.y = y
        goal.pose.pose.orientation.z = math.sin(yaw / 2.0)
        goal.pose.pose.orientation.w = math.cos(yaw / 2.0)

        self.busy = True
        self.place = name
        self.goal_handle = None
        self.set_status("SENDING", name)
        future = self.client.send_goal_async(goal, feedback_callback=self.on_feedback)
        future.add_done_callback(self.on_goal_response)

    def on_goal_response(self, future):
        handle = future.result()
        if not handle.accepted:
            self.busy = False
            self.set_status("REJECTED", f"Nav2 refused {self.place}")
            return
        self.goal_handle = handle
        self.set_status("NAVIGATING", self.place)
        handle.get_result_async().add_done_callback(self.on_result)

    def on_feedback(self, fb_msg):
        dist = fb_msg.feedback.distance_remaining
        self.detail = f"{self.place} ({dist:.1f} m left)"

    def on_result(self, future):
        status = future.result().status
        place = self.place
        self.busy = False
        self.goal_handle = None
        if status == GoalStatus.STATUS_SUCCEEDED:
            self.set_status("ARRIVED", place)
        elif status == GoalStatus.STATUS_CANCELED:
            self.set_status("CANCELED", place)
        else:
            self.set_status("FAILED", f"{place} (code {status})")

    # ---------- cancel ----------
    def on_cancel(self, _msg):
        if not self.busy:
            self.get_logger().info("Cancel received but nothing is active.")
            return
        if self.goal_handle is None:
            self.get_logger().warn("Goal not accepted yet. Press cancel again.")
            return
        self.get_logger().info("Cancelling...")
        self.goal_handle.cancel_goal_async()


def main():
    rclpy.init()
    node = PlaceNav()
    try:
        rclpy.spin(node)
    except KeyboardInterrupt:
        pass
    node.destroy_node()
    rclpy.shutdown()


if __name__ == "__main__":
    main()
