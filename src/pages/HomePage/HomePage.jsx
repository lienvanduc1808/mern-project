import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import "./HomePage.scss";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import anh1 from "../../assets/images/anh1.png";
import anh2 from "../../assets/images/anh2.png";
import anh3 from "../../assets/images/anh3.png";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";

function HomePage() {
  const arr = ["TV", "Tu lanh", "Laptop"];
  return (
    <div className="Homepage_Container">
      <div className="WrapperProduct">
        {arr.map((item) => {
          return <TypeProduct name={item} key={item} />;
        })}
      </div>
      <div className="Body_Product">
        <SliderComponent arrImages={[anh1, anh2, anh3]} />
        <div className="Card_Product">
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
        <div className="flex_center">
          <button className="button_more">Xem thêm </button>
        </div>
        <NavBarComponent />
      </div>
    </div>
  );
}

export default HomePage;
