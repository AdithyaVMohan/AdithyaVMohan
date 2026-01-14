import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"; 
import Home from "./components/Home/Home";
import ProductList from "./components/ProductList/ProductList";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import ProductDetail from "./components/ProductDetails/ProductDetail";
import Cart from "./components/Cart/Cart";
import "./App.css";
import { CartProvider } from "./components/Cart/CartContext.js";


function App() {
  return (
    <>
      <Navbar />
      <CartProvider>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/Products/:productId" element={<ProductDetail />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Cart" element={<Cart />} />
      </Routes>
      </CartProvider>
    </>
  );
}

export default App;
