import React from "react";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import "./TypeProductPage.scss";

function TypeProductPage() {
  const onChange = () => {};
  return (
    <div className="Type_productContainer">
      <Row className="TypeProduct">
        <Col span={4} className="col_type">
          <NavBarComponent />
        </Col>
        <Col span={20}>
          <div className="row_type">
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div>
          <Pagination
            showQuickJumper
            defaultCurrent={2}
            total={500}
            onChange={onChange}
            className="pagination"
          />
        </Col>
      </Row>
    </div>
  );
}

export default TypeProductPage;
