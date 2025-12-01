import r from "react";
import { COMPONENT_DISPLAY_NAMES as C } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import O from "../../hooks/useThemeDesigns/index.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import g from "../../hooks/useCustomStyle/index.esm.js";
import { POPOVER_TRIGGER_EVENT_MAP as v, POPOVER_PLACEMENT_MAP as P } from "./Popover.types.esm.js";
function z({
  position: d,
  isPositioned: o,
  isTriggerVisible: m
}) {
  const { BackgroundColors: n, ShadowStyles: h } = O(), c = g({ displayName: C.Popover }), w = r.useMemo(
    () => ({
      position: "fixed",
      top: d.top,
      left: d.left,
      zIndex: 1400,
      // 比 Dialog (1200) 和 Drawer (1300) 高
      // 位置计算完成前或触发器不可见时隐藏
      visibility: o && m ? "visible" : "hidden"
    }),
    [d, o, m]
  );
  return {
    componentStyle: r.useMemo(
      () => ({
        // -- default style --
        width: "max-content",
        borderRadius: 8,
        backgroundColor: n[1],
        boxShadow: h[2],
        ...w,
        // -- custom style --
        ...c
      }),
      [n, h, w, c]
    ),
    __: {
      DynamicPlacementStyles: w
    }
  };
}
function D({
  triggerRef: d,
  popoverRef: o,
  placement: m = P.BOTTOM,
  offset: n = 2,
  isOpen: h
}) {
  const [c, w] = r.useState({ top: 0, left: 0 }), [i, E] = r.useState(!1), [t, p] = r.useState(!0), s = r.useCallback(() => {
    const f = d.current, b = o.current;
    if (!f || !b) return;
    const e = f.getBoundingClientRect(), u = b.getBoundingClientRect(), L = window.innerWidth, M = window.innerHeight, S = e.bottom > 0 && e.top < M && e.right > 0 && e.left < L;
    if (p(S), !S) return;
    let a = 0, l = 0;
    switch (m) {
      case P.BOTTOM:
        a = e.bottom + n, l = e.left + e.width / 2 - u.width / 2;
        break;
      case P.TOP:
        a = e.top - u.height - n, l = e.left + e.width / 2 - u.width / 2;
        break;
      case P.LEFT:
        a = e.top + e.height / 2 - u.height / 2, l = e.left - u.width - n;
        break;
      case P.RIGHT:
        a = e.top + e.height / 2 - u.height / 2, l = e.right + n;
        break;
    }
    l < 8 && (l = 8), l + u.width > L - 8 && (l = L - u.width - 8), a < 8 && (a = 8), a + u.height > M - 8 && (a = M - u.height - 8), w({ top: a, left: l }), E(!0);
  }, [d, o, m, n]);
  return r.useEffect(() => {
    if (!h) {
      E(!1), p(!0);
      return;
    }
    return s(), window.addEventListener("scroll", s, !0), window.addEventListener("resize", s), () => {
      window.removeEventListener("scroll", s, !0), window.removeEventListener("resize", s);
    };
  }, [h, s]), {
    position: c,
    isPositioned: i,
    isTriggerVisible: t
  };
}
function G({
  defaultOpen: d = !1,
  triggerEvent: o = v.CLICK,
  autoCloseOnClickOutside: m = !0,
  triggerRef: n,
  popoverRef: h
}) {
  const [c, w] = r.useState(d), i = r.useCallback((t) => {
    w(t);
  }, []);
  r.useEffect(() => {
    const t = n.current;
    if (!t) return;
    const p = () => {
      i(!c);
    }, s = () => {
      i(!0);
    }, f = () => {
      i(!1);
    };
    if (o === v.CLICK)
      return t.addEventListener("click", p), () => t.removeEventListener("click", p);
    if (o === v.HOVER)
      return t.addEventListener("mouseenter", s), t.addEventListener("mouseleave", f), () => {
        t.removeEventListener("mouseenter", s), t.removeEventListener("mouseleave", f);
      };
  }, [o, n, c, i]), r.useEffect(() => {
    if (!c || !m || o === v.HOVER) return;
    const t = (p) => {
      const s = n.current, f = h.current;
      f && !f.contains(p.target) && s && !s.contains(p.target) && i(!1);
    };
    return document.addEventListener("mousedown", t), () => document.removeEventListener("mousedown", t);
  }, [c, m, o, n, h, i]);
  const E = r.useMemo(() => o !== v.HOVER ? {} : {
    onMouseEnter: () => i(!0),
    onMouseLeave: () => i(!1)
  }, [o, i]);
  return r.useMemo(
    () => ({
      open: c,
      PopoverMouseEvents: E
    }),
    [c, E]
  );
}
export {
  G as usePopoverActions,
  D as usePopoverPosition,
  z as usePopoverStyles
};
