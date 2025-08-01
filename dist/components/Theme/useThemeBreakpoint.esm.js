import i from "react";
import { ThemeBreakPoint as a, BreakPointName as e } from "../../utils/design/ThemeBreakpoint.esm.js";
const p = new Map(
  Object.values(e).map((t, o) => [t, o])
);
function k() {
  const [t, o] = i.useState(!1), [r, d] = i.useState(() => g()), [f, x] = i.useState(!1), s = i.useRef(null);
  i.useEffect(() => {
    const c = () => {
      const n = window.innerWidth;
      return n >= a.xxl ? e.xxl : n >= a.xl ? e.xl : n >= a.lg ? e.lg : n >= a.md ? e.md : n >= a.sm ? e.sm : e.xs;
    }, u = () => {
      s.current && clearTimeout(s.current), s.current = setTimeout(() => {
        const n = c();
        d((S) => S !== n ? n : S);
      }, 100);
    }, l = c();
    return d(l), x(!0), o(!0), window.addEventListener("resize", u, { passive: !0 }), () => {
      s.current && (clearTimeout(s.current), s.current = null), window.removeEventListener("resize", u);
    };
  }, []);
  const m = i.useCallback(
    (c) => {
      if (!t) return !1;
      const u = p.get(r), l = p.get(c);
      return u === void 0 || l === void 0 ? !1 : u >= l;
    },
    [r, t]
  );
  return i.useMemo(
    () => ({
      screenSize: r,
      isLargerThanOrEqual: m,
      isMounted: t,
      isSSRHydrated: t && f
      // 是否已完成水合且获取真实尺寸
    }),
    [r, t, f, m]
  );
}
function g() {
  if (typeof window > "u")
    return e.xs;
  const t = navigator.userAgent, o = /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(t), r = /iPad|Android(?!.*Mobile)|Kindle|Silk/i.test(t);
  return o && !r ? e.xs : r ? e.md : e.lg;
}
export {
  g as _getSmartDefaultBreakpoint,
  k as default
};
