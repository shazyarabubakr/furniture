import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center  w-full h-15 px-4 text-white bg-darkBlue fixed ">
        <div>
          <h1 className="text-5xl font-signature ml-2">Diwaxan</h1>
        </div>

        <ul className="flex">
          <li className="px-4 cursor-pointer uppercase font-medium text-white hover:scale-110 duration-300">
            <a href="#home">home</a>
          </li>
          <li className="px-4 cursor-pointer uppercase font-medium text-white hover:scale-110 duration-300">
            <a href="#product">product</a>
          </li>
          <li className="px-4 cursor-pointer uppercase font-medium text-white hover:scale-110 duration-300">
            <a href="#service">service</a>
          </li>
          <li className="px-4 cursor-pointer uppercase font-medium text-white hover:scale-110 duration-300">
            <a href="#about">about</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
