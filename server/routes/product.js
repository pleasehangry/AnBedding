import express from "express";
const router = express.Router();

import {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../middlewares/verifyTokens.js";
import {
  create,
  getAllProduct,
  getProduct,
  remove,
  update,
} from "../controllers/productController.js";

router.post("/", verifyTokenAndAdmin, create);
router.put("/:id", verifyTokenAndAdmin, update);
router.delete("/:id", verifyTokenAndAdmin, remove);
router.get("/", verifyTokenAndAdmin, getAllProduct);
router.get("/:id", verifyTokenAndAuthorization, getProduct);
export default router;
