
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
wheelchair@wheelchair-LattePanda-3-Delta:~$ 
