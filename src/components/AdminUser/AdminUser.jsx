import React from "react";
import "./AdminUser.scss";
import { Button } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import TableComponent from "../TableComponent/TableComponent";
function AdminUser() {
  return (
    <div>
      <div className="WrapperHeader">Quản lý ngươì dùng </div>
      <Button className="AddUser">
        <UserAddOutlined className="AddIcon" />
      </Button>
      <div className="TableUser">
        <TableComponent />
      </div>
    </div>
  );
}

export default AdminUser;
