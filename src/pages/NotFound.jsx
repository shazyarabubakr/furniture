import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="py-16 w-full min-h-screen flex justify-center md:items-center bg-white">
        <div className="mx-auto max-w-xl lg:max-w-4xl flex flex-col lg:flex-row">
          {/* :ERROR 404 */}
          <div className="relative px-5 lg:border-r-2 border-gray-100">
            <p className="absolute -top-3 md:top-0 left-10 md:left-20 text-base md:text-4xl text-gray-900 font-bold uppercase">
              Error
            </p>
            <p className="text-[12rem]  md:text-10xl text-beige font-extrabold tracking-wider">
              404
            </p>
          </div>

          {/* :TEXT CONTAINER */}
          <div className="px-5">
            <p className="text-3xl md:text-5xl text-gray-900 font-bold tracking-wide">
              Page not found
            </p>
            <p className="mt-4 text-sm md:text-base text-gray-500 font-medium">
              The content you’re looking for doesn’t exist. Either it was
              removed, or you mistyped the link. <br />
              <br />
              Sorry about that! Please visit our hompage to get where you need
              to go.
            </p>
            <button
              type="button"
              className="mt-10 relative inline-flex items-center px-7 py-3.5 rounded border border-transparent bg-beige md:text-lg text-white font-medium hover:bg-lightBeige"
            >
              <Link to="/"> Go back to Homepage</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
