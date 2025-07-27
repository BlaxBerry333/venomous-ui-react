import { default as InjectToHTML } from "./ThemeInjectToHTML";
import { default as Provider } from "./ThemeProvider";
import useThemeBreakpoint from "./useThemeBreakpoint";
import useThemeColor from "./useThemeColor";
import useThemeMode from "./useThemeMode";

export const Theme = {
  Provider,
  InjectToHTML,
  useThemeMode,
  useThemeColor,
  useThemeBreakpoint,
};
