import { jsx as l, jsxs as k, Fragment as re } from "react/jsx-runtime";
import i from "react";
import { Icon as Re } from "@iconify/react";
import { AnimatePresence as A, motion as S, useAnimation as Le, useScroll as Oe } from "framer-motion";
import { Toaster as He, toast as U } from "sonner";
import { createPortal as ze } from "react-dom";
var g = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e))(g || {});
const D = {
  success: "#4caf50",
  error: "#f44336",
  warning: "#ff9800",
  info: "#2196f3"
}, C = {
  [g.Dark]: {
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
  [g.Light]: {
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
}, H = {
  [g.Dark]: {
    primary: "#181818",
    // 主背景
    secondary: "#242424"
    // 卡片/面板背景
  },
  [g.Light]: {
    primary: "#ffffff",
    // 主背景
    secondary: "#f8f9fa"
    // 卡片/面板背景
  }
}, j = {
  [g.Dark]: {
    primary: "rgba(255, 255, 255, 0.65)",
    secondary: "rgba(255, 255, 255, 0.10)"
  },
  [g.Light]: {
    primary: "rgba(38, 85, 115, 0.15)",
    secondary: "rgba(0, 0, 0, 0.15)"
  }
};
var T = /* @__PURE__ */ ((e) => (e.xs = "xs", e.sm = "sm", e.md = "md", e.lg = "lg", e.xl = "xl", e.xxl = "xxl", e))(T || {});
const O = {
  xs: 444,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
  xxl: 2560
};
var q = /* @__PURE__ */ ((e) => (e.RubyCopperhead = "#DC2626", e.GarnetViper = "#B91C1C", e.BloodstoneAdder = "#7F1D1D", e.TopazCoral = "#EA580C", e.AmberRattlesnake = "#F59E0B", e.GoldenLanceHead = "#FBBF24", e.TopazMamushi = "#FACC15", e.EmeraldMamba = "#059669", e.MalachitePython = "#10B981", e.JadeBoomslang = "#22C55E", e.PeridotGaboonViper = "#84CC16", e.TurquoiseFerDeLance = "#06B6D4", e.SapphireCobra = "#2563EB", e.LapisLazuliSeaSnake = "#1D4ED8", e.AmethystAsp = "#7C3AED", e.AlexandriteAnaconda = "#7E22CE", e.FluoriteElapid = "#A855F7", e.TourmalineStiletto = "#DB2777", e.RoseQuartzDeathAdder = "#EC4899", e.MorganiteCoralSnake = "#F472B6", e.GraphitePuffAdder = "#1F2937", e.ObsidianBlackMamba = "#374151", e.HematiteHognose = "#6B7280", e.SmokyQuartzSandViper = "#9CA3AF", e))(q || {});
const G = {
  [g.Dark]: {
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
  [g.Light]: {
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
var V = /* @__PURE__ */ ((e) => (e.h1 = "h1", e.h2 = "h2", e.h3 = "h3", e.h4 = "h4", e.h5 = "h5", e.h6 = "h6", e.text = "text", e.strong = "strong", e.small = "small", e))(V || {});
const F = {
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
}, lt = (e) => ({
  background: H[e],
  border: j[e],
  text: C[e]
});
function We() {
  return typeof window < "u" ? window.matchMedia("(prefers-color-scheme: dark)").matches : !1;
}
function ct() {
  return We() ? g.Dark : g.Light;
}
function X(e) {
  return e = e.replace("#", ""), e.length === 3 && (e = e.split("").map((o) => o + o).join("")), `#${e}`;
}
function ne(e) {
  e = e.replace("#", "");
  const o = parseInt(e, 16), r = o >> 16 & 255, t = o >> 8 & 255, n = o & 255;
  return { r, g: t, b: n };
}
function Fe(e, o, r) {
  const t = (n) => {
    const s = n.toString(16);
    return s.length === 1 ? "0" + s : s;
  };
  return `#${t(e)}${t(o)}${t(r)}`;
}
function ie(e) {
  const { r: o, g: r, b: t } = ne(X(e)), n = o / 255, s = r / 255, a = t / 255, c = Math.max(n, s, a), d = Math.min(n, s, a), u = c - d;
  let h = 0;
  u !== 0 && (c === n ? h = (s - a) / u % 6 : c === s ? h = (a - n) / u + 2 : h = (n - s) / u + 4, h *= 60, h < 0 && (h += 360));
  const p = (c + d) / 2, M = u === 0 ? 0 : u / (1 - Math.abs(2 * p - 1));
  return { h, s: M, l: p };
}
function se(e, o, r) {
  const t = (1 - Math.abs(2 * r - 1)) * o, n = t * (1 - Math.abs(e / 60 % 2 - 1)), s = r - t / 2;
  let a = 0, c = 0, d = 0;
  return e >= 0 && e < 60 ? [a, c, d] = [t, n, 0] : e < 120 ? [a, c, d] = [n, t, 0] : e < 180 ? [a, c, d] = [0, t, n] : e < 240 ? [a, c, d] = [0, n, t] : e < 300 ? [a, c, d] = [n, 0, t] : [a, c, d] = [t, 0, n], Fe(Math.round((a + s) * 255), Math.round((c + s) * 255), Math.round((d + s) * 255));
}
function ae(e, o) {
  const { h: r, s: t, l: n } = ie(e);
  return se(r, t, Math.max(0, n - o));
}
function Z(e, o) {
  const { h: r, s: t, l: n } = ie(e);
  return se(r, t, Math.min(1, n + o));
}
function _(e, o) {
  const { r, g: t, b: n } = ne(X(e));
  o > 1 && (o = 1), o < 0 && (o = 0);
  const s = Math.min(1, Math.max(0, o));
  return `rgba(${r}, ${t}, ${n}, ${s})`;
}
const le = i.memo(() => (Pe(), null));
le.displayName = "Theme.InjectToHTML";
function Pe() {
  const { themeColor: e } = b.useThemeColor(), o = i.useMemo(
    () => ({
      light: Z(e, 0.2),
      dark: ae(e, 0.8),
      origin: X(e),
      opacity: _(e, 0.6)
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
const K = i.createContext(void 0), Be = g.Light, De = q.EmeraldMamba, $e = {
  THEME_MODE: "VENOMOUS_UI__THEME_MODE",
  THEME_COLOR: "VENOMOUS_UI__THEME_COLOR"
};
function Ae({
  children: e,
  defaultThemeMode: o = Be,
  defaultThemeColor: r = De,
  storageKey: t = $e
}) {
  const [n, s] = i.useState(!1), [a, c] = i.useState(o), [d, u] = i.useState(r), h = i.useCallback(
    (m) => {
      m !== a && c(m);
    },
    [a]
  ), p = i.useCallback(() => {
    c((m) => m === g.Dark ? g.Light : g.Dark);
  }, []), M = i.useCallback(() => {
    c(o);
  }, [o]), f = i.useCallback(
    (m) => {
      m !== d && u(m);
    },
    [d]
  ), L = i.useCallback(() => {
    u(r);
  }, [r]);
  i.useEffect(() => {
    if (typeof window < "u") {
      s(!0);
      const m = localStorage.getItem(t.THEME_MODE);
      m && Object.values(g).includes(m) && c(m);
      const x = localStorage.getItem(t.THEME_COLOR);
      x && Object.values(q).includes(x) && u(x);
    }
  }, [t]), i.useEffect(() => {
    typeof window < "u" && n && (localStorage.setItem(t.THEME_MODE, a), localStorage.setItem(t.THEME_COLOR, d));
  }, [n, t, a, d]);
  const W = i.useMemo(
    () => ({
      themeMode: a,
      setThemeMode: h,
      toggleThemeMode: p,
      resetThemeMode: M,
      isDarkThemeMode: a === g.Dark,
      themeColor: d,
      setThemeColor: f,
      resetThemeColor: L
    }),
    [a, h, p, M, d, f, L]
  );
  return /* @__PURE__ */ l(K.Provider, { value: W, children: e });
}
function _e() {
  const [e, o] = i.useState(T.xs);
  return i.useEffect(() => {
    const r = () => {
      const n = window.innerWidth;
      return n >= O.xxl ? T.xxl : n >= O.xl ? T.xl : n >= O.lg ? T.lg : n >= O.md ? T.md : n >= O.sm ? T.sm : T.xs;
    }, t = () => {
      o(r());
    };
    return t(), window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
  }, []), {
    screenSize: e
  };
}
function Ne() {
  const e = i.useContext(K);
  if (e === void 0)
    throw new Error("useThemeColor must be used within a ThemeModeProvider");
  return {
    themeColor: e.themeColor,
    setThemeColor: e.setThemeColor,
    resetThemeColor: e.resetThemeColor
  };
}
function je() {
  const e = i.useContext(K);
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
  Provider: Ae,
  InjectToHTML: le,
  useThemeMode: je,
  useThemeColor: Ne,
  useThemeBreakpoint: _e
}, E = i.memo(({ style: e, icon: o, width: r = 20, semanticColor: t, ...n }) => {
  const { themeMode: s } = b.useThemeMode(), a = i.useMemo(() => t ? D[t] : C[s].primary, [s, t]);
  return /* @__PURE__ */ l(
    Re,
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
E.displayName = "Icon";
const I = {
  contained: "contained",
  outlined: "outlined",
  ghost: "ghost"
};
function ce({
  isLoading: e,
  isDisabled: o,
  variant: r,
  semanticColor: t
}) {
  const { themeColor: n } = b.useThemeColor(), { themeMode: s } = b.useThemeMode(), a = i.useMemo(() => {
    let p = "";
    if (e || o)
      return p = H[s].secondary, p;
    switch (r) {
      case I.contained:
        p = t ? D[t] : n;
        break;
      case I.outlined:
        p = H[s].secondary;
        break;
      case I.ghost:
      default:
        p = "transparent";
        break;
    }
    return p;
  }, [r, n, s, e, o, t]), c = i.useMemo(() => {
    let p = "";
    if (e || o)
      return p = j[s].secondary, p;
    switch (r) {
      case I.contained:
        p = t ? Z(D[t], 0.25) : _(n, 0.5);
        break;
      case I.outlined:
        p = t ? D[t] : n;
        break;
      case I.ghost:
        p = j[s].secondary;
        break;
      default:
        p = "transparent";
        break;
    }
    return p;
  }, [r, n, s, e, o, t]), d = i.useMemo(() => {
    let p = "";
    if (e || o)
      return p = C[s].disabled, p;
    switch (r) {
      case I.contained:
        p = "#ffffff";
        break;
      case I.outlined:
        p = t ? D[t] : n;
        break;
      case I.ghost:
      default:
        p = C[s].primary;
        break;
    }
    return p;
  }, [r, n, s, e, o, t]), u = i.useMemo(() => G[s].secondary, [r, n, s]);
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
        fontSize: F.text,
        fontWeight: "bold",
        cursor: e ? "wait" : o ? "not-allowed" : "pointer",
        borderRadius: "8px",
        borderWidth: 2,
        borderColor: c,
        boxShadow: u,
        backgroundColor: a,
        color: d
      }),
      [e, o, c, a, d, u]
    )
  };
}
const de = i.memo(
  ({
    type: e = "button",
    style: o,
    variant: r = "contained",
    isLoading: t,
    isDisabled: n,
    icon: s,
    iconWidth: a = 20,
    semanticColor: c,
    ...d
  }) => {
    const { buttonStyles: u } = ce({
      isLoading: t,
      isDisabled: n || d.disabled,
      variant: r,
      semanticColor: c
    });
    return /* @__PURE__ */ l(
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
        children: /* @__PURE__ */ l(
          E,
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
de.displayName = "Buttons.Icon";
const ue = i.memo(({ style: e, text: o, ...r }) => /* @__PURE__ */ l(
  "code",
  {
    style: {
      color: q.TourmalineStiletto,
      backgroundColor: "#E7E9EB",
      border: "1px solid #CCCCCC",
      borderRadius: "4px",
      padding: "2px 4px",
      fontSize: F.small,
      fontWeight: 600,
      ...e
    },
    ...r,
    children: o
  }
));
ue.displayName = "Typography.Code";
function ee({ ellipsis: e = 0, semanticColor: o }) {
  const { themeMode: r } = b.useThemeMode(), t = i.useMemo(() => o ? D[o] : C[r].primary, [r, o]), n = i.useMemo(() => e ? {
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
const pe = i.memo(
  ({ children: e, style: o, ellipsis: r = 0, semanticColor: t, ...n }) => {
    const { fontColor: s, ellipsisStyles: a } = ee({ ellipsis: r, semanticColor: t });
    return /* @__PURE__ */ l(
      "p",
      {
        style: {
          boxSizing: "border-box",
          margin: 0,
          width: "100%",
          fontSize: F.text,
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
pe.displayName = "Typography.Paragraph";
const oe = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, Q = {
  span: "span",
  small: "small",
  strong: "strong"
}, he = i.memo(
  ({ style: e, text: o, as: r = Q.span, isEllipsis: t = !1, semanticColor: n, ...s }) => {
    const { fontColor: a, ellipsisStyles: c } = ee({ ellipsis: t ? 1 : 0, semanticColor: n });
    return r === Q.strong ? /* @__PURE__ */ l(
      "strong",
      {
        style: {
          fontSize: F[V.strong],
          fontWeight: "bold",
          color: a,
          ...c,
          ...e
        },
        ...s,
        children: o
      }
    ) : r === Q.small ? /* @__PURE__ */ l(
      "small",
      {
        style: {
          fontSize: F[V.small],
          color: a,
          ...c,
          ...e
        },
        ...s,
        children: o
      }
    ) : /* @__PURE__ */ l(
      "span",
      {
        style: {
          fontSize: F[V.text],
          fontWeight: "normal",
          color: a,
          ...c,
          ...e
        },
        ...s,
        children: o
      }
    );
  }
);
he.displayName = "Typography.Text";
const fe = i.memo(
  ({ text: e, as: o = oe.h4, ellipsis: r = 0, style: t, semanticColor: n, ...s }) => {
    const a = i.useMemo(() => oe[o], [o]), c = i.useMemo(() => F[o], [o]), { fontColor: d, ellipsisStyles: u } = ee({ ellipsis: r, semanticColor: n });
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
          ...u,
          ...t
        },
        ...s,
        children: e
      }
    );
  }
);
fe.displayName = "Typography.Title";
const R = {
  Title: fe,
  Text: he,
  Code: ue,
  Paragraph: pe
}, J = i.memo(
  ({
    type: e = "button",
    style: o,
    text: r,
    variant: t = "contained",
    isLoading: n,
    isDisabled: s,
    icon: a,
    iconPosition: c = "start",
    iconWidth: d = 20,
    semanticColor: u,
    ...h
  }) => {
    const { buttonStyles: p } = ce({
      isLoading: n,
      isDisabled: s || h.disabled,
      variant: t,
      semanticColor: u
    });
    return /* @__PURE__ */ k(
      "button",
      {
        type: e,
        disabled: n || s,
        style: {
          flexDirection: c === "start" ? "row" : "row-reverse",
          WebkitTapHighlightColor: "transparent",
          ...p,
          ...o
        },
        ...h,
        children: [
          a && /* @__PURE__ */ l(
            E,
            {
              icon: a,
              width: d,
              style: {
                marginLeft: c === "start" ? "0px" : "8px",
                marginRight: c === "end" ? "0px" : "8px"
              }
            }
          ),
          /* @__PURE__ */ l(R.Text, { text: r, style: { color: "inherit" } }),
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
                backgroundColor: p.backgroundColor
              },
              children: /* @__PURE__ */ l(E, { icon: "svg-spinners:270-ring-with-bg", width: 24 })
            }
          )
        ]
      }
    );
  }
);
J.displayName = "Button";
const me = {
  Icon: de
}, xe = i.memo(({ children: e, style: o, row: r = !0, column: t = !1, gap: n = "8px", ...s }) => /* @__PURE__ */ l(
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
const ge = i.memo(({ children: e, style: o, columns: r = 1, spacing: t = 16, ...n }) => {
  const { screenSize: s } = b.useThemeBreakpoint(), a = i.useMemo(() => Ge(r, s), [r, s]), c = i.useMemo(() => Ue(t, s), [t, s]);
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
      ...n,
      children: e
    }
  );
});
ge.displayName = "Space.Grid";
const $ = Object.keys(T);
function Ge(e = 1, o) {
  if (typeof e == "number")
    return e;
  const r = $.indexOf(o);
  for (let t = r; t < $.length; t++) {
    const n = e[$[t]];
    if (n !== void 0) return n;
  }
  return 1;
}
function Ue(e = 16, o) {
  if (typeof e == "number")
    return e;
  const r = $.indexOf(o);
  for (let t = r; t < $.length; t++) {
    const n = e[$[t]];
    if (n !== void 0) return n;
  }
  return 16;
}
const z = {
  Flex: xe,
  Grid: ge
}, te = {
  div: "div",
  article: "article"
}, N = i.memo(
  ({
    children: e,
    style: o,
    isTransparent: r = !1,
    isFrostedGlass: t = !1,
    isOutline: n = !1,
    as: s = te.div,
    ...a
  }) => {
    const { themeMode: c } = b.useThemeMode();
    return /* @__PURE__ */ l(
      s,
      {
        style: {
          boxSizing: "border-box",
          borderRadius: "8px",
          padding: "16px",
          outlineWidth: 1.5,
          outlineStyle: "solid",
          outlineColor: n ? j[c].secondary : "transparent",
          backgroundColor: r ? "transparent" : H[c].secondary,
          boxShadow: n ? "none" : G[c].primary,
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
N.displayName = "Card";
const be = i.memo(({ children: e, height: o = 300, width: r = 200, title: t, coverImage: n }) => /* @__PURE__ */ k(
  N,
  {
    as: te.article,
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
        z.Flex,
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
            R.Title,
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
be.displayName = "Cards.Book";
const Ve = i.lazy(() => import("./index.chunk.js").then((e) => ({ default: e.Popover }))), ye = i.memo(({ children: e, title: o = "", description: r = "", renderMenu: t }) => /* @__PURE__ */ k(N, { as: te.article, style: { position: "relative" }, children: [
  (o || r) && /* @__PURE__ */ k(z.Flex, { column: !0, gap: 2, style: { paddingRight: "48px" }, children: [
    /* @__PURE__ */ l(R.Title, { as: "h6", text: o, ellipsis: 1 }),
    /* @__PURE__ */ l(R.Paragraph, { ellipsis: 3, children: r })
  ] }),
  /* @__PURE__ */ l(i.Suspense, { fallback: null, children: /* @__PURE__ */ l(
    Ve,
    {
      placement: "bottom",
      renderTrigger: (n) => /* @__PURE__ */ l(
        me.Icon,
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
  e && /* @__PURE__ */ l(z.Flex, { column: !0, children: e })
] }));
ye.displayName = "Cards.Product";
const dt = {
  Book: be,
  Product: ye
}, qe = i.memo(({ children: e, breakpoint: o = T.lg, style: r, ...t }) => /* @__PURE__ */ l(
  "div",
  {
    style: {
      margin: "0 auto",
      width: "100%",
      maxWidth: O[o],
      ...r
    },
    ...t,
    children: e
  }
));
qe.displayName = "Container";
const Xe = i.memo(
  ({ isOpen: e, onClose: o, children: r, position: t = "left", maskClosable: n = !0, width: s = 300, height: a = 300, style: c }) => {
    const { themeMode: d } = b.useThemeMode();
    return /* @__PURE__ */ k(re, { children: [
      /* @__PURE__ */ l(A, { children: e && /* @__PURE__ */ l(
        S.div,
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
            backgroundColor: _(H[d].primary, 0.5),
            backdropFilter: "blur(2px)",
            pointerEvents: e ? "auto" : "none"
          }
        }
      ) }),
      /* @__PURE__ */ l(A, { children: e && /* @__PURE__ */ l(
        S.div,
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
            N,
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
              children: r
            }
          )
        }
      ) })
    ] });
  }
);
Xe.displayName = "Drawer";
function Ye({ isDisabled: e }) {
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
function Qe() {
  const [e, o] = i.useState(!1), r = i.useCallback(() => o(!0), []), t = i.useCallback(() => o(!1), []), n = i.useCallback(() => o((s) => !s), []);
  return {
    isOpen: e,
    setIsOpen: o,
    open: r,
    close: t,
    toggle: n
  };
}
const Je = {
  ul: "ul"
}, Ze = {
  li: "li"
}, Me = i.memo(
  ({
    as: e = Ze.li,
    style: o,
    icon: r,
    text: t,
    subText: n,
    isDisabled: s = !1,
    isActive: a = !1,
    actionButton: c = void 0,
    ...d
  }) => {
    const { themeMode: u } = b.useThemeMode(), { themeColor: h } = b.useThemeColor(), { isHovering: p, handleMouseDown: M, handleMouseUp: f, handleMouseLeave: L } = Ye({ isDisabled: s }), W = i.useCallback(
      (x) => {
        s || (x.currentTarget.style.boxShadow = G[u].tertiary);
      },
      [s]
    ), m = i.useCallback(
      (x) => {
        s || (x.currentTarget.style.boxShadow = p ? G[u].tertiary : "none");
      },
      [s]
    );
    return /* @__PURE__ */ l(
      e,
      {
        onMouseDown: M,
        onMouseUp: f,
        onMouseLeave: L,
        onMouseOver: W,
        onMouseOut: m,
        style: {
          boxSizing: "border-box",
          listStyle: "none",
          margin: 0,
          padding: "8px",
          paddingLeft: r ? "8px" : "16px",
          paddingRight: c ? "8px" : "16px",
          borderRadius: "8px",
          cursor: s ? "not-allowed" : d != null && d.onClick ? "pointer" : "default",
          transition: "box-shadow 0.2s ease-in-out",
          ...o
        },
        ...d,
        children: /* @__PURE__ */ k(z.Flex, { row: !0, style: { alignItems: "center" }, children: [
          r && /* @__PURE__ */ l(
            E,
            {
              icon: r,
              width: 24,
              style: {
                color: s ? C[u].disabled : a ? h : C[u].primary
              }
            }
          ),
          /* @__PURE__ */ k(
            z.Flex,
            {
              column: !0,
              gap: 0,
              style: {
                flex: 1,
                flexGrow: 1,
                maxWidth: r && !c ? "calc(100% - 32px)" : !r && c ? "calc(100% - 48px)" : r && c ? "calc(100% - 80px)" : "100%"
              },
              children: [
                /* @__PURE__ */ l(
                  R.Text,
                  {
                    text: t,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      color: s ? C[u].disabled : a ? h : C[u].primary
                    }
                  }
                ),
                n && /* @__PURE__ */ l(
                  R.Text,
                  {
                    as: "small",
                    text: n,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      color: s ? C[u].disabled : a ? h : C[u].quaternary
                    }
                  }
                )
              ]
            }
          ),
          !!(c != null && c.icon) && /* @__PURE__ */ l(
            me.Icon,
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
Me.displayName = "Menu.Item";
const ke = i.memo(({ children: e, style: o, as: r = Je.ul, ...t }) => /* @__PURE__ */ l(
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
ke.displayName = "Menu.List";
const ut = {
  List: ke,
  Item: Me
}, we = i.memo(
  ({ children: e, style: o, isOpen: r, onClose: t, maskClosable: n = !0, maxBreakpoint: s = T.xs }) => {
    const { themeMode: a } = b.useThemeMode();
    return /* @__PURE__ */ l(A, { children: r && /* @__PURE__ */ l(
      S.div,
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
          backgroundColor: _(H[a].primary, 0.5),
          backdropFilter: "blur(2px)",
          opacity: r ? 1 : 0
        },
        children: /* @__PURE__ */ l(
          S.div,
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
              width: O[s],
              maxWidth: O[s]
            },
            children: /* @__PURE__ */ l(N, { style: { width: "100%", ...o }, children: e })
          }
        )
      }
    ) });
  }
);
we.displayName = "Modal";
const ve = i.memo(
  ({
    style: e,
    isOpen: o,
    onClose: r,
    maskClosable: t = !1,
    maxBreakpoint: n = T.xs,
    title: s,
    description: a,
    isConformLoading: c = !1,
    cancelText: d = "Cancel",
    confirmText: u = "Confirm",
    onCancel: h,
    onConfirm: p
  }) => {
    const M = i.useCallback(async () => {
      await h(), r();
    }, [h, r]), f = i.useCallback(async () => {
      await p(), r();
    }, [p, r]);
    return /* @__PURE__ */ k(we, { isOpen: o, onClose: r, style: e, maskClosable: t, maxBreakpoint: n, children: [
      /* @__PURE__ */ l(R.Title, { as: "h5", text: s }),
      /* @__PURE__ */ l(R.Paragraph, { style: { padding: "8px 0 24px" }, children: a }),
      /* @__PURE__ */ k(z.Flex, { row: !0, gap: 8, style: { justifyContent: "flex-end" }, children: [
        /* @__PURE__ */ l(
          J,
          {
            variant: "outlined",
            text: d,
            onClick: () => void M(),
            isDisabled: c
          }
        ),
        /* @__PURE__ */ l(
          J,
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
ve.displayName = "Modals.Confirm";
const pt = {
  Confirm: ve
}, Ke = i.memo(({ position: e = "top-center", offset: o = 0, collapsable: r = !1 }) => {
  const { isDarkThemeMode: t } = b.useThemeMode();
  return /* @__PURE__ */ l(
    He,
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
        success: /* @__PURE__ */ l(E, { icon: "solar:shield-check-line-duotone", color: "success" }),
        error: /* @__PURE__ */ l(E, { icon: "solar:shield-cross-line-duotone", color: "error" }),
        warning: /* @__PURE__ */ l(E, { icon: "solar:shield-warning-line-duotone", color: "warning" }),
        info: /* @__PURE__ */ l(E, { icon: "solar:info-circle-line-duotone", color: "info" })
      }
    }
  );
});
Ke.displayName = "Notification";
function ht(e) {
  const o = {
    description: e.description
  };
  return e.type === "success" ? U.success(e.title, o) : e.type === "error" ? U.error(e.title, o) : e.type === "warning" ? U.warning(e.title, o) : U.info(e.title, o);
}
const et = i.memo(
  ({ children: e, style: o, contentStyle: r, placement: t = "bottom", renderTrigger: n, trigger: s = "click" }) => {
    var m;
    const a = Qe(), c = i.useRef(null), d = i.useRef(null), u = i.useRef(null), [h, p] = i.useState({ top: 0, left: 0 });
    i.useEffect(() => {
      if (s !== "click") return;
      const x = (w) => {
        var P;
        u.current && !u.current.contains(w.target) && !((P = d.current) != null && P.contains(w.target)) && a.close();
      };
      return a.isOpen && document.addEventListener("mousedown", x), () => {
        document.removeEventListener("mousedown", x);
      };
    }, [a, s]), i.useEffect(() => {
      if (a.isOpen && c.current && d.current && u.current) {
        const x = c.current.getBoundingClientRect(), w = d.current.getBoundingClientRect(), P = u.current.offsetWidth, y = u.current.offsetHeight, v = w.top - x.top, B = w.left - x.left, Y = t === "bottom" ? v + w.height : v - y, Ie = B + w.width / 2 - P / 2;
        p({ top: Y, left: Ie });
      }
    }, [a.isOpen, t]);
    const L = s === "hover" ? {
      onMouseEnter: () => {
        s === "hover" && a.open();
      },
      onMouseLeave: () => {
        s === "hover" && a.close();
      }
    } : {}, W = s === "click" ? { onClick: a.toggle } : {};
    return /* @__PURE__ */ k("div", { ref: c, style: { display: "inline-block", position: "relative", ...o }, ...L, children: [
      /* @__PURE__ */ l("div", { ref: d, ...W, style: { display: "inline-block" }, children: n(a.isOpen) }),
      /* @__PURE__ */ l(A, { children: a.isOpen && /* @__PURE__ */ l(
        S.div,
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
            minWidth: (m = d.current) == null ? void 0 : m.offsetWidth
          },
          children: /* @__PURE__ */ l(
            N,
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
et.displayName = "Popover";
const Te = i.memo(({ children: e, targetElementID: o }) => {
  const [r, t] = i.useState(null);
  return i.useEffect(() => {
    const n = document.getElementById(o);
    n && t(n);
  }, [o]), r ? ze(/* @__PURE__ */ l(re, { children: e }), r, o) : null;
});
Te.displayName = "PortalRender";
const ft = {
  Render: Te
}, Ce = i.memo(({ height: e = 8 }) => {
  const o = Le(), { themeColor: r } = b.useThemeColor(), t = i.useRef(null), [n, s] = i.useState(0);
  return i.useEffect(() => {
    const a = () => {
      if (t.current) {
        const c = t.current.offsetWidth, d = c * 0.3;
        s(c - d);
      }
    };
    return a(), window.addEventListener("resize", a), () => window.removeEventListener("resize", a);
  }, []), i.useEffect(() => {
    if (n === 0) return;
    (async () => {
      for (; ; )
        await o.start({ x: [0, n], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } }), await o.start({ x: [n, 0], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } });
    })();
  }, [o, n]), /* @__PURE__ */ l(
    "div",
    {
      ref: t,
      style: {
        position: "relative",
        width: "100%",
        height: e,
        overflow: "hidden",
        backgroundColor: _(r, 0.2),
        borderRadius: e / 2,
        boxShadow: "rgba(0, 0, 0, 0.14) 0px 6px 10px 0px"
      },
      children: /* @__PURE__ */ l(
        S.div,
        {
          animate: o,
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
Ce.displayName = "Progress.LoadingBar";
const Se = i.memo(({ height: e = 8 }) => {
  const { scrollYProgress: o } = Oe(), { themeColor: r } = b.useThemeColor(), t = i.useMemo(
    () => ({
      light: Z(r, 0.2),
      dark: ae(r, 0.8),
      origin: X(r),
      opacity: _(r, 0.6)
    }),
    [r]
  );
  return /* @__PURE__ */ l(
    S.div,
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
Se.displayName = "Progress.Scrollbar";
const mt = {
  Scrollbar: Se,
  LoadingBar: Ce
}, tt = i.memo(
  ({
    tabs: e,
    defaultActiveIndex: o = 0,
    onChange: r,
    variant: t = "pills",
    tabContainerStyle: n,
    tabItemContainerStyle: s,
    tabItemStyle: a,
    tabIndicatorStyle: c,
    tabContentStyle: d
  }) => {
    const { themeMode: u } = b.useThemeMode(), { themeColor: h } = b.useThemeColor(), [p, M] = i.useState(!1), [f, L] = i.useState(o), [W, m] = i.useState({}), x = i.useRef([]), w = i.useCallback(() => {
      if (x.current[f]) {
        const y = x.current[f];
        if (y) {
          const v = !!e[f].icon, { offsetLeft: B, offsetWidth: Y } = y;
          m({
            left: B,
            width: Y + (p && v ? 24 : 0)
          });
        }
      }
    }, [f, t, e, p]);
    i.useLayoutEffect(() => (M(!0), () => {
      M(!1);
    }), []), i.useEffect(() => {
      w();
    }, [w]), i.useEffect(() => {
      const y = requestAnimationFrame(() => {
        w();
      });
      return () => cancelAnimationFrame(y);
    }, [f, e.length, w]);
    const P = i.useCallback(
      (y, v) => {
        M(!1), i.startTransition(() => {
          L(y);
        }), r(y, v);
      },
      [r]
    );
    return /* @__PURE__ */ k(z.Flex, { column: !0, gap: 0, style: { width: "100%", ...n }, children: [
      /* @__PURE__ */ k(
        z.Flex,
        {
          row: !0,
          style: {
            position: "relative",
            ...t === "pills" && {
              background: H[u].secondary,
              padding: "4px",
              borderRadius: "8px"
            },
            ...t === "underline" && {
              borderBottomWidth: 1.5,
              borderBottomStyle: "solid",
              borderBottomColor: j[u].secondary
            },
            ...s
          },
          children: [
            e.map((y, v) => /* @__PURE__ */ k(
              S.button,
              {
                ref: (B) => {
                  B && (x.current[v] = B);
                },
                onClick: () => P(v, y),
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
                  ...a
                },
                children: [
                  y.icon && /* @__PURE__ */ l(
                    E,
                    {
                      icon: y.icon,
                      width: 20,
                      style: {
                        marginRight: "8px",
                        color: v === f ? h : "inherit"
                      }
                    }
                  ),
                  /* @__PURE__ */ l(
                    R.Text,
                    {
                      text: y.label,
                      style: {
                        color: v === f ? h : "inherit"
                      }
                    }
                  )
                ]
              },
              y.key || v
            )),
            /* @__PURE__ */ l(
              S.div,
              {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.2, ease: "easeOut" },
                layout: !0,
                style: {
                  position: "absolute",
                  ...W,
                  ...t === "pills" && {
                    top: "4px",
                    zIndex: 1,
                    height: "calc(100% - 8px)",
                    borderRadius: "6px",
                    background: H[u].primary,
                    boxShadow: G[u].secondary
                  },
                  ...t === "underline" && {
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
      /* @__PURE__ */ l(A, { mode: "wait", children: e[f] && /* @__PURE__ */ l(
        S.div,
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
tt.displayName = "Tab";
const Ee = i.memo(({ children: e, isOpen: o }) => /* @__PURE__ */ l(A, { initial: !1, children: o && /* @__PURE__ */ l(
  S.div,
  {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
    transition: { duration: 0.2 },
    style: { overflow: "hidden" },
    children: e
  }
) }));
Ee.displayName = "Transitions.Collapse";
const xt = {
  Collapse: Ee
};
export {
  H as BackgroundColors,
  j as BorderColors,
  T as BreakPointName,
  J as Button,
  me as Buttons,
  N as Card,
  dt as Cards,
  qe as Container,
  Xe as Drawer,
  E as Icon,
  ut as Menu,
  we as Modal,
  pt as Modals,
  Ke as Notification,
  et as Popover,
  ft as Portal,
  mt as Progress,
  D as SemanticColors,
  z as Space,
  tt as Tab,
  C as TextColors,
  b as Theme,
  O as ThemeBreakPoint,
  q as ThemeColor,
  g as ThemeMode,
  G as ThemeShadow,
  xt as Transitions,
  R as Typography,
  F as TypographySize,
  V as TypographySizeName,
  ae as getDarkerHex,
  Z as getLighterHex,
  _ as getOpacityHex,
  ct as getSystemThemeMode,
  lt as getThemeColors,
  X as hexNormalize,
  ie as hexToHsl,
  ne as hexToRgb,
  se as hslToHex,
  ht as notify,
  Fe as rgbToHex,
  Ye as useElementHover,
  Qe as useHandler
};
