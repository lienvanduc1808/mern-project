import Input from "antd/es/input/Input";
import React, { useState } from "react";
import "./InputForm.scss";
function InputForm(props) {
  const { placeholder = "Nhập text ", ...rests } = props;
  const handleOnchangeInput = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Input
      placeholder={placeholder}
      value={props.value}
      {...rests}
      onChange={handleOnchangeInput}
    />
  );
}

export default InputForm;
