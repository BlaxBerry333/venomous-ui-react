import t from "react";
import { BackgroundColors as i, TextColors as u, BorderColors as s } from "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { ThemeColor as l } from "../../utils/design/ThemeColor.esm.js";
import { Theme as C } from "../Theme/index.esm.js";
function g({
  fullWidth: n = !1,
  isDisabled: o = !1,
  isError: r = !1,
  isFocused: c = !1
}) {
  const { themeMode: e } = C.useThemeMode(), { themeColor: f } = C.useThemeColor(), m = t.useMemo(() => o ? i[e].secondary : "transparent", [o, e]), p = t.useMemo(() => r ? l.RubyCopperhead : o ? u[e].disabled : u[e].primary, [r, o, e]), y = t.useMemo(() => r ? l.RubyCopperhead : o ? u[e].disabled : u[e].quaternary, [r, o, e]), d = t.useMemo(() => r ? l.RubyCopperhead : o ? s[e].secondary : s[e].primary, [r, e]), a = t.useMemo(() => r ? l.RubyCopperhead : f, [r, f]), h = t.useMemo(
    () => ({
      display: n ? "block" : "inline-block",
      width: n ? "100%" : "auto",
      minWidth: n ? "100%" : 200,
      minHeight: 40,
      padding: "8px",
      backgroundColor: m,
      color: p,
      borderRadius: "8px",
      borderWidth: 1.5,
      borderStyle: "solid",
      borderColor: d,
      ...c && {
        outlineOffset: -1.5,
        outlineWidth: 1.5,
        outlineStyle: "solid",
        outlineColor: a
      },
      ...o && {
        cursor: "not-allowed",
        outline: "none"
      }
    }),
    [n, c, o, m, p, d, a]
  );
  return {
    backgroundColor: m,
    textColor: p,
    helperTextColor: y,
    borderColor: d,
    outlineColor: a,
    commonStyles: h
  };
}
export {
  g as useFormFieldStyle
};
