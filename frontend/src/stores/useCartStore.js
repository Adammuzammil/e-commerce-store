import { create } from "zustand";
import axios from "../lib/axios";
import toast from "react-hot-toast";

export const useCartStore = create((set, get) => ({
  cart: [],
  coupon: null,
  total: 0,
  subtotal: 0,
  isCouponApplied: false,

  // getCartItems: async () => {
  //   try {
  //     console.log("Fetching cart items...");
  //     const res = await axios.get("/cart");
  //     console.log("Response from /cart:", res);

  //     if (res.data && Array.isArray(res.data) && res.data.length > 0) {
  //       set({ cart: res.data });
  //       console.log("Cart set to:", res.data);
  //     } else {
  //       console.log("Cart data is empty or invalid:", res.data);
  //       set({ cart: [] });
  //     }

  //     get().calculateTotals();
  //   } catch (error) {
  //     console.error("Error fetching cart items:", error);
  //     if (error.response) {
  //       console.error("Response data:", error.response.data);
  //       console.error("Response status:", error.response.status);
  //       console.error("Response headers:", error.response.headers);
  //     } else if (error.request) {
  //       console.error("No response received:", error.request);
  //     } else {
  //       console.error("Error message:", error.message);
  //     }
  //     set({ cart: [] });
  //     toast.error(
  //       error.response?.data?.message ||
  //         "An error occurred while fetching cart items"
  //     );
  //   }
  // },
  addToCart: async (product) => {
    try {
      await axios.post("/cart", { productId: product._id });
      toast.success("Product added to cart");

      set((prevState) => {
        const existingItem = prevState.cart.find(
          (item) => item._id === product._id
        );
        const newCart = existingItem
          ? prevState.cart.map((item) =>
              item._id === product._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...prevState.cart, { ...product, quantity: 1 }];
        return { cart: newCart };
      });
      get().calculateTotals();
    } catch (error) {
      toast.error(error.response.data.message || "An error occurred");
    }
  },
  getCartItems: async () => {
    try {
      const res = await axios.get("/cart");
      console.log("Cart data from API:", res.data);
      set({ cart: res.data });
      get().calculateTotals();
    } catch (error) {
      console.error("Error fetching cart:", error);
      set({ cart: [] });
      toast.error(error.response?.data?.message || "An error occurred");
    }
  },
  removeFromCart: async (productId) => {
    await axios.delete(`/cart`, { data: { productId } });
    set((prevState) => ({
      cart: prevState.cart.filter((item) => item._id !== productId),
    }));
    get().calculateTotals();
  },
  updateQuantity: async (productId, quantity) => {
    if (quantity === 0) {
      get().removeFromCart(productId);
      return;
    }

    await axios.put(`/cart/${productId}`, { quantity });
    set((prevState) => ({
      cart: prevState.cart.map((item) =>
        item._id === productId ? { ...item, quantity } : item
      ),
    }));
    get().calculateTotals();
  },

  calculateTotals: () => {
    const { cart, coupon } = get();
    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    let total = subtotal;

    if (coupon) {
      const discount = subtotal * (coupon.discountPercentage / 100);
      total = subtotal - discount;
    }

    set({ subtotal, total });
  },
}));
