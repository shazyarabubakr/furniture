import React from "react";
import furn1 from "../asset/image/furn2.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="relative flex flex-col-reverse py-20 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 max-w-full pr-0 px-0 md:mx-0 mx-0 w-full absolute md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 h-full hidden text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-3/4 shadow-lg lg:rounded-none lg:shadow-none md:h-3/4 lg:h-full"
            src={furn1}
            alt="furniture"
          />
        </div>
        <div className="relative flex flex-col items-start lg:h-screen w-full max-w-xl px-4 mx-auto md:px-8 md:max-w-screen-xl ">
          <div className=" mb-16 lg:my-40 lg:max-w-lg backdrop-blur-xs ">
            <h2 className="mb-5 font-sans md:text-3xl font-bold tracking-tight sm:text-2xl sm:leading-none">
              <span className="font-signature font-bold text-beige md:text-8xl text-4xl">
                New
              </span>{" "}
              Collection
              <br className="md:block" />
              of modern <span className="inline-block ">furniture</span>
            </h2>
            <p className="pr-3 mb-5  md:text-gray-700 text-gray-500 hidden md:text-lg">
              Create your own home comfort with us
            </p>
            <div className="flex items-center">
              <Link
                to="/product"
                className=" items-center  md:px-7 md:py-2.5 px-5 py-1.5  text-sm font-medium md:text-lg tracking-wide text-white transition duration-200 rounded shadow-md bg-beige hover:bg-lightBeige focus:shadow-outline focus:outline-none"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
