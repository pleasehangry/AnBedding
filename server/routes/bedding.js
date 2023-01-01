import express from "express";
const router = express.Router();

import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../middlewares/verifyTokens";
import {
  create,
  getAllProduct,
  getProduct,
  remove,
  update,
} from "../controllers/beddingController";

router.post("/", verifyTokenAndAdmin, create);
router.put("/:id", verifyTokenAndAdmin, update);
router.delete("/:id", verifyTokenAndAdmin, remove);
router.get("/", getAllProduct);
router.get("/:id", getProduct);
export default router;
