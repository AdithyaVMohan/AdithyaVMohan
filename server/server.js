const express = require("express");
const app = express();

app.use(express.json());

const cors = require("cors");

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

// Routes
const users = require("./routes/users");
const productRoutes = require("./routes/products");
const cart=require("./routes/cart");
const orderRoutes = require("./routes/orderRoutes");

app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/users", users);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/cart", cart);

// Error handler (must be last)
const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});