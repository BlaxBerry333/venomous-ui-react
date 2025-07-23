import { jsx as a, jsxs as I, Fragment as X } from "react/jsx-runtime";
import i from "react";
import { Icon as le } from "@iconify/react";
import { AnimatePresence as de, motion as E, useAnimation as ce, useScroll as ue } from "framer-motion";
import { Toaster as he, toast as N } from "sonner";
import { createPortal as pe } from "react-dom";
function Le() {
  const [e, o] = i.useState(!1), r = i.useCallback(() => o(!0), []), t = i.useCallback(() => o(!1), []), n = i.useCallback(() => o((s) => !s), []);
  return {
    isOpen: e,
    setIsOpen: o,
    open: r,
    close: t,
    toggle: n
  };
}
var m = /* @__PURE__ */ ((e) => (e.xs = "xs", e.sm = "sm", e.md = "md", e.lg = "lg", e.xl = "xl", e.xxl = "xxl", e))(m || {});
const w = {
  xs: 444,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
  xxl: 2560
};
var B = /* @__PURE__ */ ((e) => (e.ScarletViper = "#C62828", e.JadeAnaconda = "#26A69A", e.AmethystRattlesnake = "#7E57C2", e.AmberCobra = "#FFA000", e.ObsidianBothrops = "#546E7A", e))(B || {});
const p = {
  disabled: "#e4edf4",
  // 禁用
  success: "#4caf50",
  // 成功
  error: "#f44336",
  // 错误
  warning: "#ff9800",
  // 警告
  info: "#2196f3"
  // 信息
}, S = {
  darkMode: "#181818",
  lightMode: "#ffffff"
}, f = {
  darkMode: "rgba(255, 255, 255, 0.1)",
  lightMode: "rgba(0, 0, 0, 0.1)"
}, x = {
  darkMode: `
    rgba(255, 255, 255, 0.2) 0px 3px 5px -1px, 
    rgba(255, 255, 255, 0.14) 0px 6px 10px 0px, 
    rgba(255, 255, 255, 0.12) 0px 1px 8px 0px
    `,
  lightMode: `
    rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, 
    rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, 
    rgba(0, 0, 0, 0.12) 0px 1px 8px 0px
    `
}, v = {
  darkMode: "#cccccc",
  lightMode: "#212121",
  grey: "#666666",
  white: "#ffffff",
  link: "#1976d2",
  disabled: p.disabled,
  success: p.success,
  error: p.error,
  warning: p.warning
}, z = {
  auto: "auto",
  white: "#ffffff",
  success: p.success,
  error: p.error,
  warning: p.warning,
  info: p.info
}, V = {
  auto: "auto",
  disabled: p.disabled,
  error: p.error
};
function me(e) {
  return e = e.replace("#", ""), e.length === 3 && (e = e.split("").map((o) => o + o).join("")), `#${e}`;
}
function U(e) {
  e = e.replace("#", "");
  const o = parseInt(e, 16), r = o >> 16 & 255, t = o >> 8 & 255, n = o & 255;
  return { r, g: t, b: n };
}
function ge(e, o, r) {
  const t = (n) => {
    const s = n.toString(16);
    return s.length === 1 ? "0" + s : s;
  };
  return `#${t(e)}${t(o)}${t(r)}`;
}
function j(e, o) {
  const { r, g: t, b: n } = U(e), s = (l) => Math.min(255, Math.max(0, Math.round(l + o / 100 * 255)));
  return ge(s(r), s(t), s(n));
}
function L(e, o) {
  const r = me(e), t = j(r, 25), n = j(r, -25), { r: s, g: l, b: d } = U(r), c = `rgba(${s}, ${l}, ${d}, ${(o == null ? void 0 : o.opacity) || 0.25})`;
  return {
    origin: r,
    light: t,
    dark: n,
    opacity: c
  };
}
var h = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e))(h || {});
function fe() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? h.Dark : h.Light;
}
const g = {
  h1: "4rem",
  // 64px
  h2: "3rem",
  // 48px
  h3: "2.25rem",
  // 36px
  h4: "1.875rem",
  // 30px
  h5: "1.5rem",
  // 24px
  h6: "1.25rem",
  // 20px
  text: "1rem",
  // 16px
  small: "0.875rem"
  // 14px
};
function xe() {
  const [e, o] = i.useState(m.xs);
  return i.useEffect(() => {
    const r = () => {
      const n = window.innerWidth;
      return n >= w.xxl ? m.xxl : n >= w.xl ? m.xl : n >= w.lg ? m.lg : n >= w.md ? m.md : n >= w.sm ? m.sm : m.xs;
    }, t = () => {
      o(r());
    };
    return t(), window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
  }, []), {
    screenSize: e
  };
}
const P = {
  themeColor: "VENOMOUS_UI__themeColor",
  themeMode: "VENOMOUS_UI__themeMode"
};
function be() {
  if (typeof window < "u") {
    const e = localStorage.getItem(P.themeColor);
    if (e && Object.values(B).includes(e))
      return e;
  }
}
function ye() {
  if (typeof window < "u") {
    const e = localStorage.getItem(P.themeMode);
    if (e && Object.values(h).includes(e))
      return e;
  }
}
function Ce(e) {
  typeof window < "u" && localStorage.setItem(P.themeColor, e);
}
function F(e) {
  typeof window < "u" && localStorage.setItem(P.themeMode, e);
}
const ke = {
  themeMode: h.Light,
  isDarkThemeMode: !1,
  setThemeMode: () => {
  },
  toggleThemeMode: () => {
  },
  themeColor: B.JadeAnaconda,
  setThemeColor: () => {
  }
}, Y = i.createContext(ke);
function G() {
  const e = i.use(Y);
  if (e === void 0)
    throw new Error("useThemeContext must be used within a ThemeProvider");
  return e;
}
function $() {
  const e = G(), o = i.useCallback(
    (r) => {
      e.setThemeColor(r), Ce(r);
    },
    [e]
  );
  return {
    themeColor: e.themeColor,
    setThemeColor: o
  };
}
function C() {
  const e = G(), o = i.useCallback(
    (t) => {
      e.setThemeMode(t), F(t);
    },
    [e]
  ), r = i.useCallback(() => {
    e.toggleThemeMode(), F(e.themeMode === h.Dark ? h.Light : h.Dark);
  }, [e]);
  return {
    themeMode: e.themeMode,
    isDarkThemeMode: e.isDarkThemeMode,
    setThemeMode: o,
    toggleThemeMode: r
  };
}
const y = i.memo(({ style: e, icon: o, width: r = 20, color: t = "auto", ...n }) => {
  const s = i.useMemo(() => z[t], [t]);
  return /* @__PURE__ */ a(
    le,
    {
      ssr: !0,
      icon: o,
      style: {
        width: r,
        minWidth: r,
        height: r,
        minHeight: r,
        flexShrink: 0,
        display: "inline-flex",
        color: s,
        ...e
      },
      ...n
    }
  );
});
y.displayName = "Icon";
const J = i.memo(
  ({
    type: e = "button",
    style: o,
    variant: r = "contained",
    color: t = "auto",
    isLoading: n,
    isDisabled: s,
    icon: l,
    iconWidth: d = 20,
    iconColor: c = "auto",
    ...u
  }) => {
    const { isDarkThemeMode: k } = C(), { themeColor: T } = $(), b = t !== "auto" ? V[t] : T;
    return /* @__PURE__ */ a(
      "button",
      {
        type: e,
        disabled: n || s,
        style: {
          height: "40px",
          width: "40px",
          padding: "0px 0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: g.text,
          fontWeight: "bold",
          borderRadius: "8px",
          borderColor: k ? f.darkMode : f.lightMode,
          cursor: "pointer",
          ...r === "contained" ? {
            backgroundColor: b,
            color: v.white,
            boxShadow: k ? x.darkMode : x.lightMode
          } : {},
          ...r === "outline" ? {
            color: b,
            backgroundColor: "transparent",
            border: `1px solid ${b}`
          } : {},
          ...r === "ghost" ? {
            color: b,
            backgroundColor: "transparent"
          } : {},
          ...o
        },
        ...u,
        children: /* @__PURE__ */ a(
          y,
          {
            icon: l,
            width: d,
            style: {
              color: r === "contained" ? z.white : z[c] || "inherit"
            }
          }
        )
      }
    );
  }
);
J.displayName = "Buttons.Icon";
const q = i.memo(({ style: e, text: o, ...r }) => /* @__PURE__ */ a(
  "code",
  {
    style: {
      color: "#B71D18",
      backgroundColor: "#E7E9EB",
      border: "1px solid #CCCCCC",
      borderRadius: "4px",
      padding: "2px 4px",
      fontSize: g.small,
      fontWeight: 600,
      ...e
    },
    ...r,
    children: o
  }
));
q.displayName = "Typography.Code";
const W = "lightMode";
function A({ color: e = W, ellipsis: o = 0 }) {
  const { isDarkThemeMode: r } = C(), t = i.useMemo(() => r && e === "lightMode" ? v.darkMode : v[e], [e, r]), n = i.useMemo(() => o ? {
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: o,
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  } : {}, [o]);
  return {
    fontColor: t,
    ellipsisStyles: n
  };
}
const K = i.memo(
  ({ children: e, style: o, color: r = W, ellipsis: t = 0, ...n }) => {
    const { fontColor: s, ellipsisStyles: l } = A({ color: r, ellipsis: t });
    return /* @__PURE__ */ a(
      "p",
      {
        style: {
          boxSizing: "border-box",
          margin: 0,
          width: "100%",
          fontSize: g.text,
          lineHeight: 1.5,
          color: s,
          ...l,
          ...o
        },
        ...n,
        children: e
      }
    );
  }
);
K.displayName = "Typography.Paragraph";
const Q = i.memo(
  ({ style: e, text: o, as: r = "span", color: t = W, ...n }) => {
    const { fontColor: s } = A({ color: t });
    return r === "strong" ? /* @__PURE__ */ a(
      "strong",
      {
        style: {
          fontSize: g.text,
          fontWeight: "bold",
          color: s,
          ...e
        },
        ...n,
        children: o
      }
    ) : r === "small" ? /* @__PURE__ */ a(
      "small",
      {
        style: {
          fontSize: g.small,
          color: s,
          ...e
        },
        ...n,
        children: o
      }
    ) : /* @__PURE__ */ a(
      "span",
      {
        style: {
          fontSize: g.text,
          fontWeight: "normal",
          color: s,
          ...e
        },
        ...n,
        children: o
      }
    );
  }
);
Q.displayName = "Typography.Text";
const H = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, Z = i.memo(
  ({ text: e, as: o = H.h4, color: r = W, ellipsis: t = 0, style: n, ...s }) => {
    const l = i.useMemo(() => H[o], [o]), d = i.useMemo(() => g[o], [o]), { fontColor: c, ellipsisStyles: u } = A({ color: r, ellipsis: t });
    return /* @__PURE__ */ a(
      l,
      {
        style: {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
          width: "100%",
          fontSize: d,
          fontFamily: "inherit",
          fontWeight: "bold",
          lineHeight: "inherit",
          textAlign: "inherit",
          color: c,
          ...u,
          ...n
        },
        ...s,
        children: e
      }
    );
  }
);
Z.displayName = "Typography.Title";
const R = {
  Title: Z,
  Text: Q,
  Code: q,
  Paragraph: K
}, we = i.memo(
  ({
    type: e = "button",
    style: o,
    text: r,
    variant: t = "contained",
    color: n = "auto",
    isLoading: s,
    isDisabled: l,
    icon: d,
    iconPosition: c = "start",
    iconWidth: u = 20,
    iconColor: k = "auto",
    ...T
  }) => {
    const { isDarkThemeMode: b } = C(), { themeColor: ae } = $(), D = n !== "auto" ? V[n] : ae;
    return /* @__PURE__ */ I(
      "button",
      {
        type: e,
        disabled: s || l,
        style: {
          height: "40px",
          display: "flex",
          flexDirection: c === "start" ? "row" : "row-reverse",
          alignItems: "center",
          justifyContent: "center",
          textTransform: "capitalize",
          fontSize: g.text,
          fontWeight: "bold",
          borderRadius: "8px",
          borderColor: b ? f.darkMode : f.lightMode,
          cursor: "pointer",
          ...r ? {
            width: "auto",
            padding: "0px 16px"
          } : {
            width: "40px",
            padding: "0px 0px"
          },
          ...t === "contained" ? {
            backgroundColor: D,
            color: v.white,
            boxShadow: b ? x.darkMode : x.lightMode
          } : {},
          ...t === "outline" ? {
            color: D,
            backgroundColor: "transparent",
            border: `1px solid ${D}`
          } : {},
          ...t === "ghost" ? {
            color: D,
            backgroundColor: "transparent"
          } : {},
          ...o
        },
        ...T,
        children: [
          d && /* @__PURE__ */ a(
            y,
            {
              icon: d,
              width: u,
              style: {
                color: t === "contained" ? z.white : z[k] || "inherit"
              }
            }
          ),
          r && /* @__PURE__ */ a(
            R.Text,
            {
              text: r,
              style: {
                margin: d ? "0px 8px" : "0px",
                color: t === "contained" ? "#ffffff" : "inherit"
              }
            }
          )
        ]
      }
    );
  }
);
we.displayName = "Button";
const Me = {
  Icon: J
}, ee = i.memo(({ children: e, style: o, row: r = !0, column: t = !1, gap: n = "8px", ...s }) => /* @__PURE__ */ a(
  "div",
  {
    style: {
      boxSizing: "border-box",
      display: "flex",
      width: "100%",
      flexDirection: t ? "column" : "row",
      alignItems: r ? "flex-start" : o == null ? void 0 : o.alignItems,
      ...Array.isArray(n) ? { rowGap: n[0], columnGap: n[1] } : { gap: n },
      position: "relative",
      ...o
    },
    ...s,
    children: e
  }
));
ee.displayName = "Space.Flex";
const oe = i.memo(({ children: e, style: o, columns: r = 1, spacing: t = 16, ...n }) => {
  const { screenSize: s } = xe(), l = i.useMemo(() => Se(r, s), [r, s]), d = i.useMemo(() => Te(t, s), [t, s]);
  return /* @__PURE__ */ a(
    "div",
    {
      style: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: `repeat(${l}, 1fr)`,
        gap: `${d}px`,
        ...o
      },
      ...n,
      children: e
    }
  );
});
oe.displayName = "Space.Grid";
const M = Object.keys(m);
function Se(e = 1, o) {
  if (typeof e == "number")
    return e;
  const r = M.indexOf(o);
  for (let t = r; t < M.length; t++) {
    const n = e[M[t]];
    if (n !== void 0) return n;
  }
  return 1;
}
function Te(e = 16, o) {
  if (typeof e == "number")
    return e;
  const r = M.indexOf(o);
  for (let t = r; t < M.length; t++) {
    const n = e[M[t]];
    if (n !== void 0) return n;
  }
  return 16;
}
const _ = {
  Flex: ee,
  Grid: oe
}, O = i.memo(
  ({ children: e, style: o, isTransparent: r = !1, isFrostedGlass: t = !1, isOutline: n = !1, ...s }) => {
    const { isDarkThemeMode: l } = C(), d = l ? f.darkMode : f.lightMode, c = l ? S.darkMode : S.lightMode, u = n ? "none" : l ? x.darkMode : x.lightMode;
    return /* @__PURE__ */ a(
      "div",
      {
        style: {
          boxSizing: "border-box",
          borderRadius: "8px",
          padding: "16px",
          boxShadow: u,
          backgroundColor: r ? "transparent" : c,
          backdropFilter: t ? "blur(8px) brightness(0.8)" : "none",
          WebkitBackdropFilter: t ? "blur(8px) brightness(0.8)" : "none",
          border: `1px solid ${d}`,
          ...o
        },
        ...s,
        children: e
      }
    );
  }
);
O.displayName = "Card";
const te = i.memo(({ children: e, height: o = 300, width: r = 200, title: t, coverImage: n }) => /* @__PURE__ */ I(
  O,
  {
    style: {
      height: o,
      width: r,
      padding: "16px 24px",
      overflow: "hidden",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      backgroundColor: "transparent",
      backgroundImage: `url(${n})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      color: "#ffffff"
    },
    children: [
      e,
      /* @__PURE__ */ a(
        "div",
        {
          style: {
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 1,
            width: "16px",
            height: "100%",
            background: "linear-gradient(-90deg, #fff0, #ffffff1a 80%, #ffffff4d 95%, #fff6 96.5%, #cbcbcb14 98%, #6a6a6a1a)",
            borderRadius: "8px"
          }
        }
      ),
      /* @__PURE__ */ a(
        _.Flex,
        {
          column: !0,
          style: {
            height: "max-content",
            width: "100%",
            position: "relative",
            zIndex: 1,
            left: 6,
            top: 40
          },
          children: t && /* @__PURE__ */ a(
            R.Title,
            {
              text: t,
              as: "h4",
              ellipsis: 4,
              style: {
                lineHeight: 1.15,
                color: "#ffffff",
                textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)"
              }
            }
          )
        }
      )
    ]
  }
));
te.displayName = "Cards.Book";
const re = i.memo(({ children: e, title: o = "", description: r = "" }) => /* @__PURE__ */ I(O, { style: { position: "relative" }, children: [
  (o || r) && /* @__PURE__ */ I(_.Flex, { column: !0, gap: 2, style: { paddingRight: "48px" }, children: [
    /* @__PURE__ */ a(R.Title, { as: "h6", text: o, ellipsis: 1 }),
    /* @__PURE__ */ a(R.Paragraph, { ellipsis: 3, color: "grey", children: r })
  ] }),
  /* @__PURE__ */ a(
    Me.Icon,
    {
      icon: "solar:hamburger-menu-line-duotone",
      variant: "ghost",
      style: { position: "absolute", top: "4px", right: "4px" }
    }
  ),
  e && /* @__PURE__ */ a(_.Flex, { column: !0, children: e })
] }));
re.displayName = "Cards.Product";
const Ae = {
  Book: te,
  Product: re
}, ve = i.memo(({ children: e, breakpoint: o = "lg", style: r, ...t }) => {
  const n = i.useMemo(() => w[o], [o]);
  return /* @__PURE__ */ a(
    "div",
    {
      style: {
        margin: "0 auto",
        width: "100%",
        maxWidth: n,
        ...r
      },
      ...t,
      children: e
    }
  );
});
ve.displayName = "Container";
const Ie = i.memo(
  ({ isOpen: e, onClose: o, children: r, position: t = "left", maskClosable: n = !0, width: s = 300, height: l = 300, style: d }) => {
    const { isDarkThemeMode: c } = C(), u = c ? f.darkMode : f.lightMode, k = c ? S.darkMode : S.lightMode, T = c ? x.darkMode : x.lightMode;
    return /* @__PURE__ */ I(X, { children: [
      /* @__PURE__ */ a(
        "div",
        {
          onClick: n ? o : void 0,
          style: {
            boxSizing: "border-box",
            display: e ? "block" : "none",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100svh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            opacity: e ? 1 : 0,
            pointerEvents: e ? "auto" : "none",
            transition: "opacity 0.3s ease",
            zIndex: 999
          }
        }
      ),
      /* @__PURE__ */ a(
        "div",
        {
          style: {
            boxSizing: "border-box",
            position: "fixed",
            backgroundColor: k,
            boxShadow: `2px 0 8px ${T}`,
            transition: "transform 0.3s ease",
            zIndex: 1e3,
            transform: t === "left" ? e ? "translateX(0)" : "translateX(-100%)" : t === "right" ? e ? "translateX(0)" : "translateX(100%)" : t === "top" ? e ? "translateY(0)" : "translateY(-100%)" : e ? "translateY(0)" : "translateY(100%)",
            ...t === "left" && {
              top: 0,
              left: 0,
              width: s,
              height: "100svh",
              borderRight: `1px solid ${u}`
            },
            ...t === "right" && {
              top: 0,
              right: 0,
              width: s,
              height: "100svh",
              borderLeft: `1px solid ${u}`
            },
            ...t === "top" && {
              top: 0,
              left: 0,
              width: "100svw",
              height: l,
              borderBottom: `1px solid ${u}`
            },
            ...t === "bottom" && {
              bottom: 0,
              left: 0,
              width: "100svw",
              height: l,
              borderTop: `1px solid ${u}`
            },
            ...d
          },
          children: r
        }
      )
    ] });
  }
);
Ie.displayName = "Drawer";
const ze = i.memo(({ children: e, style: o, isOpen: r, onClose: t, maskClosable: n = !0 }) => {
  const { isDarkThemeMode: s } = C();
  return /* @__PURE__ */ a(de, { children: r && /* @__PURE__ */ a(
    E.div,
    {
      onClick: n ? t : void 0,
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.2 },
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100svw",
        height: "100svh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(4px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1e3
      },
      children: /* @__PURE__ */ a(
        E.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.95 },
          transition: { duration: 0.2, ease: "easeOut" },
          onClick: (l) => l.stopPropagation(),
          style: {
            backgroundColor: s ? S.darkMode : S.lightMode,
            border: `1px solid ${s ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}`,
            borderRadius: "8px",
            minWidth: "300px",
            maxWidth: "90%",
            maxHeight: "90%",
            padding: "24px 32px",
            boxShadow: `
                rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, 
                rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, 
                rgba(0, 0, 0, 0.12) 0px 1px 8px 0px
              `,
            overflow: "auto",
            ...o
          },
          children: e
        }
      )
    }
  ) });
});
ze.displayName = "Modal";
const $e = i.memo(({ position: e = "top-center", offset: o = 0, collapsable: r = !1 }) => {
  const { isDarkThemeMode: t } = C();
  return /* @__PURE__ */ a(
    he,
    {
      closeButton: !0,
      richColors: !0,
      invert: t,
      visibleToasts: 4,
      gap: 8,
      position: e,
      offset: o,
      mobileOffset: o / 2,
      expand: !r,
      icons: {
        success: /* @__PURE__ */ a(y, { icon: "solar:shield-check-line-duotone", color: "success" }),
        error: /* @__PURE__ */ a(y, { icon: "solar:shield-cross-line-duotone", color: "error" }),
        warning: /* @__PURE__ */ a(y, { icon: "solar:shield-warning-line-duotone", color: "warning" }),
        info: /* @__PURE__ */ a(y, { icon: "solar:info-circle-line-duotone", color: "info" })
      }
    }
  );
});
$e.displayName = "Notification";
function Oe(e) {
  const o = {
    description: e.description
  };
  return e.type === "success" ? N.success(e.title, o) : e.type === "error" ? N.error(e.title, o) : e.type === "warning" ? N.warning(e.title, o) : N.info(e.title, o);
}
const ne = i.memo(({ children: e, targetElementID: o }) => {
  const [r, t] = i.useState(null);
  return i.useEffect(() => {
    const n = document.getElementById(o);
    n && t(n);
  }, [o]), r ? pe(/* @__PURE__ */ a(X, { children: e }), r, o) : null;
});
ne.displayName = "PortalRender";
const je = {
  Render: ne
}, ie = i.memo(({ height: e = 8, color: o }) => {
  const r = ce(), { themeColor: t } = $(), n = i.useRef(null), [s, l] = i.useState(0);
  return i.useEffect(() => {
    const d = () => {
      if (n.current) {
        const c = n.current.offsetWidth, u = c * 0.3;
        l(c - u);
      }
    };
    return d(), window.addEventListener("resize", d), () => window.removeEventListener("resize", d);
  }, []), i.useEffect(() => {
    if (s === 0) return;
    (async () => {
      for (; ; )
        await r.start({ x: [0, s], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } }), await r.start({ x: [s, 0], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } });
    })();
  }, [r, s]), /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      style: {
        position: "relative",
        width: "100%",
        height: e,
        overflow: "hidden",
        backgroundColor: L(p.disabled).opacity,
        borderRadius: e / 2,
        boxShadow: "rgba(0, 0, 0, 0.14) 0px 6px 10px 0px"
      },
      children: /* @__PURE__ */ a(
        E.div,
        {
          animate: r,
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "50%",
            backgroundColor: o || t,
            borderRadius: e / 2
          }
        }
      )
    }
  );
});
ie.displayName = "Progress.LoadingBar";
const se = i.memo(({ height: e = 8, color: o }) => {
  const { scrollYProgress: r } = ue(), { themeColor: t } = $(), n = i.useMemo(() => L(o || t), [o, t]);
  return /* @__PURE__ */ a(
    E.div,
    {
      style: {
        scaleX: r,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        originX: 0,
        zIndex: 1e4,
        backgroundImage: `linear-gradient(to right, ${n.light}, ${n.origin}, ${n.opacity})`,
        height: e,
        borderRadius: "8px"
      }
    }
  );
});
se.displayName = "Progress.Scrollbar";
const Fe = {
  Scrollbar: se,
  LoadingBar: ie
};
function De() {
  const { themeColor: e } = $(), o = i.useMemo(() => L(e), [e]);
  i.useEffect(() => {
    const r = "theme-palette-style";
    let t = document.getElementById(r);
    const n = `
        /* 设置选中文本的样式 */
        ::selection {
          background-color: ${o.opacity};
          color: white;
        }
  
        /* 设置滚动条的样式 */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: ${o.origin};
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: ${o.dark};
        } 
        ::-webkit-scrollbar-track {
          background-color: rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          transition: opacity 0.5s ease-in-out;
        }
        html {
          scrollbar-color: ${o.origin} rgba(0, 0, 0, 0.1);
          scrollbar-width: thin;
        }
      `;
    return t || (t = document.createElement("style"), t.id = r, document.head.appendChild(t)), t.innerHTML = n, () => {
      t == null || t.remove();
    };
  }, [o]);
}
const Ne = i.memo(({ children: e, defaultThemeColor: o, defaultThemeMode: r }) => {
  const [t, n] = i.useState(() => ye() || r || fe()), [s, l] = i.useState(() => be() || o || B.JadeAnaconda);
  De();
  const d = i.useMemo(
    () => ({
      themeMode: t,
      isDarkThemeMode: t === h.Dark,
      setThemeMode: n,
      toggleThemeMode: () => n((c) => c === h.Dark ? h.Light : h.Dark),
      themeColor: s,
      setThemeColor: l
    }),
    [t, n, s, l]
  );
  return /* @__PURE__ */ a(Y, { value: d, children: e });
});
Ne.displayName = "ThemeProvider";
export {
  S as BackgroundColors,
  f as BorderColors,
  m as BreakPoint,
  w as BreakPointWidth,
  we as Button,
  V as ButtonColors,
  Me as Buttons,
  O as Card,
  Ae as Cards,
  p as Colors,
  ve as Container,
  Ie as Drawer,
  y as Icon,
  z as IconColors,
  ze as Modal,
  $e as Notification,
  je as Portal,
  Fe as Progress,
  x as ShadowColors,
  _ as Space,
  v as TextColors,
  B as ThemeColor,
  h as ThemeMode,
  Ne as ThemeProvider,
  R as Typography,
  g as TypographySize,
  L as getColors,
  fe as getSystemThemeMode,
  Oe as notify,
  Le as useHandler,
  xe as useThemeBreakpoint,
  $ as useThemeColor,
  C as useThemeMode
};
