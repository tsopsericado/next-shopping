import React from "react";
import ProductData from "./ProductData";

const ProductsData = [
  {
    img: "/istockphoto1.jpg",
    title: "shoe",
    desc: "Pure Garment cotton shirt",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/istockphoto2.jpg",
    title: "shoe",
    desc: "Pure Garment cotton shirt",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/istockphoto3.jpg",
    title: "shoe",
    desc: "Pure Garment cotton shirt",
    rating: 4,
    price: "45",
  },
  {
    img: "/istockphoto4.jpg",
    title: "shoe",
    desc: "Pure Garment cotton shirt",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/istockphoto5.jpg",
    title: "shoe",
    desc: "Pure Garment cotton shirt",
    rating: 4,
    price: "45",
  },
  {
    img: "/istockphoto6.jpg",
    title: "shoe",
    desc: "Pure Garment cotton shirt",
    rating: 4,
    price: "45",
  },
  {
    img: "/istockphoto7.jpg",
    title: "shoe",
    desc: "Pure Garment cotton shirt",
    rating: 4,
    price: "45",
  },
  {
    img: "/istockphoto8.jpg",
    title: "shoe",
    desc: "Pure Garment cotton shirt",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/istockphoto9.jpg",
    title: "watch",
    desc: "Pure Garment cotton shirt",
    rating: 5,
    price: "45.00",
  },
];

const Newproducts = () => {
  return <div>
    <div className="container pt-16">
      <h2 className="font-meduim text-2xl pb-4">New Products</h2>



      <div className="grid grid-cols-1 place-items-center sm:place-content-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
        {ProductsData.map((  item, index) => ( 
          <ProductData
           key={index}
           img={item.img}
           title={item.title}
           desc={item.desc}
           rating={item.price}
           price={item.price}
          />
        ))}
      </div>

    </div>
  </div>;
};

export default Newproducts;
