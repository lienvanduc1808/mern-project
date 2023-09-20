import React from "react";
import { Card, Image } from "antd";
import "./CardComponent.scss";
import { StarFilled } from "@ant-design/icons";
import logo from "../../assets/images/checkauth.png";

function CardComponent() {
  return (
    <div className="Card_Container">
      <Card
        hoverable
        style={{
          width: 240,
        }}
        bodyStyle={{
          padding: "10px",
        }}
        headStyle={{
          width: "200px",
          height: "200px",
        }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <div className="product_logo">
          <Image src={logo} classname="" />
        </div>

        <div className="Name_Product">Iphone</div>
        <div className="Wrapper_ReportText">
          <span>
            <span>
              4.96 <StarFilled className="star_icon" />
            </span>
          </span>
          <span>| đã bán 1000</span>
        </div>
        <div className="Wrapper_Price">
          1,000,000 <span className="Discount_Price">24%</span>
        </div>
      </Card>
    </div>
  );
}

export default CardComponent;
