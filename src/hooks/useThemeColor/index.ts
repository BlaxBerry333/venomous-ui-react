"use client";

import { create, useStore } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { ThemeColor } from "@/utils";

const DEFAULT_THEME_COLOR = ThemeColor.JadeAnaconda;

const _themeColorStore = create<{
  themeColor: ThemeColor;
  setThemeColor: (themeColor: ThemeColor) => void;
  resetThemeColor: VoidFunction;
}>()(
  devtools(
    persist(
      (set) => ({
        themeColor: DEFAULT_THEME_COLOR,
        setThemeColor: (themeColor) => set({ themeColor }),
        resetThemeColor: () => set({ themeColor: DEFAULT_THEME_COLOR }),
      }),
      {
        name: "VENOMOUS_UI__THEME_COLOR",
      },
    ),
  ),
);

export default function useThemeColor() {
  const store = useStore(_themeColorStore);
  return {
    ...store,
  };
}
