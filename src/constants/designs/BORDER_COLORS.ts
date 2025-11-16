import { THEME_MODES } from "./THEME_MODES";

export const BORDER_COLORS = {
  [THEME_MODES.DARK]: {
    1: "#3A3A3A",
    2: "#555555",
  },
  [THEME_MODES.LIGHT]: {
    1: "#c8c8c8",
    2: "#a0a0a0",
  },
} as const;

export type TBorderColors = {
  1: string; // primary
  2: string; // secondary
};
