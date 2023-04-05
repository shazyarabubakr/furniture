import React from "react";
import furn1 from "../asset/image/furn2.jpg";

const Hero = () => {
  return (
    <>
      <div className="relative flex flex-col-reverse py-20 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 max-w-full pr-0 px-4 mx-0 w-7/12 absolute md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0  h-full block text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-60 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={furn1}
            alt="furniture"
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg ">
            <h2 className="mb-5 font-sans md:text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none">
              <span className="font-signature text-beige md:text-8xl sm:text-4xl">
                New
              </span>{" "}
              Collection
              <br className=" md:block" />
              of modern <span className="inline-block ">furniture</span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Create your own home comfort with us
            </p>
            <div className="flex items-center">
              <a
                href="/"
                className="inline-flex items-center justify-center md:h-12 md:px-6 h-6 px-6 md:mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-beige hover:bg-lightBeige focus:shadow-outline focus:outline-none"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
