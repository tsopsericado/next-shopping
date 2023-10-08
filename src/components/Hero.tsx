"use client"

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";


const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/landing-image.jpg",
      title: "Trending item",
      maintitle: "WOMEN'S LATEST FASHION SALE",
      price: "$20",
    },
    {
      id: 1,
      img: "/landing-image2.jpg",
      title: "Trendind accesories",
      maintitle: "MODERN SUNGLASS",
      price: "$15",
    },
    {
      id: 2,
      img: "/pexels-photo.jpg",
      title: "sale Offer",
      maintitle: "NEW FASHION SUMMER SALE",
      price: "$30",
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
         <Slider {...settings}>
          {slideData.map((item) =>(
            <Slide
             key={item.id}
             img={item.img}
             title={item.title}
             mainTitle={item.maintitle}
             price={item.price} />
          ))}
         </Slider>
      </div>
    </div>
  );
};

export default Hero;
