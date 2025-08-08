import { jsx as a, jsxs as y, Fragment as te } from "react/jsx-runtime";
import i from "react";
import { Icon as ht } from "@iconify/react";
import { AnimatePresence as j, motion as R, useAnimation as mt, useScroll as ft } from "framer-motion";
import { Toaster as gt, toast as Q } from "sonner";
import { createPortal as xt } from "react-dom";
var w = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e))(w || {});
const U = {
  success: "#4caf50",
  error: "#f44336",
  warning: "#ff9800",
  info: "#2196f3"
}, C = {
  [w.Dark]: {
    primary: "#ffffff",
    // 主要文本
    secondary: "#cccccc",
    // 次要文本
    tertiary: "#999999",
    // 三级文本
    quaternary: "#666666",
    // 最弱文本
    disabled: "#4a4a4a"
    // 禁用文本
  },
  [w.Light]: {
    primary: "#212121",
    // 主要文本
    secondary: "#424242",
    // 次要文本
    tertiary: "#616161",
    // 三级文本
    quaternary: "#9e9e9e",
    // 最弱文本
    disabled: "#bdbdbd"
    // 禁用文本
  }
}, N = {
  [w.Dark]: {
    primary: "#181818",
    // 主背景
    secondary: "#363636ff"
    // 卡片/面板背景
  },
  [w.Light]: {
    primary: "#ffffff",
    // 主背景
    secondary: "#f8f9fa"
    // 卡片/面板背景
  }
}, A = {
  [w.Dark]: {
    primary: "rgba(255, 255, 255, 0.55)",
    secondary: "rgba(255, 255, 255, 0.25)",
    tertiary: "rgba(255, 255, 255, 0.15)",
    quaternary: "rgba(255, 255, 255, 0.05)"
  },
  [w.Light]: {
    primary: "rgba(0, 0, 0, 0.55)",
    secondary: "rgba(0, 0, 0, 0.25)",
    tertiary: "rgba(0, 0, 0, 0.15)",
    quaternary: "rgba(0, 0, 0, 0.05)"
  }
}, G = {
  [w.Dark]: {
    // 卡片
    primary: `
      0px 0px 4px 0px rgba(255, 255, 255, 0.7),
      0px 0px 2px -1px rgba(255, 255, 255, 0.7)
    `,
    // 按钮
    secondary: `
      0px 0px 4px 0px rgba(255, 255, 255, 0.4)
    `,
    // 菜单、小组件
    tertiary: `
      0px 0px 4px 0px rgba(255, 255, 255, 0.2)
    `,
    // 内阴影
    inset: `
      inset 0px 2px 4px 0px rgba(255, 255, 255, 0.7)
    `
  },
  [w.Light]: {
    // 卡片
    primary: `
      0px 0px 4px 0px rgba(0, 0, 0, 0.4),
      0px 0px 2px -1px rgba(0, 0, 0, 0.25)
    `,
    // 按钮
    secondary: `
      0px 0px 4px 0px rgba(0, 0, 0, 0.4)
    `,
    // 菜单、小组件
    tertiary: `
      0px 0px 4px 0px rgba(0, 0, 0, 0.2)
    `,
    // 内阴影
    inset: `
      inset 0px 2px 4px 0px rgba(0, 0, 0, 0.3)
    `
  }
};
var T = /* @__PURE__ */ ((e) => (e.xs = "xs", e.sm = "sm", e.md = "md", e.lg = "lg", e.xl = "xl", e.xxl = "xxl", e))(T || {});
const D = {
  xs: 444,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
  xxl: 2560
};
var v = /* @__PURE__ */ ((e) => (e.RubyCopperhead = "#DC2626", e.GarnetViper = "#B91C1C", e.BloodstoneAdder = "#7F1D1D", e.TopazCoral = "#EA580C", e.AmberRattlesnake = "#F59E0B", e.GoldenLanceHead = "#FBBF24", e.TopazMamushi = "#FACC15", e.EmeraldMamba = "#059669", e.MalachitePython = "#10B981", e.JadeBoomslang = "#22C55E", e.PeridotGaboonViper = "#84CC16", e.TurquoiseFerDeLance = "#06B6D4", e.SapphireCobra = "#2563EB", e.LapisLazuliSeaSnake = "#1D4ED8", e.AmethystAsp = "#7C3AED", e.AlexandriteAnaconda = "#7E22CE", e.FluoriteElapid = "#A855F7", e.TourmalineStiletto = "#DB2777", e.RoseQuartzDeathAdder = "#EC4899", e.MorganiteCoralSnake = "#F472B6", e.GraphitePuffAdder = "#1F2937", e.ObsidianBlackMamba = "#374151", e.HematiteHognose = "#6B7280", e.SmokyQuartzSandViper = "#9CA3AF", e))(v || {}), K = /* @__PURE__ */ ((e) => (e.h1 = "h1", e.h2 = "h2", e.h3 = "h3", e.h4 = "h4", e.h5 = "h5", e.h6 = "h6", e.text = "text", e.strong = "strong", e.small = "small", e))(K || {});
const W = {
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
  strong: "1rem",
  // 16px
  small: "0.75rem"
  // 14px
}, to = (e) => ({
  background: N[e],
  border: A[e],
  text: C[e]
});
function yt() {
  return typeof window < "u" ? window.matchMedia("(prefers-color-scheme: dark)").matches : !1;
}
function oo() {
  return yt() ? w.Dark : w.Light;
}
function le(e) {
  return e = e.replace("#", ""), e.length === 3 && (e = e.split("").map((t) => t + t).join("")), `#${e}`;
}
function Me(e) {
  e = e.replace("#", "");
  const t = parseInt(e, 16), r = t >> 16 & 255, o = t >> 8 & 255, n = t & 255;
  return { r, g: o, b: n };
}
function bt(e, t, r) {
  const o = (n) => {
    const s = n.toString(16);
    return s.length === 1 ? "0" + s : s;
  };
  return `#${o(e)}${o(t)}${o(r)}`;
}
function ve(e) {
  const { r: t, g: r, b: o } = Me(le(e)), n = t / 255, s = r / 255, l = o / 255, c = Math.max(n, s, l), d = Math.min(n, s, l), u = c - d;
  let h = 0;
  u !== 0 && (c === n ? h = (s - l) / u % 6 : c === s ? h = (l - n) / u + 2 : h = (n - s) / u + 4, h *= 60, h < 0 && (h += 360));
  const p = (c + d) / 2, m = u === 0 ? 0 : u / (1 - Math.abs(2 * p - 1));
  return { h, s: m, l: p };
}
function Ce(e, t, r) {
  const o = (1 - Math.abs(2 * r - 1)) * t, n = o * (1 - Math.abs(e / 60 % 2 - 1)), s = r - o / 2;
  let l = 0, c = 0, d = 0;
  return e >= 0 && e < 60 ? [l, c, d] = [o, n, 0] : e < 120 ? [l, c, d] = [n, o, 0] : e < 180 ? [l, c, d] = [0, o, n] : e < 240 ? [l, c, d] = [0, n, o] : e < 300 ? [l, c, d] = [n, 0, o] : [l, c, d] = [o, 0, n], bt(Math.round((l + s) * 255), Math.round((c + s) * 255), Math.round((d + s) * 255));
}
function kt(e, t) {
  const { h: r, s: o, l: n } = ve(e);
  return Ce(r, o, Math.max(0, n - t));
}
function oe(e, t) {
  const { h: r, s: o, l: n } = ve(e);
  return Ce(r, o, Math.min(1, n + t));
}
function V(e, t) {
  const { r, g: o, b: n } = Me(le(e));
  t > 1 && (t = 1), t < 0 && (t = 0);
  const s = Math.min(1, Math.max(0, t));
  return `rgba(${r}, ${o}, ${n}, ${s})`;
}
const Se = i.memo(() => (Mt(), null));
Se.displayName = "Theme.InjectToHTML";
function Mt() {
  const { themeColor: e } = M.useThemeColor(), t = i.useMemo(
    () => ({
      light: oe(e, 0.2),
      dark: kt(e, 0.8),
      origin: le(e),
      opacity: V(e, 0.6)
    }),
    [e]
  );
  i.useInsertionEffect(() => {
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
const ce = i.createContext(void 0), vt = w.Light, Ct = v.EmeraldMamba, St = {
  THEME_MODE: "VENOMOUS_UI__THEME_MODE",
  THEME_COLOR: "VENOMOUS_UI__THEME_COLOR"
};
function Tt({
  children: e,
  defaultThemeMode: t = vt,
  defaultThemeColor: r = Ct,
  storageKey: o = St
}) {
  const [n, s] = i.useState(!1);
  i.useEffect(() => {
    s(!0);
  }, []);
  const [l, c] = i.useState(t), [d, u] = i.useState(r), h = i.useCallback((g) => {
    c(g);
  }, []), p = i.useCallback(() => {
    c((g) => g === w.Dark ? w.Light : w.Dark);
  }, []), m = i.useCallback(() => {
    c(t);
  }, [t]), f = i.useCallback((g) => {
    u(g);
  }, []), x = i.useCallback(() => {
    u(r);
  }, [r]);
  i.useEffect(() => {
    if (n) {
      const g = localStorage.getItem(o.THEME_MODE);
      g && Object.values(w).includes(g) && c(g);
      const k = localStorage.getItem(o.THEME_COLOR);
      k && Object.values(v).includes(k) && u(k);
    }
  }, [n, o.THEME_COLOR, o.THEME_MODE]), i.useEffect(() => {
    n && (localStorage.setItem(o.THEME_MODE, l), localStorage.setItem(o.THEME_COLOR, d));
  }, [n, o.THEME_MODE, o.THEME_COLOR, l, d]);
  const b = i.useMemo(
    () => ({
      themeMode: l,
      setThemeMode: h,
      toggleThemeMode: p,
      resetThemeMode: m,
      isDarkThemeMode: l === w.Dark,
      themeColor: d,
      setThemeColor: f,
      resetThemeColor: x
    }),
    [l, h, p, m, d, f, x]
  );
  return /* @__PURE__ */ a(ce.Provider, { value: b, children: e });
}
const me = new Map(
  Object.values(T).map((e, t) => [e, t])
);
function wt() {
  const [e, t] = i.useState(!1), [r, o] = i.useState(() => Ft()), [n, s] = i.useState(!1), l = i.useRef(null);
  i.useEffect(() => {
    const d = () => {
      const p = window.innerWidth;
      return p >= D.xxl ? T.xxl : p >= D.xl ? T.xl : p >= D.lg ? T.lg : p >= D.md ? T.md : p >= D.sm ? T.sm : T.xs;
    }, u = () => {
      l.current && clearTimeout(l.current), l.current = setTimeout(() => {
        const p = d();
        o((m) => m !== p ? p : m);
      }, 100);
    }, h = d();
    return o(h), s(!0), t(!0), window.addEventListener("resize", u, { passive: !0 }), () => {
      l.current && (clearTimeout(l.current), l.current = null), window.removeEventListener("resize", u);
    };
  }, []);
  const c = i.useCallback(
    (d) => {
      if (!e) return !1;
      const u = me.get(r), h = me.get(d);
      return u === void 0 || h === void 0 ? !1 : u >= h;
    },
    [r, e]
  );
  return i.useMemo(
    () => ({
      screenSize: r,
      isLargerThanOrEqual: c,
      isMounted: e,
      isSSRHydrated: e && n
      // 是否已完成水合且获取真实尺寸
    }),
    [r, e, n, c]
  );
}
function Ft() {
  if (typeof window > "u")
    return T.xs;
  const e = navigator.userAgent, t = /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(e), r = /iPad|Android(?!.*Mobile)|Kindle|Silk/i.test(e);
  return t && !r ? T.xs : r ? T.md : T.lg;
}
function It() {
  const e = i.useContext(ce);
  if (e === void 0)
    throw new Error("useThemeColor must be used within a ThemeModeProvider");
  return {
    themeColor: e.themeColor,
    setThemeColor: e.setThemeColor,
    resetThemeColor: e.resetThemeColor
  };
}
function Et() {
  const e = i.useContext(ce);
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
const M = {
  Provider: Tt,
  InjectToHTML: Se,
  useThemeMode: Et,
  useThemeColor: It,
  useThemeBreakpoint: wt
}, F = i.memo(({ style: e, icon: t, width: r = 20, semanticColor: o, ...n }) => {
  const { themeMode: s } = M.useThemeMode(), l = i.useMemo(() => o ? U[o] : C[s].primary, [s, o]);
  return /* @__PURE__ */ a(
    ht,
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
        color: l,
        ...e
      },
      ...n
    }
  );
});
F.displayName = "Icon";
const z = {
  contained: "contained",
  outlined: "outlined",
  ghost: "ghost"
};
function Te({
  isLoading: e,
  isDisabled: t,
  variant: r,
  semanticColor: o
}) {
  const { themeColor: n } = M.useThemeColor(), { themeMode: s } = M.useThemeMode(), l = i.useMemo(() => {
    let p = "";
    if (e || t)
      return p = N[s].secondary, p;
    switch (r) {
      case z.contained:
        p = o ? U[o] : n;
        break;
      case z.outlined:
        p = N[s].secondary;
        break;
      case z.ghost:
      default:
        p = "transparent";
        break;
    }
    return p;
  }, [r, n, s, e, t, o]), c = i.useMemo(() => {
    let p = "";
    if (e || t)
      return p = A[s].secondary, p;
    switch (r) {
      case z.contained:
        p = o ? oe(U[o], 0.25) : V(n, 0.5);
        break;
      case z.outlined:
        p = o ? U[o] : n;
        break;
      case z.ghost:
        p = A[s].secondary;
        break;
      default:
        p = "transparent";
        break;
    }
    return p;
  }, [r, n, s, e, t, o]), d = i.useMemo(() => {
    let p = "";
    if (e || t)
      return p = C[s].disabled, p;
    switch (r) {
      case z.contained:
        p = "#ffffff";
        break;
      case z.outlined:
        p = o ? U[o] : n;
        break;
      case z.ghost:
      default:
        p = C[s].primary;
        break;
    }
    return p;
  }, [r, n, s, e, t, o]), u = i.useMemo(() => {
    switch (r) {
      case z.ghost:
        return "none";
      case z.contained:
      case z.outlined:
      default:
        return G[s].secondary;
    }
  }, [r, n, s]);
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
        fontSize: W.text,
        fontWeight: "bold",
        cursor: e ? "wait" : t ? "not-allowed" : "pointer",
        borderRadius: "8px",
        borderWidth: 2,
        borderColor: c,
        boxShadow: u,
        backgroundColor: l,
        color: d
      }),
      [e, t, c, l, d, u]
    )
  };
}
const we = i.memo(
  ({
    type: e = "button",
    style: t,
    variant: r = "contained",
    isLoading: o,
    isDisabled: n,
    icon: s,
    iconWidth: l = 20,
    semanticColor: c,
    ...d
  }) => {
    const { buttonStyles: u } = Te({
      isLoading: o,
      isDisabled: n || d.disabled,
      variant: r,
      semanticColor: c
    });
    return /* @__PURE__ */ a(
      "button",
      {
        type: e,
        disabled: o || n,
        style: {
          WebkitTapHighlightColor: "transparent",
          ...u,
          padding: 0,
          ...t
        },
        ...d,
        children: /* @__PURE__ */ a(
          F,
          {
            icon: o ? "eos-icons:loading" : s,
            width: l,
            style: {
              color: u.color
            }
          }
        )
      }
    );
  }
);
we.displayName = "Buttons.Icon";
const Fe = i.memo(({ style: e, text: t, ...r }) => /* @__PURE__ */ a(
  "code",
  {
    style: {
      color: v.TourmalineStiletto,
      backgroundColor: "#E7E9EB",
      border: "1px solid #CCCCCC",
      borderRadius: "4px",
      padding: "2px 4px",
      fontSize: W.small,
      fontWeight: 600,
      ...e
    },
    ...r,
    children: t
  }
));
Fe.displayName = "Typography.Code";
function de({ ellipsis: e = 0, semanticColor: t }) {
  const { themeMode: r } = M.useThemeMode(), o = i.useMemo(() => t ? U[t] : C[r].primary, [r, t]), n = i.useMemo(() => e ? {
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: e,
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  } : {}, [e]);
  return {
    fontColor: o,
    ellipsisStyles: n
  };
}
const Ie = i.memo(
  ({ children: e, style: t, ellipsis: r = 0, semanticColor: o, ...n }) => {
    const { fontColor: s, ellipsisStyles: l } = de({ ellipsis: r, semanticColor: o });
    return /* @__PURE__ */ a(
      "p",
      {
        style: {
          boxSizing: "border-box",
          margin: 0,
          width: "100%",
          fontSize: W.text,
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
Ie.displayName = "Typography.Paragraph";
const fe = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, ie = {
  span: "span",
  small: "small",
  strong: "strong"
}, Ee = i.memo(
  ({ style: e, text: t, as: r = ie.span, isEllipsis: o = !1, semanticColor: n, ...s }) => {
    const { fontColor: l, ellipsisStyles: c } = de({ ellipsis: o ? 1 : 0, semanticColor: n });
    return r === ie.strong ? /* @__PURE__ */ a(
      "strong",
      {
        style: {
          fontSize: W[K.strong],
          fontWeight: "bold",
          color: l,
          ...c,
          ...e
        },
        ...s,
        children: t
      }
    ) : r === ie.small ? /* @__PURE__ */ a(
      "small",
      {
        style: {
          fontSize: W[K.small],
          color: l,
          ...c,
          ...e
        },
        ...s,
        children: t
      }
    ) : /* @__PURE__ */ a(
      "span",
      {
        style: {
          fontSize: W[K.text],
          fontWeight: "normal",
          color: l,
          ...c,
          ...e
        },
        ...s,
        children: t
      }
    );
  }
);
Ee.displayName = "Typography.Text";
const Le = i.memo(
  ({ text: e, as: t = fe.h4, ellipsis: r = 0, style: o, semanticColor: n, ...s }) => {
    const l = i.useMemo(() => fe[t], [t]), c = i.useMemo(() => W[t], [t]), { fontColor: d, ellipsisStyles: u } = de({ ellipsis: r, semanticColor: n });
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
          ...o
        },
        ...s,
        children: e
      }
    );
  }
);
Le.displayName = "Typography.Title";
const I = {
  Title: Le,
  Text: Ee,
  Code: Fe,
  Paragraph: Ie
}, ae = i.memo(
  ({
    type: e = "button",
    style: t,
    text: r,
    variant: o = "contained",
    isLoading: n,
    isDisabled: s,
    icon: l,
    iconPosition: c = "start",
    iconWidth: d = 20,
    semanticColor: u,
    ...h
  }) => {
    const { buttonStyles: p } = Te({
      isLoading: n,
      isDisabled: s || h.disabled,
      variant: o,
      semanticColor: u
    });
    return /* @__PURE__ */ y(
      "button",
      {
        type: e,
        disabled: n || s,
        style: {
          flexDirection: c === "start" ? "row" : "row-reverse",
          WebkitTapHighlightColor: "transparent",
          ...p,
          ...t
        },
        ...h,
        children: [
          l && /* @__PURE__ */ a(
            F,
            {
              icon: l,
              width: d,
              style: {
                marginLeft: c === "start" ? "0px" : "8px",
                marginRight: c === "end" ? "0px" : "8px",
                color: "inherit"
              }
            }
          ),
          /* @__PURE__ */ a(I.Text, { text: r, style: { color: "inherit" } }),
          /* @__PURE__ */ a(
            "div",
            {
              style: {
                display: n ? "flex" : "none",
                borderRadius: "4px",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: p.backgroundColor
              },
              children: /* @__PURE__ */ a(F, { icon: "svg-spinners:270-ring-with-bg", width: 24, style: { color: "inherit" } })
            }
          )
        ]
      }
    );
  }
);
ae.displayName = "Button";
const ue = {
  Icon: we
}, Re = i.memo(
  ({ children: e, style: t, row: r = !0, column: o = !1, gap: n = "8px", ...s }) => /* @__PURE__ */ a(
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
  )
);
Re.displayName = "Space.Flex";
const Oe = i.memo(({ children: e, style: t, columns: r = 1, spacing: o = 16, ...n }) => {
  const { screenSize: s } = M.useThemeBreakpoint(), l = s ?? T.xs, c = i.useMemo(
    () => Lt(r, l),
    [r, l]
  ), d = i.useMemo(
    () => Rt(o, l),
    [o, l]
  );
  return /* @__PURE__ */ a(
    "div",
    {
      style: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: `repeat(${c}, 1fr)`,
        gap: `${d}px`,
        ...t
      },
      ...n,
      children: e
    }
  );
});
Oe.displayName = "Space.Grid";
const q = Object.keys(T);
function Lt(e = 1, t) {
  if (typeof e == "number")
    return e;
  const r = q.indexOf(t);
  for (let o = r; o < q.length; o++) {
    const n = e[q[o]];
    if (n !== void 0) return n;
  }
  return 1;
}
function Rt(e = 16, t) {
  if (typeof e == "number")
    return e;
  const r = q.indexOf(t);
  for (let o = r; o < q.length; o++) {
    const n = e[q[o]];
    if (n !== void 0) return n;
  }
  return 16;
}
const O = {
  Flex: Re,
  Grid: Oe
}, pe = {
  div: "div",
  article: "article"
}, L = {
  elevated: "elevated",
  outlined: "outlined",
  transparent: "transparent",
  frostedGlass: "frostedGlass"
}, X = i.memo(
  ({ children: e, style: t, as: r = pe.div, variant: o = L.elevated, ...n }) => {
    const { themeMode: s } = M.useThemeMode(), l = i.useMemo(() => {
      switch (o) {
        case L.transparent:
          return "transparent";
        case L.elevated:
        case L.outlined:
        case L.frostedGlass:
        default:
          return N[s].secondary;
      }
    }, [s, o]), c = i.useMemo(() => {
      switch (o) {
        case L.outlined:
        case L.transparent:
          return A[s].tertiary;
        case L.elevated:
        case L.frostedGlass:
        default:
          return "transparent";
      }
    }, [s, o]), d = i.useMemo(() => {
      switch (o) {
        case L.outlined:
        case L.transparent:
          return "none";
        case L.elevated:
        case L.frostedGlass:
        default:
          return G[s].primary;
      }
    }, [s, o]);
    return /* @__PURE__ */ a(
      r,
      {
        style: {
          boxSizing: "border-box",
          borderRadius: "8px",
          padding: "16px",
          outlineWidth: 1.5,
          outlineStyle: "solid",
          outlineColor: c,
          backgroundColor: l,
          boxShadow: d,
          ...o === L.frostedGlass && {
            backdropFilter: "blur(8px) brightness(0.8)",
            WebkitBackdropFilter: "blur(8px) brightness(0.8)"
          },
          ...t
        },
        ...n,
        children: e
      }
    );
  }
);
X.displayName = "Card";
const He = i.memo(({ children: e, height: t = 300, width: r = 200, title: o, coverImage: n }) => /* @__PURE__ */ y(
  X,
  {
    as: pe.article,
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
        O.Flex,
        {
          column: !0,
          style: {
            height: "max-content",
            width: "100%",
            position: "relative",
            zIndex: 1,
            left: 6,
            top: 24
          },
          children: o && /* @__PURE__ */ a(
            I.Title,
            {
              text: o,
              as: "h5",
              ellipsis: 4,
              style: {
                lineHeight: 1,
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
He.displayName = "Cards.Book";
const Ot = i.lazy(() => import("./index.chunk.js").then((e) => ({ default: e.Popover }))), ze = i.memo(({ children: e, title: t = "", description: r = "", renderMenu: o }) => /* @__PURE__ */ y(X, { as: pe.article, style: { position: "relative" }, children: [
  (t || r) && /* @__PURE__ */ y(O.Flex, { column: !0, gap: 2, style: { paddingRight: "48px" }, children: [
    /* @__PURE__ */ a(I.Title, { as: "h6", text: t, ellipsis: 1 }),
    /* @__PURE__ */ a(I.Paragraph, { ellipsis: 3, children: r })
  ] }),
  /* @__PURE__ */ a(i.Suspense, { fallback: null, children: /* @__PURE__ */ a(
    Ot,
    {
      placement: "bottom",
      renderTrigger: (n) => /* @__PURE__ */ a(
        ue.Icon,
        {
          icon: "solar:hamburger-menu-line-duotone",
          variant: "ghost",
          isDisabled: n,
          style: { boxShadow: "none" }
        }
      ),
      style: { position: "absolute", top: "4px", right: "4px", zIndex: 1 },
      contentStyle: { transform: "translateY(-40px)" },
      children: o()
    }
  ) }),
  e && /* @__PURE__ */ a(O.Flex, { column: !0, children: e })
] }));
ze.displayName = "Cards.Product";
const ro = {
  Book: He,
  Product: ze
}, Be = i.memo(({ children: e, breakpoint: t = T.lg, style: r, ...o }) => /* @__PURE__ */ a(
  "div",
  {
    style: {
      margin: "0 auto",
      width: "100%",
      maxWidth: D[t],
      ...r
    },
    ...o,
    children: e
  }
));
Be.displayName = "Container";
const Ht = i.memo(
  ({ isOpen: e, onClose: t, children: r, position: o = "left", maskClosable: n = !0, width: s = 300, height: l = 300, style: c }) => {
    const { themeMode: d } = M.useThemeMode();
    return /* @__PURE__ */ y(te, { children: [
      /* @__PURE__ */ a(j, { children: e && /* @__PURE__ */ a(
        R.div,
        {
          onClick: n ? t : void 0,
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.3 },
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 999,
            width: "100vw",
            height: "100svh",
            backgroundColor: V(N[d].primary, 0.5),
            backdropFilter: "blur(2px)",
            pointerEvents: e ? "auto" : "none"
          }
        }
      ) }),
      /* @__PURE__ */ a(j, { children: e && /* @__PURE__ */ a(
        R.div,
        {
          animate: { x: 0, y: 0 },
          transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] },
          initial: o === "left" ? { x: "-100%" } : o === "right" ? { x: "100%" } : o === "top" ? { y: "-100%" } : { y: "100%" },
          exit: o === "left" ? { x: "-100%" } : o === "right" ? { x: "100%" } : o === "top" ? { y: "-100%" } : { y: "100%" },
          style: {
            boxSizing: "border-box",
            position: "fixed",
            zIndex: 1e3,
            ...o === "left" && {
              top: 0,
              left: 0,
              width: s,
              height: "100svh"
            },
            ...o === "right" && {
              top: 0,
              right: 0,
              width: s,
              height: "100svh"
            },
            ...o === "top" && {
              top: 0,
              left: 0,
              width: "100vw",
              height: l
            },
            ...o === "bottom" && {
              bottom: 0,
              left: 0,
              width: "100vw",
              height: l
            }
          },
          children: /* @__PURE__ */ a(
            X,
            {
              style: {
                width: "100%",
                height: "100%",
                ...o === "left" && {
                  borderRight: "none",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0
                },
                ...o === "right" && {
                  borderLeft: "none",
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0
                },
                ...o === "top" && {
                  borderBottom: "none",
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0
                },
                ...o === "bottom" && {
                  borderTop: "none",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0
                },
                ...c
              },
              children: r
            }
          )
        }
      ) })
    ] });
  }
);
Ht.displayName = "Drawer";
const Z = {
  top: "top",
  left: "left",
  right: "right"
}, re = i.memo(
  ({
    children: e,
    style: t,
    htmlFor: r,
    label: o = "",
    isError: n = !1,
    required: s = !1,
    position: l = Z.top,
    ...c
  }) => {
    const { themeMode: d } = M.useThemeMode();
    return /* @__PURE__ */ y(
      "label",
      {
        htmlFor: r,
        style: {
          width: "max-content",
          display: "flex",
          gap: "8px",
          ...l === Z.top && { flexDirection: "column", alignItems: "flex-start" },
          ...l === Z.left && { flexDirection: "row", alignItems: "center" },
          ...l === Z.right && { flexDirection: "row-reverse", alignItems: "center" },
          color: n ? v.RubyCopperhead : C[d].primary,
          ...t
        },
        ...c,
        children: [
          /* @__PURE__ */ y(O.Flex, { row: !0, gap: 0, style: { width: "100%", alignItems: "center" }, children: [
            s && /* @__PURE__ */ a(I.Text, { as: "small", text: "*", style: { color: v.RubyCopperhead, marginRight: "2px" } }),
            /* @__PURE__ */ a(
              I.Text,
              {
                as: "small",
                text: o,
                style: { color: "inherit", fontWeight: "bold", paddingLeft: s ? 0 : "4px" }
              }
            )
          ] }),
          e
        ]
      }
    );
  }
);
re.displayName = "Form.Label";
function _({
  fullWidth: e = !1,
  isDisabled: t = !1,
  isError: r = !1,
  isFocused: o = !1
}) {
  const { themeMode: n } = M.useThemeMode(), { themeColor: s } = M.useThemeColor(), l = i.useMemo(() => t ? N[n].secondary : "transparent", [t, n]), c = i.useMemo(() => r ? v.RubyCopperhead : t ? C[n].disabled : C[n].primary, [r, t, n]), d = i.useMemo(() => r ? v.RubyCopperhead : t ? C[n].disabled : C[n].quaternary, [r, t, n]), u = i.useMemo(() => r ? v.RubyCopperhead : t ? A[n].secondary : A[n].primary, [r, n]), h = i.useMemo(() => r ? v.RubyCopperhead : s, [r, n]), p = i.useMemo(
    () => ({
      display: e ? "block" : "inline-block",
      width: e ? "100%" : "auto",
      minWidth: e ? "100%" : 200,
      minHeight: 40,
      padding: "8px",
      backgroundColor: l,
      color: c,
      borderRadius: "8px",
      borderWidth: 1.5,
      borderStyle: "solid",
      borderColor: u,
      ...o && {
        outlineOffset: -1.5,
        outlineWidth: 1.5,
        outlineStyle: "solid",
        outlineColor: h
      },
      ...t && {
        cursor: "not-allowed",
        outline: "none"
      }
    }),
    [e, o, t, l, c, u, h]
  );
  return {
    backgroundColor: l,
    textColor: c,
    helperTextColor: d,
    borderColor: u,
    outlineColor: h,
    commonStyles: p
  };
}
function Ne({
  checked: e = !1,
  disabled: t = !1,
  onChange: r
}) {
  const o = i.useRef(null), [n, s] = i.useState(e);
  i.useEffect(() => {
    s(!!e);
  }, [e]);
  const l = i.useCallback(
    (d) => {
      s(d.target.checked), r == null || r(d);
    },
    [r]
  ), c = i.useCallback(
    (d) => {
      if (d.preventDefault(), d.stopPropagation(), !t && o.current) {
        const u = !n;
        s(u);
        const h = new Event("change", { bubbles: !0 });
        Object.defineProperty(h, "target", {
          writable: !1,
          value: { ...o.current, checked: u }
        }), r == null || r(h);
      }
    },
    [t, n, r]
  );
  return {
    inputRef: o,
    isChecked: n,
    toggleOriginalIsChecked: l,
    toggleCustomIsChecked: c
  };
}
const _e = i.memo(
  ({
    style: e,
    autoComplete: t = "off",
    required: r = !1,
    isError: o = !1,
    disabled: n = !1,
    name: s,
    value: l,
    checked: c = !1,
    onChange: d,
    label: u,
    labelPosition: h = "right",
    ...p
  }) => {
    const { inputRef: m, isChecked: f, toggleOriginalIsChecked: x, toggleCustomIsChecked: b } = Ne({
      checked: c,
      disabled: n,
      onChange: d
    }), { outlineColor: g, borderColor: k } = _({
      isDisabled: n,
      isError: o
    });
    return /* @__PURE__ */ y(
      re,
      {
        label: u,
        required: r,
        isError: o,
        position: h,
        style: {
          cursor: n ? "not-allowed" : "pointer",
          opacity: n ? 0.6 : 1
        },
        children: [
          /* @__PURE__ */ a(
            "input",
            {
              type: "checkbox",
              name: s,
              value: l,
              checked: f,
              ref: m,
              onChange: x,
              autoComplete: t,
              disabled: n,
              style: { display: "none", ...e },
              ...p
            }
          ),
          /* @__PURE__ */ a(
            F,
            {
              icon: f ? "fluent:checkbox-checked-24-filled" : "fluent:checkbox-unchecked-24-regular",
              width: 24,
              onClick: b,
              style: {
                color: f ? g : k,
                cursor: n ? "not-allowed" : "pointer"
              }
            }
          )
        ]
      }
    );
  }
);
_e.displayName = "FormField.Checkbox";
function Y() {
  const [e, t] = i.useState(!1), r = i.useCallback(() => {
    t(!0);
  }, []), o = i.useCallback(() => {
    t(!1);
  }, []);
  return {
    isFocused: e,
    setIsFocused: t,
    handleFocus: r,
    handleBlur: o
  };
}
function zt({ isDisabled: e }) {
  const [t, r] = i.useState(!1), o = i.useCallback(() => {
    r(!0);
  }, []), n = i.useCallback(() => {
    r(!1);
  }, []), s = i.useCallback(() => {
    r(!1);
  }, []);
  return i.useEffect(() => {
    e && r(!1);
  }, [e]), {
    isHovering: t,
    handleMouseDown: o,
    handleMouseUp: n,
    handleMouseLeave: s
  };
}
function Bt() {
  const [e, t] = i.useState(!1), r = i.useCallback(() => t(!0), []), o = i.useCallback(() => t(!1), []), n = i.useCallback(() => t((s) => !s), []);
  return {
    isOpen: e,
    setIsOpen: t,
    open: r,
    close: o,
    toggle: n
  };
}
const P = i.memo(
  ({
    children: e,
    style: t,
    fullWidth: r = !1,
    required: o = !1,
    isDisabled: n = !1,
    isError: s = !1,
    isFocused: l = !1,
    label: c,
    helpText: d,
    ...u
  }) => {
    const { themeColor: h } = M.useThemeColor(), { themeMode: p } = M.useThemeMode(), { helperTextColor: m } = _({
      fullWidth: r,
      isDisabled: n,
      isError: s
    });
    return /* @__PURE__ */ y(
      "fieldset",
      {
        disabled: n,
        style: {
          boxSizing: "border-box",
          border: "none",
          padding: 0,
          margin: 0,
          width: r ? "100%" : "max-content",
          color: s ? v.RubyCopperhead : n ? C[p].disabled : l ? h : C[p].primary,
          ...t
        },
        ...u,
        children: [
          c && /* @__PURE__ */ y("legend", { style: { padding: 0, color: "inherit" }, children: [
            o && /* @__PURE__ */ a(
              I.Text,
              {
                as: "small",
                text: "*",
                style: {
                  color: v.RubyCopperhead,
                  fontWeight: "bold",
                  verticalAlign: "text-bottom"
                }
              }
            ),
            /* @__PURE__ */ a(
              I.Text,
              {
                as: "small",
                text: c,
                style: {
                  color: "inherit",
                  fontWeight: "bold",
                  paddingLeft: o ? "2px" : "4px"
                }
              }
            )
          ] }),
          /* @__PURE__ */ y(O.Flex, { column: !0, gap: 0, style: { width: "100%" }, children: [
            e,
            d && /* @__PURE__ */ a(
              I.Text,
              {
                as: "small",
                text: d,
                style: {
                  color: m,
                  paddingLeft: "4px"
                }
              }
            )
          ] })
        ]
      }
    );
  }
);
P.displayName = "FormField";
const De = i.memo(
  ({
    style: e,
    fullWidth: t,
    autoComplete: r = "off",
    required: o = !1,
    isError: n = !1,
    disabled: s = !1,
    name: l,
    value: c,
    label: d,
    helpText: u,
    ...h
  }) => {
    const { isFocused: p, handleFocus: m, handleBlur: f } = Y(), { commonStyles: x } = _({
      fullWidth: t,
      isDisabled: s,
      isError: n,
      isFocused: p
    });
    return /* @__PURE__ */ a(
      P,
      {
        label: d,
        required: o,
        isDisabled: s,
        isError: n,
        isFocused: p,
        fullWidth: t,
        helpText: u,
        children: /* @__PURE__ */ a(
          "input",
          {
            type: "number",
            name: l,
            value: c,
            autoComplete: r,
            disabled: s,
            onFocus: s ? void 0 : m,
            onBlur: s ? void 0 : f,
            style: {
              boxSizing: "border-box",
              ...x,
              ...e
            },
            ...h
          }
        )
      }
    );
  }
);
De.displayName = "FormField.Number";
const We = i.memo(
  ({
    style: e,
    fullWidth: t,
    autoComplete: r = "off",
    required: o = !1,
    isError: n = !1,
    disabled: s = !1,
    name: l,
    value: c,
    label: d,
    helpText: u,
    ...h
  }) => {
    const { isFocused: p, handleFocus: m, handleBlur: f } = Y(), { outlineColor: x, commonStyles: b, textColor: g } = _({
      fullWidth: t,
      isDisabled: s,
      isError: n,
      isFocused: p
    }), { isPasswordVisible: k, togglePasswordVisibility: E } = Nt(!1);
    return /* @__PURE__ */ a(
      P,
      {
        label: d,
        required: o,
        isDisabled: s,
        isFocused: p,
        isError: n,
        fullWidth: t,
        helpText: u,
        children: /* @__PURE__ */ y(
          "div",
          {
            style: {
              ...b,
              position: "relative",
              overflow: "hidden",
              padding: 0
            },
            children: [
              /* @__PURE__ */ a(
                "input",
                {
                  type: k ? "text" : "password",
                  name: l,
                  value: c,
                  autoComplete: r,
                  spellCheck: !1,
                  disabled: s,
                  onFocus: s ? void 0 : m,
                  onBlur: s ? void 0 : f,
                  style: {
                    boxSizing: "border-box",
                    border: "none",
                    outline: "none",
                    position: "relative",
                    width: "calc(100% - 34px)",
                    minHeight: b.minHeight,
                    color: g,
                    backgroundColor: b.backgroundColor,
                    padding: b.padding,
                    paddingRight: 0,
                    ...e
                  },
                  ...h
                }
              ),
              /* @__PURE__ */ a(
                F,
                {
                  icon: k ? "solar:eye-linear" : "solar:eye-closed-broken",
                  width: 20,
                  onClick: E,
                  style: {
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: x,
                    padding: b.padding
                  }
                }
              )
            ]
          }
        )
      }
    );
  }
);
We.displayName = "FormField.Password";
function Nt(e = !1) {
  const [t, r] = i.useState(e), o = i.useCallback((n) => {
    i.startTransition(() => {
      n.preventDefault(), n.stopPropagation(), r((s) => !s);
    });
  }, []);
  return {
    isPasswordVisible: t,
    togglePasswordVisibility: o
  };
}
const Ae = i.memo(
  ({
    required: e = !1,
    disabled: t = !1,
    name: r,
    label: o,
    labelPosition: n = "right",
    fullWidth: s,
    value: l,
    options: c,
    onChange: d
  }) => {
    const [u, h] = i.useState(l || null);
    i.useEffect(() => {
      h(l || null);
    }, [l]);
    const { outlineColor: p, borderColor: m } = _({
      isDisabled: t
    }), f = i.useCallback(
      (x) => {
        if (t) return;
        h(x);
        const b = {
          target: {
            name: r,
            value: x
          }
        };
        d == null || d(b);
      },
      [t, r, d]
    );
    return /* @__PURE__ */ a(P, { label: o, required: e, isDisabled: t, fullWidth: s, children: /* @__PURE__ */ a(O.Flex, { column: !0, gap: 8, style: { marginTop: 4 }, children: c.map((x) => {
      const b = x.value === u, g = t || x.disabled;
      return /* @__PURE__ */ y(
        re,
        {
          label: x.label,
          position: n,
          style: {
            cursor: g ? "not-allowed" : "pointer",
            opacity: g ? 0.6 : 1
          },
          children: [
            /* @__PURE__ */ a(
              "input",
              {
                type: "radio",
                name: r,
                value: x.value,
                checked: b,
                disabled: g,
                onChange: () => f(x.value),
                style: { display: "none" }
              }
            ),
            /* @__PURE__ */ a(
              F,
              {
                icon: b ? "fluent:radio-button-24-filled" : "fluent:radio-button-24-regular",
                width: 24,
                onClick: () => {
                  g || f(x.value);
                },
                style: {
                  color: b ? p : m,
                  cursor: g ? "not-allowed" : "pointer"
                }
              }
            )
          ]
        },
        x.value
      );
    }) }) });
  }
);
Ae.displayName = "FormField.Radio";
const _t = {
  ul: "ul"
}, Dt = {
  li: "li"
}, $e = i.memo(
  ({
    as: e = Dt.li,
    style: t,
    icon: r,
    text: o,
    subText: n,
    isDisabled: s = !1,
    isActive: l = !1,
    actionButton: c = void 0,
    ...d
  }) => {
    const { themeMode: u } = M.useThemeMode(), { themeColor: h } = M.useThemeColor(), { isHovering: p, handleMouseDown: m, handleMouseUp: f, handleMouseLeave: x } = zt({
      isDisabled: s
    }), b = i.useCallback(
      (k) => {
        s || (k.currentTarget.style.boxShadow = G[u].tertiary);
      },
      [s]
    ), g = i.useCallback(
      (k) => {
        s || (k.currentTarget.style.boxShadow = p ? G[u].tertiary : "none");
      },
      [s]
    );
    return /* @__PURE__ */ a(
      e,
      {
        onMouseDown: m,
        onMouseUp: f,
        onMouseLeave: x,
        onMouseOver: b,
        onMouseOut: g,
        style: {
          boxSizing: "border-box",
          listStyle: "none",
          margin: 0,
          padding: "8px",
          paddingRight: c ? "8px" : "16px",
          borderRadius: "8px",
          cursor: s ? "not-allowed" : d != null && d.onClick ? "pointer" : "default",
          transition: "box-shadow 0.2s ease-in-out",
          ...t
        },
        ...d,
        children: /* @__PURE__ */ y(O.Flex, { row: !0, style: { alignItems: "center" }, children: [
          r && /* @__PURE__ */ a(
            F,
            {
              icon: r,
              width: 24,
              style: {
                color: s ? C[u].disabled : l ? h : C[u].primary
              }
            }
          ),
          /* @__PURE__ */ y(
            O.Flex,
            {
              column: !0,
              gap: 0,
              style: {
                flex: 1,
                flexGrow: 1,
                maxWidth: r && !c ? "calc(100% - 32px)" : !r && c ? "calc(100% - 48px)" : r && c ? "calc(100% - 80px)" : "100%"
              },
              children: [
                /* @__PURE__ */ a(
                  I.Text,
                  {
                    text: o,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      color: s ? C[u].disabled : l ? h : C[u].primary
                    }
                  }
                ),
                n && /* @__PURE__ */ a(
                  I.Text,
                  {
                    as: "small",
                    text: n,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      color: s ? C[u].disabled : l ? h : C[u].quaternary
                    }
                  }
                )
              ]
            }
          ),
          !!(c != null && c.icon) && /* @__PURE__ */ a(
            ue.Icon,
            {
              icon: c.icon,
              variant: "ghost",
              isDisabled: s,
              onClick: c.onClick
            }
          )
        ] })
      }
    );
  }
);
$e.displayName = "Menu.Item";
const je = i.memo(({ children: e, style: t, as: r = _t.ul, ...o }) => /* @__PURE__ */ a(
  r,
  {
    style: {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      ...t
    },
    ...o,
    children: e
  }
));
je.displayName = "Menu.List";
const ge = {
  List: je,
  Item: $e
}, Ge = i.memo(
  ({ children: e, style: t, contentStyle: r, placement: o = "bottom", renderTrigger: n, trigger: s = "click", onClickOutside: l }) => {
    var k;
    const c = Bt(), d = i.useRef(null), u = i.useRef(null), h = i.useRef(null), [p, m] = i.useState({ top: 0, left: 0 });
    i.useEffect(() => {
      if (s !== "click") return;
      const E = (H) => {
        var S;
        h.current && !h.current.contains(H.target) && !((S = u.current) != null && S.contains(H.target)) && (c.close(), l && l());
      };
      return c.isOpen && document.addEventListener("mousedown", E), () => {
        document.removeEventListener("mousedown", E);
      };
    }, [c, s, l]), i.useEffect(() => {
      if (c.isOpen && d.current && u.current && h.current) {
        const E = d.current.getBoundingClientRect(), H = u.current.getBoundingClientRect(), S = h.current.offsetWidth, B = h.current.offsetHeight, $ = H.top - E.top, ne = H.left - E.left, ut = o === "bottom" ? $ + H.height : $ - B, pt = ne + H.width / 2 - S / 2;
        m({ top: ut, left: pt });
      }
    }, [c.isOpen, o]);
    const b = s === "hover" ? {
      onMouseEnter: () => {
        s === "hover" && c.open();
      },
      onMouseLeave: () => {
        s === "hover" && c.close();
      }
    } : {}, g = s === "click" ? { onClick: c.toggle } : {};
    return /* @__PURE__ */ y("div", { ref: d, style: { display: "inline-block", position: "relative", ...t }, ...b, children: [
      /* @__PURE__ */ a("div", { ref: u, ...g, style: { display: "inline-block", width: "100%" }, children: n(c.isOpen) }),
      /* @__PURE__ */ a(j, { children: c.isOpen && /* @__PURE__ */ a(
        R.div,
        {
          ref: h,
          initial: { opacity: 0, y: 0 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 0 },
          transition: { duration: 0.2 },
          style: {
            position: "absolute",
            top: p.top,
            left: p.left,
            zIndex: 1e3,
            minWidth: (k = u.current) == null ? void 0 : k.offsetWidth
          },
          children: /* @__PURE__ */ a(
            X,
            {
              style: {
                padding: "8px",
                ...r
              },
              children: e
            }
          )
        }
      ) })
    ] });
  }
);
Ge.displayName = "Popover";
const Ve = i.memo(
  ({
    isOriginalSelect: e = !1,
    fullWidth: t,
    required: r = !1,
    isError: o = !1,
    disabled: n = !1,
    label: s,
    helpText: l,
    ...c
  }) => {
    const { isFocused: d, setIsFocused: u, handleFocus: h, handleBlur: p } = Y(), { commonStyles: m } = _({
      fullWidth: t,
      isDisabled: n,
      isError: o,
      isFocused: d
    });
    return /* @__PURE__ */ y(
      P,
      {
        label: s,
        required: r,
        isDisabled: n,
        isError: o,
        isFocused: d,
        fullWidth: t,
        helpText: l,
        children: [
          e && /* @__PURE__ */ a(
            Pe,
            {
              commonStyles: m,
              handleFocus: h,
              handleBlur: p,
              disabled: n,
              ...c
            }
          ),
          !e && /* @__PURE__ */ a(Ue, { commonStyles: m, setIsFocused: u, disabled: n, ...c })
        ]
      }
    );
  }
);
Ve.displayName = "FormField.Select";
const Pe = i.memo(
  ({
    commonStyles: e,
    handleFocus: t,
    handleBlur: r,
    name: o,
    autoComplete: n = "off",
    options: s,
    onChange: l,
    value: c,
    disabled: d,
    style: u,
    ...h
  }) => /* @__PURE__ */ a(
    "select",
    {
      name: o,
      autoComplete: n,
      disabled: d,
      onFocus: t,
      onBlur: r,
      onChange: l,
      value: c,
      style: {
        boxSizing: "border-box",
        ...e,
        ...u
      },
      ...h,
      children: s.map((p) => /* @__PURE__ */ a("option", { value: p.value, disabled: p.disabled, children: p.label }, p.value))
    }
  )
), Ue = i.memo(({ commonStyles: e, setIsFocused: t, disabled: r, name: o, value: n, options: s, onChange: l, style: c }) => {
  const [d, u] = i.useState(n || null), [h, p] = i.useState(!1);
  i.useEffect(() => {
    u(n || null);
  }, [n]);
  const m = i.useCallback(
    (g) => {
      u(g), p(!1), t(!1);
      const k = {
        target: { name: o, value: g },
        currentTarget: { name: o, value: g }
      };
      l == null || l(k);
    },
    [o, l, t]
  ), f = i.useCallback(
    (g) => {
      g.stopPropagation(), u(null), t(!1);
      const k = {
        target: { name: o, value: "" },
        currentTarget: { name: o, value: "" }
      };
      l == null || l(k);
    },
    [o, l, t]
  ), x = i.useMemo(
    () => {
      var g;
      return ((g = s.find((k) => k.value === d)) == null ? void 0 : g.label) || "";
    },
    [d]
  ), b = (c == null ? void 0 : c.width) ?? e.minWidth;
  return /* @__PURE__ */ a(
    Ge,
    {
      placement: "bottom",
      trigger: "click",
      style: { width: "100%" },
      onClickOutside: () => t(!1),
      renderTrigger: () => /* @__PURE__ */ y(
        O.Flex,
        {
          row: !0,
          onClick: () => t(!0),
          style: {
            ...e,
            height: e.minHeight,
            width: b,
            display: "flex",
            alignItems: "center"
          },
          children: [
            /* @__PURE__ */ a(I.Paragraph, { ellipsis: 1, style: { flex: 1 }, children: x }),
            d && !r && /* @__PURE__ */ a(
              F,
              {
                icon: "solar:close-circle-line-duotone",
                width: 16,
                onClick: f,
                style: {
                  cursor: "pointer",
                  transition: "color 0.2s ease"
                }
              }
            ),
            /* @__PURE__ */ a(
              F,
              {
                icon: "solar:alt-arrow-down-line-duotone",
                width: 16,
                style: {
                  transition: "transform 0.2s ease",
                  transform: h ? "rotate(180deg)" : "rotate(0deg)"
                }
              }
            )
          ]
        }
      ),
      children: /* @__PURE__ */ a(ge.List, { as: "ul", style: { width: b }, children: s.map((g) => /* @__PURE__ */ a(
        ge.Item,
        {
          text: g.label,
          isDisabled: g.disabled,
          isActive: g.value === d,
          onClick: () => {
            g.disabled || m(g.value);
          },
          style: { cursor: g.disabled ? "not-allowed" : "pointer", fontSize: W.small }
        },
        g.value
      )) })
    }
  );
});
Pe.displayName = "FormField.Select.Original";
Ue.displayName = "FormField.Select.Custom";
const xe = 48, ye = 24, se = 18, be = 4, qe = i.memo(
  ({
    style: e,
    autoComplete: t = "off",
    required: r = !1,
    isError: o = !1,
    disabled: n = !1,
    name: s,
    value: l,
    checked: c = !1,
    onChange: d,
    label: u,
    labelPosition: h = "right",
    ...p
  }) => {
    const { inputRef: m, isChecked: f, toggleOriginalIsChecked: x, toggleCustomIsChecked: b } = Ne({
      checked: c,
      disabled: n,
      onChange: d
    }), { backgroundColor: g, outlineColor: k, borderColor: E, commonStyles: H } = _({
      isDisabled: n,
      isError: o
    });
    return /* @__PURE__ */ y(re, { label: u, required: r, isError: o, position: h, children: [
      /* @__PURE__ */ a(
        "input",
        {
          type: "checkbox",
          name: s,
          value: l,
          checked: f,
          ref: m,
          onChange: x,
          autoComplete: t,
          disabled: n,
          style: { display: "none", ...e },
          ...p
        }
      ),
      /* @__PURE__ */ a(
        "div",
        {
          onClick: b,
          style: {
            display: "inline-flex",
            alignItems: "center",
            cursor: n ? "not-allowed" : "pointer",
            opacity: n ? 0.6 : 1
          },
          children: /* @__PURE__ */ a(j, { children: /* @__PURE__ */ a(
            R.div,
            {
              initial: !1,
              animate: f ? "checked" : "unchecked",
              transition: { type: "spring", stiffness: 700, damping: 30 },
              style: {
                width: xe,
                height: ye,
                position: "relative",
                display: "flex",
                alignItems: "center",
                borderRadius: ye / 2,
                borderWidth: H.borderWidth,
                borderStyle: H.borderStyle,
                borderColor: E,
                backgroundColor: f ? k : g,
                transition: "background-color 0.2s ease-in-out"
              },
              children: /* @__PURE__ */ a(
                R.div,
                {
                  initial: !1,
                  animate: f ? "checked" : "unchecked",
                  transition: { type: "spring", stiffness: 700, damping: 30 },
                  variants: {
                    checked: { x: xe - se - be },
                    unchecked: { x: be }
                  },
                  style: {
                    width: se,
                    height: se,
                    borderRadius: "50%",
                    position: "absolute",
                    boxShadow: G.light.primary,
                    backgroundColor: o && !f ? v.RubyCopperhead : N.light.secondary
                  }
                }
              )
            }
          ) })
        }
      )
    ] });
  }
);
qe.displayName = "FormField.Switch";
const Xe = i.memo(
  ({
    style: e,
    fullWidth: t,
    autoComplete: r = "off",
    required: o = !1,
    isError: n = !1,
    disabled: s = !1,
    name: l,
    value: c,
    label: d,
    helpText: u,
    ...h
  }) => {
    const { isFocused: p, handleFocus: m, handleBlur: f } = Y(), { commonStyles: x } = _({
      fullWidth: t,
      isDisabled: s,
      isError: n,
      isFocused: p
    });
    return /* @__PURE__ */ a(
      P,
      {
        label: d,
        required: o,
        isDisabled: s,
        isError: n,
        isFocused: p,
        fullWidth: t,
        helpText: u,
        children: /* @__PURE__ */ a(
          "input",
          {
            type: "text",
            name: l,
            value: c,
            autoComplete: r,
            disabled: s,
            onFocus: s ? void 0 : m,
            onBlur: s ? void 0 : f,
            style: {
              boxSizing: "border-box",
              ...x,
              ...e
            },
            ...h
          }
        )
      }
    );
  }
);
Xe.displayName = "FormField.Text";
const Ye = i.memo(
  ({
    style: e,
    fullWidth: t,
    required: r = !1,
    isError: o = !1,
    disabled: n = !1,
    rows: s = 3,
    name: l,
    value: c,
    label: d,
    helpText: u,
    ...h
  }) => {
    const { isFocused: p, handleFocus: m, handleBlur: f } = Y(), { commonStyles: x } = _({
      fullWidth: t,
      isDisabled: n,
      isError: o,
      isFocused: p
    });
    return /* @__PURE__ */ a(
      P,
      {
        label: d,
        required: r,
        isDisabled: n,
        isError: o,
        isFocused: p,
        fullWidth: t,
        helpText: u,
        children: /* @__PURE__ */ a(
          "textarea",
          {
            name: l,
            value: c,
            disabled: n,
            onFocus: n ? void 0 : m,
            onBlur: n ? void 0 : f,
            spellCheck: !1,
            rows: s,
            style: {
              boxSizing: "border-box",
              resize: "none",
              ...x,
              ...e
            },
            ...h
          }
        )
      }
    );
  }
);
Ye.displayName = "FormField.Textarea";
const Wt = i.memo(({ children: e, gap: t = 8, style: r, ...o }) => /* @__PURE__ */ a("form", { style: { width: "100%", ...r }, ...o, children: /* @__PURE__ */ a(O.Flex, { column: !0, gap: t, children: e }) }));
Wt.displayName = "Form";
const no = {
  Text: Xe,
  Textarea: Ye,
  Number: De,
  Password: We,
  Checkbox: _e,
  Switch: qe,
  Radio: Ae,
  Select: Ve
}, Qe = i.memo(({ children: e, style: t, ...r }) => /* @__PURE__ */ a(
  "main",
  {
    style: {
      width: "100%",
      flexGrow: 1,
      ...t
    },
    ...r,
    children: e
  }
));
Qe.displayName = "Layout.Footer";
const ee = {
  headerHeight: 60,
  footerHeight: 80,
  sideWidth: 300
}, Ze = i.createContext(ee);
function he() {
  const e = i.useContext(Ze);
  if (e === void 0)
    throw new Error("useLayoutContext must be used within a LayoutProvider");
  return e;
}
const Je = i.memo(({ children: e, style: t, ...r }) => {
  const { footerHeight: o } = he();
  return /* @__PURE__ */ a(
    "footer",
    {
      style: {
        height: `${o}px`,
        width: "100%",
        ...t
      },
      ...r,
      children: e
    }
  );
});
Je.displayName = "Layout.Footer";
const Ke = i.memo(({ children: e, style: t, ...r }) => {
  const { headerHeight: o } = he();
  return /* @__PURE__ */ a(
    "header",
    {
      style: {
        height: `${o}px`,
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 1,
        ...t
      },
      ...r,
      children: e
    }
  );
});
Ke.displayName = "Layout.Header";
const et = i.memo(
  ({
    children: e,
    maxBreakpoint: t = T.xl,
    headerHeight: r = ee.headerHeight,
    footerHeight: o = ee.footerHeight,
    sideWidth: n = ee.sideWidth
  }) => {
    const s = i.useMemo(
      () => ({ headerHeight: r, footerHeight: o, sideWidth: n }),
      [r, o, n]
    );
    return (
      // eslint-disable-next-line react-x/no-context-provider
      /* @__PURE__ */ a(Ze.Provider, { value: s, children: /* @__PURE__ */ a(Be, { breakpoint: t, children: e }) })
    );
  }
);
et.displayName = "Layout.Provider";
const tt = i.memo(({ children: e, style: t, ...r }) => {
  const { headerHeight: o, sideWidth: n } = he();
  return /* @__PURE__ */ a(
    "aside",
    {
      style: {
        height: `calc(100svh - ${o}px)`,
        width: n,
        minWidth: n,
        position: "sticky",
        top: `${o}px`,
        left: 0,
        zIndex: 1,
        overflowX: "hidden",
        overflowY: "scroll",
        ...t
      },
      ...r,
      children: e
    }
  );
});
tt.displayName = "Layout.Side";
const io = {
  Provider: et,
  Header: Ke,
  Side: tt,
  Content: Qe,
  Footer: Je
}, ot = {
  ".txt": "text/plain",
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".pdf": "application/pdf",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ".xls": "application/vnd.ms-excel",
  ".csv": "text/csv",
  ".doc": "application/msword",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".mp3": "audio/mpeg",
  ".mp4": "video/mp4",
  ".avi": "video/x-msvideo"
};
function At(e) {
  const t = Object.entries(ot).find(([, r]) => r === e);
  if (!t)
    throw new Error(`Unsupported mime type: ${e}`);
  return t[0];
}
function $t(e) {
  return ot[e];
}
function jt(e) {
  switch (e) {
    case ".jpg":
    case ".jpeg":
    case ".png":
    case ".webp":
    case ".gif":
      return v.TurquoiseFerDeLance;
    // 蓝色
    case ".svg":
    case ".js":
    case ".json":
      return v.GoldenLanceHead;
    // 金色
    case ".pdf":
      return v.GarnetViper;
    // 红色
    case ".html":
    case ".mp4":
    case ".avi":
      return v.TopazCoral;
    // 橙色
    case ".css":
      return v.AlexandriteAnaconda;
    // 紫色
    case ".xls":
    case ".xlsx":
    case ".csv":
      return v.EmeraldMamba;
    // 绿色
    case ".doc":
    case ".docx":
      return v.SapphireCobra;
    // 蓝色
    case ".mp3":
      return v.MalachitePython;
    // 绿色
    case ".txt":
    default:
      return v.ObsidianBlackMamba;
  }
}
const rt = i.memo(({ fileExtension: e, width: t = 40, ...r }) => {
  var s;
  const o = i.useMemo(
    () => jt(e),
    [e]
  ), n = C.dark.primary;
  return /* @__PURE__ */ y("svg", { width: t, height: t * 2, viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r, children: [
    /* @__PURE__ */ a(
      "path",
      {
        d: "M23.172 0C23.7022 0 24.2107 0.210507 24.5857 0.585255L36.4137 12.4044C36.7891 12.7795 37 13.2884 37 13.8191V35.3333C37 37.9107 34.8689 40 32.24 40H7.76C5.13112 40 3 37.9107 3 35.3333V4.66667C3 2.08934 5.13112 0 7.76 0H23.172Z",
        fill: o
      }
    ),
    /* @__PURE__ */ a("g", { filter: "url(#filter0_d_1255_158068)", children: /* @__PURE__ */ a(
      "path",
      {
        d: "M35.1548 12.1381C35.4678 12.4537 35.2443 12.9902 34.7998 12.9902H29C26.4227 12.9902 24.0976 10.7233 24.0976 8.21031V2.20435C24.0976 1.75791 24.6382 1.53528 24.9526 1.85224L35.1548 12.1381Z",
        fill: "white",
        fillOpacity: "0.24",
        shapeRendering: "crispEdges"
      }
    ) }),
    /* @__PURE__ */ a(
      "text",
      {
        x: "45%",
        y: "55%",
        fontSize: "8",
        fontWeight: "bold",
        fill: n,
        fontFamily: "Arial",
        textAnchor: "middle",
        dominantBaseline: "middle",
        children: (s = String(e)) == null ? void 0 : s.toLocaleLowerCase()
      }
    ),
    /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ y(
      "filter",
      {
        id: "filter0_d_1255_158068",
        x: "22.0977",
        y: "1.70337",
        width: "15.2031",
        height: "15.2869",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [
          /* @__PURE__ */ a("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
          /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
          /* @__PURE__ */ a("feOffset", { dy: "2" }),
          /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: "1" }),
          /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
          /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" }),
          /* @__PURE__ */ a("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_1255_158068" }),
          /* @__PURE__ */ a("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_1255_158068", result: "shape" })
        ]
      }
    ) })
  ] });
});
rt.displayName = "MediaFile.TypeImage";
const nt = i.memo(
  ({ handleFileUpload: e, multiple: t = !1, accept: r, style: o, isLoading: n, isDisabled: s }) => {
    const l = i.useRef(null), c = i.useCallback(() => {
      var u;
      (u = l.current) == null || u.click();
    }, []), d = i.useCallback(
      (u) => {
        const h = u.target.files;
        if (!(h != null && h.length))
          return;
        const p = Array.from(h);
        e(p), u.currentTarget.value = "";
      },
      [e]
    );
    return /* @__PURE__ */ y(te, { children: [
      /* @__PURE__ */ a(
        "input",
        {
          type: "file",
          ref: l,
          onChange: d,
          multiple: t,
          accept: r,
          style: { display: "none" }
        }
      ),
      /* @__PURE__ */ a(
        ue.Icon,
        {
          icon: "solar:cloud-upload-outline",
          iconWidth: 32,
          variant: "ghost",
          isLoading: n,
          isDisabled: s,
          onClick: c,
          style: { padding: "32px 16px", ...o }
        }
      )
    ] });
  }
);
nt.displayName = "MediaFile.Uploader";
const so = {
  TypeImage: rt,
  Uploader: nt,
  mimeTypeToExtension: At,
  extensionToMimeType: $t
}, it = i.memo(
  ({ children: e, style: t, isOpen: r, onClose: o, maskClosable: n = !0, maxBreakpoint: s = T.xs }) => {
    const { themeMode: l } = M.useThemeMode();
    return /* @__PURE__ */ a(j, { children: r && /* @__PURE__ */ a(
      R.div,
      {
        onClick: n ? o : void 0,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1e3,
          width: "100svw",
          height: "100svh",
          backgroundColor: V(N[l].primary, 0.5),
          backdropFilter: "blur(2px)",
          opacity: r ? 1 : 0
        },
        children: /* @__PURE__ */ a(
          R.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.95 },
            transition: { duration: 0.2, ease: "easeOut" },
            onClick: (c) => c.stopPropagation(),
            style: {
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "max-content",
              maxHeight: "90%",
              width: D[s],
              maxWidth: D[s]
            },
            children: /* @__PURE__ */ a(X, { style: { width: "100%", ...t }, children: e })
          }
        )
      }
    ) });
  }
);
it.displayName = "Modal";
const st = i.memo(
  ({
    style: e,
    isOpen: t,
    onClose: r,
    maskClosable: o = !1,
    maxBreakpoint: n = T.xs,
    title: s,
    description: l,
    isConformLoading: c = !1,
    cancelText: d = "Cancel",
    confirmText: u = "Confirm",
    onCancel: h,
    onConfirm: p
  }) => {
    const m = i.useCallback(async () => {
      await h(), r();
    }, [h, r]), f = i.useCallback(async () => {
      await p(), r();
    }, [p, r]);
    return /* @__PURE__ */ y(it, { isOpen: t, onClose: r, style: e, maskClosable: o, maxBreakpoint: n, children: [
      /* @__PURE__ */ a(I.Title, { as: "h5", text: s }),
      /* @__PURE__ */ a(I.Paragraph, { style: { padding: "8px 0 24px" }, children: l }),
      /* @__PURE__ */ y(O.Flex, { row: !0, gap: 8, style: { justifyContent: "flex-end" }, children: [
        /* @__PURE__ */ a(
          ae,
          {
            variant: "outlined",
            text: d,
            onClick: () => void m(),
            isDisabled: c
          }
        ),
        /* @__PURE__ */ a(
          ae,
          {
            variant: "contained",
            text: u,
            onClick: () => void f(),
            isLoading: c
          }
        )
      ] })
    ] });
  }
);
st.displayName = "Modals.Confirm";
const ao = {
  Confirm: st
}, Gt = i.memo(({ children: e }) => {
  const [t, r] = i.useState(!1);
  return i.useEffect(() => {
    r(!0);
  }, []), t ? /* @__PURE__ */ a(te, { children: e }) : null;
});
Gt.displayName = "NoSSR";
const Vt = i.memo(({ position: e = "top-center", offset: t = 0, collapsable: r = !1 }) => {
  const { isDarkThemeMode: o } = M.useThemeMode();
  return /* @__PURE__ */ a(
    gt,
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
        success: /* @__PURE__ */ a(F, { icon: "solar:shield-check-line-duotone", color: "success" }),
        error: /* @__PURE__ */ a(F, { icon: "solar:shield-cross-line-duotone", color: "error" }),
        warning: /* @__PURE__ */ a(F, { icon: "solar:shield-warning-line-duotone", color: "warning" }),
        info: /* @__PURE__ */ a(F, { icon: "solar:info-circle-line-duotone", color: "info" })
      }
    }
  );
});
Vt.displayName = "Notification";
function lo(e) {
  const t = {
    description: e.description
  };
  return e.type === "success" ? Q.success(e.title, t) : e.type === "error" ? Q.error(e.title, t) : e.type === "warning" ? Q.warning(e.title, t) : Q.info(e.title, t);
}
const at = i.memo(({ children: e, targetElementID: t }) => {
  const [r, o] = i.useState(null);
  return i.useEffect(() => {
    const n = document.getElementById(t);
    n && o(n);
  }, [t]), r ? xt(/* @__PURE__ */ a(te, { children: e }), r, t) : null;
});
at.displayName = "PortalRender";
const co = {
  Render: at
}, lt = i.memo(({ height: e = 8 }) => {
  const t = mt(), { themeMode: r } = M.useThemeMode(), { themeColor: o } = M.useThemeColor(), n = i.useRef(null), [s, l] = i.useState(0);
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
        await t.start({ x: [0, s], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } }), await t.start({ x: [s, 0], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } });
    })();
  }, [t, s]), /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      style: {
        position: "relative",
        width: "100%",
        height: e,
        overflow: "hidden",
        backgroundColor: V(o, 0.2),
        borderRadius: e / 2,
        boxShadow: G[r].tertiary
      },
      children: /* @__PURE__ */ a(
        R.div,
        {
          animate: t,
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "50%",
            backgroundImage: `linear-gradient(45deg, ${V(o, 0.15)} 0%, ${oe(o, 0.1)} 90%)`,
            borderRadius: e / 2
          }
        }
      )
    }
  );
});
lt.displayName = "Progress.LoadingBar";
const ct = i.memo(({ height: e = 8 }) => {
  const { scrollYProgress: t } = ft(), { themeColor: r } = M.useThemeColor();
  return /* @__PURE__ */ a(
    R.div,
    {
      style: {
        scaleX: t,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        originX: 0,
        zIndex: 1e4,
        backgroundImage: `linear-gradient(45deg, ${oe(r, 0.2)} 0%, ${V(r, 0.15)} 90%)`,
        height: e,
        borderTopRightRadius: "16px",
        borderBottomRightRadius: "16px"
      }
    }
  );
});
ct.displayName = "Progress.Scrollbar";
const uo = {
  Scrollbar: ct,
  LoadingBar: lt
}, Pt = i.memo(
  ({
    tabs: e,
    defaultActiveIndex: t = 0,
    onChange: r,
    variant: o = "pills",
    tabContainerStyle: n,
    tabItemContainerStyle: s,
    tabItemStyle: l,
    tabIndicatorStyle: c,
    tabContentStyle: d
  }) => {
    const { themeMode: u } = M.useThemeMode(), { themeColor: h } = M.useThemeColor(), [p, m] = i.useState(!1), [f, x] = i.useState(t), [b, g] = i.useState({}), k = i.useRef([]), E = i.useCallback(() => {
      if (k.current[f]) {
        const S = k.current[f];
        if (S) {
          const B = !!e[f].icon, { offsetLeft: $, offsetWidth: ne } = S;
          g({
            left: $,
            width: ne + (p && B ? 24 : 0)
          });
        }
      }
    }, [f, o, e, p]);
    i.useLayoutEffect(() => (m(!0), () => {
      m(!1);
    }), []), i.useEffect(() => {
      E();
    }, [E]), i.useEffect(() => {
      const S = requestAnimationFrame(() => {
        E();
      });
      return () => cancelAnimationFrame(S);
    }, [f, e.length, E]);
    const H = i.useCallback(
      (S, B) => {
        m(!1), i.startTransition(() => {
          x(S);
        }), r(S, B);
      },
      [r]
    );
    return /* @__PURE__ */ y(O.Flex, { column: !0, gap: 0, style: { width: "100%", ...n }, children: [
      /* @__PURE__ */ y(
        O.Flex,
        {
          row: !0,
          style: {
            position: "relative",
            ...o === "pills" && {
              background: N[u].secondary,
              padding: "4px",
              borderRadius: "8px"
            },
            ...o === "underline" && {
              borderBottomWidth: 1.5,
              borderBottomStyle: "solid",
              borderBottomColor: A[u].secondary
            },
            ...s
          },
          children: [
            e.map((S, B) => /* @__PURE__ */ y(
              R.button,
              {
                ref: ($) => {
                  $ && (k.current[B] = $);
                },
                onClick: () => H(B, S),
                style: {
                  WebkitTapHighlightColor: "transparent",
                  padding: "12px 20px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  fontWeight: "500",
                  outline: "none",
                  border: "none",
                  color: C[u].primary,
                  background: "transparent",
                  transition: "color 0.2s ease",
                  ...o === "pills" && {
                    position: "relative",
                    zIndex: 2,
                    borderRadius: "8px"
                  },
                  ...o === "underline" && {
                    borderRadius: 0
                  },
                  ...l
                },
                children: [
                  S.icon && /* @__PURE__ */ a(
                    F,
                    {
                      icon: S.icon,
                      width: 20,
                      style: {
                        marginRight: "8px",
                        color: B === f ? h : "inherit"
                      }
                    }
                  ),
                  /* @__PURE__ */ a(
                    I.Text,
                    {
                      text: S.label,
                      style: {
                        color: B === f ? h : "inherit"
                      }
                    }
                  )
                ]
              },
              S.key || B
            )),
            /* @__PURE__ */ a(
              R.div,
              {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.2, ease: "easeOut" },
                layout: !0,
                style: {
                  position: "absolute",
                  ...b,
                  ...o === "pills" && {
                    top: "4px",
                    zIndex: 1,
                    height: "calc(100% - 8px)",
                    borderRadius: "6px",
                    background: N[u].primary,
                    boxShadow: G[u].tertiary
                  },
                  ...o === "underline" && {
                    bottom: "-2px",
                    height: "3px",
                    background: h,
                    borderRadius: "4px"
                  },
                  ...c
                }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ a(j, { mode: "wait", children: e[f] && /* @__PURE__ */ a(
        R.div,
        {
          variants: {
            enter: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
            exit: { opacity: 0, x: 10, transition: { duration: 0.2, ease: "easeIn" } }
          },
          initial: "exit",
          animate: "enter",
          exit: "exit",
          style: {
            width: "100%",
            padding: "16px",
            position: "relative",
            ...d
          },
          children: e[f].content
        },
        f
      ) })
    ] });
  }
);
Pt.displayName = "Tab";
const Ut = (e, t) => String(t);
function qt({
  columns: e,
  rows: t,
  rowUnionKey: r = Ut,
  style: o,
  renderRowActions: n,
  headProps: s,
  bodyProps: l,
  headRowProps: c,
  bodyRowProps: d,
  headRowCellProps: u,
  bodyRowCellProps: h,
  ...p
}) {
  return /* @__PURE__ */ y(
    "table",
    {
      style: {
        boxSizing: "border-box",
        display: "block",
        borderSpacing: 0,
        overflow: "scroll",
        position: "relative",
        ...o
      },
      ...p,
      children: [
        /* @__PURE__ */ a("thead", { style: { position: "sticky", top: 0, zIndex: 1, ...s == null ? void 0 : s.style }, ...s, children: /* @__PURE__ */ y(ke, { style: { ...c == null ? void 0 : c.style }, ...c, children: [
          e.map((m) => /* @__PURE__ */ a(
            J,
            {
              as: "th",
              style: { ...u == null ? void 0 : u.style },
              ...u,
              ...m.headerCellProps,
              children: m.label
            },
            String(m.key)
          )),
          n && /* @__PURE__ */ a(J, { as: "th", style: { ...h == null ? void 0 : h.style }, ...h })
        ] }) }),
        /* @__PURE__ */ a("tbody", { style: { ...l == null ? void 0 : l.style }, ...l, children: t.map((m, f) => /* @__PURE__ */ y(ke, { style: { ...d == null ? void 0 : d.style }, ...d, children: [
          e.map((x) => {
            var b;
            return /* @__PURE__ */ a(J, { as: "td", style: { ...h == null ? void 0 : h.style }, ...h, children: ((b = x.renderCell) == null ? void 0 : b.call(x, m, f)) ?? String(m[x.key] ?? "") }, String(x.key));
          }),
          n && /* @__PURE__ */ a(J, { as: "td", style: { ...h == null ? void 0 : h.style }, ...h, children: n(m, f) })
        ] }, String(r(m, f)))) })
      ]
    }
  );
}
const Xt = i.memo(qt);
Xt.displayName = "Table";
const ke = i.memo(({ style: e, ...t }) => {
  const { themeMode: r } = M.useThemeMode();
  return /* @__PURE__ */ a(
    "tr",
    {
      style: {
        boxSizing: "border-box",
        color: C[r].primary,
        ...e
      },
      ...t
    }
  );
}), J = i.memo(({ as: e = "td", style: t, ...r }) => {
  const { themeMode: o } = M.useThemeMode();
  return /* @__PURE__ */ a(
    e,
    {
      style: {
        boxSizing: "border-box",
        padding: "16px 24px",
        textAlign: "left",
        color: C[o].primary,
        backgroundColor: e === "td" ? "transparent" : N[o].secondary,
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderBottomColor: A[o].quaternary,
        ...t
      },
      ...r
    }
  );
}), dt = i.memo(({ children: e, isOpen: t }) => /* @__PURE__ */ a(j, { initial: !1, children: t && /* @__PURE__ */ a(
  R.div,
  {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
    transition: { duration: 0.2 },
    style: { overflow: "hidden" },
    children: e
  }
) }));
dt.displayName = "Transitions.Collapse";
const po = {
  Collapse: dt
};
export {
  N as BackgroundColors,
  A as BorderColors,
  T as BreakPointName,
  ae as Button,
  ue as Buttons,
  X as Card,
  ro as Cards,
  Be as Container,
  Ht as Drawer,
  Wt as Form,
  no as FormField,
  F as Icon,
  io as Layout,
  so as MediaFile,
  ot as MediaFileTypeMap,
  ge as Menu,
  it as Modal,
  ao as Modals,
  Gt as NoSSR,
  Vt as Notification,
  Ge as Popover,
  co as Portal,
  uo as Progress,
  U as SemanticColors,
  G as Shadows,
  O as Space,
  Pt as Tab,
  Xt as Table,
  C as TextColors,
  M as Theme,
  D as ThemeBreakPoint,
  v as ThemeColor,
  w as ThemeMode,
  po as Transitions,
  I as Typography,
  W as TypographySize,
  K as TypographySizeName,
  kt as getDarkerHex,
  oe as getLighterHex,
  V as getOpacityHex,
  oo as getSystemThemeMode,
  to as getThemeColors,
  le as hexNormalize,
  ve as hexToHsl,
  Me as hexToRgb,
  Ce as hslToHex,
  lo as notify,
  bt as rgbToHex,
  Y as useElementFocus,
  zt as useElementHover,
  Bt as useHandler
};
