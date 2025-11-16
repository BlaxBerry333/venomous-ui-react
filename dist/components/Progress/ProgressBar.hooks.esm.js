import e from "react";
import { COMPONENT_DISPLAY_NAMES as m } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import d from "../../hooks/useThemeDesigns/index.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import p from "../../hooks/useCustomStyle/index.esm.js";
function I({
  height: i = 4,
  color: s,
  displayValue: t = 0
}) {
  const { PaletteColors: u, BackgroundColors: l, BorderColors: r } = d(), o = p({ displayName: m.ProgressBar }), c = e.useMemo(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",
      // -- default style --
      borderRadius: 4,
      position: "relative",
      width: "100%",
      height: i,
      overflow: "hidden",
      backgroundColor: l[2],
      borderWidth: 0.8,
      borderStyle: "solid",
      borderColor: r[1],
      // -- custom style --
      ...o
    }),
    [l, r, i, o]
  ), n = e.useMemo(
    () => ({
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: `${t}%`,
      backgroundColor: s || u[1],
      borderRadius: "inherit",
      transition: "width 0.25s ease"
    }),
    [t, s, u]
  );
  return {
    containerStyle: c,
    insideBarStyle: n
  };
}
function R({ value: i, onChange: s, animated: t }) {
  const [u, l] = e.useState(0), r = e.useRef(null), o = e.useRef(s);
  return e.useEffect(() => {
    o.current = s;
  }, [s]), e.useEffect(() => {
    if (!t) {
      r.current !== null && (clearInterval(r.current), r.current = null);
      return;
    }
    let n = 0;
    return r.current = window.setInterval(() => {
      var a;
      n += 1, n > 100 && (n = 0), l(n), (a = o.current) == null || a.call(o, n);
    }, 20), () => {
      r.current !== null && (clearInterval(r.current), r.current = null);
    };
  }, [t]), {
    displayValue: e.useMemo(
      () => t ? u : Math.min(Math.max(i || 0, 0), 100),
      [t, u, i]
    )
  };
}
export {
  R as useProgressBarActions,
  I as useProgressBarStyles
};
