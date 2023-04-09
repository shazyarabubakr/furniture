import React from "react";
import Hero from "../component/Hero";
import AboutUs from "../component/AboutUs";
import HomeCategory from "../component/HomeCategory";
import HomeService from "../component/HomeService";
import HomeNewProducts from "../component/HomeNewProducts";
import Review from "../component/Review";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <HomeCategory />
      <HomeService />
      <HomeNewProducts />
      <Review />
    </>
  );
};

export default Home;
