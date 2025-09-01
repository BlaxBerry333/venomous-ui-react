import c from "react";
import x from "../../hooks/useDesign/index.esm.js";
import { SEMANTIC_COLORS as p } from "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import "../../utils/design/ThemeBreakpoint.esm.js";
import "../../utils/design/TypographySize.esm.js";
import { getLighterHex as m, getOpacityHex as l } from "../../utils/tools/get-colors.esm.js";
import { Theme as y } from "../Theme/index.esm.js";
import { ButtonVariantMap as e } from "./index.types.esm.js";
function C({
  isLoading: n,
  isDisabled: u,
  variant: r,
  semanticColor: o
}) {
  const { themeColor: s } = y.useThemeColor(), t = x(), f = c.useMemo(() => {
    if (n || u)
      return r === e.ghost || r === e.transparent ? "transparent" : t.BackgroundColors.secondary;
    switch (r) {
      case e.contained:
        return o ? p[o] : s;
      case e.outlined:
        return t.BackgroundColors.secondary;
      case e.ghost:
      case e.transparent:
      default:
        return "transparent";
    }
  }, [r, n, u, o, t, s]), d = c.useMemo(() => {
    if (n || u)
      return r === e.transparent ? "transparent" : t.BorderColors.tertiary;
    switch (r) {
      case e.contained:
        return o ? m(p[o], 0.25) : l(s, 0.5);
      case e.outlined:
        return o ? p[o] : s;
      case e.ghost:
        return t.BorderColors.secondary;
      case e.transparent:
      default:
        return "transparent";
    }
  }, [r, n, u, o, t, s]), a = c.useMemo(() => {
    if (n || u)
      return t.TextColors.disabled;
    switch (r) {
      case e.contained:
        return "#ffffff";
      case e.outlined:
        return o ? p[o] : s;
      case e.ghost:
      default:
        return t.TextColors.primary;
    }
  }, [r, n, u, o, t, s]), h = c.useMemo(() => {
    switch (r) {
      case e.ghost:
      case e.transparent:
        return "none";
      case e.contained:
      case e.outlined:
      default:
        return t.Shadows.secondary;
    }
  }, [r, t]);
  return {
    buttonStyles: c.useMemo(
      () => ({
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        width: "auto",
        minWidth: "40px",
        height: "40px",
        padding: "0px 16px",
        textTransform: "capitalize",
        fontSize: t.TypographySize.text,
        fontWeight: "bold",
        cursor: n ? "wait" : u ? "not-allowed" : "pointer",
        borderRadius: "8px",
        borderWidth: 2,
        borderColor: d,
        boxShadow: h,
        backgroundColor: f,
        color: a
      }),
      [n, u, r, o, t, f, d, h, a]
    )
  };
}
export {
  C as useButtonStyle
};
