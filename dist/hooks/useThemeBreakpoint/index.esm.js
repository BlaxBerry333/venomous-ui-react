import s from "react";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import { THEME_BREAKPOINTS as o, THEME_BREAKPOINT_RANGES as a } from "../../constants/designs/THEME_BREAKPOINTS.esm.js";
function X(n) {
  var c;
  const t = ((c = n == null ? void 0 : n.__) == null ? void 0 : c.windowSizeCalculationDebounceMS) ?? l, [e, r] = s.useState(
    () => typeof window < "u" ? _(window.innerWidth) : o.XS
  ), u = s.useRef(null);
  return s.useEffect(() => {
    if (typeof window > "u") return;
    const i = () => {
      u.current && clearTimeout(u.current), u.current = setTimeout(() => {
        const f = _(window.innerWidth);
        r((m) => m !== f ? f : m);
      }, t);
    };
    return window.addEventListener("resize", i, { passive: !0 }), () => {
      window.removeEventListener("resize", i), u.current && clearTimeout(u.current);
    };
  }, [t]), s.useMemo(
    () => ({
      // Current breakpoint info
      breakpoint: e,
      breakpointRange: a[e],
      // Convenient boolean flags
      isXS: e === o.XS,
      isSM: e === o.SM,
      isMD: e === o.MD,
      isLG: e === o.LG,
      isXL: e === o.XL,
      isXXL: e === o.XXL,
      // Comparison functions (pure functions, stable references)
      isLargerThan: (i) => d(e, i),
      isSmallerThan: (i) => E(e, i),
      isLargerThanOrEqual: (i) => M(e, i),
      isSmallerThanOrEqual: (i) => T(e, i)
    }),
    [e]
  );
}
const l = 150;
function _(n) {
  for (const t of Object.keys(o)) {
    const e = o[t], [r, u] = a[e];
    if (n >= r && n <= u)
      return e;
  }
  return o.XS;
}
function d(n, t) {
  const e = a[n][0], r = a[t][0];
  return e > r;
}
function E(n, t) {
  const e = a[n][1], r = a[t][1];
  return e < r;
}
function M(n, t) {
  const e = a[n][0], r = a[t][0];
  return e >= r;
}
function T(n, t) {
  const e = a[n][1], r = a[t][1];
  return e <= r;
}
export {
  X as default
};
