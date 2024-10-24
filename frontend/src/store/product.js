import { create } from "zustand";

export const updateProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
