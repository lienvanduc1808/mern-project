import React, { useEffect, useState } from "react";
import InputForm from "../../components/InputForm/InputForm";
import { Image } from "antd";
import imageLogo from "../../assets/images/signinRight.png";
import "../SigninPage/SigninPage.scss";
import { useNavigate } from "react-router-dom";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
import * as message from "../../components/Message/Message";
function SignupPage() {
  const navigate = useNavigate();
  const handleNavigateSignin = () => {
    navigate("/sign-in");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnchangePassword = (value) => {
    setPassword(value);
  };

  const handleOnchangeConfirmPassword = (value) => {
    setConfirmPassword(value);
  };

  const mutation = useMutationHooks((data) => UserService.signUpUser(data));
  const { data, isLoading, isSuccess, isError } = mutation;

  useEffect(() => {
    if (isSuccess) {
      message.success();
      handleNavigateSignin();
    } else if (isError) {
      message.error();
    }
  }, [isSuccess, isError]);
  const handleSignUp = () => {
    mutation.mutate({ email, password, confirmPassword });
  };
  return (
    <div className="SigninPage">
      <div className="SignInContainer">
        <div className="SigninLeft">
          <h1>Hi! Xin chào </h1>
          <p>Đăng ký và tạo tài khoản </p>
          <InputForm
            className="marginBottom"
            placeholder="abc@gmail.com "
            value={email}
            onChange={handleOnchangeEmail}
          />
          <InputForm
            className="marginBottom"
            placeholder="Nhập mật khẩu "
            value={password}
            onChange={handleOnchangePassword}
          />
          <InputForm
            className="marginBottom"
            placeholder="Xác nhận mật khẩu "
            value={confirmPassword}
            onChange={handleOnchangeConfirmPassword}
          />
          {data?.status === "ERR" && (
            <span style={{ color: "red" }}>{data?.message}</span>
          )}
          <LoadingComponent isLoading={isLoading}>
            <button className="Buy" onClick={handleSignUp}>
              Tiếp tục{" "}
            </button>
          </LoadingComponent>

          <p onClick={handleNavigateSignin}>
            Đã có tài khoản?{" "}
            <span style={{ color: "rgb(13,92,182)", cursor: "pointer" }}>
              Đăng nhập
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

export default SignupPage;
