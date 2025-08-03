import t from "react";
import { Theme as a } from "../Theme/index.esm.js";
import { BackgroundColors as C, TextColors as c, BorderColors as h } from "../../utils/design/colors.esm.js";
import { ThemeColor as d } from "../../utils/design/ThemeColor.esm.js";
function R({
  fullWidth: n = !1,
  isDisabled: o = !1,
  isError: r = !1,
  isFocused: p = !1
}) {
  const { themeMode: e } = a.useThemeMode(), { themeColor: i } = a.useThemeColor(), u = t.useMemo(() => o ? C[e].secondary : "transparent", [o, e]), l = t.useMemo(() => r ? d.RubyCopperhead : o ? c[e].disabled : c[e].primary, [r, o, e]), m = t.useMemo(() => r ? d.RubyCopperhead : h[e].primary, [r, e]), s = t.useMemo(() => r ? d.RubyCopperhead : i, [r, e]), f = t.useMemo(
    () => ({
      display: n ? "block" : "inline-block",
      width: n ? "100%" : "auto",
      minWidth: n ? "100%" : 200,
      minHeight: 40,
      padding: "8px",
      backgroundColor: u,
      color: l,
      borderRadius: "8px",
      borderWidth: 1.5,
      borderStyle: "solid",
      borderColor: m,
      ...p && {
        outlineOffset: -1.5,
        outlineWidth: 1.5,
        outlineStyle: "solid",
        outlineColor: s
      },
      ...o && {
        cursor: "not-allowed",
        outline: "none"
      }
    }),
    [n, p, o, u, l, m, s]
  );
  return {
    backgroundColor: u,
    textColor: l,
    borderColor: m,
    outlineColor: s,
    commonStyles: f
  };
}
export {
  R as useFormFieldStyle
};
