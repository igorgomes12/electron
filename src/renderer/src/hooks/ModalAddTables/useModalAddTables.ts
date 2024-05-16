import { create } from "zustand";
import { TModalDefault } from "../types";

export const useModalAddTables = create<TModalDefault>((set) => ({
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
