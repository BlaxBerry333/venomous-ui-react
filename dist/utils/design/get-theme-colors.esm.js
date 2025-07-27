import { TextColors as r, BorderColors as s, BackgroundColors as t } from "./colors.esm.js";
const e = (o) => ({
  background: t[o],
  border: s[o],
  text: r[o]
});
export {
  e as getThemeColors
};
