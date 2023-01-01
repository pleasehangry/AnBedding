import express from "express";

import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../middlewares/verifyTokens";

import {
  createOrder,
  deleteOrder,
  getAllOrder,
  getMonthlyIncome,
  getUserOrder,
  updateOrder,
} from "../controllers/orderController";

const router = express.Router();

router.post("/", verifyToken, createOrder);
router.put("/:id", verifyTokenAndAdmin, updateOrder);
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);
router.get("/", verifyTokenAndAdmin, getAllOrder);
router.get("/find/:userId", verifyTokenAndAuthorization, getUserOrder);
router.get("/income", verifyTokenAndAdmin, getMonthlyIncome);

export default router;
