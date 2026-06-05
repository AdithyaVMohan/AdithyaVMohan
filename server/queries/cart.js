const addToCart = `INSERT INTO cart (user_id,product_id,title,image,price) VALUES( $1,$2,$3,$4,$5)RETURNING *;`;

module.exports = {
  addToCart
};