const pool = require("../config/db");
const cartQueries =require("../queries/cart");

const addToCart = async (userId, product) => {
  const result = await pool.query(
    `INSERT INTO cart (user_id, product_id, title, image, price)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [userId, product.id, product.title, product.image, product.price]
  );

  return result.rows[0];
};

// Get cart
const getCartByUser = async (userId) => {
  const result = await pool.query(
    `SELECT * FROM cart WHERE user_id = $1`,
    [userId]
  );

  return result.rows;
};

// Delete item
const deleteCartItem = async (id, userId) => {
  const result = await pool.query(
    `DELETE FROM cart WHERE id = $1 AND user_id = $2 RETURNING *`,
    [id, userId]
  );

  return result.rows[0];
};

module.exports = {
  addToCart,
  getCartByUser,
  deleteCartItem
};