import i from "react";
import { ThemeBreakPoint as a, BreakPointName as e } from "../../utils/design/ThemeBreakpoint.esm.js";
const p = new Map(
  Object.values(e).map((t, o) => [t, o])
);
function z() {
  const [t, o] = i.useState(!1), [n, f] = i.useState(() => g()), [d, x] = i.useState(!1), s = i.useRef(null);
  i.useEffect(() => {
    const l = () => {
      const r = window.innerWidth;
      return r >= a.xxl ? e.xxl : r >= a.xl ? e.xl : r >= a.lg ? e.lg : r >= a.md ? e.md : r >= a.sm ? e.sm : e.xs;
    }, u = () => {
      s.current && clearTimeout(s.current), s.current = setTimeout(() => {
        const r = l();
        f((S) => S !== r ? r : S);
      }, 100);
    }, c = l();
    return f(c), x(!0), o(!0), window.addEventListener("resize", u, { passive: !0 }), () => {
      s.current && (clearTimeout(s.current), s.current = null), window.removeEventListener("resize", u);
    };
  }, []);
  const m = i.useCallback(
    (l) => {
      if (!t) return !1;
      const u = p.get(n), c = p.get(l);
      return u === void 0 || c === void 0 ? !1 : u >= c;
    },
    [n, t]
  );
  return i.useMemo(
    () => ({
      screenSize: n,
      isLargerThanOrEqual: m,
      // 渲染策略辅助
      shouldUseGridLayout: d,
      // 是否应该使用复杂的网格布局
      shouldUseFallbackLayout: !d
      // 是否应该使用降级布局
    }),
    [n, t, d, m]
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
  z as default
};
