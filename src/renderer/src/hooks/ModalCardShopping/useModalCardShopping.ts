import { create } from "zustand";

type TModalCardShopping = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useModalCardShopping = create<TModalCardShopping>((set) => ({
  isOpen: false,
  onOpen: () => {
    set({
      isOpen: true,
    });
  },
  onClose: () => {
    set({
      isOpen: false,
    });
  },
}));
