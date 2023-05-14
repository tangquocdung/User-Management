import { Menu } from "antd";
import { AppstoreOutlined, FolderViewOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function SideMenu() {
  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        onClick={(item) => {
          navigate(item.key);
        }}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined />,
            key: "/dashboard",
          },
          {
            label: "Create User",
            icon: <FolderViewOutlined />,
            key: "/CreateUser",
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;
