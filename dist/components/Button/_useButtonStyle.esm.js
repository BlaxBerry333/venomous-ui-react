import r from "react";
import { Theme as a } from "../Theme/index.esm.js";
import { BackgroundColors as h, BorderColors as p, TextColors as x } from "../../utils/design/colors.esm.js";
import { ThemeShadow as g } from "../../utils/design/ThemeShadow.esm.js";
import { TypographySize as y } from "../../utils/design/TypographySize.esm.js";
import { getDarkerHex as l } from "../../utils/tools/get-colors.esm.js";
function z({
  isLoading: s,
  isDisabled: u,
  color: n = "auto",
  variant: t
}) {
  const { themeColor: e } = a.useThemeColor(), { themeMode: o, isDarkThemeMode: f } = a.useThemeMode(), d = r.useMemo(() => {
    switch (t) {
      case "contained":
        return e;
      case "outlined":
        return h[o].secondary;
      case "ghost":
      default:
        return h[o].primary;
    }
  }, [t, n, e, o]), i = r.useMemo(() => {
    switch (t) {
      case "contained":
        return f ? l(e, 0.025) : l(e, 0.25);
      case "outlined":
        return e;
      case "ghost":
      default:
        return p[o].secondary;
    }
  }, [t, n, e, o]), c = r.useMemo(() => {
    switch (t) {
      case "contained":
        return "#ffffff";
      case "outlined":
        return e;
      case "ghost":
      default:
        return x[o].primary;
    }
  }, [t, n, e, o]), m = r.useMemo(() => g[o].sm, [t, n, e, o]);
  return {
    buttonStyles: r.useMemo(
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
        fontSize: y.text,
        fontWeight: "bold",
        cursor: s ? "wait" : u ? "not-allowed" : "pointer",
        borderRadius: "8px",
        borderWidth: 2,
        borderColor: i,
        boxShadow: m,
        backgroundColor: d,
        color: c
      }),
      [s, u, i, d, c, m]
    )
  };
}
export {
  z as useButtonStyle
};
