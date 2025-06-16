import { create } from "zustand";
import products from "@/lib/products.json";

const useProductsStore = create((set) => ({
  product: products,
  setProduct: () =>
    set((state) => ({
      product: state.product + 1,
    })),
}));

export default useProductsStore;
