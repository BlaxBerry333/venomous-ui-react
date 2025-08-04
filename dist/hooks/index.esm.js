import { jsx as a, jsxs as b, Fragment as ie } from "react/jsx-runtime";
import s from "react";
import { Icon as at } from "@iconify/react";
import { AnimatePresence as $, motion as I, useAnimation as ct, useScroll as dt } from "framer-motion";
import { Toaster as ut, toast as Q } from "sonner";
import { createPortal as ht } from "react-dom";
var S = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e))(S || {});
const U = {
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
}, _ = {
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
}, V = {
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
}, Gt = (e) => ({
  background: B[e],
  border: _[e],
  text: v[e]
});
function pt() {
  return typeof window < "u" ? window.matchMedia("(prefers-color-scheme: dark)").matches : !1;
}
function jt() {
  return pt() ? S.Dark : S.Light;
}
function le(e) {
  return e = e.replace("#", ""), e.length === 3 && (e = e.split("").map((t) => t + t).join("")), `#${e}`;
}
function ye(e) {
  e = e.replace("#", "");
  const t = parseInt(e, 16), r = t >> 16 & 255, o = t >> 8 & 255, n = t & 255;
  return { r, g: o, b: n };
}
function mt(e, t, r) {
  const o = (n) => {
    const i = n.toString(16);
    return i.length === 1 ? "0" + i : i;
  };
  return `#${o(e)}${o(t)}${o(r)}`;
}
function be(e) {
  const { r: t, g: r, b: o } = ye(le(e)), n = t / 255, i = r / 255, l = o / 255, c = Math.max(n, i, l), d = Math.min(n, i, l), u = c - d;
  let p = 0;
  u !== 0 && (c === n ? p = (i - l) / u % 6 : c === i ? p = (l - n) / u + 2 : p = (n - i) / u + 4, p *= 60, p < 0 && (p += 360));
  const h = (c + d) / 2, m = u === 0 ? 0 : u / (1 - Math.abs(2 * h - 1));
  return { h: p, s: m, l: h };
}
function ke(e, t, r) {
  const o = (1 - Math.abs(2 * r - 1)) * t, n = o * (1 - Math.abs(e / 60 % 2 - 1)), i = r - o / 2;
  let l = 0, c = 0, d = 0;
  return e >= 0 && e < 60 ? [l, c, d] = [o, n, 0] : e < 120 ? [l, c, d] = [n, o, 0] : e < 180 ? [l, c, d] = [0, o, n] : e < 240 ? [l, c, d] = [0, n, o] : e < 300 ? [l, c, d] = [n, 0, o] : [l, c, d] = [o, 0, n], mt(Math.round((l + i) * 255), Math.round((c + i) * 255), Math.round((d + i) * 255));
}
function ft(e, t) {
  const { h: r, s: o, l: n } = be(e);
  return ke(r, o, Math.max(0, n - t));
}
function ee(e, t) {
  const { h: r, s: o, l: n } = be(e);
  return ke(r, o, Math.min(1, n + t));
}
function G(e, t) {
  const { r, g: o, b: n } = ye(le(e));
  t > 1 && (t = 1), t < 0 && (t = 0);
  const i = Math.min(1, Math.max(0, t));
  return `rgba(${r}, ${o}, ${n}, ${i})`;
}
const we = s.memo(() => (gt(), null));
we.displayName = "Theme.InjectToHTML";
function gt() {
  const { themeColor: e } = k.useThemeColor(), t = s.useMemo(
    () => ({
      light: ee(e, 0.2),
      dark: ft(e, 0.8),
      origin: le(e),
      opacity: G(e, 0.6)
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
const ae = s.createContext(void 0), xt = S.Light, yt = E.EmeraldMamba, bt = {
  THEME_MODE: "VENOMOUS_UI__THEME_MODE",
  THEME_COLOR: "VENOMOUS_UI__THEME_COLOR"
};
function kt({
  children: e,
  defaultThemeMode: t = xt,
  defaultThemeColor: r = yt,
  storageKey: o = bt
}) {
  const [n, i] = s.useState(!1);
  s.useEffect(() => {
    i(!0);
  }, []);
  const [l, c] = s.useState(t), [d, u] = s.useState(r), p = s.useCallback((g) => {
    c(g);
  }, []), h = s.useCallback(() => {
    c((g) => g === S.Dark ? S.Light : S.Dark);
  }, []), m = s.useCallback(() => {
    c(t);
  }, [t]), f = s.useCallback((g) => {
    u(g);
  }, []), x = s.useCallback(() => {
    u(r);
  }, [r]);
  s.useEffect(() => {
    if (n) {
      const g = localStorage.getItem(o.THEME_MODE);
      g && Object.values(S).includes(g) && c(g);
      const y = localStorage.getItem(o.THEME_COLOR);
      y && Object.values(E).includes(y) && u(y);
    }
  }, [n, o.THEME_COLOR, o.THEME_MODE]), s.useEffect(() => {
    n && (localStorage.setItem(o.THEME_MODE, l), localStorage.setItem(o.THEME_COLOR, d));
  }, [n, o.THEME_MODE, o.THEME_COLOR, l, d]);
  const w = s.useMemo(
    () => ({
      themeMode: l,
      setThemeMode: p,
      toggleThemeMode: h,
      resetThemeMode: m,
      isDarkThemeMode: l === S.Dark,
      themeColor: d,
      setThemeColor: f,
      resetThemeColor: x
    }),
    [l, p, h, m, d, f, x]
  );
  return /* @__PURE__ */ a(ae.Provider, { value: w, children: e });
}
const he = new Map(
  Object.values(C).map((e, t) => [e, t])
);
function wt() {
  const [e, t] = s.useState(!1), [r, o] = s.useState(() => Mt()), [n, i] = s.useState(!1), l = s.useRef(null);
  s.useEffect(() => {
    const d = () => {
      const h = window.innerWidth;
      return h >= N.xxl ? C.xxl : h >= N.xl ? C.xl : h >= N.lg ? C.lg : h >= N.md ? C.md : h >= N.sm ? C.sm : C.xs;
    }, u = () => {
      l.current && clearTimeout(l.current), l.current = setTimeout(() => {
        const h = d();
        o((m) => m !== h ? h : m);
      }, 100);
    }, p = d();
    return o(p), i(!0), t(!0), window.addEventListener("resize", u, { passive: !0 }), () => {
      l.current && (clearTimeout(l.current), l.current = null), window.removeEventListener("resize", u);
    };
  }, []);
  const c = s.useCallback(
    (d) => {
      if (!e) return !1;
      const u = he.get(r), p = he.get(d);
      return u === void 0 || p === void 0 ? !1 : u >= p;
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
function Mt() {
  if (typeof window > "u")
    return C.xs;
  const e = navigator.userAgent, t = /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(e), r = /iPad|Android(?!.*Mobile)|Kindle|Silk/i.test(e);
  return t && !r ? C.xs : r ? C.md : C.lg;
}
function vt() {
  const e = s.useContext(ae);
  if (e === void 0)
    throw new Error("useThemeColor must be used within a ThemeModeProvider");
  return {
    themeColor: e.themeColor,
    setThemeColor: e.setThemeColor,
    resetThemeColor: e.resetThemeColor
  };
}
function Ct() {
  const e = s.useContext(ae);
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
  Provider: kt,
  InjectToHTML: we,
  useThemeMode: Ct,
  useThemeColor: vt,
  useThemeBreakpoint: wt
}, R = s.memo(({ style: e, icon: t, width: r = 20, semanticColor: o, ...n }) => {
  const { themeMode: i } = k.useThemeMode(), l = s.useMemo(() => o ? U[o] : v[i].primary, [i, o]);
  return /* @__PURE__ */ a(
    at,
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
const H = {
  contained: "contained",
  outlined: "outlined",
  ghost: "ghost"
};
function Me({
  isLoading: e,
  isDisabled: t,
  variant: r,
  semanticColor: o
}) {
  const { themeColor: n } = k.useThemeColor(), { themeMode: i } = k.useThemeMode(), l = s.useMemo(() => {
    let h = "";
    if (e || t)
      return h = B[i].secondary, h;
    switch (r) {
      case H.contained:
        h = o ? U[o] : n;
        break;
      case H.outlined:
        h = B[i].secondary;
        break;
      case H.ghost:
      default:
        h = "transparent";
        break;
    }
    return h;
  }, [r, n, i, e, t, o]), c = s.useMemo(() => {
    let h = "";
    if (e || t)
      return h = _[i].secondary, h;
    switch (r) {
      case H.contained:
        h = o ? ee(U[o], 0.25) : G(n, 0.5);
        break;
      case H.outlined:
        h = o ? U[o] : n;
        break;
      case H.ghost:
        h = _[i].secondary;
        break;
      default:
        h = "transparent";
        break;
    }
    return h;
  }, [r, n, i, e, t, o]), d = s.useMemo(() => {
    let h = "";
    if (e || t)
      return h = v[i].disabled, h;
    switch (r) {
      case H.contained:
        h = "#ffffff";
        break;
      case H.outlined:
        h = o ? U[o] : n;
        break;
      case H.ghost:
      default:
        h = v[i].primary;
        break;
    }
    return h;
  }, [r, n, i, e, t, o]), u = s.useMemo(() => {
    switch (r) {
      case H.ghost:
        return "none";
      case H.contained:
      case H.outlined:
      default:
        return V[i].secondary;
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
        borderColor: c,
        boxShadow: u,
        backgroundColor: l,
        color: d
      }),
      [e, t, c, l, d, u]
    )
  };
}
const ve = s.memo(
  ({
    type: e = "button",
    style: t,
    variant: r = "contained",
    isLoading: o,
    isDisabled: n,
    icon: i,
    iconWidth: l = 20,
    semanticColor: c,
    ...d
  }) => {
    const { buttonStyles: u } = Me({
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
ve.displayName = "Buttons.Icon";
const Ce = s.memo(({ style: e, text: t, ...r }) => /* @__PURE__ */ a(
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
Ce.displayName = "Typography.Code";
function ce({ ellipsis: e = 0, semanticColor: t }) {
  const { themeMode: r } = k.useThemeMode(), o = s.useMemo(() => t ? U[t] : v[r].primary, [r, t]), n = s.useMemo(() => e ? {
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
const Se = s.memo(
  ({ children: e, style: t, ellipsis: r = 0, semanticColor: o, ...n }) => {
    const { fontColor: i, ellipsisStyles: l } = ce({ ellipsis: r, semanticColor: o });
    return /* @__PURE__ */ a(
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
Se.displayName = "Typography.Paragraph";
const pe = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, re = {
  span: "span",
  small: "small",
  strong: "strong"
}, Te = s.memo(
  ({ style: e, text: t, as: r = re.span, isEllipsis: o = !1, semanticColor: n, ...i }) => {
    const { fontColor: l, ellipsisStyles: c } = ce({ ellipsis: o ? 1 : 0, semanticColor: n });
    return r === re.strong ? /* @__PURE__ */ a(
      "strong",
      {
        style: {
          fontSize: W[Z.strong],
          fontWeight: "bold",
          color: l,
          ...c,
          ...e
        },
        ...i,
        children: t
      }
    ) : r === re.small ? /* @__PURE__ */ a(
      "small",
      {
        style: {
          fontSize: W[Z.small],
          color: l,
          ...c,
          ...e
        },
        ...i,
        children: t
      }
    ) : /* @__PURE__ */ a(
      "span",
      {
        style: {
          fontSize: W[Z.text],
          fontWeight: "normal",
          color: l,
          ...c,
          ...e
        },
        ...i,
        children: t
      }
    );
  }
);
Te.displayName = "Typography.Text";
const Fe = s.memo(
  ({ text: e, as: t = pe.h4, ellipsis: r = 0, style: o, semanticColor: n, ...i }) => {
    const l = s.useMemo(() => pe[t], [t]), c = s.useMemo(() => W[t], [t]), { fontColor: d, ellipsisStyles: u } = ce({ ellipsis: r, semanticColor: n });
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
        ...i,
        children: e
      }
    );
  }
);
Fe.displayName = "Typography.Title";
const T = {
  Title: Fe,
  Text: Te,
  Code: Ce,
  Paragraph: Se
}, se = s.memo(
  ({
    type: e = "button",
    style: t,
    text: r,
    variant: o = "contained",
    isLoading: n,
    isDisabled: i,
    icon: l,
    iconPosition: c = "start",
    iconWidth: d = 20,
    semanticColor: u,
    ...p
  }) => {
    const { buttonStyles: h } = Me({
      isLoading: n,
      isDisabled: i || p.disabled,
      variant: o,
      semanticColor: u
    });
    return /* @__PURE__ */ b(
      "button",
      {
        type: e,
        disabled: n || i,
        style: {
          flexDirection: c === "start" ? "row" : "row-reverse",
          WebkitTapHighlightColor: "transparent",
          ...h,
          ...t
        },
        ...p,
        children: [
          l && /* @__PURE__ */ a(
            R,
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
          /* @__PURE__ */ a(T.Text, { text: r, style: { color: "inherit" } }),
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
                backgroundColor: h.backgroundColor
              },
              children: /* @__PURE__ */ a(R, { icon: "svg-spinners:270-ring-with-bg", width: 24, style: { color: "inherit" } })
            }
          )
        ]
      }
    );
  }
);
se.displayName = "Button";
const Re = {
  Icon: ve
}, Ee = s.memo(
  ({ children: e, style: t, row: r = !0, column: o = !1, gap: n = "8px", ...i }) => /* @__PURE__ */ a(
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
Ee.displayName = "Space.Flex";
const Ie = s.memo(({ children: e, style: t, columns: r = 1, spacing: o = 16, ...n }) => {
  const { screenSize: i } = k.useThemeBreakpoint(), l = i ?? C.xs, c = s.useMemo(
    () => St(r, l),
    [r, l]
  ), d = s.useMemo(
    () => Tt(o, l),
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
Ie.displayName = "Space.Grid";
const q = Object.keys(C);
function St(e = 1, t) {
  if (typeof e == "number")
    return e;
  const r = q.indexOf(t);
  for (let o = r; o < q.length; o++) {
    const n = e[q[o]];
    if (n !== void 0) return n;
  }
  return 1;
}
function Tt(e = 16, t) {
  if (typeof e == "number")
    return e;
  const r = q.indexOf(t);
  for (let o = r; o < q.length; o++) {
    const n = e[q[o]];
    if (n !== void 0) return n;
  }
  return 16;
}
const L = {
  Flex: Ee,
  Grid: Ie
}, de = {
  div: "div",
  article: "article"
}, F = {
  elevated: "elevated",
  outlined: "outlined",
  transparent: "transparent",
  frostedGlass: "frostedGlass"
}, X = s.memo(
  ({ children: e, style: t, as: r = de.div, variant: o = F.elevated, ...n }) => {
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
    }, [i, o]), c = s.useMemo(() => {
      switch (o) {
        case F.outlined:
        case F.transparent:
          return _[i].tertiary;
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
          return V[i].primary;
      }
    }, [i, o]);
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
const Le = s.memo(({ children: e, height: t = 300, width: r = 200, title: o, coverImage: n }) => /* @__PURE__ */ b(
  X,
  {
    as: de.article,
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
        L.Flex,
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
Le.displayName = "Cards.Book";
const Ft = s.lazy(() => import("./index.chunk.js").then((e) => ({ default: e.Popover }))), Oe = s.memo(({ children: e, title: t = "", description: r = "", renderMenu: o }) => /* @__PURE__ */ b(X, { as: de.article, style: { position: "relative" }, children: [
  (t || r) && /* @__PURE__ */ b(L.Flex, { column: !0, gap: 2, style: { paddingRight: "48px" }, children: [
    /* @__PURE__ */ a(T.Title, { as: "h6", text: t, ellipsis: 1 }),
    /* @__PURE__ */ a(T.Paragraph, { ellipsis: 3, children: r })
  ] }),
  /* @__PURE__ */ a(s.Suspense, { fallback: null, children: /* @__PURE__ */ a(
    Ft,
    {
      placement: "bottom",
      renderTrigger: (n) => /* @__PURE__ */ a(
        Re.Icon,
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
  e && /* @__PURE__ */ a(L.Flex, { column: !0, children: e })
] }));
Oe.displayName = "Cards.Product";
const Ut = {
  Book: Le,
  Product: Oe
}, Pe = s.memo(({ children: e, breakpoint: t = C.lg, style: r, ...o }) => /* @__PURE__ */ a(
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
Pe.displayName = "Container";
const Rt = s.memo(
  ({ isOpen: e, onClose: t, children: r, position: o = "left", maskClosable: n = !0, width: i = 300, height: l = 300, style: c }) => {
    const { themeMode: d } = k.useThemeMode();
    return /* @__PURE__ */ b(ie, { children: [
      /* @__PURE__ */ a($, { children: e && /* @__PURE__ */ a(
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
            backgroundColor: G(B[d].primary, 0.5),
            backdropFilter: "blur(2px)",
            pointerEvents: e ? "auto" : "none"
          }
        }
      ) }),
      /* @__PURE__ */ a($, { children: e && /* @__PURE__ */ a(
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
Rt.displayName = "Drawer";
const J = {
  top: "top",
  left: "left",
  right: "right"
}, te = s.memo(
  ({
    children: e,
    style: t,
    htmlFor: r,
    label: o = "",
    isError: n = !1,
    required: i = !1,
    position: l = J.top,
    ...c
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
        ...c,
        children: [
          /* @__PURE__ */ b(L.Flex, { row: !0, gap: 0, style: { width: "100%", alignItems: "center" }, children: [
            i && /* @__PURE__ */ a(T.Text, { as: "small", text: "*", style: { color: E.RubyCopperhead, marginRight: "2px" } }),
            /* @__PURE__ */ a(
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
te.displayName = "Form.Label";
function D({
  fullWidth: e = !1,
  isDisabled: t = !1,
  isError: r = !1,
  isFocused: o = !1
}) {
  const { themeMode: n } = k.useThemeMode(), { themeColor: i } = k.useThemeColor(), l = s.useMemo(() => t ? B[n].secondary : "transparent", [t, n]), c = s.useMemo(() => r ? E.RubyCopperhead : t ? v[n].disabled : v[n].primary, [r, t, n]), d = s.useMemo(() => r ? E.RubyCopperhead : t ? v[n].disabled : v[n].quaternary, [r, t, n]), u = s.useMemo(() => r ? E.RubyCopperhead : t ? _[n].secondary : _[n].primary, [r, n]), p = s.useMemo(() => r ? E.RubyCopperhead : i, [r, n]), h = s.useMemo(
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
        outlineColor: p
      },
      ...t && {
        cursor: "not-allowed",
        outline: "none"
      }
    }),
    [e, o, t, l, c, u, p]
  );
  return {
    backgroundColor: l,
    textColor: c,
    helperTextColor: d,
    borderColor: u,
    outlineColor: p,
    commonStyles: h
  };
}
function He({
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
  ), c = s.useCallback(
    (d) => {
      if (d.preventDefault(), d.stopPropagation(), !t && o.current) {
        const u = !n;
        i(u);
        const p = new Event("change", { bubbles: !0 });
        Object.defineProperty(p, "target", {
          writable: !1,
          value: { ...o.current, checked: u }
        }), r == null || r(p);
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
const ze = s.memo(
  ({
    style: e,
    autoComplete: t = "off",
    required: r = !1,
    isError: o = !1,
    disabled: n = !1,
    name: i,
    value: l,
    checked: c = !1,
    onChange: d,
    label: u,
    labelPosition: p = "right",
    ...h
  }) => {
    const { inputRef: m, isChecked: f, toggleOriginalIsChecked: x, toggleCustomIsChecked: w } = He({
      checked: c,
      disabled: n,
      onChange: d
    }), { outlineColor: g, borderColor: y } = D({
      isDisabled: n,
      isError: o
    });
    return /* @__PURE__ */ b(te, { label: u, required: r, isError: o, position: p, children: [
      /* @__PURE__ */ a(
        "input",
        {
          type: "checkbox",
          name: i,
          value: l,
          checked: f,
          ref: m,
          onChange: x,
          autoComplete: t,
          disabled: n,
          style: { display: "none", ...e },
          ...h
        }
      ),
      /* @__PURE__ */ a(
        R,
        {
          icon: f ? "fluent:checkbox-checked-24-filled" : "fluent:checkbox-unchecked-24-regular",
          width: 24,
          onClick: w,
          style: {
            color: f ? g : y,
            cursor: n ? "not-allowed" : "pointer"
          }
        }
      )
    ] });
  }
);
ze.displayName = "FormField.Checkbox";
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
function Et({ isDisabled: e }) {
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
function It() {
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
    helpText: c,
    ...d
  }) => {
    const { themeMode: u } = k.useThemeMode(), { helperTextColor: p } = D({
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
            o && /* @__PURE__ */ a(
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
            /* @__PURE__ */ a(
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
          /* @__PURE__ */ b(L.Flex, { column: !0, gap: 0, style: { width: "100%" }, children: [
            e,
            c && /* @__PURE__ */ a(
              T.Text,
              {
                as: "small",
                text: c,
                style: {
                  color: p,
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
const Be = s.memo(
  ({
    style: e,
    fullWidth: t,
    autoComplete: r = "off",
    required: o = !1,
    isError: n = !1,
    disabled: i = !1,
    name: l,
    value: c,
    label: d,
    helpText: u,
    ...p
  }) => {
    const { isFocused: h, handleFocus: m, handleBlur: f } = Y(), { commonStyles: x } = D({
      fullWidth: t,
      isDisabled: i,
      isError: n,
      isFocused: h
    });
    return /* @__PURE__ */ a(
      j,
      {
        label: d,
        required: o,
        disabled: i,
        isError: n,
        fullWidth: t,
        helpText: u,
        children: /* @__PURE__ */ a(
          "input",
          {
            type: "number",
            name: l,
            value: c,
            autoComplete: r,
            disabled: i,
            onFocus: i ? void 0 : m,
            onBlur: i ? void 0 : f,
            style: {
              boxSizing: "border-box",
              ...x,
              ...e
            },
            ...p
          }
        )
      }
    );
  }
);
Be.displayName = "FormField.Number";
const Ne = s.memo(
  ({
    style: e,
    fullWidth: t,
    autoComplete: r = "off",
    required: o = !1,
    isError: n = !1,
    disabled: i = !1,
    name: l,
    value: c,
    label: d,
    helpText: u,
    ...p
  }) => {
    const { isFocused: h, handleFocus: m, handleBlur: f } = Y(), { outlineColor: x, commonStyles: w } = D({
      fullWidth: t,
      isDisabled: i,
      isError: n,
      isFocused: h
    }), { isPasswordVisible: g, togglePasswordVisibility: y } = Lt(!1);
    return /* @__PURE__ */ a(
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
              /* @__PURE__ */ a(
                "input",
                {
                  type: g ? "text" : "password",
                  name: l,
                  value: c,
                  autoComplete: r,
                  disabled: i,
                  onFocus: i ? void 0 : m,
                  onBlur: i ? void 0 : f,
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
                  ...p
                }
              ),
              /* @__PURE__ */ a(
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
Ne.displayName = "FormField.Password";
function Lt(e = !1) {
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
const We = s.memo(
  ({
    fullWidth: e = !1,
    required: t = !1,
    disabled: r = !1,
    name: o,
    label: n,
    labelPosition: i = "right",
    value: l,
    options: c,
    onChange: d
  }) => {
    const [u, p] = s.useState(l || null);
    s.useEffect(() => {
      p(l || null);
    }, [l]);
    const h = s.useCallback(
      (m) => {
        const f = m.target.value;
        p(f), d == null || d(m);
      },
      [d]
    );
    return /* @__PURE__ */ a(j, { label: n, required: t, disabled: r, isError: !1, fullWidth: e, children: /* @__PURE__ */ a(L.Flex, { column: !0, gap: 8, children: c.map((m) => {
      const f = `${o}-${m.value}`, x = r || m.disabled;
      return /* @__PURE__ */ a(
        te,
        {
          label: m.label,
          position: i,
          htmlFor: f,
          style: {
            cursor: x ? "not-allowed" : "pointer",
            opacity: x ? 0.6 : 1
          },
          children: /* @__PURE__ */ a(
            "input",
            {
              id: f,
              type: "radio",
              autoComplete: "off",
              name: o,
              checked: m.value === u,
              value: m.value,
              disabled: x,
              onChange: h,
              style: { cursor: x ? "not-allowed" : "pointer" }
            }
          )
        },
        m.value
      );
    }) }) });
  }
);
We.displayName = "FormField.Radio";
const Ot = {
  ul: "ul"
}, Pt = {
  li: "li"
}, De = s.memo(
  ({
    as: e = Pt.li,
    style: t,
    icon: r,
    text: o,
    subText: n,
    isDisabled: i = !1,
    isActive: l = !1,
    actionButton: c = void 0,
    ...d
  }) => {
    const { themeMode: u } = k.useThemeMode(), { themeColor: p } = k.useThemeColor(), { isHovering: h, handleMouseDown: m, handleMouseUp: f, handleMouseLeave: x } = Et({
      isDisabled: i
    }), w = s.useCallback(
      (y) => {
        i || (y.currentTarget.style.boxShadow = V[u].tertiary);
      },
      [i]
    ), g = s.useCallback(
      (y) => {
        i || (y.currentTarget.style.boxShadow = h ? V[u].tertiary : "none");
      },
      [i]
    );
    return /* @__PURE__ */ a(
      e,
      {
        onMouseDown: m,
        onMouseUp: f,
        onMouseLeave: x,
        onMouseOver: w,
        onMouseOut: g,
        style: {
          boxSizing: "border-box",
          listStyle: "none",
          margin: 0,
          padding: "8px",
          paddingRight: c ? "8px" : "16px",
          borderRadius: "8px",
          cursor: i ? "not-allowed" : d != null && d.onClick ? "pointer" : "default",
          transition: "box-shadow 0.2s ease-in-out",
          ...t
        },
        ...d,
        children: /* @__PURE__ */ b(L.Flex, { row: !0, style: { alignItems: "center" }, children: [
          r && /* @__PURE__ */ a(
            R,
            {
              icon: r,
              width: 24,
              style: {
                color: i ? v[u].disabled : l ? p : v[u].primary
              }
            }
          ),
          /* @__PURE__ */ b(
            L.Flex,
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
                  T.Text,
                  {
                    text: o,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      color: i ? v[u].disabled : l ? p : v[u].primary
                    }
                  }
                ),
                n && /* @__PURE__ */ a(
                  T.Text,
                  {
                    as: "small",
                    text: n,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      color: i ? v[u].disabled : l ? p : v[u].quaternary
                    }
                  }
                )
              ]
            }
          ),
          !!(c != null && c.icon) && /* @__PURE__ */ a(
            Re.Icon,
            {
              icon: c.icon,
              variant: "ghost",
              isDisabled: i,
              onClick: c.onClick
            }
          )
        ] })
      }
    );
  }
);
De.displayName = "Menu.Item";
const Ae = s.memo(({ children: e, style: t, as: r = Ot.ul, ...o }) => /* @__PURE__ */ a(
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
Ae.displayName = "Menu.List";
const me = {
  List: Ae,
  Item: De
}, $e = s.memo(
  ({ children: e, style: t, contentStyle: r, placement: o = "bottom", renderTrigger: n, trigger: i = "click", onClickOutside: l }) => {
    var y;
    const c = It(), d = s.useRef(null), u = s.useRef(null), p = s.useRef(null), [h, m] = s.useState({ top: 0, left: 0 });
    s.useEffect(() => {
      if (i !== "click") return;
      const O = (P) => {
        var M;
        p.current && !p.current.contains(P.target) && !((M = u.current) != null && M.contains(P.target)) && (c.close(), l && l());
      };
      return c.isOpen && document.addEventListener("mousedown", O), () => {
        document.removeEventListener("mousedown", O);
      };
    }, [c, i, l]), s.useEffect(() => {
      if (c.isOpen && d.current && u.current && p.current) {
        const O = d.current.getBoundingClientRect(), P = u.current.getBoundingClientRect(), M = p.current.offsetWidth, z = p.current.offsetHeight, A = P.top - O.top, oe = P.left - O.left, it = o === "bottom" ? A + P.height : A - z, lt = oe + P.width / 2 - M / 2;
        m({ top: it, left: lt });
      }
    }, [c.isOpen, o]);
    const w = i === "hover" ? {
      onMouseEnter: () => {
        i === "hover" && c.open();
      },
      onMouseLeave: () => {
        i === "hover" && c.close();
      }
    } : {}, g = i === "click" ? { onClick: c.toggle } : {};
    return /* @__PURE__ */ b("div", { ref: d, style: { display: "inline-block", position: "relative", ...t }, ...w, children: [
      /* @__PURE__ */ a("div", { ref: u, ...g, style: { display: "inline-block", width: "100%" }, children: n(c.isOpen) }),
      /* @__PURE__ */ a($, { children: c.isOpen && /* @__PURE__ */ a(
        I.div,
        {
          ref: p,
          initial: { opacity: 0, y: 0 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 0 },
          transition: { duration: 0.2 },
          style: {
            position: "absolute",
            top: h.top,
            left: h.left,
            zIndex: 1e3,
            minWidth: (y = u.current) == null ? void 0 : y.offsetWidth
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
$e.displayName = "Popover";
const _e = s.memo(
  ({
    isOriginalSelect: e = !1,
    fullWidth: t,
    required: r = !1,
    isError: o = !1,
    disabled: n = !1,
    label: i,
    helpText: l,
    ...c
  }) => {
    const { isFocused: d, setIsFocused: u, handleFocus: p, handleBlur: h } = Y(), { commonStyles: m } = D({
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
          e && /* @__PURE__ */ a(
            Ve,
            {
              commonStyles: m,
              handleFocus: p,
              handleBlur: h,
              disabled: n,
              ...c
            }
          ),
          !e && /* @__PURE__ */ a(Ge, { commonStyles: m, setIsFocused: u, disabled: n, ...c })
        ]
      }
    );
  }
);
_e.displayName = "FormField.Select";
const Ve = s.memo(
  ({
    commonStyles: e,
    handleFocus: t,
    handleBlur: r,
    name: o,
    autoComplete: n = "off",
    options: i,
    onChange: l,
    value: c,
    disabled: d,
    style: u,
    ...p
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
      ...p,
      children: i.map((h) => /* @__PURE__ */ a("option", { value: h.value, disabled: h.disabled, children: h.label }, h.value))
    }
  )
), Ge = s.memo(({ commonStyles: e, setIsFocused: t, disabled: r, name: o, value: n, options: i, onChange: l, style: c }) => {
  const [d, u] = s.useState(n || null), [p, h] = s.useState(!1);
  s.useEffect(() => {
    u(n || null);
  }, [n]);
  const m = s.useCallback(
    (g) => {
      u(g), h(!1), t(!1);
      const y = {
        target: { name: o, value: g },
        currentTarget: { name: o, value: g }
      };
      l == null || l(y);
    },
    [o, l, t]
  ), f = s.useCallback(
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
  ), w = (c == null ? void 0 : c.width) ?? e.minWidth;
  return /* @__PURE__ */ a(
    $e,
    {
      placement: "bottom",
      trigger: "click",
      style: { width: "100%" },
      onClickOutside: () => t(!1),
      renderTrigger: () => /* @__PURE__ */ b(
        L.Flex,
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
            /* @__PURE__ */ a(T.Paragraph, { ellipsis: 1, style: { flex: 1 }, children: x }),
            d && !r && /* @__PURE__ */ a(
              R,
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
              R,
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
      children: /* @__PURE__ */ a(me.List, { as: "ul", style: { width: w }, children: i.map((g) => /* @__PURE__ */ a(
        me.Item,
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
Ve.displayName = "FormField.Select.Original";
Ge.displayName = "FormField.Select.Custom";
const fe = 48, ge = 24, ne = 18, xe = 4, je = s.memo(
  ({
    style: e,
    autoComplete: t = "off",
    required: r = !1,
    isError: o = !1,
    disabled: n = !1,
    name: i,
    value: l,
    checked: c = !1,
    onChange: d,
    label: u,
    labelPosition: p = "right",
    ...h
  }) => {
    const { inputRef: m, isChecked: f, toggleOriginalIsChecked: x, toggleCustomIsChecked: w } = He({
      checked: c,
      disabled: n,
      onChange: d
    }), { backgroundColor: g, outlineColor: y, borderColor: O, commonStyles: P } = D({
      isDisabled: n,
      isError: o
    });
    return /* @__PURE__ */ b(te, { label: u, required: r, isError: o, position: p, children: [
      /* @__PURE__ */ a(
        "input",
        {
          type: "checkbox",
          name: i,
          value: l,
          checked: f,
          ref: m,
          onChange: x,
          autoComplete: t,
          disabled: n,
          style: { display: "none", ...e },
          ...h
        }
      ),
      /* @__PURE__ */ a(
        "div",
        {
          onClick: w,
          style: {
            display: "inline-flex",
            alignItems: "center",
            cursor: n ? "not-allowed" : "pointer",
            opacity: n ? 0.6 : 1
          },
          children: /* @__PURE__ */ a($, { children: /* @__PURE__ */ a(
            I.div,
            {
              initial: !1,
              animate: f ? "checked" : "unchecked",
              transition: { type: "spring", stiffness: 700, damping: 30 },
              style: {
                width: fe,
                height: ge,
                position: "relative",
                display: "flex",
                alignItems: "center",
                borderRadius: ge / 2,
                borderWidth: P.borderWidth,
                borderStyle: P.borderStyle,
                borderColor: O,
                backgroundColor: f ? y : g,
                transition: "background-color 0.2s ease-in-out"
              },
              children: /* @__PURE__ */ a(
                I.div,
                {
                  initial: !1,
                  animate: f ? "checked" : "unchecked",
                  transition: { type: "spring", stiffness: 700, damping: 30 },
                  variants: {
                    checked: { x: fe - ne - xe },
                    unchecked: { x: xe }
                  },
                  style: {
                    width: ne,
                    height: ne,
                    borderRadius: "50%",
                    position: "absolute",
                    boxShadow: V.light.primary,
                    backgroundColor: o && !f ? E.RubyCopperhead : B.light.secondary
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
je.displayName = "FormField.Switch";
const Ue = s.memo(
  ({
    style: e,
    fullWidth: t,
    autoComplete: r = "off",
    required: o = !1,
    isError: n = !1,
    disabled: i = !1,
    name: l,
    value: c,
    label: d,
    helpText: u,
    ...p
  }) => {
    const { isFocused: h, handleFocus: m, handleBlur: f } = Y(), { commonStyles: x } = D({
      fullWidth: t,
      isDisabled: i,
      isError: n,
      isFocused: h
    });
    return /* @__PURE__ */ a(
      j,
      {
        label: d,
        required: o,
        disabled: i,
        isError: n,
        fullWidth: t,
        helpText: u,
        children: /* @__PURE__ */ a(
          "input",
          {
            type: "text",
            name: l,
            value: c,
            autoComplete: r,
            disabled: i,
            onFocus: i ? void 0 : m,
            onBlur: i ? void 0 : f,
            style: {
              boxSizing: "border-box",
              ...x,
              ...e
            },
            ...p
          }
        )
      }
    );
  }
);
Ue.displayName = "FormField.Text";
const qe = s.memo(
  ({
    style: e,
    fullWidth: t,
    required: r = !1,
    isError: o = !1,
    disabled: n = !1,
    rows: i = 3,
    name: l,
    value: c,
    label: d,
    helpText: u,
    ...p
  }) => {
    const { isFocused: h, handleFocus: m, handleBlur: f } = Y(), { commonStyles: x } = D({
      fullWidth: t,
      isDisabled: n,
      isError: o,
      isFocused: h
    });
    return /* @__PURE__ */ a(
      j,
      {
        label: d,
        required: r,
        disabled: n,
        isError: o,
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
            rows: i,
            style: {
              boxSizing: "border-box",
              resize: "none",
              ...x,
              ...e
            },
            ...p
          }
        )
      }
    );
  }
);
qe.displayName = "FormField.Textarea";
const Ht = s.memo(({ children: e, gap: t = 8, style: r, ...o }) => /* @__PURE__ */ a("form", { style: { width: "100%", ...r }, ...o, children: /* @__PURE__ */ a(L.Flex, { column: !0, gap: t, children: e }) }));
Ht.displayName = "Form";
const qt = {
  Text: Ue,
  Textarea: qe,
  Number: Be,
  Password: Ne,
  Checkbox: ze,
  Switch: je,
  Radio: We,
  Select: _e
}, Xe = s.memo(({ children: e, style: t, ...r }) => /* @__PURE__ */ a(
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
Xe.displayName = "Layout.Footer";
const K = {
  headerHeight: 60,
  footerHeight: 80,
  sideWidth: 300
}, Ye = s.createContext(K);
function ue() {
  const e = s.useContext(Ye);
  if (e === void 0)
    throw new Error("useLayoutContext must be used within a LayoutProvider");
  return e;
}
const Qe = s.memo(({ children: e, style: t, ...r }) => {
  const { footerHeight: o } = ue();
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
Qe.displayName = "Layout.Footer";
const Je = s.memo(({ children: e, style: t, ...r }) => {
  const { headerHeight: o } = ue();
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
Je.displayName = "Layout.Header";
const Ze = s.memo(
  ({
    children: e,
    maxBreakpoint: t = C.xl,
    headerHeight: r = K.headerHeight,
    footerHeight: o = K.footerHeight,
    sideWidth: n = K.sideWidth
  }) => {
    const i = s.useMemo(
      () => ({ headerHeight: r, footerHeight: o, sideWidth: n }),
      [r, o, n]
    );
    return (
      // eslint-disable-next-line react-x/no-context-provider
      /* @__PURE__ */ a(Ye.Provider, { value: i, children: /* @__PURE__ */ a(Pe, { breakpoint: t, children: e }) })
    );
  }
);
Ze.displayName = "Layout.Provider";
const Ke = s.memo(({ children: e, style: t, ...r }) => {
  const { headerHeight: o, sideWidth: n } = ue();
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
Ke.displayName = "Layout.Side";
const Xt = {
  Provider: Ze,
  Header: Je,
  Side: Ke,
  Content: Xe,
  Footer: Qe
}, et = s.memo(
  ({ children: e, style: t, isOpen: r, onClose: o, maskClosable: n = !0, maxBreakpoint: i = C.xs }) => {
    const { themeMode: l } = k.useThemeMode();
    return /* @__PURE__ */ a($, { children: r && /* @__PURE__ */ a(
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
          backgroundColor: G(B[l].primary, 0.5),
          backdropFilter: "blur(2px)",
          opacity: r ? 1 : 0
        },
        children: /* @__PURE__ */ a(
          I.div,
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
              width: N[i],
              maxWidth: N[i]
            },
            children: /* @__PURE__ */ a(X, { style: { width: "100%", ...t }, children: e })
          }
        )
      }
    ) });
  }
);
et.displayName = "Modal";
const tt = s.memo(
  ({
    style: e,
    isOpen: t,
    onClose: r,
    maskClosable: o = !1,
    maxBreakpoint: n = C.xs,
    title: i,
    description: l,
    isConformLoading: c = !1,
    cancelText: d = "Cancel",
    confirmText: u = "Confirm",
    onCancel: p,
    onConfirm: h
  }) => {
    const m = s.useCallback(async () => {
      await p(), r();
    }, [p, r]), f = s.useCallback(async () => {
      await h(), r();
    }, [h, r]);
    return /* @__PURE__ */ b(et, { isOpen: t, onClose: r, style: e, maskClosable: o, maxBreakpoint: n, children: [
      /* @__PURE__ */ a(T.Title, { as: "h5", text: i }),
      /* @__PURE__ */ a(T.Paragraph, { style: { padding: "8px 0 24px" }, children: l }),
      /* @__PURE__ */ b(L.Flex, { row: !0, gap: 8, style: { justifyContent: "flex-end" }, children: [
        /* @__PURE__ */ a(
          se,
          {
            variant: "outlined",
            text: d,
            onClick: () => void m(),
            isDisabled: c
          }
        ),
        /* @__PURE__ */ a(
          se,
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
tt.displayName = "Modals.Confirm";
const Yt = {
  Confirm: tt
}, zt = s.memo(({ children: e }) => {
  const [t, r] = s.useState(!1);
  return s.useEffect(() => {
    r(!0);
  }, []), t ? /* @__PURE__ */ a(ie, { children: e }) : null;
});
zt.displayName = "NoSSR";
const Bt = s.memo(({ position: e = "top-center", offset: t = 0, collapsable: r = !1 }) => {
  const { isDarkThemeMode: o } = k.useThemeMode();
  return /* @__PURE__ */ a(
    ut,
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
        success: /* @__PURE__ */ a(R, { icon: "solar:shield-check-line-duotone", color: "success" }),
        error: /* @__PURE__ */ a(R, { icon: "solar:shield-cross-line-duotone", color: "error" }),
        warning: /* @__PURE__ */ a(R, { icon: "solar:shield-warning-line-duotone", color: "warning" }),
        info: /* @__PURE__ */ a(R, { icon: "solar:info-circle-line-duotone", color: "info" })
      }
    }
  );
});
Bt.displayName = "Notification";
function Qt(e) {
  const t = {
    description: e.description
  };
  return e.type === "success" ? Q.success(e.title, t) : e.type === "error" ? Q.error(e.title, t) : e.type === "warning" ? Q.warning(e.title, t) : Q.info(e.title, t);
}
const ot = s.memo(({ children: e, targetElementID: t }) => {
  const [r, o] = s.useState(null);
  return s.useEffect(() => {
    const n = document.getElementById(t);
    n && o(n);
  }, [t]), r ? ht(/* @__PURE__ */ a(ie, { children: e }), r, t) : null;
});
ot.displayName = "PortalRender";
const Jt = {
  Render: ot
}, rt = s.memo(({ height: e = 8 }) => {
  const t = ct(), { themeMode: r } = k.useThemeMode(), { themeColor: o } = k.useThemeColor(), n = s.useRef(null), [i, l] = s.useState(0);
  return s.useEffect(() => {
    const c = () => {
      if (n.current) {
        const d = n.current.offsetWidth, u = d * 0.3;
        l(d - u);
      }
    };
    return c(), window.addEventListener("resize", c), () => window.removeEventListener("resize", c);
  }, []), s.useEffect(() => {
    if (i === 0) return;
    (async () => {
      for (; ; )
        await t.start({ x: [0, i], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } }), await t.start({ x: [i, 0], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } });
    })();
  }, [t, i]), /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      style: {
        position: "relative",
        width: "100%",
        height: e,
        overflow: "hidden",
        backgroundColor: G(o, 0.2),
        borderRadius: e / 2,
        boxShadow: V[r].tertiary
      },
      children: /* @__PURE__ */ a(
        I.div,
        {
          animate: t,
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "50%",
            backgroundImage: `linear-gradient(45deg, ${G(o, 0.15)} 0%, ${ee(o, 0.1)} 90%)`,
            borderRadius: e / 2
          }
        }
      )
    }
  );
});
rt.displayName = "Progress.LoadingBar";
const nt = s.memo(({ height: e = 8 }) => {
  const { scrollYProgress: t } = dt(), { themeColor: r } = k.useThemeColor();
  return /* @__PURE__ */ a(
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
        backgroundImage: `linear-gradient(45deg, ${ee(r, 0.2)} 0%, ${G(r, 0.15)} 90%)`,
        height: e,
        borderTopRightRadius: "16px",
        borderBottomRightRadius: "16px"
      }
    }
  );
});
nt.displayName = "Progress.Scrollbar";
const Zt = {
  Scrollbar: nt,
  LoadingBar: rt
}, Nt = s.memo(
  ({
    tabs: e,
    defaultActiveIndex: t = 0,
    onChange: r,
    variant: o = "pills",
    tabContainerStyle: n,
    tabItemContainerStyle: i,
    tabItemStyle: l,
    tabIndicatorStyle: c,
    tabContentStyle: d
  }) => {
    const { themeMode: u } = k.useThemeMode(), { themeColor: p } = k.useThemeColor(), [h, m] = s.useState(!1), [f, x] = s.useState(t), [w, g] = s.useState({}), y = s.useRef([]), O = s.useCallback(() => {
      if (y.current[f]) {
        const M = y.current[f];
        if (M) {
          const z = !!e[f].icon, { offsetLeft: A, offsetWidth: oe } = M;
          g({
            left: A,
            width: oe + (h && z ? 24 : 0)
          });
        }
      }
    }, [f, o, e, h]);
    s.useLayoutEffect(() => (m(!0), () => {
      m(!1);
    }), []), s.useEffect(() => {
      O();
    }, [O]), s.useEffect(() => {
      const M = requestAnimationFrame(() => {
        O();
      });
      return () => cancelAnimationFrame(M);
    }, [f, e.length, O]);
    const P = s.useCallback(
      (M, z) => {
        m(!1), s.startTransition(() => {
          x(M);
        }), r(M, z);
      },
      [r]
    );
    return /* @__PURE__ */ b(L.Flex, { column: !0, gap: 0, style: { width: "100%", ...n }, children: [
      /* @__PURE__ */ b(
        L.Flex,
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
              borderBottomColor: _[u].secondary
            },
            ...i
          },
          children: [
            e.map((M, z) => /* @__PURE__ */ b(
              I.button,
              {
                ref: (A) => {
                  A && (y.current[z] = A);
                },
                onClick: () => P(z, M),
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
                  M.icon && /* @__PURE__ */ a(
                    R,
                    {
                      icon: M.icon,
                      width: 20,
                      style: {
                        marginRight: "8px",
                        color: z === f ? p : "inherit"
                      }
                    }
                  ),
                  /* @__PURE__ */ a(
                    T.Text,
                    {
                      text: M.label,
                      style: {
                        color: z === f ? p : "inherit"
                      }
                    }
                  )
                ]
              },
              M.key || z
            )),
            /* @__PURE__ */ a(
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
                    boxShadow: V[u].tertiary
                  },
                  ...o === "underline" && {
                    bottom: "-2px",
                    height: "3px",
                    background: p,
                    borderRadius: "4px"
                  },
                  ...c
                }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ a($, { mode: "wait", children: e[f] && /* @__PURE__ */ a(
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
          children: e[f].content
        },
        f
      ) })
    ] });
  }
);
Nt.displayName = "Tab";
const st = s.memo(({ children: e, isOpen: t }) => /* @__PURE__ */ a($, { initial: !1, children: t && /* @__PURE__ */ a(
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
st.displayName = "Transitions.Collapse";
const Kt = {
  Collapse: st
};
export {
  B as BackgroundColors,
  _ as BorderColors,
  C as BreakPointName,
  se as Button,
  Re as Buttons,
  X as Card,
  Ut as Cards,
  Pe as Container,
  Rt as Drawer,
  Ht as Form,
  qt as FormField,
  R as Icon,
  Xt as Layout,
  me as Menu,
  et as Modal,
  Yt as Modals,
  zt as NoSSR,
  Bt as Notification,
  $e as Popover,
  Jt as Portal,
  Zt as Progress,
  U as SemanticColors,
  V as Shadows,
  L as Space,
  Nt as Tab,
  v as TextColors,
  k as Theme,
  N as ThemeBreakPoint,
  E as ThemeColor,
  S as ThemeMode,
  Kt as Transitions,
  T as Typography,
  W as TypographySize,
  Z as TypographySizeName,
  ft as getDarkerHex,
  ee as getLighterHex,
  G as getOpacityHex,
  jt as getSystemThemeMode,
  Gt as getThemeColors,
  le as hexNormalize,
  be as hexToHsl,
  ye as hexToRgb,
  ke as hslToHex,
  Qt as notify,
  mt as rgbToHex,
  Y as useElementFocus,
  Et as useElementHover,
  It as useHandler
};
