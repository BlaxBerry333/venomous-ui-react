import { jsx as l, jsxs as M, Fragment as ne } from "react/jsx-runtime";
import f from "clsx";
import s from "react";
import { Icon as ht } from "@iconify/react";
import { AnimatePresence as A, motion as L, useAnimation as pt, useScroll as ft } from "framer-motion";
import { Toaster as gt, toast as K } from "sonner";
import { createPortal as xt } from "react-dom";
var w = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e))(w || {});
const X = {
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
}, B = {
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
}, W = {
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
}, $ = {
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
var F = /* @__PURE__ */ ((e) => (e.xs = "xs", e.sm = "sm", e.md = "md", e.lg = "lg", e.xl = "xl", e.xxl = "xxl", e))(F || {});
const D = {
  xs: 444,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
  xxl: 2560
};
var S = /* @__PURE__ */ ((e) => (e.RubyCopperhead = "#DC2626", e.GarnetViper = "#B91C1C", e.BloodstoneAdder = "#7F1D1D", e.TopazCoral = "#EA580C", e.AmberRattlesnake = "#F59E0B", e.GoldenLanceHead = "#FBBF24", e.TopazMamushi = "#FACC15", e.EmeraldMamba = "#059669", e.MalachitePython = "#10B981", e.JadeBoomslang = "#22C55E", e.PeridotGaboonViper = "#84CC16", e.TurquoiseFerDeLance = "#06B6D4", e.SapphireCobra = "#2563EB", e.LapisLazuliSeaSnake = "#1D4ED8", e.AmethystAsp = "#7C3AED", e.AlexandriteAnaconda = "#7E22CE", e.FluoriteElapid = "#A855F7", e.TourmalineStiletto = "#DB2777", e.RoseQuartzDeathAdder = "#EC4899", e.MorganiteCoralSnake = "#F472B6", e.GraphitePuffAdder = "#1F2937", e.ObsidianBlackMamba = "#374151", e.HematiteHognose = "#6B7280", e.SmokyQuartzSandViper = "#9CA3AF", e))(S || {}), te = /* @__PURE__ */ ((e) => (e.h1 = "h1", e.h2 = "h2", e.h3 = "h3", e.h4 = "h4", e.h5 = "h5", e.h6 = "h6", e.text = "text", e.strong = "strong", e.small = "small", e))(te || {});
const _ = {
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
}, oo = (e) => ({
  background: B[e],
  border: W[e],
  text: C[e]
});
function yt() {
  return typeof window < "u" ? window.matchMedia("(prefers-color-scheme: dark)").matches : !1;
}
function no() {
  return yt() ? w.Dark : w.Light;
}
function ce(e) {
  return e = e.replace("#", ""), e.length === 3 && (e = e.split("").map((o) => o + o).join("")), `#${e}`;
}
function ve(e) {
  e = e.replace("#", "");
  const o = parseInt(e, 16), n = o >> 16 & 255, t = o >> 8 & 255, r = o & 255;
  return { r: n, g: t, b: r };
}
function bt(e, o, n) {
  const t = (r) => {
    const a = r.toString(16);
    return a.length === 1 ? "0" + a : a;
  };
  return `#${t(e)}${t(o)}${t(n)}`;
}
function Te(e) {
  const { r: o, g: n, b: t } = ve(ce(e)), r = o / 255, a = n / 255, i = t / 255, c = Math.max(r, a, i), d = Math.min(r, a, i), u = c - d;
  let m = 0;
  u !== 0 && (c === r ? m = (a - i) / u % 6 : c === a ? m = (i - r) / u + 2 : m = (r - a) / u + 4, m *= 60, m < 0 && (m += 360));
  const h = (c + d) / 2, p = u === 0 ? 0 : u / (1 - Math.abs(2 * h - 1));
  return { h: m, s: p, l: h };
}
function Se(e, o, n) {
  const t = (1 - Math.abs(2 * n - 1)) * o, r = t * (1 - Math.abs(e / 60 % 2 - 1)), a = n - t / 2;
  let i = 0, c = 0, d = 0;
  return e >= 0 && e < 60 ? [i, c, d] = [t, r, 0] : e < 120 ? [i, c, d] = [r, t, 0] : e < 180 ? [i, c, d] = [0, t, r] : e < 240 ? [i, c, d] = [0, r, t] : e < 300 ? [i, c, d] = [r, 0, t] : [i, c, d] = [t, 0, r], bt(Math.round((i + a) * 255), Math.round((c + a) * 255), Math.round((d + a) * 255));
}
function kt(e, o) {
  const { h: n, s: t, l: r } = Te(e);
  return Se(n, t, Math.max(0, r - o));
}
function re(e, o) {
  const { h: n, s: t, l: r } = Te(e);
  return Se(n, t, Math.min(1, r + o));
}
function j(e, o) {
  const { r: n, g: t, b: r } = ve(ce(e));
  o > 1 && (o = 1), o < 0 && (o = 0);
  const a = Math.min(1, Math.max(0, o));
  return `rgba(${n}, ${t}, ${r}, ${a})`;
}
const Ce = s.memo(() => (Mt(), null));
Ce.displayName = "Theme.InjectToHTML";
function Mt() {
  const { themeColor: e } = T.useThemeColor(), o = s.useMemo(
    () => ({
      light: re(e, 0.2),
      dark: kt(e, 0.8),
      origin: ce(e),
      opacity: j(e, 0.6)
    }),
    [e]
  );
  s.useInsertionEffect(() => {
    if (typeof window > "u")
      return;
    const n = "theme-palette-style";
    let t = document.getElementById(n);
    t || (t = document.createElement("style"), t.id = n, document.head.appendChild(t));
    const r = `
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
    t.innerHTML = r;
  }, [o]);
}
const de = s.createContext(void 0), vt = w.Light, Tt = S.EmeraldMamba, St = {
  THEME_MODE: "VENOMOUS_UI__THEME_MODE",
  THEME_COLOR: "VENOMOUS_UI__THEME_COLOR"
};
function Ct({
  children: e,
  defaultThemeMode: o = vt,
  defaultThemeColor: n = Tt,
  storageKey: t = St
}) {
  const [r, a] = s.useState(!1);
  s.useEffect(() => {
    a(!0);
  }, []);
  const [i, c] = s.useState(o), [d, u] = s.useState(n), m = s.useCallback((y) => {
    c(y);
  }, []), h = s.useCallback(() => {
    c((y) => y === w.Dark ? w.Light : w.Dark);
  }, []), p = s.useCallback(() => {
    c(o);
  }, [o]), x = s.useCallback((y) => {
    u(y);
  }, []), b = s.useCallback(() => {
    u(n);
  }, [n]);
  s.useEffect(() => {
    if (r) {
      const y = localStorage.getItem(t.THEME_MODE);
      y && Object.values(w).includes(y) && c(y);
      const g = localStorage.getItem(t.THEME_COLOR);
      g && Object.values(S).includes(g) && u(g);
    }
  }, [r, t.THEME_COLOR, t.THEME_MODE]), s.useEffect(() => {
    r && (localStorage.setItem(t.THEME_MODE, i), localStorage.setItem(t.THEME_COLOR, d));
  }, [r, t.THEME_MODE, t.THEME_COLOR, i, d]);
  const v = s.useMemo(
    () => ({
      themeMode: i,
      setThemeMode: m,
      toggleThemeMode: h,
      resetThemeMode: p,
      isDarkThemeMode: i === w.Dark,
      themeColor: d,
      setThemeColor: x,
      resetThemeColor: b
    }),
    [i, m, h, p, d, x, b]
  );
  return /* @__PURE__ */ l(de.Provider, { value: v, children: e });
}
const fe = new Map(
  Object.values(F).map((e, o) => [e, o])
);
function It() {
  const [e, o] = s.useState(!1), [n, t] = s.useState(() => Ft()), [r, a] = s.useState(!1), i = s.useRef(null);
  s.useEffect(() => {
    const d = () => {
      const h = window.innerWidth;
      return h >= D.xxl ? F.xxl : h >= D.xl ? F.xl : h >= D.lg ? F.lg : h >= D.md ? F.md : h >= D.sm ? F.sm : F.xs;
    }, u = () => {
      i.current && clearTimeout(i.current), i.current = setTimeout(() => {
        const h = d();
        t((p) => p !== h ? h : p);
      }, 100);
    }, m = d();
    return t(m), a(!0), o(!0), window.addEventListener("resize", u, { passive: !0 }), () => {
      i.current && (clearTimeout(i.current), i.current = null), window.removeEventListener("resize", u);
    };
  }, []);
  const c = s.useCallback(
    (d) => {
      if (!e) return !1;
      const u = fe.get(n), m = fe.get(d);
      return u === void 0 || m === void 0 ? !1 : u >= m;
    },
    [n, e]
  );
  return s.useMemo(
    () => ({
      screenSize: n,
      isLargerThanOrEqual: c,
      isMounted: e,
      isSSRHydrated: e && r
      // 是否已完成水合且获取真实尺寸
    }),
    [n, e, r, c]
  );
}
function Ft() {
  if (typeof window > "u")
    return F.xs;
  const e = navigator.userAgent, o = /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(e), n = /iPad|Android(?!.*Mobile)|Kindle|Silk/i.test(e);
  return o && !n ? F.xs : n ? F.md : F.lg;
}
function wt() {
  const e = s.useContext(de);
  if (e === void 0)
    throw new Error("useThemeColor must be used within a ThemeModeProvider");
  return {
    themeColor: e.themeColor,
    setThemeColor: e.setThemeColor,
    resetThemeColor: e.resetThemeColor
  };
}
function Nt() {
  const e = s.useContext(de);
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
const T = {
  Provider: Ct,
  InjectToHTML: Ce,
  useThemeMode: Nt,
  useThemeColor: wt,
  useThemeBreakpoint: It
}, N = s.memo(({ className: e, style: o, icon: n, width: t = 20, semanticColor: r, ...a }) => {
  const { themeMode: i } = T.useThemeMode(), c = s.useMemo(() => r ? X[r] : C[i].primary, [i, r]);
  return /* @__PURE__ */ l(
    ht,
    {
      ssr: !0,
      icon: n,
      className: f("Venomous-UI-React--Layout.Icon", e),
      style: {
        width: t,
        minWidth: t,
        height: t,
        minHeight: t,
        flexShrink: 0,
        display: "inline-flex",
        color: c,
        ...o
      },
      ...a
    }
  );
});
N.displayName = "Icon";
const O = {
  contained: "contained",
  outlined: "outlined",
  ghost: "ghost"
};
function Ie({
  isLoading: e,
  isDisabled: o,
  variant: n,
  semanticColor: t
}) {
  const { themeColor: r } = T.useThemeColor(), { themeMode: a } = T.useThemeMode(), i = s.useMemo(() => {
    let h = "";
    if (e || o)
      return h = B[a].secondary, h;
    switch (n) {
      case O.contained:
        h = t ? X[t] : r;
        break;
      case O.outlined:
        h = B[a].secondary;
        break;
      case O.ghost:
      default:
        h = "transparent";
        break;
    }
    return h;
  }, [n, r, a, e, o, t]), c = s.useMemo(() => {
    let h = "";
    if (e || o)
      return h = W[a].secondary, h;
    switch (n) {
      case O.contained:
        h = t ? re(X[t], 0.25) : j(r, 0.5);
        break;
      case O.outlined:
        h = t ? X[t] : r;
        break;
      case O.ghost:
        h = W[a].secondary;
        break;
      default:
        h = "transparent";
        break;
    }
    return h;
  }, [n, r, a, e, o, t]), d = s.useMemo(() => {
    let h = "";
    if (e || o)
      return h = C[a].disabled, h;
    switch (n) {
      case O.contained:
        h = "#ffffff";
        break;
      case O.outlined:
        h = t ? X[t] : r;
        break;
      case O.ghost:
      default:
        h = C[a].primary;
        break;
    }
    return h;
  }, [n, r, a, e, o, t]), u = s.useMemo(() => {
    switch (n) {
      case O.ghost:
        return "none";
      case O.contained:
      case O.outlined:
      default:
        return $[a].secondary;
    }
  }, [n, r, a]);
  return {
    buttonStyles: s.useMemo(
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
        fontSize: _.text,
        fontWeight: "bold",
        cursor: e ? "wait" : o ? "not-allowed" : "pointer",
        borderRadius: "8px",
        borderWidth: 2,
        borderColor: c,
        boxShadow: u,
        backgroundColor: i,
        color: d
      }),
      [e, o, c, i, d, u]
    )
  };
}
const Fe = s.memo(
  ({
    className: e,
    type: o = "button",
    style: n,
    variant: t = "contained",
    isLoading: r,
    isDisabled: a,
    icon: i,
    iconWidth: c = 20,
    semanticColor: d,
    ...u
  }) => {
    const { buttonStyles: m } = Ie({
      isLoading: r,
      isDisabled: a || u.disabled,
      variant: t,
      semanticColor: d
    });
    return /* @__PURE__ */ l(
      "button",
      {
        className: f("Venomous-UI-React--Buttons.Icon", e),
        type: o,
        disabled: r || a,
        style: {
          WebkitTapHighlightColor: "transparent",
          ...m,
          padding: 0,
          ...n
        },
        ...u,
        children: /* @__PURE__ */ l(
          N,
          {
            icon: r ? "eos-icons:loading" : i,
            width: c,
            style: {
              color: m.color
            }
          }
        )
      }
    );
  }
);
Fe.displayName = "Buttons.Icon";
const we = s.memo(({ className: e, style: o, text: n, ...t }) => /* @__PURE__ */ l(
  "code",
  {
    className: f("Venomous-UI-React--Typography.Code", e),
    style: {
      color: S.TourmalineStiletto,
      backgroundColor: "#E7E9EB",
      border: "1px solid #CCCCCC",
      borderRadius: "4px",
      padding: "2px 4px",
      fontSize: _.small,
      fontWeight: 600,
      ...o
    },
    ...t,
    children: n
  }
));
we.displayName = "Typography.Code";
function ue({ ellipsis: e = 0, semanticColor: o }) {
  const { themeMode: n } = T.useThemeMode(), t = s.useMemo(() => o ? X[o] : C[n].primary, [n, o]), r = s.useMemo(() => e ? {
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: e,
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  } : {}, [e]);
  return {
    fontColor: t,
    ellipsisStyles: r
  };
}
const Ne = s.memo(
  ({ children: e, className: o, style: n, ellipsis: t = 0, semanticColor: r, ...a }) => {
    const { fontColor: i, ellipsisStyles: c } = ue({ ellipsis: t, semanticColor: r });
    return /* @__PURE__ */ l(
      "p",
      {
        className: f("Venomous-UI-React--Typography.Paragraph", o),
        style: {
          boxSizing: "border-box",
          margin: 0,
          width: "100%",
          fontSize: _.text,
          lineHeight: 1.5,
          color: i,
          ...c,
          ...n
        },
        ...a,
        children: e
      }
    );
  }
);
Ne.displayName = "Typography.Paragraph";
const ge = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, Z = {
  span: "span",
  small: "small",
  strong: "strong"
}, Re = s.memo(
  ({ className: e, style: o, text: n, as: t = Z.span, isEllipsis: r = !1, semanticColor: a, ...i }) => {
    const { fontColor: c, ellipsisStyles: d } = ue({ ellipsis: r ? 1 : 0, semanticColor: a }), u = s.useMemo(() => t === Z.strong ? "bold" : "normal", [t]), m = s.useMemo(() => {
      switch (t) {
        case Z.strong:
          return _[te.strong];
        case Z.small:
          return _[te.small];
        case Z.span:
        default:
          return _[te.text];
      }
    }, [t]);
    return /* @__PURE__ */ l(
      t,
      {
        className: f("Venomous-UI-React--Typography.Text", e),
        style: {
          fontSize: m,
          fontWeight: u,
          color: c,
          ...d,
          ...o
        },
        ...i,
        children: n
      }
    );
  }
);
Re.displayName = "Typography.Text";
const Ee = s.memo(
  ({ text: e, as: o = ge.h4, ellipsis: n = 0, className: t, style: r, semanticColor: a, ...i }) => {
    const c = s.useMemo(() => ge[o], [o]), d = s.useMemo(() => _[o], [o]), { fontColor: u, ellipsisStyles: m } = ue({ ellipsis: n, semanticColor: a });
    return /* @__PURE__ */ l(
      c,
      {
        className: f("Venomous-UI-React--Typography.Title", t),
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
          color: u,
          ...m,
          ...r
        },
        ...i,
        children: e
      }
    );
  }
);
Ee.displayName = "Typography.Title";
const R = {
  Title: Ee,
  Text: Re,
  Code: we,
  Paragraph: Ne
}, le = s.memo(
  ({
    className: e,
    type: o = "button",
    style: n,
    text: t,
    variant: r = "contained",
    isLoading: a,
    isDisabled: i,
    icon: c,
    iconPosition: d = "start",
    iconWidth: u = 20,
    semanticColor: m,
    ...h
  }) => {
    const { buttonStyles: p } = Ie({
      isLoading: a,
      isDisabled: i || h.disabled,
      variant: r,
      semanticColor: m
    });
    return /* @__PURE__ */ M(
      "button",
      {
        className: f("Venomous-UI-React--Button", e),
        type: o,
        disabled: a || i,
        style: {
          flexDirection: d === "start" ? "row" : "row-reverse",
          WebkitTapHighlightColor: "transparent",
          ...p,
          ...n
        },
        ...h,
        children: [
          c && /* @__PURE__ */ l(
            N,
            {
              icon: c,
              width: u,
              style: {
                marginLeft: d === "start" ? "0px" : "8px",
                marginRight: d === "end" ? "0px" : "8px",
                color: "inherit"
              }
            }
          ),
          /* @__PURE__ */ l(R.Text, { text: t, style: { color: "inherit" } }),
          /* @__PURE__ */ l(
            "div",
            {
              style: {
                display: a ? "flex" : "none",
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
              children: /* @__PURE__ */ l(N, { icon: "svg-spinners:270-ring-with-bg", width: 24, style: { color: "inherit" } })
            }
          )
        ]
      }
    );
  }
);
le.displayName = "Button";
const me = {
  Icon: Fe
}, Le = s.memo(
  ({ children: e, className: o, style: n, row: t = !0, column: r = !1, gap: a = "8px", ...i }) => /* @__PURE__ */ l(
    "div",
    {
      className: f("Venomous-UI-React--Space.Flex", o),
      style: {
        boxSizing: "border-box",
        display: "flex",
        width: "100%",
        flexDirection: r ? "column" : "row",
        alignItems: t ? "flex-start" : n == null ? void 0 : n.alignItems,
        ...Array.isArray(a) ? { rowGap: a[0], columnGap: a[1] } : { gap: a },
        position: "relative",
        ...n
      },
      ...i,
      children: e
    }
  )
);
Le.displayName = "Space.Flex";
const Ve = s.memo(({ children: e, className: o, style: n, columns: t = 1, spacing: r = 16, ...a }) => {
  const { screenSize: i } = T.useThemeBreakpoint(), c = i ?? F.xs, d = s.useMemo(
    () => Rt(t, c),
    [t, c]
  ), u = s.useMemo(
    () => Et(r, c),
    [r, c]
  );
  return /* @__PURE__ */ l(
    "div",
    {
      className: f("Venomous-UI-React--Space.Grid", o),
      style: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: `repeat(${d}, 1fr)`,
        gap: `${u}px`,
        ...n
      },
      ...a,
      children: e
    }
  );
});
Ve.displayName = "Space.Grid";
const Y = Object.keys(F);
function Rt(e = 1, o) {
  if (typeof e == "number")
    return e;
  const n = Y.indexOf(o);
  for (let t = n; t < Y.length; t++) {
    const r = e[Y[t]];
    if (r !== void 0) return r;
  }
  return 1;
}
function Et(e = 16, o) {
  if (typeof e == "number")
    return e;
  const n = Y.indexOf(o);
  for (let t = n; t < Y.length; t++) {
    const r = e[Y[t]];
    if (r !== void 0) return r;
  }
  return 16;
}
const V = {
  Flex: Le,
  Grid: Ve
}, he = {
  div: "div",
  article: "article"
}, E = {
  elevated: "elevated",
  outlined: "outlined",
  transparent: "transparent",
  frostedGlass: "frostedGlass"
}, Q = s.memo(
  ({ children: e, className: o, style: n, as: t = he.div, variant: r = E.elevated, ...a }) => {
    const { themeMode: i } = T.useThemeMode(), c = s.useMemo(() => {
      switch (r) {
        case E.transparent:
          return "transparent";
        case E.elevated:
        case E.outlined:
        case E.frostedGlass:
        default:
          return B[i].secondary;
      }
    }, [i, r]), d = s.useMemo(() => {
      switch (r) {
        case E.outlined:
        case E.transparent:
          return W[i].tertiary;
        case E.elevated:
        case E.frostedGlass:
        default:
          return "transparent";
      }
    }, [i, r]), u = s.useMemo(() => {
      switch (r) {
        case E.outlined:
        case E.transparent:
          return "none";
        case E.elevated:
        case E.frostedGlass:
        default:
          return $[i].primary;
      }
    }, [i, r]);
    return /* @__PURE__ */ l(
      t,
      {
        className: f("Venomous-UI-React--Card", o),
        style: {
          boxSizing: "border-box",
          borderRadius: "8px",
          padding: "16px",
          outlineWidth: 1.5,
          outlineStyle: "solid",
          outlineColor: d,
          backgroundColor: c,
          boxShadow: u,
          ...r === E.frostedGlass && {
            backdropFilter: "blur(8px) brightness(0.8)",
            WebkitBackdropFilter: "blur(8px) brightness(0.8)"
          },
          ...n
        },
        ...a,
        children: e
      }
    );
  }
);
Q.displayName = "Card";
const Ue = s.memo(
  ({ children: e, className: o, height: n = 300, width: t = 200, title: r, coverImage: a }) => /* @__PURE__ */ M(
    Q,
    {
      as: he.article,
      className: f("Venomous-UI-React--Cards.Book", o),
      style: {
        height: n,
        width: t,
        padding: "16px 24px",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        backgroundColor: "transparent",
        backgroundImage: `url(${a})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#ffffff"
      },
      children: [
        e,
        /* @__PURE__ */ l(
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
        /* @__PURE__ */ l(
          V.Flex,
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
            children: r && /* @__PURE__ */ l(
              R.Title,
              {
                text: r,
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
  )
);
Ue.displayName = "Cards.Book";
const Lt = s.lazy(() => import("./index.chunk.js").then((e) => ({ default: e.Popover }))), Oe = s.memo(
  ({ children: e, className: o, title: n = "", description: t = "", renderMenu: r }) => /* @__PURE__ */ M(
    Q,
    {
      as: he.article,
      className: f("Venomous-UI-React--Cards.Book", o),
      style: { position: "relative" },
      children: [
        (n || t) && /* @__PURE__ */ M(V.Flex, { column: !0, gap: 2, style: { paddingRight: "48px" }, children: [
          /* @__PURE__ */ l(R.Title, { as: "h6", text: n, ellipsis: 1 }),
          /* @__PURE__ */ l(R.Paragraph, { ellipsis: 3, children: t })
        ] }),
        /* @__PURE__ */ l(s.Suspense, { fallback: null, children: /* @__PURE__ */ l(
          Lt,
          {
            placement: "bottom",
            renderTrigger: (a) => /* @__PURE__ */ l(
              me.Icon,
              {
                icon: "solar:hamburger-menu-line-duotone",
                variant: "ghost",
                isDisabled: a,
                style: { boxShadow: "none" }
              }
            ),
            style: { position: "absolute", top: "4px", right: "4px", zIndex: 1 },
            contentStyle: { transform: "translateY(-40px)" },
            children: r()
          }
        ) }),
        e && /* @__PURE__ */ l(V.Flex, { column: !0, children: e })
      ]
    }
  )
);
Oe.displayName = "Cards.Product";
const ro = {
  Book: Ue,
  Product: Oe
}, Be = s.memo(
  ({ children: e, maxBreakpoint: o = F.lg, className: n, style: t, ...r }) => /* @__PURE__ */ l(
    "div",
    {
      className: f("Venomous-UI-React--Container", n),
      style: {
        margin: "0 auto",
        width: "100%",
        maxWidth: D[o],
        ...t
      },
      ...r,
      children: e
    }
  )
);
Be.displayName = "Container";
const Vt = s.memo(
  ({ isOpen: e, onClose: o, children: n, position: t = "left", maskClosable: r = !0, width: a = 300, height: i = 300, style: c }) => {
    const { themeMode: d } = T.useThemeMode();
    return /* @__PURE__ */ M(ne, { children: [
      /* @__PURE__ */ l(A, { children: e && /* @__PURE__ */ l(
        L.div,
        {
          onClick: r ? o : void 0,
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.3 },
          className: f("Venomous-UI-React--Drawer.Mask"),
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 999,
            width: "100vw",
            height: "100svh",
            backgroundColor: j(B[d].primary, 0.5),
            backdropFilter: "blur(2px)",
            pointerEvents: e ? "auto" : "none"
          }
        }
      ) }),
      /* @__PURE__ */ l(A, { children: e && /* @__PURE__ */ l(
        L.div,
        {
          animate: { x: 0, y: 0 },
          transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] },
          initial: t === "left" ? { x: "-100%" } : t === "right" ? { x: "100%" } : t === "top" ? { y: "-100%" } : { y: "100%" },
          exit: t === "left" ? { x: "-100%" } : t === "right" ? { x: "100%" } : t === "top" ? { y: "-100%" } : { y: "100%" },
          className: f("Venomous-UI-React--Drawer.Panel"),
          style: {
            boxSizing: "border-box",
            position: "fixed",
            zIndex: 1e3,
            ...t === "left" && {
              top: 0,
              left: 0,
              width: a,
              height: "100svh"
            },
            ...t === "right" && {
              top: 0,
              right: 0,
              width: a,
              height: "100svh"
            },
            ...t === "top" && {
              top: 0,
              left: 0,
              width: "100vw",
              height: i
            },
            ...t === "bottom" && {
              bottom: 0,
              left: 0,
              width: "100vw",
              height: i
            }
          },
          children: /* @__PURE__ */ l(
            Q,
            {
              className: f("Venomous-UI-React--Drawer.Card"),
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
                ...c
              },
              children: n
            }
          )
        }
      ) })
    ] });
  }
);
Vt.displayName = "Drawer";
const P = {
  top: "top",
  left: "left",
  right: "right"
}, se = s.memo(
  ({
    children: e,
    className: o,
    style: n,
    htmlFor: t,
    label: r = "",
    isError: a = !1,
    required: i = !1,
    position: c = P.top,
    ...d
  }) => {
    const { themeMode: u } = T.useThemeMode();
    return /* @__PURE__ */ M(
      "label",
      {
        htmlFor: t,
        className: f("Venomous-UI-React--Form.Label", o),
        style: {
          width: "max-content",
          display: "flex",
          gap: "8px",
          ...c === P.top && { flexDirection: "column", alignItems: "flex-start" },
          ...c === P.left && { flexDirection: "row", alignItems: "center" },
          ...c === P.right && { flexDirection: "row-reverse", alignItems: "center" },
          color: a ? S.RubyCopperhead : C[u].primary,
          ...n
        },
        ...d,
        children: [
          /* @__PURE__ */ M(V.Flex, { row: !0, gap: 0, style: { width: "100%", alignItems: "center" }, children: [
            i && /* @__PURE__ */ l(R.Text, { as: "small", text: "*", style: { color: S.RubyCopperhead, marginRight: "2px" } }),
            /* @__PURE__ */ l(
              R.Text,
              {
                as: "small",
                text: r,
                style: { color: "inherit", fontWeight: "bold", paddingLeft: i ? 0 : "4px" }
              }
            )
          ] }),
          e
        ]
      }
    );
  }
);
se.displayName = "Form.Label";
function z({
  fullWidth: e = !1,
  isDisabled: o = !1,
  isError: n = !1,
  isFocused: t = !1
}) {
  const { themeMode: r } = T.useThemeMode(), { themeColor: a } = T.useThemeColor(), i = s.useMemo(() => o ? B[r].secondary : "transparent", [o, r]), c = s.useMemo(() => n ? S.RubyCopperhead : o ? C[r].disabled : C[r].primary, [n, o, r]), d = s.useMemo(() => n ? S.RubyCopperhead : o ? C[r].disabled : C[r].quaternary, [n, o, r]), u = s.useMemo(() => n ? S.RubyCopperhead : o ? W[r].secondary : W[r].primary, [n, r]), m = s.useMemo(() => n ? S.RubyCopperhead : a, [n, r]), h = s.useMemo(
    () => ({
      display: e ? "block" : "inline-block",
      width: e ? "100%" : "auto",
      minWidth: e ? "100%" : 200,
      minHeight: 40,
      padding: "8px",
      backgroundColor: i,
      color: c,
      borderRadius: "8px",
      borderWidth: 1.5,
      borderStyle: "solid",
      borderColor: u,
      ...t && {
        outlineOffset: -1.5,
        outlineWidth: 1.5,
        outlineStyle: "solid",
        outlineColor: m
      },
      ...o && {
        cursor: "not-allowed",
        outline: "none"
      }
    }),
    [e, t, o, i, c, u, m]
  );
  return {
    backgroundColor: i,
    textColor: c,
    helperTextColor: d,
    borderColor: u,
    outlineColor: m,
    commonStyles: h
  };
}
function He({
  checked: e = !1,
  disabled: o = !1,
  onChange: n
}) {
  const t = s.useRef(null), [r, a] = s.useState(e);
  s.useEffect(() => {
    a(!!e);
  }, [e]);
  const i = s.useCallback(
    (d) => {
      a(d.target.checked), n == null || n(d);
    },
    [n]
  ), c = s.useCallback(
    (d) => {
      if (d.preventDefault(), d.stopPropagation(), !o && t.current) {
        const u = !r;
        a(u);
        const m = new Event("change", { bubbles: !0 });
        Object.defineProperty(m, "target", {
          writable: !1,
          value: { ...t.current, checked: u }
        }), n == null || n(m);
      }
    },
    [o, r, n]
  );
  return {
    inputRef: t,
    isChecked: r,
    toggleOriginalIsChecked: i,
    toggleCustomIsChecked: c
  };
}
const ze = s.memo(
  ({
    className: e,
    style: o,
    autoComplete: n = "off",
    required: t = !1,
    isError: r = !1,
    disabled: a = !1,
    name: i,
    value: c,
    checked: d = !1,
    onChange: u,
    label: m,
    labelPosition: h = "right",
    ...p
  }) => {
    const { inputRef: x, isChecked: b, toggleOriginalIsChecked: v, toggleCustomIsChecked: y } = He({
      checked: d,
      disabled: a,
      onChange: u
    }), { outlineColor: g, borderColor: k } = z({
      isDisabled: a,
      isError: r
    });
    return /* @__PURE__ */ M(
      se,
      {
        label: m,
        required: t,
        isError: r,
        position: h,
        style: {
          cursor: a ? "not-allowed" : "pointer",
          opacity: a ? 0.6 : 1
        },
        children: [
          /* @__PURE__ */ l(
            "input",
            {
              type: "checkbox",
              name: i,
              value: c,
              checked: b,
              ref: x,
              onChange: v,
              autoComplete: n,
              disabled: a,
              style: { display: "none" },
              ...p
            }
          ),
          /* @__PURE__ */ l(
            N,
            {
              icon: b ? "fluent:checkbox-checked-24-filled" : "fluent:checkbox-unchecked-24-regular",
              width: 24,
              onClick: y,
              className: f("Venomous-UI-React--FormField.Checkbox", e),
              style: {
                color: b ? g : k,
                cursor: a ? "not-allowed" : "pointer",
                ...o
              }
            }
          )
        ]
      }
    );
  }
);
ze.displayName = "FormField.Checkbox";
function J() {
  const [e, o] = s.useState(!1), n = s.useCallback(() => {
    o(!0);
  }, []), t = s.useCallback(() => {
    o(!1);
  }, []);
  return {
    isFocused: e,
    setIsFocused: o,
    handleFocus: n,
    handleBlur: t
  };
}
function Ut({ isDisabled: e }) {
  const [o, n] = s.useState(!1), t = s.useCallback(() => {
    n(!0);
  }, []), r = s.useCallback(() => {
    n(!1);
  }, []), a = s.useCallback(() => {
    n(!1);
  }, []);
  return s.useEffect(() => {
    e && n(!1);
  }, [e]), {
    isHovering: o,
    handleMouseDown: t,
    handleMouseUp: r,
    handleMouseLeave: a
  };
}
function Ot() {
  const [e, o] = s.useState(!1), n = s.useCallback(() => o(!0), []), t = s.useCallback(() => o(!1), []), r = s.useCallback(() => o((a) => !a), []);
  return {
    isOpen: e,
    setIsOpen: o,
    open: n,
    close: t,
    toggle: r
  };
}
const G = s.memo(
  ({
    children: e,
    className: o,
    style: n,
    fullWidth: t = !1,
    required: r = !1,
    isDisabled: a = !1,
    isError: i = !1,
    isFocused: c = !1,
    label: d,
    helpText: u,
    ...m
  }) => {
    const { themeColor: h } = T.useThemeColor(), { themeMode: p } = T.useThemeMode(), { helperTextColor: x } = z({
      fullWidth: t,
      isDisabled: a,
      isError: i
    });
    return /* @__PURE__ */ M(
      "fieldset",
      {
        disabled: a,
        className: f("Venomous-UI-React--FormField", o),
        style: {
          boxSizing: "border-box",
          border: "none",
          padding: 0,
          margin: 0,
          width: t ? "100%" : "max-content",
          color: i ? S.RubyCopperhead : a ? C[p].disabled : c ? h : C[p].primary,
          ...n
        },
        ...m,
        children: [
          d && /* @__PURE__ */ M("legend", { style: { padding: 0, color: "inherit" }, children: [
            r && /* @__PURE__ */ l(
              R.Text,
              {
                as: "small",
                text: "*",
                style: {
                  color: S.RubyCopperhead,
                  fontWeight: "bold",
                  verticalAlign: "text-bottom"
                }
              }
            ),
            /* @__PURE__ */ l(
              R.Text,
              {
                as: "small",
                text: d,
                style: {
                  color: "inherit",
                  fontWeight: "bold",
                  paddingLeft: r ? "2px" : "4px"
                }
              }
            )
          ] }),
          /* @__PURE__ */ M(V.Flex, { column: !0, gap: 0, style: { width: "100%" }, children: [
            e,
            u && /* @__PURE__ */ l(
              R.Text,
              {
                as: "small",
                text: u,
                style: {
                  color: x,
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
G.displayName = "FormField";
const De = s.memo(
  ({
    className: e,
    style: o,
    fullWidth: n,
    autoComplete: t = "off",
    required: r = !1,
    isError: a = !1,
    disabled: i = !1,
    name: c,
    value: d,
    label: u,
    helpText: m,
    ...h
  }) => {
    const { isFocused: p, handleFocus: x, handleBlur: b } = J(), { commonStyles: v } = z({
      fullWidth: n,
      isDisabled: i,
      isError: a,
      isFocused: p
    });
    return /* @__PURE__ */ l(
      G,
      {
        label: u,
        required: r,
        isDisabled: i,
        isError: a,
        isFocused: p,
        fullWidth: n,
        helpText: m,
        children: /* @__PURE__ */ l(
          "input",
          {
            type: "number",
            name: c,
            value: d,
            autoComplete: t,
            disabled: i,
            onFocus: i ? void 0 : x,
            onBlur: i ? void 0 : b,
            className: f("Venomous-UI-React--FormField.Number", e),
            style: {
              boxSizing: "border-box",
              ...v,
              ...o
            },
            ...h
          }
        )
      }
    );
  }
);
De.displayName = "FormField.Number";
const _e = s.memo(
  ({
    className: e,
    style: o,
    fullWidth: n,
    autoComplete: t = "off",
    required: r = !1,
    isError: a = !1,
    disabled: i = !1,
    name: c,
    value: d,
    label: u,
    helpText: m,
    ...h
  }) => {
    const { isFocused: p, handleFocus: x, handleBlur: b } = J(), { outlineColor: v, commonStyles: y, textColor: g } = z({
      fullWidth: n,
      isDisabled: i,
      isError: a,
      isFocused: p
    }), { isPasswordVisible: k, togglePasswordVisibility: H } = Bt(!1);
    return /* @__PURE__ */ l(
      G,
      {
        label: u,
        required: r,
        isDisabled: i,
        isFocused: p,
        isError: a,
        fullWidth: n,
        helpText: m,
        children: /* @__PURE__ */ M(
          "div",
          {
            style: {
              ...y,
              position: "relative",
              overflow: "hidden",
              padding: 0
            },
            children: [
              /* @__PURE__ */ l(
                "input",
                {
                  type: k ? "text" : "password",
                  name: c,
                  value: d,
                  autoComplete: t,
                  spellCheck: !1,
                  disabled: i,
                  onFocus: i ? void 0 : x,
                  onBlur: i ? void 0 : b,
                  className: f("Venomous-UI-React--FormField.Password", e),
                  style: {
                    boxSizing: "border-box",
                    border: "none",
                    outline: "none",
                    position: "relative",
                    width: "calc(100% - 34px)",
                    minHeight: y.minHeight,
                    color: g,
                    backgroundColor: y.backgroundColor,
                    padding: y.padding,
                    paddingRight: 0,
                    ...o
                  },
                  ...h
                }
              ),
              /* @__PURE__ */ l(
                N,
                {
                  icon: k ? "solar:eye-linear" : "solar:eye-closed-broken",
                  width: 20,
                  onClick: H,
                  style: {
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: v,
                    padding: y.padding
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
_e.displayName = "FormField.Password";
function Bt(e = !1) {
  const [o, n] = s.useState(e), t = s.useCallback((r) => {
    s.startTransition(() => {
      r.preventDefault(), r.stopPropagation(), n((a) => !a);
    });
  }, []);
  return {
    isPasswordVisible: o,
    togglePasswordVisibility: t
  };
}
const We = s.memo(
  ({
    required: e = !1,
    disabled: o = !1,
    name: n,
    label: t,
    labelPosition: r = "right",
    fullWidth: a,
    value: i,
    options: c,
    onChange: d,
    className: u,
    style: m
  }) => {
    const [h, p] = s.useState(i || null);
    s.useEffect(() => {
      p(i || null);
    }, [i]);
    const { outlineColor: x, borderColor: b } = z({
      isDisabled: o
    }), v = s.useCallback(
      (y) => {
        if (o) return;
        p(y);
        const g = {
          target: {
            name: n,
            value: y
          }
        };
        d == null || d(g);
      },
      [o, n, d]
    );
    return /* @__PURE__ */ l(G, { label: t, required: e, isDisabled: o, fullWidth: a, children: /* @__PURE__ */ l(V.Flex, { column: !0, gap: 8, style: { marginTop: 4 }, children: c.map((y) => {
      const g = y.value === h, k = o || y.disabled;
      return /* @__PURE__ */ M(
        se,
        {
          label: y.label,
          position: r,
          style: {
            cursor: k ? "not-allowed" : "pointer",
            opacity: k ? 0.6 : 1
          },
          children: [
            /* @__PURE__ */ l(
              "input",
              {
                type: "radio",
                name: n,
                value: y.value,
                checked: g,
                disabled: k,
                onChange: () => v(y.value),
                style: { display: "none" }
              }
            ),
            /* @__PURE__ */ l(
              N,
              {
                icon: g ? "fluent:radio-button-24-filled" : "fluent:radio-button-24-regular",
                width: 24,
                onClick: () => {
                  k || v(y.value);
                },
                className: (f("Venomous-UI-React--FormField.Radio"), u),
                style: {
                  color: g ? x : b,
                  cursor: k ? "not-allowed" : "pointer",
                  ...m
                }
              }
            )
          ]
        },
        y.value
      );
    }) }) });
  }
);
We.displayName = "FormField.Radio";
const Ht = {
  ul: "ul"
}, zt = {
  li: "li"
}, Ae = s.memo(
  ({
    as: e = zt.li,
    className: o,
    style: n,
    icon: t,
    text: r,
    subText: a,
    isDisabled: i = !1,
    isActive: c = !1,
    actionButton: d = void 0,
    ...u
  }) => {
    const { themeMode: m } = T.useThemeMode(), { themeColor: h } = T.useThemeColor(), { isHovering: p, handleMouseDown: x, handleMouseUp: b, handleMouseLeave: v } = Ut({
      isDisabled: i
    }), y = s.useCallback(
      (k) => {
        i || (k.currentTarget.style.boxShadow = $[m].tertiary);
      },
      [i]
    ), g = s.useCallback(
      (k) => {
        i || (k.currentTarget.style.boxShadow = p ? $[m].tertiary : "none");
      },
      [i]
    );
    return /* @__PURE__ */ l(
      e,
      {
        onMouseDown: x,
        onMouseUp: b,
        onMouseLeave: v,
        onMouseOver: y,
        onMouseOut: g,
        className: f("Venomous-UI-React--Menu.Item", o),
        style: {
          boxSizing: "border-box",
          listStyle: "none",
          margin: 0,
          padding: "8px",
          paddingRight: d ? "8px" : "16px",
          borderRadius: "8px",
          cursor: i ? "not-allowed" : u != null && u.onClick ? "pointer" : "default",
          transition: "box-shadow 0.2s ease-in-out",
          ...n
        },
        ...u,
        children: /* @__PURE__ */ M(V.Flex, { row: !0, style: { alignItems: "center" }, children: [
          t && /* @__PURE__ */ l(
            N,
            {
              icon: t,
              width: 24,
              style: {
                color: i ? C[m].disabled : c ? h : C[m].primary
              }
            }
          ),
          /* @__PURE__ */ M(
            V.Flex,
            {
              column: !0,
              gap: 0,
              style: {
                flex: 1,
                flexGrow: 1,
                maxWidth: t && !d ? "calc(100% - 32px)" : !t && d ? "calc(100% - 48px)" : t && d ? "calc(100% - 80px)" : "100%"
              },
              children: [
                /* @__PURE__ */ l(
                  R.Text,
                  {
                    text: r,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      color: i ? C[m].disabled : c ? h : C[m].primary
                    }
                  }
                ),
                a && /* @__PURE__ */ l(
                  R.Text,
                  {
                    as: "small",
                    text: a,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      color: i ? C[m].disabled : c ? h : C[m].quaternary
                    }
                  }
                )
              ]
            }
          ),
          !!(d != null && d.icon) && /* @__PURE__ */ l(
            me.Icon,
            {
              icon: d.icon,
              variant: "ghost",
              isDisabled: i,
              onClick: d.onClick
            }
          )
        ] })
      }
    );
  }
);
Ae.displayName = "Menu.Item";
const $e = s.memo(({ children: e, className: o, style: n, as: t = Ht.ul, ...r }) => /* @__PURE__ */ l(
  t,
  {
    className: f("Venomous-UI-React--Menu.List", o),
    style: {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      ...n
    },
    ...r,
    children: e
  }
));
$e.displayName = "Menu.List";
const xe = {
  List: $e,
  Item: Ae
}, je = s.memo(
  ({ children: e, style: o, contentStyle: n, placement: t = "bottom", renderTrigger: r, trigger: a = "click", onClickOutside: i }) => {
    var y;
    const c = Ot(), d = s.useRef(null), u = s.useRef(null), m = s.useRef(null), [h, p] = s.useState({ top: 0, left: 0 });
    s.useEffect(() => {
      if (a !== "click") return;
      const g = (k) => {
        var H;
        m.current && !m.current.contains(k.target) && !((H = u.current) != null && H.contains(k.target)) && (c.close(), i && i());
      };
      return c.isOpen && document.addEventListener("mousedown", g), () => {
        document.removeEventListener("mousedown", g);
      };
    }, [c, a, i]), s.useEffect(() => {
      if (c.isOpen && d.current && u.current && m.current) {
        const g = d.current.getBoundingClientRect(), k = u.current.getBoundingClientRect(), H = m.current.offsetWidth, I = m.current.offsetHeight, U = k.top - g.top, q = k.left - g.left, ae = t === "bottom" ? U + k.height : U - I, mt = q + k.width / 2 - H / 2;
        p({ top: ae, left: mt });
      }
    }, [c.isOpen, t]);
    const v = a === "hover" ? {
      onMouseEnter: () => {
        a === "hover" && c.open();
      },
      onMouseLeave: () => {
        a === "hover" && c.close();
      }
    } : {};
    return /* @__PURE__ */ M("div", { ref: d, style: { display: "inline-block", position: "relative", ...o }, ...v, children: [
      /* @__PURE__ */ l(
        "div",
        {
          ref: u,
          ...a === "click" ? { onClick: c.toggle } : {},
          className: f("Venomous-UI-React--Popover.Trigger"),
          style: { display: "inline-block", width: "100%" },
          children: r(c.isOpen)
        }
      ),
      /* @__PURE__ */ l(A, { children: c.isOpen && /* @__PURE__ */ l(
        L.div,
        {
          ref: m,
          initial: { opacity: 0, y: 0 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 0 },
          transition: { duration: 0.2 },
          className: f("Venomous-UI-React--Popover"),
          style: {
            position: "absolute",
            top: h.top,
            left: h.left,
            zIndex: 1e3,
            minWidth: (y = u.current) == null ? void 0 : y.offsetWidth
          },
          children: /* @__PURE__ */ l(
            Q,
            {
              style: {
                padding: "8px",
                ...n
              },
              children: e
            }
          )
        }
      ) })
    ] });
  }
);
je.displayName = "Popover";
const Ge = s.memo(
  ({
    isOriginalSelect: e = !1,
    fullWidth: o,
    required: n = !1,
    isError: t = !1,
    disabled: r = !1,
    label: a,
    helpText: i,
    ...c
  }) => {
    const { isFocused: d, setIsFocused: u, handleFocus: m, handleBlur: h } = J(), { commonStyles: p } = z({
      fullWidth: o,
      isDisabled: r,
      isError: t,
      isFocused: d
    });
    return /* @__PURE__ */ M(
      G,
      {
        label: a,
        required: n,
        isDisabled: r,
        isError: t,
        isFocused: d,
        fullWidth: o,
        helpText: i,
        children: [
          e && /* @__PURE__ */ l(
            qe,
            {
              commonStyles: p,
              handleFocus: m,
              handleBlur: h,
              disabled: r,
              ...c
            }
          ),
          !e && /* @__PURE__ */ l(Xe, { commonStyles: p, setIsFocused: u, disabled: r, ...c })
        ]
      }
    );
  }
);
Ge.displayName = "FormField.Select";
const qe = s.memo(
  ({
    commonStyles: e,
    handleFocus: o,
    handleBlur: n,
    name: t,
    autoComplete: r = "off",
    options: a,
    onChange: i,
    value: c,
    disabled: d,
    className: u,
    style: m,
    ...h
  }) => /* @__PURE__ */ l(
    "select",
    {
      name: t,
      autoComplete: r,
      disabled: d,
      onFocus: o,
      onBlur: n,
      onChange: i,
      value: c,
      className: f("Venomous-UI-React--FormField.Select", u),
      style: {
        boxSizing: "border-box",
        ...e,
        ...m
      },
      ...h,
      children: a.map((p) => /* @__PURE__ */ l("option", { value: p.value, disabled: p.disabled, children: p.label }, p.value))
    }
  )
), Xe = s.memo(({ commonStyles: e, setIsFocused: o, disabled: n, name: t, value: r, options: a, onChange: i, className: c, style: d }) => {
  const [u, m] = s.useState(r || null), [h, p] = s.useState(!1);
  s.useEffect(() => {
    m(r || null);
  }, [r]);
  const x = s.useCallback(
    (g) => {
      m(g), p(!1), o(!1);
      const k = {
        target: { name: t, value: g },
        currentTarget: { name: t, value: g }
      };
      i == null || i(k);
    },
    [t, i, o]
  ), b = s.useCallback(
    (g) => {
      g.stopPropagation(), m(null), o(!1);
      const k = {
        target: { name: t, value: "" },
        currentTarget: { name: t, value: "" }
      };
      i == null || i(k);
    },
    [t, i, o]
  ), v = s.useMemo(
    () => {
      var g;
      return ((g = a.find((k) => k.value === u)) == null ? void 0 : g.label) || "";
    },
    [u]
  ), y = (d == null ? void 0 : d.width) ?? e.minWidth;
  return /* @__PURE__ */ l(
    je,
    {
      placement: "bottom",
      trigger: "click",
      style: { width: "100%" },
      onClickOutside: () => o(!1),
      renderTrigger: () => /* @__PURE__ */ M(
        V.Flex,
        {
          row: !0,
          onClick: () => o(!0),
          style: {
            ...e,
            height: e.minHeight,
            width: y,
            display: "flex",
            alignItems: "center"
          },
          children: [
            /* @__PURE__ */ l(R.Paragraph, { ellipsis: 1, style: { flex: 1 }, children: v }),
            u && !n && /* @__PURE__ */ l(
              N,
              {
                icon: "solar:close-circle-line-duotone",
                width: 16,
                onClick: b,
                style: {
                  cursor: "pointer",
                  transition: "color 0.2s ease"
                }
              }
            ),
            /* @__PURE__ */ l(
              N,
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
      children: /* @__PURE__ */ l(
        xe.List,
        {
          as: "ul",
          className: f("Venomous-UI-React--FormField.Select", c),
          style: { width: y },
          children: a.map((g) => /* @__PURE__ */ l(
            xe.Item,
            {
              text: g.label,
              isDisabled: g.disabled,
              isActive: g.value === u,
              onClick: () => {
                g.disabled || x(g.value);
              },
              style: { cursor: g.disabled ? "not-allowed" : "pointer", fontSize: _.small }
            },
            g.value
          ))
        }
      )
    }
  );
});
qe.displayName = "FormField.Select.Original";
Xe.displayName = "FormField.Select.Custom";
const ye = 48, be = 24, ie = 18, ke = 4, Ye = s.memo(
  ({
    className: e,
    style: o,
    autoComplete: n = "off",
    required: t = !1,
    isError: r = !1,
    disabled: a = !1,
    name: i,
    value: c,
    checked: d = !1,
    onChange: u,
    label: m,
    labelPosition: h = "right",
    ...p
  }) => {
    const { inputRef: x, isChecked: b, toggleOriginalIsChecked: v, toggleCustomIsChecked: y } = He({
      checked: d,
      disabled: a,
      onChange: u
    }), { backgroundColor: g, outlineColor: k, borderColor: H, commonStyles: I } = z({
      isDisabled: a,
      isError: r
    });
    return /* @__PURE__ */ M(se, { label: m, required: t, isError: r, position: h, children: [
      /* @__PURE__ */ l(
        "input",
        {
          type: "checkbox",
          name: i,
          value: c,
          checked: b,
          ref: x,
          onChange: v,
          autoComplete: n,
          disabled: a,
          style: { display: "none" },
          ...p
        }
      ),
      /* @__PURE__ */ l(
        "div",
        {
          onClick: y,
          style: {
            display: "inline-flex",
            alignItems: "center",
            cursor: a ? "not-allowed" : "pointer",
            opacity: a ? 0.6 : 1
          },
          children: /* @__PURE__ */ l(A, { children: /* @__PURE__ */ l(
            L.div,
            {
              initial: !1,
              animate: b ? "checked" : "unchecked",
              transition: { type: "spring", stiffness: 700, damping: 30 },
              className: f("Venomous-UI-React--FormField.Switch", e),
              style: {
                width: ye,
                height: be,
                position: "relative",
                display: "flex",
                alignItems: "center",
                borderRadius: be / 2,
                borderWidth: I.borderWidth,
                borderStyle: I.borderStyle,
                borderColor: H,
                backgroundColor: b ? k : g,
                transition: "background-color 0.2s ease-in-out",
                ...o
              },
              children: /* @__PURE__ */ l(
                L.div,
                {
                  initial: !1,
                  animate: b ? "checked" : "unchecked",
                  transition: { type: "spring", stiffness: 700, damping: 30 },
                  variants: {
                    checked: { x: ye - ie - ke },
                    unchecked: { x: ke }
                  },
                  style: {
                    width: ie,
                    height: ie,
                    borderRadius: "50%",
                    position: "absolute",
                    boxShadow: $.light.primary,
                    backgroundColor: r && !b ? S.RubyCopperhead : B.light.secondary
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
Ye.displayName = "FormField.Switch";
const Qe = s.memo(
  ({
    className: e,
    style: o,
    fullWidth: n,
    autoComplete: t = "off",
    required: r = !1,
    isError: a = !1,
    disabled: i = !1,
    name: c,
    value: d,
    label: u,
    helpText: m,
    ...h
  }) => {
    const { isFocused: p, handleFocus: x, handleBlur: b } = J(), { commonStyles: v } = z({
      fullWidth: n,
      isDisabled: i,
      isError: a,
      isFocused: p
    });
    return /* @__PURE__ */ l(
      G,
      {
        label: u,
        required: r,
        isDisabled: i,
        isError: a,
        isFocused: p,
        fullWidth: n,
        helpText: m,
        children: /* @__PURE__ */ l(
          "input",
          {
            type: "text",
            name: c,
            value: d,
            autoComplete: t,
            disabled: i,
            onFocus: i ? void 0 : x,
            onBlur: i ? void 0 : b,
            className: f("Venomous-UI-React--FormField.Text", e),
            style: {
              boxSizing: "border-box",
              ...v,
              ...o
            },
            ...h
          }
        )
      }
    );
  }
);
Qe.displayName = "FormField.Text";
const Ze = s.memo(
  ({
    className: e,
    style: o,
    fullWidth: n,
    required: t = !1,
    isError: r = !1,
    disabled: a = !1,
    rows: i = 3,
    name: c,
    value: d,
    label: u,
    helpText: m,
    ...h
  }) => {
    const { isFocused: p, handleFocus: x, handleBlur: b } = J(), { commonStyles: v } = z({
      fullWidth: n,
      isDisabled: a,
      isError: r,
      isFocused: p
    });
    return /* @__PURE__ */ l(
      G,
      {
        label: u,
        required: t,
        isDisabled: a,
        isError: r,
        isFocused: p,
        fullWidth: n,
        helpText: m,
        children: /* @__PURE__ */ l(
          "textarea",
          {
            name: c,
            value: d,
            disabled: a,
            onFocus: a ? void 0 : x,
            onBlur: a ? void 0 : b,
            spellCheck: !1,
            rows: i,
            className: f("Venomous-UI-React--FormField.Textarea", e),
            style: {
              boxSizing: "border-box",
              resize: "none",
              ...v,
              ...o
            },
            ...h
          }
        )
      }
    );
  }
);
Ze.displayName = "FormField.Textarea";
const Dt = s.memo(({ children: e, gap: o = 8, className: n, style: t, ...r }) => /* @__PURE__ */ l(
  "form",
  {
    className: f("Venomous-UI-React--Form", n),
    style: {
      width: "100%",
      ...t
    },
    ...r,
    children: /* @__PURE__ */ l(V.Flex, { column: !0, gap: o, children: e })
  }
));
Dt.displayName = "Form";
const so = {
  Text: Qe,
  Textarea: Ze,
  Number: De,
  Password: _e,
  Checkbox: ze,
  Switch: Ye,
  Radio: We,
  Select: Ge
}, Je = s.memo(({ children: e, className: o, style: n, ...t }) => /* @__PURE__ */ l(
  "main",
  {
    className: f("Venomous-UI-React--Layout.Content", o),
    style: {
      width: "100%",
      flexGrow: 1,
      ...n
    },
    ...t,
    children: e
  }
));
Je.displayName = "Layout.Content";
const oe = {
  headerHeight: 60,
  footerHeight: 80,
  sideWidth: 300
}, Ke = s.createContext(oe);
function pe() {
  const e = s.useContext(Ke);
  if (e === void 0)
    throw new Error("useLayoutContext must be used within a LayoutProvider");
  return e;
}
const Pe = s.memo(({ children: e, className: o, style: n, ...t }) => {
  const { footerHeight: r } = pe();
  return /* @__PURE__ */ l(
    "footer",
    {
      className: f("Venomous-UI-React--Layout.Footer", o),
      style: {
        height: `${r}px`,
        width: "100%",
        ...n
      },
      ...t,
      children: e
    }
  );
});
Pe.displayName = "Layout.Footer";
const et = s.memo(({ children: e, className: o, style: n, ...t }) => {
  const { headerHeight: r } = pe();
  return /* @__PURE__ */ l(
    "header",
    {
      className: f("Venomous-UI-React--Layout.Header", o),
      style: {
        height: `${r}px`,
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 1,
        ...n
      },
      ...t,
      children: e
    }
  );
});
et.displayName = "Layout.Header";
const tt = s.memo(
  ({
    children: e,
    maxBreakpoint: o = F.xl,
    headerHeight: n = oe.headerHeight,
    footerHeight: t = oe.footerHeight,
    sideWidth: r = oe.sideWidth
  }) => {
    const a = s.useMemo(
      () => ({ headerHeight: n, footerHeight: t, sideWidth: r }),
      [n, t, r]
    );
    return (
      // eslint-disable-next-line react-x/no-context-provider
      /* @__PURE__ */ l(Ke.Provider, { value: a, children: /* @__PURE__ */ l(Be, { maxBreakpoint: o, children: e }) })
    );
  }
);
tt.displayName = "Layout.Provider";
const ot = s.memo(({ children: e, className: o, style: n, ...t }) => {
  const { headerHeight: r, sideWidth: a } = pe();
  return /* @__PURE__ */ l(
    "aside",
    {
      className: f("Venomous-UI-React--Layout.Side", o),
      style: {
        height: `calc(100svh - ${r}px)`,
        width: a,
        minWidth: a,
        position: "sticky",
        top: `${r}px`,
        left: 0,
        zIndex: 1,
        overflowX: "hidden",
        overflowY: "scroll",
        ...n
      },
      ...t,
      children: e
    }
  );
});
ot.displayName = "Layout.Side";
const ao = {
  Provider: tt,
  Header: et,
  Side: ot,
  Content: Je,
  Footer: Pe
}, nt = {
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
function _t(e) {
  const o = Object.entries(nt).find(([, n]) => n === e);
  if (!o)
    throw new Error(`Unsupported mime type: ${e}`);
  return o[0];
}
function Wt(e) {
  return nt[e];
}
function At(e) {
  switch (e) {
    case ".jpg":
    case ".jpeg":
    case ".png":
    case ".webp":
    case ".gif":
      return S.TurquoiseFerDeLance;
    // 蓝色
    case ".svg":
    case ".js":
    case ".json":
      return S.GoldenLanceHead;
    // 金色
    case ".pdf":
      return S.GarnetViper;
    // 红色
    case ".html":
    case ".mp4":
    case ".avi":
      return S.TopazCoral;
    // 橙色
    case ".css":
      return S.AlexandriteAnaconda;
    // 紫色
    case ".xls":
    case ".xlsx":
    case ".csv":
      return S.EmeraldMamba;
    // 绿色
    case ".doc":
    case ".docx":
      return S.SapphireCobra;
    // 蓝色
    case ".mp3":
      return S.MalachitePython;
    // 绿色
    case ".txt":
    default:
      return S.ObsidianBlackMamba;
  }
}
const rt = s.memo(({ fileExtension: e, width: o = 40, className: n, ...t }) => {
  var i;
  const r = s.useMemo(
    () => At(e),
    [e]
  ), a = C.dark.primary;
  return /* @__PURE__ */ M(
    "svg",
    {
      width: o,
      height: o * 2,
      viewBox: "0 0 40 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: f("Venomous-UI-React--MediaFile.TypeImage", n),
      ...t,
      children: [
        /* @__PURE__ */ l(
          "path",
          {
            d: "M23.172 0C23.7022 0 24.2107 0.210507 24.5857 0.585255L36.4137 12.4044C36.7891 12.7795 37 13.2884 37 13.8191V35.3333C37 37.9107 34.8689 40 32.24 40H7.76C5.13112 40 3 37.9107 3 35.3333V4.66667C3 2.08934 5.13112 0 7.76 0H23.172Z",
            fill: r
          }
        ),
        /* @__PURE__ */ l("g", { filter: "url(#filter0_d_1255_158068)", children: /* @__PURE__ */ l(
          "path",
          {
            d: "M35.1548 12.1381C35.4678 12.4537 35.2443 12.9902 34.7998 12.9902H29C26.4227 12.9902 24.0976 10.7233 24.0976 8.21031V2.20435C24.0976 1.75791 24.6382 1.53528 24.9526 1.85224L35.1548 12.1381Z",
            fill: "white",
            fillOpacity: "0.24",
            shapeRendering: "crispEdges"
          }
        ) }),
        /* @__PURE__ */ l(
          "text",
          {
            x: "45%",
            y: "55%",
            fontSize: "8",
            fontWeight: "bold",
            fill: a,
            fontFamily: "Arial",
            textAnchor: "middle",
            dominantBaseline: "middle",
            children: (i = String(e)) == null ? void 0 : i.toLocaleLowerCase()
          }
        ),
        /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ M(
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
              /* @__PURE__ */ l("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ l("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
              /* @__PURE__ */ l("feOffset", { dy: "2" }),
              /* @__PURE__ */ l("feGaussianBlur", { stdDeviation: "1" }),
              /* @__PURE__ */ l("feComposite", { in2: "hardAlpha", operator: "out" }),
              /* @__PURE__ */ l("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" }),
              /* @__PURE__ */ l("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_1255_158068" }),
              /* @__PURE__ */ l("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_1255_158068", result: "shape" })
            ]
          }
        ) })
      ]
    }
  );
});
rt.displayName = "MediaFile.TypeImage";
const st = s.memo(
  ({ handleFileUpload: e, multiple: o = !1, accept: n, style: t, isLoading: r, isDisabled: a }) => {
    const i = s.useRef(null), c = s.useCallback(() => {
      var u;
      (u = i.current) == null || u.click();
    }, []), d = s.useCallback(
      (u) => {
        const m = u.target.files;
        if (!(m != null && m.length))
          return;
        const h = Array.from(m);
        e(h), u.currentTarget.value = "";
      },
      [e]
    );
    return /* @__PURE__ */ M(ne, { children: [
      /* @__PURE__ */ l(
        "input",
        {
          type: "file",
          ref: i,
          onChange: d,
          multiple: o,
          accept: n,
          style: { display: "none" }
        }
      ),
      /* @__PURE__ */ l(
        me.Icon,
        {
          icon: "solar:cloud-upload-outline",
          iconWidth: 32,
          variant: "ghost",
          isLoading: r,
          isDisabled: a,
          onClick: c,
          style: { padding: "32px 16px", ...t }
        }
      )
    ] });
  }
);
st.displayName = "MediaFile.Uploader";
const io = {
  TypeImage: rt,
  Uploader: st,
  mimeTypeToExtension: _t,
  extensionToMimeType: Wt
}, at = s.memo(
  ({ children: e, className: o, style: n, isOpen: t, onClose: r, maskClosable: a = !0, maxBreakpoint: i = F.xs }) => {
    const { themeMode: c } = T.useThemeMode();
    return /* @__PURE__ */ l(A, { children: t && /* @__PURE__ */ l(
      L.div,
      {
        onClick: a ? r : void 0,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
        className: f("Venomous-UI-React--Modal", o),
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
          backgroundColor: j(B[c].primary, 0.5),
          backdropFilter: "blur(2px)",
          opacity: t ? 1 : 0
        },
        children: /* @__PURE__ */ l(
          L.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.95 },
            transition: { duration: 0.2, ease: "easeOut" },
            onClick: (d) => d.stopPropagation(),
            style: {
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "max-content",
              maxHeight: "90%",
              width: D[i],
              maxWidth: D[i]
            },
            children: /* @__PURE__ */ l(Q, { style: { width: "100%", ...n }, children: e })
          }
        )
      }
    ) });
  }
);
at.displayName = "Modal";
const it = s.memo(
  ({
    className: e,
    style: o,
    isOpen: n,
    onClose: t,
    maskClosable: r = !1,
    maxBreakpoint: a = F.xs,
    title: i,
    description: c,
    isConformLoading: d = !1,
    cancelText: u = "Cancel",
    confirmText: m = "Confirm",
    onCancel: h,
    onConfirm: p
  }) => {
    const x = s.useCallback(async () => {
      await h(), t();
    }, [h, t]), b = s.useCallback(async () => {
      await p(), t();
    }, [p, t]);
    return /* @__PURE__ */ M(
      at,
      {
        isOpen: n,
        onClose: t,
        className: f("Venomous-UI-React--Modals.Confirm", e),
        style: o,
        maskClosable: r,
        maxBreakpoint: a,
        children: [
          /* @__PURE__ */ l(R.Title, { as: "h5", text: i }),
          /* @__PURE__ */ l(R.Paragraph, { style: { padding: "8px 0 24px" }, children: c }),
          /* @__PURE__ */ M(V.Flex, { row: !0, gap: 8, style: { justifyContent: "flex-end" }, children: [
            /* @__PURE__ */ l(
              le,
              {
                variant: "outlined",
                text: u,
                onClick: () => void x(),
                isDisabled: d
              }
            ),
            /* @__PURE__ */ l(
              le,
              {
                variant: "contained",
                text: m,
                onClick: () => void b(),
                isLoading: d
              }
            )
          ] })
        ]
      }
    );
  }
);
it.displayName = "Modals.Confirm";
const lo = {
  Confirm: it
}, $t = s.memo(({ children: e }) => {
  const [o, n] = s.useState(!1);
  return s.useEffect(() => {
    n(!0);
  }, []), o ? /* @__PURE__ */ l(ne, { children: e }) : null;
});
$t.displayName = "NoSSR";
const jt = s.memo(({ position: e = "top-center", offset: o = 0, collapsable: n = !1 }) => {
  const { isDarkThemeMode: t } = T.useThemeMode();
  return /* @__PURE__ */ l(
    gt,
    {
      closeButton: !0,
      richColors: !0,
      invert: t,
      visibleToasts: 4,
      gap: 8,
      position: e,
      offset: o,
      mobileOffset: o / 2,
      expand: !n,
      className: f("Venomous-UI-React--Notification"),
      icons: {
        success: /* @__PURE__ */ l(N, { icon: "solar:shield-check-line-duotone", color: "success" }),
        error: /* @__PURE__ */ l(N, { icon: "solar:shield-cross-line-duotone", color: "error" }),
        warning: /* @__PURE__ */ l(N, { icon: "solar:shield-warning-line-duotone", color: "warning" }),
        info: /* @__PURE__ */ l(N, { icon: "solar:info-circle-line-duotone", color: "info" })
      }
    }
  );
});
jt.displayName = "Notification";
function co(e) {
  const o = {
    description: e.description
  };
  return e.type === "success" ? K.success(e.title, o) : e.type === "error" ? K.error(e.title, o) : e.type === "warning" ? K.warning(e.title, o) : K.info(e.title, o);
}
const lt = s.memo(({ children: e, targetElementID: o }) => {
  const [n, t] = s.useState(null);
  return s.useEffect(() => {
    const r = document.getElementById(o);
    r && t(r);
  }, [o]), n ? xt(/* @__PURE__ */ l(ne, { children: e }), n, o) : null;
});
lt.displayName = "PortalRender";
const uo = {
  Render: lt
}, ct = s.memo(({ height: e = 8 }) => {
  const o = pt(), { themeMode: n } = T.useThemeMode(), { themeColor: t } = T.useThemeColor(), r = s.useRef(null), [a, i] = s.useState(0);
  return s.useEffect(() => {
    const c = () => {
      if (r.current) {
        const d = r.current.offsetWidth, u = d * 0.3;
        i(d - u);
      }
    };
    return c(), window.addEventListener("resize", c), () => window.removeEventListener("resize", c);
  }, []), s.useEffect(() => {
    if (a === 0) return;
    (async () => {
      for (; ; )
        await o.start({ x: [0, a], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } }), await o.start({ x: [a, 0], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } });
    })();
  }, [o, a]), /* @__PURE__ */ l(
    "div",
    {
      ref: r,
      className: f("Venomous-UI-React--Progress.LoadingBar"),
      style: {
        position: "relative",
        width: "100%",
        height: e,
        overflow: "hidden",
        backgroundColor: j(t, 0.2),
        borderRadius: e / 2,
        boxShadow: $[n].tertiary
      },
      children: /* @__PURE__ */ l(
        L.div,
        {
          animate: o,
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "50%",
            backgroundImage: `linear-gradient(45deg, ${j(t, 0.15)} 0%, ${re(t, 0.1)} 90%)`,
            borderRadius: e / 2
          }
        }
      )
    }
  );
});
ct.displayName = "Progress.LoadingBar";
const dt = s.memo(({ height: e = 8 }) => {
  const { scrollYProgress: o } = ft(), { themeColor: n } = T.useThemeColor();
  return /* @__PURE__ */ l(
    L.div,
    {
      className: f("Venomous-UI-React--Progress.Scrollbar"),
      style: {
        scaleX: o,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        originX: 0,
        zIndex: 1e4,
        backgroundImage: `linear-gradient(45deg, ${re(n, 0.2)} 0%, ${j(n, 0.15)} 90%)`,
        height: e,
        borderTopRightRadius: "16px",
        borderBottomRightRadius: "16px"
      }
    }
  );
});
dt.displayName = "Progress.Scrollbar";
const mo = {
  Scrollbar: dt,
  LoadingBar: ct
}, Gt = s.memo(
  ({
    tabs: e,
    defaultActiveIndex: o = 0,
    onChange: n,
    variant: t = "pills",
    tabContainerStyle: r,
    tabItemContainerStyle: a,
    tabItemStyle: i,
    tabIndicatorStyle: c,
    tabContentStyle: d
  }) => {
    const { themeMode: u } = T.useThemeMode(), { themeColor: m } = T.useThemeColor(), [h, p] = s.useState(!1), [x, b] = s.useState(o), [v, y] = s.useState({}), g = s.useRef([]), k = s.useCallback(() => {
      if (g.current[x]) {
        const I = g.current[x];
        if (I) {
          const U = !!e[x].icon, { offsetLeft: q, offsetWidth: ae } = I;
          y({
            left: q,
            width: ae + (h && U ? 24 : 0)
          });
        }
      }
    }, [x, t, e, h]);
    s.useLayoutEffect(() => (p(!0), () => {
      p(!1);
    }), []), s.useEffect(() => {
      k();
    }, [k]), s.useEffect(() => {
      const I = requestAnimationFrame(() => {
        k();
      });
      return () => cancelAnimationFrame(I);
    }, [x, e.length, k]);
    const H = s.useCallback(
      (I, U) => {
        p(!1), s.startTransition(() => {
          b(I);
        }), n(I, U);
      },
      [n]
    );
    return /* @__PURE__ */ M(
      V.Flex,
      {
        column: !0,
        gap: 0,
        className: f("Venomous-UI-React--Tabs.Container"),
        style: { width: "100%", ...r },
        children: [
          /* @__PURE__ */ M(
            V.Flex,
            {
              row: !0,
              className: f("Venomous-UI-React--Tabs.ItemContainer"),
              style: {
                position: "relative",
                ...t === "pills" && {
                  background: B[u].secondary,
                  padding: "4px",
                  borderRadius: "8px"
                },
                ...t === "underline" && {
                  borderBottomWidth: 1.5,
                  borderBottomStyle: "solid",
                  borderBottomColor: W[u].secondary
                },
                ...a
              },
              children: [
                e.map((I, U) => /* @__PURE__ */ M(
                  L.button,
                  {
                    ref: (q) => {
                      q && (g.current[U] = q);
                    },
                    onClick: () => H(U, I),
                    className: f("Venomous-UI-React--Tabs.Item"),
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
                      ...t === "pills" && {
                        position: "relative",
                        zIndex: 2,
                        borderRadius: "8px"
                      },
                      ...t === "underline" && {
                        borderRadius: 0
                      },
                      ...i
                    },
                    children: [
                      I.icon && /* @__PURE__ */ l(
                        N,
                        {
                          icon: I.icon,
                          width: 20,
                          style: {
                            marginRight: "8px",
                            color: U === x ? m : "inherit"
                          }
                        }
                      ),
                      /* @__PURE__ */ l(
                        R.Text,
                        {
                          text: I.label,
                          style: {
                            color: U === x ? m : "inherit"
                          }
                        }
                      )
                    ]
                  },
                  I.key || U
                )),
                /* @__PURE__ */ l(
                  L.div,
                  {
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { duration: 0.2, ease: "easeOut" },
                    layout: !0,
                    className: f("Venomous-UI-React--Tabs.Indicator"),
                    style: {
                      position: "absolute",
                      ...v,
                      ...t === "pills" && {
                        top: "4px",
                        zIndex: 1,
                        height: "calc(100% - 8px)",
                        borderRadius: "6px",
                        background: B[u].primary,
                        boxShadow: $[u].tertiary
                      },
                      ...t === "underline" && {
                        bottom: "-2px",
                        height: "3px",
                        background: m,
                        borderRadius: "4px"
                      },
                      ...c
                    }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ l(A, { mode: "wait", children: e[x] && /* @__PURE__ */ l(
            L.div,
            {
              variants: {
                enter: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
                exit: { opacity: 0, x: 10, transition: { duration: 0.2, ease: "easeIn" } }
              },
              initial: "exit",
              animate: "enter",
              exit: "exit",
              className: f("Venomous-UI-React--Tabs.Content"),
              style: {
                width: "100%",
                padding: "16px",
                position: "relative",
                ...d
              },
              children: e[x].content
            },
            x
          ) })
        ]
      }
    );
  }
);
Gt.displayName = "Tab";
const qt = (e, o) => String(o);
function Xt({
  columns: e,
  rows: o,
  rowUnionKey: n = qt,
  style: t,
  renderRowActions: r,
  headProps: a,
  bodyProps: i,
  headRowProps: c,
  bodyRowProps: d,
  headRowCellProps: u,
  bodyRowCellProps: m,
  ...h
}) {
  return /* @__PURE__ */ M(
    "table",
    {
      className: f("Venomous-UI-React--Table", h.className),
      style: {
        boxSizing: "border-box",
        display: "block",
        borderSpacing: 0,
        overflow: "scroll",
        position: "relative",
        ...t
      },
      ...h,
      children: [
        /* @__PURE__ */ l(
          "thead",
          {
            className: f("Venomous-UI-React--Tables.Head", a == null ? void 0 : a.className),
            style: { position: "sticky", top: 0, zIndex: 1, ...a == null ? void 0 : a.style },
            ...a,
            children: /* @__PURE__ */ M(
              Me,
              {
                className: f("Venomous-UI-React--Tables.Row", c == null ? void 0 : c.className),
                style: { ...c == null ? void 0 : c.style },
                ...c,
                children: [
                  e.map((p) => {
                    var x;
                    return /* @__PURE__ */ l(
                      ee,
                      {
                        as: "th",
                        className: f(
                          "Venomous-UI-React--Tables.Cell",
                          u == null ? void 0 : u.className,
                          (x = p.headerCellProps) == null ? void 0 : x.className
                        ),
                        style: { ...u == null ? void 0 : u.style },
                        ...u,
                        ...p.headerCellProps,
                        children: p.label
                      },
                      String(p.key)
                    );
                  }),
                  r && /* @__PURE__ */ l(
                    ee,
                    {
                      as: "th",
                      className: f("Venomous-UI-React--Tables.Cell", u == null ? void 0 : u.className),
                      style: { ...m == null ? void 0 : m.style },
                      ...m
                    }
                  )
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ l(
          "tbody",
          {
            className: f("Venomous-UI-React--Tables.Body", i == null ? void 0 : i.className),
            style: { ...i == null ? void 0 : i.style },
            ...i,
            children: o.map((p, x) => /* @__PURE__ */ M(
              Me,
              {
                className: f("Venomous-UI-React--Tables.Row", d == null ? void 0 : d.className),
                style: { ...d == null ? void 0 : d.style },
                ...d,
                children: [
                  e.map((b) => {
                    var v;
                    return /* @__PURE__ */ l(
                      ee,
                      {
                        as: "td",
                        className: f("Venomous-UI-React--Tables.Cell", m == null ? void 0 : m.className),
                        style: { ...m == null ? void 0 : m.style },
                        ...m,
                        children: ((v = b.renderCell) == null ? void 0 : v.call(b, p, x)) ?? String(p[b.key] ?? "")
                      },
                      String(b.key)
                    );
                  }),
                  r && /* @__PURE__ */ l(
                    ee,
                    {
                      as: "td",
                      className: f("Venomous-UI-React--Tables.Cell", m == null ? void 0 : m.className),
                      style: { ...m == null ? void 0 : m.style },
                      ...m,
                      children: r(p, x)
                    }
                  )
                ]
              },
              String(n(p, x))
            ))
          }
        )
      ]
    }
  );
}
const Yt = s.memo(Xt);
Yt.displayName = "Table";
const Me = s.memo(({ style: e, ...o }) => {
  const { themeMode: n } = T.useThemeMode();
  return /* @__PURE__ */ l(
    "tr",
    {
      style: {
        boxSizing: "border-box",
        color: C[n].primary,
        ...e
      },
      ...o
    }
  );
}), ee = s.memo(({ as: e = "td", style: o, ...n }) => {
  const { themeMode: t } = T.useThemeMode();
  return /* @__PURE__ */ l(
    e,
    {
      style: {
        boxSizing: "border-box",
        padding: "16px 24px",
        textAlign: "left",
        color: C[t].primary,
        backgroundColor: e === "td" ? "transparent" : B[t].secondary,
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderBottomColor: W[t].quaternary,
        ...o
      },
      ...n
    }
  );
}), ut = s.memo(({ className: e, style: o, children: n, isOpen: t }) => /* @__PURE__ */ l(A, { initial: !1, children: t && /* @__PURE__ */ l(
  L.div,
  {
    className: f("Venomous-UI-React--Transitions.Collapse", e),
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
    transition: { duration: 0.2 },
    style: { overflow: "hidden", ...o },
    children: n
  }
) }));
ut.displayName = "Transitions.Collapse";
const ho = {
  Collapse: ut
};
export {
  B as BackgroundColors,
  W as BorderColors,
  F as BreakPointName,
  le as Button,
  me as Buttons,
  Q as Card,
  ro as Cards,
  Be as Container,
  Vt as Drawer,
  Dt as Form,
  so as FormField,
  N as Icon,
  ao as Layout,
  io as MediaFile,
  nt as MediaFileTypeMap,
  xe as Menu,
  at as Modal,
  lo as Modals,
  $t as NoSSR,
  jt as Notification,
  je as Popover,
  uo as Portal,
  mo as Progress,
  X as SemanticColors,
  $ as Shadows,
  V as Space,
  Gt as Tab,
  Yt as Table,
  C as TextColors,
  T as Theme,
  D as ThemeBreakPoint,
  S as ThemeColor,
  w as ThemeMode,
  ho as Transitions,
  R as Typography,
  _ as TypographySize,
  te as TypographySizeName,
  kt as getDarkerHex,
  re as getLighterHex,
  j as getOpacityHex,
  no as getSystemThemeMode,
  oo as getThemeColors,
  ce as hexNormalize,
  Te as hexToHsl,
  ve as hexToRgb,
  Se as hslToHex,
  co as notify,
  bt as rgbToHex,
  J as useElementFocus,
  Ut as useElementHover,
  Ot as useHandler
};
