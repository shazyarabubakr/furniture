import Footer from "./component/Footer/Footer";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Service from "./pages/Service";
import About from "./pages/About";

import { Routes, Route } from "react-router-dom";
import Cards from "./component/Cards";
import ItemDetails from "./component/ItemDetails";
import ShoppingCart from "./component/ShoppingCart";
import Checkout from "./component/Checkout";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/itemdetails/:id" element={<ItemDetails />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* <Route path="/itemdetails/:id" element={<ItemDetails />} /> */}

        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
