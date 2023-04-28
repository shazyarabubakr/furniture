import Footer from "./component/Footer/Footer";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Service from "./pages/Service";
import About from "./pages/About";
import { total } from "./component/State/Slice/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Cards from "./component/Cards";
import ItemDetails from "./component/ItemDetails";
// import ShoppingCart from "./component/Checkout";
import Checkout from "./component/Checkout";
import Login from "./component/Login";
import Register from "./component/Register";
import CheckoutItems from "./component/CheckoutItems";

const App = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(total());
  }, [cartItems]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/itemdetails/:id" element={<ItemDetails />} />
        {/* <Route path="/shoppingcart" element={<ShoppingCart />} /> */}
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/checkoutitems" element={<CheckoutItems />} /> */}

        {/* <Route path="/itemdetails/:id" element={<ItemDetails />} /> */}

        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
};

export default App;
