const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryContoller");

router.post("/", categoryController.createCategory);
router.get("/", categoryController.getCategory);
router.get("/:id", categoryController.getCategory);
router.put("/:id", categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;