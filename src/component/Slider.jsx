import React from "react";
import furn1 from "../asset/image/furn1.jpg";
import furn2 from "../asset/image/furn2.jpg";
import furn3 from "../asset/image/furn3.jpg";

const Slider = () => {
  return (
    <section className="relative">
      <div className="carousel h-screen w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={furn1} alt="furn" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>

            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item h-screen relative w-full">
          <img src={furn2} alt="furn" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item h-screen relative w-full">
          <img src={furn3} alt="furn" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/**text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="backdrop-opacity-20  bg-black/50 py-20 px-28 sm:py-12 sm:px-12 ">
          <div className="text-center">
            <div className="w-25%">
              <h1 className="mb-5 text-xl md:text-4xl text-white font-bold ">
                New Collection of modern furniture
              </h1>
              <button
                className="bg-beige px-7 py-2.5 font-medium
                rounded-md text-white uppercase md:w-auto w-full"
              >
                explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Slider;
