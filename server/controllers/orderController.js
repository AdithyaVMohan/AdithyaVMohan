const orderRepo = require("../Repositories/orderRepo");

const createOrder = async (req, res) => {
  try {
    console.log("REQUEST BODY:", req.body);

    const { user_id, items, total_amount } = req.body;
    console.log("USER_ID:", user_id);
    console.log("ITEMS LENGTH:", items?.length);

    console.log("RAW BODY:", req.body);
    console.log("USER ID:", req.body.user_id);
    console.log("ITEMS:", req.body.items);
    console.log("IS ARRAY:", Array.isArray(req.body.items));

    if (!user_id || !items || !items.length) {
      return res.status(400).json({
        message: "Invalid order data",
      });
    }

    // 1. create order
    const order = await orderRepo.createOrder(user_id, total_amount);

    // 2. insert items
    for (let item of items) {
      await orderRepo.addOrderItem(
        order.rows[0].id,
        item.id,
        item.title,
        item.image,
        item.price
      );
    }

    res.status(201).json({
      message: "Order created successfully",
      order: order.rows[0],
    });

  } catch (error) {
    console.log("ORDER ERROR:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  createOrder,
};