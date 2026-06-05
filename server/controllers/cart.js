const pool = require("../config/db");

// ADD TO CART
const addToCart = async (req, res) => {
  try {
    console.log("REQ HEADERS:", req.headers.authorization);
    console.log("REQ USER ID:", req.userId);
    const user_id = req.userId;
    const { product_id, title, image, price, quantity } = req.body;

    // check if product already exists in cart
    const check = await pool.query(
      "SELECT * FROM cart WHERE user_id=$1 AND product_id=$2",
      [user_id, product_id]
    );

    if (check.rows.length > 0) {
      // update quantity only
      const updated = await pool.query(
        `UPDATE cart 
         SET quantity = quantity + $1 
         WHERE user_id=$2 AND product_id=$3 
         RETURNING *`,
        [quantity || 1, user_id, product_id]
      );

      return res.json(updated.rows[0]);
    }

    // insert new cart item
    const result = await pool.query(
      `INSERT INTO cart 
      (user_id, product_id, title, image, price, quantity)
      VALUES ($1,$2,$3,$4,$5,$6)
      RETURNING *`,
      [
        user_id,
        product_id,
        title,
        image,
        price,
        quantity || 1
      ]
    );

    res.json(result.rows[0]);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const getCart = async (req, res) => {
  try {
    const user_id = req.userId;

    const result = await pool.query(
      "SELECT * FROM cart WHERE user_id=$1",
      [user_id]
    );

    res.json(result.rows);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const deleteItem = async (req, res) => {
  try {
    const user_id = req.userId;
    const cart_id = req.params.id;

    await pool.query(
      "DELETE FROM cart WHERE id=$1 AND user_id=$2",
      [cart_id, user_id]
    );

    res.json({ message: "Item removed" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addToCart,
  getCart,
  deleteItem
};