import React from "react";
import { Card, Image } from "antd";
import "./CardComponent.scss";
import { StarFilled } from "@ant-design/icons";
import logo from "../../assets/images/checkauth.png";

function CardComponent(props) {
  const {
    countInStock,
    description,
    image,
    name,
    rating,
    price,
    type,
    discount,
    selled,
  } = props;

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
          <Image src={logo} className="" />
        </div>

        <div className="Name_Product">{name}</div>
        <div className="Wrapper_ReportText">
          <span>
            <span>
              {rating} <StarFilled className="star_icon" />
            </span>
          </span>
          <span>| đã bán {selled || 1000}</span>
        </div>
        <div className="Wrapper_Price">
          {price} <span className="Discount_Price">{discount || 5} %</span>
        </div>
      </Card>
    </div>
  );
}

export default CardComponent;
