import s from "react";
import { COMPONENT_DISPLAY_NAMES as M } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import b from "../../hooks/useThemeDesigns/index.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import S from "../../hooks/useCustomStyle/index.esm.js";
import { POPOVER_TRIGGER_MAP as w, POPOVER_PLACEMENT_MAP as f } from "./Popover.types.esm.js";
function B({ position: l }) {
  const { BackgroundColors: a, ShadowStyles: c } = b(), o = S({ displayName: M.Popover }), u = s.useMemo(
    () => ({
      position: "fixed",
      top: l.top,
      left: l.left,
      zIndex: 1400
      // 比 Dialog (1200) 和 Drawer (1300) 高
    }),
    [l]
  );
  return {
    componentStyle: s.useMemo(
      () => ({
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        // -- default style --
        width: "max-content",
        borderRadius: 8,
        backgroundColor: a[1],
        boxShadow: c[2],
        ...u,
        // -- custom style --
        ...o
      }),
      [a, c, u, o]
    ),
    __: {
      DynamicPlacementStyles: u
    }
  };
}
function N({
  triggerRef: l,
  popoverRef: a,
  placement: c = f.BOTTOM,
  offset: o = 2,
  open: u
}) {
  const [h, L] = s.useState({ top: 0, left: 0 }), d = s.useCallback(() => {
    const P = l.current, v = a.current;
    if (!P || !v) return;
    const t = P.getBoundingClientRect(), e = v.getBoundingClientRect();
    let r = 0, i = 0;
    switch (c) {
      case f.BOTTOM:
        r = t.bottom + o, i = t.left + t.width / 2 - e.width / 2;
        break;
      case f.TOP:
        r = t.top - e.height - o, i = t.left + t.width / 2 - e.width / 2;
        break;
      case f.LEFT:
        r = t.top + t.height / 2 - e.height / 2, i = t.left - e.width - o;
        break;
      case f.RIGHT:
        r = t.top + t.height / 2 - e.height / 2, i = t.right + o;
        break;
    }
    const n = window.innerWidth, m = window.innerHeight;
    i < 8 && (i = 8), i + e.width > n - 8 && (i = n - e.width - 8), r < 8 && (r = 8), r + e.height > m - 8 && (r = m - e.height - 8), L({ top: r, left: i });
  }, [l, a, c, o]);
  return s.useEffect(() => {
    if (u)
      return d(), window.addEventListener("scroll", d, !0), window.addEventListener("resize", d), () => {
        window.removeEventListener("scroll", d, !0), window.removeEventListener("resize", d);
      };
  }, [u, d]), {
    position: h
  };
}
function V({
  defaultOpen: l = !1,
  open: a,
  onOpenChange: c,
  trigger: o = w.CLICK,
  autoCloseOnClickOutside: u = !0,
  triggerRef: h,
  popoverRef: L
}) {
  const [d, P] = s.useState(l), v = a !== void 0, t = v ? a : d, e = s.useCallback(
    (n) => {
      v || P(n), c == null || c(n);
    },
    [v, c]
  ), r = s.useCallback(() => {
    e(!t);
  }, [t, e]);
  s.useEffect(() => {
    const n = h.current;
    if (!n) return;
    const m = () => {
      e(!t);
    }, E = () => {
      e(!0);
    }, p = () => {
      e(!1);
    };
    if (o === w.CLICK)
      return n.addEventListener("click", m), () => n.removeEventListener("click", m);
    if (o === w.HOVER)
      return n.addEventListener("mouseenter", E), n.addEventListener("mouseleave", p), () => {
        n.removeEventListener("mouseenter", E), n.removeEventListener("mouseleave", p);
      };
  }, [o, h, t, e]), s.useEffect(() => {
    if (!t || !u || o === w.HOVER) return;
    const n = (m) => {
      const E = h.current, p = L.current;
      p && !p.contains(m.target) && E && !E.contains(m.target) && e(!1);
    };
    return document.addEventListener("mousedown", n), () => document.removeEventListener("mousedown", n);
  }, [t, u, o, h, L, e]);
  const i = s.useMemo(() => o !== w.HOVER ? {} : {
    onMouseEnter: () => e(!0),
    onMouseLeave: () => e(!1)
  }, [o, e]);
  return s.useMemo(
    () => ({
      open: t,
      onToggle: r,
      PopoverMouseEvents: i
    }),
    [t, r, i]
  );
}
export {
  V as usePopoverActions,
  N as usePopoverPosition,
  B as usePopoverStyles
};
