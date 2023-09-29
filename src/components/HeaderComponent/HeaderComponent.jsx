import React from "react";
import { Row, Col, Badge } from "antd";
import "./HeaderComponent.scss";
import { AudioOutlined } from "@ant-design/icons";
import { Input } from "antd";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const onSearch = (value) => console.log(value);

function HeaderComponent() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log("user", user);
  const handleNavigateLogin = () => {
    navigate("/sign-in");
  };
  return (
    <div>
      <div className="WrapperHeader">
        <Row className="row">
          <Col span={6} className="wrapperTextHeader">
            VANDUC
          </Col>
          <Col span={12}>
            <Search
              placeholder="input search text"
              allowClear
              enterButton
              size="large"
              onSearch={onSearch}
            />
          </Col>
          <Col span={6} className="UserInfo">
            <div className="WrapperAccount">
              <UserOutlined className="AccountIcon" />
              {user?.name ? (
                <div style={{ cursor: "pointer", paddingTop: "10px" }}>
                  {user?.name}
                </div>
              ) : (
                <div className="AccountInfo">
                  <div onClick={handleNavigateLogin}>
                    <span>Đăng nhập/Đăng ký</span>
                  </div>
                  <span>
                    Tài khoản <CaretDownOutlined />
                  </span>
                </div>
              )}
            </div>
            <div className="WrapperCart">
              <Badge count={4} size="small">
                <ShoppingCartOutlined className="CartIcon" />
              </Badge>
              <span className="CartText">Giỏ hàng </span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HeaderComponent;
