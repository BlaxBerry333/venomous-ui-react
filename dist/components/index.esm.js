import { jsx as a, jsxs as v, Fragment as G } from "react/jsx-runtime";
import i from "react";
import { Icon as de } from "@iconify/react";
import { AnimatePresence as ce, motion as $, useAnimation as ue, useScroll as he } from "framer-motion";
import { Toaster as pe, toast as z } from "sonner";
import { createPortal as me } from "react-dom";
var m = /* @__PURE__ */ ((e) => (e.xs = "xs", e.sm = "sm", e.md = "md", e.lg = "lg", e.xl = "xl", e.xxl = "xxl", e))(m || {});
const T = {
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
}, M = {
  darkMode: "#181818",
  lightMode: "#ffffff"
}, E = {
  darkMode: "rgba(255, 255, 255, 0.1)",
  lightMode: "rgba(0, 0, 0, 0.1)"
}, I = {
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
}, S = {
  darkMode: "#cccccc",
  lightMode: "#212121",
  grey: "#666666",
  white: "#ffffff",
  link: "#1976d2",
  disabled: p.disabled,
  success: p.success,
  error: p.error,
  warning: p.warning
}, fe = {
  auto: "auto",
  // color: "inherit"
  white: "#ffffff",
  success: p.success,
  error: p.error,
  warning: p.warning,
  info: p.info
}, N = {
  auto: "auto",
  // color: "inherit"
  error: p.error
};
function ge(e) {
  return e = e.replace("#", ""), e.length === 3 && (e = e.split("").map((t) => t + t).join("")), `#${e}`;
}
function U(e) {
  e = e.replace("#", "");
  const t = parseInt(e, 16), r = t >> 16 & 255, o = t >> 8 & 255, n = t & 255;
  return { r, g: o, b: n };
}
function xe(e, t, r) {
  const o = (n) => {
    const s = n.toString(16);
    return s.length === 1 ? "0" + s : s;
  };
  return `#${o(e)}${o(t)}${o(r)}`;
}
function j(e, t) {
  const { r, g: o, b: n } = U(e), s = (l) => Math.min(255, Math.max(0, Math.round(l + t / 100 * 255)));
  return xe(s(r), s(o), s(n));
}
function b(e, t) {
  const r = ge(e), o = j(r, 25), n = j(r, -25), { r: s, g: l, b: c } = U(r), d = `rgba(${s}, ${l}, ${c}, ${(t == null ? void 0 : t.opacity) || 0.25})`;
  return {
    origin: r,
    light: o,
    dark: n,
    opacity: d
  };
}
var f = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e))(f || {});
function be() {
  return typeof window < "u" ? window.matchMedia("(prefers-color-scheme: dark)").matches : !1;
}
function Le() {
  return be() ? f.Dark : f.Light;
}
const y = {
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
}, x = i.memo(({ style: e, icon: t, width: r = 20, color: o = "auto", ...n }) => {
  const s = i.useMemo(() => fe[o], [o]);
  return /* @__PURE__ */ a(
    de,
    {
      ssr: !0,
      icon: t,
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
x.displayName = "Icon";
const Y = i.memo(() => (ye(), null));
Y.displayName = "Theme.InjectToHTML";
function ye() {
  const { themeColor: e } = g.useThemeColor(), t = i.useMemo(() => b(e), [e]);
  i.useEffect(() => {
    if (typeof window > "u")
      return;
    const r = "theme-palette-style";
    let o = document.getElementById(r);
    o || (o = document.createElement("style"), o.id = r, document.head.appendChild(o));
    const n = `
      /* ==============================
         Global Theme Palette Styles
         ============================== */

      :root {
        --venomous-ui--theme-origin: ${t.origin};
        --venomous-ui--theme-dark: ${t.dark};
        --venomous-ui--theme-light: ${t.light};
        --venomous-ui--theme-opacity: ${t.opacity};
      }

      /* Selection style */
      ::selection {
        background-color: ${t.opacity};
        color: white;
      }

      /* Scrollbar style (Webkit) */
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: ${t.origin};
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background-color: ${t.dark};
      }
      ::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        transition: opacity 0.5s ease-in-out;
      }

      /* Scrollbar style (Firefox) */
      html {
        scrollbar-color: ${t.origin} rgba(0, 0, 0, 0.1);
        scrollbar-width: thin;
      }
    `;
    o.innerHTML = n;
  }, [t]);
}
const D = i.createContext(void 0), Me = f.Light, Ce = B.JadeAnaconda, ke = {
  THEME_MODE: "VENOMOUS_UI__THEME_MODE",
  THEME_COLOR: "VENOMOUS_UI__THEME_COLOR"
};
function Te({
  children: e,
  defaultTheme: t = Me,
  defaultThemeColor: r = Ce,
  storageKey: o = ke
}) {
  const [n, s] = i.useState(!1), [l, c] = i.useState(t), [d, u] = i.useState(r), C = i.useCallback(
    (h) => {
      h !== l && c(h);
    },
    [l]
  ), k = i.useCallback(() => {
    c((h) => h === f.Dark ? f.Light : f.Dark);
  }, []), L = i.useCallback(() => {
    c(t);
  }, [t]), F = i.useCallback(
    (h) => {
      h !== d && u(h);
    },
    [d]
  ), A = i.useCallback(() => {
    u(r);
  }, [r]);
  i.useEffect(() => {
    if (typeof window < "u") {
      s(!0);
      const h = localStorage.getItem(o.THEME_MODE);
      h && Object.values(f).includes(h) && c(h);
      const H = localStorage.getItem(o.THEME_COLOR);
      H && Object.values(B).includes(H) && u(H);
    }
  }, [o]), i.useEffect(() => {
    typeof window < "u" && n && (localStorage.setItem(o.THEME_MODE, l), localStorage.setItem(o.THEME_COLOR, d));
  }, [n, o, l, d]);
  const le = i.useMemo(
    () => ({
      themeMode: l,
      setThemeMode: C,
      toggleThemeMode: k,
      resetThemeMode: L,
      isDarkThemeMode: l === f.Dark,
      themeColor: d,
      setThemeColor: F,
      resetThemeColor: A
    }),
    [l, C, k, L, d, F, A]
  );
  return /* @__PURE__ */ a(D.Provider, { value: le, children: e });
}
function we() {
  const e = i.useContext(D);
  if (e === void 0)
    throw new Error("useThemeColor must be used within a ThemeModeProvider");
  return {
    themeColor: e.themeColor,
    setThemeColor: e.setThemeColor,
    resetThemeColor: e.resetThemeColor
  };
}
function V() {
  const e = i.useContext(D);
  if (e === void 0)
    throw new Error("useThemeMode must be used within a ThemeModeProvider");
  return {
    themeMode: e.themeMode,
    setThemeMode: e.setThemeMode,
    toggleThemeMode: e.toggleThemeMode,
    resetThemeMode: e.resetThemeMode,
    isDarkThemeMode: e.isDarkThemeMode
  };
}
const g = {
  Provider: Te,
  InjectToHTML: Y,
  useThemeMode: V,
  useThemeColor: we
};
function q({
  isLoading: e,
  isDisabled: t,
  color: r = "auto",
  variant: o
}) {
  const { isDarkThemeMode: n } = g.useThemeMode(), { themeColor: s } = g.useThemeColor(), l = i.useMemo(() => o === "contained" ? r !== "auto" ? N[r] : s : o === "ghost" ? "transparent" : M[n ? "darkMode" : "lightMode"], [o, r, s, n]), c = i.useMemo(() => o === "outline" ? r !== "auto" ? N[r] : s : b(E[n ? "darkMode" : "lightMode"]).opacity, [o, r, s, n]), d = i.useMemo(() => {
    if (o === "contained") return S.white;
    if (o === "outline") return r !== "auto" ? N[r] : s;
    if (o === "ghost") return S[n ? "darkMode" : "lightMode"];
  }, [o, r, s, n]);
  return {
    buttonStyles: i.useMemo(
      () => ({
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        width: "auto",
        minWidth: "40px",
        height: "40px",
        padding: "0px 16px",
        textTransform: "capitalize",
        fontSize: y.text,
        fontWeight: "bold",
        borderRadius: "8px",
        cursor: e ? "wait" : t ? "not-allowed" : "pointer",
        boxShadow: I[n ? "darkMode" : "lightMode"],
        borderColor: e || t ? b(c).opacity : c,
        backgroundColor: e || t ? b(l).opacity : l,
        color: e || t ? b(d).opacity : d
      }),
      [e, t, c, l, d, n]
    )
  };
}
const J = i.memo(
  ({
    type: e = "button",
    style: t,
    variant: r = "contained",
    color: o = "auto",
    isLoading: n,
    isDisabled: s,
    icon: l,
    iconWidth: c = 20,
    ...d
  }) => {
    const { buttonStyles: u } = q({
      isLoading: n,
      isDisabled: s,
      variant: r,
      color: o
    });
    return /* @__PURE__ */ a(
      "button",
      {
        type: e,
        disabled: n || s,
        style: {
          ...u,
          padding: 0,
          ...t
        },
        ...d,
        children: /* @__PURE__ */ a(x, { icon: n ? "eos-icons:loading" : l, width: c })
      }
    );
  }
);
J.displayName = "Buttons.Icon";
const Q = i.memo(({ style: e, text: t, ...r }) => /* @__PURE__ */ a(
  "code",
  {
    style: {
      color: "#B71D18",
      backgroundColor: "#E7E9EB",
      border: "1px solid #CCCCCC",
      borderRadius: "4px",
      padding: "2px 4px",
      fontSize: y.small,
      fontWeight: 600,
      ...e
    },
    ...r,
    children: t
  }
));
Q.displayName = "Typography.Code";
const O = "lightMode";
function P({ color: e = O, ellipsis: t = 0 }) {
  const { isDarkThemeMode: r } = g.useThemeMode(), o = i.useMemo(() => r && e === "lightMode" ? S.darkMode : S[e], [e, r]), n = i.useMemo(() => t ? {
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: t,
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  } : {}, [t]);
  return {
    fontColor: o,
    ellipsisStyles: n
  };
}
const Z = i.memo(
  ({ children: e, style: t, color: r = O, ellipsis: o = 0, ...n }) => {
    const { fontColor: s, ellipsisStyles: l } = P({ color: r, ellipsis: o });
    return /* @__PURE__ */ a(
      "p",
      {
        style: {
          boxSizing: "border-box",
          margin: 0,
          width: "100%",
          fontSize: y.text,
          lineHeight: 1.5,
          color: s,
          ...l,
          ...t
        },
        ...n,
        children: e
      }
    );
  }
);
Z.displayName = "Typography.Paragraph";
const K = i.memo(
  ({ style: e, text: t, as: r = "span", color: o = O, ...n }) => {
    const { fontColor: s } = P({ color: o });
    return r === "strong" ? /* @__PURE__ */ a(
      "strong",
      {
        style: {
          fontSize: y.text,
          fontWeight: "bold",
          color: s,
          ...e
        },
        ...n,
        children: t
      }
    ) : r === "small" ? /* @__PURE__ */ a(
      "small",
      {
        style: {
          fontSize: y.small,
          color: s,
          ...e
        },
        ...n,
        children: t
      }
    ) : /* @__PURE__ */ a(
      "span",
      {
        style: {
          fontSize: y.text,
          fontWeight: "normal",
          color: s,
          ...e
        },
        ...n,
        children: t
      }
    );
  }
);
K.displayName = "Typography.Text";
const X = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, ee = i.memo(
  ({ text: e, as: t = X.h4, color: r = O, ellipsis: o = 0, style: n, ...s }) => {
    const l = i.useMemo(() => X[t], [t]), c = i.useMemo(() => y[t], [t]), { fontColor: d, ellipsisStyles: u } = P({ color: r, ellipsis: o });
    return /* @__PURE__ */ a(
      l,
      {
        style: {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
          width: "100%",
          fontSize: c,
          fontFamily: "inherit",
          fontWeight: "bold",
          lineHeight: "inherit",
          textAlign: "inherit",
          color: d,
          ...u,
          ...n
        },
        ...s,
        children: e
      }
    );
  }
);
ee.displayName = "Typography.Title";
const R = {
  Title: ee,
  Text: K,
  Code: Q,
  Paragraph: Z
}, Se = i.memo(
  ({
    type: e = "button",
    style: t,
    text: r,
    variant: o = "contained",
    color: n = "auto",
    isLoading: s,
    isDisabled: l,
    icon: c,
    iconPosition: d = "start",
    iconWidth: u = 20,
    ...C
  }) => {
    const { buttonStyles: k } = q({
      isLoading: s,
      isDisabled: l,
      variant: o,
      color: n
    });
    return /* @__PURE__ */ v(
      "button",
      {
        type: e,
        disabled: s || l,
        style: {
          flexDirection: d === "start" ? "row" : "row-reverse",
          ...k,
          ...t
        },
        ...C,
        children: [
          c && /* @__PURE__ */ a(
            x,
            {
              icon: c,
              width: u,
              style: {
                marginLeft: d === "start" ? "0px" : "8px",
                marginRight: d === "end" ? "0px" : "8px"
              }
            }
          ),
          /* @__PURE__ */ a(R.Text, { text: r, style: { color: "inherit" } }),
          /* @__PURE__ */ a(
            "div",
            {
              style: {
                display: s ? "flex" : "none",
                borderRadius: "4px",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)"
              },
              children: /* @__PURE__ */ a(x, { icon: "eos-icons:loading", width: 24 })
            }
          )
        ]
      }
    );
  }
);
Se.displayName = "Button";
const ve = {
  Icon: J
}, te = i.memo(({ children: e, style: t, row: r = !0, column: o = !1, gap: n = "8px", ...s }) => /* @__PURE__ */ a(
  "div",
  {
    style: {
      boxSizing: "border-box",
      display: "flex",
      width: "100%",
      flexDirection: o ? "column" : "row",
      alignItems: r ? "flex-start" : t == null ? void 0 : t.alignItems,
      ...Array.isArray(n) ? { rowGap: n[0], columnGap: n[1] } : { gap: n },
      position: "relative",
      ...t
    },
    ...s,
    children: e
  }
));
te.displayName = "Space.Flex";
function Fe() {
  const [e, t] = i.useState(!1), r = i.useCallback(() => t(!0), []), o = i.useCallback(() => t(!1), []), n = i.useCallback(() => t((s) => !s), []);
  return {
    isOpen: e,
    setIsOpen: t,
    open: r,
    close: o,
    toggle: n
  };
}
function Ee() {
  const [e, t] = i.useState(m.xs);
  return i.useEffect(() => {
    const r = () => {
      const n = window.innerWidth;
      return n >= T.xxl ? m.xxl : n >= T.xl ? m.xl : n >= T.lg ? m.lg : n >= T.md ? m.md : n >= T.sm ? m.sm : m.xs;
    }, o = () => {
      t(r());
    };
    return o(), window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, []), {
    screenSize: e
  };
}
const oe = i.memo(({ children: e, style: t, columns: r = 1, spacing: o = 16, ...n }) => {
  const { screenSize: s } = Ee(), l = i.useMemo(() => Ie(r, s), [r, s]), c = i.useMemo(() => ze(o, s), [o, s]);
  return /* @__PURE__ */ a(
    "div",
    {
      style: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: `repeat(${l}, 1fr)`,
        gap: `${c}px`,
        ...t
      },
      ...n,
      children: e
    }
  );
});
oe.displayName = "Space.Grid";
const w = Object.keys(m);
function Ie(e = 1, t) {
  if (typeof e == "number")
    return e;
  const r = w.indexOf(t);
  for (let o = r; o < w.length; o++) {
    const n = e[w[o]];
    if (n !== void 0) return n;
  }
  return 1;
}
function ze(e = 16, t) {
  if (typeof e == "number")
    return e;
  const r = w.indexOf(t);
  for (let o = r; o < w.length; o++) {
    const n = e[w[o]];
    if (n !== void 0) return n;
  }
  return 16;
}
const _ = {
  Flex: te,
  Grid: oe
}, W = i.memo(
  ({ children: e, style: t, isTransparent: r = !1, isFrostedGlass: o = !1, isOutline: n = !1, ...s }) => {
    const { isDarkThemeMode: l } = g.useThemeMode(), c = l ? E.darkMode : E.lightMode, d = l ? M.darkMode : M.lightMode, u = n ? "none" : l ? I.darkMode : I.lightMode;
    return /* @__PURE__ */ a(
      "div",
      {
        style: {
          boxSizing: "border-box",
          borderRadius: "8px",
          padding: "16px",
          boxShadow: u,
          backgroundColor: r ? "transparent" : d,
          backdropFilter: o ? "blur(8px) brightness(0.8)" : "none",
          WebkitBackdropFilter: o ? "blur(8px) brightness(0.8)" : "none",
          border: `1px solid ${c}`,
          ...t
        },
        ...s,
        children: e
      }
    );
  }
);
W.displayName = "Card";
const re = i.memo(({ children: e, height: t = 300, width: r = 200, title: o, coverImage: n }) => /* @__PURE__ */ v(
  W,
  {
    style: {
      height: t,
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
          children: o && /* @__PURE__ */ a(
            R.Title,
            {
              text: o,
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
re.displayName = "Cards.Book";
const ne = i.memo(({ children: e, title: t = "", description: r = "" }) => /* @__PURE__ */ v(W, { style: { position: "relative" }, children: [
  (t || r) && /* @__PURE__ */ v(_.Flex, { column: !0, gap: 2, style: { paddingRight: "48px" }, children: [
    /* @__PURE__ */ a(R.Title, { as: "h6", text: t, ellipsis: 1 }),
    /* @__PURE__ */ a(R.Paragraph, { ellipsis: 3, color: "grey", children: r })
  ] }),
  /* @__PURE__ */ a(
    ve.Icon,
    {
      icon: "solar:hamburger-menu-line-duotone",
      variant: "ghost",
      style: { position: "absolute", top: "4px", right: "4px" }
    }
  ),
  e && /* @__PURE__ */ a(_.Flex, { column: !0, children: e })
] }));
ne.displayName = "Cards.Product";
const Ae = {
  Book: re,
  Product: ne
}, $e = i.memo(({ children: e, breakpoint: t = "lg", style: r, ...o }) => {
  const n = i.useMemo(() => T[t], [t]);
  return /* @__PURE__ */ a(
    "div",
    {
      style: {
        margin: "0 auto",
        width: "100%",
        maxWidth: n,
        ...r
      },
      ...o,
      children: e
    }
  );
});
$e.displayName = "Container";
const Re = i.memo(
  ({ isOpen: e, onClose: t, children: r, position: o = "left", maskClosable: n = !0, width: s = 300, height: l = 300, style: c }) => {
    const { isDarkThemeMode: d } = g.useThemeMode(), u = d ? E.darkMode : E.lightMode, C = d ? M.darkMode : M.lightMode, k = d ? I.darkMode : I.lightMode;
    return /* @__PURE__ */ v(G, { children: [
      /* @__PURE__ */ a(
        "div",
        {
          onClick: n ? t : void 0,
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
            backgroundColor: C,
            boxShadow: `2px 0 8px ${k}`,
            transition: "transform 0.3s ease",
            zIndex: 1e3,
            transform: o === "left" ? e ? "translateX(0)" : "translateX(-100%)" : o === "right" ? e ? "translateX(0)" : "translateX(100%)" : o === "top" ? e ? "translateY(0)" : "translateY(-100%)" : e ? "translateY(0)" : "translateY(100%)",
            ...o === "left" && {
              top: 0,
              left: 0,
              width: s,
              height: "100svh",
              borderRight: `1px solid ${u}`
            },
            ...o === "right" && {
              top: 0,
              right: 0,
              width: s,
              height: "100svh",
              borderLeft: `1px solid ${u}`
            },
            ...o === "top" && {
              top: 0,
              left: 0,
              width: "100svw",
              height: l,
              borderBottom: `1px solid ${u}`
            },
            ...o === "bottom" && {
              bottom: 0,
              left: 0,
              width: "100svw",
              height: l,
              borderTop: `1px solid ${u}`
            },
            ...c
          },
          children: r
        }
      )
    ] });
  }
);
Re.displayName = "Drawer";
const Oe = i.memo(({ children: e, style: t, isOpen: r, onClose: o, maskClosable: n = !0 }) => {
  const { isDarkThemeMode: s } = V();
  return /* @__PURE__ */ a(ce, { children: r && /* @__PURE__ */ a(
    $.div,
    {
      onClick: n ? o : void 0,
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
        $.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.95 },
          transition: { duration: 0.2, ease: "easeOut" },
          onClick: (l) => l.stopPropagation(),
          style: {
            backgroundColor: s ? M.darkMode : M.lightMode,
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
            ...t
          },
          children: e
        }
      )
    }
  ) });
});
Oe.displayName = "Modal";
const He = i.memo(({ position: e = "top-center", offset: t = 0, collapsable: r = !1 }) => {
  const { isDarkThemeMode: o } = g.useThemeMode();
  return /* @__PURE__ */ a(
    pe,
    {
      closeButton: !0,
      richColors: !0,
      invert: o,
      visibleToasts: 4,
      gap: 8,
      position: e,
      offset: t,
      mobileOffset: t / 2,
      expand: !r,
      icons: {
        success: /* @__PURE__ */ a(x, { icon: "solar:shield-check-line-duotone", color: "success" }),
        error: /* @__PURE__ */ a(x, { icon: "solar:shield-cross-line-duotone", color: "error" }),
        warning: /* @__PURE__ */ a(x, { icon: "solar:shield-warning-line-duotone", color: "warning" }),
        info: /* @__PURE__ */ a(x, { icon: "solar:info-circle-line-duotone", color: "info" })
      }
    }
  );
});
He.displayName = "Notification";
function je(e) {
  const t = {
    description: e.description
  };
  return e.type === "success" ? z.success(e.title, t) : e.type === "error" ? z.error(e.title, t) : e.type === "warning" ? z.warning(e.title, t) : z.info(e.title, t);
}
const ie = i.memo(({ children: e, targetElementID: t }) => {
  const [r, o] = i.useState(null);
  return i.useEffect(() => {
    const n = document.getElementById(t);
    n && o(n);
  }, [t]), r ? me(/* @__PURE__ */ a(G, { children: e }), r, t) : null;
});
ie.displayName = "PortalRender";
const Xe = {
  Render: ie
}, se = i.memo(({ height: e = 8, color: t }) => {
  const r = ue(), { themeColor: o } = g.useThemeColor(), n = i.useRef(null), [s, l] = i.useState(0);
  return i.useEffect(() => {
    const c = () => {
      if (n.current) {
        const d = n.current.offsetWidth, u = d * 0.3;
        l(d - u);
      }
    };
    return c(), window.addEventListener("resize", c), () => window.removeEventListener("resize", c);
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
        backgroundColor: b(p.disabled).opacity,
        borderRadius: e / 2,
        boxShadow: "rgba(0, 0, 0, 0.14) 0px 6px 10px 0px"
      },
      children: /* @__PURE__ */ a(
        $.div,
        {
          animate: r,
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "50%",
            backgroundColor: t || o,
            borderRadius: e / 2
          }
        }
      )
    }
  );
});
se.displayName = "Progress.LoadingBar";
const ae = i.memo(({ height: e = 8, color: t }) => {
  const { scrollYProgress: r } = he(), { themeColor: o } = g.useThemeColor(), n = i.useMemo(() => b(t || o), [t, o]);
  return /* @__PURE__ */ a(
    $.div,
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
ae.displayName = "Progress.Scrollbar";
const Ge = {
  Scrollbar: ae,
  LoadingBar: se
};
export {
  M as BackgroundColors,
  E as BorderColors,
  m as BreakPoint,
  T as BreakPointWidth,
  Se as Button,
  N as ButtonColors,
  ve as Buttons,
  W as Card,
  Ae as Cards,
  p as Colors,
  $e as Container,
  Re as Drawer,
  x as Icon,
  fe as IconColors,
  Oe as Modal,
  He as Notification,
  Xe as Portal,
  Ge as Progress,
  I as ShadowColors,
  _ as Space,
  S as TextColors,
  g as Theme,
  B as ThemeColor,
  f as ThemeMode,
  R as Typography,
  y as TypographySize,
  b as getColors,
  Le as getSystemThemeMode,
  je as notify,
  Fe as useHandler,
  Ee as useThemeBreakpoint
};
