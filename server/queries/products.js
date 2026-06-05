const getAllProducts="select id, title, image, price, offerprice from products";
const getProductById="select id,title,price,offerprice from products where id=$1";
const createProduct="INSERT INTO products(title,image,price,offerprice) VALUES ($1, $2, $3, $4)";
const updateProduct="UPDATE products SET title = $1, image = $2, price = $3,offerprice = $4 WHERE id = $5 RETURNING *";
const deleteProduct="DELETE FROM products WHERE id=$1 RETURNING *";

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};