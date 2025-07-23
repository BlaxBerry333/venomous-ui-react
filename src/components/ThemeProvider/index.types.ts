import type { ThemeColor, ThemeMode } from "@/utils";

export interface ThemeContextType {
  themeMode: ThemeMode;
  isDarkThemeMode: boolean;
  setThemeMode: (themeMode: ThemeMode) => void;
  toggleThemeMode: () => void;
  themeColor: ThemeColor;
  setThemeColor: (themeColor: ThemeColor) => void;
}

export interface ThemeProviderProps extends React.PropsWithChildren {
  defaultThemeMode?: ThemeMode;
  defaultThemeColor?: ThemeColor;
}
