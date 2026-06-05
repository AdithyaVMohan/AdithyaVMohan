import ProductCard from "../ProductCard/ProductCard.js";
import styles from "../ProductCard/productCard.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (error) {
        console.log("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div style={styles.loadingBox}>
        <div style={styles.spinner}></div>
        <h3>Loading amazing products...</h3>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      
      {/* HEADER */}
      <div style={styles.header}>
        <h2>🛍️ All Products</h2>
        <p>Discover the best deals & trending items</p>
      </div>

      {/* GRID */}
      <div className={styles.productDiv}>
        {products.length > 0 ? (
          products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))
        ) : (
          <p style={styles.empty}>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;