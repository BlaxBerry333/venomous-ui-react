import { jsx as l, jsxs as T, Fragment as G } from "react/jsx-runtime";
import i from "react";
import { Icon as ue } from "@iconify/react";
import { AnimatePresence as he, motion as I, useAnimation as me, useScroll as fe } from "framer-motion";
import { Toaster as pe, toast as E } from "sonner";
import { createPortal as ge } from "react-dom";
const y = i.memo(({ style: e, icon: t, width: r = 20, ...o }) => {
  const n = i.useMemo(() => "inherit", []);
  return /* @__PURE__ */ l(
    ue,
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
        color: n,
        ...e
      },
      ...o
    }
  );
});
y.displayName = "Icon";
const z = {
  success: "#4caf50",
  error: "#f44336",
  warning: "#ff9800",
  info: "#2196f3"
}, B = {
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
}, x = {
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
}, w = {
  dark: {
    primary: "rgba(255, 255, 255, 0.24)",
    secondary: "rgba(255, 255, 255, 0.10)"
  },
  light: {
    primary: "rgba(38, 85, 115, 0.15)",
    secondary: "rgba(0, 0, 0, 0.15)"
  }
};
var p = /* @__PURE__ */ ((e) => (e.xs = "xs", e.sm = "sm", e.md = "md", e.lg = "lg", e.xl = "xl", e.xxl = "xxl", e))(p || {});
const M = {
  xs: 444,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
  xxl: 2560
};
var F = /* @__PURE__ */ ((e) => (e.RubyCopperhead = "#DC2626", e.GarnetViper = "#B91C1C", e.BloodstoneAdder = "#7F1D1D", e.TopazCoral = "#EA580C", e.AmberRattlesnake = "#F59E0B", e.GoldenLanceHead = "#FBBF24", e.TopazMamushi = "#FACC15", e.EmeraldMamba = "#059669", e.MalachitePython = "#10B981", e.JadeBoomslang = "#22C55E", e.PeridotGaboonViper = "#84CC16", e.TurquoiseFerDeLance = "#06B6D4", e.SapphireCobra = "#2563EB", e.LapisLazuliSeaSnake = "#1D4ED8", e.AmethystAsp = "#7C3AED", e.AlexandriteAnaconda = "#7E22CE", e.FluoriteElapid = "#A855F7", e.TourmalineStiletto = "#DB2777", e.RoseQuartzDeathAdder = "#EC4899", e.MorganiteCoralSnake = "#F472B6", e.GraphitePuffAdder = "#1F2937", e.ObsidianBlackMamba = "#374151", e.HematiteHognose = "#6B7280", e.SmokyQuartzSandViper = "#9CA3AF", e))(F || {}), b = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e))(b || {});
const R = {
  dark: {
    // 基础阴影 - 按钮、小卡片
    sm: "0 1px 2px 0 rgba(255, 255, 255, 0.8)",
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
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
    // 标准阴影 - 卡片、面板
    base: `
      0 1px 3px 0 rgba(0, 0, 0, 0.4),
      0 0px 2px -1px rgba(0, 0, 0, 0.25)
    `,
    // 内阴影
    inset: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)"
  }
}, k = {
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
}, $e = (e) => ({
  background: x[e],
  border: w[e],
  text: B[e]
});
function be() {
  return typeof window < "u" ? window.matchMedia("(prefers-color-scheme: dark)").matches : !1;
}
function Ae() {
  return be() ? b.Dark : b.Light;
}
function O(e) {
  return e = e.replace("#", ""), e.length === 3 && (e = e.split("").map((t) => t + t).join("")), `#${e}`;
}
function X(e) {
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
function V(e) {
  const { r: t, g: r, b: o } = X(O(e)), n = t / 255, s = r / 255, a = o / 255, c = Math.max(n, s, a), d = Math.min(n, s, a), h = c - d;
  let m = 0;
  h !== 0 && (c === n ? m = (s - a) / h % 6 : c === s ? m = (a - n) / h + 2 : m = (n - s) / h + 4, m *= 60, m < 0 && (m += 360));
  const u = (c + d) / 2, v = h === 0 ? 0 : h / (1 - Math.abs(2 * u - 1));
  return { h: m, s: v, l: u };
}
function U(e, t, r) {
  const o = (1 - Math.abs(2 * r - 1)) * t, n = o * (1 - Math.abs(e / 60 % 2 - 1)), s = r - o / 2;
  let a = 0, c = 0, d = 0;
  return e >= 0 && e < 60 ? [a, c, d] = [o, n, 0] : e < 120 ? [a, c, d] = [n, o, 0] : e < 180 ? [a, c, d] = [0, o, n] : e < 240 ? [a, c, d] = [0, n, o] : e < 300 ? [a, c, d] = [n, 0, o] : [a, c, d] = [o, 0, n], xe(Math.round((a + s) * 255), Math.round((c + s) * 255), Math.round((d + s) * 255));
}
function Y(e, t) {
  const { h: r, s: o, l: n } = V(e);
  return U(r, o, Math.max(0, n - t));
}
function N(e, t) {
  const { h: r, s: o, l: n } = V(e);
  return U(r, o, Math.min(1, n + t));
}
function C(e, t) {
  const { r, g: o, b: n } = X(O(e));
  t > 1 && (t = 1), t < 0 && (t = 0);
  const s = Math.min(1, Math.max(0, t));
  return `rgba(${r}, ${o}, ${n}, ${s})`;
}
const q = i.memo(() => (ye(), null));
q.displayName = "Theme.InjectToHTML";
function ye() {
  const { themeColor: e } = g.useThemeColor(), t = i.useMemo(
    () => ({
      light: N(e, 0.2),
      dark: Y(e, 0.8),
      origin: O(e),
      opacity: C(e, 0.6)
    }),
    [e]
  );
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
const P = i.createContext(void 0), ke = b.Light, Me = F.EmeraldMamba, Se = {
  THEME_MODE: "VENOMOUS_UI__THEME_MODE",
  THEME_COLOR: "VENOMOUS_UI__THEME_COLOR"
};
function we({
  children: e,
  defaultThemeMode: t = ke,
  defaultThemeColor: r = Me,
  storageKey: o = Se
}) {
  const [n, s] = i.useState(!1), [a, c] = i.useState(t), [d, h] = i.useState(r), m = i.useCallback(
    (f) => {
      f !== a && c(f);
    },
    [a]
  ), u = i.useCallback(() => {
    c((f) => f === b.Dark ? b.Light : b.Dark);
  }, []), v = i.useCallback(() => {
    c(t);
  }, [t]), A = i.useCallback(
    (f) => {
      f !== d && h(f);
    },
    [d]
  ), L = i.useCallback(() => {
    h(r);
  }, [r]);
  i.useEffect(() => {
    if (typeof window < "u") {
      s(!0);
      const f = localStorage.getItem(o.THEME_MODE);
      f && Object.values(b).includes(f) && c(f);
      const W = localStorage.getItem(o.THEME_COLOR);
      W && Object.values(F).includes(W) && h(W);
    }
  }, [o]), i.useEffect(() => {
    typeof window < "u" && n && (localStorage.setItem(o.THEME_MODE, a), localStorage.setItem(o.THEME_COLOR, d));
  }, [n, o, a, d]);
  const de = i.useMemo(
    () => ({
      themeMode: a,
      setThemeMode: m,
      toggleThemeMode: u,
      resetThemeMode: v,
      isDarkThemeMode: a === b.Dark,
      themeColor: d,
      setThemeColor: A,
      resetThemeColor: L
    }),
    [a, m, u, v, d, A, L]
  );
  return /* @__PURE__ */ l(P.Provider, { value: de, children: e });
}
function Ce() {
  const [e, t] = i.useState(p.xs);
  return i.useEffect(() => {
    const r = () => {
      const n = window.innerWidth;
      return n >= M.xxl ? p.xxl : n >= M.xl ? p.xl : n >= M.lg ? p.lg : n >= M.md ? p.md : n >= M.sm ? p.sm : p.xs;
    }, o = () => {
      t(r());
    };
    return o(), window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, []), {
    screenSize: e
  };
}
function Te() {
  const e = i.useContext(P);
  if (e === void 0)
    throw new Error("useThemeColor must be used within a ThemeModeProvider");
  return {
    themeColor: e.themeColor,
    setThemeColor: e.setThemeColor,
    resetThemeColor: e.resetThemeColor
  };
}
function Q() {
  const e = i.useContext(P);
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
  Provider: we,
  InjectToHTML: q,
  useThemeMode: Q,
  useThemeColor: Te,
  useThemeBreakpoint: Ce
};
function J({
  isLoading: e,
  isDisabled: t,
  variant: r,
  semanticColor: o
}) {
  const { themeColor: n } = g.useThemeColor(), { themeMode: s } = g.useThemeMode(), a = i.useMemo(() => {
    let u = "";
    if (e || t)
      return u = x[s].secondary, u;
    switch (r) {
      case "contained":
        u = o ? z[o] : n;
        break;
      case "outlined":
        u = x[s].secondary;
        break;
      case "ghost":
      default:
        u = x[s].primary;
        break;
    }
    return u;
  }, [r, n, s, e, t, o]), c = i.useMemo(() => {
    let u = "";
    if (e || t)
      return u = w[s].secondary, u;
    switch (r) {
      case "contained":
        u = o ? N(z[o], 0.25) : C(n, 0.25);
        break;
      case "outlined":
        u = o ? z[o] : n;
        break;
      case "ghost":
      default:
        u = w[s].secondary;
        break;
    }
    return u;
  }, [r, n, s, e, t, o]), d = i.useMemo(() => {
    let u = "";
    if (e || t)
      return u = B[s].disabled, u;
    switch (r) {
      case "contained":
        u = "#ffffff";
        break;
      case "outlined":
        u = o ? z[o] : n;
        break;
      case "ghost":
      default:
        u = B[s].primary;
        break;
    }
    return u;
  }, [r, n, s, e, t, o]), h = i.useMemo(() => R[s].sm, [r, n, s]);
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
        fontSize: k.text,
        fontWeight: "bold",
        cursor: e ? "wait" : t ? "not-allowed" : "pointer",
        borderRadius: "8px",
        borderWidth: 2,
        borderColor: c,
        boxShadow: h,
        backgroundColor: a,
        color: d
      }),
      [e, t, c, a, d, h]
    )
  };
}
const Z = i.memo(
  ({
    type: e = "button",
    style: t,
    variant: r = "contained",
    isLoading: o,
    isDisabled: n,
    icon: s,
    iconWidth: a = 20,
    semanticColor: c,
    ...d
  }) => {
    const { buttonStyles: h } = J({
      isLoading: o,
      isDisabled: n,
      variant: r,
      semanticColor: c
    });
    return /* @__PURE__ */ l(
      "button",
      {
        type: e,
        disabled: o || n,
        style: {
          ...h,
          padding: 0,
          ...t
        },
        ...d,
        children: /* @__PURE__ */ l(y, { icon: o ? "eos-icons:loading" : s, width: a })
      }
    );
  }
);
Z.displayName = "Buttons.Icon";
const K = i.memo(({ style: e, text: t, ...r }) => /* @__PURE__ */ l(
  "code",
  {
    style: {
      color: "#B71D18",
      backgroundColor: "#E7E9EB",
      border: "1px solid #CCCCCC",
      borderRadius: "4px",
      padding: "2px 4px",
      fontSize: k.small,
      fontWeight: 600,
      ...e
    },
    ...r,
    children: t
  }
));
K.displayName = "Typography.Code";
function _({ ellipsis: e = 0 }) {
  const { themeMode: t } = g.useThemeMode(), r = i.useMemo(() => B[t].primary, [t]), o = i.useMemo(() => e ? {
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: e,
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  } : {}, [e]);
  return {
    fontColor: r,
    ellipsisStyles: o
  };
}
const ee = i.memo(({ children: e, style: t, ellipsis: r = 0, ...o }) => {
  const { fontColor: n, ellipsisStyles: s } = _({ ellipsis: r });
  return /* @__PURE__ */ l(
    "p",
    {
      style: {
        boxSizing: "border-box",
        margin: 0,
        width: "100%",
        fontSize: k.text,
        lineHeight: 1.5,
        color: n,
        ...s,
        ...t
      },
      ...o,
      children: e
    }
  );
});
ee.displayName = "Typography.Paragraph";
const te = i.memo(({ style: e, text: t, as: r = "span", ...o }) => {
  const { fontColor: n } = _({ ellipsis: 0 });
  return r === "strong" ? /* @__PURE__ */ l(
    "strong",
    {
      style: {
        fontSize: k.text,
        fontWeight: "bold",
        color: n,
        ...e
      },
      ...o,
      children: t
    }
  ) : r === "small" ? /* @__PURE__ */ l(
    "small",
    {
      style: {
        fontSize: k.small,
        color: n,
        ...e
      },
      ...o,
      children: t
    }
  ) : /* @__PURE__ */ l(
    "span",
    {
      style: {
        fontSize: k.text,
        fontWeight: "normal",
        color: n,
        ...e
      },
      ...o,
      children: t
    }
  );
});
te.displayName = "Typography.Text";
const j = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, oe = i.memo(({ text: e, as: t = j.h4, ellipsis: r = 0, style: o, ...n }) => {
  const s = i.useMemo(() => j[t], [t]), a = i.useMemo(() => k[t], [t]), { fontColor: c, ellipsisStyles: d } = _({ ellipsis: r });
  return /* @__PURE__ */ l(
    s,
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
        color: c,
        ...d,
        ...o
      },
      ...n,
      children: e
    }
  );
});
oe.displayName = "Typography.Title";
const H = {
  Title: oe,
  Text: te,
  Code: K,
  Paragraph: ee
}, ve = i.memo(
  ({
    type: e = "button",
    style: t,
    text: r,
    variant: o = "contained",
    isLoading: n,
    isDisabled: s,
    icon: a,
    iconPosition: c = "start",
    iconWidth: d = 20,
    semanticColor: h,
    ...m
  }) => {
    const { buttonStyles: u } = J({
      isLoading: n,
      isDisabled: s,
      variant: o,
      semanticColor: h
    });
    return /* @__PURE__ */ T(
      "button",
      {
        type: e,
        disabled: n || s,
        style: {
          flexDirection: c === "start" ? "row" : "row-reverse",
          ...u,
          ...t
        },
        ...m,
        children: [
          a && /* @__PURE__ */ l(
            y,
            {
              icon: a,
              width: d,
              style: {
                marginLeft: c === "start" ? "0px" : "8px",
                marginRight: c === "end" ? "0px" : "8px"
              }
            }
          ),
          /* @__PURE__ */ l(H.Text, { text: r, style: { color: "inherit" } }),
          /* @__PURE__ */ l(
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
                backgroundColor: u.backgroundColor
              },
              children: /* @__PURE__ */ l(y, { icon: "eos-icons:loading", width: 24 })
            }
          )
        ]
      }
    );
  }
);
ve.displayName = "Button";
const Ee = {
  Icon: Z
}, re = i.memo(({ children: e, style: t, row: r = !0, column: o = !1, gap: n = "8px", ...s }) => /* @__PURE__ */ l(
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
re.displayName = "Space.Flex";
const ne = i.memo(({ children: e, style: t, columns: r = 1, spacing: o = 16, ...n }) => {
  const { screenSize: s } = g.useThemeBreakpoint(), a = i.useMemo(() => ze(r, s), [r, s]), c = i.useMemo(() => Ie(o, s), [o, s]);
  return /* @__PURE__ */ l(
    "div",
    {
      style: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: `repeat(${a}, 1fr)`,
        gap: `${c}px`,
        ...t
      },
      ...n,
      children: e
    }
  );
});
ne.displayName = "Space.Grid";
const S = Object.keys(p);
function ze(e = 1, t) {
  if (typeof e == "number")
    return e;
  const r = S.indexOf(t);
  for (let o = r; o < S.length; o++) {
    const n = e[S[o]];
    if (n !== void 0) return n;
  }
  return 1;
}
function Ie(e = 16, t) {
  if (typeof e == "number")
    return e;
  const r = S.indexOf(t);
  for (let o = r; o < S.length; o++) {
    const n = e[S[o]];
    if (n !== void 0) return n;
  }
  return 16;
}
const D = {
  Flex: re,
  Grid: ne
}, $ = i.memo(
  ({ children: e, style: t, isTransparent: r = !1, isFrostedGlass: o = !1, isOutline: n = !1, ...s }) => {
    const { themeMode: a } = g.useThemeMode();
    return /* @__PURE__ */ l(
      "div",
      {
        style: {
          boxSizing: "border-box",
          borderRadius: "8px",
          padding: "16px",
          backgroundColor: r ? "transparent" : x[a].secondary,
          boxShadow: n ? "none" : R[a].base,
          backdropFilter: o ? "blur(8px) brightness(0.8)" : "none",
          WebkitBackdropFilter: o ? "blur(8px) brightness(0.8)" : "none",
          outlineWidth: 1.5,
          outlineStyle: "solid",
          outlineColor: w[a].primary,
          ...t
        },
        ...s,
        children: e
      }
    );
  }
);
$.displayName = "Card";
const ie = i.memo(({ children: e, height: t = 300, width: r = 200, title: o, coverImage: n }) => /* @__PURE__ */ T(
  $,
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
        D.Flex,
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
          children: o && /* @__PURE__ */ l(
            H.Title,
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
ie.displayName = "Cards.Book";
const se = i.memo(({ children: e, title: t = "", description: r = "" }) => /* @__PURE__ */ T($, { style: { position: "relative" }, children: [
  (t || r) && /* @__PURE__ */ T(D.Flex, { column: !0, gap: 2, style: { paddingRight: "48px" }, children: [
    /* @__PURE__ */ l(H.Title, { as: "h6", text: t, ellipsis: 1 }),
    /* @__PURE__ */ l(H.Paragraph, { ellipsis: 3, children: r })
  ] }),
  /* @__PURE__ */ l(
    Ee.Icon,
    {
      icon: "solar:hamburger-menu-line-duotone",
      variant: "ghost",
      style: { position: "absolute", top: "4px", right: "4px" }
    }
  ),
  e && /* @__PURE__ */ l(D.Flex, { column: !0, children: e })
] }));
se.displayName = "Cards.Product";
const Le = {
  Book: ie,
  Product: se
}, Be = i.memo(({ children: e, breakpoint: t = p.lg, style: r, ...o }) => /* @__PURE__ */ l(
  "div",
  {
    style: {
      margin: "0 auto",
      width: "100%",
      maxWidth: M[t],
      ...r
    },
    ...o,
    children: e
  }
));
Be.displayName = "Container";
const He = i.memo(
  ({ isOpen: e, onClose: t, children: r, position: o = "left", maskClosable: n = !0, width: s = 300, height: a = 300, style: c }) => {
    const { themeMode: d } = g.useThemeMode();
    return /* @__PURE__ */ T(G, { children: [
      /* @__PURE__ */ l(
        "div",
        {
          onClick: n ? t : void 0,
          style: {
            boxSizing: "border-box",
            display: e ? "block" : "none",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 999,
            width: "100vw",
            height: "100svh",
            backgroundColor: C(x[d].primary, 0.5),
            backdropFilter: "blur(2px)",
            opacity: e ? 1 : 0,
            pointerEvents: e ? "auto" : "none",
            transition: "opacity 0.3s ease"
          }
        }
      ),
      /* @__PURE__ */ l(
        "div",
        {
          style: {
            boxSizing: "border-box",
            position: "fixed",
            backgroundColor: x[d].secondary,
            boxShadow: R[d].base,
            transition: "transform 0.3s ease",
            zIndex: 1e3,
            transform: o === "left" ? e ? "translateX(0)" : "translateX(-100%)" : o === "right" ? e ? "translateX(0)" : "translateX(100%)" : o === "top" ? e ? "translateY(0)" : "translateY(-100%)" : e ? "translateY(0)" : "translateY(100%)",
            outlineStyle: "solid",
            outlineColor: w[d].primary,
            outlineWidth: 0,
            ...o === "left" && {
              top: 0,
              left: 0,
              width: s,
              height: "100svh",
              outlineWidth: 1.5
            },
            ...o === "right" && {
              top: 0,
              right: 0,
              width: s,
              height: "100svh",
              outlineLeftWidth: 1.5
            },
            ...o === "top" && {
              top: 0,
              left: 0,
              width: "100svw",
              height: a,
              outlineBottomWidth: 1.5
            },
            ...o === "bottom" && {
              bottom: 0,
              left: 0,
              width: "100svw",
              height: a,
              outlineTopWidth: 1.5
            },
            ...c
          },
          children: r
        }
      )
    ] });
  }
);
He.displayName = "Drawer";
const Re = i.memo(({ children: e, style: t, isOpen: r, onClose: o, maskClosable: n = !0 }) => {
  const { themeMode: s } = Q();
  return /* @__PURE__ */ l(he, { children: r && /* @__PURE__ */ l(
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
        backgroundColor: C(x[s].primary, 0.5),
        backdropFilter: "blur(2px)",
        opacity: r ? 1 : 0
      },
      children: /* @__PURE__ */ l(
        I.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.95 },
          transition: { duration: 0.2, ease: "easeOut" },
          onClick: (a) => a.stopPropagation(),
          style: {
            borderRadius: "8px",
            minWidth: "300px",
            maxWidth: "90%",
            maxHeight: "90%",
            padding: "24px 32px",
            backgroundColor: x[s].secondary,
            outlineWidth: 1.5,
            outlineStyle: "solid",
            outlineColor: w[s].primary,
            boxShadow: R[s].base,
            ...t
          },
          children: e
        }
      )
    }
  ) });
});
Re.displayName = "Modal";
const Oe = i.memo(({ position: e = "top-center", offset: t = 0, collapsable: r = !1 }) => {
  const { isDarkThemeMode: o } = g.useThemeMode();
  return /* @__PURE__ */ l(
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
        success: /* @__PURE__ */ l(y, { icon: "solar:shield-check-line-duotone", color: "success" }),
        error: /* @__PURE__ */ l(y, { icon: "solar:shield-cross-line-duotone", color: "error" }),
        warning: /* @__PURE__ */ l(y, { icon: "solar:shield-warning-line-duotone", color: "warning" }),
        info: /* @__PURE__ */ l(y, { icon: "solar:info-circle-line-duotone", color: "info" })
      }
    }
  );
});
Oe.displayName = "Notification";
function je(e) {
  const t = {
    description: e.description
  };
  return e.type === "success" ? E.success(e.title, t) : e.type === "error" ? E.error(e.title, t) : e.type === "warning" ? E.warning(e.title, t) : E.info(e.title, t);
}
const ae = i.memo(({ children: e, targetElementID: t }) => {
  const [r, o] = i.useState(null);
  return i.useEffect(() => {
    const n = document.getElementById(t);
    n && o(n);
  }, [t]), r ? ge(/* @__PURE__ */ l(G, { children: e }), r, t) : null;
});
ae.displayName = "PortalRender";
const Ge = {
  Render: ae
}, le = i.memo(({ height: e = 8 }) => {
  const t = me(), { themeColor: r } = g.useThemeColor(), o = i.useRef(null), [n, s] = i.useState(0);
  return i.useEffect(() => {
    const a = () => {
      if (o.current) {
        const c = o.current.offsetWidth, d = c * 0.3;
        s(c - d);
      }
    };
    return a(), window.addEventListener("resize", a), () => window.removeEventListener("resize", a);
  }, []), i.useEffect(() => {
    if (n === 0) return;
    (async () => {
      for (; ; )
        await t.start({ x: [0, n], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } }), await t.start({ x: [n, 0], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } });
    })();
  }, [t, n]), /* @__PURE__ */ l(
    "div",
    {
      ref: o,
      style: {
        position: "relative",
        width: "100%",
        height: e,
        overflow: "hidden",
        backgroundColor: C(r, 0.2),
        borderRadius: e / 2,
        boxShadow: "rgba(0, 0, 0, 0.14) 0px 6px 10px 0px"
      },
      children: /* @__PURE__ */ l(
        I.div,
        {
          animate: t,
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "50%",
            backgroundColor: r,
            borderRadius: e / 2
          }
        }
      )
    }
  );
});
le.displayName = "Progress.LoadingBar";
const ce = i.memo(({ height: e = 8 }) => {
  const { scrollYProgress: t } = fe(), { themeColor: r } = g.useThemeColor(), o = i.useMemo(
    () => ({
      light: N(r, 0.2),
      dark: Y(r, 0.8),
      origin: O(r),
      opacity: C(r, 0.6)
    }),
    [r]
  );
  return /* @__PURE__ */ l(
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
        backgroundImage: `linear-gradient(to right, ${o.light}, ${o.origin}, ${o.opacity})`,
        height: e,
        borderRadius: "8px"
      }
    }
  );
});
ce.displayName = "Progress.Scrollbar";
const Xe = {
  Scrollbar: ce,
  LoadingBar: le
};
function Ve() {
  const [e, t] = i.useState(!1), r = i.useCallback(() => t(!0), []), o = i.useCallback(() => t(!1), []), n = i.useCallback(() => t((s) => !s), []);
  return {
    isOpen: e,
    setIsOpen: t,
    open: r,
    close: o,
    toggle: n
  };
}
export {
  x as BackgroundColors,
  w as BorderColors,
  p as BreakPointName,
  ve as Button,
  Ee as Buttons,
  $ as Card,
  Le as Cards,
  Be as Container,
  He as Drawer,
  y as Icon,
  Re as Modal,
  Oe as Notification,
  Ge as Portal,
  Xe as Progress,
  z as SemanticColors,
  D as Space,
  B as TextColors,
  g as Theme,
  M as ThemeBreakPoint,
  F as ThemeColor,
  b as ThemeMode,
  R as ThemeShadow,
  H as Typography,
  k as TypographySize,
  Y as getDarkerHex,
  N as getLighterHex,
  C as getOpacityHex,
  Ae as getSystemThemeMode,
  $e as getThemeColors,
  O as hexNormalize,
  V as hexToHsl,
  X as hexToRgb,
  U as hslToHex,
  je as notify,
  xe as rgbToHex,
  Ve as useHandler
};
