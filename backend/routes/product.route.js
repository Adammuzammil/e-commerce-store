import express from "express";
import {
  createProduct,
  deleteProduct,
  featuredProducts,
  getAllProducts,
  getProductsByCategory,
  getRecommendedProducts,
  toggleFeaturedProduct,
} from "../controllers/product.controller.js";
import { verifyAdmin, verifyUser } from "../middleware/VerifyUser.js";

const router = express.Router();

router.route("/").get(verifyUser, verifyAdmin, getAllProducts);
router.route("/").post(verifyUser, verifyAdmin, createProduct);
router.route("/:id").delete(verifyUser, verifyAdmin, deleteProduct);
router.route("/featured").get(featuredProducts);
router.route("/recommendations").get(getRecommendedProducts);
router.route("/category/:category").get(getProductsByCategory);
router.route("/:id").patch(toggleFeaturedProduct);

export default router;
