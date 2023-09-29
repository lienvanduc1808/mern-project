import React from "react";

import "./NavBarComponent.scss";
import { Checkbox, Rate } from "antd";

function NavBarComponent() {
  const onChange = () => {};
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => {
          return (
            <span key={option} className="WrapperTextValue">
              {option}
            </span>
          );
        });
      case "checkbox":
        return (
          <Checkbox.Group
            style={{ width: "100%" }}
            onChange={onChange}
            className="checkboxNav"
          >
            {options.map((option) => {
              return (
                <Checkbox key={option.value} value={option.value}>
                  {option.label}
                </Checkbox>
              );
            })}
          </Checkbox.Group>
        );
      case "star":
        return options.map((option) => {
          return (
            <div key={option} className="rate_star">
              <Rate disabled defaultValue={option} />
              <span> từ {option} sao</span>
            </div>
          );
        });
      case "price":
        return options.map((option) => {
          return (
            <div key={option} className="price_product">
              {option}
            </div>
          );
        });

      default:
        return {};
    }
  };
  return (
    <div className="navbar_container">
      <h4 className="WrapperLabelText">Label</h4>
      <div className="WrapperContent">
        {renderContent("text", ["Tu lanh", "TV", "Dien thoai"])}
      </div>
    </div>
  );
}

export default NavBarComponent;
