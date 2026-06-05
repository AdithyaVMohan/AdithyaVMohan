
const createOrder = `
INSERT INTO orders (user_id, total_amount)
VALUES ($1, $2)
RETURNING *;
`;

const addOrderItem = `
INSERT INTO order_items (order_id, product_id, title, image, price)
VALUES ($1, $2, $3, $4, $5)
RETURNING *;
`;

module.exports = {
  createOrder,
  addOrderItem
};