import React from "react";
import kitchen from "../asset/image/kitchen.jpg";

const HomeNewProducts = () => {
  const products = [
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
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4 ">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                New Products
              </h1>
              <div className="h-1 w-20 bg-beige rounded"></div>
            </div>
          </div>
          {products.map(({ id, imgUrl, alt, name, price, basket }) => (
            <div key={id} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="w-full max-w-sm  shadow">
                <img className="" src={imgUrl} alt={alt} />

                <div className="px-5 pb-5">
                  <h5 className="text-2xl font-medium tracking-tight text-darkBlue dark:text-white">
                    {name}
                  </h5>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {price}
                    </span>
                    <a
                      href="#home"
                      className="text-white bg-beige hover:bg-lightBeige font-medium rounded-full text-sm px-4za d py-2 text-center"
                    >
                      <i className={basket}></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-row-reverse	">
          <button
            className="  mt-8 bg-beige px-7 py-2.5 font-medium
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
