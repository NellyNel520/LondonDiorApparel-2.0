const { Order, Product, User } = require('../models')

// CREATE
const createOrder = async (req, res) => {
  try {
		const order = await new Order(req.body);
		await order.save();
		return res.status(201).json({
			order,
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
}

// UPDATE

const updateOrder = async (req, res) => {
  try {
      const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true})
      res.status(200).json(order)
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

// Get User order (Get order by User Id)
const getUserOrder = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
}

// get by order Id

const getOrderById = async (req, res) => {
  try {
      const { id } = req.params;
      const order = await Order.findById(id)
      if (order) {
          return res.status(200).json({ order });
      }
      return res.status(404).send('Order with the specified ID does not exists');
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

// Get all order
const getAllOrders = async (req, res) => {
  try {
		const orders = await Order.find();
		return res.status(200).json({ orders });
	} catch (error) {
		return res.status(500).send(error.message);
	}
}

// Get Monthly income (admin purposes icebox feature)
const getMonthlyIncome = async (req, res) => {
  const productId = req.query.pid;
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
          ...(productId && {
            products: { $elemMatch: { productId } },
          }),
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete order (needs protected route maybe admin only)
const deleteOrder = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Order.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Order has been canceled");
      }
      throw new Error("Order not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

module.exports ={
  createOrder,
  updateOrder,
  getAllOrders,
  getUserOrder,
  getOrderById,
  deleteOrder
  

}