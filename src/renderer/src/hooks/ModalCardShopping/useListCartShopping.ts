import { create } from "zustand";

type TCount = {
  count: number;
  isOpen: boolean;
  total: number;
  onOpen: () => void;
  onClose: () => void;
  setTotal: (value: number) => void;
  setCountPlus: (value: number) => void;
  setCountMinus: (value: number) => void;
};

export const useCountStore = create<TCount>((set) => ({
  count: 0,
  isOpen: false,
  total: 0,
  setTotal: (value: number) =>
    set({
      total: value,
    }),
  onOpen: () =>
    set({
      isOpen: true,
    }),
  onClose: () =>
    set({
      isOpen: false,
    }),
  setCountPlus: (value: number) =>
    set((state) => ({
      count: state.count + 1,
      total: state.total + value,
    })),
  setCountMinus: (value: number) =>
    set((state) => {
      if (state.count === 0) {
        return { isOpen: true };
      }
      return {
        count: Math.max(0, state.count - 1),
        total: state.total - value,
      };
    }),
}));
