import express from "express";

import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../middlewares/verifyTokens";

import {
  addToCart,
  removeCart,
  getAllCart,
  getCart,
  updateCart,
} from "../controllers/cartController";

const router = express.Router();

router.post("/", verifyToken, addToCart);
router.put("/:id", verifyTokenAndAuthorization, updateCart);
router.delete("/:id", verifyTokenAndAuthorization, removeCart);
router.get("/find/:userId", verifyTokenAndAuthorization, getCart);
router.get("/", verifyTokenAndAdmin, getAllCart);

export default router;
