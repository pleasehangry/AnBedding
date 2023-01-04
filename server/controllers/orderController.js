import OrderModal from "../models/order";

export const createOrder = async (req, res) => {
  const neworder = new OrderModal(req.body);

  try {
    const savedOrder = await neworder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await OrderModal.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateOrderToPaid = async (req, res) => {
  try {
    const order = await OrderModal.findById(req.params.id);

    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.payer.email_address,
      };

      const updatedOrder = await order.save();

      res.status(201).json(updatedOrder);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};
export const updateOrderToDelivered = async (req, res) => {
  try {
    const order = await OrderModal.findById(req.params.id);

    if (order) {
      order.isDelivered = true;
      order.deliveredAt = Date.now();
      const updatedOrder = await order.save();

      res.status(201).json(updatedOrder);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

export const deleteOrder = async (req, res) => {
  try {
    await OrderModal.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const UserOrder = await OrderModal.find({ user: req.user._id });
    res.status(200).json(UserOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOrderById = async (req, res) => {
  try {
    const Order = await OrderModal.findById(req.params.id).populate(
      "user",
      "name email"
    );
    res.status(200).json(Order);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllOrder = async (req, res) => {
  try {
    const orders = await OrderModal.find();
    res.status(200).json(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getMonthlyIncome = async (req, res) => {
  const productId = req.query.pid;
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await OrderModal.aggregate([
      {
        $match: {
          createAt: { $gte: previousMonth },
          ...(productId && {
            products: { $elemMatch: { productId } },
          }),
        },
      },
      {
        $project: {
          month: { $month: "$createAt" },
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
  } catch (error) {
    res.status(500).json(error);
  }
};
