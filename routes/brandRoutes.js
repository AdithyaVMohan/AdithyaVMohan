const express = require("express");
const router = express.Router();

const brandController = require("../controllers/brandController");

// CREATE
router.post("/", brandController.createBrand);

// GET ALL
router.get("/", brandController.getBrands);

// GET ONE
router.get("/:id", brandController.getBrand);

// UPDATE
router.put("/:id", brandController.updateBrand);

// DELETE
router.delete("/:id", brandController.deleteBrand);

module.exports = router;