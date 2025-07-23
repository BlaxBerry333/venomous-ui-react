import { ThemeMode } from "../theme-mode";

export default function getSystemThemeMode(): ThemeMode {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)");
  return isDark.matches ? ThemeMode.Dark : ThemeMode.Light;
}
