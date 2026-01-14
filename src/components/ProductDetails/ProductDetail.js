import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../Cart/CartContext.js"; 

function ProductDetail() {
    const params=useParams();
    const prodId=params.productId;
    const[product, setProduct]=useState({});
    const { addToCart } = useCart();

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
        <div>
           <div>
                <img  src={product.image} height={300} alt={product.title} style={{padding:'20px'}}/>
           </div>
            
            <h3>{[product.title]}</h3>
            <p>{product.description}</p>
            <h5>₹{product.price}</h5>
            <button style={{ backgroundColor: "#ff6f61",color: "black",
                padding: "12px 18px",
                fontSize: "16px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold"
            }} onClick={() => addToCart(product)}>Add To Cart</button>
        </div>

     );
}

export default ProductDetail;