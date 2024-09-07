import Product from "../models/Product.js";
import mongoose from "mongoose";

export const getCartProducts = async (req, res) => {
  try {
    console.log("User's cartItems:", req.user.cartItems);

    const cartItemIds = req.user.cartItems.map((item) => item._id);
    console.log("Extracted cartItemIds:", cartItemIds);

    const products = await Product.find({ _id: { $in: cartItemIds } });
    console.log("Found products:", products);

    if (products.length === 0) {
      console.log("No products found. Checking individual IDs...");
      for (let id of cartItemIds) {
        const product = await Product.findById(id);
        console.log(`Product for ID ${id}:`, product);
      }
    }

    const cartItems = products.map((product) => {
      const cartItem = req.user.cartItems.find((item) =>
        item._id.equals(product._id)
      );
      return {
        ...product.toJSON(),
        quantity: cartItem ? cartItem.quantity : 0,
      };
    });

    console.log("Final cartItems:", cartItems);

    res.json(cartItems);
  } catch (error) {
    console.log("Error in getCartProducts controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const addToCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const user = req.user;

    // First, verify that the product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Convert productId to ObjectId
    const productObjectId = new mongoose.Types.ObjectId(productId);

    // Check if the product is already in the cart
    const existingItem = user.cartItems.find((item) =>
      item._id.equals(productObjectId)
    );

    if (existingItem) {
      // If the product is already in the cart, increase the quantity
      existingItem.quantity += 1;
    } else {
      // If the product is not in the cart, add it with an initial quantity of 1
      const newItem = {
        _id: productObjectId,
        quantity: 1,
      };
      user.cartItems.push(newItem);
    }

    // Save the updated cart
    await user.save();

    // Respond with the updated cart
    res.json(user.cartItems);
  } catch (error) {
    console.log("Error in addToCart controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const user = req.user;
    if (!productId) {
      user.cartItems = [];
    } else {
      user.cartItems = user.cartItems.filter((item) => item.id !== productId);
    }
    await user.save();
    res.json(user.cartItems);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const updateQuantity = async (req, res) => {
  try {
    const { id: productId } = req.params;
    const { quantity } = req.body;
    const user = req.user;
    const existingItem = user.cartItems.find((item) => item.id === productId);

    if (existingItem) {
      if (quantity === 0) {
        user.cartItems = user.cartItems.filter((item) => item.id !== productId);
        await user.save();
        return res.json(user.cartItems);
      }

      existingItem.quantity = quantity;
      await user.save();
      res.json(user.cartItems);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.log("Error in updateQuantity controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
