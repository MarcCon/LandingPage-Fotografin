import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowForward
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        fontSize: "24px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowBack
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <div className="my-32">
        <Slider {...settings}>
          <div>
            <img
              src="/BilderSeiten/abiball/Abi6.jpg"
              className="mx-auto h-[500px] w-auto"
            />
          </div>
          <div>
            <img
              src="/BilderSeiten/Bine/Bine15.jpg"
              className="mx-auto h-[500px] w-auto"
            />
          </div>
          <div>
            <img
              src="/BilderSeiten/Familienfeier/Fam1.jpg"
              className="mx-auto h-[500px] w-auto"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
