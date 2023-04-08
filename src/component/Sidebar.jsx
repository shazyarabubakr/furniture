import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const sideItems = [
    {
      id: 1,
      name: "All Products",
      link: "#allproducts",
    },
    {
      id: 2,
      name: "New Products",
      link: "#newproducts",
    },
    {
      id: 3,
      name: "Living room",
      link: "#livingroom",
    },
    {
      id: 4,
      name: "bedroom",
      link: "#bedroom",
    },
    {
      id: 5,
      name: "Kitchen",
      link: "#kitchen",
    },
    {
      id: 6,
      name: "Bathroom",
      link: "#bathroom",
    },
    {
      id: 7,
      name: "Office",
      link: "#office",
    },
    {
      id: 8,
      name: "Outdoor",
      link: "#outdoor",
    },
  ];
  return (
    <>
      <aside className="lg:w-1/3 px-2 py-4">
        <nav className=" text-sm text-darkBlue font-medium">
          <div className="flex flex-col space-y-8 pt-2 lg:text-2xl sm:text-lg">
            {sideItems.map(({ id, name, link }) => (
              <Link id={id} rel="noopener noreferrer" to={link} className="">
                {name}
              </Link>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
