import i from "react";
import { BreakPoint as e, BreakPointWidth as t } from "../../utils/breakpoint/index.esm.js";
function c() {
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
  c as default
};
