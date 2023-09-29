import React, { useEffect, useState } from "react";
import InputForm from "../../components/InputForm/InputForm";
import "./SigninPage.scss";

import imageLogo from "../../assets/images/signinRight.png";
import { Image } from "antd";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
import * as message from "../../components/Message/Message";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slices/userSlices";
function SigninPage() {
  const Navigate = useNavigate();
  const handleNavigateSignUp = () => {
    Navigate("/sign-up");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const mutation = useMutationHooks((data) => UserService.loginUser(data));

  const { data, isLoading, isSuccess, isError } = mutation;
  useEffect(() => {
    if (isSuccess) {
      Navigate("/");

      localStorage.setItem("access token", data?.access_token);
      if (data?.access_token) {
        const decoded = jwt_decode(data?.access_token);
        console.log("decoded", decoded);
        if (decoded?.id) {
          handleGetDetailUser(decoded?.id, data?.access_token);
        }
      }
    } else if (isError) {
      message.error();
    }
  }, [isSuccess, isError]);

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };

  const handleOnchangePassword = (value) => {
    setPassword(value);
  };

  const handleLoginUser = () => {
    mutation.mutate({ email, password });
  };

  const handleGetDetailUser = async (id, token) => {
    const res = await UserService.getDetaisUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
    console.log("res", res);
  };
  return (
    <div className="SigninPage">
      <div className="SignInContainer">
        <div className="SigninLeft">
          <h1>Hi! Xin chào </h1>
          <p>Đăng nhập và tạo tài khoản </p>
          <InputForm
            className="marginBottom"
            placeholder="abc@gmail.com"
            onChange={handleOnchangeEmail}
            value={email}
          />

          <InputForm
            className="marginBottom"
            placeholder="passsword"
            onChange={handleOnchangePassword}
            value={password}
          />
          {data?.status === "ERR" && (
            <span style={{ color: "red" }}>{data?.message}</span>
          )}
          <LoadingComponent isLoading={isLoading}>
            <button className="Buy" onClick={handleLoginUser}>
              Đăng nhập{" "}
            </button>
          </LoadingComponent>
          <p style={{ color: "rgb(13,92,182)", cursor: "pointer" }}>
            Quên mật khẩu{" "}
          </p>
          <p>
            Chưa có tài khoản?{" "}
            <span
              style={{ color: "rgb(13,92,182)", cursor: "pointer" }}
              onClick={handleNavigateSignUp}
            >
              Tạo tài khoản
            </span>
          </p>
        </div>
        <div className="SigninRight">
          <Image
            src={imageLogo}
            preview={false}
            alt="image logo"
            height="203px"
            width="203px"
          />
          <h4>Mua sam tai TIKI</h4>
        </div>
      </div>
    </div>
  );
}

export default SigninPage;
