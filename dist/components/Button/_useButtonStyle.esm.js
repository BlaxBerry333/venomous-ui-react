import f from "react";
import { Theme as m } from "../Theme/index.esm.js";
import { ButtonVariantMap as t } from "./index.types.esm.js";
import { BackgroundColors as x, SemanticColors as s, BorderColors as b, TextColors as y } from "../../utils/design/colors.esm.js";
import { Shadows as k } from "../../utils/design/Shadow.esm.js";
import { TypographySize as w } from "../../utils/design/TypographySize.esm.js";
import { getLighterHex as S, getOpacityHex as g } from "../../utils/tools/get-colors.esm.js";
function j({
  isLoading: n,
  isDisabled: c,
  variant: u,
  semanticColor: o
}) {
  const { themeColor: d } = m.useThemeColor(), { themeMode: r } = m.useThemeMode(), a = f.useMemo(() => {
    let e = "";
    if (n || c)
      return e = x[r].secondary, e;
    switch (u) {
      case t.contained:
        e = o ? s[o] : d;
        break;
      case t.outlined:
        e = x[r].secondary;
        break;
      case t.ghost:
      default:
        e = "transparent";
        break;
    }
    return e;
  }, [u, d, r, n, c, o]), p = f.useMemo(() => {
    let e = "";
    if (n || c)
      return e = b[r].secondary, e;
    switch (u) {
      case t.contained:
        e = o ? S(s[o], 0.25) : g(d, 0.5);
        break;
      case t.outlined:
        e = o ? s[o] : d;
        break;
      case t.ghost:
        e = b[r].secondary;
        break;
      default:
        e = "transparent";
        break;
    }
    return e;
  }, [u, d, r, n, c, o]), h = f.useMemo(() => {
    let e = "";
    if (n || c)
      return e = y[r].disabled, e;
    switch (u) {
      case t.contained:
        e = "#ffffff";
        break;
      case t.outlined:
        e = o ? s[o] : d;
        break;
      case t.ghost:
      default:
        e = y[r].primary;
        break;
    }
    return e;
  }, [u, d, r, n, c, o]), l = f.useMemo(() => {
    switch (u) {
      case t.ghost:
        return "none";
      case t.contained:
      case t.outlined:
      default:
        return k[r].secondary;
    }
  }, [u, d, r]);
  return {
    buttonStyles: f.useMemo(
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
        fontSize: w.text,
        fontWeight: "bold",
        cursor: n ? "wait" : c ? "not-allowed" : "pointer",
        borderRadius: "8px",
        borderWidth: 2,
        borderColor: p,
        boxShadow: l,
        backgroundColor: a,
        color: h
      }),
      [n, c, p, a, h, l]
    )
  };
}
export {
  j as useButtonStyle
};
