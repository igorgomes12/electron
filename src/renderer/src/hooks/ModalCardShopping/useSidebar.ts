import { create } from "zustand";

type SidebarState = {
  expanded: boolean;
  toggleExpanded: () => void;
};

export const useSidebarStore = create<SidebarState>((set) => ({
  expanded: true,
  toggleExpanded: () => set((state) => ({ expanded: !state.expanded })),
}));
