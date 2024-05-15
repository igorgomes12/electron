import { create } from "zustand";

type TModalDefault = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useModalClientRegisterAdress = create<TModalDefault>((set) => ({
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
