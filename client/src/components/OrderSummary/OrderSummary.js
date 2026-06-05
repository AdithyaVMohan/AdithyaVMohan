import { useCart } from "../Cart/CartContext";
import axios from "axios";
import { getUser } from "../../utils/auth";

function OrderSummary() {
  const { cartItems, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price || 0),
    0
  );

  const handlePlaceOrder = async () => {
    try {
      const user = getUser();
      const userId = user?.id;

      if (!userId) {
        alert("Please login to order products");
        return;
      }
      const total_amount = cartItems.reduce(
        (acc, item) => acc + parseFloat(item.price || 0),
        0
      );

      const orderData = {
        user_id: user.id,
        items: cartItems.map(({ user_id, ...rest }) => rest),
        total_amount,
      };

      const res = await axios.post(
        "http://localhost:5000/api/v1/orders",
        orderData
      );

      alert("Order Placed Successfully!");
      clearCart();

    } catch (error) {
      alert("Order failed. Please try again.");
    }
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>🧾 Order Summary</h2>

      <div style={styles.container}>
        {cartItems.map((item) => (
          <div key={item.id} style={styles.card}>
            <div style={styles.info}>
              <h4 style={styles.title}>{item.title}</h4>
              <p style={styles.price}>₹ {item.price}</p>
            </div>
          </div>
        ))}

        {cartItems.length === 0 && (
          <p style={{ textAlign: "center", color: "gray" }}>
            No items in cart
          </p>
        )}
      </div>

      <div style={styles.summaryBox}>
        <h3>Total: ₹ {totalPrice.toFixed(2)}</h3>

        <button onClick={handlePlaceOrder} style={styles.button}>
          Place Order
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    background: "#f5f6fa",
    minHeight: "100vh",
  },

  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },

  container: {
    maxWidth: "600px",
    margin: "0 auto",
  },

  card: {
    background: "white",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  info: {
    display: "flex",
    flexDirection: "column",
  },

  title: {
    margin: 0,
    fontSize: "16px",
    color: "#222",
  },

  price: {
    margin: "5px 0 0",
    color: "#27ae60",
    fontWeight: "bold",
  },

  summaryBox: {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    textAlign: "center",
  },

  button: {
    marginTop: "10px",
    padding: "12px 20px",
    background: "#27ae60",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default OrderSummary;