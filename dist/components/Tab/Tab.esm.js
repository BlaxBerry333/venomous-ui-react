import { jsxs as f, jsx as a } from "react/jsx-runtime";
import c from "clsx";
import t from "react";
import { Space as b } from "../Space/index.esm.js";
import { Theme as I } from "../Theme/index.esm.js";
import { Typography as F } from "../Typography/index.esm.js";
import W from "../Icon/Icon.esm.js";
import { BorderColors as v, BackgroundColors as g, TextColors as E } from "../../utils/design/colors.esm.js";
import { motion as h, AnimatePresence as j } from "framer-motion";
import { Shadows as z } from "../../utils/design/Shadow.esm.js";
const L = t.memo(
  ({
    tabs: n,
    defaultActiveIndex: T = 0,
    onChange: x,
    variant: i = "pills",
    tabContainerStyle: R,
    tabItemContainerStyle: C,
    tabItemStyle: k,
    tabIndicatorStyle: S,
    tabContentStyle: w
  }) => {
    const { themeMode: s } = I.useThemeMode(), { themeColor: m } = I.useThemeColor(), [y, p] = t.useState(!1), [o, N] = t.useState(T), [B, U] = t.useState({}), u = t.useRef([]), l = t.useCallback(() => {
      if (u.current[o]) {
        const e = u.current[o];
        if (e) {
          const r = !!n[o].icon, { offsetLeft: d, offsetWidth: A } = e;
          U({
            left: d,
            width: A + (y && r ? 24 : 0)
          });
        }
      }
    }, [o, i, n, y]);
    t.useLayoutEffect(() => (p(!0), () => {
      p(!1);
    }), []), t.useEffect(() => {
      l();
    }, [l]), t.useEffect(() => {
      const e = requestAnimationFrame(() => {
        l();
      });
      return () => cancelAnimationFrame(e);
    }, [o, n.length, l]);
    const V = t.useCallback(
      (e, r) => {
        p(!1), t.startTransition(() => {
          N(e);
        }), x(e, r);
      },
      [x]
    );
    return /* @__PURE__ */ f(
      b.Flex,
      {
        column: !0,
        gap: 0,
        className: c("Venomous-UI-React--Tabs.Container"),
        style: { width: "100%", ...R },
        children: [
          /* @__PURE__ */ f(
            b.Flex,
            {
              row: !0,
              className: c("Venomous-UI-React--Tabs.ItemContainer"),
              style: {
                position: "relative",
                ...i === "pills" && {
                  background: g[s].secondary,
                  padding: "4px",
                  borderRadius: "8px"
                },
                ...i === "underline" && {
                  borderBottomWidth: 1.5,
                  borderBottomStyle: "solid",
                  borderBottomColor: v[s].secondary
                },
                ...C
              },
              children: [
                n.map((e, r) => /* @__PURE__ */ f(
                  h.button,
                  {
                    ref: (d) => {
                      d && (u.current[r] = d);
                    },
                    onClick: () => V(r, e),
                    className: c("Venomous-UI-React--Tabs.Item"),
                    style: {
                      WebkitTapHighlightColor: "transparent",
                      padding: "12px 20px",
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      fontWeight: "500",
                      outline: "none",
                      border: "none",
                      color: E[s].primary,
                      background: "transparent",
                      transition: "color 0.2s ease",
                      ...i === "pills" && {
                        position: "relative",
                        zIndex: 2,
                        borderRadius: "8px"
                      },
                      ...i === "underline" && {
                        borderRadius: 0
                      },
                      ...k
                    },
                    children: [
                      e.icon && /* @__PURE__ */ a(
                        W,
                        {
                          icon: e.icon,
                          width: 20,
                          style: {
                            marginRight: "8px",
                            color: r === o ? m : "inherit"
                          }
                        }
                      ),
                      /* @__PURE__ */ a(
                        F.Text,
                        {
                          text: e.label,
                          style: {
                            color: r === o ? m : "inherit"
                          }
                        }
                      )
                    ]
                  },
                  e.key || r
                )),
                /* @__PURE__ */ a(
                  h.div,
                  {
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { duration: 0.2, ease: "easeOut" },
                    layout: !0,
                    className: c("Venomous-UI-React--Tabs.Indicator"),
                    style: {
                      position: "absolute",
                      ...B,
                      ...i === "pills" && {
                        top: "4px",
                        zIndex: 1,
                        height: "calc(100% - 8px)",
                        borderRadius: "6px",
                        background: g[s].primary,
                        boxShadow: z[s].tertiary
                      },
                      ...i === "underline" && {
                        bottom: "-2px",
                        height: "3px",
                        background: m,
                        borderRadius: "4px"
                      },
                      ...S
                    }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ a(j, { mode: "wait", children: n[o] && /* @__PURE__ */ a(
            h.div,
            {
              variants: {
                enter: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
                exit: { opacity: 0, x: 10, transition: { duration: 0.2, ease: "easeIn" } }
              },
              initial: "exit",
              animate: "enter",
              exit: "exit",
              className: c("Venomous-UI-React--Tabs.Content"),
              style: {
                width: "100%",
                padding: "16px",
                position: "relative",
                ...w
              },
              children: n[o].content
            },
            o
          ) })
        ]
      }
    );
  }
);
L.displayName = "Tab";
export {
  L as default
};
