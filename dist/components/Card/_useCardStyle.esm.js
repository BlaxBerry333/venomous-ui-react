import t from "react";
import l from "../../hooks/useDesign/index.esm.js";
import { CardVariantMap as e } from "./index.types.esm.js";
function p({ variant: r }) {
  const s = l(), o = t.useMemo(() => {
    switch (r) {
      case e.transparent:
        return "transparent";
      case e.elevated:
      case e.outlined:
      case e.frostedGlass:
      default:
        return s.BackgroundColors.secondary;
    }
  }, [s, r]), a = t.useMemo(() => {
    switch (r) {
      case e.outlined:
      case e.transparent:
        return s.BorderColors.tertiary;
      case e.elevated:
      case e.frostedGlass:
      default:
        return "transparent";
    }
  }, [s, r]), n = t.useMemo(() => {
    switch (r) {
      case e.outlined:
      case e.transparent:
        return "none";
      case e.elevated:
      case e.frostedGlass:
      default:
        return s.Shadows.primary;
    }
  }, [s, r]), d = t.useMemo(() => ({
    borderRadius: "8px",
    padding: "16px",
    outlineWidth: 1.5,
    outlineStyle: "solid",
    outlineColor: a,
    backgroundColor: o,
    boxShadow: n,
    ...r === e.frostedGlass && {
      backdropFilter: "blur(8px) brightness(0.8)",
      WebkitBackdropFilter: "blur(8px) brightness(0.8)"
    }
  }), [a, o, n, r]);
  return {
    backgroundColor: o,
    borderColor: a,
    boxShadow: n,
    commonStyles: d
  };
}
export {
  p as default
};
