import React, { useState } from "react";
import { Table, Button, Modal, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import "./create.css";

const CreateUser = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatingUser, setUpdatingUser] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      userName: "Tăng Quốc Dũng",
      password: "123456",
      email: "dung2003@gmail.com",
      firstName: "Dũng",
      surName: "Tăng",
      fullName: "Tăng Quốc Dũng",
      address: "TPHCM",
    },
    {
      id: 2,
      userName: "Trần Nhựt Tiến",
      password: "123456",
      email: "tien2003@gmail.com",
      firstName: "Tiến",
      surName: "Nhựt",
      fullName: "Trần Nhựt Tiến",
      address: "Trà Vinh",
    },
    {
      id: 3,
      userName: "Trần Duy Phúc",
      password: "123456",
      email: "phuc2003@gmial.com",
      firstName: "Phúc",
      surName: "Trần",
      fullName: "Trần Duy Phúc",
      address: "Thủ Đức",
    },
    {
      id: 4,
      userName: "Châu Gia Bảo",
      password: "123456",
      email: "bao2003@gmail.com",
      firstName: "Bảo",
      surName: "Châu",
      fullName: "Châu Gia Bảo",
      address: "  TPHCM",
    },
  ]);
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
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onUpdateUser(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteUser(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onAddUser = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newUser = {
      id: randomNumber,
      userName: "UserName" + randomNumber,
      email: randomNumber + "@gmail.com",
      address: "Address" + randomNumber,
      password: "Password" + randomNumber,
      firstName: "FirstName" + randomNumber,
      surName: "SurName" + randomNumber,
      fullName: "FullName" + randomNumber,
    };
    axios
      .post("http://localhost:3001/users", newUser)
      .then((res) => alert("Create successful!"))
      .catch((err) => console.log(err));
  };

  const onDeleteUser = (record) => {
    Modal.confirm({
      title: "You want to delete this User record ?",
      okText: "Delete",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((user) => user.id !== record.id);
        });
      },
    });
  };
  const onUpdateUser = (record) => {
    setIsUpdating(true);
    axios
      .put(`http://localhost:3001/users/${record.id}`)
      .then((res) => alert("Update successful!"))
      .catch((err) => console.log(err));
  };
  const resetUpdating = () => {
    setIsUpdating(false);
    setUpdatingUser(null);
  };
  return (
    <div className="create__user">
      <Button onClick={onAddUser} className="button__user" type="primary">
        Create a new User
      </Button>
      <Table columns={columns} dataSource={dataSource}></Table>
      <Modal
        title="Update User"
        visible={isUpdating}
        okText="Update"
        onCancel={() => {
          resetUpdating();
        }}
        onOk={() => {
          setDataSource((pre) => {
            return pre.map((user) => {
              if (user.id === updatingUser.id) {
                return updatingUser;
              } else {
                return user;
              }
            });
          });
          resetUpdating();
        }}
      >
        UserName:
        <Input
          value={updatingUser?.userName}
          onChange={(e) => {
            setUpdatingUser((pre) => {
              return { ...pre, userName: e.target.value };
            });
          }}
        />
        Password:
        <Input
          value={updatingUser?.password}
          onChange={(e) => {
            setUpdatingUser((pre) => {
              return { ...pre, password: e.target.value };
            });
          }}
        />
        Email:
        <Input
          value={updatingUser?.email}
          onChange={(e) => {
            setUpdatingUser((pre) => {
              return { ...pre, email: e.target.value };
            });
          }}
        />
        FirstName:
        <Input
          value={updatingUser?.firstName}
          onChange={(e) => {
            setUpdatingUser((pre) => {
              return { ...pre, firstName: e.target.value };
            });
          }}
        />
        SurName:
        <Input
          value={updatingUser?.surName}
          onChange={(e) => {
            setUpdatingUser((pre) => {
              return { ...pre, surName: e.target.value };
            });
          }}
        />
        FullName:
        <Input
          value={updatingUser?.fullName}
          onChange={(e) => {
            setUpdatingUser((pre) => {
              return { ...pre, fullName: e.target.value };
            });
          }}
        />
        Address:
        <Input
          value={updatingUser?.address}
          onChange={(e) => {
            setUpdatingUser((pre) => {
              return { ...pre, address: e.target.value };
            });
          }}
        />
      </Modal>
    </div>
  );
};
export default CreateUser;
