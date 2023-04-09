import React from "react";
import Sidebar from "../component/Sidebar";
import Cards from "../component/Cards";

const Product = () => {
  return (
    <>
      <section className="grid grid-cols-6">
        <div className=" col-span-6 lg:col-span-1 ">
          <Sidebar />
        </div>
        <div className="col-span-6 lg:col-span-5">
          <Cards />
        </div>
      </section>
    </>
  );
};

export default Product;
