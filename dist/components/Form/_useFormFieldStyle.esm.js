import t from "react";
import f from "../../hooks/useDesign/index.esm.js";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { ThemeColor as u } from "../../utils/design/ThemeColor.esm.js";
import { TypographySize as i } from "../../utils/design/TypographySize.esm.js";
import { Theme as y } from "../Theme/index.esm.js";
function b({
  fullWidth: n = !1,
  isDisabled: o = !1,
  isError: r = !1,
  isFocused: a = !1
}) {
  const { themeColor: d } = y.useThemeColor(), e = f(), l = t.useMemo(() => o ? e.BackgroundColors.secondary : "transparent", [o, e]), m = t.useMemo(() => r ? u.RubyCopperhead : o ? e.TextColors.disabled : e.TextColors.primary, [r, o, e]), C = t.useMemo(() => r ? u.RubyCopperhead : o ? e.TextColors.disabled : e.TextColors.quaternary, [r, o, e]), p = t.useMemo(() => r ? u.RubyCopperhead : o ? e.BorderColors.tertiary : e.BorderColors.secondary, [r, e]), s = t.useMemo(() => r ? u.RubyCopperhead : d, [r, e, d]), c = t.useMemo(
    () => ({
      display: n ? "block" : "inline-block",
      width: n ? "100%" : "auto",
      minWidth: n ? "100%" : 200,
      minHeight: 40,
      padding: "8px",
      fontSize: i.text,
      backgroundColor: l,
      color: m,
      borderRadius: "8px",
      borderWidth: 1.5,
      borderStyle: "solid",
      borderColor: p,
      ...a && {
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
    [n, a, o, l, m, p, s]
  );
  return {
    backgroundColor: l,
    textColor: m,
    helperTextColor: C,
    borderColor: p,
    outlineColor: s,
    commonStyles: c
  };
}
export {
  b as useFormFieldStyle
};
