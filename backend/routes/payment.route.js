import express from "express";
import { verifyUser } from "../middleware/VerifyUser.js";
import {
  checkoutSuccess,
  createCheckoutSession,
} from "../controllers/payment.controller.js";

const router = express.Router();

router
  .route("/create-checkout-session")
  .post(verifyUser, createCheckoutSession);
router.route("/checkout-success").post(verifyUser, checkoutSuccess);

export default router;
