import e from "react";
import { COMPONENT_DISPLAY_NAMES as p } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import f from "../../hooks/useThemeDesigns/index.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import a from "../../hooks/useCustomStyle/index.esm.js";
function w({
  collapsed: i,
  onCollapsedChange: t
}) {
  const [o, r] = e.useState(!1);
  e.useEffect(() => {
    i !== void 0 && r(i);
  }, [i]);
  const s = e.useCallback(() => {
    const n = !o;
    r(n), t == null || t(n);
  }, [o, t]);
  return e.useMemo(
    () => ({
      collapsed: o,
      toggle: s
    }),
    [o, s]
  );
}
function I({
  expandedWidth: i = 280,
  collapsedWidth: t = 80,
  collapsed: o
}) {
  const { BackgroundColors: r, BorderColors: s } = f(), n = a({ displayName: p.LayoutSide }), m = e.useMemo(() => {
    const u = o ? t : i;
    return {
      width: `${u}px`,
      minWidth: `${u}px`,
      height: "100dvh"
    };
  }, [o, t, i]), c = e.useMemo(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",
      // -- default styles --
      display: "flex",
      flexDirection: "column",
      overflow: "visible",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1e3,
      ...m,
      transition: "width 0.25s ease-in-out",
      backgroundColor: r[1],
      borderRight: `1px solid ${s[1]}`,
      // -- custom styles --
      ...n
    }),
    [r, s, m, n]
  ), l = e.useMemo(
    () => ({
      position: "absolute",
      top: 8,
      right: 0,
      transform: "translateX(50%)",
      zIndex: 101
    }),
    []
  );
  return {
    componentStyle: c,
    collapseButtonStyle: l
  };
}
export {
  w as useLayoutSideActions,
  I as useLayoutSideStyles
};
