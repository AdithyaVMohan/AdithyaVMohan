const db = require("../config/db");

const createOrder = (user_id, total_amount) => {
  return db.query(
    "INSERT INTO orders (user_id, total_amount) VALUES ($1, $2) RETURNING *",
    [user_id, total_amount]
  );
};

const addOrderItem = (order_id, product_id, title, image, price) => {
  return db.query(
    `INSERT INTO order_items (order_id, product_id, title, image, price)
     VALUES ($1, $2, $3, $4, $5)`,
    [order_id, product_id, title, image, price]
  );
};

module.exports = {
  createOrder,
  addOrderItem,
};