import c from "react";
import { Theme as m } from "../Theme/index.esm.js";
import { ButtonVariantMap as e } from "./index.types.esm.js";
import { BackgroundColors as x, SemanticColors as p, BorderColors as l, TextColors as y } from "../../utils/design/colors.esm.js";
import { Shadows as w } from "../../utils/design/Shadow.esm.js";
import { TypographySize as g } from "../../utils/design/TypographySize.esm.js";
import { getLighterHex as S, getOpacityHex as M } from "../../utils/tools/get-colors.esm.js";
function R({
  isLoading: n,
  isDisabled: u,
  variant: t,
  semanticColor: r
}) {
  const { themeColor: s } = m.useThemeColor(), { themeMode: o } = m.useThemeMode(), f = c.useMemo(() => {
    if (n || u)
      return t === e.ghost || t === e.transparent ? "transparent" : x[o].secondary;
    switch (t) {
      case e.contained:
        return r ? p[r] : s;
      case e.outlined:
        return x[o].secondary;
      case e.ghost:
      case e.transparent:
      default:
        return "transparent";
    }
  }, [t, s, o, n, u, r]), a = c.useMemo(() => {
    if (n || u)
      return t === e.transparent ? "transparent" : l[o].tertiary;
    switch (t) {
      case e.contained:
        return r ? S(p[r], 0.25) : M(s, 0.5);
      case e.outlined:
        return r ? p[r] : s;
      case e.ghost:
        return l[o].secondary;
      case e.transparent:
      default:
        return "transparent";
    }
  }, [t, s, o, n, u, r]), d = c.useMemo(() => {
    if (n || u)
      return y[o].disabled;
    switch (t) {
      case e.contained:
        return "#ffffff";
      case e.outlined:
        return r ? p[r] : s;
      case e.ghost:
      default:
        return y[o].primary;
    }
  }, [t, s, o, n, u, r]), h = c.useMemo(() => {
    switch (t) {
      case e.ghost:
      case e.transparent:
        return "none";
      case e.contained:
      case e.outlined:
      default:
        return w[o].secondary;
    }
  }, [t, s, o]);
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
        fontSize: g.text,
        fontWeight: "bold",
        cursor: n ? "wait" : u ? "not-allowed" : "pointer",
        borderRadius: "8px",
        borderWidth: 2,
        borderColor: a,
        boxShadow: h,
        backgroundColor: f,
        color: d
      }),
      [n, u, a, f, d, h]
    )
  };
}
export {
  R as useButtonStyle
};
