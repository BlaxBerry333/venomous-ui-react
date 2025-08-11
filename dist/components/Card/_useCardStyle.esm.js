import t from "react";
import { BackgroundColors as l, BorderColors as u } from "../../utils/design/colors.esm.js";
import { Shadows as c } from "../../utils/design/Shadow.esm.js";
import { Theme as i } from "../Theme/index.esm.js";
import { CardVariantMap as e } from "./index.types.esm.js";
function C({ variant: r }) {
  const { themeMode: o } = i.useThemeMode(), s = t.useMemo(() => {
    switch (r) {
      case e.transparent:
        return "transparent";
      case e.elevated:
      case e.outlined:
      case e.frostedGlass:
      default:
        return l[o].secondary;
    }
  }, [o, r]), a = t.useMemo(() => {
    switch (r) {
      case e.outlined:
      case e.transparent:
        return u[o].tertiary;
      case e.elevated:
      case e.frostedGlass:
      default:
        return "transparent";
    }
  }, [o, r]), n = t.useMemo(() => {
    switch (r) {
      case e.outlined:
      case e.transparent:
        return "none";
      case e.elevated:
      case e.frostedGlass:
      default:
        return c[o].primary;
    }
  }, [o, r]), d = t.useMemo(() => ({
    borderRadius: "8px",
    padding: "16px",
    outlineWidth: 1.5,
    outlineStyle: "solid",
    outlineColor: a,
    backgroundColor: s,
    boxShadow: n,
    ...r === e.frostedGlass && {
      backdropFilter: "blur(8px) brightness(0.8)",
      WebkitBackdropFilter: "blur(8px) brightness(0.8)"
    }
  }), [a, s, n, r]);
  return {
    backgroundColor: s,
    borderColor: a,
    boxShadow: n,
    commonStyles: d
  };
}
export {
  C as default
};
