import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart, setCartItems} = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
  (acc, item) => acc + parseFloat(item.price || 0),
  0
);

 const handleCheckout = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login to proceed to checkout");
    navigate("/login");
    return;
  }

  navigate("/order-summary"); 
};


  return (
    <div>
      <h2>Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {/* CART ITEMS */}
          {cartItems.map((item) => (
            console.log("CART ITEM:", item),
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "20px",
                border: "1px solid gray",
                margin: "20px",
                padding: "20px",
                alignItems: "center",
              }}
            >
              <img
                src={item.image}
                height={120}
                width={120}
                alt={item.title}
                style={{ objectFit: "contain" }}
              />

              <div style={{ flex: 1 }}>
                <h3>{item.title}</h3>
                <p>₹ {item.price}</p>
              </div>
             
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "10px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          {/* CHECKOUT SECTION */}
          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              borderTop: "2px solid #ddd",
              textAlign: "right",
            }}
          >
            <h3>Total: ₹ {totalPrice}</h3>

            <button
              onClick={handleCheckout}
              style={{
                marginTop: "10px",
                background: "green",
                color: "white",
                padding: "12px 20px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                borderRadius: "5px",
              }}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;