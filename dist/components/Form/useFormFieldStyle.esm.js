import t from "react";
import { BackgroundColors as i, TextColors as u, BorderColors as s } from "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { ThemeColor as m } from "../../utils/design/ThemeColor.esm.js";
import { TypographySize as M } from "../../utils/design/TypographySize.esm.js";
import { Theme as y } from "../Theme/index.esm.js";
function k({
  fullWidth: n = !1,
  isDisabled: o = !1,
  isError: r = !1,
  isFocused: c = !1
}) {
  const { themeMode: e } = y.useThemeMode(), { themeColor: f } = y.useThemeColor(), l = t.useMemo(() => o ? i[e].secondary : "transparent", [o, e]), p = t.useMemo(() => r ? m.RubyCopperhead : o ? u[e].disabled : u[e].primary, [r, o, e]), C = t.useMemo(() => r ? m.RubyCopperhead : o ? u[e].disabled : u[e].quaternary, [r, o, e]), a = t.useMemo(() => r ? m.RubyCopperhead : o ? s[e].secondary : s[e].primary, [r, e]), d = t.useMemo(() => r ? m.RubyCopperhead : f, [r, f]), h = t.useMemo(
    () => ({
      display: n ? "block" : "inline-block",
      width: n ? "100%" : "auto",
      minWidth: n ? "100%" : 200,
      minHeight: 40,
      padding: "8px",
      fontSize: M.text,
      backgroundColor: l,
      color: p,
      borderRadius: "8px",
      borderWidth: 1.5,
      borderStyle: "solid",
      borderColor: a,
      ...c && {
        outlineOffset: -1.5,
        outlineWidth: 1.5,
        outlineStyle: "solid",
        outlineColor: d
      },
      ...o && {
        cursor: "not-allowed",
        outline: "none"
      }
    }),
    [n, c, o, l, p, a, d]
  );
  return {
    backgroundColor: l,
    textColor: p,
    helperTextColor: C,
    borderColor: a,
    outlineColor: d,
    commonStyles: h
  };
}
export {
  k as useFormFieldStyle
};
