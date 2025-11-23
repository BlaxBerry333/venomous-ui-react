import t from "react";
import { COMPONENT_DISPLAY_NAMES as f } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import a from "../../hooks/useThemeDesigns/index.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import S from "../../hooks/useCustomStyle/index.esm.js";
function k({
  collapsed: i,
  onCollapsedChange: o
}) {
  const [e, r] = t.useState(!1);
  t.useEffect(() => {
    i !== void 0 && r(i);
  }, [i]);
  const s = t.useCallback(() => {
    const n = !e;
    r(n), o == null || o(n);
  }, [e, o]);
  return t.useMemo(
    () => ({
      collapsed: e,
      toggle: s
    }),
    [e, s]
  );
}
function z({
  expandedWidth: i = 280,
  collapsedWidth: o = 80,
  collapsed: e
}) {
  const { BackgroundColors: r, BorderColors: s } = a(), n = S({ displayName: f.LayoutSide }), m = t.useMemo(() => {
    const u = e ? o : i;
    return {
      width: `${u}px`,
      minWidth: `${u}px`,
      height: "100dvh"
    };
  }, [e, o, i]), l = t.useMemo(
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
  ), c = t.useMemo(
    () => ({
      position: "relative",
      width: "100%",
      flex: 1,
      overflowX: "hidden",
      overflowY: "auto",
      zIndex: 1
    }),
    []
  ), p = t.useMemo(
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
    componentStyle: l,
    wrapperStyle: c,
    collapseButtonStyle: p
  };
}
export {
  k as useLayoutSideActions,
  z as useLayoutSideStyles
};
