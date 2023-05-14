import { Form, Input, Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dataSingle, setDataSingle] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/users/${id}`)
      .then((res) => setDataSingle(res.data))
      .catch((err) => console.log(err));
  }, []);
  function handleSubmit(values) {
    values.preventDefault();
    axios.put(`http://localhost:3001/users/${id}`, dataSingle).then((res) => {
      alert("Update successful!");
      navigate("/dashboard");
    });
  }
  console.log(dataSingle);

  return (
    <div className="form__update">
      <h3>Update User</h3>
      <Form>
        <Form.Item>
          <Input
            value={dataSingle.userName}
            onChange={(e) =>
              setDataSingle({ ...dataSingle, userName: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item>
          <Input
            value={dataSingle.password}
            onChange={(e) =>
              setDataSingle({ ...dataSingle, password: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item>
          <Input
            value={dataSingle.email}
            onChange={(e) =>
              setDataSingle({ ...dataSingle, email: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item>
          <Input
            value={dataSingle.firstName}
            onChange={(e) =>
              setDataSingle({ ...dataSingle, firstName: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item>
          <Input
            value={dataSingle.surName}
            onChange={(e) =>
              setDataSingle({ ...dataSingle, surName: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item>
          <Input
            value={dataSingle.fullName}
            onChange={(e) =>
              setDataSingle({ ...dataSingle, fullName: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item>
          <Input
            value={dataSingle.address}
            onChange={(e) =>
              setDataSingle({ ...dataSingle, address: e.target.value })
            }
          />
        </Form.Item>
        <Button onClick={handleSubmit} type="primary">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default Update;
