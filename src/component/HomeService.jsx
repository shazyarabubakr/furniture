import React from "react";

const HomeService = () => {
  return (
    <>
      <section className="text-gray-600">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-wrap justify-center ">
            {/**first service */}

            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-darkBlue text-center">
              <i className="fi fi-rr-box-open  text-3xl"></i>
              <h2 className="text-lg sm:text-xl text-gray-900 uppercase font-medium mb-2">
                shipping up to 24h
              </h2>
              <p className="leading-relaxed text-base mb-4">
                We have most of the products in our own warehouse, which is why
                we send shipments quickly.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-darkBlue text-center">
              <i className="fi fi-rr-truck-side  text-3xl"></i>
              <h2 className="text-lg sm:text-xl text-gray-900 uppercase font-medium mb-2">
                convenient and simple delivery
              </h2>
              <p className="leading-relaxed text-base mb-4">
                All our orders are properly secured before being released for
                delivery.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2  border-darkBlue  text-center">
              <i className="fi fi-rs-bed-alt  text-3xl"></i>
              <h2 className="text-lg sm:text-xl text-gray-900 uppercase font-medium mb-2">
                customization
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Allowing our customers to customize the furniture they are
                purchasing, such as choosing the fabric or finish.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 lg:border-r-2 border-darkBlue  text-center">
              <i className="fi fi-rs-undo text-3xl"></i>
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium uppercase mb-2">
                30 days free return
              </h2>
              <p className="leading-relaxed text-base mb-4">
                We care about our customers, that’s why we offer you 30 days to
                return the product.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeService;
