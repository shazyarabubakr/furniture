import React from "react";
import Slider from "../component/Slider";
import AboutUs from "../component/AboutUs";
import HomeCategory from "../component/HomeCategory";
import HomeService from "../component/HomeService";
import HomeNewProducts from "../component/HomeNewProducts";

const Home = () => {
  return (
    <>
      <Slider />
      <AboutUs />
      <HomeCategory />
      <HomeService />
      <HomeNewProducts />
    </>
  );
};

export default Home;
