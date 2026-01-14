import { useCart } from "./CartContext";

function Cart() {
  const { cartItems } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, idx) => (
          <div key={idx}>
            <div>
                <img  src={item.image} height={300} alt={item.title} style={{padding:'20px'}}/>
           </div>
            {item.title} — ₹{item.price}
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
