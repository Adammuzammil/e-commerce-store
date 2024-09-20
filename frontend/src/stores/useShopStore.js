import { create } from "zustand";

export const useShopStore = create((set, get) => ({
  search: "",
  showSearch: false,

  setSearch: (value) => set({ search: value }),

  setShowSearch: (value) => set({ showSearch: value }),
}));
