import { Badge, Image, Space, Typography } from "antd";
import { BellFilled, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
function AppHeader() {
  return (
    <div className="AppHeader">
      <Image
        width={50}
        src="https://img.freepik.com/free-icon/pie-chart_318-372376.jpg"
      ></Image>
      <Typography.Title>User Dashboard</Typography.Title>
      <Space>
        <Link to="/login">
          <Badge>
            <UserOutlined style={{ fontSize: 24 }} />
          </Badge>
        </Link>
        <Badge count={10} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={20}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
}
export default AppHeader;




