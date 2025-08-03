import { jsx as c, jsxs as b, Fragment as se } from "react/jsx-runtime";
import s from "react";
import { Icon as Ke } from "@iconify/react";
import { AnimatePresence as _, motion as E, useAnimation as et, useScroll as tt } from "framer-motion";
import { Toaster as ot, toast as Q } from "sonner";
import { createPortal as rt } from "react-dom";
var C = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e))(C || {});
const j = {
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
}, B = {
  [C.Dark]: {
    primary: "#181818",
    // 主背景
    secondary: "#242424"
    // 卡片/面板背景
  },
  [C.Light]: {
    primary: "#ffffff",
    // 主背景
    secondary: "#f8f9fa"
    // 卡片/面板背景
  }
}, q = {
  [C.Dark]: {
    primary: "rgba(255, 255, 255, 0.65)",
    secondary: "rgba(255, 255, 255, 0.10)"
  },
  [C.Light]: {
    primary: "rgba(38, 85, 115, 0.15)",
    secondary: "rgba(0, 0, 0, 0.15)"
  }
};
var v = /* @__PURE__ */ ((e) => (e.xs = "xs", e.sm = "sm", e.md = "md", e.lg = "lg", e.xl = "xl", e.xxl = "xxl", e))(v || {});
const N = {
  xs: 444,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
  xxl: 2560
};
var z = /* @__PURE__ */ ((e) => (e.RubyCopperhead = "#DC2626", e.GarnetViper = "#B91C1C", e.BloodstoneAdder = "#7F1D1D", e.TopazCoral = "#EA580C", e.AmberRattlesnake = "#F59E0B", e.GoldenLanceHead = "#FBBF24", e.TopazMamushi = "#FACC15", e.EmeraldMamba = "#059669", e.MalachitePython = "#10B981", e.JadeBoomslang = "#22C55E", e.PeridotGaboonViper = "#84CC16", e.TurquoiseFerDeLance = "#06B6D4", e.SapphireCobra = "#2563EB", e.LapisLazuliSeaSnake = "#1D4ED8", e.AmethystAsp = "#7C3AED", e.AlexandriteAnaconda = "#7E22CE", e.FluoriteElapid = "#A855F7", e.TourmalineStiletto = "#DB2777", e.RoseQuartzDeathAdder = "#EC4899", e.MorganiteCoralSnake = "#F472B6", e.GraphitePuffAdder = "#1F2937", e.ObsidianBlackMamba = "#374151", e.HematiteHognose = "#6B7280", e.SmokyQuartzSandViper = "#9CA3AF", e))(z || {});
const $ = {
  [C.Dark]: {
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
var Z = /* @__PURE__ */ ((e) => (e.h1 = "h1", e.h2 = "h2", e.h3 = "h3", e.h4 = "h4", e.h5 = "h5", e.h6 = "h6", e.text = "text", e.strong = "strong", e.small = "small", e))(Z || {});
const D = {
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
  border: q[e],
  text: S[e]
});
function nt() {
  return typeof window < "u" ? window.matchMedia("(prefers-color-scheme: dark)").matches : !1;
}
function Nt() {
  return nt() ? C.Dark : C.Light;
}
function ie(e) {
  return e = e.replace("#", ""), e.length === 3 && (e = e.split("").map((o) => o + o).join("")), `#${e}`;
}
function ge(e) {
  e = e.replace("#", "");
  const o = parseInt(e, 16), r = o >> 16 & 255, t = o >> 8 & 255, n = o & 255;
  return { r, g: t, b: n };
}
function st(e, o, r) {
  const t = (n) => {
    const i = n.toString(16);
    return i.length === 1 ? "0" + i : i;
  };
  return `#${t(e)}${t(o)}${t(r)}`;
}
function xe(e) {
  const { r: o, g: r, b: t } = ge(ie(e)), n = o / 255, i = r / 255, l = t / 255, a = Math.max(n, i, l), d = Math.min(n, i, l), u = a - d;
  let h = 0;
  u !== 0 && (a === n ? h = (i - l) / u % 6 : a === i ? h = (l - n) / u + 2 : h = (n - i) / u + 4, h *= 60, h < 0 && (h += 360));
  const p = (a + d) / 2, m = u === 0 ? 0 : u / (1 - Math.abs(2 * p - 1));
  return { h, s: m, l: p };
}
function ye(e, o, r) {
  const t = (1 - Math.abs(2 * r - 1)) * o, n = t * (1 - Math.abs(e / 60 % 2 - 1)), i = r - t / 2;
  let l = 0, a = 0, d = 0;
  return e >= 0 && e < 60 ? [l, a, d] = [t, n, 0] : e < 120 ? [l, a, d] = [n, t, 0] : e < 180 ? [l, a, d] = [0, t, n] : e < 240 ? [l, a, d] = [0, n, t] : e < 300 ? [l, a, d] = [n, 0, t] : [l, a, d] = [t, 0, n], st(Math.round((l + i) * 255), Math.round((a + i) * 255), Math.round((d + i) * 255));
}
function it(e, o) {
  const { h: r, s: t, l: n } = xe(e);
  return ye(r, t, Math.max(0, n - o));
}
function K(e, o) {
  const { h: r, s: t, l: n } = xe(e);
  return ye(r, t, Math.min(1, n + o));
}
function G(e, o) {
  const { r, g: t, b: n } = ge(ie(e));
  o > 1 && (o = 1), o < 0 && (o = 0);
  const i = Math.min(1, Math.max(0, o));
  return `rgba(${r}, ${t}, ${n}, ${i})`;
}
const be = s.memo(() => (lt(), null));
be.displayName = "Theme.InjectToHTML";
function lt() {
  const { themeColor: e } = k.useThemeColor(), o = s.useMemo(
    () => ({
      light: K(e, 0.2),
      dark: it(e, 0.8),
      origin: ie(e),
      opacity: G(e, 0.6)
    }),
    [e]
  );
  s.useEffect(() => {
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
const le = s.createContext(void 0), at = C.Light, ct = z.EmeraldMamba, dt = {
  THEME_MODE: "VENOMOUS_UI__THEME_MODE",
  THEME_COLOR: "VENOMOUS_UI__THEME_COLOR"
};
function ut({
  children: e,
  defaultThemeMode: o = at,
  defaultThemeColor: r = ct,
  storageKey: t = dt
}) {
  const [n, i] = s.useState(!1);
  s.useEffect(() => {
    i(!0);
  }, []);
  const [l, a] = s.useState(o), [d, u] = s.useState(r), h = s.useCallback((g) => {
    a(g);
  }, []), p = s.useCallback(() => {
    a((g) => g === C.Dark ? C.Light : C.Dark);
  }, []), m = s.useCallback(() => {
    a(o);
  }, [o]), f = s.useCallback((g) => {
    u(g);
  }, []), x = s.useCallback(() => {
    u(r);
  }, [r]);
  s.useEffect(() => {
    if (n) {
      const g = localStorage.getItem(t.THEME_MODE);
      g && Object.values(C).includes(g) && a(g);
      const y = localStorage.getItem(t.THEME_COLOR);
      y && Object.values(z).includes(y) && u(y);
    }
  }, [n, t.THEME_COLOR, t.THEME_MODE]), s.useEffect(() => {
    n && (localStorage.setItem(t.THEME_MODE, l), localStorage.setItem(t.THEME_COLOR, d));
  }, [n, t.THEME_MODE, t.THEME_COLOR, l, d]);
  const w = s.useMemo(
    () => ({
      themeMode: l,
      setThemeMode: h,
      toggleThemeMode: p,
      resetThemeMode: m,
      isDarkThemeMode: l === C.Dark,
      themeColor: d,
      setThemeColor: f,
      resetThemeColor: x
    }),
    [l, h, p, m, d, f, x]
  );
  return /* @__PURE__ */ c(le.Provider, { value: w, children: e });
}
const de = new Map(
  Object.values(v).map((e, o) => [e, o])
);
function pt() {
  const [e, o] = s.useState(!1), [r, t] = s.useState(() => ht()), [n, i] = s.useState(!1), l = s.useRef(null);
  s.useEffect(() => {
    const d = () => {
      const p = window.innerWidth;
      return p >= N.xxl ? v.xxl : p >= N.xl ? v.xl : p >= N.lg ? v.lg : p >= N.md ? v.md : p >= N.sm ? v.sm : v.xs;
    }, u = () => {
      l.current && clearTimeout(l.current), l.current = setTimeout(() => {
        const p = d();
        t((m) => m !== p ? p : m);
      }, 100);
    }, h = d();
    return t(h), i(!0), o(!0), window.addEventListener("resize", u, { passive: !0 }), () => {
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
    return v.xs;
  const e = navigator.userAgent, o = /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(e), r = /iPad|Android(?!.*Mobile)|Kindle|Silk/i.test(e);
  return o && !r ? v.xs : r ? v.md : v.lg;
}
function mt() {
  const e = s.useContext(le);
  if (e === void 0)
    throw new Error("useThemeColor must be used within a ThemeModeProvider");
  return {
    themeColor: e.themeColor,
    setThemeColor: e.setThemeColor,
    resetThemeColor: e.resetThemeColor
  };
}
function ft() {
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
  useThemeMode: ft,
  useThemeColor: mt,
  useThemeBreakpoint: pt
}, R = s.memo(({ style: e, icon: o, width: r = 20, semanticColor: t, ...n }) => {
  const { themeMode: i } = k.useThemeMode(), l = s.useMemo(() => t ? j[t] : S[i].primary, [i, t]);
  return /* @__PURE__ */ c(
    Ke,
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
        color: l,
        ...e
      },
      ...n
    }
  );
});
R.displayName = "Icon";
const P = {
  contained: "contained",
  outlined: "outlined",
  ghost: "ghost"
};
function ke({
  isLoading: e,
  isDisabled: o,
  variant: r,
  semanticColor: t
}) {
  const { themeColor: n } = k.useThemeColor(), { themeMode: i } = k.useThemeMode(), l = s.useMemo(() => {
    let p = "";
    if (e || o)
      return p = B[i].secondary, p;
    switch (r) {
      case P.contained:
        p = t ? j[t] : n;
        break;
      case P.outlined:
        p = B[i].secondary;
        break;
      case P.ghost:
      default:
        p = "transparent";
        break;
    }
    return p;
  }, [r, n, i, e, o, t]), a = s.useMemo(() => {
    let p = "";
    if (e || o)
      return p = q[i].secondary, p;
    switch (r) {
      case P.contained:
        p = t ? K(j[t], 0.25) : G(n, 0.5);
        break;
      case P.outlined:
        p = t ? j[t] : n;
        break;
      case P.ghost:
        p = q[i].secondary;
        break;
      default:
        p = "transparent";
        break;
    }
    return p;
  }, [r, n, i, e, o, t]), d = s.useMemo(() => {
    let p = "";
    if (e || o)
      return p = S[i].disabled, p;
    switch (r) {
      case P.contained:
        p = "#ffffff";
        break;
      case P.outlined:
        p = t ? j[t] : n;
        break;
      case P.ghost:
      default:
        p = S[i].primary;
        break;
    }
    return p;
  }, [r, n, i, e, o, t]), u = s.useMemo(() => {
    switch (r) {
      case P.ghost:
        return "none";
      case P.contained:
      case P.outlined:
      default:
        return $[i].secondary;
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
        fontSize: D.text,
        fontWeight: "bold",
        cursor: e ? "wait" : o ? "not-allowed" : "pointer",
        borderRadius: "8px",
        borderWidth: 2,
        borderColor: a,
        boxShadow: u,
        backgroundColor: l,
        color: d
      }),
      [e, o, a, l, d, u]
    )
  };
}
const we = s.memo(
  ({
    type: e = "button",
    style: o,
    variant: r = "contained",
    isLoading: t,
    isDisabled: n,
    icon: i,
    iconWidth: l = 20,
    semanticColor: a,
    ...d
  }) => {
    const { buttonStyles: u } = ke({
      isLoading: t,
      isDisabled: n || d.disabled,
      variant: r,
      semanticColor: a
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
          R,
          {
            icon: t ? "eos-icons:loading" : i,
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
const Me = s.memo(({ style: e, text: o, ...r }) => /* @__PURE__ */ c(
  "code",
  {
    style: {
      color: z.TourmalineStiletto,
      backgroundColor: "#E7E9EB",
      border: "1px solid #CCCCCC",
      borderRadius: "4px",
      padding: "2px 4px",
      fontSize: D.small,
      fontWeight: 600,
      ...e
    },
    ...r,
    children: o
  }
));
Me.displayName = "Typography.Code";
function ae({ ellipsis: e = 0, semanticColor: o }) {
  const { themeMode: r } = k.useThemeMode(), t = s.useMemo(() => o ? j[o] : S[r].primary, [r, o]), n = s.useMemo(() => e ? {
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
const ve = s.memo(
  ({ children: e, style: o, ellipsis: r = 0, semanticColor: t, ...n }) => {
    const { fontColor: i, ellipsisStyles: l } = ae({ ellipsis: r, semanticColor: t });
    return /* @__PURE__ */ c(
      "p",
      {
        style: {
          boxSizing: "border-box",
          margin: 0,
          width: "100%",
          fontSize: D.text,
          lineHeight: 1.5,
          color: i,
          ...l,
          ...o
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
  ({ style: e, text: o, as: r = oe.span, isEllipsis: t = !1, semanticColor: n, ...i }) => {
    const { fontColor: l, ellipsisStyles: a } = ae({ ellipsis: t ? 1 : 0, semanticColor: n });
    return r === oe.strong ? /* @__PURE__ */ c(
      "strong",
      {
        style: {
          fontSize: D[Z.strong],
          fontWeight: "bold",
          color: l,
          ...a,
          ...e
        },
        ...i,
        children: o
      }
    ) : r === oe.small ? /* @__PURE__ */ c(
      "small",
      {
        style: {
          fontSize: D[Z.small],
          color: l,
          ...a,
          ...e
        },
        ...i,
        children: o
      }
    ) : /* @__PURE__ */ c(
      "span",
      {
        style: {
          fontSize: D[Z.text],
          fontWeight: "normal",
          color: l,
          ...a,
          ...e
        },
        ...i,
        children: o
      }
    );
  }
);
Ce.displayName = "Typography.Text";
const Se = s.memo(
  ({ text: e, as: o = ue.h4, ellipsis: r = 0, style: t, semanticColor: n, ...i }) => {
    const l = s.useMemo(() => ue[o], [o]), a = s.useMemo(() => D[o], [o]), { fontColor: d, ellipsisStyles: u } = ae({ ellipsis: r, semanticColor: n });
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
          ...t
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
    style: o,
    text: r,
    variant: t = "contained",
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
      variant: t,
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
          ...o
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
  ({ children: e, style: o, row: r = !0, column: t = !1, gap: n = "8px", ...i }) => /* @__PURE__ */ c(
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
      ...i,
      children: e
    }
  )
);
Fe.displayName = "Space.Flex";
const Re = s.memo(({ children: e, style: o, columns: r = 1, spacing: t = 16, ...n }) => {
  const { screenSize: i } = k.useThemeBreakpoint(), l = i ?? v.xs, a = s.useMemo(
    () => gt(r, l),
    [r, l]
  ), d = s.useMemo(
    () => xt(t, l),
    [t, l]
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
        ...o
      },
      ...n,
      children: e
    }
  );
});
Re.displayName = "Space.Grid";
const U = Object.keys(v);
function gt(e = 1, o) {
  if (typeof e == "number")
    return e;
  const r = U.indexOf(o);
  for (let t = r; t < U.length; t++) {
    const n = e[U[t]];
    if (n !== void 0) return n;
  }
  return 1;
}
function xt(e = 16, o) {
  if (typeof e == "number")
    return e;
  const r = U.indexOf(o);
  for (let t = r; t < U.length; t++) {
    const n = e[U[t]];
    if (n !== void 0) return n;
  }
  return 16;
}
const I = {
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
  ({ children: e, style: o, as: r = ce.div, variant: t = F.elevated, ...n }) => {
    const { themeMode: i } = k.useThemeMode(), l = s.useMemo(() => {
      switch (t) {
        case F.transparent:
          return "transparent";
        case F.elevated:
        case F.outlined:
        case F.frostedGlass:
        default:
          return B[i].secondary;
      }
    }, [i, t]), a = s.useMemo(() => {
      switch (t) {
        case F.outlined:
        case F.transparent:
          return q[i].secondary;
        case F.elevated:
        case F.frostedGlass:
        default:
          return "transparent";
      }
    }, [i, t]), d = s.useMemo(() => {
      switch (t) {
        case F.outlined:
        case F.transparent:
          return "none";
        case F.elevated:
        case F.frostedGlass:
        default:
          return $[i].primary;
      }
    }, [i, t]);
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
          ...t === F.frostedGlass && {
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
X.displayName = "Card";
const Ee = s.memo(({ children: e, height: o = 300, width: r = 200, title: t, coverImage: n }) => /* @__PURE__ */ b(
  X,
  {
    as: ce.article,
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
        I.Flex,
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
            T.Title,
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
Ee.displayName = "Cards.Book";
const yt = s.lazy(() => import("./index.chunk.js").then((e) => ({ default: e.Popover }))), Ie = s.memo(({ children: e, title: o = "", description: r = "", renderMenu: t }) => /* @__PURE__ */ b(X, { as: ce.article, style: { position: "relative" }, children: [
  (o || r) && /* @__PURE__ */ b(I.Flex, { column: !0, gap: 2, style: { paddingRight: "48px" }, children: [
    /* @__PURE__ */ c(T.Title, { as: "h6", text: o, ellipsis: 1 }),
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
      children: t()
    }
  ) }),
  e && /* @__PURE__ */ c(I.Flex, { column: !0, children: e })
] }));
Ie.displayName = "Cards.Product";
const Dt = {
  Book: Ee,
  Product: Ie
}, bt = s.memo(({ children: e, breakpoint: o = v.lg, style: r, ...t }) => /* @__PURE__ */ c(
  "div",
  {
    style: {
      margin: "0 auto",
      width: "100%",
      maxWidth: N[o],
      ...r
    },
    ...t,
    children: e
  }
));
bt.displayName = "Container";
const kt = s.memo(
  ({ isOpen: e, onClose: o, children: r, position: t = "left", maskClosable: n = !0, width: i = 300, height: l = 300, style: a }) => {
    const { themeMode: d } = k.useThemeMode();
    return /* @__PURE__ */ b(se, { children: [
      /* @__PURE__ */ c(_, { children: e && /* @__PURE__ */ c(
        E.div,
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
            backgroundColor: G(B[d].primary, 0.5),
            backdropFilter: "blur(2px)",
            pointerEvents: e ? "auto" : "none"
          }
        }
      ) }),
      /* @__PURE__ */ c(_, { children: e && /* @__PURE__ */ c(
        E.div,
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
              height: l
            },
            ...t === "bottom" && {
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
    style: o,
    htmlFor: r,
    label: t = "",
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
          color: n ? z.RubyCopperhead : S[d].primary,
          ...o
        },
        ...a,
        children: [
          /* @__PURE__ */ b(I.Flex, { row: !0, gap: 0, style: { width: "100%", alignItems: "center" }, children: [
            i && /* @__PURE__ */ c(T.Text, { as: "small", text: "*", style: { color: z.RubyCopperhead, marginRight: "2px" } }),
            /* @__PURE__ */ c(
              T.Text,
              {
                as: "small",
                text: t,
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
function W({
  fullWidth: e = !1,
  isDisabled: o = !1,
  isError: r = !1,
  isFocused: t = !1
}) {
  const { themeMode: n } = k.useThemeMode(), { themeColor: i } = k.useThemeColor(), l = s.useMemo(() => o ? B[n].secondary : "transparent", [o, n]), a = s.useMemo(() => r ? z.RubyCopperhead : o ? S[n].disabled : S[n].primary, [r, o, n]), d = s.useMemo(() => r ? z.RubyCopperhead : q[n].primary, [r, n]), u = s.useMemo(() => r ? z.RubyCopperhead : i, [r, n]), h = s.useMemo(
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
      borderColor: d,
      ...t && {
        outlineOffset: -1.5,
        outlineWidth: 1.5,
        outlineStyle: "solid",
        outlineColor: u
      },
      ...o && {
        cursor: "not-allowed",
        outline: "none"
      }
    }),
    [e, t, o, l, a, d, u]
  );
  return {
    backgroundColor: l,
    textColor: a,
    borderColor: d,
    outlineColor: u,
    commonStyles: h
  };
}
function Oe({
  checked: e = !1,
  disabled: o = !1,
  onChange: r
}) {
  const t = s.useRef(null), [n, i] = s.useState(e);
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
      if (d.preventDefault(), d.stopPropagation(), !o && t.current) {
        const u = !n;
        i(u);
        const h = new Event("change", { bubbles: !0 });
        Object.defineProperty(h, "target", {
          writable: !1,
          value: { ...t.current, checked: u }
        }), r == null || r(h);
      }
    },
    [o, n, r]
  );
  return {
    inputRef: t,
    isChecked: n,
    toggleOriginalIsChecked: l,
    toggleCustomIsChecked: a
  };
}
const Le = s.memo(
  ({
    style: e,
    autoComplete: o = "off",
    required: r = !1,
    isError: t = !1,
    disabled: n = !1,
    name: i,
    value: l,
    checked: a = !1,
    onChange: d,
    label: u,
    labelPosition: h = "right",
    ...p
  }) => {
    const { inputRef: m, isChecked: f, toggleOriginalIsChecked: x, toggleCustomIsChecked: w } = Oe({
      checked: a,
      disabled: n,
      onChange: d
    }), { outlineColor: g, borderColor: y } = W({
      isDisabled: n,
      isError: t
    });
    return /* @__PURE__ */ b(ee, { label: u, required: r, isError: t, position: h, children: [
      /* @__PURE__ */ c(
        "input",
        {
          type: "checkbox",
          name: i,
          value: l,
          checked: f,
          ref: m,
          onChange: x,
          autoComplete: o,
          disabled: n,
          style: { display: "none", ...e },
          ...p
        }
      ),
      /* @__PURE__ */ c(
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
Le.displayName = "FormField.Checkbox";
function Y() {
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
function wt({ isDisabled: e }) {
  const [o, r] = s.useState(!1), t = s.useCallback(() => {
    r(!0);
  }, []), n = s.useCallback(() => {
    r(!1);
  }, []), i = s.useCallback(() => {
    r(!1);
  }, []);
  return s.useEffect(() => {
    e && r(!1);
  }, [e]), {
    isHovering: o,
    handleMouseDown: t,
    handleMouseUp: n,
    handleMouseLeave: i
  };
}
function Mt() {
  const [e, o] = s.useState(!1), r = s.useCallback(() => o(!0), []), t = s.useCallback(() => o(!1), []), n = s.useCallback(() => o((i) => !i), []);
  return {
    isOpen: e,
    setIsOpen: o,
    open: r,
    close: t,
    toggle: n
  };
}
const V = s.memo(
  ({
    children: e,
    style: o,
    fullWidth: r = !1,
    required: t = !1,
    disabled: n = !1,
    isError: i = !1,
    label: l,
    helpText: a,
    ...d
  }) => {
    const { themeMode: u } = k.useThemeMode(), { textColor: h } = W({
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
          color: i ? z.RubyCopperhead : S[u].primary,
          ...o
        },
        ...d,
        children: [
          l && /* @__PURE__ */ b("legend", { style: { padding: 0, color: "inherit" }, children: [
            t && /* @__PURE__ */ c(
              T.Text,
              {
                as: "small",
                text: "*",
                style: {
                  color: z.RubyCopperhead,
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
                  paddingLeft: t ? "2px" : "4px"
                }
              }
            )
          ] }),
          /* @__PURE__ */ b(I.Flex, { column: !0, gap: 0, style: { width: "100%" }, children: [
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
V.displayName = "FormField";
const Pe = s.memo(
  ({
    style: e,
    fullWidth: o,
    autoComplete: r = "off",
    required: t = !1,
    isError: n = !1,
    disabled: i = !1,
    name: l,
    value: a,
    label: d,
    helpText: u,
    ...h
  }) => {
    const { isFocused: p, handleFocus: m, handleBlur: f } = Y(), { commonStyles: x } = W({
      fullWidth: o,
      isDisabled: i,
      isError: n,
      isFocused: p
    });
    return /* @__PURE__ */ c(
      V,
      {
        label: d,
        required: t,
        disabled: i,
        isError: n,
        fullWidth: o,
        helpText: u,
        children: /* @__PURE__ */ c(
          "input",
          {
            type: "number",
            name: l,
            value: a,
            autoComplete: r,
            disabled: i,
            onFocus: i ? void 0 : m,
            onBlur: i ? void 0 : f,
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
    fullWidth: o,
    autoComplete: r = "off",
    required: t = !1,
    isError: n = !1,
    disabled: i = !1,
    name: l,
    value: a,
    label: d,
    helpText: u,
    ...h
  }) => {
    const { isFocused: p, handleFocus: m, handleBlur: f } = Y(), { outlineColor: x, commonStyles: w } = W({
      fullWidth: o,
      isDisabled: i,
      isError: n,
      isFocused: p
    }), { isPasswordVisible: g, togglePasswordVisibility: y } = vt(!1);
    return /* @__PURE__ */ c(
      V,
      {
        label: d,
        required: t,
        disabled: i,
        isError: n,
        fullWidth: o,
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
                  onFocus: i ? void 0 : m,
                  onBlur: i ? void 0 : f,
                  style: {
                    boxSizing: "border-box",
                    border: "none",
                    outline: "none",
                    position: "relative",
                    width: "calc(100% - 34px)",
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
  const [o, r] = s.useState(e), t = s.useCallback((n) => {
    s.startTransition(() => {
      n.preventDefault(), n.stopPropagation(), r((i) => !i);
    });
  }, []);
  return {
    isPasswordVisible: o,
    togglePasswordVisibility: t
  };
}
const He = s.memo(
  ({
    fullWidth: e = !1,
    required: o = !1,
    disabled: r = !1,
    name: t,
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
      (m) => {
        const f = m.target.value;
        h(f), d == null || d(m);
      },
      [d]
    );
    return /* @__PURE__ */ c(V, { label: n, required: o, disabled: r, isError: !1, fullWidth: e, children: /* @__PURE__ */ c(I.Flex, { column: !0, gap: 8, children: a.map((m) => {
      const f = `${t}-${m.value}`, x = r || m.disabled;
      return /* @__PURE__ */ c(
        ee,
        {
          label: m.label,
          position: i,
          htmlFor: f,
          style: {
            cursor: x ? "not-allowed" : "pointer",
            opacity: x ? 0.6 : 1
          },
          children: /* @__PURE__ */ c(
            "input",
            {
              id: f,
              type: "radio",
              autoComplete: "off",
              name: t,
              checked: m.value === u,
              value: m.value,
              disabled: x,
              onChange: p,
              style: { cursor: x ? "not-allowed" : "pointer" }
            }
          )
        },
        m.value
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
    style: o,
    icon: r,
    text: t,
    subText: n,
    isDisabled: i = !1,
    isActive: l = !1,
    actionButton: a = void 0,
    ...d
  }) => {
    const { themeMode: u } = k.useThemeMode(), { themeColor: h } = k.useThemeColor(), { isHovering: p, handleMouseDown: m, handleMouseUp: f, handleMouseLeave: x } = wt({
      isDisabled: i
    }), w = s.useCallback(
      (y) => {
        i || (y.currentTarget.style.boxShadow = $[u].tertiary);
      },
      [i]
    ), g = s.useCallback(
      (y) => {
        i || (y.currentTarget.style.boxShadow = p ? $[u].tertiary : "none");
      },
      [i]
    );
    return /* @__PURE__ */ c(
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
          paddingRight: a ? "8px" : "16px",
          borderRadius: "8px",
          cursor: i ? "not-allowed" : d != null && d.onClick ? "pointer" : "default",
          transition: "box-shadow 0.2s ease-in-out",
          ...o
        },
        ...d,
        children: /* @__PURE__ */ b(I.Flex, { row: !0, style: { alignItems: "center" }, children: [
          r && /* @__PURE__ */ c(
            R,
            {
              icon: r,
              width: 24,
              style: {
                color: i ? S[u].disabled : l ? h : S[u].primary
              }
            }
          ),
          /* @__PURE__ */ b(
            I.Flex,
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
                    text: t,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      color: i ? S[u].disabled : l ? h : S[u].primary
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
                      color: i ? S[u].disabled : l ? h : S[u].quaternary
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
const Ne = s.memo(({ children: e, style: o, as: r = Ct.ul, ...t }) => /* @__PURE__ */ c(
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
Ne.displayName = "Menu.List";
const pe = {
  List: Ne,
  Item: Be
}, De = s.memo(
  ({ children: e, style: o, contentStyle: r, placement: t = "bottom", renderTrigger: n, trigger: i = "click", onClickOutside: l }) => {
    var y;
    const a = Mt(), d = s.useRef(null), u = s.useRef(null), h = s.useRef(null), [p, m] = s.useState({ top: 0, left: 0 });
    s.useEffect(() => {
      if (i !== "click") return;
      const O = (L) => {
        var M;
        h.current && !h.current.contains(L.target) && !((M = u.current) != null && M.contains(L.target)) && (a.close(), l && l());
      };
      return a.isOpen && document.addEventListener("mousedown", O), () => {
        document.removeEventListener("mousedown", O);
      };
    }, [a, i, l]), s.useEffect(() => {
      if (a.isOpen && d.current && u.current && h.current) {
        const O = d.current.getBoundingClientRect(), L = u.current.getBoundingClientRect(), M = h.current.offsetWidth, H = h.current.offsetHeight, A = L.top - O.top, te = L.left - O.left, Je = t === "bottom" ? A + L.height : A - H, Ze = te + L.width / 2 - M / 2;
        m({ top: Je, left: Ze });
      }
    }, [a.isOpen, t]);
    const w = i === "hover" ? {
      onMouseEnter: () => {
        i === "hover" && a.open();
      },
      onMouseLeave: () => {
        i === "hover" && a.close();
      }
    } : {}, g = i === "click" ? { onClick: a.toggle } : {};
    return /* @__PURE__ */ b("div", { ref: d, style: { display: "inline-block", position: "relative", ...o }, ...w, children: [
      /* @__PURE__ */ c("div", { ref: u, ...g, style: { display: "inline-block", width: "100%" }, children: n(a.isOpen) }),
      /* @__PURE__ */ c(_, { children: a.isOpen && /* @__PURE__ */ c(
        E.div,
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
De.displayName = "Popover";
const We = s.memo(
  ({
    isOriginalSelect: e = !1,
    fullWidth: o,
    required: r = !1,
    isError: t = !1,
    disabled: n = !1,
    label: i,
    helpText: l,
    ...a
  }) => {
    const { isFocused: d, setIsFocused: u, handleFocus: h, handleBlur: p } = Y(), { commonStyles: m } = W({
      fullWidth: o,
      isDisabled: n,
      isError: t,
      isFocused: d
    });
    return /* @__PURE__ */ b(
      V,
      {
        label: i,
        required: r,
        disabled: n,
        isError: t,
        fullWidth: o,
        helpText: l,
        children: [
          e && /* @__PURE__ */ c(
            Ae,
            {
              commonStyles: m,
              handleFocus: h,
              handleBlur: p,
              disabled: n,
              ...a
            }
          ),
          !e && /* @__PURE__ */ c(_e, { commonStyles: m, setIsFocused: u, disabled: n, ...a })
        ]
      }
    );
  }
);
We.displayName = "FormField.Select";
const Ae = s.memo(
  ({
    commonStyles: e,
    handleFocus: o,
    handleBlur: r,
    name: t,
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
      name: t,
      autoComplete: n,
      disabled: d,
      onFocus: o,
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
), _e = s.memo(({ commonStyles: e, setIsFocused: o, disabled: r, name: t, value: n, options: i, onChange: l, style: a }) => {
  const [d, u] = s.useState(n || null), [h, p] = s.useState(!1);
  s.useEffect(() => {
    u(n || null);
  }, [n]);
  const m = s.useCallback(
    (g) => {
      u(g), p(!1), o(!1);
      const y = {
        target: { name: t, value: g },
        currentTarget: { name: t, value: g }
      };
      l == null || l(y);
    },
    [t, l, o]
  ), f = s.useCallback(
    (g) => {
      g.stopPropagation(), u(null), o(!1);
      const y = {
        target: { name: t, value: "" },
        currentTarget: { name: t, value: "" }
      };
      l == null || l(y);
    },
    [t, l, o]
  ), x = s.useMemo(
    () => {
      var g;
      return ((g = i.find((y) => y.value === d)) == null ? void 0 : g.label) || "";
    },
    [d]
  ), w = (a == null ? void 0 : a.width) ?? e.minWidth;
  return /* @__PURE__ */ c(
    De,
    {
      placement: "bottom",
      trigger: "click",
      style: { width: "100%" },
      onClickOutside: () => o(!1),
      renderTrigger: () => /* @__PURE__ */ b(
        I.Flex,
        {
          row: !0,
          onClick: () => o(!0),
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
                onClick: f,
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
            g.disabled || m(g.value);
          },
          style: { cursor: g.disabled ? "not-allowed" : "pointer", fontSize: D.small }
        },
        g.value
      )) })
    }
  );
});
Ae.displayName = "FormField.Select.Original";
_e.displayName = "FormField.Select.Custom";
const he = 48, me = 24, re = 18, fe = 4, $e = s.memo(
  ({
    style: e,
    autoComplete: o = "off",
    required: r = !1,
    isError: t = !1,
    disabled: n = !1,
    name: i,
    value: l,
    checked: a = !1,
    onChange: d,
    label: u,
    labelPosition: h = "right",
    ...p
  }) => {
    const { inputRef: m, isChecked: f, toggleOriginalIsChecked: x, toggleCustomIsChecked: w } = Oe({
      checked: a,
      disabled: n,
      onChange: d
    }), { backgroundColor: g, outlineColor: y, borderColor: O, commonStyles: L } = W({
      isDisabled: n,
      isError: t
    });
    return /* @__PURE__ */ b(ee, { label: u, required: r, isError: t, position: h, children: [
      /* @__PURE__ */ c(
        "input",
        {
          type: "checkbox",
          name: i,
          value: l,
          checked: f,
          ref: m,
          onChange: x,
          autoComplete: o,
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
            E.div,
            {
              initial: !1,
              animate: f ? "checked" : "unchecked",
              transition: { type: "spring", stiffness: 700, damping: 30 },
              style: {
                width: he,
                height: me,
                position: "relative",
                display: "flex",
                alignItems: "center",
                borderRadius: me / 2,
                borderWidth: L.borderWidth,
                borderStyle: L.borderStyle,
                borderColor: O,
                backgroundColor: f ? y : g,
                transition: "background-color 0.2s ease-in-out"
              },
              children: /* @__PURE__ */ c(
                E.div,
                {
                  initial: !1,
                  animate: f ? "checked" : "unchecked",
                  transition: { type: "spring", stiffness: 700, damping: 30 },
                  variants: {
                    checked: { x: he - re - fe },
                    unchecked: { x: fe }
                  },
                  style: {
                    width: re,
                    height: re,
                    borderRadius: "50%",
                    position: "absolute",
                    boxShadow: $.light.primary,
                    backgroundColor: t && !f ? z.RubyCopperhead : B.light.secondary
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
    fullWidth: o,
    autoComplete: r = "off",
    required: t = !1,
    isError: n = !1,
    disabled: i = !1,
    name: l,
    value: a,
    label: d,
    helpText: u,
    ...h
  }) => {
    const { isFocused: p, handleFocus: m, handleBlur: f } = Y(), { commonStyles: x } = W({
      fullWidth: o,
      isDisabled: i,
      isError: n,
      isFocused: p
    });
    return /* @__PURE__ */ c(
      V,
      {
        label: d,
        required: t,
        disabled: i,
        isError: n,
        fullWidth: o,
        helpText: u,
        children: /* @__PURE__ */ c(
          "input",
          {
            type: "text",
            name: l,
            value: a,
            autoComplete: r,
            disabled: i,
            onFocus: i ? void 0 : m,
            onBlur: i ? void 0 : f,
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
    fullWidth: o,
    required: r = !1,
    isError: t = !1,
    disabled: n = !1,
    rows: i = 3,
    name: l,
    value: a,
    label: d,
    helpText: u,
    ...h
  }) => {
    const { isFocused: p, handleFocus: m, handleBlur: f } = Y(), { commonStyles: x } = W({
      fullWidth: o,
      isDisabled: n,
      isError: t,
      isFocused: p
    });
    return /* @__PURE__ */ c(
      V,
      {
        label: d,
        required: r,
        disabled: n,
        isError: t,
        fullWidth: o,
        helpText: u,
        children: /* @__PURE__ */ c(
          "textarea",
          {
            name: l,
            value: a,
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
            ...h
          }
        )
      }
    );
  }
);
Ve.displayName = "FormField.Textarea";
const Tt = s.memo(({ children: e, gap: o = 8, style: r, ...t }) => /* @__PURE__ */ c("form", { style: { width: "100%", ...r }, ...t, children: /* @__PURE__ */ c(I.Flex, { column: !0, gap: o, children: e }) }));
Tt.displayName = "Form";
const Wt = {
  Text: Ge,
  Textarea: Ve,
  Number: Pe,
  Password: ze,
  Checkbox: Le,
  Switch: $e,
  Radio: He,
  Select: We
}, je = s.memo(
  ({ children: e, style: o, isOpen: r, onClose: t, maskClosable: n = !0, maxBreakpoint: i = v.xs }) => {
    const { themeMode: l } = k.useThemeMode();
    return /* @__PURE__ */ c(_, { children: r && /* @__PURE__ */ c(
      E.div,
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
          backgroundColor: G(B[l].primary, 0.5),
          backdropFilter: "blur(2px)",
          opacity: r ? 1 : 0
        },
        children: /* @__PURE__ */ c(
          E.div,
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
            children: /* @__PURE__ */ c(X, { style: { width: "100%", ...o }, children: e })
          }
        )
      }
    ) });
  }
);
je.displayName = "Modal";
const Ue = s.memo(
  ({
    style: e,
    isOpen: o,
    onClose: r,
    maskClosable: t = !1,
    maxBreakpoint: n = v.xs,
    title: i,
    description: l,
    isConformLoading: a = !1,
    cancelText: d = "Cancel",
    confirmText: u = "Confirm",
    onCancel: h,
    onConfirm: p
  }) => {
    const m = s.useCallback(async () => {
      await h(), r();
    }, [h, r]), f = s.useCallback(async () => {
      await p(), r();
    }, [p, r]);
    return /* @__PURE__ */ b(je, { isOpen: o, onClose: r, style: e, maskClosable: t, maxBreakpoint: n, children: [
      /* @__PURE__ */ c(T.Title, { as: "h5", text: i }),
      /* @__PURE__ */ c(T.Paragraph, { style: { padding: "8px 0 24px" }, children: l }),
      /* @__PURE__ */ b(I.Flex, { row: !0, gap: 8, style: { justifyContent: "flex-end" }, children: [
        /* @__PURE__ */ c(
          ne,
          {
            variant: "outlined",
            text: d,
            onClick: () => void m(),
            isDisabled: a
          }
        ),
        /* @__PURE__ */ c(
          ne,
          {
            variant: "contained",
            text: u,
            onClick: () => void f(),
            isLoading: a
          }
        )
      ] })
    ] });
  }
);
Ue.displayName = "Modals.Confirm";
const At = {
  Confirm: Ue
}, Ft = s.memo(({ children: e }) => {
  const [o, r] = s.useState(!1);
  return s.useEffect(() => {
    r(!0);
  }, []), o ? /* @__PURE__ */ c(se, { children: e }) : null;
});
Ft.displayName = "NoSSR";
const Rt = s.memo(({ position: e = "top-center", offset: o = 0, collapsable: r = !1 }) => {
  const { isDarkThemeMode: t } = k.useThemeMode();
  return /* @__PURE__ */ c(
    ot,
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
  const o = {
    description: e.description
  };
  return e.type === "success" ? Q.success(e.title, o) : e.type === "error" ? Q.error(e.title, o) : e.type === "warning" ? Q.warning(e.title, o) : Q.info(e.title, o);
}
const qe = s.memo(({ children: e, targetElementID: o }) => {
  const [r, t] = s.useState(null);
  return s.useEffect(() => {
    const n = document.getElementById(o);
    n && t(n);
  }, [o]), r ? rt(/* @__PURE__ */ c(se, { children: e }), r, o) : null;
});
qe.displayName = "PortalRender";
const $t = {
  Render: qe
}, Xe = s.memo(({ height: e = 8 }) => {
  const o = et(), { themeMode: r } = k.useThemeMode(), { themeColor: t } = k.useThemeColor(), n = s.useRef(null), [i, l] = s.useState(0);
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
        await o.start({ x: [0, i], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } }), await o.start({ x: [i, 0], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } });
    })();
  }, [o, i]), /* @__PURE__ */ c(
    "div",
    {
      ref: n,
      style: {
        position: "relative",
        width: "100%",
        height: e,
        overflow: "hidden",
        backgroundColor: G(t, 0.2),
        borderRadius: e / 2,
        boxShadow: $[r].tertiary
      },
      children: /* @__PURE__ */ c(
        E.div,
        {
          animate: o,
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "50%",
            backgroundImage: `linear-gradient(45deg, ${G(t, 0.15)} 0%, ${K(t, 0.1)} 90%)`,
            borderRadius: e / 2
          }
        }
      )
    }
  );
});
Xe.displayName = "Progress.LoadingBar";
const Ye = s.memo(({ height: e = 8 }) => {
  const { scrollYProgress: o } = tt(), { themeColor: r } = k.useThemeColor();
  return /* @__PURE__ */ c(
    E.div,
    {
      style: {
        scaleX: o,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        originX: 0,
        zIndex: 1e4,
        backgroundImage: `linear-gradient(45deg, ${K(r, 0.2)} 0%, ${G(r, 0.15)} 90%)`,
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
    defaultActiveIndex: o = 0,
    onChange: r,
    variant: t = "pills",
    tabContainerStyle: n,
    tabItemContainerStyle: i,
    tabItemStyle: l,
    tabIndicatorStyle: a,
    tabContentStyle: d
  }) => {
    const { themeMode: u } = k.useThemeMode(), { themeColor: h } = k.useThemeColor(), [p, m] = s.useState(!1), [f, x] = s.useState(o), [w, g] = s.useState({}), y = s.useRef([]), O = s.useCallback(() => {
      if (y.current[f]) {
        const M = y.current[f];
        if (M) {
          const H = !!e[f].icon, { offsetLeft: A, offsetWidth: te } = M;
          g({
            left: A,
            width: te + (p && H ? 24 : 0)
          });
        }
      }
    }, [f, t, e, p]);
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
    const L = s.useCallback(
      (M, H) => {
        m(!1), s.startTransition(() => {
          x(M);
        }), r(M, H);
      },
      [r]
    );
    return /* @__PURE__ */ b(I.Flex, { column: !0, gap: 0, style: { width: "100%", ...n }, children: [
      /* @__PURE__ */ b(
        I.Flex,
        {
          row: !0,
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
              borderBottomColor: q[u].secondary
            },
            ...i
          },
          children: [
            e.map((M, H) => /* @__PURE__ */ b(
              E.button,
              {
                ref: (A) => {
                  A && (y.current[H] = A);
                },
                onClick: () => L(H, M),
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
                        color: H === f ? h : "inherit"
                      }
                    }
                  ),
                  /* @__PURE__ */ c(
                    T.Text,
                    {
                      text: M.label,
                      style: {
                        color: H === f ? h : "inherit"
                      }
                    }
                  )
                ]
              },
              M.key || H
            )),
            /* @__PURE__ */ c(
              E.div,
              {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.2, ease: "easeOut" },
                layout: !0,
                style: {
                  position: "absolute",
                  ...w,
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
      /* @__PURE__ */ c(_, { mode: "wait", children: e[f] && /* @__PURE__ */ c(
        E.div,
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
Et.displayName = "Tab";
const Qe = s.memo(({ children: e, isOpen: o }) => /* @__PURE__ */ c(_, { initial: !1, children: o && /* @__PURE__ */ c(
  E.div,
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
  q as BorderColors,
  v as BreakPointName,
  ne as Button,
  Te as Buttons,
  X as Card,
  Dt as Cards,
  bt as Container,
  kt as Drawer,
  Tt as Form,
  Wt as FormField,
  R as Icon,
  pe as Menu,
  je as Modal,
  At as Modals,
  Ft as NoSSR,
  Rt as Notification,
  De as Popover,
  $t as Portal,
  Gt as Progress,
  j as SemanticColors,
  I as Space,
  Et as Tab,
  S as TextColors,
  k as Theme,
  N as ThemeBreakPoint,
  z as ThemeColor,
  C as ThemeMode,
  $ as ThemeShadow,
  Vt as Transitions,
  T as Typography,
  D as TypographySize,
  Z as TypographySizeName,
  it as getDarkerHex,
  K as getLighterHex,
  G as getOpacityHex,
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
