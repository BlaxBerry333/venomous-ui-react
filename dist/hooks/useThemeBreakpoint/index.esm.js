import o from "react";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import { THEME_BREAKPOINTS as r, THEME_BREAKPOINT_RANGES as m } from "../../constants/designs/THEME_BREAKPOINTS.esm.js";
function p(t) {
  var c;
  const i = ((c = t == null ? void 0 : t.__) == null ? void 0 : c.windowSizeCalculationDebounceMS) ?? w, [n, u] = o.useState(
    () => typeof window < "u" ? d(window.innerWidth) : r.XS
  ), e = o.useRef(null);
  return o.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => {
      e.current && clearTimeout(e.current), e.current = setTimeout(() => {
        const a = d(window.innerWidth);
        u((f) => f !== a ? a : f);
      }, i);
    };
    return window.addEventListener("resize", s, { passive: !0 }), () => {
      window.removeEventListener("resize", s), e.current && clearTimeout(e.current);
    };
  }, [i]), o.useMemo(
    () => ({
      breakpoint: n,
      breakpointRange: m[n]
    }),
    [n]
  );
}
const w = 150;
function d(t) {
  for (const i of Object.keys(r)) {
    const n = r[i], [u, e] = m[n];
    if (t >= u && t <= e)
      return n;
  }
  return r.XS;
}
export {
  p as default
};
