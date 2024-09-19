import express from "express";
import { verifyUser } from "../middleware/VerifyUser.js";
import { getCoupon, validateCoupon } from "../controllers/coupon.controller.js";

const router = express.Router();

router.route("/").get(verifyUser, getCoupon);
router.route("/validate").post(verifyUser, validateCoupon);
export default router;
