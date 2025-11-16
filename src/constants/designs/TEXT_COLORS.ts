import { THEME_MODES } from "./THEME_MODES";

export const TEXT_COLORS = {
  [THEME_MODES.LIGHT]: {
    1: "#212121", // primary
    2: "#424242", // secondary
    3: "#616161", // tertiary
    disabled: "#bdbdbd",
  },

  [THEME_MODES.DARK]: {
    1: "#e0e0e0", // primary
    2: "#a0a0a0", // secondary
    3: "#757575", // tertiary
    disabled: "#4a4a4a",
  },
} as const;

export type TTextColors = {
  1: string; // primary
  2: string; // secondary
  3: string; // tertiary
  disabled: string;
};
