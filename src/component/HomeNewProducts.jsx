import React from "react";
import kitchen from "../asset/image/kitchen.jpg";
import livingroom from "../asset/image/livingroom.jpg";
import { Link } from "react-router-dom";
const HomeNewProducts = () => {
  const products = [
    {
      id: 1,
      imgUrl: "kitchen",
      alt: "modern sofa",
      name: "Modern sofa",
      price: "678$",
      basket: "fi fi-rr-shopping-cart md:text-lg text-sm",
    },
    {
      id: 2,
      imgUrl: livingroom,
      alt: "classic sofa",
      name: "Modern sofa",
      price: "376$",
      basket: "fi fi-rr-shopping-cart md:text-lg text-sm",
    },
    {
      id: 3,
      imgUrl: kitchen,
      alt: "vintage sofa",
      name: "Modern sofa",
      price: "200$",
      basket: "fi fi-rr-shopping-cart md:text-lg text-sm",
    },
    {
      id: 4,
      imgUrl: kitchen,
      alt: "modern sofa",
      name: "Modern sofa",
      price: "149$",
      basket: "fi fi-rr-shopping-cart md:text-lg text-sm",
    },
  ];
  return (
    <section className="text-darkblue">
      <div className="container px-4 py-24 mx-auto">
        <div class="flex flex-wrap -m-4 ">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0 px-4">
              <h1 className="md:text-3xl text-xl font-medium title-font mb-2 ">
                New Products
              </h1>
              <div className="h-1 w-20 bg-beige rounded "></div>
            </div>
          </div>
          {products.map(({ id, imgUrl, alt, name, price, basket }) => (
            <div key={id} className="lg:w-1/4 md:w-1/3 w-1/2 p-4 ">
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
        <div className="w-full flex flex-row-reverse	">
          <button
            className="mt-8 bg-beige md:px-7 md:py-2.5 px-5 py-1.5 font-medium
          rounded-md text-white w-auto"
          >
            See more <i class="fi fi-rr-angle-small-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeNewProducts;
