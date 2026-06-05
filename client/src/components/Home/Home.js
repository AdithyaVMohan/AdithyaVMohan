import banner from "../images/banner.webp";
import banner2 from "../images/banner2.webp";
import banner3 from "../images/banner3.webp";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=5")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={styles.page}>
      
      {/* CAROUSEL (NORMAL SIZE - NOT STRETCHED) */}
      <div style={styles.carouselWrapper}>
        <Carousel fade interval={2500}>
          <Carousel.Item>
            <img className="d-block w-100" src={banner} style={styles.banner} />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={banner2} style={styles.banner} />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={banner3} style={styles.banner} />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* PRODUCTS SECTION */}
      <div style={styles.section}>
        <h2 style={styles.heading}>🔥 Featured Products</h2>

        <div style={styles.grid}>
          {products.map((item) => (
            <div key={item.id} style={styles.card}>
              <img src={item.image} style={styles.image} />
              <h4 style={styles.title}>
                {item.title.slice(0, 45)}...
              </h4>
              <p style={styles.price}>₹ {item.price}</p>

              <button
                onClick={() => navigate("/ProductList")}
                style={styles.button}
              >
                View Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5f6fa",
  },

  carouselWrapper: {
    width: "100%",
    marginBottom: "20px",
  },

  banner: {
    width: "100%",
    height: "400px",   // 👈 fixed natural height
    objectFit: "cover",
    borderRadius: "10px",
  },

  section: {
    padding: "30px",
  },

  heading: {
    textAlign: "center",
    marginBottom: "25px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "white",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    textAlign: "center",
  },

  image: {
    height: "150px",
    objectFit: "contain",
    marginBottom: "10px",
  },

  title: {
    fontSize: "14px",
    minHeight: "40px",
  },

  price: {
    fontWeight: "bold",
    marginTop: "5px",
  },

  button: {
    marginTop: "10px",
    padding: "8px 12px",
    border: "none",
    background: "#667eea",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Home;