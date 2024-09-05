import express from "express";
import { verifyUser } from "../middleware/VerifyUser.js";
import {
  addToCart,
  getCartProducts,
  removeFromCart,
  updateQuantity,
} from "../controllers/cart.controller.js";

const router = express.Router();

router.route("/").post(verifyUser, addToCart);
router.route("/").delete(verifyUser, removeFromCart);
router.route("/:id").put(verifyUser, updateQuantity);
router.route("/").get(verifyUser, getCartProducts);

export default router;
