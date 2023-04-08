import React from "react";
//import { data } from "../data";
import kitchen from "../asset/image/kitchen.jpg";
// import livingroom2 from "https://images.unsplash.com/photo-1588706235076-627d896e9f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80";
// import livingroom1 from "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
// import modernSofa from "../asset/image/furn1.jpg";
import { Link } from "react-router-dom";

const Cards = () => {
  const data = [
    {
      id: 1,
      imgage1: kitchen,
      //image2: livingroom2,
      alt: "kitchen",
      name: "Modern kitchen",
      price: "678$",
      basket: "fi fi-rr-shopping-cart text-lg",
    },
    {
      id: 2,
      imgUrl: kitchen,
      alt: "classic sofa",
      name: "Modern sofa",
      price: "376$",
      basket: "fi fi-rr-shopping-cart text-lg",
    },
    {
      id: 3,
      imgUrl: kitchen,
      alt: "vintage sofa",
      name: "Modern sofa",
      price: "200$",
      basket: "fi fi-rr-shopping-cart text-lg",
    },
    {
      id: 4,
      imgUrl: kitchen,
      alt: "modern sofa",
      name: "Modern sofa",
      price: "149$",
      basket: "fi fi-rr-shopping-cart text-lg",
    },
    {
      id: 5,
      imgUrl: kitchen,
      alt: "vintage sofa",
      name: "Modern sofa",
      price: "200$",
      basket: "fi fi-rr-shopping-cart text-lg",
    },
    {
      id: 6,
      imgUrl: kitchen,
      alt: "modern sofa",
      name: "Modern sofa",
      price: "149$",
      basket: "fi fi-rr-shopping-cart text-lg",
    },
  ];

  return (
    <section className="text-darkBlue">
      <div className="container px-4 ">
        <div className="flex flex-wrap ">
          <div className="flex flex-wrap w-full mb-12 ">
            <div className="lg:w-1/2 w-full mb-2 lg:mb-0">
              <h1 className="md:text-3xl text-lg font-medium title-font mb-2 pt-6 ">
                All Products
              </h1>
              <div className="h-1 w-20 bg-beige rounded"></div>
            </div>
          </div>
          {data.map(({ id, imgage1, image2, alt, name, price, basket }) => (
            <div key={id} className="md:w-1/3 w-full p-2 ">
              <Link to="#" className="group block overflow-hidden">
                <div className="relative h-[300px] sm:h-44">
                  <img
                    src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1588706235076-627d896e9f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                  />
                </div>

                <div className="relative bg-white pt-3">
                  <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {name}
                  </h3>

                  <div className="mt-1.5 flex items-center justify-between text-gray-900">
                    <p className="tracking-wide">{price}</p>

                    <p className="text-lg p-r-1">
                      <i className="fi fi-rr-shopping-cart"></i>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-row-reverse">
          <button
            className="  mt-8 bg-beige md:px-7 md:py-2.5 px-5 py-1.5 font-medium
            rounded-md text-white w-auto"
          >
            See more <i className="fi fi-rr-angle-small-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cards;
