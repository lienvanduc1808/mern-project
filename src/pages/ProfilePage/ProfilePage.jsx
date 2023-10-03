import React, { useEffect, useState } from "react";
import "./ProfilePage.scss";
import "../ProductDetailPage/ProductDetailPage.scss";
import InputForm from "../../components/InputForm/InputForm";
import { useSelector } from "react-redux";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
function ProfilePage() {
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const mutation = useMutationHooks((id, data) =>
    UserService.updateUser(id, data)
  );

  const { data, isLoading } = mutation;

  useEffect(() => {
    setEmail(user?.email);
    setName(user?.name);
    setPhone(user?.phone);
    setAddress(user?.address);
    setAvatar(user?.avatar);
  }, [user]);

  const handleChangeEmail = (value) => {
    setEmail(value);
  };
  const handleChangeName = (value) => {
    setName(value);
  };
  const handleChangePhone = (value) => {
    setPhone(value);
  };
  const handleChangeAddress = (value) => {
    setAddress(value);
  };
  const handleChangeAvatar = (value) => {
    setAvatar(value);
  };
  const handleUpdate = () => {
    mutation.mutate(user.id, (email, name, phone, address, avatar));
  };

  return (
    <div className="Profile_Container">
      <h1 className="WrapperHeader">Thông tin người dùng </h1>
      <LoadingComponent isLoading={isLoading}>
        <div className="WrapperContentProfile">
          <div className="wrapperInput">
            <label className="wrapperLabel" htmlFor="name">
              Name
            </label>
            <InputForm
              onChange={handleChangeName}
              value={name}
              style={{ width: "300px" }}
              id="name"
            />
            <button
              onClick={handleUpdate}
              style={{
                width: "fit-content",
                height: "30px",
                padding: "6px",
                border: "1px solid rgb(26,148,225)",
                color: "rgb(26,148,225)",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Cập nhật{" "}
            </button>
          </div>
          <div className="wrapperInput">
            <label className="wrapperLabel" htmlFor="email">
              Email
            </label>
            <InputForm
              onChange={handleChangeEmail}
              value={email}
              style={{ width: "300px" }}
              id="email"
            />
            <button
              onClick={handleUpdate}
              style={{
                width: "fit-content",
                height: "30px",
                padding: "6px",
                border: "1px solid rgb(26,148,225)",
                color: "rgb(26,148,225)",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Cập nhật{" "}
            </button>
          </div>
          <div className="wrapperInput">
            <label className="wrapperLabel" htmlFor="phone">
              Phone
            </label>
            <InputForm
              onChange={handleChangePhone}
              value={phone}
              style={{ width: "300px" }}
              id="phone"
            />
            <button
              onClick={handleUpdate}
              style={{
                width: "fit-content",
                height: "30px",
                padding: "6px",
                border: "1px solid rgb(26,148,225)",
                color: "rgb(26,148,225)",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Cập nhật{" "}
            </button>
          </div>
          <div className="wrapperInput">
            <label className="wrapperLabel" htmlFor="address">
              Address
            </label>
            <InputForm
              onChange={handleChangeAddress}
              value={address}
              style={{ width: "300px" }}
              id="address"
            />
            <button
              onClick={handleUpdate}
              style={{
                width: "fit-content",
                height: "30px",
                padding: "6px",
                border: "1px solid rgb(26,148,225)",
                color: "rgb(26,148,225)",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Cập nhật{" "}
            </button>
          </div>
          <div className="wrapperInput">
            <label className="wrapperLabel" htmlFor="avatar">
              Avatar
            </label>
            <InputForm
              onChange={handleChangeAvatar}
              value={avatar}
              style={{ width: "300px" }}
              id="avatar"
            />
            <button
              onClick={handleUpdate}
              style={{
                width: "fit-content",
                height: "30px",
                padding: "6px",
                border: "1px solid rgb(26,148,225)",
                color: "rgb(26,148,225)",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Cập nhật{" "}
            </button>
          </div>
        </div>
      </LoadingComponent>
    </div>
  );
}

export default ProfilePage;
