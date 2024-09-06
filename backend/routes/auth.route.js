import express from "express";
import {
  getProfile,
  login,
  logout,
  refreshToken,
  signup,
} from "../controllers/auth.controller.js";
import { verifyUser } from "../middleware/VerifyUser.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/logout", logout);
router.post("/login", login);
router.post("/refresh-token", refreshToken);
router.get("/profile", verifyUser, getProfile);

export default router;
