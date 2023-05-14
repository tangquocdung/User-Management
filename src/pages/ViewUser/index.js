import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Typography } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import "./viewuser.css";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/users/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const onDeleteUser = (id) => {
    axios
      .delete("http://localhost:3001/users/" + id)
      .then((res) => alert("Delete successful!"))
      .catch((err) => console.log(err));
  };
  const columns = [
    {
      key: "1",
      title: "UserName",
      dataIndex: "userName",
    },
    {
      key: "2",
      title: "Password",
      dataIndex: "password",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "FirstName",
      dataIndex: "firstName",
    },
    {
      key: "5",
      title: "SurName",
      dataIndex: "surName",
    },
    {
      key: "6",
      title: "FullName",
      dataIndex: "fullName",
    },
    {
      key: "7",
      title: "Address",
      dataIndex: "address",
    },
    {
      key: "8",
      title: "Actions",
      render: (item) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                navigate(`/update/${item.id}`);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteUser(item.id);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="list__user">
      <Typography.Title>List User</Typography.Title>
      <Table columns={columns} dataSource={data}></Table>
    </div>
  );
};

export default Dashboard;
