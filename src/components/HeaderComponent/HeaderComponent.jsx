import React, { useState } from "react";
import { Row, Col, Badge, Popover, Button } from "antd";
import "./HeaderComponent.scss";
import { AudioOutlined } from "@ant-design/icons";
import { Input } from "antd";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "../../services/UserService";
import { resetUser } from "../../redux/slices/userSlices";
import LoadingComponent from "../LoadingComponent/LoadingComponent";

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
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleNavigateLogin = () => {
    navigate("/sign-in");
  };
  const handleLogout = async () => {
    setLoading(true);
    await UserService.logOutUser();
    dispatch(resetUser());
    setLoading(false);
  };
  const content = (
    <div>
      <p className="WrapperPopup" onClick={handleLogout}>
        Đăng xuất
      </p>
      <p
        className="WrapperPopup"
        onClick={() => {
          navigate("/profile-user");
        }}
      >
        Thôg tin người dùng{" "}
      </p>
    </div>
  );
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
            <LoadingComponent isLoading={loading}>
              <div className="WrapperAccount">
                <UserOutlined className="AccountIcon" />
                {user?.access_token ? (
                  <>
                    <Popover content={content} trigger="click">
                      <div style={{ cursor: "pointer", paddingTop: "10px" }}>
                        {user?.name || user?.email || "User"}
                      </div>
                    </Popover>
                  </>
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
            </LoadingComponent>
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
