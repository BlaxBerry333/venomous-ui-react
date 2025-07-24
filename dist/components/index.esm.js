import { jsx as d, jsxs as z, Fragment as te } from "react/jsx-runtime";
import a from "react";
import { useStore as oe, create as re } from "zustand";
import { Icon as ke } from "@iconify/react";
import { AnimatePresence as Ce, motion as H, useAnimation as we, useScroll as Me } from "framer-motion";
import { Toaster as Te, toast as F } from "sonner";
import { createPortal as Ie } from "react-dom";
var k = /* @__PURE__ */ ((e) => (e.xs = "xs", e.sm = "sm", e.md = "md", e.lg = "lg", e.xl = "xl", e.xxl = "xxl", e))(k || {});
const R = {
  xs: 444,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
  xxl: 2560
};
var ne = /* @__PURE__ */ ((e) => (e.ScarletViper = "#C62828", e.JadeAnaconda = "#26A69A", e.AmethystRattlesnake = "#7E57C2", e.AmberCobra = "#FFA000", e.ObsidianBothrops = "#546E7A", e))(ne || {});
const S = {
  disabled: "#e4edf4",
  // 禁用
  success: "#4caf50",
  // 成功
  error: "#f44336",
  // 错误
  warning: "#ff9800",
  // 警告
  info: "#2196f3"
  // 信息
}, _ = {
  darkMode: "#181818",
  lightMode: "#ffffff"
}, $ = {
  darkMode: "rgba(255, 255, 255, 0.1)",
  lightMode: "rgba(0, 0, 0, 0.1)"
}, D = {
  darkMode: `
    rgba(255, 255, 255, 0.2) 0px 3px 5px -1px, 
    rgba(255, 255, 255, 0.14) 0px 6px 10px 0px, 
    rgba(255, 255, 255, 0.12) 0px 1px 8px 0px
    `,
  lightMode: `
    rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, 
    rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, 
    rgba(0, 0, 0, 0.12) 0px 1px 8px 0px
    `
}, N = {
  darkMode: "#cccccc",
  lightMode: "#212121",
  grey: "#666666",
  white: "#ffffff",
  link: "#1976d2",
  disabled: S.disabled,
  success: S.success,
  error: S.error,
  warning: S.warning
}, _e = {
  auto: "auto",
  white: "#ffffff",
  success: S.success,
  error: S.error,
  warning: S.warning,
  info: S.info
}, U = {
  auto: "auto",
  error: S.error
};
function Ee(e) {
  return e = e.replace("#", ""), e.length === 3 && (e = e.split("").map((t) => t + t).join("")), `#${e}`;
}
function ie(e) {
  e = e.replace("#", "");
  const t = parseInt(e, 16), o = t >> 16 & 255, n = t >> 8 & 255, r = t & 255;
  return { r: o, g: n, b: r };
}
function Re(e, t, o) {
  const n = (r) => {
    const i = r.toString(16);
    return i.length === 1 ? "0" + i : i;
  };
  return `#${n(e)}${n(t)}${n(o)}`;
}
function K(e, t) {
  const { r: o, g: n, b: r } = ie(e), i = (c) => Math.min(255, Math.max(0, Math.round(c + t / 100 * 255)));
  return Re(i(o), i(n), i(r));
}
function M(e, t) {
  const o = Ee(e), n = K(o, 25), r = K(o, -25), { r: i, g: c, b: s } = ie(o), u = `rgba(${i}, ${c}, ${s}, ${(t == null ? void 0 : t.opacity) || 0.25})`;
  return {
    origin: o,
    light: n,
    dark: r,
    opacity: u
  };
}
var T = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e))(T || {});
function Ne() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? T.Dark : T.Light;
}
const I = {
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
}, C = a.memo(({ style: e, icon: t, width: o = 20, color: n = "auto", ...r }) => {
  const i = a.useMemo(() => _e[n], [n]);
  return /* @__PURE__ */ d(
    ke,
    {
      ssr: !0,
      icon: t,
      style: {
        width: o,
        minWidth: o,
        height: o,
        minHeight: o,
        flexShrink: 0,
        display: "inline-flex",
        color: i,
        ...e
      },
      ...r
    }
  );
});
C.displayName = "Icon";
function it() {
  const [e, t] = a.useState(!1), o = a.useCallback(() => t(!0), []), n = a.useCallback(() => t(!1), []), r = a.useCallback(() => t((i) => !i), []);
  return {
    isOpen: e,
    setIsOpen: t,
    open: o,
    close: n,
    toggle: r
  };
}
function Oe() {
  const [e, t] = a.useState(k.xs);
  return a.useEffect(() => {
    const o = () => {
      const r = window.innerWidth;
      return r >= R.xxl ? k.xxl : r >= R.xl ? k.xl : r >= R.lg ? k.lg : r >= R.md ? k.md : r >= R.sm ? k.sm : k.xs;
    }, n = () => {
      t(o());
    };
    return n(), window.addEventListener("resize", n), () => window.removeEventListener("resize", n);
  }, []), {
    screenSize: e
  };
}
const V = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, P = /* @__PURE__ */ new Map(), A = (e) => {
  const t = P.get(e);
  return t ? Object.fromEntries(
    Object.entries(t.stores).map(([o, n]) => [o, n.getState()])
  ) : {};
}, ze = (e, t, o) => {
  if (e === void 0)
    return {
      type: "untracked",
      connection: t.connect(o)
    };
  const n = P.get(o.name);
  if (n)
    return { type: "tracked", store: e, ...n };
  const r = {
    connection: t.connect(o),
    stores: {}
  };
  return P.set(o.name, r), { type: "tracked", store: e, ...r };
}, $e = (e, t) => {
  if (t === void 0) return;
  const o = P.get(e);
  o && (delete o.stores[t], Object.keys(o.stores).length === 0 && P.delete(e));
}, De = (e) => {
  var t, o;
  if (!e) return;
  const n = e.split(`
`), r = n.findIndex(
    (c) => c.includes("api.setState")
  );
  if (r < 0) return;
  const i = ((t = n[r + 1]) == null ? void 0 : t.trim()) || "";
  return (o = /.+ (.+) .+/.exec(i)) == null ? void 0 : o[1];
}, Pe = (e, t = {}) => (o, n, r) => {
  const { enabled: i, anonymousActionType: c, store: s, ...u } = t;
  let p;
  try {
    p = (i ?? (V ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!p)
    return e(o, n, r);
  const { connection: f, ...v } = ze(s, p, u);
  let y = !0;
  r.setState = (l, g, h) => {
    const m = o(l, g);
    if (!y) return m;
    const b = h === void 0 ? {
      type: c || De(new Error().stack) || "anonymous"
    } : typeof h == "string" ? { type: h } : h;
    return s === void 0 ? (f == null || f.send(b, n()), m) : (f == null || f.send(
      {
        ...b,
        type: `${s}/${b.type}`
      },
      {
        ...A(u.name),
        [s]: r.getState()
      }
    ), m);
  }, r.devtools = {
    cleanup: () => {
      f && typeof f.unsubscribe == "function" && f.unsubscribe(), $e(u.name, s);
    }
  };
  const x = (...l) => {
    const g = y;
    y = !1, o(...l), y = g;
  }, w = e(r.setState, n, r);
  if (v.type === "untracked" ? f == null || f.init(w) : (v.stores[v.store] = r, f == null || f.init(
    Object.fromEntries(
      Object.entries(v.stores).map(([l, g]) => [
        l,
        l === v.store ? w : g.getState()
      ])
    )
  )), r.dispatchFromDevtools && typeof r.dispatch == "function") {
    let l = !1;
    const g = r.dispatch;
    r.dispatch = (...h) => {
      (V ? "production" : void 0) !== "production" && h[0].type === "__setState" && !l && (console.warn(
        '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
      ), l = !0), g(...h);
    };
  }
  return f.subscribe((l) => {
    var g;
    switch (l.type) {
      case "ACTION":
        if (typeof l.payload != "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return J(
          l.payload,
          (h) => {
            if (h.type === "__setState") {
              if (s === void 0) {
                x(h.state);
                return;
              }
              Object.keys(h.state).length !== 1 && console.error(
                `
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
              );
              const m = h.state[s];
              if (m == null)
                return;
              JSON.stringify(r.getState()) !== JSON.stringify(m) && x(m);
              return;
            }
            r.dispatchFromDevtools && typeof r.dispatch == "function" && r.dispatch(h);
          }
        );
      case "DISPATCH":
        switch (l.payload.type) {
          case "RESET":
            return x(w), s === void 0 ? f == null ? void 0 : f.init(r.getState()) : f == null ? void 0 : f.init(A(u.name));
          case "COMMIT":
            if (s === void 0) {
              f == null || f.init(r.getState());
              return;
            }
            return f == null ? void 0 : f.init(A(u.name));
          case "ROLLBACK":
            return J(l.state, (h) => {
              if (s === void 0) {
                x(h), f == null || f.init(r.getState());
                return;
              }
              x(h[s]), f == null || f.init(A(u.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return J(l.state, (h) => {
              if (s === void 0) {
                x(h);
                return;
              }
              JSON.stringify(r.getState()) !== JSON.stringify(h[s]) && x(h[s]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: h } = l.payload, m = (g = h.computedStates.slice(-1)[0]) == null ? void 0 : g.state;
            if (!m) return;
            x(s === void 0 ? m : m[s]), f == null || f.send(
              null,
              // FIXME no-any
              h
            );
            return;
          }
          case "PAUSE_RECORDING":
            return y = !y;
        }
        return;
    }
  }), w;
}, se = Pe, J = (e, t) => {
  let o;
  try {
    o = JSON.parse(e);
  } catch (n) {
    console.error(
      "[zustand devtools middleware] Could not parse the received json",
      n
    );
  }
  o !== void 0 && t(o);
};
function Be(e, t) {
  let o;
  try {
    o = e();
  } catch {
    return;
  }
  return {
    getItem: (r) => {
      var i;
      const c = (u) => u === null ? null : JSON.parse(u, void 0), s = (i = o.getItem(r)) != null ? i : null;
      return s instanceof Promise ? s.then(c) : c(s);
    },
    setItem: (r, i) => o.setItem(r, JSON.stringify(i, void 0)),
    removeItem: (r) => o.removeItem(r)
  };
}
const X = (e) => (t) => {
  try {
    const o = e(t);
    return o instanceof Promise ? o : {
      then(n) {
        return X(n)(o);
      },
      catch(n) {
        return this;
      }
    };
  } catch (o) {
    return {
      then(n) {
        return this;
      },
      catch(n) {
        return X(n)(o);
      }
    };
  }
}, Fe = (e, t) => (o, n, r) => {
  let i = {
    storage: Be(() => localStorage),
    partialize: (l) => l,
    version: 0,
    merge: (l, g) => ({
      ...g,
      ...l
    }),
    ...t
  }, c = !1;
  const s = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  let p = i.storage;
  if (!p)
    return e(
      (...l) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), o(...l);
      },
      n,
      r
    );
  const f = () => {
    const l = i.partialize({ ...n() });
    return p.setItem(i.name, {
      state: l,
      version: i.version
    });
  }, v = r.setState;
  r.setState = (l, g) => {
    v(l, g), f();
  };
  const y = e(
    (...l) => {
      o(...l), f();
    },
    n,
    r
  );
  r.getInitialState = () => y;
  let x;
  const w = () => {
    var l, g;
    if (!p) return;
    c = !1, s.forEach((m) => {
      var b;
      return m((b = n()) != null ? b : y);
    });
    const h = ((g = i.onRehydrateStorage) == null ? void 0 : g.call(i, (l = n()) != null ? l : y)) || void 0;
    return X(p.getItem.bind(p))(i.name).then((m) => {
      if (m)
        if (typeof m.version == "number" && m.version !== i.version) {
          if (i.migrate) {
            const b = i.migrate(
              m.state,
              m.version
            );
            return b instanceof Promise ? b.then((j) => [!0, j]) : [!0, b];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, m.state];
      return [!1, void 0];
    }).then((m) => {
      var b;
      const [j, Se] = m;
      if (x = i.merge(
        Se,
        (b = n()) != null ? b : y
      ), o(x, !0), j)
        return f();
    }).then(() => {
      h == null || h(x, void 0), x = n(), c = !0, u.forEach((m) => m(x));
    }).catch((m) => {
      h == null || h(void 0, m);
    });
  };
  return r.persist = {
    setOptions: (l) => {
      i = {
        ...i,
        ...l
      }, l.storage && (p = l.storage);
    },
    clearStorage: () => {
      p == null || p.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => w(),
    hasHydrated: () => c,
    onHydrate: (l) => (s.add(l), () => {
      s.delete(l);
    }),
    onFinishHydration: (l) => (u.add(l), () => {
      u.delete(l);
    })
  }, i.skipHydration || w(), x || y;
}, ae = Fe, Q = ne.JadeAnaconda, Ae = re()(
  se(
    ae(
      (e) => ({
        themeColor: Q,
        setThemeColor: (t) => e({ themeColor: t }),
        resetThemeColor: () => e({ themeColor: Q })
      }),
      {
        name: "VENOMOUS_UI__THEME_COLOR"
      }
    )
  )
);
function B() {
  return {
    ...oe(Ae)
  };
}
const Z = Ne(), He = re()(
  se(
    ae(
      (e) => ({
        themeMode: Z,
        setThemeMode: (t) => e({ themeMode: t }),
        toggleThemeMode: () => e((t) => ({ themeMode: t.themeMode === T.Dark ? T.Light : T.Dark })),
        resetThemeMode: () => e({ themeMode: Z })
      }),
      {
        name: "VENOMOUS_UI__THEME_MODE"
      }
    )
  )
);
function E() {
  const e = oe(He);
  return {
    ...e,
    isDarkThemeMode: e.themeMode === T.Dark
  };
}
function le({
  isLoading: e,
  isDisabled: t,
  color: o = "auto",
  variant: n
}) {
  const { isDarkThemeMode: r } = E(), { themeColor: i } = B(), c = a.useMemo(() => n === "contained" ? o !== "auto" ? U[o] : i : _[r ? "darkMode" : "lightMode"], [n, o, i, r]), s = a.useMemo(() => n === "outline" ? o !== "auto" ? U[o] : i : M($[r ? "darkMode" : "lightMode"]).opacity, [n, o, i, r]), u = a.useMemo(() => n === "contained" ? N.white : n === "outline" ? o !== "auto" ? U[o] : i : N[r ? "darkMode" : "lightMode"], [n, o, i, r]);
  return {
    buttonStyles: a.useMemo(
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
        fontSize: I.text,
        fontWeight: "bold",
        borderRadius: "8px",
        cursor: e ? "wait" : t ? "not-allowed" : "pointer",
        boxShadow: D[r ? "darkMode" : "lightMode"],
        borderColor: e || t ? M(s).opacity : s,
        backgroundColor: e || t ? M(c).opacity : c,
        color: e || t ? M(u).opacity : u
      }),
      [e, t, s, c, u, r]
    )
  };
}
const ce = a.memo(
  ({
    type: e = "button",
    style: t,
    variant: o = "contained",
    color: n = "auto",
    isLoading: r,
    isDisabled: i,
    icon: c,
    iconWidth: s = 20,
    ...u
  }) => {
    const { buttonStyles: p } = le({
      isLoading: r,
      isDisabled: i,
      variant: o,
      color: n
    });
    return /* @__PURE__ */ d(
      "button",
      {
        type: e,
        disabled: r || i,
        style: {
          ...p,
          padding: 0,
          ...t
        },
        ...u,
        children: /* @__PURE__ */ d(C, { icon: r ? "eos-icons:loading" : c, width: s })
      }
    );
  }
);
ce.displayName = "Buttons.Icon";
const de = a.memo(({ style: e, text: t, ...o }) => /* @__PURE__ */ d(
  "code",
  {
    style: {
      color: "#B71D18",
      backgroundColor: "#E7E9EB",
      border: "1px solid #CCCCCC",
      borderRadius: "4px",
      padding: "2px 4px",
      fontSize: I.small,
      fontWeight: 600,
      ...e
    },
    ...o,
    children: t
  }
));
de.displayName = "Typography.Code";
const L = "lightMode";
function Y({ color: e = L, ellipsis: t = 0 }) {
  const { isDarkThemeMode: o } = E(), n = a.useMemo(() => o && e === "lightMode" ? N.darkMode : N[e], [e, o]), r = a.useMemo(() => t ? {
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: t,
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  } : {}, [t]);
  return {
    fontColor: n,
    ellipsisStyles: r
  };
}
const ue = a.memo(
  ({ children: e, style: t, color: o = L, ellipsis: n = 0, ...r }) => {
    const { fontColor: i, ellipsisStyles: c } = Y({ color: o, ellipsis: n });
    return /* @__PURE__ */ d(
      "p",
      {
        style: {
          boxSizing: "border-box",
          margin: 0,
          width: "100%",
          fontSize: I.text,
          lineHeight: 1.5,
          color: i,
          ...c,
          ...t
        },
        ...r,
        children: e
      }
    );
  }
);
ue.displayName = "Typography.Paragraph";
const fe = a.memo(
  ({ style: e, text: t, as: o = "span", color: n = L, ...r }) => {
    const { fontColor: i } = Y({ color: n });
    return o === "strong" ? /* @__PURE__ */ d(
      "strong",
      {
        style: {
          fontSize: I.text,
          fontWeight: "bold",
          color: i,
          ...e
        },
        ...r,
        children: t
      }
    ) : o === "small" ? /* @__PURE__ */ d(
      "small",
      {
        style: {
          fontSize: I.small,
          color: i,
          ...e
        },
        ...r,
        children: t
      }
    ) : /* @__PURE__ */ d(
      "span",
      {
        style: {
          fontSize: I.text,
          fontWeight: "normal",
          color: i,
          ...e
        },
        ...r,
        children: t
      }
    );
  }
);
fe.displayName = "Typography.Text";
const ee = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, pe = a.memo(
  ({ text: e, as: t = ee.h4, color: o = L, ellipsis: n = 0, style: r, ...i }) => {
    const c = a.useMemo(() => ee[t], [t]), s = a.useMemo(() => I[t], [t]), { fontColor: u, ellipsisStyles: p } = Y({ color: o, ellipsis: n });
    return /* @__PURE__ */ d(
      c,
      {
        style: {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
          width: "100%",
          fontSize: s,
          fontFamily: "inherit",
          fontWeight: "bold",
          lineHeight: "inherit",
          textAlign: "inherit",
          color: u,
          ...p,
          ...r
        },
        ...i,
        children: e
      }
    );
  }
);
pe.displayName = "Typography.Title";
const W = {
  Title: pe,
  Text: fe,
  Code: de,
  Paragraph: ue
}, We = a.memo(
  ({
    type: e = "button",
    style: t,
    text: o,
    variant: n = "contained",
    color: r = "auto",
    isLoading: i,
    isDisabled: c,
    icon: s,
    iconPosition: u = "start",
    iconWidth: p = 20,
    ...f
  }) => {
    const { buttonStyles: v } = le({
      isLoading: i,
      isDisabled: c,
      variant: n,
      color: r
    });
    return /* @__PURE__ */ z(
      "button",
      {
        type: e,
        disabled: i || c,
        style: {
          flexDirection: u === "start" ? "row" : "row-reverse",
          ...v,
          ...t
        },
        ...f,
        children: [
          s && /* @__PURE__ */ d(
            C,
            {
              icon: s,
              width: p,
              style: {
                marginLeft: u === "start" ? "0px" : "8px",
                marginRight: u === "end" ? "0px" : "8px"
              }
            }
          ),
          /* @__PURE__ */ d(W.Text, { text: o, style: { color: "inherit" } }),
          /* @__PURE__ */ d(
            "div",
            {
              style: {
                display: i ? "flex" : "none",
                borderRadius: "4px",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)"
              },
              children: /* @__PURE__ */ d(C, { icon: "eos-icons:loading", width: 24 })
            }
          )
        ]
      }
    );
  }
);
We.displayName = "Button";
const Le = {
  Icon: ce
}, he = a.memo(({ children: e, style: t, row: o = !0, column: n = !1, gap: r = "8px", ...i }) => /* @__PURE__ */ d(
  "div",
  {
    style: {
      boxSizing: "border-box",
      display: "flex",
      width: "100%",
      flexDirection: n ? "column" : "row",
      alignItems: o ? "flex-start" : t == null ? void 0 : t.alignItems,
      ...Array.isArray(r) ? { rowGap: r[0], columnGap: r[1] } : { gap: r },
      position: "relative",
      ...t
    },
    ...i,
    children: e
  }
));
he.displayName = "Space.Flex";
const me = a.memo(({ children: e, style: t, columns: o = 1, spacing: n = 16, ...r }) => {
  const { screenSize: i } = Oe(), c = a.useMemo(() => je(o, i), [o, i]), s = a.useMemo(() => Ue(n, i), [n, i]);
  return /* @__PURE__ */ d(
    "div",
    {
      style: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: `repeat(${c}, 1fr)`,
        gap: `${s}px`,
        ...t
      },
      ...r,
      children: e
    }
  );
});
me.displayName = "Space.Grid";
const O = Object.keys(k);
function je(e = 1, t) {
  if (typeof e == "number")
    return e;
  const o = O.indexOf(t);
  for (let n = o; n < O.length; n++) {
    const r = e[O[n]];
    if (r !== void 0) return r;
  }
  return 1;
}
function Ue(e = 16, t) {
  if (typeof e == "number")
    return e;
  const o = O.indexOf(t);
  for (let n = o; n < O.length; n++) {
    const r = e[O[n]];
    if (r !== void 0) return r;
  }
  return 16;
}
const G = {
  Flex: he,
  Grid: me
}, q = a.memo(
  ({ children: e, style: t, isTransparent: o = !1, isFrostedGlass: n = !1, isOutline: r = !1, ...i }) => {
    const { isDarkThemeMode: c } = E(), s = c ? $.darkMode : $.lightMode, u = c ? _.darkMode : _.lightMode, p = r ? "none" : c ? D.darkMode : D.lightMode;
    return /* @__PURE__ */ d(
      "div",
      {
        style: {
          boxSizing: "border-box",
          borderRadius: "8px",
          padding: "16px",
          boxShadow: p,
          backgroundColor: o ? "transparent" : u,
          backdropFilter: n ? "blur(8px) brightness(0.8)" : "none",
          WebkitBackdropFilter: n ? "blur(8px) brightness(0.8)" : "none",
          border: `1px solid ${s}`,
          ...t
        },
        ...i,
        children: e
      }
    );
  }
);
q.displayName = "Card";
const ge = a.memo(({ children: e, height: t = 300, width: o = 200, title: n, coverImage: r }) => /* @__PURE__ */ z(
  q,
  {
    style: {
      height: t,
      width: o,
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
      /* @__PURE__ */ d(
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
      /* @__PURE__ */ d(
        G.Flex,
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
          children: n && /* @__PURE__ */ d(
            W.Title,
            {
              text: n,
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
ge.displayName = "Cards.Book";
const xe = a.memo(({ children: e, title: t = "", description: o = "" }) => /* @__PURE__ */ z(q, { style: { position: "relative" }, children: [
  (t || o) && /* @__PURE__ */ z(G.Flex, { column: !0, gap: 2, style: { paddingRight: "48px" }, children: [
    /* @__PURE__ */ d(W.Title, { as: "h6", text: t, ellipsis: 1 }),
    /* @__PURE__ */ d(W.Paragraph, { ellipsis: 3, color: "grey", children: o })
  ] }),
  /* @__PURE__ */ d(
    Le.Icon,
    {
      icon: "solar:hamburger-menu-line-duotone",
      variant: "ghost",
      style: { position: "absolute", top: "4px", right: "4px" }
    }
  ),
  e && /* @__PURE__ */ d(G.Flex, { column: !0, children: e })
] }));
xe.displayName = "Cards.Product";
const st = {
  Book: ge,
  Product: xe
}, Je = a.memo(({ children: e, breakpoint: t = "lg", style: o, ...n }) => {
  const r = a.useMemo(() => R[t], [t]);
  return /* @__PURE__ */ d(
    "div",
    {
      style: {
        margin: "0 auto",
        width: "100%",
        maxWidth: r,
        ...o
      },
      ...n,
      children: e
    }
  );
});
Je.displayName = "Container";
const Xe = a.memo(
  ({ isOpen: e, onClose: t, children: o, position: n = "left", maskClosable: r = !0, width: i = 300, height: c = 300, style: s }) => {
    const { isDarkThemeMode: u } = E(), p = u ? $.darkMode : $.lightMode, f = u ? _.darkMode : _.lightMode, v = u ? D.darkMode : D.lightMode;
    return /* @__PURE__ */ z(te, { children: [
      /* @__PURE__ */ d(
        "div",
        {
          onClick: r ? t : void 0,
          style: {
            boxSizing: "border-box",
            display: e ? "block" : "none",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100svh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            opacity: e ? 1 : 0,
            pointerEvents: e ? "auto" : "none",
            transition: "opacity 0.3s ease",
            zIndex: 999
          }
        }
      ),
      /* @__PURE__ */ d(
        "div",
        {
          style: {
            boxSizing: "border-box",
            position: "fixed",
            backgroundColor: f,
            boxShadow: `2px 0 8px ${v}`,
            transition: "transform 0.3s ease",
            zIndex: 1e3,
            transform: n === "left" ? e ? "translateX(0)" : "translateX(-100%)" : n === "right" ? e ? "translateX(0)" : "translateX(100%)" : n === "top" ? e ? "translateY(0)" : "translateY(-100%)" : e ? "translateY(0)" : "translateY(100%)",
            ...n === "left" && {
              top: 0,
              left: 0,
              width: i,
              height: "100svh",
              borderRight: `1px solid ${p}`
            },
            ...n === "right" && {
              top: 0,
              right: 0,
              width: i,
              height: "100svh",
              borderLeft: `1px solid ${p}`
            },
            ...n === "top" && {
              top: 0,
              left: 0,
              width: "100svw",
              height: c,
              borderBottom: `1px solid ${p}`
            },
            ...n === "bottom" && {
              bottom: 0,
              left: 0,
              width: "100svw",
              height: c,
              borderTop: `1px solid ${p}`
            },
            ...s
          },
          children: o
        }
      )
    ] });
  }
);
Xe.displayName = "Drawer";
const Ge = a.memo(({ children: e, style: t, isOpen: o, onClose: n, maskClosable: r = !0 }) => {
  const { isDarkThemeMode: i } = E();
  return /* @__PURE__ */ d(Ce, { children: o && /* @__PURE__ */ d(
    H.div,
    {
      onClick: r ? n : void 0,
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.2 },
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100svw",
        height: "100svh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(4px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1e3
      },
      children: /* @__PURE__ */ d(
        H.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.95 },
          transition: { duration: 0.2, ease: "easeOut" },
          onClick: (c) => c.stopPropagation(),
          style: {
            backgroundColor: i ? _.darkMode : _.lightMode,
            border: `1px solid ${i ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}`,
            borderRadius: "8px",
            minWidth: "300px",
            maxWidth: "90%",
            maxHeight: "90%",
            padding: "24px 32px",
            boxShadow: `
                rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, 
                rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, 
                rgba(0, 0, 0, 0.12) 0px 1px 8px 0px
              `,
            overflow: "auto",
            ...t
          },
          children: e
        }
      )
    }
  ) });
});
Ge.displayName = "Modal";
const Ye = a.memo(({ position: e = "top-center", offset: t = 0, collapsable: o = !1 }) => {
  const { isDarkThemeMode: n } = E();
  return /* @__PURE__ */ d(
    Te,
    {
      closeButton: !0,
      richColors: !0,
      invert: n,
      visibleToasts: 4,
      gap: 8,
      position: e,
      offset: t,
      mobileOffset: t / 2,
      expand: !o,
      icons: {
        success: /* @__PURE__ */ d(C, { icon: "solar:shield-check-line-duotone", color: "success" }),
        error: /* @__PURE__ */ d(C, { icon: "solar:shield-cross-line-duotone", color: "error" }),
        warning: /* @__PURE__ */ d(C, { icon: "solar:shield-warning-line-duotone", color: "warning" }),
        info: /* @__PURE__ */ d(C, { icon: "solar:info-circle-line-duotone", color: "info" })
      }
    }
  );
});
Ye.displayName = "Notification";
function at(e) {
  const t = {
    description: e.description
  };
  return e.type === "success" ? F.success(e.title, t) : e.type === "error" ? F.error(e.title, t) : e.type === "warning" ? F.warning(e.title, t) : F.info(e.title, t);
}
const be = a.memo(({ children: e, targetElementID: t }) => {
  const [o, n] = a.useState(null);
  return a.useEffect(() => {
    const r = document.getElementById(t);
    r && n(r);
  }, [t]), o ? Ie(/* @__PURE__ */ d(te, { children: e }), o, t) : null;
});
be.displayName = "PortalRender";
const lt = {
  Render: be
}, ye = a.memo(({ height: e = 8, color: t }) => {
  const o = we(), { themeColor: n } = B(), r = a.useRef(null), [i, c] = a.useState(0);
  return a.useEffect(() => {
    const s = () => {
      if (r.current) {
        const u = r.current.offsetWidth, p = u * 0.3;
        c(u - p);
      }
    };
    return s(), window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []), a.useEffect(() => {
    if (i === 0) return;
    (async () => {
      for (; ; )
        await o.start({ x: [0, i], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } }), await o.start({ x: [i, 0], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } });
    })();
  }, [o, i]), /* @__PURE__ */ d(
    "div",
    {
      ref: r,
      style: {
        position: "relative",
        width: "100%",
        height: e,
        overflow: "hidden",
        backgroundColor: M(S.disabled).opacity,
        borderRadius: e / 2,
        boxShadow: "rgba(0, 0, 0, 0.14) 0px 6px 10px 0px"
      },
      children: /* @__PURE__ */ d(
        H.div,
        {
          animate: o,
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "50%",
            backgroundColor: t || n,
            borderRadius: e / 2
          }
        }
      )
    }
  );
});
ye.displayName = "Progress.LoadingBar";
const ve = a.memo(({ height: e = 8, color: t }) => {
  const { scrollYProgress: o } = Me(), { themeColor: n } = B(), r = a.useMemo(() => M(t || n), [t, n]);
  return /* @__PURE__ */ d(
    H.div,
    {
      style: {
        scaleX: o,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        originX: 0,
        zIndex: 1e4,
        backgroundImage: `linear-gradient(to right, ${r.light}, ${r.origin}, ${r.opacity})`,
        height: e,
        borderRadius: "8px"
      }
    }
  );
});
ve.displayName = "Progress.Scrollbar";
const ct = {
  Scrollbar: ve,
  LoadingBar: ye
};
function qe({
  defaultThemeColor: e,
  defaultThemeMode: t
}) {
  const { setThemeMode: o } = E(), { setThemeColor: n } = B();
  a.useEffect(() => {
    t && o(t), e && n(e);
  }, [t, e, o, n]);
}
function Ke() {
  const { themeColor: e } = B(), t = a.useMemo(() => M(e), [e]);
  a.useEffect(() => {
    const o = "theme-palette-style";
    let n = document.getElementById(o);
    n || (n = document.createElement("style"), n.id = o, document.head.appendChild(n));
    const r = `
      /* ==============================
         Global Theme Palette Styles
         ============================== */

      :root {
        --theme-origin: ${t.origin};
        --theme-dark: ${t.dark};
        --theme-light: ${t.light};
        --theme-opacity: ${t.opacity};
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
    n.innerHTML = r;
  }, [t]);
}
const Ve = a.memo(({ defaultThemeColor: e, defaultThemeMode: t }) => (Ke(), qe({ defaultThemeColor: e, defaultThemeMode: t }), null));
Ve.displayName = "ThemePreset";
export {
  _ as BackgroundColors,
  $ as BorderColors,
  k as BreakPoint,
  R as BreakPointWidth,
  We as Button,
  U as ButtonColors,
  Le as Buttons,
  q as Card,
  st as Cards,
  S as Colors,
  Je as Container,
  Xe as Drawer,
  C as Icon,
  _e as IconColors,
  Ge as Modal,
  Ye as Notification,
  lt as Portal,
  ct as Progress,
  D as ShadowColors,
  G as Space,
  N as TextColors,
  ne as ThemeColor,
  T as ThemeMode,
  Ve as ThemePreset,
  W as Typography,
  I as TypographySize,
  M as getColors,
  Ne as getSystemThemeMode,
  at as notify,
  it as useHandler,
  Oe as useThemeBreakpoint,
  B as useThemeColor,
  E as useThemeMode
};
