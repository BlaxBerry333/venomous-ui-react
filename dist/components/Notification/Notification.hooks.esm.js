import n from "react";
import { COMPONENT_DISPLAY_NAMES as d } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import { SEMANTIC_COLORS as T } from "../../constants/designs/SEMANTIC_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import b from "../../hooks/useThemeDesigns/index.esm.js";
import S from "../../hooks/useThemeMode/index.esm.js";
import p from "../../hooks/useCustomStyle/index.esm.js";
import { getDarker as h, getLighter as N } from "../../tools/colors/get-colors.esm.js";
import O from "./Notification.manager.esm.js";
import { NOTIFICATION_POSITION_MAP as l } from "./Notification.types.esm.js";
function v({ position: s = "top-right", offset: t = 0 }) {
  const o = p({ displayName: d.Notification }), m = n.useMemo(() => {
    switch (s) {
      case l.TOP_RIGHT:
        return { top: t, right: t };
      case l.TOP_LEFT:
        return { top: t, left: t };
      case l.TOP_CENTER:
        return { top: t, left: "50%", transform: "translateX(-50%)" };
      case l.BOTTOM_RIGHT:
        return { bottom: t, right: t };
      case l.BOTTOM_LEFT:
        return { bottom: t, left: t };
      case l.BOTTOM_CENTER:
        return { bottom: t, left: "50%", transform: "translateX(-50%)" };
      default:
        return { top: t, right: t };
    }
  }, [s, t]);
  return {
    componentStyle: n.useMemo(
      () => ({
        // -- default style --
        boxSizing: "border-box",
        position: "fixed",
        zIndex: 9999,
        width: 400,
        maxWidth: "calc(100vw - 40px)",
        ...m,
        // -- custom style --
        ...o
      }),
      [m, o]
    )
  };
}
function k({ type: s }) {
  const { isDarkMode: t } = S(), { ShadowStyles: o } = b(), m = p({ displayName: d.NotificationItem }), r = n.useMemo(() => T[s], [s]);
  return {
    componentStyle: n.useMemo(() => ({
      // -- default style --
      padding: "16px 4px",
      borderRadius: 4,
      minWidth: 300,
      maxWidth: 400,
      cursor: "default",
      backgroundColor: t ? h(r, 0.85) : N(r, 0.92),
      borderLeftColor: r,
      borderLeftWidth: 8,
      borderLeftStyle: "solid",
      boxShadow: o[2],
      // -- custom style --
      ...m
    }), [s, t, o, r, m]),
    __: {
      DynamicColor: r
    }
  };
}
function F({ maxCount: s = 5 }) {
  const [t, o] = n.useState([]);
  n.useEffect(() => {
    const r = /* @__PURE__ */ new Map(), a = O.subscribe((e) => {
      if (o((u) => {
        const i = [...u, { ...e, visible: !1 }];
        return i.length > s ? i.slice(i.length - s) : i;
      }), requestAnimationFrame(() => {
        o((u) => u.map((i) => i.id === e.id ? { ...i, visible: !0 } : i));
      }), e.duration > 0) {
        const u = setTimeout(() => {
          o((i) => i.map((c) => c.id === e.id ? { ...c, visible: !1 } : c)), setTimeout(() => {
            o((i) => i.filter((c) => c.id !== e.id)), r.delete(e.id);
          }, 200);
        }, e.duration);
        r.set(e.id, u);
      }
    });
    return () => {
      a(), r.forEach((e) => clearTimeout(e)), r.clear();
    };
  }, [s]);
  const m = n.useCallback((r) => {
    o((a) => a.map((e) => e.id === r ? { ...e, visible: !1 } : e)), setTimeout(() => {
      o((a) => a.filter((e) => e.id !== r));
    }, 200);
  }, []);
  return {
    notifications: t,
    handleClose: m
  };
}
export {
  v as useNotificationContainerStyles,
  k as useNotificationItemStyles,
  F as useNotificationManager
};
