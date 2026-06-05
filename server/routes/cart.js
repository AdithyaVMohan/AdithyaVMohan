const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cart");
const { verifyTokenHandler } = require("../middleware/jwtHandler");

router.post("/", verifyTokenHandler, cartController.addToCart);
router.get("/", verifyTokenHandler, cartController.getCart);
router.delete("/:id", verifyTokenHandler, cartController.deleteItem);

module.exports = router;