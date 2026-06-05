import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"; 
import Home from "./components/Home/Home";
import ProductList from "./components/ProductList/ProductList";
import ProductDetail from "./components/ProductDetails/ProductDetail";
import Cart from "./components/Cart/Cart";
import "./App.css";
import { CartProvider } from "./components/Cart/CartContext.js";
import Login from "./components/Login/Login.js";
import Signup from "./components/signup/signup.js";
import OrderSummary from "./components/OrderSummary/OrderSummary";


function App() {
  return (
    <>
      <Navbar />
      <CartProvider>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/Products/:productId" element={<ProductDetail />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/Cart" element={<Cart />} />
      </Routes>
      </CartProvider>
    </>
  );
}

export default App;
