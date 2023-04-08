import React from "react";
import Sidebar from "../component/Sidebar";
import Cards from "../component/Cards";

const Product = () => {
  return (
    <>
      <section className="flex flex-row">
        <Sidebar />
        <Cards />
      </section>
    </>
  );
};

export default Product;
