import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      {/* BRAND NAME */}
      <nav className="flex justify-between items-center w-full h-14 px-4 text-white bg-darkBlue fixed ">
        <div>
          <h1 className="text-5xl font-signature ml-2 flex sm:justify-start text-white cursor-pointer">
            Diwaxan
          </h1>
        </div>

        {/* NAV ITEMS */}
        <ul className="hidden md:flex justify-center">
          <li className="px-4 cursor-pointer uppercase font-normal text-white  hover:border-b-[2px] border-b-beige hover:scale-105 duration-100">
            <Link to="/">home</Link>
          </li>
          <li className="px-4 cursor-pointer uppercase font-normal text-white hover:border-b-[2px] border-b-beige hover:scale-105 duration-100">
            <Link to="/product">product</Link>
          </li>
          <li className="px-4 cursor-pointer uppercase font-normal text-white hover:border-b-[2px] border-b-beige hover:scale-105 duration-100">
            <Link to="/service">service</Link>
          </li>
          <li className="px-4 cursor-pointer uppercase font-normal text-white hover:border-b-[2px] border-b-beige hover:scale-105 duration-100">
            <Link to="/about">about</Link>
          </li>
        </ul>

        {/* ICONS */}

        <ul className="flex ">
          <li className="px-2 cursor-pointer">
            <i class="fi fi-rr-shopping-cart" size={30}></i>
          </li>
          <li className="px-2 cursor-pointer">
            <i class="fi fi-rr-user" size={30}></i>
          </li>
        </ul>

        {/*RESPONSIVE NAVBAR*/}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer text-white pr-4 z-10 md:hidden "
        >
          {nav ? (
            <i class="fi fi-br-cross" size={30}></i>
          ) : (
            <i class="fi fi-rr-menu-burger" size={30}></i>
          )}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-darkBlue text-white">
            <li className="px-4 cursor-pointer uppercase font-normal text-4xl py-6 text-white">
              <Link to="/" smooth duration={500} onClick={() => setNav(!nav)}>
                home
              </Link>
            </li>
            <li className="px-4 cursor-pointer uppercase font-normal text-4xl py-6 text-white">
              <Link
                to="/product"
                smooth
                duration={500}
                onClick={() => setNav(!nav)}
              >
                product
              </Link>
            </li>
            <li className="px-4 cursor-pointer uppercase font-normal text-4xl py-6 text-white">
              <Link
                to="/service"
                smooth
                duration={500}
                onClick={() => setNav(!nav)}
              >
                service
              </Link>
            </li>
            <li className="px-4 cursor-pointer uppercase font-normal text-4xl py-6 text-white">
              <Link
                to="/about"
                smooth
                duration={500}
                onClick={() => setNav(!nav)}
              >
                about
              </Link>
            </li>
            {/* {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => setNav(!nav)}
                >
                  {link}
                </Link>
              </li>
            ))} */}
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
