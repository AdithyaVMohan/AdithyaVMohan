import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../Cart/CartContext.js"; 

function ProductDetail() {
    const params=useParams();
    const prodId=params.productId;
    const[product, setProduct]=useState({});
    const { addToCart } = useCart();
    const navigate = useNavigate();

    function loadProductsById(){
        fetch('https://fakestoreapi.com/products/'+prodId).then((Response)=>{
            Response.json().then((data)=>{
                setProduct(data);
            }).catch(error=>{console.log(error)});
        }).catch(error=>{
            console.log(error);
        })
    }
    useEffect(()=>{
        loadProductsById();
    },[prodId]);
    return (
  <div
    style={{
      display: "flex",
      gap: "40px",
      padding: "40px",
      alignItems: "flex-start",
    }}
  >
    {/* LEFT SIDE - IMAGE */}
    <div style={{ flex: "1" }}>
      <img
        src={product.image}
        alt={product.title}
        style={{
          marginLeft:"10px",
          width: "250px",
          objectFit: "contain",
        }}
      />
    </div>

    {/* RIGHT SIDE - DETAILS */}
    <div style={{ flex: "3" }}>
      <h2>{product.title}</h2>

      <p style={{ marginTop: "15px", color: "#555" }}>
        {product.description}
      </p>

      <h3 style={{ marginTop: "20px" }}>₹{product.price}</h3>

      <button
        style={{
          marginTop: "40px",
          backgroundColor: "#ff6f61",
          color: "black",
          padding: "12px 18px",
          fontSize: "16px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
       onClick={() => {
        addToCart(product);
        navigate("/cart");
        }}
      >
        Add To Cart
      </button>
    </div>
  </div>
);
}

export default ProductDetail;


           