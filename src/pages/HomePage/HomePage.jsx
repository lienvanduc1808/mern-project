import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import "./HomePage.scss";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import anh1 from "../../assets/images/anh1.png";
import anh2 from "../../assets/images/anh2.png";
import anh3 from "../../assets/images/anh3.png";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import { useQuery } from "@tanstack/react-query";
import * as ProductService from "../../services/ProductService";
function HomePage() {
  const arr = ["TV", "Tu lanh", "Laptop"];
  const fetchAllProduct = async () => {
    const res = await ProductService.getAllProduct();
    return res;
  };
  const { isLoading, data: products } = useQuery(["product"], fetchAllProduct, {
    retry: 3,
    retryDelay: 1000,
  });

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
          {products?.data?.map((product) => {
            return (
              <CardComponent
                key={product._id}
                countInStock={product.countInStock}
                description={product.description}
                image={product.image}
                name={product.name}
                price={product.price}
                rating={product.rating}
                type={product.type}
                selled={product.selled}
                discount={product.discount}
                id={product._id}
              />
            );
          })}
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
