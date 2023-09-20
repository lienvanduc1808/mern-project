import React from "react";
import { Row, Col } from "antd";
import "./HeaderComponent.scss";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

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
              <div className="AccountInfo">
                <span>Đăng nhập/Đăng ký</span>
                <span>
                  Tài khoản <CaretDownOutlined />
                </span>
              </div>
            </div>
            <div className="WrapperCart">
              <ShoppingCartOutlined className="CartIcon" />
              <span className="CartText">Giỏ hàng </span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HeaderComponent;
