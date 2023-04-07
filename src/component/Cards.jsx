import React from "react";
// import { data } from "../data/data";
import kitchen from "../asset/image/kitchen.jpg";
// import modernSofa from "../asset/image/furn1.jpg";
// import modernSofa2 from "../asset/image/furn2.jpg";

const Cards = () => {
  const data = [
    {
      id: 1,
      imgUrl: kitchen,
      alt: "modern sofa",
      name: "Modern sofa",
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
      <div className="container px-4 py-14 md:ml-8 md:mr-4 w-3/4 ">
        <div class="flex flex-wrap -m-4">
          <div className="flex flex-wrap w-full mb-20 ">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="md:text-3xl text-lg font-medium title-font mb-2 pt-6 ">
                New Products
              </h1>
              <div className="h-1 w-20 bg-beige rounded"></div>
            </div>
          </div>
          {data.map(({ id, imgUrl, alt, name, price, basket }) => (
            <div key={id} className="xl:w-1/4 md:w-1/3 w-1/2 p-2 ">
              <div className="w-full max-w-sm  shadow">
                <img className="" src={imgUrl} alt={alt} />

                <div className="px-5 pb-5">
                  <h5 className="md:text-2xl text-sm font-medium tracking-tight">
                    {name}
                  </h5>
                  <div className="flex items-center justify-between mt-6">
                    <span className="md:text-lg text-sm font-semibold">
                      {price}
                    </span>
                    <a
                      href="#home"
                      className="text-white bg-beige hover:bg-lightBeige font-medium rounded-full text-sm md:px-4 md:py-2 px-2 py-1text-center"
                    >
                      <i className={basket}></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-row-reverse">
          <button
            className="  mt-8 bg-beige md:px-7 md:py-2.5 px-5 py-1.5 font-medium
            rounded-md text-white w-auto"
          >
            See more <i class="fi fi-rr-angle-small-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cards;
