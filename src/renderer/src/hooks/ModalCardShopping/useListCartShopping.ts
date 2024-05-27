import { create } from "zustand";

type TItemState = {
  count: number;
  total: number;
};

type TCountStore = {
  items: { [key: string]: TItemState };
  isOpen: boolean;
  total: number;
  selectedCount: number;
  deleteProductId: string | null;
  onOpen: (id: string) => void;
  onClose: () => void;
  setCountPlus: (id: string, value: number) => void;
  setCountMinus: (id: string, value: number) => void;
  deleteItem: (id: string) => void;
  clearCart: () => void;
  addItem: (id: string, value: number) => void;
};

export const useCountStore = create<TCountStore>((set) => ({
  items: {},
  isOpen: false,
  total: 0,
  selectedCount: 0,
  deleteProductId: null,
  onOpen: (id: string) =>
    set({
      isOpen: true,
      deleteProductId: id,
    }),
  onClose: () =>
    set({
      isOpen: false,
      deleteProductId: null,
    }),
  setCountPlus: (id: string, value: number) =>
    set((state) => {
      if (state.selectedCount >= 3) {
        return state; // Não permite adicionar mais itens se o limite for atingido
      }
      const newItemState = {
        count: (state.items[id]?.count || 0) + 1,
        total: (state.items[id]?.total || 0) + value,
      };
      const newItems = {
        ...state.items,
        [id]: newItemState,
      };
      const newTotal = Object.values(newItems).reduce(
        (acc, item) => acc + item.total,
        0
      );
      return {
        items: newItems,
        total: newTotal,
        selectedCount: state.selectedCount + 1,
      };
    }),
  setCountMinus: (id: string, value: number) =>
    set((state) => {
      const currentCount = state.items[id]?.count || 0;
      if (currentCount === 0) {
        return state;
      }
      const newItemState = {
        count: Math.max(0, currentCount - 1),
        total: (state.items[id]?.total || 0) - value,
      };
      const newItems = {
        ...state.items,
        [id]: newItemState,
      };
      const newTotal = Object.values(newItems).reduce(
        (acc, item) => acc + item.total,
        0
      );
      return {
        items: newItems,
        total: newTotal,
        selectedCount: state.selectedCount - 1,
      };
    }),
  deleteItem: (id: string) =>
    set((state) => {
      const { [id]: _, ...newItems } = state.items;
      const newTotal = Object.values(newItems).reduce(
        (acc, item) => acc + item.total,
        0
      );
      const newSelectedCount = Object.values(newItems).reduce(
        (acc, item) => acc + item.count,
        0
      );
      return {
        items: newItems,
        total: newTotal,
        selectedCount: newSelectedCount,
      };
    }),
  clearCart: () =>
    set({
      items: {},
      total: 0,
      selectedCount: 0,
    }),
  addItem: (id: string, value: number) =>
    set((state) => {
      const newItemState = {
        count: (state.items[id]?.count || 0) + 1,
        total: (state.items[id]?.total || 0) + value,
      };
      const newItems = {
        ...state.items,
        [id]: newItemState,
      };
      const newTotal = Object.values(newItems).reduce(
        (acc, item) => acc + item.total,
        0
      );
      return {
        items: newItems,
        total: newTotal,
        selectedCount: state.selectedCount + 1,
      };
    }),
}));
