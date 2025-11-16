import r from "react";
import { COMPONENT_DISPLAY_NAMES as s } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import c from "../../hooks/useCustomStyle/index.esm.js";
function k({ open: t, opacity: i }) {
  const n = c({ displayName: s.Backdrop }), o = r.useMemo(() => ({
    backgroundColor: `rgba(0, 0, 0, ${i !== void 0 ? i : 0.5})`
  }), [i]), e = r.useMemo(() => ({
    opacity: t ? 1 : 0,
    visibility: t ? "visible" : "hidden",
    transition: "opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
  }), [t]);
  return {
    componentStyle: r.useMemo(
      () => ({
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        // -- default style --
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1299,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        // 防止双击时选择文本
        ...o,
        ...e,
        // -- custom style --
        ...n
      }),
      [o, e, n]
    ),
    __: {
      DynamicBackgroundStyles: o,
      DynamicVisibilityStyles: e
    }
  };
}
export {
  k as useBackdropStyles
};
