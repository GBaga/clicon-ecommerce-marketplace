import { create } from "zustand";

const useUserStore = create((set) => ({
  plus: 0,
  y: 10,
  setPlus: (x) => set({ plus: x, y: x }),
  setMinus: () => set((state) => ({ plus: state.plus - 1, y: state.y - 5 })),
}));

export default useUserStore;
