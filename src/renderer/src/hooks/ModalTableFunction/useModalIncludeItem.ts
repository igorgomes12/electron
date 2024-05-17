import { create } from "zustand";

type ModalState = {
  openModals: { [key: string]: boolean };
  onOpen: (key: string) => void;
  onClose: (key: string) => void;
  isOpen: (key: string) => boolean;
};

export const useModalIncludeItem = create<ModalState>((set, get) => ({
  openModals: {},
  onOpen: (key: string) =>
    set((state) => ({ openModals: { ...state.openModals, [key]: true } })),
  onClose: (key: string) =>
    set((state) => ({ openModals: { ...state.openModals, [key]: false } })),
  isOpen: (key: string) => !!get().openModals[key],
}));
