import i from "react";
import { BreakPointName as e, ThemeBreakPoint as t } from "../../utils/design/ThemeBreakpoint.esm.js";
function f() {
  const [s, o] = i.useState(e.xs);
  return i.useEffect(() => {
    const u = () => {
      const r = window.innerWidth;
      return r >= t.xxl ? e.xxl : r >= t.xl ? e.xl : r >= t.lg ? e.lg : r >= t.md ? e.md : r >= t.sm ? e.sm : e.xs;
    }, n = () => {
      o(u());
    };
    return n(), window.addEventListener("resize", n), () => window.removeEventListener("resize", n);
  }, []), {
    screenSize: s
  };
}
export {
  f as default
};
