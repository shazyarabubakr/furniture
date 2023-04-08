import React from "react";
import kitchen from "../asset/image/kitchen.jpg";
import furn1 from "../asset/image/furn1.jpg";
import bedroom from "../asset/image/bedroom.jpg";

import { Link } from "react-router-dom";
const HomeNewProducts = () => {
  const newProducts = [
    {
      id: 1,
      imgUrl: furn1,
      alt: "modern sofa",
      name: "Modern sofa",
      price: "678$",
      basket: "fi fi-rr-shopping-cart md:text-lg text-sm",
    },
    {
      id: 2,
      imgUrl: bedroom,
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
  ];
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <h1 className="md:text-3xl text-xl font-medium title-font mb-2 ">
          New Products
        </h1>
        <div className="h-1 w-20 bg-beige rounded "></div>

        <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3 ">
          <li>
            <Link to="#" className="relative block group ">
              <img
                src={kitchen}
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">Kitchen</h3>

                <span className="mt-1.5 inline-block bg-beige px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </Link>
          </li>

          <li>
            <Link to="#" className="relative block group">
              <img
                src={bedroom}
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">Bedroom</h3>

                <span className="mt-1.5 inline-block bg-beige  px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </Link>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <Link to="#" className="relative block group">
              <img
                src={furn1}
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">Modern Sofa</h3>

                <span className="mt-1.5 inline-block bg-beige px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomeNewProducts;
