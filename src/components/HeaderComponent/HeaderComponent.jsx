import React, { useEffect, useState } from "react";
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

function HeaderComponent({ isHiddenSearch = false, isHiddenCart = false }) {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
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

  useEffect(() => {
    setLoading(true);
    setUserName(user.name);
    setUserAvatar(user.avatar);
    setLoading(false);
  }, [user.name, user?.avatar]);
  const content = (
    <div>
      <p
        className="WrapperPopup"
        onClick={() => {
          navigate("/profile-user");
        }}
      >
        Thôg tin người dùng{" "}
      </p>

      {user.isAdmin && (
        <p
          className="WrapperPopup"
          onClick={() => {
            navigate("/system/admin");
          }}
        >
          Quản lý hệ thống{" "}
        </p>
      )}
      <p className="WrapperPopup" onClick={handleLogout}>
        Đăng xuất
      </p>
    </div>
  );
  return (
    <div>
      <div className="WrapperHeader">
        <Row
          className="row"
          style={{
            justifyContent:
              isHiddenSearch && isHiddenCart ? "space-between" : "unset",
          }}
        >
          <Col span={6} className="wrapperTextHeader">
            VANDUC
          </Col>
          {!isHiddenSearch && (
            <Col span={12}>
              <Search
                placeholder="input search text"
                allowClear
                enterButton
                size="large"
                onSearch={onSearch}
              />
            </Col>
          )}

          <Col span={6} className="UserInfo">
            <LoadingComponent isLoading={loading}>
              <div className="WrapperAccount">
                {userAvatar ? (
                  <img
                    src={userAvatar}
                    style={{
                      height: "30px",
                      width: "30px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    alt="avatar"
                  />
                ) : (
                  <UserOutlined className="AccountIcon" />
                )}

                {user?.access_token ? (
                  <>
                    <Popover content={content} trigger="click">
                      <div style={{ cursor: "pointer", paddingTop: "10px" }}>
                        {userName || user?.email || "User"}
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
            {!isHiddenCart && (
              <div className="WrapperCart">
                <Badge count={4} size="small">
                  <ShoppingCartOutlined className="CartIcon" />
                </Badge>
                <span className="CartText">Giỏ hàng </span>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HeaderComponent;
