import { jsx as l, jsxs as S, Fragment as X } from "react/jsx-runtime";
import s from "react";
import { Icon as xe } from "@iconify/react";
import { AnimatePresence as L, motion as v, useAnimation as be, useScroll as ye } from "framer-motion";
import { Toaster as Me, toast as z } from "sonner";
import { createPortal as ke } from "react-dom";
const H = {
  success: "#4caf50",
  error: "#f44336",
  warning: "#ff9800",
  info: "#2196f3"
}, O = {
  dark: {
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
  light: {
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
}, E = {
  dark: {
    primary: "#181818",
    // 主背景
    secondary: "#242424"
    // 卡片/面板背景
  },
  light: {
    primary: "#ffffff",
    // 主背景
    secondary: "#f8f9fa"
    // 卡片/面板背景
  }
}, F = {
  dark: {
    primary: "rgba(255, 255, 255, 0.24)",
    secondary: "rgba(255, 255, 255, 0.10)"
  },
  light: {
    primary: "rgba(38, 85, 115, 0.15)",
    secondary: "rgba(0, 0, 0, 0.15)"
  }
};
var g = /* @__PURE__ */ ((e) => (e.xs = "xs", e.sm = "sm", e.md = "md", e.lg = "lg", e.xl = "xl", e.xxl = "xxl", e))(g || {});
const M = {
  xs: 444,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
  xxl: 2560
};
var W = /* @__PURE__ */ ((e) => (e.RubyCopperhead = "#DC2626", e.GarnetViper = "#B91C1C", e.BloodstoneAdder = "#7F1D1D", e.TopazCoral = "#EA580C", e.AmberRattlesnake = "#F59E0B", e.GoldenLanceHead = "#FBBF24", e.TopazMamushi = "#FACC15", e.EmeraldMamba = "#059669", e.MalachitePython = "#10B981", e.JadeBoomslang = "#22C55E", e.PeridotGaboonViper = "#84CC16", e.TurquoiseFerDeLance = "#06B6D4", e.SapphireCobra = "#2563EB", e.LapisLazuliSeaSnake = "#1D4ED8", e.AmethystAsp = "#7C3AED", e.AlexandriteAnaconda = "#7E22CE", e.FluoriteElapid = "#A855F7", e.TourmalineStiletto = "#DB2777", e.RoseQuartzDeathAdder = "#EC4899", e.MorganiteCoralSnake = "#F472B6", e.GraphitePuffAdder = "#1F2937", e.ObsidianBlackMamba = "#374151", e.HematiteHognose = "#6B7280", e.SmokyQuartzSandViper = "#9CA3AF", e))(W || {}), y = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e))(y || {});
const Y = {
  dark: {
    // 标准阴影 - 卡片、面板
    primary: `
      0px 0px 4px 0px rgba(255, 255, 255, 0.9),
      0px 0px 2px -1px rgba(255, 255, 255, 0.7)
    `,
    // 基础阴影 - 按钮、小卡片
    secondary: `
      0px 0px 4px 0px rgba(255, 255, 255, 0.10)
    `,
    // 内阴影
    inset: `
      inset 0px 2px 4px 0px rgba(255, 255, 255, 0.7)
    `
  },
  light: {
    // 标准阴影 - 卡片、面板
    primary: `
      0px 0px 4px 0px rgba(0, 0, 0, 0.4),
      0px 0px 2px -1px rgba(0, 0, 0, 0.25)
    `,
    // 基础阴影 - 按钮、小卡片
    secondary: `
      0px 0px 4px 0px rgba(0, 0, 0, 0.3)
    `,
    // 内阴影
    inset: `
      inset 0px 2px 4px 0px rgba(0, 0, 0, 0.3)
    `
  }
};
var D = /* @__PURE__ */ ((e) => (e.h1 = "h1", e.h2 = "h2", e.h3 = "h3", e.h4 = "h4", e.h5 = "h5", e.h6 = "h6", e.text = "text", e.strong = "strong", e.small = "small", e))(D || {});
const T = {
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
  small: "0.875rem"
  // 14px
}, qe = (e) => ({
  background: E[e],
  border: F[e],
  text: O[e]
});
function we() {
  return typeof window < "u" ? window.matchMedia("(prefers-color-scheme: dark)").matches : !1;
}
function Xe() {
  return we() ? y.Dark : y.Light;
}
function _(e) {
  return e = e.replace("#", ""), e.length === 3 && (e = e.split("").map((o) => o + o).join("")), `#${e}`;
}
function Q(e) {
  e = e.replace("#", "");
  const o = parseInt(e, 16), n = o >> 16 & 255, t = o >> 8 & 255, r = o & 255;
  return { r: n, g: t, b: r };
}
function Te(e, o, n) {
  const t = (r) => {
    const i = r.toString(16);
    return i.length === 1 ? "0" + i : i;
  };
  return `#${t(e)}${t(o)}${t(n)}`;
}
function J(e) {
  const { r: o, g: n, b: t } = Q(_(e)), r = o / 255, i = n / 255, a = t / 255, c = Math.max(r, i, a), d = Math.min(r, i, a), h = c - d;
  let p = 0;
  h !== 0 && (c === r ? p = (i - a) / h % 6 : c === i ? p = (a - r) / h + 2 : p = (r - i) / h + 4, p *= 60, p < 0 && (p += 360));
  const u = (c + d) / 2, x = h === 0 ? 0 : h / (1 - Math.abs(2 * u - 1));
  return { h: p, s: x, l: u };
}
function Z(e, o, n) {
  const t = (1 - Math.abs(2 * n - 1)) * o, r = t * (1 - Math.abs(e / 60 % 2 - 1)), i = n - t / 2;
  let a = 0, c = 0, d = 0;
  return e >= 0 && e < 60 ? [a, c, d] = [t, r, 0] : e < 120 ? [a, c, d] = [r, t, 0] : e < 180 ? [a, c, d] = [0, t, r] : e < 240 ? [a, c, d] = [0, r, t] : e < 300 ? [a, c, d] = [r, 0, t] : [a, c, d] = [t, 0, r], Te(Math.round((a + i) * 255), Math.round((c + i) * 255), Math.round((d + i) * 255));
}
function K(e, o) {
  const { h: n, s: t, l: r } = J(e);
  return Z(n, t, Math.max(0, r - o));
}
function j(e, o) {
  const { h: n, s: t, l: r } = J(e);
  return Z(n, t, Math.min(1, r + o));
}
function R(e, o) {
  const { r: n, g: t, b: r } = Q(_(e));
  o > 1 && (o = 1), o < 0 && (o = 0);
  const i = Math.min(1, Math.max(0, o));
  return `rgba(${n}, ${t}, ${r}, ${i})`;
}
const ee = s.memo(() => (ve(), null));
ee.displayName = "Theme.InjectToHTML";
function ve() {
  const { themeColor: e } = m.useThemeColor(), o = s.useMemo(
    () => ({
      light: j(e, 0.2),
      dark: K(e, 0.8),
      origin: _(e),
      opacity: R(e, 0.6)
    }),
    [e]
  );
  s.useEffect(() => {
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
const G = s.createContext(void 0), Ce = y.Light, Se = W.EmeraldMamba, Ee = {
  THEME_MODE: "VENOMOUS_UI__THEME_MODE",
  THEME_COLOR: "VENOMOUS_UI__THEME_COLOR"
};
function Re({
  children: e,
  defaultThemeMode: o = Ce,
  defaultThemeColor: n = Se,
  storageKey: t = Ee
}) {
  const [r, i] = s.useState(!1), [a, c] = s.useState(o), [d, h] = s.useState(n), p = s.useCallback(
    (f) => {
      f !== a && c(f);
    },
    [a]
  ), u = s.useCallback(() => {
    c((f) => f === y.Dark ? y.Light : y.Dark);
  }, []), x = s.useCallback(() => {
    c(o);
  }, [o]), b = s.useCallback(
    (f) => {
      f !== d && h(f);
    },
    [d]
  ), w = s.useCallback(() => {
    h(n);
  }, [n]);
  s.useEffect(() => {
    if (typeof window < "u") {
      i(!0);
      const f = localStorage.getItem(t.THEME_MODE);
      f && Object.values(y).includes(f) && c(f);
      const B = localStorage.getItem(t.THEME_COLOR);
      B && Object.values(W).includes(B) && h(B);
    }
  }, [t]), s.useEffect(() => {
    typeof window < "u" && r && (localStorage.setItem(t.THEME_MODE, a), localStorage.setItem(t.THEME_COLOR, d));
  }, [r, t, a, d]);
  const $ = s.useMemo(
    () => ({
      themeMode: a,
      setThemeMode: p,
      toggleThemeMode: u,
      resetThemeMode: x,
      isDarkThemeMode: a === y.Dark,
      themeColor: d,
      setThemeColor: b,
      resetThemeColor: w
    }),
    [a, p, u, x, d, b, w]
  );
  return /* @__PURE__ */ l(G.Provider, { value: $, children: e });
}
function Ie() {
  const [e, o] = s.useState(g.xs);
  return s.useEffect(() => {
    const n = () => {
      const r = window.innerWidth;
      return r >= M.xxl ? g.xxl : r >= M.xl ? g.xl : r >= M.lg ? g.lg : r >= M.md ? g.md : r >= M.sm ? g.sm : g.xs;
    }, t = () => {
      o(n());
    };
    return t(), window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
  }, []), {
    screenSize: e
  };
}
function Be() {
  const e = s.useContext(G);
  if (e === void 0)
    throw new Error("useThemeColor must be used within a ThemeModeProvider");
  return {
    themeColor: e.themeColor,
    setThemeColor: e.setThemeColor,
    resetThemeColor: e.resetThemeColor
  };
}
function He() {
  const e = s.useContext(G);
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
const m = {
  Provider: Re,
  InjectToHTML: ee,
  useThemeMode: He,
  useThemeColor: Be,
  useThemeBreakpoint: Ie
}, k = s.memo(({ style: e, icon: o, width: n = 20, ...t }) => {
  const { themeMode: r } = m.useThemeMode(), i = s.useMemo(() => O[r].primary, [r]);
  return /* @__PURE__ */ l(
    xe,
    {
      ssr: !0,
      icon: o,
      style: {
        width: n,
        minWidth: n,
        height: n,
        minHeight: n,
        flexShrink: 0,
        display: "inline-flex",
        color: i,
        ...e
      },
      ...t
    }
  );
});
k.displayName = "Icon";
function te({
  isLoading: e,
  isDisabled: o,
  variant: n,
  semanticColor: t
}) {
  const { themeColor: r } = m.useThemeColor(), { themeMode: i } = m.useThemeMode(), a = s.useMemo(() => {
    let u = "";
    if (e || o)
      return u = E[i].secondary, u;
    switch (n) {
      case "contained":
        u = t ? H[t] : r;
        break;
      case "outlined":
        u = E[i].secondary;
        break;
      case "ghost":
      default:
        u = "transparent";
        break;
    }
    return u;
  }, [n, r, i, e, o, t]), c = s.useMemo(() => {
    let u = "";
    if (e || o)
      return u = F[i].secondary, u;
    switch (n) {
      case "contained":
        u = t ? j(H[t], 0.25) : R(r, 0.25);
        break;
      case "outlined":
        u = t ? H[t] : r;
        break;
      case "ghost":
      default:
        u = F[i].secondary;
        break;
    }
    return u;
  }, [n, r, i, e, o, t]), d = s.useMemo(() => {
    let u = "";
    if (e || o)
      return u = O[i].disabled, u;
    switch (n) {
      case "contained":
        u = "#ffffff";
        break;
      case "outlined":
        u = t ? H[t] : r;
        break;
      case "ghost":
      default:
        u = O[i].primary;
        break;
    }
    return u;
  }, [n, r, i, e, o, t]), h = s.useMemo(() => Y[i].secondary, [n, r, i]);
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
        fontSize: T.text,
        fontWeight: "bold",
        cursor: e ? "wait" : o ? "not-allowed" : "pointer",
        borderRadius: "8px",
        borderWidth: 1.5,
        borderColor: c,
        boxShadow: h,
        backgroundColor: a,
        color: d
      }),
      [e, o, c, a, d, h]
    )
  };
}
const oe = s.memo(
  ({
    type: e = "button",
    style: o,
    variant: n = "contained",
    isLoading: t,
    isDisabled: r,
    icon: i,
    iconWidth: a = 20,
    semanticColor: c,
    ...d
  }) => {
    const { buttonStyles: h } = te({
      isLoading: t,
      isDisabled: r || d.disabled,
      variant: n,
      semanticColor: c
    });
    return /* @__PURE__ */ l(
      "button",
      {
        type: e,
        disabled: t || r,
        style: {
          WebkitTapHighlightColor: "transparent",
          ...h,
          padding: 0,
          ...o
        },
        ...d,
        children: /* @__PURE__ */ l(k, { icon: t ? "eos-icons:loading" : i, width: a, style: { color: h.color } })
      }
    );
  }
);
oe.displayName = "Buttons.Icon";
const re = s.memo(({ style: e, text: o, ...n }) => /* @__PURE__ */ l(
  "code",
  {
    style: {
      color: W.TourmalineStiletto,
      backgroundColor: "#E7E9EB",
      border: "1px solid #CCCCCC",
      borderRadius: "4px",
      padding: "2px 4px",
      fontSize: T.small,
      fontWeight: 600,
      ...e
    },
    ...n,
    children: o
  }
));
re.displayName = "Typography.Code";
function V({ ellipsis: e = 0, semanticColor: o }) {
  const { themeMode: n } = m.useThemeMode(), t = s.useMemo(() => o ? H[o] : O[n].primary, [n, o]), r = s.useMemo(() => e ? {
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
const ne = s.memo(
  ({ children: e, style: o, ellipsis: n = 0, semanticColor: t, ...r }) => {
    const { fontColor: i, ellipsisStyles: a } = V({ ellipsis: n, semanticColor: t });
    return /* @__PURE__ */ l(
      "p",
      {
        style: {
          boxSizing: "border-box",
          margin: 0,
          width: "100%",
          fontSize: T.text,
          lineHeight: 1.5,
          color: i,
          ...a,
          ...o
        },
        ...r,
        children: e
      }
    );
  }
);
ne.displayName = "Typography.Paragraph";
const q = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, A = {
  span: "span",
  small: "small",
  strong: "strong"
}, ie = s.memo(
  ({ style: e, text: o, as: n = A.span, semanticColor: t, ...r }) => {
    const { fontColor: i } = V({ ellipsis: 0, semanticColor: t });
    return n === A.strong ? /* @__PURE__ */ l(
      "strong",
      {
        style: {
          fontSize: T[D.strong],
          fontWeight: "bold",
          color: i,
          ...e
        },
        ...r,
        children: o
      }
    ) : n === A.small ? /* @__PURE__ */ l(
      "small",
      {
        style: {
          fontSize: T[D.small],
          color: i,
          ...e
        },
        ...r,
        children: o
      }
    ) : /* @__PURE__ */ l(
      "span",
      {
        style: {
          fontSize: T[D.text],
          fontWeight: "normal",
          color: i,
          ...e
        },
        ...r,
        children: o
      }
    );
  }
);
ie.displayName = "Typography.Text";
const se = s.memo(
  ({ text: e, as: o = q.h4, ellipsis: n = 0, style: t, semanticColor: r, ...i }) => {
    const a = s.useMemo(() => q[o], [o]), c = s.useMemo(() => T[o], [o]), { fontColor: d, ellipsisStyles: h } = V({ ellipsis: n, semanticColor: r });
    return /* @__PURE__ */ l(
      a,
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
          ...h,
          ...t
        },
        ...i,
        children: e
      }
    );
  }
);
se.displayName = "Typography.Title";
const P = {
  Title: se,
  Text: ie,
  Code: re,
  Paragraph: ne
}, Oe = s.memo(
  ({
    type: e = "button",
    style: o,
    text: n,
    variant: t = "contained",
    isLoading: r,
    isDisabled: i,
    icon: a,
    iconPosition: c = "start",
    iconWidth: d = 20,
    semanticColor: h,
    ...p
  }) => {
    const { buttonStyles: u } = te({
      isLoading: r,
      isDisabled: i || p.disabled,
      variant: t,
      semanticColor: h
    });
    return /* @__PURE__ */ S(
      "button",
      {
        type: e,
        disabled: r || i,
        style: {
          flexDirection: c === "start" ? "row" : "row-reverse",
          WebkitTapHighlightColor: "transparent",
          ...u,
          ...o
        },
        ...p,
        children: [
          a && /* @__PURE__ */ l(
            k,
            {
              icon: a,
              width: d,
              style: {
                marginLeft: c === "start" ? "0px" : "8px",
                marginRight: c === "end" ? "0px" : "8px"
              }
            }
          ),
          /* @__PURE__ */ l(P.Text, { text: n, style: { color: "inherit" } }),
          /* @__PURE__ */ l(
            "div",
            {
              style: {
                display: r ? "flex" : "none",
                borderRadius: "4px",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: u.backgroundColor
              },
              children: /* @__PURE__ */ l(k, { icon: "svg-spinners:270-ring-with-bg", width: 24 })
            }
          )
        ]
      }
    );
  }
);
Oe.displayName = "Button";
const ze = {
  Icon: oe
}, ae = s.memo(({ children: e, style: o, row: n = !0, column: t = !1, gap: r = "8px", ...i }) => /* @__PURE__ */ l(
  "div",
  {
    style: {
      boxSizing: "border-box",
      display: "flex",
      width: "100%",
      flexDirection: t ? "column" : "row",
      alignItems: n ? "flex-start" : o == null ? void 0 : o.alignItems,
      ...Array.isArray(r) ? { rowGap: r[0], columnGap: r[1] } : { gap: r },
      position: "relative",
      ...o
    },
    ...i,
    children: e
  }
));
ae.displayName = "Space.Flex";
const le = s.memo(({ children: e, style: o, columns: n = 1, spacing: t = 16, ...r }) => {
  const { screenSize: i } = m.useThemeBreakpoint(), a = s.useMemo(() => De(n, i), [n, i]), c = s.useMemo(() => Le(t, i), [t, i]);
  return /* @__PURE__ */ l(
    "div",
    {
      style: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: `repeat(${a}, 1fr)`,
        gap: `${c}px`,
        ...o
      },
      ...r,
      children: e
    }
  );
});
le.displayName = "Space.Grid";
const C = Object.keys(g);
function De(e = 1, o) {
  if (typeof e == "number")
    return e;
  const n = C.indexOf(o);
  for (let t = n; t < C.length; t++) {
    const r = e[C[t]];
    if (r !== void 0) return r;
  }
  return 1;
}
function Le(e = 16, o) {
  if (typeof e == "number")
    return e;
  const n = C.indexOf(o);
  for (let t = n; t < C.length; t++) {
    const r = e[C[t]];
    if (r !== void 0) return r;
  }
  return 16;
}
const N = {
  Flex: ae,
  Grid: le
}, U = {
  div: "div",
  article: "article"
}, I = s.memo(
  ({
    children: e,
    style: o,
    isTransparent: n = !1,
    isFrostedGlass: t = !1,
    isOutline: r = !1,
    as: i = U.div,
    ...a
  }) => {
    const { themeMode: c } = m.useThemeMode();
    return /* @__PURE__ */ l(
      i,
      {
        style: {
          boxSizing: "border-box",
          borderRadius: "8px",
          padding: "16px",
          outlineWidth: 1.5,
          outlineStyle: "solid",
          outlineColor: r ? F[c].secondary : "transparent",
          backgroundColor: n ? "transparent" : E[c].secondary,
          boxShadow: r ? "none" : Y[c].primary,
          ...t && {
            backdropFilter: "blur(8px) brightness(0.8)",
            WebkitBackdropFilter: "blur(8px) brightness(0.8)"
          },
          ...o
        },
        ...a,
        children: e
      }
    );
  }
);
I.displayName = "Card";
const ce = s.memo(({ children: e, height: o = 300, width: n = 200, title: t, coverImage: r }) => /* @__PURE__ */ S(
  I,
  {
    as: U.article,
    style: {
      height: o,
      width: n,
      padding: "16px 24px",
      overflow: "hidden",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      backgroundColor: "transparent",
      backgroundImage: `url(${r})`,
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
        N.Flex,
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
          children: t && /* @__PURE__ */ l(
            P.Title,
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
ce.displayName = "Cards.Book";
function Fe() {
  const [e, o] = s.useState(!1), n = s.useCallback(() => o(!0), []), t = s.useCallback(() => o(!1), []), r = s.useCallback(() => o((i) => !i), []);
  return {
    isOpen: e,
    setIsOpen: o,
    open: n,
    close: t,
    toggle: r
  };
}
const de = s.memo(({ children: e, style: o, contentStyle: n, placement: t = "bottom", renderTrigger: r }) => {
  var u;
  const i = Fe(), a = s.useRef(null), c = s.useRef(null), d = s.useRef(null), [h, p] = s.useState({ top: 0, left: 0 });
  return s.useEffect(() => {
    const x = (b) => {
      var w;
      d.current && !d.current.contains(b.target) && !((w = c.current) != null && w.contains(b.target)) && i.close();
    };
    return i.isOpen && document.addEventListener("mousedown", x), () => {
      document.removeEventListener("mousedown", x);
    };
  }, [i]), s.useEffect(() => {
    if (i.isOpen && a.current && c.current && d.current) {
      const x = a.current.getBoundingClientRect(), b = c.current.getBoundingClientRect(), w = d.current.offsetWidth, $ = d.current.offsetHeight, f = b.top - x.top, B = b.left - x.left, me = t === "bottom" ? f + b.height + 8 : f - $ - 8, ge = B + b.width / 2 - w / 2;
      p({ top: me, left: ge });
    }
  }, [i.isOpen, t]), /* @__PURE__ */ S("div", { ref: a, style: { display: "inline-block", position: "relative", ...o }, children: [
    /* @__PURE__ */ l("div", { ref: c, onClick: i.toggle, style: { display: "inline-block" }, children: r(i.isOpen) }),
    /* @__PURE__ */ l(L, { children: i.isOpen && /* @__PURE__ */ l(
      v.div,
      {
        ref: d,
        initial: { opacity: 0, y: t === "bottom" ? -5 : 5 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: t === "bottom" ? -5 : 5 },
        transition: { duration: 0.2 },
        style: {
          position: "absolute",
          top: h.top,
          left: h.left,
          zIndex: 1e3,
          minWidth: (u = c.current) == null ? void 0 : u.offsetWidth
        },
        children: /* @__PURE__ */ l(
          I,
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
});
de.displayName = "Popover";
const ue = s.memo(({ children: e, title: o = "", description: n = "", renderMenu: t }) => /* @__PURE__ */ S(I, { as: U.article, style: { position: "relative" }, children: [
  (o || n) && /* @__PURE__ */ S(N.Flex, { column: !0, gap: 2, style: { paddingRight: "48px" }, children: [
    /* @__PURE__ */ l(P.Title, { as: "h6", text: o, ellipsis: 1 }),
    /* @__PURE__ */ l(P.Paragraph, { ellipsis: 3, children: n })
  ] }),
  /* @__PURE__ */ l(
    de,
    {
      placement: "bottom",
      renderTrigger: (r) => /* @__PURE__ */ l(ze.Icon, { icon: "solar:hamburger-menu-line-duotone", variant: "ghost", isDisabled: r }),
      style: { position: "absolute", top: "4px", right: "4px", zIndex: 1 },
      contentStyle: { transform: "translateY(-40px)" },
      children: t()
    }
  ),
  e && /* @__PURE__ */ l(N.Flex, { column: !0, children: e })
] }));
ue.displayName = "Cards.Product";
const Ye = {
  Book: ce,
  Product: ue
}, Pe = s.memo(({ children: e, breakpoint: o = g.lg, style: n, ...t }) => /* @__PURE__ */ l(
  "div",
  {
    style: {
      margin: "0 auto",
      width: "100%",
      maxWidth: M[o],
      ...n
    },
    ...t,
    children: e
  }
));
Pe.displayName = "Container";
const We = s.memo(
  ({ isOpen: e, onClose: o, children: n, position: t = "left", maskClosable: r = !0, width: i = 300, height: a = 300, style: c }) => {
    const { themeMode: d } = m.useThemeMode();
    return /* @__PURE__ */ S(X, { children: [
      /* @__PURE__ */ l(L, { children: e && /* @__PURE__ */ l(
        v.div,
        {
          onClick: r ? o : void 0,
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
            backgroundColor: R(E[d].primary, 0.5),
            backdropFilter: "blur(2px)",
            pointerEvents: e ? "auto" : "none"
          }
        }
      ) }),
      /* @__PURE__ */ l(L, { children: e && /* @__PURE__ */ l(
        v.div,
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
              width: i,
              height: "100svh"
            },
            ...t === "right" && {
              top: 0,
              right: 0,
              width: i,
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
          children: /* @__PURE__ */ l(
            I,
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
We.displayName = "Drawer";
const _e = s.memo(
  ({ children: e, style: o, isOpen: n, onClose: t, maskClosable: r = !0, maxBreakpoint: i = g.xs }) => {
    const { themeMode: a } = m.useThemeMode();
    return /* @__PURE__ */ l(L, { children: n && /* @__PURE__ */ l(
      v.div,
      {
        onClick: r ? t : void 0,
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
          backgroundColor: R(E[a].primary, 0.5),
          backdropFilter: "blur(2px)",
          opacity: n ? 1 : 0
        },
        children: /* @__PURE__ */ l(
          v.div,
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
              width: M[i],
              maxWidth: M[i]
            },
            children: /* @__PURE__ */ l(I, { style: { width: "100%", ...o }, children: e })
          }
        )
      }
    ) });
  }
);
_e.displayName = "Modal";
const $e = s.memo(({ position: e = "top-center", offset: o = 0, collapsable: n = !1 }) => {
  const { isDarkThemeMode: t } = m.useThemeMode();
  return /* @__PURE__ */ l(
    Me,
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
      icons: {
        success: /* @__PURE__ */ l(k, { icon: "solar:shield-check-line-duotone", color: "success" }),
        error: /* @__PURE__ */ l(k, { icon: "solar:shield-cross-line-duotone", color: "error" }),
        warning: /* @__PURE__ */ l(k, { icon: "solar:shield-warning-line-duotone", color: "warning" }),
        info: /* @__PURE__ */ l(k, { icon: "solar:info-circle-line-duotone", color: "info" })
      }
    }
  );
});
$e.displayName = "Notification";
function Qe(e) {
  const o = {
    description: e.description
  };
  return e.type === "success" ? z.success(e.title, o) : e.type === "error" ? z.error(e.title, o) : e.type === "warning" ? z.warning(e.title, o) : z.info(e.title, o);
}
const he = s.memo(({ children: e, targetElementID: o }) => {
  const [n, t] = s.useState(null);
  return s.useEffect(() => {
    const r = document.getElementById(o);
    r && t(r);
  }, [o]), n ? ke(/* @__PURE__ */ l(X, { children: e }), n, o) : null;
});
he.displayName = "PortalRender";
const Je = {
  Render: he
}, pe = s.memo(({ height: e = 8 }) => {
  const o = be(), { themeColor: n } = m.useThemeColor(), t = s.useRef(null), [r, i] = s.useState(0);
  return s.useEffect(() => {
    const a = () => {
      if (t.current) {
        const c = t.current.offsetWidth, d = c * 0.3;
        i(c - d);
      }
    };
    return a(), window.addEventListener("resize", a), () => window.removeEventListener("resize", a);
  }, []), s.useEffect(() => {
    if (r === 0) return;
    (async () => {
      for (; ; )
        await o.start({ x: [0, r], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } }), await o.start({ x: [r, 0], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } });
    })();
  }, [o, r]), /* @__PURE__ */ l(
    "div",
    {
      ref: t,
      style: {
        position: "relative",
        width: "100%",
        height: e,
        overflow: "hidden",
        backgroundColor: R(n, 0.2),
        borderRadius: e / 2,
        boxShadow: "rgba(0, 0, 0, 0.14) 0px 6px 10px 0px"
      },
      children: /* @__PURE__ */ l(
        v.div,
        {
          animate: o,
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "50%",
            backgroundColor: n,
            borderRadius: e / 2
          }
        }
      )
    }
  );
});
pe.displayName = "Progress.LoadingBar";
const fe = s.memo(({ height: e = 8 }) => {
  const { scrollYProgress: o } = ye(), { themeColor: n } = m.useThemeColor(), t = s.useMemo(
    () => ({
      light: j(n, 0.2),
      dark: K(n, 0.8),
      origin: _(n),
      opacity: R(n, 0.6)
    }),
    [n]
  );
  return /* @__PURE__ */ l(
    v.div,
    {
      style: {
        scaleX: o,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        originX: 0,
        zIndex: 1e4,
        backgroundImage: `linear-gradient(to right, ${t.light}, ${t.origin}, ${t.opacity})`,
        height: e,
        borderRadius: "8px"
      }
    }
  );
});
fe.displayName = "Progress.Scrollbar";
const Ze = {
  Scrollbar: fe,
  LoadingBar: pe
};
export {
  E as BackgroundColors,
  F as BorderColors,
  g as BreakPointName,
  Oe as Button,
  ze as Buttons,
  I as Card,
  Ye as Cards,
  Pe as Container,
  We as Drawer,
  k as Icon,
  _e as Modal,
  $e as Notification,
  de as Popover,
  Je as Portal,
  Ze as Progress,
  H as SemanticColors,
  N as Space,
  O as TextColors,
  m as Theme,
  M as ThemeBreakPoint,
  W as ThemeColor,
  y as ThemeMode,
  Y as ThemeShadow,
  P as Typography,
  T as TypographySize,
  D as TypographySizeName,
  K as getDarkerHex,
  j as getLighterHex,
  R as getOpacityHex,
  Xe as getSystemThemeMode,
  qe as getThemeColors,
  _ as hexNormalize,
  J as hexToHsl,
  Q as hexToRgb,
  Z as hslToHex,
  Qe as notify,
  Te as rgbToHex,
  Fe as useHandler
};
