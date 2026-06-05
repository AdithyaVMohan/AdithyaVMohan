const pool = require("../config/db");
const productQueries = require("../queries/products");


// GET ALL PRODUCTS
const getProducts = (req, res) => {

    pool.query(productQueries.getAllProducts, (error, results) => {

        if (error) {
            console.log(error);

            return res.status(500).json({
                error: "Database error"
            });
        }

        res.status(200).json(results.rows);
    });
};


// GET PRODUCT BY ID
const getProductById = (req, res) => {

    const id = parseInt(req.params.id);

    pool.query(
        productQueries.getProductById,
        [id],
        (error, results) => {

            if (error) {
                console.log(error);

                return res.status(500).json({
                    error: "Database error"
                });
            }

            if (results.rows.length === 0) {
                return res.status(404).json({
                    message: "Product not found"
                });
            }

            res.status(200).json(results.rows[0]);
        }
    );
};


// CREATE PRODUCT
const createProduct = (req, res) => {

    const { title, image, price, offerprice } = req.body;

    pool.query(
        productQueries.createProduct,
        [title, image, price, offerprice],
        (error, results) => {

            if (error) {
                console.log(error);

                return res.status(500).json({
                    error: "Database error"
                });
            }

            res.status(201).json({
                message: "Product created successfully",
                product: results.rows[0]
            });
        }
    );
};


// UPDATE PRODUCT
const updateProduct = (req, res) => {

    const id = parseInt(req.params.id);

    const { title, image, price, offerprice } = req.body;

    pool.query(
        productQueries.updateProduct,
        [title, image, price, offerprice, id],
        (error, results) => {

            if (error) {
                console.log(error);

                return res.status(500).json({
                    error: "Database error"
                });
            }

            if (results.rows.length === 0) {
                return res.status(404).json({
                    message: "Product not found"
                });
            }

            res.status(200).json({
                message: "Product updated successfully",
                product: results.rows[0]
            });
        }
    );
};


// DELETE PRODUCT
const deleteProduct = (req, res) => {

    const id = parseInt(req.params.id);

    pool.query(
        productQueries.deleteProduct,
        [id],
        (error, results) => {

            if (error) {
                console.log(error);

                return res.status(500).json({
                    error: "Database error"
                });
            }

            if (results.rows.length === 0) {
                return res.status(404).json({
                    message: "Product not found"
                });
            }

            res.status(200).json({
                message: "Product deleted successfully",
                product: results.rows[0]
            });
        }
    );
};


module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};