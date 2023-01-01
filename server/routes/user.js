import express from "express";

import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middlewares/verifyTokens";
import {
  updateUser,
  deleteUser,
  getAllUser,
  getStatsUser,
  getUser,
} from "../controllers/userController";

const router = express.Router();

router.put("/:id", verifyTokenAndAuthorization, updateUser);
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);
router.get("/:id", verifyTokenAndAuthorization, getUser);
router.get("/", verifyTokenAndAdmin, getAllUser);
router.get("/stats", verifyTokenAndAdmin, getStatsUser);

export default router;
