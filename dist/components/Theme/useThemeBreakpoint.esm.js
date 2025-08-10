import i from "react";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { ThemeBreakPoint as a, BreakPointName as e } from "../../utils/design/ThemeBreakpoint.esm.js";
const p = new Map(
  Object.values(e).map((t, o) => [t, o])
);
function v() {
  const [t, o] = i.useState(!1), [n, d] = i.useState(() => g()), [f, x] = i.useState(!1), s = i.useRef(null);
  i.useEffect(() => {
    const c = () => {
      const r = window.innerWidth;
      return r >= a.xxl ? e.xxl : r >= a.xl ? e.xl : r >= a.lg ? e.lg : r >= a.md ? e.md : r >= a.sm ? e.sm : e.xs;
    }, u = () => {
      s.current && clearTimeout(s.current), s.current = setTimeout(() => {
        const r = c();
        d((S) => S !== r ? r : S);
      }, 100);
    }, l = c();
    return d(l), x(!0), o(!0), window.addEventListener("resize", u, { passive: !0 }), () => {
      s.current && (clearTimeout(s.current), s.current = null), window.removeEventListener("resize", u);
    };
  }, []);
  const m = i.useCallback(
    (c) => {
      if (!t) return !1;
      const u = p.get(n), l = p.get(c);
      return u === void 0 || l === void 0 ? !1 : u >= l;
    },
    [n, t]
  );
  return i.useMemo(
    () => ({
      screenSize: n,
      isLargerThanOrEqual: m,
      isMounted: t,
      isSSRHydrated: t && f
      // 是否已完成水合且获取真实尺寸
    }),
    [n, t, f, m]
  );
}
function g() {
  if (typeof window > "u")
    return e.xs;
  const t = navigator.userAgent, o = /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(t), n = /iPad|Android(?!.*Mobile)|Kindle|Silk/i.test(t);
  return o && !n ? e.xs : n ? e.md : e.lg;
}
export {
  g as _getSmartDefaultBreakpoint,
  v as default
};
