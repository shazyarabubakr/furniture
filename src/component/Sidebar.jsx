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
      {/* grid grid-rows-1 row-span-1 */}
      <aside className="px-2 py-4">
        <nav className="text-sm text-darkBlue font-medium">
          <div className="grid grid-cols-1 col-span-6 space-y-8 p-2 lg:text-xl text-sm">
            <div className="">
              {sideItems.map(({ id, name, link }) => (
                <div className="w-full mb-2 lg:mb-0">
                  <Link
                    id={id}
                    rel="noopener noreferrer"
                    to={link}
                    className="hover:border-b-3 hover:border-beige hover:rounded-sm "
                  >
                    {name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
