"use client";

import { create, useStore } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { getSystemThemeMode, ThemeMode } from "@/utils";

const DEFAULT_THEME_MODE = getSystemThemeMode();

const themeModeStore = create<{
  themeMode: ThemeMode;
  setThemeMode: (themeMode: ThemeMode) => void;
  toggleThemeMode: VoidFunction;
  resetThemeMode: VoidFunction;
}>()(
  devtools(
    persist(
      (set) => ({
        themeMode: DEFAULT_THEME_MODE,
        setThemeMode: (themeMode) => set({ themeMode }),
        toggleThemeMode: () =>
          set((state) => ({ themeMode: state.themeMode === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark })),
        resetThemeMode: () => set({ themeMode: DEFAULT_THEME_MODE }),
      }),
      {
        name: "VENOMOUS_UI__THEME_MODE",
      },
    ),
  ),
);

export default function useThemeMode() {
  const store = useStore(themeModeStore);
  return {
    ...store,
    isDarkThemeMode: store.themeMode === ThemeMode.Dark,
  };
}
