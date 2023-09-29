import { Col, Image, Row } from "antd";
import React from "react";
import productImage from "../../assets/images/productImage.png";
import productSmall from "../../assets/images/imageSmall.png";
import "./ProductDetailPage.scss";
import { StarFilled } from "@ant-design/icons";

import TypedInputNumber from "antd/es/input-number";

function ProductDetailPage() {
  return (
    <div className="ProductDetailPage_container">
      <Row>
        <Col span={10}>
          <Row>
            <Col span={12}>
              <Image
                src={productImage}
                alt="image-product"
                preview="false"
                className="image_product"
              />
            </Col>
            <Col span={12}>
              <Image
                src={productImage}
                alt="image-product"
                preview="false"
                className="image_product"
              />
            </Col>
          </Row>

          <div className="small_image">
            <Row style={{ paddingTop: "10px" }}>
              <Col span={4}>
                <Image src={productSmall} alt="image-small" preview="false" />
              </Col>
              <Col span={4}>
                <Image src={productSmall} alt="image-small" preview="false" />
              </Col>
              <Col span={4}>
                <Image src={productSmall} alt="image-small" preview="false" />
              </Col>
              <Col span={4}>
                <Image src={productSmall} alt="image-small" preview="false" />
              </Col>
              <Col span={4}>
                <Image src={productSmall} alt="image-small" preview="false" />
              </Col>
              <Col span={4}>
                <Image src={productSmall} alt="image-small" preview="false" />
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={14} className="Product_info">
          <h1 className="WrapperStyleName">
            Bộ Nồi Chảo Chống Dính Baby Elmich EL-1167 2351167
          </h1>
          <div>
            <StarFilled className="star_icon" />
            <StarFilled className="star_icon" />
            <StarFilled className="star_icon" />
            <span>| đã bán 1000</span>
          </div>
          <div className="WrapperProduct">
            <div className="WrapperTextPro">349.000</div>
          </div>
          <div className="WrapperAddress">
            <span>Giao đến </span>
            <span className="address">Q. 1, P. Bến Nghé, Hồ Chí Minh </span> -
            <span className="changeAddress"> Đổi địa chỉ </span>
          </div>
          <div className="WrapperQuality">
            <div>Số lượng</div>
            <div className="inputQuality">
              <TypedInputNumber
                size="small"
                min={1}
                max={100000}
                defaultValue={3}
                // onChange={onChange}
              />
            </div>
          </div>
          <div className="Cash">
            <button className="Buy">Mua ngay</button>
            <button className="Cart">Thêm vào giỏ hàng </button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetailPage;
