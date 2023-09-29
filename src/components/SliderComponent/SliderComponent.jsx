import React from "react";
import Slider from "react-slick";
import { Image } from "antd";
function SliderComponent({ arrImages }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings}>
      {arrImages.map((item) => {
        return (
          <Image
            key={item}
            src={item}
            alt="slider"
            preview={false}
            width="100%"
            height="274px"
          />
        );
      })}
    </Slider>
  );
}

export default SliderComponent;
