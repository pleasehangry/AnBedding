import express from "express";

import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../middlewares/verifyTokens.js";

import {
  createOrder,
  deleteOrder,
  getAllOrder,
  getMonthlyIncome,
  updateOrder,
  updateOrderToDelivered,
  updateOrderToPaid,
  getUserOrders,
  getOrderById,
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/", verifyToken, createOrder);
router.put("/:id", verifyTokenAndAdmin, updateOrder);
router.put("/:id/deliver", verifyTokenAndAdmin, updateOrderToDelivered);
router.put("/:id/pay", verifyTokenAndAdmin, updateOrderToPaid);
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);
router.get("/", verifyTokenAndAdmin, getAllOrder);
router.get("/find/:userId", verifyTokenAndAuthorization, getUserOrders);
router.get("/:id", verifyTokenAndAuthorization, getOrderById);
router.get("/income", verifyTokenAndAdmin, getMonthlyIncome);

export default router;
