import { create } from "zustand";

type FiltersState = {
  query: string;
  setQuery: (value: string) => void;
  reset: () => void;
};

export const useBikesStore = create<FiltersState>((set) => ({
  query: "",
  setQuery: (value) => set({ query: value }),
  reset: () => set({ query: "" }),
}));
