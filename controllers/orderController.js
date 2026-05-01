const Order = require("../models/orderModel");
const Product = require("../models/productsModel");

// CREATE ORDER
exports.createOrder = async (req, res) => {
  try {
    console.log("BODY RECEIVED:", req.body);

    const { customer, products } = req.body;

    if (!Array.isArray(products)) {
      return res.status(400).json({
        error: "products must be an array"
      });
    }

    let totalAmount = 0;

    for (let item of products) {
      const productData = await Product.findById(item.product);

      if (!productData) {
        return res.status(404).json({ error: "Product not found" });
      }

      totalAmount += productData.price * item.quantity;
    }

    const order = await Order.create({
      customer,
      products,
      totalAmount,
    });

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL ORDERS
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("customer")
      .populate("products.product");

    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET SINGLE ORDER
exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("customer")
      .populate("products.product");

    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE STATUS
exports.updateOrderStatus = async (req, res) => {
  try {
    const updated = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE ORDER
exports.deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 