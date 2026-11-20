import rclpy
from rclpy.node import Node
from geometry_msgs.msg import PoseStamped
from builtin_interfaces.msg import Time


class GoalStampRelay(Node):
    def __init__(self):
        super().__init__('goal_stamp_relay')
        self.pub = self.create_publisher(PoseStamped, '/goal_pose', 10)
        self.create_subscription(PoseStamped, '/goal_pose_raw', self.cb, 10)

    def cb(self, msg):
        msg.header.stamp = Time()  # zero stamp = use latest transform
        if not msg.header.frame_id:
            msg.header.frame_id = 'map'
        self.pub.publish(msg)


def main():
    rclpy.init()
    rclpy.spin(GoalStampRelay())


if __name__ == '__main__':
    main()
