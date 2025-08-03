import { jsx as c, jsxs as b, Fragment as se } from "react/jsx-runtime";
import s from "react";
import { Icon as Ke } from "@iconify/react";
import { AnimatePresence as _, motion as I, useAnimation as et, useScroll as tt } from "framer-motion";
import { Toaster as ot, toast as Q } from "sonner";
import { createPortal as rt } from "react-dom";
var S = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e))(S || {});
const q = {
  success: "#4caf50",
  error: "#f44336",
  warning: "#ff9800",
  info: "#2196f3"
}, v = {
  [S.Dark]: {
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
  [S.Light]: {
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
  [S.Dark]: {
    primary: "#181818",
    // 主背景
    secondary: "#363636ff"
    // 卡片/面板背景
  },
  [S.Light]: {
    primary: "#ffffff",
    // 主背景
    secondary: "#f8f9fa"
    // 卡片/面板背景
  }
}, $ = {
  [S.Dark]: {
    primary: "rgba(255, 255, 255, 0.55)",
    secondary: "rgba(255, 255, 255, 0.25)",
    tertiary: "rgba(255, 255, 255, 0.15)",
    quaternary: "rgba(255, 255, 255, 0.05)"
  },
  [S.Light]: {
    primary: "rgba(0, 0, 0, 0.55)",
    secondary: "rgba(0, 0, 0, 0.25)",
    tertiary: "rgba(0, 0, 0, 0.15)",
    quaternary: "rgba(0, 0, 0, 0.05)"
  }
}, G = {
  [S.Dark]: {
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
  [S.Light]: {
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
var C = /* @__PURE__ */ ((e) => (e.xs = "xs", e.sm = "sm", e.md = "md", e.lg = "lg", e.xl = "xl", e.xxl = "xxl", e))(C || {});
const N = {
  xs: 444,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
  xxl: 2560
};
var E = /* @__PURE__ */ ((e) => (e.RubyCopperhead = "#DC2626", e.GarnetViper = "#B91C1C", e.BloodstoneAdder = "#7F1D1D", e.TopazCoral = "#EA580C", e.AmberRattlesnake = "#F59E0B", e.GoldenLanceHead = "#FBBF24", e.TopazMamushi = "#FACC15", e.EmeraldMamba = "#059669", e.MalachitePython = "#10B981", e.JadeBoomslang = "#22C55E", e.PeridotGaboonViper = "#84CC16", e.TurquoiseFerDeLance = "#06B6D4", e.SapphireCobra = "#2563EB", e.LapisLazuliSeaSnake = "#1D4ED8", e.AmethystAsp = "#7C3AED", e.AlexandriteAnaconda = "#7E22CE", e.FluoriteElapid = "#A855F7", e.TourmalineStiletto = "#DB2777", e.RoseQuartzDeathAdder = "#EC4899", e.MorganiteCoralSnake = "#F472B6", e.GraphitePuffAdder = "#1F2937", e.ObsidianBlackMamba = "#374151", e.HematiteHognose = "#6B7280", e.SmokyQuartzSandViper = "#9CA3AF", e))(E || {}), Z = /* @__PURE__ */ ((e) => (e.h1 = "h1", e.h2 = "h2", e.h3 = "h3", e.h4 = "h4", e.h5 = "h5", e.h6 = "h6", e.text = "text", e.strong = "strong", e.small = "small", e))(Z || {});
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
}, Bt = (e) => ({
  background: B[e],
  border: $[e],
  text: v[e]
});
function nt() {
  return typeof window < "u" ? window.matchMedia("(prefers-color-scheme: dark)").matches : !1;
}
function Nt() {
  return nt() ? S.Dark : S.Light;
}
function ie(e) {
  return e = e.replace("#", ""), e.length === 3 && (e = e.split("").map((t) => t + t).join("")), `#${e}`;
}
function ge(e) {
  e = e.replace("#", "");
  const t = parseInt(e, 16), r = t >> 16 & 255, o = t >> 8 & 255, n = t & 255;
  return { r, g: o, b: n };
}
function st(e, t, r) {
  const o = (n) => {
    const i = n.toString(16);
    return i.length === 1 ? "0" + i : i;
  };
  return `#${o(e)}${o(t)}${o(r)}`;
}
function xe(e) {
  const { r: t, g: r, b: o } = ge(ie(e)), n = t / 255, i = r / 255, l = o / 255, a = Math.max(n, i, l), d = Math.min(n, i, l), u = a - d;
  let h = 0;
  u !== 0 && (a === n ? h = (i - l) / u % 6 : a === i ? h = (l - n) / u + 2 : h = (n - i) / u + 4, h *= 60, h < 0 && (h += 360));
  const p = (a + d) / 2, f = u === 0 ? 0 : u / (1 - Math.abs(2 * p - 1));
  return { h, s: f, l: p };
}
function ye(e, t, r) {
  const o = (1 - Math.abs(2 * r - 1)) * t, n = o * (1 - Math.abs(e / 60 % 2 - 1)), i = r - o / 2;
  let l = 0, a = 0, d = 0;
  return e >= 0 && e < 60 ? [l, a, d] = [o, n, 0] : e < 120 ? [l, a, d] = [n, o, 0] : e < 180 ? [l, a, d] = [0, o, n] : e < 240 ? [l, a, d] = [0, n, o] : e < 300 ? [l, a, d] = [n, 0, o] : [l, a, d] = [o, 0, n], st(Math.round((l + i) * 255), Math.round((a + i) * 255), Math.round((d + i) * 255));
}
function it(e, t) {
  const { h: r, s: o, l: n } = xe(e);
  return ye(r, o, Math.max(0, n - t));
}
function K(e, t) {
  const { h: r, s: o, l: n } = xe(e);
  return ye(r, o, Math.min(1, n + t));
}
function V(e, t) {
  const { r, g: o, b: n } = ge(ie(e));
  t > 1 && (t = 1), t < 0 && (t = 0);
  const i = Math.min(1, Math.max(0, t));
  return `rgba(${r}, ${o}, ${n}, ${i})`;
}
const be = s.memo(() => (lt(), null));
be.displayName = "Theme.InjectToHTML";
function lt() {
  const { themeColor: e } = k.useThemeColor(), t = s.useMemo(
    () => ({
      light: K(e, 0.2),
      dark: it(e, 0.8),
      origin: ie(e),
      opacity: V(e, 0.6)
    }),
    [e]
  );
  s.useEffect(() => {
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
const le = s.createContext(void 0), at = S.Light, ct = E.EmeraldMamba, dt = {
  THEME_MODE: "VENOMOUS_UI__THEME_MODE",
  THEME_COLOR: "VENOMOUS_UI__THEME_COLOR"
};
function ut({
  children: e,
  defaultThemeMode: t = at,
  defaultThemeColor: r = ct,
  storageKey: o = dt
}) {
  const [n, i] = s.useState(!1);
  s.useEffect(() => {
    i(!0);
  }, []);
  const [l, a] = s.useState(t), [d, u] = s.useState(r), h = s.useCallback((g) => {
    a(g);
  }, []), p = s.useCallback(() => {
    a((g) => g === S.Dark ? S.Light : S.Dark);
  }, []), f = s.useCallback(() => {
    a(t);
  }, [t]), m = s.useCallback((g) => {
    u(g);
  }, []), x = s.useCallback(() => {
    u(r);
  }, [r]);
  s.useEffect(() => {
    if (n) {
      const g = localStorage.getItem(o.THEME_MODE);
      g && Object.values(S).includes(g) && a(g);
      const y = localStorage.getItem(o.THEME_COLOR);
      y && Object.values(E).includes(y) && u(y);
    }
  }, [n, o.THEME_COLOR, o.THEME_MODE]), s.useEffect(() => {
    n && (localStorage.setItem(o.THEME_MODE, l), localStorage.setItem(o.THEME_COLOR, d));
  }, [n, o.THEME_MODE, o.THEME_COLOR, l, d]);
  const w = s.useMemo(
    () => ({
      themeMode: l,
      setThemeMode: h,
      toggleThemeMode: p,
      resetThemeMode: f,
      isDarkThemeMode: l === S.Dark,
      themeColor: d,
      setThemeColor: m,
      resetThemeColor: x
    }),
    [l, h, p, f, d, m, x]
  );
  return /* @__PURE__ */ c(le.Provider, { value: w, children: e });
}
const de = new Map(
  Object.values(C).map((e, t) => [e, t])
);
function pt() {
  const [e, t] = s.useState(!1), [r, o] = s.useState(() => ht()), [n, i] = s.useState(!1), l = s.useRef(null);
  s.useEffect(() => {
    const d = () => {
      const p = window.innerWidth;
      return p >= N.xxl ? C.xxl : p >= N.xl ? C.xl : p >= N.lg ? C.lg : p >= N.md ? C.md : p >= N.sm ? C.sm : C.xs;
    }, u = () => {
      l.current && clearTimeout(l.current), l.current = setTimeout(() => {
        const p = d();
        o((f) => f !== p ? p : f);
      }, 100);
    }, h = d();
    return o(h), i(!0), t(!0), window.addEventListener("resize", u, { passive: !0 }), () => {
      l.current && (clearTimeout(l.current), l.current = null), window.removeEventListener("resize", u);
    };
  }, []);
  const a = s.useCallback(
    (d) => {
      if (!e) return !1;
      const u = de.get(r), h = de.get(d);
      return u === void 0 || h === void 0 ? !1 : u >= h;
    },
    [r, e]
  );
  return s.useMemo(
    () => ({
      screenSize: r,
      isLargerThanOrEqual: a,
      isMounted: e,
      isSSRHydrated: e && n
      // 是否已完成水合且获取真实尺寸
    }),
    [r, e, n, a]
  );
}
function ht() {
  if (typeof window > "u")
    return C.xs;
  const e = navigator.userAgent, t = /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(e), r = /iPad|Android(?!.*Mobile)|Kindle|Silk/i.test(e);
  return t && !r ? C.xs : r ? C.md : C.lg;
}
function ft() {
  const e = s.useContext(le);
  if (e === void 0)
    throw new Error("useThemeColor must be used within a ThemeModeProvider");
  return {
    themeColor: e.themeColor,
    setThemeColor: e.setThemeColor,
    resetThemeColor: e.resetThemeColor
  };
}
function mt() {
  const e = s.useContext(le);
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
const k = {
  Provider: ut,
  InjectToHTML: be,
  useThemeMode: mt,
  useThemeColor: ft,
  useThemeBreakpoint: pt
}, R = s.memo(({ style: e, icon: t, width: r = 20, semanticColor: o, ...n }) => {
  const { themeMode: i } = k.useThemeMode(), l = s.useMemo(() => o ? q[o] : v[i].primary, [i, o]);
  return /* @__PURE__ */ c(
    Ke,
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
R.displayName = "Icon";
const z = {
  contained: "contained",
  outlined: "outlined",
  ghost: "ghost"
};
function ke({
  isLoading: e,
  isDisabled: t,
  variant: r,
  semanticColor: o
}) {
  const { themeColor: n } = k.useThemeColor(), { themeMode: i } = k.useThemeMode(), l = s.useMemo(() => {
    let p = "";
    if (e || t)
      return p = B[i].secondary, p;
    switch (r) {
      case z.contained:
        p = o ? q[o] : n;
        break;
      case z.outlined:
        p = B[i].secondary;
        break;
      case z.ghost:
      default:
        p = "transparent";
        break;
    }
    return p;
  }, [r, n, i, e, t, o]), a = s.useMemo(() => {
    let p = "";
    if (e || t)
      return p = $[i].secondary, p;
    switch (r) {
      case z.contained:
        p = o ? K(q[o], 0.25) : V(n, 0.5);
        break;
      case z.outlined:
        p = o ? q[o] : n;
        break;
      case z.ghost:
        p = $[i].secondary;
        break;
      default:
        p = "transparent";
        break;
    }
    return p;
  }, [r, n, i, e, t, o]), d = s.useMemo(() => {
    let p = "";
    if (e || t)
      return p = v[i].disabled, p;
    switch (r) {
      case z.contained:
        p = "#ffffff";
        break;
      case z.outlined:
        p = o ? q[o] : n;
        break;
      case z.ghost:
      default:
        p = v[i].primary;
        break;
    }
    return p;
  }, [r, n, i, e, t, o]), u = s.useMemo(() => {
    switch (r) {
      case z.ghost:
        return "none";
      case z.contained:
      case z.outlined:
      default:
        return G[i].secondary;
    }
  }, [r, n, i]);
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
        fontSize: W.text,
        fontWeight: "bold",
        cursor: e ? "wait" : t ? "not-allowed" : "pointer",
        borderRadius: "8px",
        borderWidth: 2,
        borderColor: a,
        boxShadow: u,
        backgroundColor: l,
        color: d
      }),
      [e, t, a, l, d, u]
    )
  };
}
const we = s.memo(
  ({
    type: e = "button",
    style: t,
    variant: r = "contained",
    isLoading: o,
    isDisabled: n,
    icon: i,
    iconWidth: l = 20,
    semanticColor: a,
    ...d
  }) => {
    const { buttonStyles: u } = ke({
      isLoading: o,
      isDisabled: n || d.disabled,
      variant: r,
      semanticColor: a
    });
    return /* @__PURE__ */ c(
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
        children: /* @__PURE__ */ c(
          R,
          {
            icon: o ? "eos-icons:loading" : i,
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
const Me = s.memo(({ style: e, text: t, ...r }) => /* @__PURE__ */ c(
  "code",
  {
    style: {
      color: E.TourmalineStiletto,
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
Me.displayName = "Typography.Code";
function ae({ ellipsis: e = 0, semanticColor: t }) {
  const { themeMode: r } = k.useThemeMode(), o = s.useMemo(() => t ? q[t] : v[r].primary, [r, t]), n = s.useMemo(() => e ? {
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
const ve = s.memo(
  ({ children: e, style: t, ellipsis: r = 0, semanticColor: o, ...n }) => {
    const { fontColor: i, ellipsisStyles: l } = ae({ ellipsis: r, semanticColor: o });
    return /* @__PURE__ */ c(
      "p",
      {
        style: {
          boxSizing: "border-box",
          margin: 0,
          width: "100%",
          fontSize: W.text,
          lineHeight: 1.5,
          color: i,
          ...l,
          ...t
        },
        ...n,
        children: e
      }
    );
  }
);
ve.displayName = "Typography.Paragraph";
const ue = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, oe = {
  span: "span",
  small: "small",
  strong: "strong"
}, Ce = s.memo(
  ({ style: e, text: t, as: r = oe.span, isEllipsis: o = !1, semanticColor: n, ...i }) => {
    const { fontColor: l, ellipsisStyles: a } = ae({ ellipsis: o ? 1 : 0, semanticColor: n });
    return r === oe.strong ? /* @__PURE__ */ c(
      "strong",
      {
        style: {
          fontSize: W[Z.strong],
          fontWeight: "bold",
          color: l,
          ...a,
          ...e
        },
        ...i,
        children: t
      }
    ) : r === oe.small ? /* @__PURE__ */ c(
      "small",
      {
        style: {
          fontSize: W[Z.small],
          color: l,
          ...a,
          ...e
        },
        ...i,
        children: t
      }
    ) : /* @__PURE__ */ c(
      "span",
      {
        style: {
          fontSize: W[Z.text],
          fontWeight: "normal",
          color: l,
          ...a,
          ...e
        },
        ...i,
        children: t
      }
    );
  }
);
Ce.displayName = "Typography.Text";
const Se = s.memo(
  ({ text: e, as: t = ue.h4, ellipsis: r = 0, style: o, semanticColor: n, ...i }) => {
    const l = s.useMemo(() => ue[t], [t]), a = s.useMemo(() => W[t], [t]), { fontColor: d, ellipsisStyles: u } = ae({ ellipsis: r, semanticColor: n });
    return /* @__PURE__ */ c(
      l,
      {
        style: {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
          width: "100%",
          fontSize: a,
          fontFamily: "inherit",
          fontWeight: "bold",
          lineHeight: "inherit",
          textAlign: "inherit",
          color: d,
          ...u,
          ...o
        },
        ...i,
        children: e
      }
    );
  }
);
Se.displayName = "Typography.Title";
const T = {
  Title: Se,
  Text: Ce,
  Code: Me,
  Paragraph: ve
}, ne = s.memo(
  ({
    type: e = "button",
    style: t,
    text: r,
    variant: o = "contained",
    isLoading: n,
    isDisabled: i,
    icon: l,
    iconPosition: a = "start",
    iconWidth: d = 20,
    semanticColor: u,
    ...h
  }) => {
    const { buttonStyles: p } = ke({
      isLoading: n,
      isDisabled: i || h.disabled,
      variant: o,
      semanticColor: u
    });
    return /* @__PURE__ */ b(
      "button",
      {
        type: e,
        disabled: n || i,
        style: {
          flexDirection: a === "start" ? "row" : "row-reverse",
          WebkitTapHighlightColor: "transparent",
          ...p,
          ...t
        },
        ...h,
        children: [
          l && /* @__PURE__ */ c(
            R,
            {
              icon: l,
              width: d,
              style: {
                marginLeft: a === "start" ? "0px" : "8px",
                marginRight: a === "end" ? "0px" : "8px",
                color: "inherit"
              }
            }
          ),
          /* @__PURE__ */ c(T.Text, { text: r, style: { color: "inherit" } }),
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
              children: /* @__PURE__ */ c(R, { icon: "svg-spinners:270-ring-with-bg", width: 24, style: { color: "inherit" } })
            }
          )
        ]
      }
    );
  }
);
ne.displayName = "Button";
const Te = {
  Icon: we
}, Fe = s.memo(
  ({ children: e, style: t, row: r = !0, column: o = !1, gap: n = "8px", ...i }) => /* @__PURE__ */ c(
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
      ...i,
      children: e
    }
  )
);
Fe.displayName = "Space.Flex";
const Re = s.memo(({ children: e, style: t, columns: r = 1, spacing: o = 16, ...n }) => {
  const { screenSize: i } = k.useThemeBreakpoint(), l = i ?? C.xs, a = s.useMemo(
    () => gt(r, l),
    [r, l]
  ), d = s.useMemo(
    () => xt(o, l),
    [o, l]
  );
  return /* @__PURE__ */ c(
    "div",
    {
      style: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: `repeat(${a}, 1fr)`,
        gap: `${d}px`,
        ...t
      },
      ...n,
      children: e
    }
  );
});
Re.displayName = "Space.Grid";
const U = Object.keys(C);
function gt(e = 1, t) {
  if (typeof e == "number")
    return e;
  const r = U.indexOf(t);
  for (let o = r; o < U.length; o++) {
    const n = e[U[o]];
    if (n !== void 0) return n;
  }
  return 1;
}
function xt(e = 16, t) {
  if (typeof e == "number")
    return e;
  const r = U.indexOf(t);
  for (let o = r; o < U.length; o++) {
    const n = e[U[o]];
    if (n !== void 0) return n;
  }
  return 16;
}
const O = {
  Flex: Fe,
  Grid: Re
}, ce = {
  div: "div",
  article: "article"
}, F = {
  elevated: "elevated",
  outlined: "outlined",
  transparent: "transparent",
  frostedGlass: "frostedGlass"
}, X = s.memo(
  ({ children: e, style: t, as: r = ce.div, variant: o = F.elevated, ...n }) => {
    const { themeMode: i } = k.useThemeMode(), l = s.useMemo(() => {
      switch (o) {
        case F.transparent:
          return "transparent";
        case F.elevated:
        case F.outlined:
        case F.frostedGlass:
        default:
          return B[i].secondary;
      }
    }, [i, o]), a = s.useMemo(() => {
      switch (o) {
        case F.outlined:
        case F.transparent:
          return $[i].tertiary;
        case F.elevated:
        case F.frostedGlass:
        default:
          return "transparent";
      }
    }, [i, o]), d = s.useMemo(() => {
      switch (o) {
        case F.outlined:
        case F.transparent:
          return "none";
        case F.elevated:
        case F.frostedGlass:
        default:
          return G[i].primary;
      }
    }, [i, o]);
    return /* @__PURE__ */ c(
      r,
      {
        style: {
          boxSizing: "border-box",
          borderRadius: "8px",
          padding: "16px",
          outlineWidth: 1.5,
          outlineStyle: "solid",
          outlineColor: a,
          backgroundColor: l,
          boxShadow: d,
          ...o === F.frostedGlass && {
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
const Ee = s.memo(({ children: e, height: t = 300, width: r = 200, title: o, coverImage: n }) => /* @__PURE__ */ b(
  X,
  {
    as: ce.article,
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
          children: o && /* @__PURE__ */ c(
            T.Title,
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
Ee.displayName = "Cards.Book";
const yt = s.lazy(() => import("./index.chunk.js").then((e) => ({ default: e.Popover }))), Ie = s.memo(({ children: e, title: t = "", description: r = "", renderMenu: o }) => /* @__PURE__ */ b(X, { as: ce.article, style: { position: "relative" }, children: [
  (t || r) && /* @__PURE__ */ b(O.Flex, { column: !0, gap: 2, style: { paddingRight: "48px" }, children: [
    /* @__PURE__ */ c(T.Title, { as: "h6", text: t, ellipsis: 1 }),
    /* @__PURE__ */ c(T.Paragraph, { ellipsis: 3, children: r })
  ] }),
  /* @__PURE__ */ c(s.Suspense, { fallback: null, children: /* @__PURE__ */ c(
    yt,
    {
      placement: "bottom",
      renderTrigger: (n) => /* @__PURE__ */ c(
        Te.Icon,
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
  e && /* @__PURE__ */ c(O.Flex, { column: !0, children: e })
] }));
Ie.displayName = "Cards.Product";
const Wt = {
  Book: Ee,
  Product: Ie
}, bt = s.memo(({ children: e, breakpoint: t = C.lg, style: r, ...o }) => /* @__PURE__ */ c(
  "div",
  {
    style: {
      margin: "0 auto",
      width: "100%",
      maxWidth: N[t],
      ...r
    },
    ...o,
    children: e
  }
));
bt.displayName = "Container";
const kt = s.memo(
  ({ isOpen: e, onClose: t, children: r, position: o = "left", maskClosable: n = !0, width: i = 300, height: l = 300, style: a }) => {
    const { themeMode: d } = k.useThemeMode();
    return /* @__PURE__ */ b(se, { children: [
      /* @__PURE__ */ c(_, { children: e && /* @__PURE__ */ c(
        I.div,
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
            backgroundColor: V(B[d].primary, 0.5),
            backdropFilter: "blur(2px)",
            pointerEvents: e ? "auto" : "none"
          }
        }
      ) }),
      /* @__PURE__ */ c(_, { children: e && /* @__PURE__ */ c(
        I.div,
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
              width: i,
              height: "100svh"
            },
            ...o === "right" && {
              top: 0,
              right: 0,
              width: i,
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
          children: /* @__PURE__ */ c(
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
                ...a
              },
              children: r
            }
          )
        }
      ) })
    ] });
  }
);
kt.displayName = "Drawer";
const J = {
  top: "top",
  left: "left",
  right: "right"
}, ee = s.memo(
  ({
    children: e,
    style: t,
    htmlFor: r,
    label: o = "",
    isError: n = !1,
    required: i = !1,
    position: l = J.top,
    ...a
  }) => {
    const { themeMode: d } = k.useThemeMode();
    return /* @__PURE__ */ b(
      "label",
      {
        htmlFor: r,
        style: {
          width: "max-content",
          display: "flex",
          gap: "8px",
          ...l === J.top && { flexDirection: "column", alignItems: "flex-start" },
          ...l === J.left && { flexDirection: "row", alignItems: "center" },
          ...l === J.right && { flexDirection: "row-reverse", alignItems: "center" },
          color: n ? E.RubyCopperhead : v[d].primary,
          ...t
        },
        ...a,
        children: [
          /* @__PURE__ */ b(O.Flex, { row: !0, gap: 0, style: { width: "100%", alignItems: "center" }, children: [
            i && /* @__PURE__ */ c(T.Text, { as: "small", text: "*", style: { color: E.RubyCopperhead, marginRight: "2px" } }),
            /* @__PURE__ */ c(
              T.Text,
              {
                as: "small",
                text: o,
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
ee.displayName = "Form.Label";
function D({
  fullWidth: e = !1,
  isDisabled: t = !1,
  isError: r = !1,
  isFocused: o = !1
}) {
  const { themeMode: n } = k.useThemeMode(), { themeColor: i } = k.useThemeColor(), l = s.useMemo(() => t ? B[n].secondary : "transparent", [t, n]), a = s.useMemo(() => r ? E.RubyCopperhead : t ? v[n].disabled : v[n].primary, [r, t, n]), d = s.useMemo(() => r ? E.RubyCopperhead : t ? v[n].disabled : v[n].quaternary, [r, t, n]), u = s.useMemo(() => r ? E.RubyCopperhead : t ? $[n].secondary : $[n].primary, [r, n]), h = s.useMemo(() => r ? E.RubyCopperhead : i, [r, n]), p = s.useMemo(
    () => ({
      display: e ? "block" : "inline-block",
      width: e ? "100%" : "auto",
      minWidth: e ? "100%" : 200,
      minHeight: 40,
      padding: "8px",
      backgroundColor: l,
      color: a,
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
    [e, o, t, l, a, u, h]
  );
  return {
    backgroundColor: l,
    textColor: a,
    helperTextColor: d,
    borderColor: u,
    outlineColor: h,
    commonStyles: p
  };
}
function Oe({
  checked: e = !1,
  disabled: t = !1,
  onChange: r
}) {
  const o = s.useRef(null), [n, i] = s.useState(e);
  s.useEffect(() => {
    i(!!e);
  }, [e]);
  const l = s.useCallback(
    (d) => {
      i(d.target.checked), r == null || r(d);
    },
    [r]
  ), a = s.useCallback(
    (d) => {
      if (d.preventDefault(), d.stopPropagation(), !t && o.current) {
        const u = !n;
        i(u);
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
    toggleCustomIsChecked: a
  };
}
const Le = s.memo(
  ({
    style: e,
    autoComplete: t = "off",
    required: r = !1,
    isError: o = !1,
    disabled: n = !1,
    name: i,
    value: l,
    checked: a = !1,
    onChange: d,
    label: u,
    labelPosition: h = "right",
    ...p
  }) => {
    const { inputRef: f, isChecked: m, toggleOriginalIsChecked: x, toggleCustomIsChecked: w } = Oe({
      checked: a,
      disabled: n,
      onChange: d
    }), { outlineColor: g, borderColor: y } = D({
      isDisabled: n,
      isError: o
    });
    return /* @__PURE__ */ b(ee, { label: u, required: r, isError: o, position: h, children: [
      /* @__PURE__ */ c(
        "input",
        {
          type: "checkbox",
          name: i,
          value: l,
          checked: m,
          ref: f,
          onChange: x,
          autoComplete: t,
          disabled: n,
          style: { display: "none", ...e },
          ...p
        }
      ),
      /* @__PURE__ */ c(
        R,
        {
          icon: m ? "fluent:checkbox-checked-24-filled" : "fluent:checkbox-unchecked-24-regular",
          width: 24,
          onClick: w,
          style: {
            color: m ? g : y,
            cursor: n ? "not-allowed" : "pointer"
          }
        }
      )
    ] });
  }
);
Le.displayName = "FormField.Checkbox";
function Y() {
  const [e, t] = s.useState(!1), r = s.useCallback(() => {
    t(!0);
  }, []), o = s.useCallback(() => {
    t(!1);
  }, []);
  return {
    isFocused: e,
    setIsFocused: t,
    handleFocus: r,
    handleBlur: o
  };
}
function wt({ isDisabled: e }) {
  const [t, r] = s.useState(!1), o = s.useCallback(() => {
    r(!0);
  }, []), n = s.useCallback(() => {
    r(!1);
  }, []), i = s.useCallback(() => {
    r(!1);
  }, []);
  return s.useEffect(() => {
    e && r(!1);
  }, [e]), {
    isHovering: t,
    handleMouseDown: o,
    handleMouseUp: n,
    handleMouseLeave: i
  };
}
function Mt() {
  const [e, t] = s.useState(!1), r = s.useCallback(() => t(!0), []), o = s.useCallback(() => t(!1), []), n = s.useCallback(() => t((i) => !i), []);
  return {
    isOpen: e,
    setIsOpen: t,
    open: r,
    close: o,
    toggle: n
  };
}
const j = s.memo(
  ({
    children: e,
    style: t,
    fullWidth: r = !1,
    required: o = !1,
    disabled: n = !1,
    isError: i = !1,
    label: l,
    helpText: a,
    ...d
  }) => {
    const { themeMode: u } = k.useThemeMode(), { helperTextColor: h } = D({
      fullWidth: r,
      isDisabled: n,
      isError: i
    });
    return /* @__PURE__ */ b(
      "fieldset",
      {
        disabled: n,
        style: {
          boxSizing: "border-box",
          border: "none",
          padding: 0,
          margin: 0,
          width: r ? "100%" : "max-content",
          color: i ? E.RubyCopperhead : v[u].primary,
          ...t
        },
        ...d,
        children: [
          l && /* @__PURE__ */ b("legend", { style: { padding: 0, color: "inherit" }, children: [
            o && /* @__PURE__ */ c(
              T.Text,
              {
                as: "small",
                text: "*",
                style: {
                  color: E.RubyCopperhead,
                  fontWeight: "bold",
                  verticalAlign: "text-bottom"
                }
              }
            ),
            /* @__PURE__ */ c(
              T.Text,
              {
                as: "small",
                text: l,
                style: {
                  color: "inherit",
                  fontWeight: "bold",
                  paddingLeft: o ? "2px" : "4px"
                }
              }
            )
          ] }),
          /* @__PURE__ */ b(O.Flex, { column: !0, gap: 0, style: { width: "100%" }, children: [
            e,
            a && /* @__PURE__ */ c(
              T.Text,
              {
                as: "small",
                text: a,
                style: {
                  color: h,
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
j.displayName = "FormField";
const Pe = s.memo(
  ({
    style: e,
    fullWidth: t,
    autoComplete: r = "off",
    required: o = !1,
    isError: n = !1,
    disabled: i = !1,
    name: l,
    value: a,
    label: d,
    helpText: u,
    ...h
  }) => {
    const { isFocused: p, handleFocus: f, handleBlur: m } = Y(), { commonStyles: x } = D({
      fullWidth: t,
      isDisabled: i,
      isError: n,
      isFocused: p
    });
    return /* @__PURE__ */ c(
      j,
      {
        label: d,
        required: o,
        disabled: i,
        isError: n,
        fullWidth: t,
        helpText: u,
        children: /* @__PURE__ */ c(
          "input",
          {
            type: "number",
            name: l,
            value: a,
            autoComplete: r,
            disabled: i,
            onFocus: i ? void 0 : f,
            onBlur: i ? void 0 : m,
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
Pe.displayName = "FormField.Number";
const ze = s.memo(
  ({
    style: e,
    fullWidth: t,
    autoComplete: r = "off",
    required: o = !1,
    isError: n = !1,
    disabled: i = !1,
    name: l,
    value: a,
    label: d,
    helpText: u,
    ...h
  }) => {
    const { isFocused: p, handleFocus: f, handleBlur: m } = Y(), { outlineColor: x, commonStyles: w } = D({
      fullWidth: t,
      isDisabled: i,
      isError: n,
      isFocused: p
    }), { isPasswordVisible: g, togglePasswordVisibility: y } = vt(!1);
    return /* @__PURE__ */ c(
      j,
      {
        label: d,
        required: o,
        disabled: i,
        isError: n,
        fullWidth: t,
        helpText: u,
        children: /* @__PURE__ */ b(
          "div",
          {
            style: {
              ...w,
              position: "relative",
              overflow: "hidden",
              padding: 0
            },
            children: [
              /* @__PURE__ */ c(
                "input",
                {
                  type: g ? "text" : "password",
                  name: l,
                  value: a,
                  autoComplete: r,
                  disabled: i,
                  onFocus: i ? void 0 : f,
                  onBlur: i ? void 0 : m,
                  style: {
                    boxSizing: "border-box",
                    border: "none",
                    outline: "none",
                    position: "relative",
                    width: "calc(100% - 34px)",
                    backgroundColor: w.backgroundColor,
                    padding: w.padding,
                    paddingRight: 0,
                    ...e
                  },
                  ...h
                }
              ),
              /* @__PURE__ */ c(
                R,
                {
                  icon: g ? "solar:eye-closed-broken" : "solar:eye-linear",
                  width: 20,
                  onClick: y,
                  style: {
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: x,
                    padding: w.padding
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
ze.displayName = "FormField.Password";
function vt(e = !1) {
  const [t, r] = s.useState(e), o = s.useCallback((n) => {
    s.startTransition(() => {
      n.preventDefault(), n.stopPropagation(), r((i) => !i);
    });
  }, []);
  return {
    isPasswordVisible: t,
    togglePasswordVisibility: o
  };
}
const He = s.memo(
  ({
    fullWidth: e = !1,
    required: t = !1,
    disabled: r = !1,
    name: o,
    label: n,
    labelPosition: i = "right",
    value: l,
    options: a,
    onChange: d
  }) => {
    const [u, h] = s.useState(l || null);
    s.useEffect(() => {
      h(l || null);
    }, [l]);
    const p = s.useCallback(
      (f) => {
        const m = f.target.value;
        h(m), d == null || d(f);
      },
      [d]
    );
    return /* @__PURE__ */ c(j, { label: n, required: t, disabled: r, isError: !1, fullWidth: e, children: /* @__PURE__ */ c(O.Flex, { column: !0, gap: 8, children: a.map((f) => {
      const m = `${o}-${f.value}`, x = r || f.disabled;
      return /* @__PURE__ */ c(
        ee,
        {
          label: f.label,
          position: i,
          htmlFor: m,
          style: {
            cursor: x ? "not-allowed" : "pointer",
            opacity: x ? 0.6 : 1
          },
          children: /* @__PURE__ */ c(
            "input",
            {
              id: m,
              type: "radio",
              autoComplete: "off",
              name: o,
              checked: f.value === u,
              value: f.value,
              disabled: x,
              onChange: p,
              style: { cursor: x ? "not-allowed" : "pointer" }
            }
          )
        },
        f.value
      );
    }) }) });
  }
);
He.displayName = "FormField.Radio";
const Ct = {
  ul: "ul"
}, St = {
  li: "li"
}, Be = s.memo(
  ({
    as: e = St.li,
    style: t,
    icon: r,
    text: o,
    subText: n,
    isDisabled: i = !1,
    isActive: l = !1,
    actionButton: a = void 0,
    ...d
  }) => {
    const { themeMode: u } = k.useThemeMode(), { themeColor: h } = k.useThemeColor(), { isHovering: p, handleMouseDown: f, handleMouseUp: m, handleMouseLeave: x } = wt({
      isDisabled: i
    }), w = s.useCallback(
      (y) => {
        i || (y.currentTarget.style.boxShadow = G[u].tertiary);
      },
      [i]
    ), g = s.useCallback(
      (y) => {
        i || (y.currentTarget.style.boxShadow = p ? G[u].tertiary : "none");
      },
      [i]
    );
    return /* @__PURE__ */ c(
      e,
      {
        onMouseDown: f,
        onMouseUp: m,
        onMouseLeave: x,
        onMouseOver: w,
        onMouseOut: g,
        style: {
          boxSizing: "border-box",
          listStyle: "none",
          margin: 0,
          padding: "8px",
          paddingRight: a ? "8px" : "16px",
          borderRadius: "8px",
          cursor: i ? "not-allowed" : d != null && d.onClick ? "pointer" : "default",
          transition: "box-shadow 0.2s ease-in-out",
          ...t
        },
        ...d,
        children: /* @__PURE__ */ b(O.Flex, { row: !0, style: { alignItems: "center" }, children: [
          r && /* @__PURE__ */ c(
            R,
            {
              icon: r,
              width: 24,
              style: {
                color: i ? v[u].disabled : l ? h : v[u].primary
              }
            }
          ),
          /* @__PURE__ */ b(
            O.Flex,
            {
              column: !0,
              gap: 0,
              style: {
                flex: 1,
                flexGrow: 1,
                maxWidth: r && !a ? "calc(100% - 32px)" : !r && a ? "calc(100% - 48px)" : r && a ? "calc(100% - 80px)" : "100%"
              },
              children: [
                /* @__PURE__ */ c(
                  T.Text,
                  {
                    text: o,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      color: i ? v[u].disabled : l ? h : v[u].primary
                    }
                  }
                ),
                n && /* @__PURE__ */ c(
                  T.Text,
                  {
                    as: "small",
                    text: n,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      color: i ? v[u].disabled : l ? h : v[u].quaternary
                    }
                  }
                )
              ]
            }
          ),
          !!(a != null && a.icon) && /* @__PURE__ */ c(
            Te.Icon,
            {
              icon: a.icon,
              variant: "ghost",
              isDisabled: i,
              onClick: a.onClick
            }
          )
        ] })
      }
    );
  }
);
Be.displayName = "Menu.Item";
const Ne = s.memo(({ children: e, style: t, as: r = Ct.ul, ...o }) => /* @__PURE__ */ c(
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
Ne.displayName = "Menu.List";
const pe = {
  List: Ne,
  Item: Be
}, We = s.memo(
  ({ children: e, style: t, contentStyle: r, placement: o = "bottom", renderTrigger: n, trigger: i = "click", onClickOutside: l }) => {
    var y;
    const a = Mt(), d = s.useRef(null), u = s.useRef(null), h = s.useRef(null), [p, f] = s.useState({ top: 0, left: 0 });
    s.useEffect(() => {
      if (i !== "click") return;
      const L = (P) => {
        var M;
        h.current && !h.current.contains(P.target) && !((M = u.current) != null && M.contains(P.target)) && (a.close(), l && l());
      };
      return a.isOpen && document.addEventListener("mousedown", L), () => {
        document.removeEventListener("mousedown", L);
      };
    }, [a, i, l]), s.useEffect(() => {
      if (a.isOpen && d.current && u.current && h.current) {
        const L = d.current.getBoundingClientRect(), P = u.current.getBoundingClientRect(), M = h.current.offsetWidth, H = h.current.offsetHeight, A = P.top - L.top, te = P.left - L.left, Je = o === "bottom" ? A + P.height : A - H, Ze = te + P.width / 2 - M / 2;
        f({ top: Je, left: Ze });
      }
    }, [a.isOpen, o]);
    const w = i === "hover" ? {
      onMouseEnter: () => {
        i === "hover" && a.open();
      },
      onMouseLeave: () => {
        i === "hover" && a.close();
      }
    } : {}, g = i === "click" ? { onClick: a.toggle } : {};
    return /* @__PURE__ */ b("div", { ref: d, style: { display: "inline-block", position: "relative", ...t }, ...w, children: [
      /* @__PURE__ */ c("div", { ref: u, ...g, style: { display: "inline-block", width: "100%" }, children: n(a.isOpen) }),
      /* @__PURE__ */ c(_, { children: a.isOpen && /* @__PURE__ */ c(
        I.div,
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
            minWidth: (y = u.current) == null ? void 0 : y.offsetWidth
          },
          children: /* @__PURE__ */ c(
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
We.displayName = "Popover";
const De = s.memo(
  ({
    isOriginalSelect: e = !1,
    fullWidth: t,
    required: r = !1,
    isError: o = !1,
    disabled: n = !1,
    label: i,
    helpText: l,
    ...a
  }) => {
    const { isFocused: d, setIsFocused: u, handleFocus: h, handleBlur: p } = Y(), { commonStyles: f } = D({
      fullWidth: t,
      isDisabled: n,
      isError: o,
      isFocused: d
    });
    return /* @__PURE__ */ b(
      j,
      {
        label: i,
        required: r,
        disabled: n,
        isError: o,
        fullWidth: t,
        helpText: l,
        children: [
          e && /* @__PURE__ */ c(
            Ae,
            {
              commonStyles: f,
              handleFocus: h,
              handleBlur: p,
              disabled: n,
              ...a
            }
          ),
          !e && /* @__PURE__ */ c(_e, { commonStyles: f, setIsFocused: u, disabled: n, ...a })
        ]
      }
    );
  }
);
De.displayName = "FormField.Select";
const Ae = s.memo(
  ({
    commonStyles: e,
    handleFocus: t,
    handleBlur: r,
    name: o,
    autoComplete: n = "off",
    options: i,
    onChange: l,
    value: a,
    disabled: d,
    style: u,
    ...h
  }) => /* @__PURE__ */ c(
    "select",
    {
      name: o,
      autoComplete: n,
      disabled: d,
      onFocus: t,
      onBlur: r,
      onChange: l,
      value: a,
      style: {
        boxSizing: "border-box",
        ...e,
        ...u
      },
      ...h,
      children: i.map((p) => /* @__PURE__ */ c("option", { value: p.value, disabled: p.disabled, children: p.label }, p.value))
    }
  )
), _e = s.memo(({ commonStyles: e, setIsFocused: t, disabled: r, name: o, value: n, options: i, onChange: l, style: a }) => {
  const [d, u] = s.useState(n || null), [h, p] = s.useState(!1);
  s.useEffect(() => {
    u(n || null);
  }, [n]);
  const f = s.useCallback(
    (g) => {
      u(g), p(!1), t(!1);
      const y = {
        target: { name: o, value: g },
        currentTarget: { name: o, value: g }
      };
      l == null || l(y);
    },
    [o, l, t]
  ), m = s.useCallback(
    (g) => {
      g.stopPropagation(), u(null), t(!1);
      const y = {
        target: { name: o, value: "" },
        currentTarget: { name: o, value: "" }
      };
      l == null || l(y);
    },
    [o, l, t]
  ), x = s.useMemo(
    () => {
      var g;
      return ((g = i.find((y) => y.value === d)) == null ? void 0 : g.label) || "";
    },
    [d]
  ), w = (a == null ? void 0 : a.width) ?? e.minWidth;
  return /* @__PURE__ */ c(
    We,
    {
      placement: "bottom",
      trigger: "click",
      style: { width: "100%" },
      onClickOutside: () => t(!1),
      renderTrigger: () => /* @__PURE__ */ b(
        O.Flex,
        {
          row: !0,
          onClick: () => t(!0),
          style: {
            ...e,
            height: e.minHeight,
            width: w,
            display: "flex",
            alignItems: "center"
          },
          children: [
            /* @__PURE__ */ c(T.Paragraph, { ellipsis: 1, style: { flex: 1 }, children: x }),
            d && !r && /* @__PURE__ */ c(
              R,
              {
                icon: "solar:close-circle-line-duotone",
                width: 16,
                onClick: m,
                style: {
                  cursor: "pointer",
                  transition: "color 0.2s ease"
                }
              }
            ),
            /* @__PURE__ */ c(
              R,
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
      children: /* @__PURE__ */ c(pe.List, { as: "ul", style: { width: w }, children: i.map((g) => /* @__PURE__ */ c(
        pe.Item,
        {
          text: g.label,
          isDisabled: g.disabled,
          isActive: g.value === d,
          onClick: () => {
            g.disabled || f(g.value);
          },
          style: { cursor: g.disabled ? "not-allowed" : "pointer", fontSize: W.small }
        },
        g.value
      )) })
    }
  );
});
Ae.displayName = "FormField.Select.Original";
_e.displayName = "FormField.Select.Custom";
const he = 48, fe = 24, re = 18, me = 4, $e = s.memo(
  ({
    style: e,
    autoComplete: t = "off",
    required: r = !1,
    isError: o = !1,
    disabled: n = !1,
    name: i,
    value: l,
    checked: a = !1,
    onChange: d,
    label: u,
    labelPosition: h = "right",
    ...p
  }) => {
    const { inputRef: f, isChecked: m, toggleOriginalIsChecked: x, toggleCustomIsChecked: w } = Oe({
      checked: a,
      disabled: n,
      onChange: d
    }), { backgroundColor: g, outlineColor: y, borderColor: L, commonStyles: P } = D({
      isDisabled: n,
      isError: o
    });
    return /* @__PURE__ */ b(ee, { label: u, required: r, isError: o, position: h, children: [
      /* @__PURE__ */ c(
        "input",
        {
          type: "checkbox",
          name: i,
          value: l,
          checked: m,
          ref: f,
          onChange: x,
          autoComplete: t,
          disabled: n,
          style: { display: "none", ...e },
          ...p
        }
      ),
      /* @__PURE__ */ c(
        "div",
        {
          onClick: w,
          style: {
            display: "inline-flex",
            alignItems: "center",
            cursor: n ? "not-allowed" : "pointer",
            opacity: n ? 0.6 : 1
          },
          children: /* @__PURE__ */ c(_, { children: /* @__PURE__ */ c(
            I.div,
            {
              initial: !1,
              animate: m ? "checked" : "unchecked",
              transition: { type: "spring", stiffness: 700, damping: 30 },
              style: {
                width: he,
                height: fe,
                position: "relative",
                display: "flex",
                alignItems: "center",
                borderRadius: fe / 2,
                borderWidth: P.borderWidth,
                borderStyle: P.borderStyle,
                borderColor: L,
                backgroundColor: m ? y : g,
                transition: "background-color 0.2s ease-in-out"
              },
              children: /* @__PURE__ */ c(
                I.div,
                {
                  initial: !1,
                  animate: m ? "checked" : "unchecked",
                  transition: { type: "spring", stiffness: 700, damping: 30 },
                  variants: {
                    checked: { x: he - re - me },
                    unchecked: { x: me }
                  },
                  style: {
                    width: re,
                    height: re,
                    borderRadius: "50%",
                    position: "absolute",
                    boxShadow: G.light.primary,
                    backgroundColor: o && !m ? E.RubyCopperhead : B.light.secondary
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
$e.displayName = "FormField.Switch";
const Ge = s.memo(
  ({
    style: e,
    fullWidth: t,
    autoComplete: r = "off",
    required: o = !1,
    isError: n = !1,
    disabled: i = !1,
    name: l,
    value: a,
    label: d,
    helpText: u,
    ...h
  }) => {
    const { isFocused: p, handleFocus: f, handleBlur: m } = Y(), { commonStyles: x } = D({
      fullWidth: t,
      isDisabled: i,
      isError: n,
      isFocused: p
    });
    return /* @__PURE__ */ c(
      j,
      {
        label: d,
        required: o,
        disabled: i,
        isError: n,
        fullWidth: t,
        helpText: u,
        children: /* @__PURE__ */ c(
          "input",
          {
            type: "text",
            name: l,
            value: a,
            autoComplete: r,
            disabled: i,
            onFocus: i ? void 0 : f,
            onBlur: i ? void 0 : m,
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
Ge.displayName = "FormField.Text";
const Ve = s.memo(
  ({
    style: e,
    fullWidth: t,
    required: r = !1,
    isError: o = !1,
    disabled: n = !1,
    rows: i = 3,
    name: l,
    value: a,
    label: d,
    helpText: u,
    ...h
  }) => {
    const { isFocused: p, handleFocus: f, handleBlur: m } = Y(), { commonStyles: x } = D({
      fullWidth: t,
      isDisabled: n,
      isError: o,
      isFocused: p
    });
    return /* @__PURE__ */ c(
      j,
      {
        label: d,
        required: r,
        disabled: n,
        isError: o,
        fullWidth: t,
        helpText: u,
        children: /* @__PURE__ */ c(
          "textarea",
          {
            name: l,
            value: a,
            disabled: n,
            onFocus: n ? void 0 : f,
            onBlur: n ? void 0 : m,
            spellCheck: !1,
            rows: i,
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
Ve.displayName = "FormField.Textarea";
const Tt = s.memo(({ children: e, gap: t = 8, style: r, ...o }) => /* @__PURE__ */ c("form", { style: { width: "100%", ...r }, ...o, children: /* @__PURE__ */ c(O.Flex, { column: !0, gap: t, children: e }) }));
Tt.displayName = "Form";
const Dt = {
  Text: Ge,
  Textarea: Ve,
  Number: Pe,
  Password: ze,
  Checkbox: Le,
  Switch: $e,
  Radio: He,
  Select: De
}, je = s.memo(
  ({ children: e, style: t, isOpen: r, onClose: o, maskClosable: n = !0, maxBreakpoint: i = C.xs }) => {
    const { themeMode: l } = k.useThemeMode();
    return /* @__PURE__ */ c(_, { children: r && /* @__PURE__ */ c(
      I.div,
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
          backgroundColor: V(B[l].primary, 0.5),
          backdropFilter: "blur(2px)",
          opacity: r ? 1 : 0
        },
        children: /* @__PURE__ */ c(
          I.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.95 },
            transition: { duration: 0.2, ease: "easeOut" },
            onClick: (a) => a.stopPropagation(),
            style: {
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "max-content",
              maxHeight: "90%",
              width: N[i],
              maxWidth: N[i]
            },
            children: /* @__PURE__ */ c(X, { style: { width: "100%", ...t }, children: e })
          }
        )
      }
    ) });
  }
);
je.displayName = "Modal";
const qe = s.memo(
  ({
    style: e,
    isOpen: t,
    onClose: r,
    maskClosable: o = !1,
    maxBreakpoint: n = C.xs,
    title: i,
    description: l,
    isConformLoading: a = !1,
    cancelText: d = "Cancel",
    confirmText: u = "Confirm",
    onCancel: h,
    onConfirm: p
  }) => {
    const f = s.useCallback(async () => {
      await h(), r();
    }, [h, r]), m = s.useCallback(async () => {
      await p(), r();
    }, [p, r]);
    return /* @__PURE__ */ b(je, { isOpen: t, onClose: r, style: e, maskClosable: o, maxBreakpoint: n, children: [
      /* @__PURE__ */ c(T.Title, { as: "h5", text: i }),
      /* @__PURE__ */ c(T.Paragraph, { style: { padding: "8px 0 24px" }, children: l }),
      /* @__PURE__ */ b(O.Flex, { row: !0, gap: 8, style: { justifyContent: "flex-end" }, children: [
        /* @__PURE__ */ c(
          ne,
          {
            variant: "outlined",
            text: d,
            onClick: () => void f(),
            isDisabled: a
          }
        ),
        /* @__PURE__ */ c(
          ne,
          {
            variant: "contained",
            text: u,
            onClick: () => void m(),
            isLoading: a
          }
        )
      ] })
    ] });
  }
);
qe.displayName = "Modals.Confirm";
const At = {
  Confirm: qe
}, Ft = s.memo(({ children: e }) => {
  const [t, r] = s.useState(!1);
  return s.useEffect(() => {
    r(!0);
  }, []), t ? /* @__PURE__ */ c(se, { children: e }) : null;
});
Ft.displayName = "NoSSR";
const Rt = s.memo(({ position: e = "top-center", offset: t = 0, collapsable: r = !1 }) => {
  const { isDarkThemeMode: o } = k.useThemeMode();
  return /* @__PURE__ */ c(
    ot,
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
        success: /* @__PURE__ */ c(R, { icon: "solar:shield-check-line-duotone", color: "success" }),
        error: /* @__PURE__ */ c(R, { icon: "solar:shield-cross-line-duotone", color: "error" }),
        warning: /* @__PURE__ */ c(R, { icon: "solar:shield-warning-line-duotone", color: "warning" }),
        info: /* @__PURE__ */ c(R, { icon: "solar:info-circle-line-duotone", color: "info" })
      }
    }
  );
});
Rt.displayName = "Notification";
function _t(e) {
  const t = {
    description: e.description
  };
  return e.type === "success" ? Q.success(e.title, t) : e.type === "error" ? Q.error(e.title, t) : e.type === "warning" ? Q.warning(e.title, t) : Q.info(e.title, t);
}
const Ue = s.memo(({ children: e, targetElementID: t }) => {
  const [r, o] = s.useState(null);
  return s.useEffect(() => {
    const n = document.getElementById(t);
    n && o(n);
  }, [t]), r ? rt(/* @__PURE__ */ c(se, { children: e }), r, t) : null;
});
Ue.displayName = "PortalRender";
const $t = {
  Render: Ue
}, Xe = s.memo(({ height: e = 8 }) => {
  const t = et(), { themeMode: r } = k.useThemeMode(), { themeColor: o } = k.useThemeColor(), n = s.useRef(null), [i, l] = s.useState(0);
  return s.useEffect(() => {
    const a = () => {
      if (n.current) {
        const d = n.current.offsetWidth, u = d * 0.3;
        l(d - u);
      }
    };
    return a(), window.addEventListener("resize", a), () => window.removeEventListener("resize", a);
  }, []), s.useEffect(() => {
    if (i === 0) return;
    (async () => {
      for (; ; )
        await t.start({ x: [0, i], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } }), await t.start({ x: [i, 0], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } });
    })();
  }, [t, i]), /* @__PURE__ */ c(
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
      children: /* @__PURE__ */ c(
        I.div,
        {
          animate: t,
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "50%",
            backgroundImage: `linear-gradient(45deg, ${V(o, 0.15)} 0%, ${K(o, 0.1)} 90%)`,
            borderRadius: e / 2
          }
        }
      )
    }
  );
});
Xe.displayName = "Progress.LoadingBar";
const Ye = s.memo(({ height: e = 8 }) => {
  const { scrollYProgress: t } = tt(), { themeColor: r } = k.useThemeColor();
  return /* @__PURE__ */ c(
    I.div,
    {
      style: {
        scaleX: t,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        originX: 0,
        zIndex: 1e4,
        backgroundImage: `linear-gradient(45deg, ${K(r, 0.2)} 0%, ${V(r, 0.15)} 90%)`,
        height: e,
        borderTopRightRadius: "16px",
        borderBottomRightRadius: "16px"
      }
    }
  );
});
Ye.displayName = "Progress.Scrollbar";
const Gt = {
  Scrollbar: Ye,
  LoadingBar: Xe
}, Et = s.memo(
  ({
    tabs: e,
    defaultActiveIndex: t = 0,
    onChange: r,
    variant: o = "pills",
    tabContainerStyle: n,
    tabItemContainerStyle: i,
    tabItemStyle: l,
    tabIndicatorStyle: a,
    tabContentStyle: d
  }) => {
    const { themeMode: u } = k.useThemeMode(), { themeColor: h } = k.useThemeColor(), [p, f] = s.useState(!1), [m, x] = s.useState(t), [w, g] = s.useState({}), y = s.useRef([]), L = s.useCallback(() => {
      if (y.current[m]) {
        const M = y.current[m];
        if (M) {
          const H = !!e[m].icon, { offsetLeft: A, offsetWidth: te } = M;
          g({
            left: A,
            width: te + (p && H ? 24 : 0)
          });
        }
      }
    }, [m, o, e, p]);
    s.useLayoutEffect(() => (f(!0), () => {
      f(!1);
    }), []), s.useEffect(() => {
      L();
    }, [L]), s.useEffect(() => {
      const M = requestAnimationFrame(() => {
        L();
      });
      return () => cancelAnimationFrame(M);
    }, [m, e.length, L]);
    const P = s.useCallback(
      (M, H) => {
        f(!1), s.startTransition(() => {
          x(M);
        }), r(M, H);
      },
      [r]
    );
    return /* @__PURE__ */ b(O.Flex, { column: !0, gap: 0, style: { width: "100%", ...n }, children: [
      /* @__PURE__ */ b(
        O.Flex,
        {
          row: !0,
          style: {
            position: "relative",
            ...o === "pills" && {
              background: B[u].secondary,
              padding: "4px",
              borderRadius: "8px"
            },
            ...o === "underline" && {
              borderBottomWidth: 1.5,
              borderBottomStyle: "solid",
              borderBottomColor: $[u].secondary
            },
            ...i
          },
          children: [
            e.map((M, H) => /* @__PURE__ */ b(
              I.button,
              {
                ref: (A) => {
                  A && (y.current[H] = A);
                },
                onClick: () => P(H, M),
                style: {
                  WebkitTapHighlightColor: "transparent",
                  padding: "12px 20px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  fontWeight: "500",
                  outline: "none",
                  border: "none",
                  color: v[u].primary,
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
                  M.icon && /* @__PURE__ */ c(
                    R,
                    {
                      icon: M.icon,
                      width: 20,
                      style: {
                        marginRight: "8px",
                        color: H === m ? h : "inherit"
                      }
                    }
                  ),
                  /* @__PURE__ */ c(
                    T.Text,
                    {
                      text: M.label,
                      style: {
                        color: H === m ? h : "inherit"
                      }
                    }
                  )
                ]
              },
              M.key || H
            )),
            /* @__PURE__ */ c(
              I.div,
              {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.2, ease: "easeOut" },
                layout: !0,
                style: {
                  position: "absolute",
                  ...w,
                  ...o === "pills" && {
                    top: "4px",
                    zIndex: 1,
                    height: "calc(100% - 8px)",
                    borderRadius: "6px",
                    background: B[u].primary,
                    boxShadow: G[u].tertiary
                  },
                  ...o === "underline" && {
                    bottom: "-2px",
                    height: "3px",
                    background: h,
                    borderRadius: "4px"
                  },
                  ...a
                }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ c(_, { mode: "wait", children: e[m] && /* @__PURE__ */ c(
        I.div,
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
          children: e[m].content
        },
        m
      ) })
    ] });
  }
);
Et.displayName = "Tab";
const Qe = s.memo(({ children: e, isOpen: t }) => /* @__PURE__ */ c(_, { initial: !1, children: t && /* @__PURE__ */ c(
  I.div,
  {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
    transition: { duration: 0.2 },
    style: { overflow: "hidden" },
    children: e
  }
) }));
Qe.displayName = "Transitions.Collapse";
const Vt = {
  Collapse: Qe
};
export {
  B as BackgroundColors,
  $ as BorderColors,
  C as BreakPointName,
  ne as Button,
  Te as Buttons,
  X as Card,
  Wt as Cards,
  bt as Container,
  kt as Drawer,
  Tt as Form,
  Dt as FormField,
  R as Icon,
  pe as Menu,
  je as Modal,
  At as Modals,
  Ft as NoSSR,
  Rt as Notification,
  We as Popover,
  $t as Portal,
  Gt as Progress,
  q as SemanticColors,
  G as Shadows,
  O as Space,
  Et as Tab,
  v as TextColors,
  k as Theme,
  N as ThemeBreakPoint,
  E as ThemeColor,
  S as ThemeMode,
  Vt as Transitions,
  T as Typography,
  W as TypographySize,
  Z as TypographySizeName,
  it as getDarkerHex,
  K as getLighterHex,
  V as getOpacityHex,
  Nt as getSystemThemeMode,
  Bt as getThemeColors,
  ie as hexNormalize,
  xe as hexToHsl,
  ge as hexToRgb,
  ye as hslToHex,
  _t as notify,
  st as rgbToHex,
  Y as useElementFocus,
  wt as useElementHover,
  Mt as useHandler
};
