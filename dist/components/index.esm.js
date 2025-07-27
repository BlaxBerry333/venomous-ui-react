import { jsx as l, jsxs as S, Fragment as j } from "react/jsx-runtime";
import i from "react";
import { Icon as de } from "@iconify/react";
import { AnimatePresence as ue, motion as z, useAnimation as me, useScroll as he } from "framer-motion";
import { Toaster as fe, toast as E } from "sonner";
import { createPortal as pe } from "react-dom";
const x = i.memo(({ style: e, icon: t, width: n = 20, ...o }) => {
  const r = i.useMemo(() => "inherit", []);
  return /* @__PURE__ */ l(
    de,
    {
      ssr: !0,
      icon: t,
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
      ...o
    }
  );
});
x.displayName = "Icon";
const Pe = {
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
}, y = {
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
var f = /* @__PURE__ */ ((e) => (e.xs = "xs", e.sm = "sm", e.md = "md", e.lg = "lg", e.xl = "xl", e.xxl = "xxl", e))(f || {});
const C = {
  xs: 444,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
  xxl: 2560
};
var W = /* @__PURE__ */ ((e) => (e.RubyCopperhead = "#DC2626", e.GarnetViper = "#B91C1C", e.BloodstoneAdder = "#7F1D1D", e.TopazCoral = "#EA580C", e.AmberRattlesnake = "#F59E0B", e.GoldenLanceHead = "#FBBF24", e.TopazMamushi = "#FACC15", e.EmeraldMamba = "#059669", e.MalachitePython = "#10B981", e.JadeBoomslang = "#22C55E", e.PeridotGaboonViper = "#84CC16", e.TurquoiseFerDeLance = "#06B6D4", e.SapphireCobra = "#2563EB", e.LapisLazuliSeaSnake = "#1D4ED8", e.AmethystAsp = "#7C3AED", e.AlexandriteAnaconda = "#7E22CE", e.FluoriteElapid = "#A855F7", e.TourmalineStiletto = "#DB2777", e.RoseQuartzDeathAdder = "#EC4899", e.MorganiteCoralSnake = "#F472B6", e.GraphitePuffAdder = "#1F2937", e.ObsidianBlackMamba = "#374151", e.HematiteHognose = "#6B7280", e.SmokyQuartzSandViper = "#9CA3AF", e))(W || {}), b = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e))(b || {});
const D = {
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
}, M = {
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
}, _e = (e) => ({
  background: y[e],
  border: w[e],
  text: O[e]
});
function ge() {
  return typeof window < "u" ? window.matchMedia("(prefers-color-scheme: dark)").matches : !1;
}
function $e() {
  return ge() ? b.Dark : b.Light;
}
function H(e) {
  return e = e.replace("#", ""), e.length === 3 && (e = e.split("").map((t) => t + t).join("")), `#${e}`;
}
function G(e) {
  e = e.replace("#", "");
  const t = parseInt(e, 16), n = t >> 16 & 255, o = t >> 8 & 255, r = t & 255;
  return { r: n, g: o, b: r };
}
function be(e, t, n) {
  const o = (r) => {
    const s = r.toString(16);
    return s.length === 1 ? "0" + s : s;
  };
  return `#${o(e)}${o(t)}${o(n)}`;
}
function X(e) {
  const { r: t, g: n, b: o } = G(H(e)), r = t / 255, s = n / 255, a = o / 255, d = Math.max(r, s, a), c = Math.min(r, s, a), u = d - c;
  let m = 0;
  u !== 0 && (d === r ? m = (s - a) / u % 6 : d === s ? m = (a - r) / u + 2 : m = (r - s) / u + 4, m *= 60, m < 0 && (m += 360));
  const g = (d + c) / 2, v = u === 0 ? 0 : u / (1 - Math.abs(2 * g - 1));
  return { h: m, s: v, l: g };
}
function V(e, t, n) {
  const o = (1 - Math.abs(2 * n - 1)) * t, r = o * (1 - Math.abs(e / 60 % 2 - 1)), s = n - o / 2;
  let a = 0, d = 0, c = 0;
  return e >= 0 && e < 60 ? [a, d, c] = [o, r, 0] : e < 120 ? [a, d, c] = [r, o, 0] : e < 180 ? [a, d, c] = [0, o, r] : e < 240 ? [a, d, c] = [0, r, o] : e < 300 ? [a, d, c] = [r, 0, o] : [a, d, c] = [o, 0, r], be(Math.round((a + s) * 255), Math.round((d + s) * 255), Math.round((c + s) * 255));
}
function I(e, t) {
  const { h: n, s: o, l: r } = X(e);
  return V(n, o, Math.max(0, r - t));
}
function U(e, t) {
  const { h: n, s: o, l: r } = X(e);
  return V(n, o, Math.min(1, r + t));
}
function T(e, t) {
  const { r: n, g: o, b: r } = G(H(e));
  t > 1 && (t = 1), t < 0 && (t = 0);
  const s = Math.min(1, Math.max(0, t));
  return `rgba(${n}, ${o}, ${r}, ${s})`;
}
const Y = i.memo(() => (xe(), null));
Y.displayName = "Theme.InjectToHTML";
function xe() {
  const { themeColor: e } = p.useThemeColor(), t = i.useMemo(
    () => ({
      light: U(e, 0.2),
      dark: I(e, 0.8),
      origin: H(e),
      opacity: T(e, 0.6)
    }),
    [e]
  );
  i.useEffect(() => {
    if (typeof window > "u")
      return;
    const n = "theme-palette-style";
    let o = document.getElementById(n);
    o || (o = document.createElement("style"), o.id = n, document.head.appendChild(o));
    const r = `
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
    o.innerHTML = r;
  }, [t]);
}
const F = i.createContext(void 0), ye = b.Light, Me = W.EmeraldMamba, Ce = {
  THEME_MODE: "VENOMOUS_UI__THEME_MODE",
  THEME_COLOR: "VENOMOUS_UI__THEME_COLOR"
};
function ke({
  children: e,
  defaultThemeMode: t = ye,
  defaultThemeColor: n = Me,
  storageKey: o = Ce
}) {
  const [r, s] = i.useState(!1), [a, d] = i.useState(t), [c, u] = i.useState(n), m = i.useCallback(
    (h) => {
      h !== a && d(h);
    },
    [a]
  ), g = i.useCallback(() => {
    d((h) => h === b.Dark ? b.Light : b.Dark);
  }, []), v = i.useCallback(() => {
    d(t);
  }, [t]), _ = i.useCallback(
    (h) => {
      h !== c && u(h);
    },
    [c]
  ), $ = i.useCallback(() => {
    u(n);
  }, [n]);
  i.useEffect(() => {
    if (typeof window < "u") {
      s(!0);
      const h = localStorage.getItem(o.THEME_MODE);
      h && Object.values(b).includes(h) && d(h);
      const R = localStorage.getItem(o.THEME_COLOR);
      R && Object.values(W).includes(R) && u(R);
    }
  }, [o]), i.useEffect(() => {
    typeof window < "u" && r && (localStorage.setItem(o.THEME_MODE, a), localStorage.setItem(o.THEME_COLOR, c));
  }, [r, o, a, c]);
  const ce = i.useMemo(
    () => ({
      themeMode: a,
      setThemeMode: m,
      toggleThemeMode: g,
      resetThemeMode: v,
      isDarkThemeMode: a === b.Dark,
      themeColor: c,
      setThemeColor: _,
      resetThemeColor: $
    }),
    [a, m, g, v, c, _, $]
  );
  return /* @__PURE__ */ l(F.Provider, { value: ce, children: e });
}
function Se() {
  const [e, t] = i.useState(f.xs);
  return i.useEffect(() => {
    const n = () => {
      const r = window.innerWidth;
      return r >= C.xxl ? f.xxl : r >= C.xl ? f.xl : r >= C.lg ? f.lg : r >= C.md ? f.md : r >= C.sm ? f.sm : f.xs;
    }, o = () => {
      t(n());
    };
    return o(), window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, []), {
    screenSize: e
  };
}
function we() {
  const e = i.useContext(F);
  if (e === void 0)
    throw new Error("useThemeColor must be used within a ThemeModeProvider");
  return {
    themeColor: e.themeColor,
    setThemeColor: e.setThemeColor,
    resetThemeColor: e.resetThemeColor
  };
}
function q() {
  const e = i.useContext(F);
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
const p = {
  Provider: ke,
  InjectToHTML: Y,
  useThemeMode: q,
  useThemeColor: we,
  useThemeBreakpoint: Se
};
function Q({
  isLoading: e,
  isDisabled: t,
  color: n = "auto",
  variant: o
}) {
  const { themeColor: r } = p.useThemeColor(), { themeMode: s, isDarkThemeMode: a } = p.useThemeMode(), d = i.useMemo(() => {
    switch (o) {
      case "contained":
        return r;
      case "outlined":
        return y[s].secondary;
      case "ghost":
      default:
        return y[s].primary;
    }
  }, [o, n, r, s]), c = i.useMemo(() => {
    switch (o) {
      case "contained":
        return a ? I(r, 0.025) : I(r, 0.25);
      case "outlined":
        return r;
      case "ghost":
      default:
        return w[s].secondary;
    }
  }, [o, n, r, s]), u = i.useMemo(() => {
    switch (o) {
      case "contained":
        return "#ffffff";
      case "outlined":
        return r;
      case "ghost":
      default:
        return O[s].primary;
    }
  }, [o, n, r, s]), m = i.useMemo(() => D[s].sm, [o, n, r, s]);
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
        fontSize: M.text,
        fontWeight: "bold",
        cursor: e ? "wait" : t ? "not-allowed" : "pointer",
        borderRadius: "8px",
        borderWidth: 2,
        borderColor: c,
        boxShadow: m,
        backgroundColor: d,
        color: u
      }),
      [e, t, c, d, u, m]
    )
  };
}
const J = i.memo(
  ({
    type: e = "button",
    style: t,
    variant: n = "contained",
    color: o = "auto",
    isLoading: r,
    isDisabled: s,
    icon: a,
    iconWidth: d = 20,
    ...c
  }) => {
    const { buttonStyles: u } = Q({
      isLoading: r,
      isDisabled: s,
      variant: n,
      color: o
    });
    return /* @__PURE__ */ l(
      "button",
      {
        type: e,
        disabled: r || s,
        style: {
          ...u,
          padding: 0,
          ...t
        },
        ...c,
        children: /* @__PURE__ */ l(x, { icon: r ? "eos-icons:loading" : a, width: d })
      }
    );
  }
);
J.displayName = "Buttons.Icon";
const Z = i.memo(({ style: e, text: t, ...n }) => /* @__PURE__ */ l(
  "code",
  {
    style: {
      color: "#B71D18",
      backgroundColor: "#E7E9EB",
      border: "1px solid #CCCCCC",
      borderRadius: "4px",
      padding: "2px 4px",
      fontSize: M.small,
      fontWeight: 600,
      ...e
    },
    ...n,
    children: t
  }
));
Z.displayName = "Typography.Code";
function N({ ellipsis: e = 0 }) {
  const { themeMode: t } = p.useThemeMode(), n = i.useMemo(() => O[t].primary, [t]), o = i.useMemo(() => e ? {
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: e,
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  } : {}, [e]);
  return {
    fontColor: n,
    ellipsisStyles: o
  };
}
const K = i.memo(({ children: e, style: t, ellipsis: n = 0, ...o }) => {
  const { fontColor: r, ellipsisStyles: s } = N({ ellipsis: n });
  return /* @__PURE__ */ l(
    "p",
    {
      style: {
        boxSizing: "border-box",
        margin: 0,
        width: "100%",
        fontSize: M.text,
        lineHeight: 1.5,
        color: r,
        ...s,
        ...t
      },
      ...o,
      children: e
    }
  );
});
K.displayName = "Typography.Paragraph";
const ee = i.memo(({ style: e, text: t, as: n = "span", ...o }) => {
  const { fontColor: r } = N({ ellipsis: 0 });
  return n === "strong" ? /* @__PURE__ */ l(
    "strong",
    {
      style: {
        fontSize: M.text,
        fontWeight: "bold",
        color: r,
        ...e
      },
      ...o,
      children: t
    }
  ) : n === "small" ? /* @__PURE__ */ l(
    "small",
    {
      style: {
        fontSize: M.small,
        color: r,
        ...e
      },
      ...o,
      children: t
    }
  ) : /* @__PURE__ */ l(
    "span",
    {
      style: {
        fontSize: M.text,
        fontWeight: "normal",
        color: r,
        ...e
      },
      ...o,
      children: t
    }
  );
});
ee.displayName = "Typography.Text";
const A = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, te = i.memo(({ text: e, as: t = A.h4, ellipsis: n = 0, style: o, ...r }) => {
  const s = i.useMemo(() => A[t], [t]), a = i.useMemo(() => M[t], [t]), { fontColor: d, ellipsisStyles: c } = N({ ellipsis: n });
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
        color: d,
        ...c,
        ...o
      },
      ...r,
      children: e
    }
  );
});
te.displayName = "Typography.Title";
const B = {
  Title: te,
  Text: ee,
  Code: Z,
  Paragraph: K
}, Te = i.memo(
  ({
    type: e = "button",
    style: t,
    text: n,
    variant: o = "contained",
    color: r = "auto",
    isLoading: s,
    isDisabled: a,
    icon: d,
    iconPosition: c = "start",
    iconWidth: u = 20,
    ...m
  }) => {
    const { buttonStyles: g } = Q({
      isLoading: s,
      isDisabled: a,
      variant: o,
      color: r
    });
    return /* @__PURE__ */ S(
      "button",
      {
        type: e,
        disabled: s || a,
        style: {
          flexDirection: c === "start" ? "row" : "row-reverse",
          ...g,
          ...t
        },
        ...m,
        children: [
          d && /* @__PURE__ */ l(
            x,
            {
              icon: d,
              width: u,
              style: {
                marginLeft: c === "start" ? "0px" : "8px",
                marginRight: c === "end" ? "0px" : "8px"
              }
            }
          ),
          /* @__PURE__ */ l(B.Text, { text: n, style: { color: "inherit" } }),
          /* @__PURE__ */ l(
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
                backgroundColor: g.backgroundColor
              },
              children: /* @__PURE__ */ l(x, { icon: "eos-icons:loading", width: 24 })
            }
          )
        ]
      }
    );
  }
);
Te.displayName = "Button";
const ve = {
  Icon: J
}, oe = i.memo(({ children: e, style: t, row: n = !0, column: o = !1, gap: r = "8px", ...s }) => /* @__PURE__ */ l(
  "div",
  {
    style: {
      boxSizing: "border-box",
      display: "flex",
      width: "100%",
      flexDirection: o ? "column" : "row",
      alignItems: n ? "flex-start" : t == null ? void 0 : t.alignItems,
      ...Array.isArray(r) ? { rowGap: r[0], columnGap: r[1] } : { gap: r },
      position: "relative",
      ...t
    },
    ...s,
    children: e
  }
));
oe.displayName = "Space.Flex";
const re = i.memo(({ children: e, style: t, columns: n = 1, spacing: o = 16, ...r }) => {
  const { screenSize: s } = p.useThemeBreakpoint(), a = i.useMemo(() => Ee(n, s), [n, s]), d = i.useMemo(() => ze(o, s), [o, s]);
  return /* @__PURE__ */ l(
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
      ...r,
      children: e
    }
  );
});
re.displayName = "Space.Grid";
const k = Object.keys(f);
function Ee(e = 1, t) {
  if (typeof e == "number")
    return e;
  const n = k.indexOf(t);
  for (let o = n; o < k.length; o++) {
    const r = e[k[o]];
    if (r !== void 0) return r;
  }
  return 1;
}
function ze(e = 16, t) {
  if (typeof e == "number")
    return e;
  const n = k.indexOf(t);
  for (let o = n; o < k.length; o++) {
    const r = e[k[o]];
    if (r !== void 0) return r;
  }
  return 16;
}
const L = {
  Flex: oe,
  Grid: re
}, P = i.memo(
  ({ children: e, style: t, isTransparent: n = !1, isFrostedGlass: o = !1, isOutline: r = !1, ...s }) => {
    const { themeMode: a } = p.useThemeMode();
    return /* @__PURE__ */ l(
      "div",
      {
        style: {
          boxSizing: "border-box",
          borderRadius: "8px",
          padding: "16px",
          backgroundColor: n ? "transparent" : y[a].secondary,
          boxShadow: r ? "none" : D[a].base,
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
P.displayName = "Card";
const ne = i.memo(({ children: e, height: t = 300, width: n = 200, title: o, coverImage: r }) => /* @__PURE__ */ S(
  P,
  {
    style: {
      height: t,
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
        L.Flex,
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
            B.Title,
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
ne.displayName = "Cards.Book";
const ie = i.memo(({ children: e, title: t = "", description: n = "" }) => /* @__PURE__ */ S(P, { style: { position: "relative" }, children: [
  (t || n) && /* @__PURE__ */ S(L.Flex, { column: !0, gap: 2, style: { paddingRight: "48px" }, children: [
    /* @__PURE__ */ l(B.Title, { as: "h6", text: t, ellipsis: 1 }),
    /* @__PURE__ */ l(B.Paragraph, { ellipsis: 3, children: n })
  ] }),
  /* @__PURE__ */ l(
    ve.Icon,
    {
      icon: "solar:hamburger-menu-line-duotone",
      variant: "ghost",
      style: { position: "absolute", top: "4px", right: "4px" }
    }
  ),
  e && /* @__PURE__ */ l(L.Flex, { column: !0, children: e })
] }));
ie.displayName = "Cards.Product";
const Ae = {
  Book: ne,
  Product: ie
}, Ie = i.memo(({ children: e, breakpoint: t = f.lg, style: n, ...o }) => /* @__PURE__ */ l(
  "div",
  {
    style: {
      margin: "0 auto",
      width: "100%",
      maxWidth: C[t],
      ...n
    },
    ...o,
    children: e
  }
));
Ie.displayName = "Container";
const Be = i.memo(
  ({ isOpen: e, onClose: t, children: n, position: o = "left", maskClosable: r = !0, width: s = 300, height: a = 300, style: d }) => {
    const { themeMode: c } = p.useThemeMode();
    return /* @__PURE__ */ S(j, { children: [
      /* @__PURE__ */ l(
        "div",
        {
          onClick: r ? t : void 0,
          style: {
            boxSizing: "border-box",
            display: e ? "block" : "none",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 999,
            width: "100vw",
            height: "100svh",
            backgroundColor: T(y[c].primary, 0.5),
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
            backgroundColor: y[c].secondary,
            boxShadow: D[c].base,
            transition: "transform 0.3s ease",
            zIndex: 1e3,
            transform: o === "left" ? e ? "translateX(0)" : "translateX(-100%)" : o === "right" ? e ? "translateX(0)" : "translateX(100%)" : o === "top" ? e ? "translateY(0)" : "translateY(-100%)" : e ? "translateY(0)" : "translateY(100%)",
            outlineStyle: "solid",
            outlineColor: w[c].primary,
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
            ...d
          },
          children: n
        }
      )
    ] });
  }
);
Be.displayName = "Drawer";
const De = i.memo(({ children: e, style: t, isOpen: n, onClose: o, maskClosable: r = !0 }) => {
  const { themeMode: s } = q();
  return /* @__PURE__ */ l(ue, { children: n && /* @__PURE__ */ l(
    z.div,
    {
      onClick: r ? o : void 0,
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
        backgroundColor: T(y[s].primary, 0.5),
        backdropFilter: "blur(2px)",
        opacity: n ? 1 : 0
      },
      children: /* @__PURE__ */ l(
        z.div,
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
            backgroundColor: y[s].secondary,
            outlineWidth: 1.5,
            outlineStyle: "solid",
            outlineColor: w[s].primary,
            boxShadow: D[s].base,
            ...t
          },
          children: e
        }
      )
    }
  ) });
});
De.displayName = "Modal";
const He = i.memo(({ position: e = "top-center", offset: t = 0, collapsable: n = !1 }) => {
  const { isDarkThemeMode: o } = p.useThemeMode();
  return /* @__PURE__ */ l(
    fe,
    {
      closeButton: !0,
      richColors: !0,
      invert: o,
      visibleToasts: 4,
      gap: 8,
      position: e,
      offset: t,
      mobileOffset: t / 2,
      expand: !n,
      icons: {
        success: /* @__PURE__ */ l(x, { icon: "solar:shield-check-line-duotone", color: "success" }),
        error: /* @__PURE__ */ l(x, { icon: "solar:shield-cross-line-duotone", color: "error" }),
        warning: /* @__PURE__ */ l(x, { icon: "solar:shield-warning-line-duotone", color: "warning" }),
        info: /* @__PURE__ */ l(x, { icon: "solar:info-circle-line-duotone", color: "info" })
      }
    }
  );
});
He.displayName = "Notification";
function je(e) {
  const t = {
    description: e.description
  };
  return e.type === "success" ? E.success(e.title, t) : e.type === "error" ? E.error(e.title, t) : e.type === "warning" ? E.warning(e.title, t) : E.info(e.title, t);
}
const se = i.memo(({ children: e, targetElementID: t }) => {
  const [n, o] = i.useState(null);
  return i.useEffect(() => {
    const r = document.getElementById(t);
    r && o(r);
  }, [t]), n ? pe(/* @__PURE__ */ l(j, { children: e }), n, t) : null;
});
se.displayName = "PortalRender";
const Ge = {
  Render: se
}, ae = i.memo(({ height: e = 8 }) => {
  const t = me(), { themeColor: n } = p.useThemeColor(), o = i.useRef(null), [r, s] = i.useState(0);
  return i.useEffect(() => {
    const a = () => {
      if (o.current) {
        const d = o.current.offsetWidth, c = d * 0.3;
        s(d - c);
      }
    };
    return a(), window.addEventListener("resize", a), () => window.removeEventListener("resize", a);
  }, []), i.useEffect(() => {
    if (r === 0) return;
    (async () => {
      for (; ; )
        await t.start({ x: [0, r], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } }), await t.start({ x: [r, 0], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } });
    })();
  }, [t, r]), /* @__PURE__ */ l(
    "div",
    {
      ref: o,
      style: {
        position: "relative",
        width: "100%",
        height: e,
        overflow: "hidden",
        backgroundColor: T(n, 0.2),
        borderRadius: e / 2,
        boxShadow: "rgba(0, 0, 0, 0.14) 0px 6px 10px 0px"
      },
      children: /* @__PURE__ */ l(
        z.div,
        {
          animate: t,
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
ae.displayName = "Progress.LoadingBar";
const le = i.memo(({ height: e = 8 }) => {
  const { scrollYProgress: t } = he(), { themeColor: n } = p.useThemeColor(), o = i.useMemo(
    () => ({
      light: U(n, 0.2),
      dark: I(n, 0.8),
      origin: H(n),
      opacity: T(n, 0.6)
    }),
    [n]
  );
  return /* @__PURE__ */ l(
    z.div,
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
le.displayName = "Progress.Scrollbar";
const Xe = {
  Scrollbar: le,
  LoadingBar: ae
};
function Ve() {
  const [e, t] = i.useState(!1), n = i.useCallback(() => t(!0), []), o = i.useCallback(() => t(!1), []), r = i.useCallback(() => t((s) => !s), []);
  return {
    isOpen: e,
    setIsOpen: t,
    open: n,
    close: o,
    toggle: r
  };
}
export {
  y as BackgroundColors,
  w as BorderColors,
  f as BreakPointName,
  Te as Button,
  ve as Buttons,
  P as Card,
  Ae as Cards,
  Ie as Container,
  Be as Drawer,
  x as Icon,
  De as Modal,
  He as Notification,
  Ge as Portal,
  Xe as Progress,
  Pe as SemanticColors,
  L as Space,
  O as TextColors,
  p as Theme,
  C as ThemeBreakPoint,
  W as ThemeColor,
  b as ThemeMode,
  D as ThemeShadow,
  B as Typography,
  M as TypographySize,
  I as getDarkerHex,
  U as getLighterHex,
  T as getOpacityHex,
  $e as getSystemThemeMode,
  _e as getThemeColors,
  H as hexNormalize,
  X as hexToHsl,
  G as hexToRgb,
  V as hslToHex,
  je as notify,
  be as rgbToHex,
  Ve as useHandler
};
