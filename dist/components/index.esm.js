import { jsx as l, jsxs as v, Fragment as V } from "react/jsx-runtime";
import i from "react";
import { Icon as he } from "@iconify/react";
import { AnimatePresence as L, motion as C, useAnimation as fe, useScroll as pe } from "framer-motion";
import { Toaster as me, toast as H } from "sonner";
import { createPortal as ge } from "react-dom";
const k = i.memo(({ style: e, icon: o, width: n = 20, ...t }) => {
  const r = i.useMemo(() => "inherit", []);
  return /* @__PURE__ */ l(
    he,
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
        color: r,
        ...e
      },
      ...t
    }
  );
});
k.displayName = "Icon";
const z = {
  success: "#4caf50",
  error: "#f44336",
  warning: "#ff9800",
  info: "#2196f3"
}, P = {
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
}, w = {
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
}, D = {
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
const y = {
  xs: 444,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
  xxl: 2560
};
var _ = /* @__PURE__ */ ((e) => (e.RubyCopperhead = "#DC2626", e.GarnetViper = "#B91C1C", e.BloodstoneAdder = "#7F1D1D", e.TopazCoral = "#EA580C", e.AmberRattlesnake = "#F59E0B", e.GoldenLanceHead = "#FBBF24", e.TopazMamushi = "#FACC15", e.EmeraldMamba = "#059669", e.MalachitePython = "#10B981", e.JadeBoomslang = "#22C55E", e.PeridotGaboonViper = "#84CC16", e.TurquoiseFerDeLance = "#06B6D4", e.SapphireCobra = "#2563EB", e.LapisLazuliSeaSnake = "#1D4ED8", e.AmethystAsp = "#7C3AED", e.AlexandriteAnaconda = "#7E22CE", e.FluoriteElapid = "#A855F7", e.TourmalineStiletto = "#DB2777", e.RoseQuartzDeathAdder = "#EC4899", e.MorganiteCoralSnake = "#F472B6", e.GraphitePuffAdder = "#1F2937", e.ObsidianBlackMamba = "#374151", e.HematiteHognose = "#6B7280", e.SmokyQuartzSandViper = "#9CA3AF", e))(_ || {}), x = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e))(x || {});
const U = {
  dark: {
    // 基础阴影 - 按钮、小卡片
    sm: "0 0 2px 0 rgba(255, 255, 255, 0.8)",
    // 标准阴影 - 卡片、面板
    base: `
      0 1px 3px 0 rgba(255, 255, 255, 0.9),
      0 0px 2px -1px rgba(255, 255, 255, 0.7)
    `,
    // 内阴影
    inset: "inset 0 2px 4px 0 rgba(255, 255, 255, 0.7)"
  },
  light: {
    // 基础阴影 - 按钮、小卡片
    sm: "0 0 2px 0 rgba(0, 0, 0, 0.3)",
    // 标准阴影 - 卡片、面板
    base: `
      0 1px 3px 0 rgba(0, 0, 0, 0.4),
      0 0px 2px -1px rgba(0, 0, 0, 0.25)
    `,
    // 内阴影
    inset: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)"
  }
}, T = {
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
}, je = (e) => ({
  background: w[e],
  border: D[e],
  text: P[e]
});
function be() {
  return typeof window < "u" ? window.matchMedia("(prefers-color-scheme: dark)").matches : !1;
}
function Ge() {
  return be() ? x.Dark : x.Light;
}
function W(e) {
  return e = e.replace("#", ""), e.length === 3 && (e = e.split("").map((o) => o + o).join("")), `#${e}`;
}
function q(e) {
  e = e.replace("#", "");
  const o = parseInt(e, 16), n = o >> 16 & 255, t = o >> 8 & 255, r = o & 255;
  return { r: n, g: t, b: r };
}
function xe(e, o, n) {
  const t = (r) => {
    const s = r.toString(16);
    return s.length === 1 ? "0" + s : s;
  };
  return `#${t(e)}${t(o)}${t(n)}`;
}
function X(e) {
  const { r: o, g: n, b: t } = q(W(e)), r = o / 255, s = n / 255, a = t / 255, c = Math.max(r, s, a), u = Math.min(r, s, a), h = c - u;
  let f = 0;
  h !== 0 && (c === r ? f = (s - a) / h % 6 : c === s ? f = (a - r) / h + 2 : f = (r - s) / h + 4, f *= 60, f < 0 && (f += 360));
  const d = (c + u) / 2, m = h === 0 ? 0 : h / (1 - Math.abs(2 * d - 1));
  return { h: f, s: m, l: d };
}
function Q(e, o, n) {
  const t = (1 - Math.abs(2 * n - 1)) * o, r = t * (1 - Math.abs(e / 60 % 2 - 1)), s = n - t / 2;
  let a = 0, c = 0, u = 0;
  return e >= 0 && e < 60 ? [a, c, u] = [t, r, 0] : e < 120 ? [a, c, u] = [r, t, 0] : e < 180 ? [a, c, u] = [0, t, r] : e < 240 ? [a, c, u] = [0, r, t] : e < 300 ? [a, c, u] = [r, 0, t] : [a, c, u] = [t, 0, r], xe(Math.round((a + s) * 255), Math.round((c + s) * 255), Math.round((u + s) * 255));
}
function Y(e, o) {
  const { h: n, s: t, l: r } = X(e);
  return Q(n, t, Math.max(0, r - o));
}
function $(e, o) {
  const { h: n, s: t, l: r } = X(e);
  return Q(n, t, Math.min(1, r + o));
}
function E(e, o) {
  const { r: n, g: t, b: r } = q(W(e));
  o > 1 && (o = 1), o < 0 && (o = 0);
  const s = Math.min(1, Math.max(0, o));
  return `rgba(${n}, ${t}, ${r}, ${s})`;
}
const J = i.memo(() => (ye(), null));
J.displayName = "Theme.InjectToHTML";
function ye() {
  const { themeColor: e } = b.useThemeColor(), o = i.useMemo(
    () => ({
      light: $(e, 0.2),
      dark: Y(e, 0.8),
      origin: W(e),
      opacity: E(e, 0.6)
    }),
    [e]
  );
  i.useEffect(() => {
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
const A = i.createContext(void 0), ke = x.Light, Me = _.EmeraldMamba, we = {
  THEME_MODE: "VENOMOUS_UI__THEME_MODE",
  THEME_COLOR: "VENOMOUS_UI__THEME_COLOR"
};
function Te({
  children: e,
  defaultThemeMode: o = ke,
  defaultThemeColor: n = Me,
  storageKey: t = we
}) {
  const [r, s] = i.useState(!1), [a, c] = i.useState(o), [u, h] = i.useState(n), f = i.useCallback(
    (p) => {
      p !== a && c(p);
    },
    [a]
  ), d = i.useCallback(() => {
    c((p) => p === x.Dark ? x.Light : x.Dark);
  }, []), m = i.useCallback(() => {
    c(o);
  }, [o]), M = i.useCallback(
    (p) => {
      p !== u && h(p);
    },
    [u]
  ), B = i.useCallback(() => {
    h(n);
  }, [n]);
  i.useEffect(() => {
    if (typeof window < "u") {
      s(!0);
      const p = localStorage.getItem(t.THEME_MODE);
      p && Object.values(x).includes(p) && c(p);
      const I = localStorage.getItem(t.THEME_COLOR);
      I && Object.values(_).includes(I) && h(I);
    }
  }, [t]), i.useEffect(() => {
    typeof window < "u" && r && (localStorage.setItem(t.THEME_MODE, a), localStorage.setItem(t.THEME_COLOR, u));
  }, [r, t, a, u]);
  const O = i.useMemo(
    () => ({
      themeMode: a,
      setThemeMode: f,
      toggleThemeMode: d,
      resetThemeMode: m,
      isDarkThemeMode: a === x.Dark,
      themeColor: u,
      setThemeColor: M,
      resetThemeColor: B
    }),
    [a, f, d, m, u, M, B]
  );
  return /* @__PURE__ */ l(A.Provider, { value: O, children: e });
}
function Ce() {
  const [e, o] = i.useState(g.xs);
  return i.useEffect(() => {
    const n = () => {
      const r = window.innerWidth;
      return r >= y.xxl ? g.xxl : r >= y.xl ? g.xl : r >= y.lg ? g.lg : r >= y.md ? g.md : r >= y.sm ? g.sm : g.xs;
    }, t = () => {
      o(n());
    };
    return t(), window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
  }, []), {
    screenSize: e
  };
}
function Se() {
  const e = i.useContext(A);
  if (e === void 0)
    throw new Error("useThemeColor must be used within a ThemeModeProvider");
  return {
    themeColor: e.themeColor,
    setThemeColor: e.setThemeColor,
    resetThemeColor: e.resetThemeColor
  };
}
function ve() {
  const e = i.useContext(A);
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
  Provider: Te,
  InjectToHTML: J,
  useThemeMode: ve,
  useThemeColor: Se,
  useThemeBreakpoint: Ce
};
function Z({
  isLoading: e,
  isDisabled: o,
  variant: n,
  semanticColor: t
}) {
  const { themeColor: r } = b.useThemeColor(), { themeMode: s } = b.useThemeMode(), a = i.useMemo(() => {
    let d = "";
    if (e || o)
      return d = w[s].secondary, d;
    switch (n) {
      case "contained":
        d = t ? z[t] : r;
        break;
      case "outlined":
        d = w[s].secondary;
        break;
      case "ghost":
      default:
        d = w[s].primary;
        break;
    }
    return d;
  }, [n, r, s, e, o, t]), c = i.useMemo(() => {
    let d = "";
    if (e || o)
      return d = D[s].secondary, d;
    switch (n) {
      case "contained":
        d = t ? $(z[t], 0.25) : E(r, 0.25);
        break;
      case "outlined":
        d = t ? z[t] : r;
        break;
      case "ghost":
      default:
        d = D[s].secondary;
        break;
    }
    return d;
  }, [n, r, s, e, o, t]), u = i.useMemo(() => {
    let d = "";
    if (e || o)
      return d = P[s].disabled, d;
    switch (n) {
      case "contained":
        d = "#ffffff";
        break;
      case "outlined":
        d = t ? z[t] : r;
        break;
      case "ghost":
      default:
        d = P[s].primary;
        break;
    }
    return d;
  }, [n, r, s, e, o, t]), h = i.useMemo(() => U[s].sm, [n, r, s]);
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
        fontSize: T.text,
        fontWeight: "bold",
        cursor: e ? "wait" : o ? "not-allowed" : "pointer",
        borderRadius: "8px",
        borderWidth: 2,
        borderColor: c,
        boxShadow: h,
        backgroundColor: a,
        color: u
      }),
      [e, o, c, a, u, h]
    )
  };
}
const K = i.memo(
  ({
    type: e = "button",
    style: o,
    variant: n = "contained",
    isLoading: t,
    isDisabled: r,
    icon: s,
    iconWidth: a = 20,
    semanticColor: c,
    ...u
  }) => {
    const { buttonStyles: h } = Z({
      isLoading: t,
      isDisabled: r,
      variant: n,
      semanticColor: c
    });
    return /* @__PURE__ */ l(
      "button",
      {
        type: e,
        disabled: t || r,
        style: {
          padding: 0,
          WebkitTapHighlightColor: "transparent",
          ...h,
          ...o
        },
        ...u,
        children: /* @__PURE__ */ l(k, { icon: t ? "eos-icons:loading" : s, width: a })
      }
    );
  }
);
K.displayName = "Buttons.Icon";
const ee = i.memo(({ style: e, text: o, ...n }) => /* @__PURE__ */ l(
  "code",
  {
    style: {
      color: "#B71D18",
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
ee.displayName = "Typography.Code";
function j({ ellipsis: e = 0, semanticColor: o }) {
  const { themeMode: n } = b.useThemeMode(), t = i.useMemo(() => o ? z[o] : P[n].primary, [n, o]), r = i.useMemo(() => e ? {
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
const te = i.memo(
  ({ children: e, style: o, ellipsis: n = 0, semanticColor: t, ...r }) => {
    const { fontColor: s, ellipsisStyles: a } = j({ ellipsis: n, semanticColor: t });
    return /* @__PURE__ */ l(
      "p",
      {
        style: {
          boxSizing: "border-box",
          margin: 0,
          width: "100%",
          fontSize: T.text,
          lineHeight: 1.5,
          color: s,
          ...a,
          ...o
        },
        ...r,
        children: e
      }
    );
  }
);
te.displayName = "Typography.Paragraph";
const oe = i.memo(({ style: e, text: o, as: n = "span", semanticColor: t, ...r }) => {
  const { fontColor: s } = j({ ellipsis: 0, semanticColor: t });
  return n === "strong" ? /* @__PURE__ */ l(
    "strong",
    {
      style: {
        fontSize: T.text,
        fontWeight: "bold",
        color: s,
        ...e
      },
      ...r,
      children: o
    }
  ) : n === "small" ? /* @__PURE__ */ l(
    "small",
    {
      style: {
        fontSize: T.small,
        color: s,
        ...e
      },
      ...r,
      children: o
    }
  ) : /* @__PURE__ */ l(
    "span",
    {
      style: {
        fontSize: T.text,
        fontWeight: "normal",
        color: s,
        ...e
      },
      ...r,
      children: o
    }
  );
});
oe.displayName = "Typography.Text";
const G = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, re = i.memo(
  ({ text: e, as: o = G.h4, ellipsis: n = 0, style: t, semanticColor: r, ...s }) => {
    const a = i.useMemo(() => G[o], [o]), c = i.useMemo(() => T[o], [o]), { fontColor: u, ellipsisStyles: h } = j({ ellipsis: n, semanticColor: r });
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
          color: u,
          ...h,
          ...t
        },
        ...s,
        children: e
      }
    );
  }
);
re.displayName = "Typography.Title";
const F = {
  Title: re,
  Text: oe,
  Code: ee,
  Paragraph: te
}, Ee = i.memo(
  ({
    type: e = "button",
    style: o,
    text: n,
    variant: t = "contained",
    isLoading: r,
    isDisabled: s,
    icon: a,
    iconPosition: c = "start",
    iconWidth: u = 20,
    semanticColor: h,
    ...f
  }) => {
    const { buttonStyles: d } = Z({
      isLoading: r,
      isDisabled: s,
      variant: t,
      semanticColor: h
    });
    return /* @__PURE__ */ v(
      "button",
      {
        type: e,
        disabled: r || s,
        style: {
          flexDirection: c === "start" ? "row" : "row-reverse",
          WebkitTapHighlightColor: "transparent",
          ...d,
          ...o
        },
        ...f,
        children: [
          a && /* @__PURE__ */ l(
            k,
            {
              icon: a,
              width: u,
              style: {
                marginLeft: c === "start" ? "0px" : "8px",
                marginRight: c === "end" ? "0px" : "8px"
              }
            }
          ),
          /* @__PURE__ */ l(F.Text, { text: n, style: { color: "inherit" } }),
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
                backgroundColor: d.backgroundColor
              },
              children: /* @__PURE__ */ l(k, { icon: "eos-icons:loading", width: 24 })
            }
          )
        ]
      }
    );
  }
);
Ee.displayName = "Button";
const Re = {
  Icon: K
}, ne = i.memo(({ children: e, style: o, row: n = !0, column: t = !1, gap: r = "8px", ...s }) => /* @__PURE__ */ l(
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
    ...s,
    children: e
  }
));
ne.displayName = "Space.Flex";
const ie = i.memo(({ children: e, style: o, columns: n = 1, spacing: t = 16, ...r }) => {
  const { screenSize: s } = b.useThemeBreakpoint(), a = i.useMemo(() => Ie(n, s), [n, s]), c = i.useMemo(() => ze(t, s), [t, s]);
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
ie.displayName = "Space.Grid";
const S = Object.keys(g);
function Ie(e = 1, o) {
  if (typeof e == "number")
    return e;
  const n = S.indexOf(o);
  for (let t = n; t < S.length; t++) {
    const r = e[S[t]];
    if (r !== void 0) return r;
  }
  return 1;
}
function ze(e = 16, o) {
  if (typeof e == "number")
    return e;
  const n = S.indexOf(o);
  for (let t = n; t < S.length; t++) {
    const r = e[S[t]];
    if (r !== void 0) return r;
  }
  return 16;
}
const N = {
  Flex: ne,
  Grid: ie
}, R = i.memo(
  ({ children: e, style: o, isTransparent: n = !1, isFrostedGlass: t = !1, isOutline: r = !1, ...s }) => {
    const { themeMode: a } = b.useThemeMode();
    return /* @__PURE__ */ l(
      "div",
      {
        style: {
          boxSizing: "border-box",
          borderRadius: "8px",
          padding: "16px",
          backgroundColor: n ? "transparent" : w[a].secondary,
          boxShadow: r ? "none" : U[a].base,
          backdropFilter: t ? "blur(8px) brightness(0.8)" : "none",
          WebkitBackdropFilter: t ? "blur(8px) brightness(0.8)" : "none",
          outlineWidth: 1.5,
          outlineStyle: "solid",
          outlineColor: D[a].primary,
          ...o
        },
        ...s,
        children: e
      }
    );
  }
);
R.displayName = "Card";
const se = i.memo(({ children: e, height: o = 300, width: n = 200, title: t, coverImage: r }) => /* @__PURE__ */ v(
  R,
  {
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
            F.Title,
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
se.displayName = "Cards.Book";
const ae = i.memo(({ children: e, title: o = "", description: n = "" }) => /* @__PURE__ */ v(R, { style: { position: "relative" }, children: [
  (o || n) && /* @__PURE__ */ v(N.Flex, { column: !0, gap: 2, style: { paddingRight: "48px" }, children: [
    /* @__PURE__ */ l(F.Title, { as: "h6", text: o, ellipsis: 1 }),
    /* @__PURE__ */ l(F.Paragraph, { ellipsis: 3, children: n })
  ] }),
  /* @__PURE__ */ l(
    Re.Icon,
    {
      icon: "solar:hamburger-menu-line-duotone",
      variant: "ghost",
      style: { position: "absolute", top: "4px", right: "4px" }
    }
  ),
  e && /* @__PURE__ */ l(N.Flex, { column: !0, children: e })
] }));
ae.displayName = "Cards.Product";
const Ve = {
  Book: se,
  Product: ae
}, Be = i.memo(({ children: e, breakpoint: o = g.lg, style: n, ...t }) => /* @__PURE__ */ l(
  "div",
  {
    style: {
      margin: "0 auto",
      width: "100%",
      maxWidth: y[o],
      ...n
    },
    ...t,
    children: e
  }
));
Be.displayName = "Container";
const Oe = i.memo(
  ({ isOpen: e, onClose: o, children: n, position: t = "left", maskClosable: r = !0, width: s = 300, height: a = 300, style: c }) => {
    const { themeMode: u } = b.useThemeMode();
    return /* @__PURE__ */ v(V, { children: [
      /* @__PURE__ */ l(L, { children: e && /* @__PURE__ */ l(
        C.div,
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
            backgroundColor: E(w[u].primary, 0.5),
            backdropFilter: "blur(2px)",
            pointerEvents: e ? "auto" : "none"
          }
        }
      ) }),
      /* @__PURE__ */ l(L, { children: e && /* @__PURE__ */ l(
        C.div,
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
          children: /* @__PURE__ */ l(
            R,
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
Oe.displayName = "Drawer";
const He = i.memo(
  ({ children: e, style: o, isOpen: n, onClose: t, maskClosable: r = !0, maxBreakpoint: s = g.xs }) => {
    const { themeMode: a } = b.useThemeMode();
    return /* @__PURE__ */ l(L, { children: n && /* @__PURE__ */ l(
      C.div,
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
          backgroundColor: E(w[a].primary, 0.5),
          backdropFilter: "blur(2px)",
          opacity: n ? 1 : 0
        },
        children: /* @__PURE__ */ l(
          C.div,
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
              width: y[s],
              maxWidth: y[s]
            },
            children: /* @__PURE__ */ l(R, { style: { width: "100%", ...o }, children: e })
          }
        )
      }
    ) });
  }
);
He.displayName = "Modal";
const Le = i.memo(({ position: e = "top-center", offset: o = 0, collapsable: n = !1 }) => {
  const { isDarkThemeMode: t } = b.useThemeMode();
  return /* @__PURE__ */ l(
    me,
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
Le.displayName = "Notification";
function Ue(e) {
  const o = {
    description: e.description
  };
  return e.type === "success" ? H.success(e.title, o) : e.type === "error" ? H.error(e.title, o) : e.type === "warning" ? H.warning(e.title, o) : H.info(e.title, o);
}
function Pe() {
  const [e, o] = i.useState(!1), n = i.useCallback(() => o(!0), []), t = i.useCallback(() => o(!1), []), r = i.useCallback(() => o((s) => !s), []);
  return {
    isOpen: e,
    setIsOpen: o,
    open: n,
    close: t,
    toggle: r
  };
}
const De = i.memo(({ children: e, style: o, placement: n = "bottom", renderTrigger: t }) => {
  var f;
  const r = Pe(), s = i.useRef(null), a = i.useRef(null), c = i.useRef(null), [u, h] = i.useState({ top: 0, left: 0 });
  return i.useEffect(() => {
    const d = (m) => {
      var M;
      c.current && !c.current.contains(m.target) && !((M = a.current) != null && M.contains(m.target)) && r.close();
    };
    return r.isOpen && document.addEventListener("mousedown", d), () => {
      document.removeEventListener("mousedown", d);
    };
  }, [r]), i.useEffect(() => {
    if (r.isOpen && s.current && a.current && c.current) {
      const d = s.current.getBoundingClientRect(), m = a.current.getBoundingClientRect(), M = c.current.offsetWidth, B = c.current.offsetHeight, O = m.top - d.top, p = m.left - d.left, I = n === "bottom" ? O + m.height + 8 : O - B - 8, ue = p + m.width / 2 - M / 2;
      h({ top: I, left: ue });
    }
  }, [r.isOpen, n]), /* @__PURE__ */ v("div", { ref: s, style: { display: "inline-block", position: "relative" }, children: [
    /* @__PURE__ */ l("div", { ref: a, onClick: r.toggle, style: { display: "inline-block", cursor: "pointer" }, children: t({ isOpen: r.isOpen }) }),
    /* @__PURE__ */ l(L, { children: r.isOpen && /* @__PURE__ */ l(
      C.div,
      {
        ref: c,
        initial: { opacity: 0, y: n === "bottom" ? -5 : 5 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: n === "bottom" ? -5 : 5 },
        transition: { duration: 0.2 },
        style: {
          position: "absolute",
          top: u.top,
          left: u.left,
          zIndex: 1e3,
          minWidth: (f = a.current) == null ? void 0 : f.offsetWidth
        },
        children: /* @__PURE__ */ l(R, { style: o, children: e })
      }
    ) })
  ] });
});
De.displayName = "Popover";
const le = i.memo(({ children: e, targetElementID: o }) => {
  const [n, t] = i.useState(null);
  return i.useEffect(() => {
    const r = document.getElementById(o);
    r && t(r);
  }, [o]), n ? ge(/* @__PURE__ */ l(V, { children: e }), n, o) : null;
});
le.displayName = "PortalRender";
const qe = {
  Render: le
}, ce = i.memo(({ height: e = 8 }) => {
  const o = fe(), { themeColor: n } = b.useThemeColor(), t = i.useRef(null), [r, s] = i.useState(0);
  return i.useEffect(() => {
    const a = () => {
      if (t.current) {
        const c = t.current.offsetWidth, u = c * 0.3;
        s(c - u);
      }
    };
    return a(), window.addEventListener("resize", a), () => window.removeEventListener("resize", a);
  }, []), i.useEffect(() => {
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
        backgroundColor: E(n, 0.2),
        borderRadius: e / 2,
        boxShadow: "rgba(0, 0, 0, 0.14) 0px 6px 10px 0px"
      },
      children: /* @__PURE__ */ l(
        C.div,
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
ce.displayName = "Progress.LoadingBar";
const de = i.memo(({ height: e = 8 }) => {
  const { scrollYProgress: o } = pe(), { themeColor: n } = b.useThemeColor(), t = i.useMemo(
    () => ({
      light: $(n, 0.2),
      dark: Y(n, 0.8),
      origin: W(n),
      opacity: E(n, 0.6)
    }),
    [n]
  );
  return /* @__PURE__ */ l(
    C.div,
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
de.displayName = "Progress.Scrollbar";
const Xe = {
  Scrollbar: de,
  LoadingBar: ce
};
export {
  w as BackgroundColors,
  D as BorderColors,
  g as BreakPointName,
  Ee as Button,
  Re as Buttons,
  R as Card,
  Ve as Cards,
  Be as Container,
  Oe as Drawer,
  k as Icon,
  He as Modal,
  Le as Notification,
  De as Popover,
  qe as Portal,
  Xe as Progress,
  z as SemanticColors,
  N as Space,
  P as TextColors,
  b as Theme,
  y as ThemeBreakPoint,
  _ as ThemeColor,
  x as ThemeMode,
  U as ThemeShadow,
  F as Typography,
  T as TypographySize,
  Y as getDarkerHex,
  $ as getLighterHex,
  E as getOpacityHex,
  Ge as getSystemThemeMode,
  je as getThemeColors,
  W as hexNormalize,
  X as hexToHsl,
  q as hexToRgb,
  Q as hslToHex,
  Ue as notify,
  xe as rgbToHex,
  Pe as useHandler
};
