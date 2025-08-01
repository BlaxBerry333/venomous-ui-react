import { jsx as c, jsxs as T, Fragment as ie } from "react/jsx-runtime";
import i from "react";
import { Icon as Oe } from "@iconify/react";
import { AnimatePresence as N, motion as R, useAnimation as Le, useScroll as He } from "framer-motion";
import { Toaster as ze, toast as V } from "sonner";
import { createPortal as Pe } from "react-dom";
var x = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e))(x || {});
const A = {
  success: "#4caf50",
  error: "#f44336",
  warning: "#ff9800",
  info: "#2196f3"
}, E = {
  [x.Dark]: {
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
  [x.Light]: {
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
}, z = {
  [x.Dark]: {
    primary: "#181818",
    // 主背景
    secondary: "#242424"
    // 卡片/面板背景
  },
  [x.Light]: {
    primary: "#ffffff",
    // 主背景
    secondary: "#f8f9fa"
    // 卡片/面板背景
  }
}, U = {
  [x.Dark]: {
    primary: "rgba(255, 255, 255, 0.65)",
    secondary: "rgba(255, 255, 255, 0.10)"
  },
  [x.Light]: {
    primary: "rgba(38, 85, 115, 0.15)",
    secondary: "rgba(0, 0, 0, 0.15)"
  }
};
var g = /* @__PURE__ */ ((e) => (e.xs = "xs", e.sm = "sm", e.md = "md", e.lg = "lg", e.xl = "xl", e.xxl = "xxl", e))(g || {});
const H = {
  xs: 444,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
  xxl: 2560
};
var X = /* @__PURE__ */ ((e) => (e.RubyCopperhead = "#DC2626", e.GarnetViper = "#B91C1C", e.BloodstoneAdder = "#7F1D1D", e.TopazCoral = "#EA580C", e.AmberRattlesnake = "#F59E0B", e.GoldenLanceHead = "#FBBF24", e.TopazMamushi = "#FACC15", e.EmeraldMamba = "#059669", e.MalachitePython = "#10B981", e.JadeBoomslang = "#22C55E", e.PeridotGaboonViper = "#84CC16", e.TurquoiseFerDeLance = "#06B6D4", e.SapphireCobra = "#2563EB", e.LapisLazuliSeaSnake = "#1D4ED8", e.AmethystAsp = "#7C3AED", e.AlexandriteAnaconda = "#7E22CE", e.FluoriteElapid = "#A855F7", e.TourmalineStiletto = "#DB2777", e.RoseQuartzDeathAdder = "#EC4899", e.MorganiteCoralSnake = "#F472B6", e.GraphitePuffAdder = "#1F2937", e.ObsidianBlackMamba = "#374151", e.HematiteHognose = "#6B7280", e.SmokyQuartzSandViper = "#9CA3AF", e))(X || {});
const G = {
  [x.Dark]: {
    // 卡片
    primary: `
      0px 0px 4px 0px rgba(255, 255, 255, 0.9),
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
  [x.Light]: {
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
var q = /* @__PURE__ */ ((e) => (e.h1 = "h1", e.h2 = "h2", e.h3 = "h3", e.h4 = "h4", e.h5 = "h5", e.h6 = "h6", e.text = "text", e.strong = "strong", e.small = "small", e))(q || {});
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
}, ut = (e) => ({
  background: z[e],
  border: U[e],
  text: E[e]
});
function Be() {
  return typeof window < "u" ? window.matchMedia("(prefers-color-scheme: dark)").matches : !1;
}
function pt() {
  return Be() ? x.Dark : x.Light;
}
function K(e) {
  return e = e.replace("#", ""), e.length === 3 && (e = e.split("").map((o) => o + o).join("")), `#${e}`;
}
function se(e) {
  e = e.replace("#", "");
  const o = parseInt(e, 16), r = o >> 16 & 255, t = o >> 8 & 255, n = o & 255;
  return { r, g: t, b: n };
}
function We(e, o, r) {
  const t = (n) => {
    const s = n.toString(16);
    return s.length === 1 ? "0" + s : s;
  };
  return `#${t(e)}${t(o)}${t(r)}`;
}
function ae(e) {
  const { r: o, g: r, b: t } = se(K(e)), n = o / 255, s = r / 255, a = t / 255, l = Math.max(n, s, a), d = Math.min(n, s, a), u = l - d;
  let h = 0;
  u !== 0 && (l === n ? h = (s - a) / u % 6 : l === s ? h = (a - n) / u + 2 : h = (n - s) / u + 4, h *= 60, h < 0 && (h += 360));
  const p = (l + d) / 2, y = u === 0 ? 0 : u / (1 - Math.abs(2 * p - 1));
  return { h, s: y, l: p };
}
function le(e, o, r) {
  const t = (1 - Math.abs(2 * r - 1)) * o, n = t * (1 - Math.abs(e / 60 % 2 - 1)), s = r - t / 2;
  let a = 0, l = 0, d = 0;
  return e >= 0 && e < 60 ? [a, l, d] = [t, n, 0] : e < 120 ? [a, l, d] = [n, t, 0] : e < 180 ? [a, l, d] = [0, t, n] : e < 240 ? [a, l, d] = [0, n, t] : e < 300 ? [a, l, d] = [n, 0, t] : [a, l, d] = [t, 0, n], We(Math.round((a + s) * 255), Math.round((l + s) * 255), Math.round((d + s) * 255));
}
function Fe(e, o) {
  const { h: r, s: t, l: n } = ae(e);
  return le(r, t, Math.max(0, n - o));
}
function Y(e, o) {
  const { h: r, s: t, l: n } = ae(e);
  return le(r, t, Math.min(1, n + o));
}
function F(e, o) {
  const { r, g: t, b: n } = se(K(e));
  o > 1 && (o = 1), o < 0 && (o = 0);
  const s = Math.min(1, Math.max(0, o));
  return `rgba(${r}, ${t}, ${n}, ${s})`;
}
const ce = i.memo(() => (De(), null));
ce.displayName = "Theme.InjectToHTML";
function De() {
  const { themeColor: e } = b.useThemeColor(), o = i.useMemo(
    () => ({
      light: Y(e, 0.2),
      dark: Fe(e, 0.8),
      origin: K(e),
      opacity: F(e, 0.6)
    }),
    [e]
  );
  i.useEffect(() => {
    if (typeof window > "u")
      return;
    const r = "theme-palette-style";
    let t = document.getElementById(r);
    t || (t = document.createElement("style"), t.id = r, document.head.appendChild(t));
    const n = `
      /* ==============================
         Global Theme Palette Styles
         ============================== */

      :root {
        --venomous-ui--theme-origin: ${o.origin};
        --venomous-ui--theme-dark: ${o.dark};
        --venomous-ui--theme-light: ${o.light};
        --venomous-ui--theme-opacity: ${o.opacity};
      }

      /* Selection style */
      ::selection {
        background-color: ${o.opacity};
        color: white;
      }

      /* Scrollbar style (Webkit) */
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

      /* Scrollbar style (Firefox) */
      html {
        scrollbar-color: ${o.origin} rgba(0, 0, 0, 0.1);
        scrollbar-width: thin;
      }
    `;
    t.innerHTML = n;
  }, [o]);
}
const ee = i.createContext(void 0), _e = x.Light, Ae = X.EmeraldMamba, $e = {
  THEME_MODE: "VENOMOUS_UI__THEME_MODE",
  THEME_COLOR: "VENOMOUS_UI__THEME_COLOR"
};
function Ne({
  children: e,
  defaultThemeMode: o = _e,
  defaultThemeColor: r = Ae,
  storageKey: t = $e
}) {
  const [n, s] = i.useState(!1);
  i.useEffect(() => {
    s(!0);
  }, []);
  const [a, l] = i.useState(o), [d, u] = i.useState(r), h = i.useCallback((M) => {
    l(M);
  }, []), p = i.useCallback(() => {
    l((M) => M === x.Dark ? x.Light : x.Dark);
  }, []), y = i.useCallback(() => {
    l(o);
  }, [o]), f = i.useCallback((M) => {
    u(M);
  }, []), L = i.useCallback(() => {
    u(r);
  }, [r]);
  i.useEffect(() => {
    if (n) {
      const M = localStorage.getItem(t.THEME_MODE);
      M && Object.values(x).includes(M) && l(M);
      const m = localStorage.getItem(t.THEME_COLOR);
      m && Object.values(X).includes(m) && u(m);
    }
  }, [n, t.THEME_COLOR, t.THEME_MODE]), i.useEffect(() => {
    n && (localStorage.setItem(t.THEME_MODE, a), localStorage.setItem(t.THEME_COLOR, d));
  }, [n, t.THEME_MODE, t.THEME_COLOR, a, d]);
  const B = i.useMemo(
    () => ({
      themeMode: a,
      setThemeMode: h,
      toggleThemeMode: p,
      resetThemeMode: y,
      isDarkThemeMode: a === x.Dark,
      themeColor: d,
      setThemeColor: f,
      resetThemeColor: L
    }),
    [a, h, p, y, d, f, L]
  );
  return /* @__PURE__ */ c(ee.Provider, { value: B, children: e });
}
const re = new Map(
  Object.values(g).map((e, o) => [e, o])
);
function Ge() {
  const [e, o] = i.useState(!1), [r, t] = i.useState(() => je()), [n, s] = i.useState(!1), a = i.useRef(null);
  i.useEffect(() => {
    const d = () => {
      const p = window.innerWidth;
      return p >= H.xxl ? g.xxl : p >= H.xl ? g.xl : p >= H.lg ? g.lg : p >= H.md ? g.md : p >= H.sm ? g.sm : g.xs;
    }, u = () => {
      a.current && clearTimeout(a.current), a.current = setTimeout(() => {
        const p = d();
        t((y) => y !== p ? p : y);
      }, 100);
    }, h = d();
    return t(h), s(!0), o(!0), window.addEventListener("resize", u, { passive: !0 }), () => {
      a.current && (clearTimeout(a.current), a.current = null), window.removeEventListener("resize", u);
    };
  }, []);
  const l = i.useCallback(
    (d) => {
      if (!e) return !1;
      const u = re.get(r), h = re.get(d);
      return u === void 0 || h === void 0 ? !1 : u >= h;
    },
    [r, e]
  );
  return i.useMemo(
    () => ({
      screenSize: r,
      isLargerThanOrEqual: l,
      // 渲染策略辅助
      shouldUseGridLayout: n,
      // 是否应该使用复杂的网格布局
      shouldUseFallbackLayout: !n
      // 是否应该使用降级布局
    }),
    [r, e, n, l]
  );
}
function je() {
  if (typeof window > "u")
    return g.xs;
  const e = navigator.userAgent, o = /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(e), r = /iPad|Android(?!.*Mobile)|Kindle|Silk/i.test(e);
  return o && !r ? g.xs : r ? g.md : g.lg;
}
function Ue() {
  const e = i.useContext(ee);
  if (e === void 0)
    throw new Error("useThemeColor must be used within a ThemeModeProvider");
  return {
    themeColor: e.themeColor,
    setThemeColor: e.setThemeColor,
    resetThemeColor: e.resetThemeColor
  };
}
function Ve() {
  const e = i.useContext(ee);
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
const b = {
  Provider: Ne,
  InjectToHTML: ce,
  useThemeMode: Ve,
  useThemeColor: Ue,
  useThemeBreakpoint: Ge
}, I = i.memo(({ style: e, icon: o, width: r = 20, semanticColor: t, ...n }) => {
  const { themeMode: s } = b.useThemeMode(), a = i.useMemo(() => t ? A[t] : E[s].primary, [s, t]);
  return /* @__PURE__ */ c(
    Oe,
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
        color: a,
        ...e
      },
      ...n
    }
  );
});
I.displayName = "Icon";
const S = {
  contained: "contained",
  outlined: "outlined",
  ghost: "ghost"
};
function de({
  isLoading: e,
  isDisabled: o,
  variant: r,
  semanticColor: t
}) {
  const { themeColor: n } = b.useThemeColor(), { themeMode: s } = b.useThemeMode(), a = i.useMemo(() => {
    let p = "";
    if (e || o)
      return p = z[s].secondary, p;
    switch (r) {
      case S.contained:
        p = t ? A[t] : n;
        break;
      case S.outlined:
        p = z[s].secondary;
        break;
      case S.ghost:
      default:
        p = "transparent";
        break;
    }
    return p;
  }, [r, n, s, e, o, t]), l = i.useMemo(() => {
    let p = "";
    if (e || o)
      return p = U[s].secondary, p;
    switch (r) {
      case S.contained:
        p = t ? Y(A[t], 0.25) : F(n, 0.5);
        break;
      case S.outlined:
        p = t ? A[t] : n;
        break;
      case S.ghost:
        p = U[s].secondary;
        break;
      default:
        p = "transparent";
        break;
    }
    return p;
  }, [r, n, s, e, o, t]), d = i.useMemo(() => {
    let p = "";
    if (e || o)
      return p = E[s].disabled, p;
    switch (r) {
      case S.contained:
        p = "#ffffff";
        break;
      case S.outlined:
        p = t ? A[t] : n;
        break;
      case S.ghost:
      default:
        p = E[s].primary;
        break;
    }
    return p;
  }, [r, n, s, e, o, t]), u = i.useMemo(() => {
    switch (r) {
      case S.ghost:
        return "none";
      case S.contained:
      case S.outlined:
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
        cursor: e ? "wait" : o ? "not-allowed" : "pointer",
        borderRadius: "8px",
        borderWidth: 2,
        borderColor: l,
        boxShadow: u,
        backgroundColor: a,
        color: d
      }),
      [e, o, l, a, d, u]
    )
  };
}
const ue = i.memo(
  ({
    type: e = "button",
    style: o,
    variant: r = "contained",
    isLoading: t,
    isDisabled: n,
    icon: s,
    iconWidth: a = 20,
    semanticColor: l,
    ...d
  }) => {
    const { buttonStyles: u } = de({
      isLoading: t,
      isDisabled: n || d.disabled,
      variant: r,
      semanticColor: l
    });
    return /* @__PURE__ */ c(
      "button",
      {
        type: e,
        disabled: t || n,
        style: {
          WebkitTapHighlightColor: "transparent",
          ...u,
          padding: 0,
          ...o
        },
        ...d,
        children: /* @__PURE__ */ c(
          I,
          {
            icon: t ? "eos-icons:loading" : s,
            width: a,
            style: {
              color: u.color
            }
          }
        )
      }
    );
  }
);
ue.displayName = "Buttons.Icon";
const pe = i.memo(({ style: e, text: o, ...r }) => /* @__PURE__ */ c(
  "code",
  {
    style: {
      color: X.TourmalineStiletto,
      backgroundColor: "#E7E9EB",
      border: "1px solid #CCCCCC",
      borderRadius: "4px",
      padding: "2px 4px",
      fontSize: W.small,
      fontWeight: 600,
      ...e
    },
    ...r,
    children: o
  }
));
pe.displayName = "Typography.Code";
function te({ ellipsis: e = 0, semanticColor: o }) {
  const { themeMode: r } = b.useThemeMode(), t = i.useMemo(() => o ? A[o] : E[r].primary, [r, o]), n = i.useMemo(() => e ? {
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: e,
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  } : {}, [e]);
  return {
    fontColor: t,
    ellipsisStyles: n
  };
}
const he = i.memo(
  ({ children: e, style: o, ellipsis: r = 0, semanticColor: t, ...n }) => {
    const { fontColor: s, ellipsisStyles: a } = te({ ellipsis: r, semanticColor: t });
    return /* @__PURE__ */ c(
      "p",
      {
        style: {
          boxSizing: "border-box",
          margin: 0,
          width: "100%",
          fontSize: W.text,
          lineHeight: 1.5,
          color: s,
          ...a,
          ...o
        },
        ...n,
        children: e
      }
    );
  }
);
he.displayName = "Typography.Paragraph";
const ne = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, J = {
  span: "span",
  small: "small",
  strong: "strong"
}, fe = i.memo(
  ({ style: e, text: o, as: r = J.span, isEllipsis: t = !1, semanticColor: n, ...s }) => {
    const { fontColor: a, ellipsisStyles: l } = te({ ellipsis: t ? 1 : 0, semanticColor: n });
    return r === J.strong ? /* @__PURE__ */ c(
      "strong",
      {
        style: {
          fontSize: W[q.strong],
          fontWeight: "bold",
          color: a,
          ...l,
          ...e
        },
        ...s,
        children: o
      }
    ) : r === J.small ? /* @__PURE__ */ c(
      "small",
      {
        style: {
          fontSize: W[q.small],
          color: a,
          ...l,
          ...e
        },
        ...s,
        children: o
      }
    ) : /* @__PURE__ */ c(
      "span",
      {
        style: {
          fontSize: W[q.text],
          fontWeight: "normal",
          color: a,
          ...l,
          ...e
        },
        ...s,
        children: o
      }
    );
  }
);
fe.displayName = "Typography.Text";
const me = i.memo(
  ({ text: e, as: o = ne.h4, ellipsis: r = 0, style: t, semanticColor: n, ...s }) => {
    const a = i.useMemo(() => ne[o], [o]), l = i.useMemo(() => W[o], [o]), { fontColor: d, ellipsisStyles: u } = te({ ellipsis: r, semanticColor: n });
    return /* @__PURE__ */ c(
      a,
      {
        style: {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
          width: "100%",
          fontSize: l,
          fontFamily: "inherit",
          fontWeight: "bold",
          lineHeight: "inherit",
          textAlign: "inherit",
          color: d,
          ...u,
          ...t
        },
        ...s,
        children: e
      }
    );
  }
);
me.displayName = "Typography.Title";
const O = {
  Title: me,
  Text: fe,
  Code: pe,
  Paragraph: he
}, Z = i.memo(
  ({
    type: e = "button",
    style: o,
    text: r,
    variant: t = "contained",
    isLoading: n,
    isDisabled: s,
    icon: a,
    iconPosition: l = "start",
    iconWidth: d = 20,
    semanticColor: u,
    ...h
  }) => {
    const { buttonStyles: p } = de({
      isLoading: n,
      isDisabled: s || h.disabled,
      variant: t,
      semanticColor: u
    });
    return /* @__PURE__ */ T(
      "button",
      {
        type: e,
        disabled: n || s,
        style: {
          flexDirection: l === "start" ? "row" : "row-reverse",
          WebkitTapHighlightColor: "transparent",
          ...p,
          ...o
        },
        ...h,
        children: [
          a && /* @__PURE__ */ c(
            I,
            {
              icon: a,
              width: d,
              style: {
                marginLeft: l === "start" ? "0px" : "8px",
                marginRight: l === "end" ? "0px" : "8px",
                color: "inherit"
              }
            }
          ),
          /* @__PURE__ */ c(O.Text, { text: r, style: { color: "inherit" } }),
          /* @__PURE__ */ c(
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
              children: /* @__PURE__ */ c(I, { icon: "svg-spinners:270-ring-with-bg", width: 24, style: { color: "inherit" } })
            }
          )
        ]
      }
    );
  }
);
Z.displayName = "Button";
const ge = {
  Icon: ue
}, xe = i.memo(({ children: e, style: o, row: r = !0, column: t = !1, gap: n = "8px", ...s }) => /* @__PURE__ */ c(
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
xe.displayName = "Space.Flex";
const be = i.memo(({ children: e, style: o, columns: r = 1, spacing: t = 16, ...n }) => {
  const { screenSize: s } = b.useThemeBreakpoint(), a = s ?? g.xs, l = i.useMemo(
    () => qe(r, a),
    [r, a]
  ), d = i.useMemo(
    () => Xe(t, a),
    [t, a]
  );
  return /* @__PURE__ */ c(
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
be.displayName = "Space.Grid";
const $ = Object.keys(g);
function qe(e = 1, o) {
  if (typeof e == "number")
    return e;
  const r = $.indexOf(o);
  for (let t = r; t < $.length; t++) {
    const n = e[$[t]];
    if (n !== void 0) return n;
  }
  return 1;
}
function Xe(e = 16, o) {
  if (typeof e == "number")
    return e;
  const r = $.indexOf(o);
  for (let t = r; t < $.length; t++) {
    const n = e[$[t]];
    if (n !== void 0) return n;
  }
  return 16;
}
const P = {
  Flex: xe,
  Grid: be
}, oe = {
  div: "div",
  article: "article"
}, w = {
  elevated: "elevated",
  outlined: "outlined",
  transparent: "transparent",
  frostedGlass: "frostedGlass"
}, j = i.memo(
  ({ children: e, style: o, as: r = oe.div, variant: t = w.elevated, ...n }) => {
    const { themeMode: s } = b.useThemeMode(), a = i.useMemo(() => {
      switch (t) {
        case w.transparent:
          return "transparent";
        case w.elevated:
        case w.outlined:
        case w.frostedGlass:
        default:
          return z[s].secondary;
      }
    }, [s, t]), l = i.useMemo(() => {
      switch (t) {
        case w.outlined:
        case w.transparent:
          return U[s].secondary;
        case w.elevated:
        case w.frostedGlass:
        default:
          return "transparent";
      }
    }, [s, t]), d = i.useMemo(() => {
      switch (t) {
        case w.outlined:
        case w.transparent:
          return "none";
        case w.elevated:
        case w.frostedGlass:
        default:
          return G[s].primary;
      }
    }, [s, t]);
    return /* @__PURE__ */ c(
      r,
      {
        style: {
          boxSizing: "border-box",
          borderRadius: "8px",
          padding: "16px",
          outlineWidth: 1.5,
          outlineStyle: "solid",
          outlineColor: l,
          backgroundColor: a,
          boxShadow: d,
          ...t === w.frostedGlass && {
            backdropFilter: "blur(8px) brightness(0.8)",
            WebkitBackdropFilter: "blur(8px) brightness(0.8)"
          },
          ...o
        },
        ...n,
        children: e
      }
    );
  }
);
j.displayName = "Card";
const ye = i.memo(({ children: e, height: o = 300, width: r = 200, title: t, coverImage: n }) => /* @__PURE__ */ T(
  j,
  {
    as: oe.article,
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
      /* @__PURE__ */ c(
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
      /* @__PURE__ */ c(
        P.Flex,
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
          children: t && /* @__PURE__ */ c(
            O.Title,
            {
              text: t,
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
ye.displayName = "Cards.Book";
const Ye = i.lazy(() => import("./index.chunk.js").then((e) => ({ default: e.Popover }))), Me = i.memo(({ children: e, title: o = "", description: r = "", renderMenu: t }) => /* @__PURE__ */ T(j, { as: oe.article, style: { position: "relative" }, children: [
  (o || r) && /* @__PURE__ */ T(P.Flex, { column: !0, gap: 2, style: { paddingRight: "48px" }, children: [
    /* @__PURE__ */ c(O.Title, { as: "h6", text: o, ellipsis: 1 }),
    /* @__PURE__ */ c(O.Paragraph, { ellipsis: 3, children: r })
  ] }),
  /* @__PURE__ */ c(i.Suspense, { fallback: null, children: /* @__PURE__ */ c(
    Ye,
    {
      placement: "bottom",
      renderTrigger: (n) => /* @__PURE__ */ c(
        ge.Icon,
        {
          icon: "solar:hamburger-menu-line-duotone",
          variant: "ghost",
          isDisabled: n,
          style: { boxShadow: "none" }
        }
      ),
      style: { position: "absolute", top: "4px", right: "4px", zIndex: 1 },
      contentStyle: { transform: "translateY(-40px)" },
      children: t()
    }
  ) }),
  e && /* @__PURE__ */ c(P.Flex, { column: !0, children: e })
] }));
Me.displayName = "Cards.Product";
const ht = {
  Book: ye,
  Product: Me
}, Qe = i.memo(({ children: e, breakpoint: o = g.lg, style: r, ...t }) => /* @__PURE__ */ c(
  "div",
  {
    style: {
      margin: "0 auto",
      width: "100%",
      maxWidth: H[o],
      ...r
    },
    ...t,
    children: e
  }
));
Qe.displayName = "Container";
const Je = i.memo(
  ({ isOpen: e, onClose: o, children: r, position: t = "left", maskClosable: n = !0, width: s = 300, height: a = 300, style: l }) => {
    const { themeMode: d } = b.useThemeMode();
    return /* @__PURE__ */ T(ie, { children: [
      /* @__PURE__ */ c(N, { children: e && /* @__PURE__ */ c(
        R.div,
        {
          onClick: n ? o : void 0,
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
            backgroundColor: F(z[d].primary, 0.5),
            backdropFilter: "blur(2px)",
            pointerEvents: e ? "auto" : "none"
          }
        }
      ) }),
      /* @__PURE__ */ c(N, { children: e && /* @__PURE__ */ c(
        R.div,
        {
          animate: { x: 0, y: 0 },
          transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] },
          initial: t === "left" ? { x: "-100%" } : t === "right" ? { x: "100%" } : t === "top" ? { y: "-100%" } : { y: "100%" },
          exit: t === "left" ? { x: "-100%" } : t === "right" ? { x: "100%" } : t === "top" ? { y: "-100%" } : { y: "100%" },
          style: {
            boxSizing: "border-box",
            position: "fixed",
            zIndex: 1e3,
            ...t === "left" && {
              top: 0,
              left: 0,
              width: s,
              height: "100svh"
            },
            ...t === "right" && {
              top: 0,
              right: 0,
              width: s,
              height: "100svh"
            },
            ...t === "top" && {
              top: 0,
              left: 0,
              width: "100vw",
              height: a
            },
            ...t === "bottom" && {
              bottom: 0,
              left: 0,
              width: "100vw",
              height: a
            }
          },
          children: /* @__PURE__ */ c(
            j,
            {
              style: {
                width: "100%",
                height: "100%",
                ...t === "left" && {
                  borderRight: "none",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0
                },
                ...t === "right" && {
                  borderLeft: "none",
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0
                },
                ...t === "top" && {
                  borderBottom: "none",
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0
                },
                ...t === "bottom" && {
                  borderTop: "none",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0
                },
                ...l
              },
              children: r
            }
          )
        }
      ) })
    ] });
  }
);
Je.displayName = "Drawer";
function Ze({ isDisabled: e }) {
  const [o, r] = i.useState(!1), t = i.useCallback(() => {
    r(!0);
  }, []), n = i.useCallback(() => {
    r(!1);
  }, []), s = i.useCallback(() => {
    r(!1);
  }, []);
  return i.useEffect(() => {
    e && r(!1);
  }, [e]), {
    isHovering: o,
    handleMouseDown: t,
    handleMouseUp: n,
    handleMouseLeave: s
  };
}
function Ke() {
  const [e, o] = i.useState(!1), r = i.useCallback(() => o(!0), []), t = i.useCallback(() => o(!1), []), n = i.useCallback(() => o((s) => !s), []);
  return {
    isOpen: e,
    setIsOpen: o,
    open: r,
    close: t,
    toggle: n
  };
}
const et = {
  ul: "ul"
}, tt = {
  li: "li"
}, ke = i.memo(
  ({
    as: e = tt.li,
    style: o,
    icon: r,
    text: t,
    subText: n,
    isDisabled: s = !1,
    isActive: a = !1,
    actionButton: l = void 0,
    ...d
  }) => {
    const { themeMode: u } = b.useThemeMode(), { themeColor: h } = b.useThemeColor(), { isHovering: p, handleMouseDown: y, handleMouseUp: f, handleMouseLeave: L } = Ze({ isDisabled: s }), B = i.useCallback(
      (m) => {
        s || (m.currentTarget.style.boxShadow = G[u].tertiary);
      },
      [s]
    ), M = i.useCallback(
      (m) => {
        s || (m.currentTarget.style.boxShadow = p ? G[u].tertiary : "none");
      },
      [s]
    );
    return /* @__PURE__ */ c(
      e,
      {
        onMouseDown: y,
        onMouseUp: f,
        onMouseLeave: L,
        onMouseOver: B,
        onMouseOut: M,
        style: {
          boxSizing: "border-box",
          listStyle: "none",
          margin: 0,
          padding: "8px",
          paddingLeft: r ? "8px" : "16px",
          paddingRight: l ? "8px" : "16px",
          borderRadius: "8px",
          cursor: s ? "not-allowed" : d != null && d.onClick ? "pointer" : "default",
          transition: "box-shadow 0.2s ease-in-out",
          ...o
        },
        ...d,
        children: /* @__PURE__ */ T(P.Flex, { row: !0, style: { alignItems: "center" }, children: [
          r && /* @__PURE__ */ c(
            I,
            {
              icon: r,
              width: 24,
              style: {
                color: s ? E[u].disabled : a ? h : E[u].primary
              }
            }
          ),
          /* @__PURE__ */ T(
            P.Flex,
            {
              column: !0,
              gap: 0,
              style: {
                flex: 1,
                flexGrow: 1,
                maxWidth: r && !l ? "calc(100% - 32px)" : !r && l ? "calc(100% - 48px)" : r && l ? "calc(100% - 80px)" : "100%"
              },
              children: [
                /* @__PURE__ */ c(
                  O.Text,
                  {
                    text: t,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      color: s ? E[u].disabled : a ? h : E[u].primary
                    }
                  }
                ),
                n && /* @__PURE__ */ c(
                  O.Text,
                  {
                    as: "small",
                    text: n,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      color: s ? E[u].disabled : a ? h : E[u].quaternary
                    }
                  }
                )
              ]
            }
          ),
          !!(l != null && l.icon) && /* @__PURE__ */ c(
            ge.Icon,
            {
              icon: l.icon,
              variant: "ghost",
              isDisabled: s,
              onClick: l.onClick
            }
          )
        ] })
      }
    );
  }
);
ke.displayName = "Menu.Item";
const we = i.memo(({ children: e, style: o, as: r = et.ul, ...t }) => /* @__PURE__ */ c(
  r,
  {
    style: {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      ...o
    },
    ...t,
    children: e
  }
));
we.displayName = "Menu.List";
const ft = {
  List: we,
  Item: ke
}, Te = i.memo(
  ({ children: e, style: o, isOpen: r, onClose: t, maskClosable: n = !0, maxBreakpoint: s = g.xs }) => {
    const { themeMode: a } = b.useThemeMode();
    return /* @__PURE__ */ c(N, { children: r && /* @__PURE__ */ c(
      R.div,
      {
        onClick: n ? t : void 0,
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
          backgroundColor: F(z[a].primary, 0.5),
          backdropFilter: "blur(2px)",
          opacity: r ? 1 : 0
        },
        children: /* @__PURE__ */ c(
          R.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.95 },
            transition: { duration: 0.2, ease: "easeOut" },
            onClick: (l) => l.stopPropagation(),
            style: {
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "max-content",
              maxHeight: "90%",
              width: H[s],
              maxWidth: H[s]
            },
            children: /* @__PURE__ */ c(j, { style: { width: "100%", ...o }, children: e })
          }
        )
      }
    ) });
  }
);
Te.displayName = "Modal";
const ve = i.memo(
  ({
    style: e,
    isOpen: o,
    onClose: r,
    maskClosable: t = !1,
    maxBreakpoint: n = g.xs,
    title: s,
    description: a,
    isConformLoading: l = !1,
    cancelText: d = "Cancel",
    confirmText: u = "Confirm",
    onCancel: h,
    onConfirm: p
  }) => {
    const y = i.useCallback(async () => {
      await h(), r();
    }, [h, r]), f = i.useCallback(async () => {
      await p(), r();
    }, [p, r]);
    return /* @__PURE__ */ T(Te, { isOpen: o, onClose: r, style: e, maskClosable: t, maxBreakpoint: n, children: [
      /* @__PURE__ */ c(O.Title, { as: "h5", text: s }),
      /* @__PURE__ */ c(O.Paragraph, { style: { padding: "8px 0 24px" }, children: a }),
      /* @__PURE__ */ T(P.Flex, { row: !0, gap: 8, style: { justifyContent: "flex-end" }, children: [
        /* @__PURE__ */ c(
          Z,
          {
            variant: "outlined",
            text: d,
            onClick: () => void y(),
            isDisabled: l
          }
        ),
        /* @__PURE__ */ c(
          Z,
          {
            variant: "contained",
            text: u,
            onClick: () => void f(),
            isLoading: l
          }
        )
      ] })
    ] });
  }
);
ve.displayName = "Modals.Confirm";
const mt = {
  Confirm: ve
}, ot = i.memo(({ position: e = "top-center", offset: o = 0, collapsable: r = !1 }) => {
  const { isDarkThemeMode: t } = b.useThemeMode();
  return /* @__PURE__ */ c(
    ze,
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
        success: /* @__PURE__ */ c(I, { icon: "solar:shield-check-line-duotone", color: "success" }),
        error: /* @__PURE__ */ c(I, { icon: "solar:shield-cross-line-duotone", color: "error" }),
        warning: /* @__PURE__ */ c(I, { icon: "solar:shield-warning-line-duotone", color: "warning" }),
        info: /* @__PURE__ */ c(I, { icon: "solar:info-circle-line-duotone", color: "info" })
      }
    }
  );
});
ot.displayName = "Notification";
function gt(e) {
  const o = {
    description: e.description
  };
  return e.type === "success" ? V.success(e.title, o) : e.type === "error" ? V.error(e.title, o) : e.type === "warning" ? V.warning(e.title, o) : V.info(e.title, o);
}
const rt = i.memo(
  ({ children: e, style: o, contentStyle: r, placement: t = "bottom", renderTrigger: n, trigger: s = "click" }) => {
    var M;
    const a = Ke(), l = i.useRef(null), d = i.useRef(null), u = i.useRef(null), [h, p] = i.useState({ top: 0, left: 0 });
    i.useEffect(() => {
      if (s !== "click") return;
      const m = (v) => {
        var D;
        u.current && !u.current.contains(v.target) && !((D = d.current) != null && D.contains(v.target)) && a.close();
      };
      return a.isOpen && document.addEventListener("mousedown", m), () => {
        document.removeEventListener("mousedown", m);
      };
    }, [a, s]), i.useEffect(() => {
      if (a.isOpen && l.current && d.current && u.current) {
        const m = l.current.getBoundingClientRect(), v = d.current.getBoundingClientRect(), D = u.current.offsetWidth, k = u.current.offsetHeight, C = v.top - m.top, _ = v.left - m.left, Q = t === "bottom" ? C + v.height : C - k, Ie = _ + v.width / 2 - D / 2;
        p({ top: Q, left: Ie });
      }
    }, [a.isOpen, t]);
    const L = s === "hover" ? {
      onMouseEnter: () => {
        s === "hover" && a.open();
      },
      onMouseLeave: () => {
        s === "hover" && a.close();
      }
    } : {}, B = s === "click" ? { onClick: a.toggle } : {};
    return /* @__PURE__ */ T("div", { ref: l, style: { display: "inline-block", position: "relative", ...o }, ...L, children: [
      /* @__PURE__ */ c("div", { ref: d, ...B, style: { display: "inline-block" }, children: n(a.isOpen) }),
      /* @__PURE__ */ c(N, { children: a.isOpen && /* @__PURE__ */ c(
        R.div,
        {
          ref: u,
          initial: { opacity: 0, y: t === "bottom" ? -5 : 5 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: t === "bottom" ? -5 : 5 },
          transition: { duration: 0.2 },
          style: {
            position: "absolute",
            top: h.top,
            left: h.left,
            zIndex: 1e3,
            minWidth: (M = d.current) == null ? void 0 : M.offsetWidth
          },
          children: /* @__PURE__ */ c(
            j,
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
rt.displayName = "Popover";
const Ce = i.memo(({ children: e, targetElementID: o }) => {
  const [r, t] = i.useState(null);
  return i.useEffect(() => {
    const n = document.getElementById(o);
    n && t(n);
  }, [o]), r ? Pe(/* @__PURE__ */ c(ie, { children: e }), r, o) : null;
});
Ce.displayName = "PortalRender";
const xt = {
  Render: Ce
}, Se = i.memo(({ height: e = 8 }) => {
  const o = Le(), { themeMode: r } = b.useThemeMode(), { themeColor: t } = b.useThemeColor(), n = i.useRef(null), [s, a] = i.useState(0);
  return i.useEffect(() => {
    const l = () => {
      if (n.current) {
        const d = n.current.offsetWidth, u = d * 0.3;
        a(d - u);
      }
    };
    return l(), window.addEventListener("resize", l), () => window.removeEventListener("resize", l);
  }, []), i.useEffect(() => {
    if (s === 0) return;
    (async () => {
      for (; ; )
        await o.start({ x: [0, s], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } }), await o.start({ x: [s, 0], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } });
    })();
  }, [o, s]), /* @__PURE__ */ c(
    "div",
    {
      ref: n,
      style: {
        position: "relative",
        width: "100%",
        height: e,
        overflow: "hidden",
        backgroundColor: F(t, 0.2),
        borderRadius: e / 2,
        boxShadow: G[r].tertiary
      },
      children: /* @__PURE__ */ c(
        R.div,
        {
          animate: o,
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "50%",
            backgroundImage: `linear-gradient(45deg, ${F(t, 0.15)} 0%, ${Y(t, 0.1)} 90%)`,
            borderRadius: e / 2
          }
        }
      )
    }
  );
});
Se.displayName = "Progress.LoadingBar";
const Ee = i.memo(({ height: e = 8 }) => {
  const { scrollYProgress: o } = He(), { themeColor: r } = b.useThemeColor();
  return /* @__PURE__ */ c(
    R.div,
    {
      style: {
        scaleX: o,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        originX: 0,
        zIndex: 1e4,
        backgroundImage: `linear-gradient(45deg, ${Y(r, 0.2)} 0%, ${F(r, 0.15)} 90%)`,
        height: e,
        borderTopRightRadius: "16px",
        borderBottomRightRadius: "16px"
      }
    }
  );
});
Ee.displayName = "Progress.Scrollbar";
const bt = {
  Scrollbar: Ee,
  LoadingBar: Se
}, nt = i.memo(
  ({
    tabs: e,
    defaultActiveIndex: o = 0,
    onChange: r,
    variant: t = "pills",
    tabContainerStyle: n,
    tabItemContainerStyle: s,
    tabItemStyle: a,
    tabIndicatorStyle: l,
    tabContentStyle: d
  }) => {
    const { themeMode: u } = b.useThemeMode(), { themeColor: h } = b.useThemeColor(), [p, y] = i.useState(!1), [f, L] = i.useState(o), [B, M] = i.useState({}), m = i.useRef([]), v = i.useCallback(() => {
      if (m.current[f]) {
        const k = m.current[f];
        if (k) {
          const C = !!e[f].icon, { offsetLeft: _, offsetWidth: Q } = k;
          M({
            left: _,
            width: Q + (p && C ? 24 : 0)
          });
        }
      }
    }, [f, t, e, p]);
    i.useLayoutEffect(() => (y(!0), () => {
      y(!1);
    }), []), i.useEffect(() => {
      v();
    }, [v]), i.useEffect(() => {
      const k = requestAnimationFrame(() => {
        v();
      });
      return () => cancelAnimationFrame(k);
    }, [f, e.length, v]);
    const D = i.useCallback(
      (k, C) => {
        y(!1), i.startTransition(() => {
          L(k);
        }), r(k, C);
      },
      [r]
    );
    return /* @__PURE__ */ T(P.Flex, { column: !0, gap: 0, style: { width: "100%", ...n }, children: [
      /* @__PURE__ */ T(
        P.Flex,
        {
          row: !0,
          style: {
            position: "relative",
            ...t === "pills" && {
              background: z[u].secondary,
              padding: "4px",
              borderRadius: "8px"
            },
            ...t === "underline" && {
              borderBottomWidth: 1.5,
              borderBottomStyle: "solid",
              borderBottomColor: U[u].secondary
            },
            ...s
          },
          children: [
            e.map((k, C) => /* @__PURE__ */ T(
              R.button,
              {
                ref: (_) => {
                  _ && (m.current[C] = _);
                },
                onClick: () => D(C, k),
                style: {
                  WebkitTapHighlightColor: "transparent",
                  padding: "12px 20px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  fontWeight: "500",
                  outline: "none",
                  border: "none",
                  color: E[u].primary,
                  background: "transparent",
                  transition: "color 0.2s ease",
                  ...t === "pills" && {
                    position: "relative",
                    zIndex: 2,
                    borderRadius: "8px"
                  },
                  ...t === "underline" && {
                    borderRadius: 0
                  },
                  ...a
                },
                children: [
                  k.icon && /* @__PURE__ */ c(
                    I,
                    {
                      icon: k.icon,
                      width: 20,
                      style: {
                        marginRight: "8px",
                        color: C === f ? h : "inherit"
                      }
                    }
                  ),
                  /* @__PURE__ */ c(
                    O.Text,
                    {
                      text: k.label,
                      style: {
                        color: C === f ? h : "inherit"
                      }
                    }
                  )
                ]
              },
              k.key || C
            )),
            /* @__PURE__ */ c(
              R.div,
              {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.2, ease: "easeOut" },
                layout: !0,
                style: {
                  position: "absolute",
                  ...B,
                  ...t === "pills" && {
                    top: "4px",
                    zIndex: 1,
                    height: "calc(100% - 8px)",
                    borderRadius: "6px",
                    background: z[u].primary,
                    boxShadow: G[u].tertiary
                  },
                  ...t === "underline" && {
                    bottom: "-2px",
                    height: "3px",
                    background: h,
                    borderRadius: "4px"
                  },
                  ...l
                }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ c(N, { mode: "wait", children: e[f] && /* @__PURE__ */ c(
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
nt.displayName = "Tab";
const Re = i.memo(({ children: e, isOpen: o }) => /* @__PURE__ */ c(N, { initial: !1, children: o && /* @__PURE__ */ c(
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
Re.displayName = "Transitions.Collapse";
const yt = {
  Collapse: Re
};
export {
  z as BackgroundColors,
  U as BorderColors,
  g as BreakPointName,
  Z as Button,
  ge as Buttons,
  j as Card,
  ht as Cards,
  Qe as Container,
  Je as Drawer,
  I as Icon,
  ft as Menu,
  Te as Modal,
  mt as Modals,
  ot as Notification,
  rt as Popover,
  xt as Portal,
  bt as Progress,
  A as SemanticColors,
  P as Space,
  nt as Tab,
  E as TextColors,
  b as Theme,
  H as ThemeBreakPoint,
  X as ThemeColor,
  x as ThemeMode,
  G as ThemeShadow,
  yt as Transitions,
  O as Typography,
  W as TypographySize,
  q as TypographySizeName,
  Fe as getDarkerHex,
  Y as getLighterHex,
  F as getOpacityHex,
  pt as getSystemThemeMode,
  ut as getThemeColors,
  K as hexNormalize,
  ae as hexToHsl,
  se as hexToRgb,
  le as hslToHex,
  gt as notify,
  We as rgbToHex,
  Ze as useElementHover,
  Ke as useHandler
};
