import { jsx as l, jsxs as T, Fragment as re } from "react/jsx-runtime";
import f from "clsx";
import s from "react";
import { Icon as ft } from "@iconify/react";
import { AnimatePresence as j, motion as U, useAnimation as gt, useScroll as xt } from "framer-motion";
import { Toaster as yt, toast as K } from "sonner";
import { createPortal as bt } from "react-dom";
var C = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e))(C || {});
const Y = {
  success: "#4caf50",
  error: "#f44336",
  warning: "#ff9800",
  info: "#2196f3"
}, S = {
  [C.Dark]: {
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
  [C.Light]: {
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
}, L = {
  [C.Dark]: {
    primary: "#181818",
    // 主背景
    secondary: "#363636ff"
    // 卡片/面板背景
  },
  [C.Light]: {
    primary: "#ffffff",
    // 主背景
    secondary: "#f8f9fa"
    // 卡片/面板背景
  }
}, z = {
  [C.Dark]: {
    primary: "rgba(255, 255, 255, 0.55)",
    secondary: "rgba(255, 255, 255, 0.25)",
    tertiary: "rgba(255, 255, 255, 0.15)",
    quaternary: "rgba(255, 255, 255, 0.05)"
  },
  [C.Light]: {
    primary: "rgba(0, 0, 0, 0.55)",
    secondary: "rgba(0, 0, 0, 0.25)",
    tertiary: "rgba(0, 0, 0, 0.15)",
    quaternary: "rgba(0, 0, 0, 0.05)"
  }
}, A = {
  [C.Dark]: {
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
  [C.Light]: {
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
const W = {
  xs: 444,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
  xxl: 2560
};
var I = /* @__PURE__ */ ((e) => (e.RubyCopperhead = "#DC2626", e.GarnetViper = "#B91C1C", e.BloodstoneAdder = "#7F1D1D", e.TopazCoral = "#EA580C", e.AmberRattlesnake = "#F59E0B", e.TopazMamushi = "#FACC15", e.EmeraldMamba = "#059669", e.MalachitePython = "#10B981", e.JadeBoomslang = "#22C55E", e.TurquoiseFerDeLance = "#06B6D4", e.SapphireCobra = "#2563EB", e.LapisLazuliSeaSnake = "#1D4ED8", e.AmethystAsp = "#7C3AED", e.AlexandriteAnaconda = "#7E22CE", e.FluoriteElapid = "#A855F7", e.TourmalineStiletto = "#DB2777", e.RoseQuartzDeathAdder = "#EC4899", e.MorganiteCoralSnake = "#F472B6", e))(I || {}), te = /* @__PURE__ */ ((e) => (e.h1 = "h1", e.h2 = "h2", e.h3 = "h3", e.h4 = "h4", e.h5 = "h5", e.h6 = "h6", e.text = "text", e.strong = "strong", e.small = "small", e))(te || {});
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
}, no = (e) => ({
  background: L[e],
  border: z[e],
  text: S[e]
});
function kt() {
  return typeof window < "u" ? window.matchMedia("(prefers-color-scheme: dark)").matches : !1;
}
function so() {
  return kt() ? C.Dark : C.Light;
}
function de(e) {
  return e = e.replace("#", ""), e.length === 3 && (e = e.split("").map((o) => o + o).join("")), `#${e}`;
}
function Me(e) {
  e = e.replace("#", "");
  const o = parseInt(e, 16), r = o >> 16 & 255, t = o >> 8 & 255, n = o & 255;
  return { r, g: t, b: n };
}
function Tt(e, o, r) {
  const t = (n) => {
    const a = n.toString(16);
    return a.length === 1 ? "0" + a : a;
  };
  return `#${t(e)}${t(o)}${t(r)}`;
}
function ve(e) {
  const { r: o, g: r, b: t } = Me(de(e)), n = o / 255, a = r / 255, i = t / 255, c = Math.max(n, a, i), d = Math.min(n, a, i), u = c - d;
  let m = 0;
  u !== 0 && (c === n ? m = (a - i) / u % 6 : c === a ? m = (i - n) / u + 2 : m = (n - a) / u + 4, m *= 60, m < 0 && (m += 360));
  const p = (c + d) / 2, h = u === 0 ? 0 : u / (1 - Math.abs(2 * p - 1));
  return { h: m, s: h, l: p };
}
function Ce(e, o, r) {
  const t = (1 - Math.abs(2 * r - 1)) * o, n = t * (1 - Math.abs(e / 60 % 2 - 1)), a = r - t / 2;
  let i = 0, c = 0, d = 0;
  return e >= 0 && e < 60 ? [i, c, d] = [t, n, 0] : e < 120 ? [i, c, d] = [n, t, 0] : e < 180 ? [i, c, d] = [0, t, n] : e < 240 ? [i, c, d] = [0, n, t] : e < 300 ? [i, c, d] = [n, 0, t] : [i, c, d] = [t, 0, n], Tt(Math.round((i + a) * 255), Math.round((c + a) * 255), Math.round((d + a) * 255));
}
function Mt(e, o) {
  const { h: r, s: t, l: n } = ve(e);
  return Ce(r, t, Math.max(0, n - o));
}
function ne(e, o) {
  const { h: r, s: t, l: n } = ve(e);
  return Ce(r, t, Math.min(1, n + o));
}
function $(e, o) {
  const { r, g: t, b: n } = Me(de(e));
  o > 1 && (o = 1), o < 0 && (o = 0);
  const a = Math.min(1, Math.max(0, o));
  return `rgba(${r}, ${t}, ${n}, ${a})`;
}
const Se = s.memo(() => (vt(), null));
Se.displayName = "Theme.InjectToHTML";
function vt() {
  const { themeMode: e } = v.useThemeMode(), { themeColor: o } = v.useThemeColor(), r = s.useMemo(
    () => ({
      light: ne(o, 0.2),
      dark: Mt(o, 0.8),
      origin: de(o),
      opacity: $(o, 0.6)
    }),
    [o]
  );
  s.useInsertionEffect(() => {
    document.documentElement.style.backgroundColor = L[e].primary, document.body.style.backgroundColor = L[e].primary;
  }, [e]), s.useInsertionEffect(() => {
    if (typeof window > "u")
      return;
    const t = "theme-palette-style";
    let n = document.getElementById(t);
    n || (n = document.createElement("style"), n.id = t, document.head.appendChild(n));
    const a = `
      /* ==============================
         Global Theme Palette Styles
         ============================== */

      :root {
        --venomous-ui-react--theme-origin: ${r.origin};
        --venomous-ui-react--theme-dark: ${r.dark};
        --venomous-ui-react--theme-light: ${r.light};
        --venomous-ui-react--theme-opacity: ${r.opacity};
      }

      /* Selection style */
      ::selection {
        background-color: ${r.opacity};
        color: white;
      }

      /* Scrollbar style (Webkit) */
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: ${r.origin};
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background-color: ${r.dark};
      }
      ::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        transition: opacity 0.5s ease-in-out;
      }

      /* Scrollbar style (Firefox) */
      html {
        scrollbar-color: ${r.origin} rgba(0, 0, 0, 0.1);
        scrollbar-width: thin;
      }
    `;
    n.innerHTML = a;
  }, [r]);
}
const ue = s.createContext(void 0), Ct = C.Light, St = I.EmeraldMamba, It = {
  THEME_MODE: "VENOMOUS_UI__THEME_MODE",
  THEME_COLOR: "VENOMOUS_UI__THEME_COLOR"
};
function wt({
  children: e,
  defaultThemeMode: o = Ct,
  defaultThemeColor: r = St,
  storageKey: t = It
}) {
  const [n, a] = s.useState(!1);
  s.useEffect(() => {
    a(!0);
  }, []);
  const [i, c] = s.useState(o), [d, u] = s.useState(r), m = s.useCallback((y) => {
    c(y);
  }, []), p = s.useCallback(() => {
    c((y) => y === C.Dark ? C.Light : C.Dark);
  }, []), h = s.useCallback(() => {
    c(o);
  }, [o]), x = s.useCallback((y) => {
    u(y);
  }, []), b = s.useCallback(() => {
    u(r);
  }, [r]);
  s.useEffect(() => {
    if (n) {
      const y = localStorage.getItem(t.THEME_MODE);
      y && Object.values(C).includes(y) && c(y);
      const g = localStorage.getItem(t.THEME_COLOR);
      g && Object.values(I).includes(g) && u(g);
    }
  }, [n, t.THEME_COLOR, t.THEME_MODE]), s.useEffect(() => {
    n && (localStorage.setItem(t.THEME_MODE, i), localStorage.setItem(t.THEME_COLOR, d));
  }, [n, t.THEME_MODE, t.THEME_COLOR, i, d]);
  const M = s.useMemo(
    () => ({
      themeMode: i,
      setThemeMode: m,
      toggleThemeMode: p,
      resetThemeMode: h,
      isDarkThemeMode: i === C.Dark,
      themeColor: d,
      setThemeColor: x,
      resetThemeColor: b
    }),
    [i, m, p, h, d, x, b]
  );
  return /* @__PURE__ */ l(ue.Provider, { value: M, children: e });
}
const fe = new Map(
  Object.values(F).map((e, o) => [e, o])
);
function Ft() {
  const [e, o] = s.useState(!1), [r, t] = s.useState(() => Nt()), [n, a] = s.useState(!1), i = s.useRef(null);
  s.useEffect(() => {
    const d = () => {
      const p = window.innerWidth;
      return p >= W.xxl ? F.xxl : p >= W.xl ? F.xl : p >= W.lg ? F.lg : p >= W.md ? F.md : p >= W.sm ? F.sm : F.xs;
    }, u = () => {
      i.current && clearTimeout(i.current), i.current = setTimeout(() => {
        const p = d();
        t((h) => h !== p ? p : h);
      }, 100);
    }, m = d();
    return t(m), a(!0), o(!0), window.addEventListener("resize", u, { passive: !0 }), () => {
      i.current && (clearTimeout(i.current), i.current = null), window.removeEventListener("resize", u);
    };
  }, []);
  const c = s.useCallback(
    (d) => {
      if (!e) return !1;
      const u = fe.get(r), m = fe.get(d);
      return u === void 0 || m === void 0 ? !1 : u >= m;
    },
    [r, e]
  );
  return s.useMemo(
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
function Nt() {
  if (typeof window > "u")
    return F.xs;
  const e = navigator.userAgent, o = /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(e), r = /iPad|Android(?!.*Mobile)|Kindle|Silk/i.test(e);
  return o && !r ? F.xs : r ? F.md : F.lg;
}
function Rt() {
  const e = s.useContext(ue);
  if (e === void 0)
    throw new Error("useThemeColor must be used within a ThemeModeProvider");
  return {
    themeColor: e.themeColor,
    setThemeColor: e.setThemeColor,
    resetThemeColor: e.resetThemeColor
  };
}
function Et() {
  const e = s.useContext(ue);
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
const v = {
  Provider: wt,
  InjectToHTML: Se,
  useThemeMode: Et,
  useThemeColor: Rt,
  useThemeBreakpoint: Ft
}, N = s.memo(({ className: e, style: o, icon: r, width: t = 20, semanticColor: n, ...a }) => {
  const { themeMode: i } = v.useThemeMode(), c = s.useMemo(() => n ? Y[n] : S[i].primary, [i, n]);
  return /* @__PURE__ */ l(
    ft,
    {
      ssr: !0,
      icon: r,
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
const B = {
  contained: "contained",
  outlined: "outlined",
  ghost: "ghost"
};
function Ie({
  isLoading: e,
  isDisabled: o,
  variant: r,
  semanticColor: t
}) {
  const { themeColor: n } = v.useThemeColor(), { themeMode: a } = v.useThemeMode(), i = s.useMemo(() => {
    let p = "";
    if (e || o)
      return p = L[a].secondary, p;
    switch (r) {
      case B.contained:
        p = t ? Y[t] : n;
        break;
      case B.outlined:
        p = L[a].secondary;
        break;
      case B.ghost:
      default:
        p = "transparent";
        break;
    }
    return p;
  }, [r, n, a, e, o, t]), c = s.useMemo(() => {
    let p = "";
    if (e || o)
      return p = z[a].secondary, p;
    switch (r) {
      case B.contained:
        p = t ? ne(Y[t], 0.25) : $(n, 0.5);
        break;
      case B.outlined:
        p = t ? Y[t] : n;
        break;
      case B.ghost:
        p = z[a].secondary;
        break;
      default:
        p = "transparent";
        break;
    }
    return p;
  }, [r, n, a, e, o, t]), d = s.useMemo(() => {
    let p = "";
    if (e || o)
      return p = S[a].disabled, p;
    switch (r) {
      case B.contained:
        p = "#ffffff";
        break;
      case B.outlined:
        p = t ? Y[t] : n;
        break;
      case B.ghost:
      default:
        p = S[a].primary;
        break;
    }
    return p;
  }, [r, n, a, e, o, t]), u = s.useMemo(() => {
    switch (r) {
      case B.ghost:
        return "none";
      case B.contained:
      case B.outlined:
      default:
        return A[a].secondary;
    }
  }, [r, n, a]);
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
const we = s.memo(
  ({
    className: e,
    type: o = "button",
    style: r,
    variant: t = "contained",
    isLoading: n,
    isDisabled: a,
    icon: i,
    iconWidth: c = 20,
    semanticColor: d,
    ...u
  }) => {
    const { buttonStyles: m } = Ie({
      isLoading: n,
      isDisabled: a || u.disabled,
      variant: t,
      semanticColor: d
    });
    return /* @__PURE__ */ l(
      "button",
      {
        className: f("Venomous-UI-React--Buttons.Icon", e),
        type: o,
        disabled: n || a,
        style: {
          WebkitTapHighlightColor: "transparent",
          ...m,
          padding: 0,
          ...r
        },
        ...u,
        children: /* @__PURE__ */ l(
          N,
          {
            icon: n ? "eos-icons:loading" : i,
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
we.displayName = "Buttons.Icon";
const Fe = s.memo(({ className: e, style: o, text: r, ...t }) => /* @__PURE__ */ l(
  "code",
  {
    className: f("Venomous-UI-React--Typography.Code", e),
    style: {
      color: I.TourmalineStiletto,
      backgroundColor: "#E7E9EB",
      border: "1px solid #CCCCCC",
      borderRadius: "4px",
      padding: "2px 4px",
      fontSize: _.small,
      fontWeight: 600,
      ...o
    },
    ...t,
    children: r
  }
));
Fe.displayName = "Typography.Code";
function me({ ellipsis: e = 0, semanticColor: o }) {
  const { themeMode: r } = v.useThemeMode(), t = s.useMemo(() => o ? Y[o] : S[r].primary, [r, o]), n = s.useMemo(() => e ? {
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
const Ne = s.memo(
  ({ children: e, className: o, style: r, ellipsis: t = 0, semanticColor: n, ...a }) => {
    const { fontColor: i, ellipsisStyles: c } = me({ ellipsis: t, semanticColor: n });
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
          ...r
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
}, J = {
  span: "span",
  small: "small",
  strong: "strong"
}, Re = s.memo(
  ({ className: e, style: o, text: r, as: t = J.span, isEllipsis: n = !1, semanticColor: a, ...i }) => {
    const { fontColor: c, ellipsisStyles: d } = me({ ellipsis: n ? 1 : 0, semanticColor: a }), u = s.useMemo(() => t === J.strong ? "bold" : "normal", [t]), m = s.useMemo(() => {
      switch (t) {
        case J.strong:
          return _[te.strong];
        case J.small:
          return _[te.small];
        case J.span:
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
        children: r
      }
    );
  }
);
Re.displayName = "Typography.Text";
const Ee = s.memo(
  ({ text: e, as: o = ge.h4, ellipsis: r = 0, className: t, style: n, semanticColor: a, ...i }) => {
    const c = s.useMemo(() => ge[o], [o]), d = s.useMemo(() => _[o], [o]), { fontColor: u, ellipsisStyles: m } = me({ ellipsis: r, semanticColor: a });
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
          ...n
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
  Code: Fe,
  Paragraph: Ne
}, ce = s.memo(
  ({
    className: e,
    type: o = "button",
    style: r,
    text: t,
    variant: n = "contained",
    isLoading: a,
    isDisabled: i,
    icon: c,
    iconPosition: d = "start",
    iconWidth: u = 20,
    semanticColor: m,
    ...p
  }) => {
    const { buttonStyles: h } = Ie({
      isLoading: a,
      isDisabled: i || p.disabled,
      variant: n,
      semanticColor: m
    });
    return /* @__PURE__ */ T(
      "button",
      {
        className: f("Venomous-UI-React--Button", e),
        type: o,
        disabled: a || i,
        style: {
          flexDirection: d === "start" ? "row" : "row-reverse",
          WebkitTapHighlightColor: "transparent",
          ...h,
          ...r
        },
        ...p,
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
                backgroundColor: h.backgroundColor
              },
              children: /* @__PURE__ */ l(N, { icon: "svg-spinners:270-ring-with-bg", width: 24, style: { color: "inherit" } })
            }
          )
        ]
      }
    );
  }
);
ce.displayName = "Button";
const pe = {
  Icon: we
}, Le = s.memo(
  ({ children: e, className: o, style: r, row: t = !0, column: n = !1, gap: a = "8px", ...i }) => /* @__PURE__ */ l(
    "div",
    {
      className: f("Venomous-UI-React--Space.Flex", o),
      style: {
        boxSizing: "border-box",
        display: "flex",
        width: "100%",
        flexDirection: n ? "column" : "row",
        alignItems: t ? "flex-start" : r == null ? void 0 : r.alignItems,
        ...Array.isArray(a) ? { rowGap: a[0], columnGap: a[1] } : { gap: a },
        position: "relative",
        ...r
      },
      ...i,
      children: e
    }
  )
);
Le.displayName = "Space.Flex";
const Ve = s.memo(({ children: e, className: o, style: r, columns: t = 1, spacing: n = 16, ...a }) => {
  const { screenSize: i } = v.useThemeBreakpoint(), c = i ?? F.xs, d = s.useMemo(
    () => Lt(t, c),
    [t, c]
  ), u = s.useMemo(
    () => Vt(n, c),
    [n, c]
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
        ...r
      },
      ...a,
      children: e
    }
  );
});
Ve.displayName = "Space.Grid";
const Z = Object.keys(F);
function Lt(e = 1, o) {
  if (typeof e == "number")
    return e;
  const r = Z.indexOf(o);
  for (let t = r; t < Z.length; t++) {
    const n = e[Z[t]];
    if (n !== void 0) return n;
  }
  return 1;
}
function Vt(e = 16, o) {
  if (typeof e == "number")
    return e;
  const r = Z.indexOf(o);
  for (let t = r; t < Z.length; t++) {
    const n = e[Z[t]];
    if (n !== void 0) return n;
  }
  return 16;
}
const V = {
  Flex: Le,
  Grid: Ve
}, se = {
  div: "div",
  article: "article"
}, E = {
  elevated: "elevated",
  outlined: "outlined",
  transparent: "transparent",
  frostedGlass: "frostedGlass"
}, G = s.memo(
  ({ children: e, className: o, style: r, as: t = se.div, variant: n = E.elevated, ...a }) => {
    const { themeMode: i } = v.useThemeMode(), c = s.useMemo(() => {
      switch (n) {
        case E.transparent:
          return "transparent";
        case E.elevated:
        case E.outlined:
        case E.frostedGlass:
        default:
          return L[i].secondary;
      }
    }, [i, n]), d = s.useMemo(() => {
      switch (n) {
        case E.outlined:
        case E.transparent:
          return z[i].tertiary;
        case E.elevated:
        case E.frostedGlass:
        default:
          return "transparent";
      }
    }, [i, n]), u = s.useMemo(() => {
      switch (n) {
        case E.outlined:
        case E.transparent:
          return "none";
        case E.elevated:
        case E.frostedGlass:
        default:
          return A[i].primary;
      }
    }, [i, n]);
    return /* @__PURE__ */ l(
      t,
      {
        className: f("Venomous-UI-React--Card", o),
        style: {
          boxSizing: "border-box",
          WebkitTapHighlightColor: "transparent",
          borderRadius: "8px",
          padding: "16px",
          outlineWidth: 1.5,
          outlineStyle: "solid",
          outlineColor: d,
          backgroundColor: c,
          boxShadow: u,
          ...n === E.frostedGlass && {
            backdropFilter: "blur(8px) brightness(0.8)",
            WebkitBackdropFilter: "blur(8px) brightness(0.8)"
          },
          ...r
        },
        ...a,
        children: e
      }
    );
  }
);
G.displayName = "Card";
const Ue = s.memo(
  ({ children: e, className: o, height: r = 300, width: t = 200, title: n, coverImage: a }) => /* @__PURE__ */ T(
    G,
    {
      as: se.article,
      className: f("Venomous-UI-React--Cards.Book", o),
      style: {
        height: r,
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
            children: n && /* @__PURE__ */ l(
              R.Title,
              {
                text: n,
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
const Ut = s.lazy(() => import("./index.chunk.js").then((e) => ({ default: e.Popover }))), Oe = s.memo(
  ({ children: e, className: o, title: r = "", description: t = "", renderMenu: n }) => /* @__PURE__ */ T(
    G,
    {
      as: se.article,
      className: f("Venomous-UI-React--Cards.Book", o),
      style: { position: "relative" },
      children: [
        (r || t) && /* @__PURE__ */ T(V.Flex, { column: !0, gap: 2, style: { paddingRight: "48px" }, children: [
          /* @__PURE__ */ l(R.Title, { as: "h6", text: r, ellipsis: 1 }),
          /* @__PURE__ */ l(R.Paragraph, { ellipsis: 3, children: t })
        ] }),
        /* @__PURE__ */ l(s.Suspense, { fallback: null, children: /* @__PURE__ */ l(
          Ut,
          {
            placement: "bottom",
            renderTrigger: (a) => /* @__PURE__ */ l(
              pe.Icon,
              {
                icon: "solar:hamburger-menu-line-duotone",
                variant: "ghost",
                isDisabled: a,
                style: { boxShadow: "none" }
              }
            ),
            style: { position: "absolute", top: "4px", right: "4px", zIndex: 1 },
            contentStyle: { transform: "translateY(-40px)" },
            children: n()
          }
        ) }),
        e && /* @__PURE__ */ l(V.Flex, { column: !0, children: e })
      ]
    }
  )
);
Oe.displayName = "Cards.Product";
const Be = s.memo(
  ({ text: e, isDisabled: o, className: r, style: t, closeIcon: n, closeIconPosition: a = "end", onClose: i }) => {
    const { themeMode: c } = v.useThemeMode();
    return /* @__PURE__ */ T(
      V.Flex,
      {
        row: !0,
        gap: 4,
        className: f("Venomous-UI-React--Chip", r),
        style: {
          width: "max-content",
          alignItems: "center",
          flexDirection: a === "start" ? "row" : "row-reverse",
          cursor: o ? "not-allowed" : "default",
          borderRadius: "12px",
          padding: "2px 8px",
          borderWidth: 1.5,
          borderStyle: "solid",
          borderColor: z[c].primary,
          boxShadow: A[c].tertiary,
          backgroundColor: L[c === C.Dark ? C.Light : C.Dark].secondary,
          color: S[c === C.Dark ? C.Light : C.Dark].primary,
          ...t
        },
        children: [
          n && /* @__PURE__ */ l(N, { icon: n, onClick: i, style: { color: "inherit", cursor: "pointer" } }),
          /* @__PURE__ */ l(R.Text, { as: "small", text: e, isEllipsis: !0, style: { color: "inherit" } })
        ]
      }
    );
  }
);
Be.displayName = "Chip";
const He = s.memo(({ children: e, className: o, style: r, title: t, titleStyle: n }) => /* @__PURE__ */ T(
  G,
  {
    as: se.article,
    variant: "outlined",
    className: f("Venomous-UI-React--Cards.TitleBlock", o),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "relative",
      padding: "24px 16px 16px",
      ...r
    },
    children: [
      /* @__PURE__ */ l(
        Be,
        {
          text: t,
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            transform: "translate(8px, -50%)",
            padding: "4px 8px",
            borderRadius: "16px",
            fontWeight: "bold",
            maxWidth: "100px",
            ...n
          }
        }
      ),
      e
    ]
  }
));
He.displayName = "Cards.TitleBlock";
const ao = {
  Book: Ue,
  Product: Oe,
  TitleBlock: He
}, ze = s.memo(
  ({ children: e, maxBreakpoint: o = F.lg, className: r, style: t, ...n }) => /* @__PURE__ */ l(
    "div",
    {
      className: f("Venomous-UI-React--Container", r),
      style: {
        margin: "0 auto",
        width: "100%",
        maxWidth: W[o],
        ...t
      },
      ...n,
      children: e
    }
  )
);
ze.displayName = "Container";
const Ot = s.memo(
  ({ isOpen: e, onClose: o, children: r, position: t = "left", maskClosable: n = !0, width: a = 300, height: i = 300, style: c }) => {
    const { themeMode: d } = v.useThemeMode();
    return /* @__PURE__ */ T(re, { children: [
      /* @__PURE__ */ l(j, { children: e && /* @__PURE__ */ l(
        U.div,
        {
          onClick: n ? o : void 0,
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
            backgroundColor: $(L[d].primary, 0.5),
            backdropFilter: "blur(2px)",
            pointerEvents: e ? "auto" : "none"
          }
        }
      ) }),
      /* @__PURE__ */ l(j, { children: e && /* @__PURE__ */ l(
        U.div,
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
            G,
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
              children: r
            }
          )
        }
      ) })
    ] });
  }
);
Ot.displayName = "Drawer";
const P = {
  top: "top",
  left: "left",
  right: "right"
}, ae = s.memo(
  ({
    children: e,
    className: o,
    style: r,
    htmlFor: t,
    label: n = "",
    isError: a = !1,
    required: i = !1,
    position: c = P.top,
    ...d
  }) => {
    const { themeMode: u } = v.useThemeMode();
    return /* @__PURE__ */ T(
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
          color: a ? I.RubyCopperhead : S[u].primary,
          ...r
        },
        ...d,
        children: [
          /* @__PURE__ */ T(V.Flex, { row: !0, gap: 0, style: { width: "100%", alignItems: "center" }, children: [
            i && /* @__PURE__ */ l(R.Text, { as: "small", text: "*", style: { color: I.RubyCopperhead, marginRight: "2px" } }),
            /* @__PURE__ */ l(
              R.Text,
              {
                as: "small",
                text: n,
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
ae.displayName = "Form.Label";
function D({
  fullWidth: e = !1,
  isDisabled: o = !1,
  isError: r = !1,
  isFocused: t = !1
}) {
  const { themeMode: n } = v.useThemeMode(), { themeColor: a } = v.useThemeColor(), i = s.useMemo(() => o ? L[n].secondary : "transparent", [o, n]), c = s.useMemo(() => r ? I.RubyCopperhead : o ? S[n].disabled : S[n].primary, [r, o, n]), d = s.useMemo(() => r ? I.RubyCopperhead : o ? S[n].disabled : S[n].quaternary, [r, o, n]), u = s.useMemo(() => r ? I.RubyCopperhead : o ? z[n].secondary : z[n].primary, [r, n]), m = s.useMemo(() => r ? I.RubyCopperhead : a, [r, n]), p = s.useMemo(
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
    commonStyles: p
  };
}
function De({
  checked: e = !1,
  disabled: o = !1,
  onChange: r
}) {
  const t = s.useRef(null), [n, a] = s.useState(e);
  s.useEffect(() => {
    a(!!e);
  }, [e]);
  const i = s.useCallback(
    (d) => {
      a(d.target.checked), r == null || r(d);
    },
    [r]
  ), c = s.useCallback(
    (d) => {
      if (d.preventDefault(), d.stopPropagation(), !o && t.current) {
        const u = !n;
        a(u);
        const m = new Event("change", { bubbles: !0 });
        Object.defineProperty(m, "target", {
          writable: !1,
          value: { ...t.current, checked: u }
        }), r == null || r(m);
      }
    },
    [o, n, r]
  );
  return {
    inputRef: t,
    isChecked: n,
    toggleOriginalIsChecked: i,
    toggleCustomIsChecked: c
  };
}
const We = s.memo(
  ({
    className: e,
    style: o,
    autoComplete: r = "off",
    required: t = !1,
    isError: n = !1,
    disabled: a = !1,
    name: i,
    value: c,
    checked: d = !1,
    onChange: u,
    label: m,
    labelPosition: p = "right",
    ...h
  }) => {
    const { inputRef: x, isChecked: b, toggleOriginalIsChecked: M, toggleCustomIsChecked: y } = De({
      checked: d,
      disabled: a,
      onChange: u
    }), { outlineColor: g, borderColor: k } = D({
      isDisabled: a,
      isError: n
    });
    return /* @__PURE__ */ T(
      ae,
      {
        label: m,
        required: t,
        isError: n,
        position: p,
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
              onChange: M,
              autoComplete: r,
              disabled: a,
              style: { display: "none" },
              ...h
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
We.displayName = "FormField.Checkbox";
function Q() {
  const [e, o] = s.useState(!1), r = s.useCallback(() => {
    o(!0);
  }, []), t = s.useCallback(() => {
    o(!1);
  }, []);
  return {
    isFocused: e,
    setIsFocused: o,
    handleFocus: r,
    handleBlur: t
  };
}
function Bt({ isDisabled: e }) {
  const [o, r] = s.useState(!1), t = s.useCallback(() => {
    r(!0);
  }, []), n = s.useCallback(() => {
    r(!1);
  }, []), a = s.useCallback(() => {
    r(!1);
  }, []);
  return s.useEffect(() => {
    e && r(!1);
  }, [e]), {
    isHovering: o,
    handleMouseDown: t,
    handleMouseUp: n,
    handleMouseLeave: a
  };
}
function Ht() {
  const [e, o] = s.useState(!1), r = s.useCallback(() => o(!0), []), t = s.useCallback(() => o(!1), []), n = s.useCallback(() => o((a) => !a), []);
  return {
    isOpen: e,
    setIsOpen: o,
    open: r,
    close: t,
    toggle: n
  };
}
const q = s.memo(
  ({
    children: e,
    className: o,
    style: r,
    fullWidth: t = !1,
    required: n = !1,
    isDisabled: a = !1,
    isError: i = !1,
    isFocused: c = !1,
    label: d,
    helpText: u,
    ...m
  }) => {
    const { themeColor: p } = v.useThemeColor(), { themeMode: h } = v.useThemeMode(), { helperTextColor: x } = D({
      fullWidth: t,
      isDisabled: a,
      isError: i
    });
    return /* @__PURE__ */ T(
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
          color: i ? I.RubyCopperhead : a ? S[h].disabled : c ? p : S[h].primary,
          ...r
        },
        ...m,
        children: [
          d && /* @__PURE__ */ T("legend", { style: { padding: 0, color: "inherit" }, children: [
            n && /* @__PURE__ */ l(
              R.Text,
              {
                as: "small",
                text: "*",
                style: {
                  color: I.RubyCopperhead,
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
                  paddingLeft: n ? "2px" : "4px"
                }
              }
            )
          ] }),
          /* @__PURE__ */ T(V.Flex, { column: !0, gap: 0, style: { width: "100%" }, children: [
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
q.displayName = "FormField";
const _e = s.memo(
  ({
    className: e,
    style: o,
    fullWidth: r,
    autoComplete: t = "off",
    required: n = !1,
    isError: a = !1,
    disabled: i = !1,
    name: c,
    value: d,
    label: u,
    helpText: m,
    ...p
  }) => {
    const { isFocused: h, handleFocus: x, handleBlur: b } = Q(), { commonStyles: M } = D({
      fullWidth: r,
      isDisabled: i,
      isError: a,
      isFocused: h
    });
    return /* @__PURE__ */ l(
      q,
      {
        label: u,
        required: n,
        isDisabled: i,
        isError: a,
        isFocused: h,
        fullWidth: r,
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
              ...M,
              ...o
            },
            ...p
          }
        )
      }
    );
  }
);
_e.displayName = "FormField.Number";
const Ae = s.memo(
  ({
    className: e,
    style: o,
    fullWidth: r,
    autoComplete: t = "off",
    required: n = !1,
    isError: a = !1,
    disabled: i = !1,
    name: c,
    value: d,
    label: u,
    helpText: m,
    ...p
  }) => {
    const { isFocused: h, handleFocus: x, handleBlur: b } = Q(), { outlineColor: M, commonStyles: y, textColor: g } = D({
      fullWidth: r,
      isDisabled: i,
      isError: a,
      isFocused: h
    }), { isPasswordVisible: k, togglePasswordVisibility: H } = zt(!1);
    return /* @__PURE__ */ l(
      q,
      {
        label: u,
        required: n,
        isDisabled: i,
        isFocused: h,
        isError: a,
        fullWidth: r,
        helpText: m,
        children: /* @__PURE__ */ T(
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
                  ...p
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
                    color: M,
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
Ae.displayName = "FormField.Password";
function zt(e = !1) {
  const [o, r] = s.useState(e), t = s.useCallback((n) => {
    s.startTransition(() => {
      n.preventDefault(), n.stopPropagation(), r((a) => !a);
    });
  }, []);
  return {
    isPasswordVisible: o,
    togglePasswordVisibility: t
  };
}
const je = s.memo(
  ({
    required: e = !1,
    disabled: o = !1,
    name: r,
    label: t,
    labelPosition: n = "right",
    fullWidth: a,
    value: i,
    options: c,
    onChange: d,
    className: u,
    style: m
  }) => {
    const [p, h] = s.useState(i || null);
    s.useEffect(() => {
      h(i || null);
    }, [i]);
    const { outlineColor: x, borderColor: b } = D({
      isDisabled: o
    }), M = s.useCallback(
      (y) => {
        if (o) return;
        h(y);
        const g = {
          target: {
            name: r,
            value: y
          }
        };
        d == null || d(g);
      },
      [o, r, d]
    );
    return /* @__PURE__ */ l(q, { label: t, required: e, isDisabled: o, fullWidth: a, children: /* @__PURE__ */ l(V.Flex, { column: !0, gap: 8, style: { marginTop: 4 }, children: c.map((y) => {
      const g = y.value === p, k = o || y.disabled;
      return /* @__PURE__ */ T(
        ae,
        {
          label: y.label,
          position: n,
          style: {
            cursor: k ? "not-allowed" : "pointer",
            opacity: k ? 0.6 : 1
          },
          children: [
            /* @__PURE__ */ l(
              "input",
              {
                type: "radio",
                name: r,
                value: y.value,
                checked: g,
                disabled: k,
                onChange: () => M(y.value),
                style: { display: "none" }
              }
            ),
            /* @__PURE__ */ l(
              N,
              {
                icon: g ? "fluent:radio-button-24-filled" : "fluent:radio-button-24-regular",
                width: 24,
                onClick: () => {
                  k || M(y.value);
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
je.displayName = "FormField.Radio";
const Dt = {
  ul: "ul"
}, Wt = {
  li: "li"
}, $e = s.memo(
  ({
    as: e = Wt.li,
    className: o,
    style: r,
    icon: t,
    text: n,
    subText: a,
    isDisabled: i = !1,
    isActive: c = !1,
    actionButton: d = void 0,
    ...u
  }) => {
    const { themeMode: m } = v.useThemeMode(), { themeColor: p } = v.useThemeColor(), { isHovering: h, handleMouseDown: x, handleMouseUp: b, handleMouseLeave: M } = Bt({
      isDisabled: i
    }), y = s.useCallback(
      (k) => {
        i || (k.currentTarget.style.boxShadow = A[m].tertiary);
      },
      [i]
    ), g = s.useCallback(
      (k) => {
        i || (k.currentTarget.style.boxShadow = h ? A[m].tertiary : "none");
      },
      [i]
    );
    return /* @__PURE__ */ l(
      e,
      {
        onMouseDown: x,
        onMouseUp: b,
        onMouseLeave: M,
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
          ...r
        },
        ...u,
        children: /* @__PURE__ */ T(V.Flex, { row: !0, style: { alignItems: "center" }, children: [
          t && /* @__PURE__ */ l(
            N,
            {
              icon: t,
              width: 24,
              style: {
                color: i ? S[m].disabled : c ? p : S[m].primary
              }
            }
          ),
          /* @__PURE__ */ T(
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
                    text: n,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      color: i ? S[m].disabled : c ? p : S[m].primary
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
                      color: i ? S[m].disabled : c ? p : S[m].quaternary
                    }
                  }
                )
              ]
            }
          ),
          !!(d != null && d.icon) && /* @__PURE__ */ l(
            pe.Icon,
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
$e.displayName = "Menu.Item";
const Ge = s.memo(({ children: e, className: o, style: r, as: t = Dt.ul, ...n }) => /* @__PURE__ */ l(
  t,
  {
    className: f("Venomous-UI-React--Menu.List", o),
    style: {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      ...r
    },
    ...n,
    children: e
  }
));
Ge.displayName = "Menu.List";
const xe = {
  List: Ge,
  Item: $e
}, qe = s.memo(
  ({ children: e, style: o, contentStyle: r, placement: t = "bottom", renderTrigger: n, trigger: a = "click", onClickOutside: i }) => {
    var y;
    const c = Ht(), d = s.useRef(null), u = s.useRef(null), m = s.useRef(null), [p, h] = s.useState({ top: 0, left: 0 });
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
        const g = d.current.getBoundingClientRect(), k = u.current.getBoundingClientRect(), H = m.current.offsetWidth, w = m.current.offsetHeight, O = k.top - g.top, X = k.left - g.left, ie = t === "bottom" ? O + k.height : O - w, ht = X + k.width / 2 - H / 2;
        h({ top: ie, left: ht });
      }
    }, [c.isOpen, t]);
    const M = a === "hover" ? {
      onMouseEnter: () => {
        a === "hover" && c.open();
      },
      onMouseLeave: () => {
        a === "hover" && c.close();
      }
    } : {};
    return /* @__PURE__ */ T("div", { ref: d, style: { display: "inline-block", position: "relative", ...o }, ...M, children: [
      /* @__PURE__ */ l(
        "div",
        {
          ref: u,
          ...a === "click" ? { onClick: c.toggle } : {},
          className: f("Venomous-UI-React--Popover.Trigger"),
          style: { display: "inline-block", width: "100%" },
          children: n(c.isOpen)
        }
      ),
      /* @__PURE__ */ l(j, { children: c.isOpen && /* @__PURE__ */ l(
        U.div,
        {
          ref: m,
          initial: { opacity: 0, y: 0 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 0 },
          transition: { duration: 0.2 },
          className: f("Venomous-UI-React--Popover"),
          style: {
            position: "absolute",
            top: p.top,
            left: p.left,
            zIndex: 1e3,
            minWidth: (y = u.current) == null ? void 0 : y.offsetWidth
          },
          children: /* @__PURE__ */ l(
            G,
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
qe.displayName = "Popover";
const Xe = s.memo(
  ({
    isOriginalSelect: e = !1,
    fullWidth: o,
    required: r = !1,
    isError: t = !1,
    disabled: n = !1,
    label: a,
    helpText: i,
    ...c
  }) => {
    const { isFocused: d, setIsFocused: u, handleFocus: m, handleBlur: p } = Q(), { commonStyles: h } = D({
      fullWidth: o,
      isDisabled: n,
      isError: t,
      isFocused: d
    });
    return /* @__PURE__ */ T(
      q,
      {
        label: a,
        required: r,
        isDisabled: n,
        isError: t,
        isFocused: d,
        fullWidth: o,
        helpText: i,
        children: [
          e && /* @__PURE__ */ l(
            Ye,
            {
              commonStyles: h,
              handleFocus: m,
              handleBlur: p,
              disabled: n,
              ...c
            }
          ),
          !e && /* @__PURE__ */ l(Ze, { commonStyles: h, setIsFocused: u, disabled: n, ...c })
        ]
      }
    );
  }
);
Xe.displayName = "FormField.Select";
const Ye = s.memo(
  ({
    commonStyles: e,
    handleFocus: o,
    handleBlur: r,
    name: t,
    autoComplete: n = "off",
    options: a,
    onChange: i,
    value: c,
    disabled: d,
    className: u,
    style: m,
    ...p
  }) => /* @__PURE__ */ l(
    "select",
    {
      name: t,
      autoComplete: n,
      disabled: d,
      onFocus: o,
      onBlur: r,
      onChange: i,
      value: c,
      className: f("Venomous-UI-React--FormField.Select", u),
      style: {
        boxSizing: "border-box",
        ...e,
        ...m
      },
      ...p,
      children: a.map((h) => /* @__PURE__ */ l("option", { value: h.value, disabled: h.disabled, children: h.label }, h.value))
    }
  )
), Ze = s.memo(({ commonStyles: e, setIsFocused: o, disabled: r, name: t, value: n, options: a, onChange: i, className: c, style: d }) => {
  const [u, m] = s.useState(n || null), [p, h] = s.useState(!1);
  s.useEffect(() => {
    m(n || null);
  }, [n]);
  const x = s.useCallback(
    (g) => {
      m(g), h(!1), o(!1);
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
  ), M = s.useMemo(
    () => {
      var g;
      return ((g = a.find((k) => k.value === u)) == null ? void 0 : g.label) || "";
    },
    [u]
  ), y = (d == null ? void 0 : d.width) ?? e.minWidth;
  return /* @__PURE__ */ l(
    qe,
    {
      placement: "bottom",
      trigger: "click",
      style: { width: "100%" },
      onClickOutside: () => o(!1),
      renderTrigger: () => /* @__PURE__ */ T(
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
            /* @__PURE__ */ l(R.Paragraph, { ellipsis: 1, style: { flex: 1 }, children: M }),
            u && !r && /* @__PURE__ */ l(
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
                  transform: p ? "rotate(180deg)" : "rotate(0deg)"
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
Ye.displayName = "FormField.Select.Original";
Ze.displayName = "FormField.Select.Custom";
const ye = 48, be = 24, le = 18, ke = 4, Je = s.memo(
  ({
    className: e,
    style: o,
    autoComplete: r = "off",
    required: t = !1,
    isError: n = !1,
    disabled: a = !1,
    name: i,
    value: c,
    checked: d = !1,
    onChange: u,
    label: m,
    labelPosition: p = "right",
    ...h
  }) => {
    const { inputRef: x, isChecked: b, toggleOriginalIsChecked: M, toggleCustomIsChecked: y } = De({
      checked: d,
      disabled: a,
      onChange: u
    }), { backgroundColor: g, outlineColor: k, borderColor: H, commonStyles: w } = D({
      isDisabled: a,
      isError: n
    });
    return /* @__PURE__ */ T(ae, { label: m, required: t, isError: n, position: p, children: [
      /* @__PURE__ */ l(
        "input",
        {
          type: "checkbox",
          name: i,
          value: c,
          checked: b,
          ref: x,
          onChange: M,
          autoComplete: r,
          disabled: a,
          style: { display: "none" },
          ...h
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
          children: /* @__PURE__ */ l(j, { children: /* @__PURE__ */ l(
            U.div,
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
                borderWidth: w.borderWidth,
                borderStyle: w.borderStyle,
                borderColor: H,
                backgroundColor: b ? k : g,
                transition: "background-color 0.2s ease-in-out",
                ...o
              },
              children: /* @__PURE__ */ l(
                U.div,
                {
                  initial: !1,
                  animate: b ? "checked" : "unchecked",
                  transition: { type: "spring", stiffness: 700, damping: 30 },
                  variants: {
                    checked: { x: ye - le - ke },
                    unchecked: { x: ke }
                  },
                  style: {
                    width: le,
                    height: le,
                    borderRadius: "50%",
                    position: "absolute",
                    boxShadow: A.light.primary,
                    backgroundColor: n && !b ? I.RubyCopperhead : L.light.secondary
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
Je.displayName = "FormField.Switch";
const Qe = s.memo(
  ({
    className: e,
    style: o,
    fullWidth: r,
    autoComplete: t = "off",
    required: n = !1,
    isError: a = !1,
    disabled: i = !1,
    name: c,
    value: d,
    label: u,
    helpText: m,
    ...p
  }) => {
    const { isFocused: h, handleFocus: x, handleBlur: b } = Q(), { commonStyles: M } = D({
      fullWidth: r,
      isDisabled: i,
      isError: a,
      isFocused: h
    });
    return /* @__PURE__ */ l(
      q,
      {
        label: u,
        required: n,
        isDisabled: i,
        isError: a,
        isFocused: h,
        fullWidth: r,
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
              ...M,
              ...o
            },
            ...p
          }
        )
      }
    );
  }
);
Qe.displayName = "FormField.Text";
const Ke = s.memo(
  ({
    className: e,
    style: o,
    fullWidth: r,
    required: t = !1,
    isError: n = !1,
    disabled: a = !1,
    rows: i = 3,
    name: c,
    value: d,
    label: u,
    helpText: m,
    ...p
  }) => {
    const { isFocused: h, handleFocus: x, handleBlur: b } = Q(), { commonStyles: M } = D({
      fullWidth: r,
      isDisabled: a,
      isError: n,
      isFocused: h
    });
    return /* @__PURE__ */ l(
      q,
      {
        label: u,
        required: t,
        isDisabled: a,
        isError: n,
        isFocused: h,
        fullWidth: r,
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
              ...M,
              ...o
            },
            ...p
          }
        )
      }
    );
  }
);
Ke.displayName = "FormField.Textarea";
const _t = s.memo(({ children: e, gap: o = 8, className: r, style: t, ...n }) => /* @__PURE__ */ l(
  "form",
  {
    className: f("Venomous-UI-React--Form", r),
    style: {
      width: "100%",
      ...t
    },
    ...n,
    children: /* @__PURE__ */ l(V.Flex, { column: !0, gap: o, children: e })
  }
));
_t.displayName = "Form";
const io = {
  Text: Qe,
  Textarea: Ke,
  Number: _e,
  Password: Ae,
  Checkbox: We,
  Switch: Je,
  Radio: je,
  Select: Xe
}, Pe = s.memo(({ children: e, className: o, style: r, ...t }) => /* @__PURE__ */ l(
  "main",
  {
    className: f("Venomous-UI-React--Layout.Content", o),
    style: {
      width: "100%",
      flexGrow: 1,
      ...r
    },
    ...t,
    children: e
  }
));
Pe.displayName = "Layout.Content";
const oe = {
  headerHeight: 60,
  footerHeight: 80,
  sideWidth: 300
}, et = s.createContext(oe);
function he() {
  const e = s.useContext(et);
  if (e === void 0)
    throw new Error("useLayoutContext must be used within a LayoutProvider");
  return e;
}
const tt = s.memo(({ children: e, className: o, style: r, ...t }) => {
  const { footerHeight: n } = he();
  return /* @__PURE__ */ l(
    "footer",
    {
      className: f("Venomous-UI-React--Layout.Footer", o),
      style: {
        height: `${n}px`,
        width: "100%",
        ...r
      },
      ...t,
      children: e
    }
  );
});
tt.displayName = "Layout.Footer";
const ot = s.memo(({ children: e, className: o, style: r, ...t }) => {
  const { headerHeight: n } = he();
  return /* @__PURE__ */ l(
    "header",
    {
      className: f("Venomous-UI-React--Layout.Header", o),
      style: {
        height: `${n}px`,
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 1,
        ...r
      },
      ...t,
      children: e
    }
  );
});
ot.displayName = "Layout.Header";
const rt = s.memo(
  ({
    children: e,
    maxBreakpoint: o = F.xl,
    headerHeight: r = oe.headerHeight,
    footerHeight: t = oe.footerHeight,
    sideWidth: n = oe.sideWidth
  }) => {
    const a = s.useMemo(
      () => ({ headerHeight: r, footerHeight: t, sideWidth: n }),
      [r, t, n]
    );
    return (
      // eslint-disable-next-line react-x/no-context-provider
      /* @__PURE__ */ l(et.Provider, { value: a, children: /* @__PURE__ */ l(ze, { maxBreakpoint: o, children: e }) })
    );
  }
);
rt.displayName = "Layout.Provider";
const nt = s.memo(({ children: e, className: o, style: r, ...t }) => {
  const { headerHeight: n, sideWidth: a } = he();
  return /* @__PURE__ */ l(
    "aside",
    {
      className: f("Venomous-UI-React--Layout.Side", o),
      style: {
        height: `calc(100svh - ${n}px)`,
        width: a,
        minWidth: a,
        position: "sticky",
        top: `${n}px`,
        left: 0,
        zIndex: 1,
        overflowX: "hidden",
        overflowY: "scroll",
        ...r
      },
      ...t,
      children: e
    }
  );
});
nt.displayName = "Layout.Side";
const lo = {
  Provider: rt,
  Header: ot,
  Side: nt,
  Content: Pe,
  Footer: tt
}, st = {
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
  const o = Object.entries(st).find(([, r]) => r === e);
  if (!o)
    throw new Error(`Unsupported mime type: ${e}`);
  return o[0];
}
function jt(e) {
  return st[e];
}
function $t(e) {
  switch (e) {
    case ".jpg":
    case ".jpeg":
    case ".png":
    case ".webp":
    case ".gif":
      return I.TurquoiseFerDeLance;
    // 蓝色
    case ".svg":
    case ".js":
    case ".json":
      return I.TopazMamushi;
    // 金色
    case ".pdf":
      return I.GarnetViper;
    // 红色
    case ".html":
    case ".mp4":
    case ".avi":
      return I.TopazCoral;
    // 橙色
    case ".css":
      return I.AlexandriteAnaconda;
    // 紫色
    case ".xls":
    case ".xlsx":
    case ".csv":
      return I.EmeraldMamba;
    // 绿色
    case ".doc":
    case ".docx":
      return I.SapphireCobra;
    // 蓝色
    case ".mp3":
      return I.MalachitePython;
    // 绿色
    case ".txt":
    default:
      return "#5c5c5c";
  }
}
const at = s.memo(({ fileExtension: e, width: o = 40, className: r, ...t }) => {
  var i;
  const n = s.useMemo(
    () => $t(e),
    [e]
  ), a = S.dark.primary;
  return /* @__PURE__ */ T(
    "svg",
    {
      width: o,
      height: o * 2,
      viewBox: "0 0 40 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: f("Venomous-UI-React--MediaFile.TypeImage", r),
      ...t,
      children: [
        /* @__PURE__ */ l(
          "path",
          {
            d: "M23.172 0C23.7022 0 24.2107 0.210507 24.5857 0.585255L36.4137 12.4044C36.7891 12.7795 37 13.2884 37 13.8191V35.3333C37 37.9107 34.8689 40 32.24 40H7.76C5.13112 40 3 37.9107 3 35.3333V4.66667C3 2.08934 5.13112 0 7.76 0H23.172Z",
            fill: n
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
        /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ T(
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
at.displayName = "MediaFile.TypeImage";
const it = s.memo(
  ({ handleFileUpload: e, multiple: o = !1, accept: r, style: t, isLoading: n, isDisabled: a }) => {
    const i = s.useRef(null), c = s.useCallback(() => {
      var u;
      (u = i.current) == null || u.click();
    }, []), d = s.useCallback(
      (u) => {
        const m = u.target.files;
        if (!(m != null && m.length))
          return;
        const p = Array.from(m);
        e(p), u.currentTarget.value = "";
      },
      [e]
    );
    return /* @__PURE__ */ T(re, { children: [
      /* @__PURE__ */ l(
        "input",
        {
          type: "file",
          ref: i,
          onChange: d,
          multiple: o,
          accept: r,
          style: { display: "none" }
        }
      ),
      /* @__PURE__ */ l(
        pe.Icon,
        {
          icon: "solar:cloud-upload-outline",
          iconWidth: 32,
          variant: "ghost",
          isLoading: n,
          isDisabled: a,
          onClick: c,
          style: { padding: "32px 16px", ...t }
        }
      )
    ] });
  }
);
it.displayName = "MediaFile.Uploader";
const co = {
  TypeImage: at,
  Uploader: it,
  mimeTypeToExtension: At,
  extensionToMimeType: jt
}, lt = s.memo(
  ({ children: e, className: o, style: r, isOpen: t, onClose: n, maskClosable: a = !0, maxBreakpoint: i = F.xs }) => {
    const { themeMode: c } = v.useThemeMode();
    return /* @__PURE__ */ l(j, { children: t && /* @__PURE__ */ l(
      U.div,
      {
        onClick: a ? n : void 0,
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
          backgroundColor: $(L[c].primary, 0.5),
          backdropFilter: "blur(2px)",
          opacity: t ? 1 : 0
        },
        children: /* @__PURE__ */ l(
          U.div,
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
              width: W[i],
              maxWidth: W[i]
            },
            children: /* @__PURE__ */ l(G, { style: { width: "100%", ...r }, children: e })
          }
        )
      }
    ) });
  }
);
lt.displayName = "Modal";
const ct = s.memo(
  ({
    className: e,
    style: o,
    isOpen: r,
    onClose: t,
    maskClosable: n = !1,
    maxBreakpoint: a = F.xs,
    title: i,
    description: c,
    isConformLoading: d = !1,
    cancelText: u = "Cancel",
    confirmText: m = "Confirm",
    onCancel: p,
    onConfirm: h
  }) => {
    const x = s.useCallback(async () => {
      await p(), t();
    }, [p, t]), b = s.useCallback(async () => {
      await h(), t();
    }, [h, t]);
    return /* @__PURE__ */ T(
      lt,
      {
        isOpen: r,
        onClose: t,
        className: f("Venomous-UI-React--Modals.Confirm", e),
        style: o,
        maskClosable: n,
        maxBreakpoint: a,
        children: [
          /* @__PURE__ */ l(R.Title, { as: "h5", text: i }),
          /* @__PURE__ */ l(R.Paragraph, { style: { padding: "8px 0 24px" }, children: c }),
          /* @__PURE__ */ T(V.Flex, { row: !0, gap: 8, style: { justifyContent: "flex-end" }, children: [
            /* @__PURE__ */ l(
              ce,
              {
                variant: "outlined",
                text: u,
                onClick: () => void x(),
                isDisabled: d
              }
            ),
            /* @__PURE__ */ l(
              ce,
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
ct.displayName = "Modals.Confirm";
const uo = {
  Confirm: ct
}, Gt = s.memo(({ children: e }) => {
  const [o, r] = s.useState(!1);
  return s.useEffect(() => {
    r(!0);
  }, []), o ? /* @__PURE__ */ l(re, { children: e }) : null;
});
Gt.displayName = "NoSSR";
const qt = s.memo(({ position: e = "top-center", offset: o = 0, collapsable: r = !1 }) => {
  const { isDarkThemeMode: t } = v.useThemeMode();
  return /* @__PURE__ */ l(
    yt,
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
qt.displayName = "Notification";
function mo(e) {
  const o = {
    description: e.description
  };
  return e.type === "success" ? K.success(e.title, o) : e.type === "error" ? K.error(e.title, o) : e.type === "warning" ? K.warning(e.title, o) : K.info(e.title, o);
}
const dt = s.memo(({ children: e, targetElementID: o }) => {
  const [r, t] = s.useState(null);
  return s.useEffect(() => {
    const n = document.getElementById(o);
    n && t(n);
  }, [o]), r ? bt(/* @__PURE__ */ l(re, { children: e }), r, o) : null;
});
dt.displayName = "PortalRender";
const po = {
  Render: dt
}, ut = s.memo(({ height: e = 8, className: o, style: r }) => {
  const t = gt(), { themeMode: n } = v.useThemeMode(), { themeColor: a } = v.useThemeColor(), i = s.useRef(null), [c, d] = s.useState(0);
  return s.useEffect(() => {
    const u = () => {
      if (i.current) {
        const m = i.current.offsetWidth, p = m * 0.3;
        d(m - p);
      }
    };
    return u(), window.addEventListener("resize", u), () => window.removeEventListener("resize", u);
  }, []), s.useEffect(() => {
    if (c === 0) return;
    (async () => {
      for (; ; )
        await t.start({ x: [0, c], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } }), await t.start({ x: [c, 0], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } });
    })();
  }, [t, c]), /* @__PURE__ */ l(
    "div",
    {
      ref: i,
      className: f("Venomous-UI-React--Progress.LoadingBar", o),
      style: {
        position: "relative",
        width: "100%",
        height: e,
        overflow: "hidden",
        backgroundColor: $(a, 0.2),
        borderRadius: e / 2,
        boxShadow: A[n].tertiary,
        ...r
      },
      children: /* @__PURE__ */ l(
        U.div,
        {
          animate: t,
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "50%",
            backgroundImage: `linear-gradient(45deg, ${$(a, 0.15)} 0%, ${ne(a, 0.1)} 90%)`,
            borderRadius: e / 2
          }
        }
      )
    }
  );
});
ut.displayName = "Progress.LoadingBar";
const mt = s.memo(({ height: e = 4 }) => {
  const { scrollYProgress: o } = xt(), { themeColor: r } = v.useThemeColor();
  return /* @__PURE__ */ l(
    U.div,
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
        backgroundImage: `linear-gradient(45deg, ${$(r, 0.15)} 0%, ${ne(r, 0.2)} 90%)`,
        height: e,
        borderTopRightRadius: "16px",
        borderBottomRightRadius: "16px"
      }
    }
  );
});
mt.displayName = "Progress.Scrollbar";
const ho = {
  Scrollbar: mt,
  LoadingBar: ut
}, Xt = s.memo(
  ({
    tabs: e,
    defaultActiveIndex: o = 0,
    onChange: r,
    variant: t = "pills",
    tabContainerStyle: n,
    tabItemContainerStyle: a,
    tabItemStyle: i,
    tabIndicatorStyle: c,
    tabContentStyle: d
  }) => {
    const { themeMode: u } = v.useThemeMode(), { themeColor: m } = v.useThemeColor(), [p, h] = s.useState(!1), [x, b] = s.useState(o), [M, y] = s.useState({}), g = s.useRef([]), k = s.useCallback(() => {
      if (g.current[x]) {
        const w = g.current[x];
        if (w) {
          const O = !!e[x].icon, { offsetLeft: X, offsetWidth: ie } = w;
          y({
            left: X,
            width: ie + (p && O ? 24 : 0)
          });
        }
      }
    }, [x, t, e, p]);
    s.useLayoutEffect(() => (h(!0), () => {
      h(!1);
    }), []), s.useEffect(() => {
      k();
    }, [k]), s.useEffect(() => {
      const w = requestAnimationFrame(() => {
        k();
      });
      return () => cancelAnimationFrame(w);
    }, [x, e.length, k]);
    const H = s.useCallback(
      (w, O) => {
        h(!1), s.startTransition(() => {
          b(w);
        }), r(w, O);
      },
      [r]
    );
    return /* @__PURE__ */ T(
      V.Flex,
      {
        column: !0,
        gap: 0,
        className: f("Venomous-UI-React--Tabs.Container"),
        style: { width: "100%", ...n },
        children: [
          /* @__PURE__ */ T(
            V.Flex,
            {
              row: !0,
              className: f("Venomous-UI-React--Tabs.ItemContainer"),
              style: {
                position: "relative",
                ...t === "pills" && {
                  background: L[u].secondary,
                  padding: "4px",
                  borderRadius: "8px"
                },
                ...t === "underline" && {
                  borderBottomWidth: 1.5,
                  borderBottomStyle: "solid",
                  borderBottomColor: z[u].secondary
                },
                ...a
              },
              children: [
                e.map((w, O) => /* @__PURE__ */ T(
                  U.button,
                  {
                    ref: (X) => {
                      X && (g.current[O] = X);
                    },
                    onClick: () => H(O, w),
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
                      color: S[u].primary,
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
                      w.icon && /* @__PURE__ */ l(
                        N,
                        {
                          icon: w.icon,
                          width: 20,
                          style: {
                            marginRight: "8px",
                            color: O === x ? m : "inherit"
                          }
                        }
                      ),
                      /* @__PURE__ */ l(
                        R.Text,
                        {
                          text: w.label,
                          style: {
                            color: O === x ? m : "inherit"
                          }
                        }
                      )
                    ]
                  },
                  w.key || O
                )),
                /* @__PURE__ */ l(
                  U.div,
                  {
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { duration: 0.2, ease: "easeOut" },
                    layout: !0,
                    className: f("Venomous-UI-React--Tabs.Indicator"),
                    style: {
                      position: "absolute",
                      ...M,
                      ...t === "pills" && {
                        top: "4px",
                        zIndex: 1,
                        height: "calc(100% - 8px)",
                        borderRadius: "6px",
                        background: L[u].primary,
                        boxShadow: A[u].tertiary
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
          /* @__PURE__ */ l(j, { mode: "wait", children: e[x] && /* @__PURE__ */ l(
            U.div,
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
Xt.displayName = "Tab";
const Yt = (e, o) => String(o);
function Zt({
  columns: e,
  rows: o,
  rowUnionKey: r = Yt,
  style: t,
  renderRowActions: n,
  headProps: a,
  bodyProps: i,
  headRowProps: c,
  bodyRowProps: d,
  headRowCellProps: u,
  bodyRowCellProps: m,
  ...p
}) {
  return /* @__PURE__ */ T(
    "table",
    {
      className: f("Venomous-UI-React--Table", p.className),
      style: {
        boxSizing: "border-box",
        display: "block",
        borderSpacing: 0,
        overflow: "scroll",
        position: "relative",
        ...t
      },
      ...p,
      children: [
        /* @__PURE__ */ l(
          "thead",
          {
            className: f("Venomous-UI-React--Tables.Head", a == null ? void 0 : a.className),
            style: { position: "sticky", top: 0, zIndex: 1, ...a == null ? void 0 : a.style },
            ...a,
            children: /* @__PURE__ */ T(
              Te,
              {
                className: f("Venomous-UI-React--Tables.Row", c == null ? void 0 : c.className),
                style: { ...c == null ? void 0 : c.style },
                ...c,
                children: [
                  e.map((h) => {
                    var x;
                    return /* @__PURE__ */ l(
                      ee,
                      {
                        as: "th",
                        className: f(
                          "Venomous-UI-React--Tables.Cell",
                          u == null ? void 0 : u.className,
                          (x = h.headerCellProps) == null ? void 0 : x.className
                        ),
                        style: { ...u == null ? void 0 : u.style },
                        ...u,
                        ...h.headerCellProps,
                        children: h.label
                      },
                      String(h.key)
                    );
                  }),
                  n && /* @__PURE__ */ l(
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
            children: o.map((h, x) => /* @__PURE__ */ T(
              Te,
              {
                className: f("Venomous-UI-React--Tables.Row", d == null ? void 0 : d.className),
                style: { ...d == null ? void 0 : d.style },
                ...d,
                children: [
                  e.map((b) => {
                    var M;
                    return /* @__PURE__ */ l(
                      ee,
                      {
                        as: "td",
                        className: f("Venomous-UI-React--Tables.Cell", m == null ? void 0 : m.className),
                        style: { ...m == null ? void 0 : m.style },
                        ...m,
                        children: ((M = b.renderCell) == null ? void 0 : M.call(b, h, x)) ?? String(h[b.key] ?? "")
                      },
                      String(b.key)
                    );
                  }),
                  n && /* @__PURE__ */ l(
                    ee,
                    {
                      as: "td",
                      className: f("Venomous-UI-React--Tables.Cell", m == null ? void 0 : m.className),
                      style: { ...m == null ? void 0 : m.style },
                      ...m,
                      children: n(h, x)
                    }
                  )
                ]
              },
              String(r(h, x))
            ))
          }
        )
      ]
    }
  );
}
const Jt = s.memo(Zt);
Jt.displayName = "Table";
const Te = s.memo(({ style: e, ...o }) => {
  const { themeMode: r } = v.useThemeMode();
  return /* @__PURE__ */ l(
    "tr",
    {
      style: {
        boxSizing: "border-box",
        color: S[r].primary,
        ...e
      },
      ...o
    }
  );
}), ee = s.memo(({ as: e = "td", style: o, ...r }) => {
  const { themeMode: t } = v.useThemeMode();
  return /* @__PURE__ */ l(
    e,
    {
      style: {
        boxSizing: "border-box",
        padding: "16px 24px",
        textAlign: "left",
        color: S[t].primary,
        backgroundColor: e === "td" ? "transparent" : L[t].secondary,
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderBottomColor: z[t].quaternary,
        ...o
      },
      ...r
    }
  );
}), pt = s.memo(({ className: e, style: o, children: r, isOpen: t }) => /* @__PURE__ */ l(j, { initial: !1, children: t && /* @__PURE__ */ l(
  U.div,
  {
    className: f("Venomous-UI-React--Transitions.Collapse", e),
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
    transition: { duration: 0.2 },
    style: { overflow: "hidden", ...o },
    children: r
  }
) }));
pt.displayName = "Transitions.Collapse";
const fo = {
  Collapse: pt
};
export {
  L as BackgroundColors,
  z as BorderColors,
  F as BreakPointName,
  ce as Button,
  pe as Buttons,
  G as Card,
  ao as Cards,
  Be as Chip,
  ze as Container,
  Ot as Drawer,
  _t as Form,
  io as FormField,
  N as Icon,
  lo as Layout,
  co as MediaFile,
  st as MediaFileTypeMap,
  xe as Menu,
  lt as Modal,
  uo as Modals,
  Gt as NoSSR,
  qt as Notification,
  qe as Popover,
  po as Portal,
  ho as Progress,
  Y as SemanticColors,
  A as Shadows,
  V as Space,
  Xt as Tab,
  Jt as Table,
  S as TextColors,
  v as Theme,
  W as ThemeBreakPoint,
  I as ThemeColor,
  C as ThemeMode,
  fo as Transitions,
  R as Typography,
  _ as TypographySize,
  te as TypographySizeName,
  Mt as getDarkerHex,
  ne as getLighterHex,
  $ as getOpacityHex,
  so as getSystemThemeMode,
  no as getThemeColors,
  de as hexNormalize,
  ve as hexToHsl,
  Me as hexToRgb,
  Ce as hslToHex,
  mo as notify,
  Tt as rgbToHex,
  Q as useElementFocus,
  Bt as useElementHover,
  Ht as useHandler
};
