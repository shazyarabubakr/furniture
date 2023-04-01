import React from "react";

import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-lightBlue py-7">
          <h1
            className="lg:text-2xl text-xl md:mb-0 mb-6 uppercase lg:leading-normal 
         md:w-2/4"
          >
            <span className="text-beige uppercase font-semibold">
              Subscribe
            </span>{" "}
            for news and promotions!
          </h1>
          <div>
            <input
              type="text"
              placeholder="Enter Your E-mail"
              className="text-gray-600
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 text-center rounded px-2 focus:outline-none"
            />
            <button
              className="bg-beige px-5 py-2.5 font-medium
           rounded-md text-white  uppercase md:w-auto w-full"
            >
              subscribe
            </button>
          </div>
        </div>
        <ItemsContainer />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
        >
          <span>© 2023 shaza. All rights reserved.</span>
          <span>Terms · Privacy Policy</span>

          <div className="text-teal-500">
            <span
              className="p-2 cursor-pointer inline-flex items-center
              rounded-full mx-1.5 text-xl  hover:text-gray-100 hover:bg-teal-500
              duration-300 "
            >
              <i class="fi fi-brands-facebook"></i>
              <i class="fi fi-brands-linkedin"></i>
              <i class="fi fi-brands-instagram"></i>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
