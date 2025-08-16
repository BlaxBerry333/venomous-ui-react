import { jsxs as x, jsx as a } from "react/jsx-runtime";
import l from "clsx";
import t from "react";
import { BorderColors as W, BackgroundColors as y, TextColors as I } from "../../utils/design/colors.esm.js";
import { Shadows as v } from "../../utils/design/Shadow.esm.js";
import z from "../Icon/Icon.esm.js";
import { Space as T } from "../Space/index.esm.js";
import { Theme as R } from "../Theme/index.esm.js";
import { Typography as D } from "../Typography/index.esm.js";
import { motion as h, AnimatePresence as E } from "framer-motion";
const j = t.memo(
  ({
    tabs: s,
    defaultActiveIndex: g = 0,
    onChange: c,
    variant: r = "pills",
    tabContainerStyle: k,
    tabItemContainerStyle: S,
    tabItemStyle: w,
    tabIndicatorStyle: C,
    tabContentStyle: N
  }) => {
    const { themeMode: n } = R.useThemeMode(), { themeColor: u } = R.useThemeColor(), [b, p] = t.useState(!1), [o, B] = t.useState(g), [U, V] = t.useState({}), f = t.useRef([]), d = t.useCallback(() => {
      if (f.current[o]) {
        const e = f.current[o];
        if (e) {
          const i = !!s[o].icon, { offsetLeft: m, offsetWidth: F } = e;
          V({
            left: m,
            width: F + (b && i ? 24 : 0)
          });
        }
      }
    }, [o, r, s, b]);
    t.useLayoutEffect(() => (p(!0), () => {
      p(!1);
    }), []), t.useEffect(() => {
      d();
    }, [d]), t.useEffect(() => {
      const e = requestAnimationFrame(() => {
        d();
      });
      return () => cancelAnimationFrame(e);
    }, [o, s.length, d]);
    const A = t.useCallback(
      (e, i) => {
        p(!1), t.startTransition(() => {
          B(e);
        }), c == null || c(e, i);
      },
      [c]
    );
    return /* @__PURE__ */ x(
      T.Flex,
      {
        column: !0,
        gap: 0,
        className: l("Venomous-UI-React--Tabs.Container"),
        style: { width: "100%", ...k },
        children: [
          /* @__PURE__ */ x(
            T.Flex,
            {
              row: !0,
              className: l("Venomous-UI-React--Tabs.ItemContainer"),
              style: {
                position: "relative",
                ...r === "pills" && {
                  background: y[n].secondary,
                  borderRadius: "8px"
                },
                ...r === "underline" && {
                  borderBottomWidth: 1.5,
                  borderBottomStyle: "solid",
                  borderBottomColor: W[n].secondary
                },
                ...S
              },
              children: [
                s.map((e, i) => /* @__PURE__ */ x(
                  h.button,
                  {
                    ref: (m) => {
                      m && (f.current[i] = m);
                    },
                    onClick: () => {
                      e.isDisabled || A(i, e);
                    },
                    className: l("Venomous-UI-React--Tabs.Item"),
                    style: {
                      WebkitTapHighlightColor: "transparent",
                      padding: "12px 20px",
                      display: "flex",
                      alignItems: "center",
                      cursor: e.isDisabled ? "not-allowed" : "pointer",
                      fontWeight: "500",
                      outline: "none",
                      border: "none",
                      color: e.isDisabled ? I[n].disabled : I[n].primary,
                      background: "transparent",
                      transition: "color 0.2s ease",
                      ...r === "pills" && {
                        position: "relative",
                        zIndex: 2,
                        borderRadius: "8px"
                      },
                      ...r === "underline" && {
                        borderRadius: 0
                      },
                      ...w
                    },
                    children: [
                      e.icon && /* @__PURE__ */ a(
                        z,
                        {
                          icon: e.icon,
                          width: 20,
                          style: {
                            marginRight: "8px",
                            color: i === o ? u : "inherit"
                          }
                        }
                      ),
                      /* @__PURE__ */ a(
                        D.Text,
                        {
                          text: e.label,
                          style: {
                            color: i === o ? u : "inherit"
                          }
                        }
                      )
                    ]
                  },
                  e.key || i
                )),
                /* @__PURE__ */ a(
                  h.div,
                  {
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { duration: 0.2, ease: "easeOut" },
                    layout: !0,
                    className: l("Venomous-UI-React--Tabs.Indicator"),
                    style: {
                      position: "absolute",
                      ...U,
                      ...r === "pills" && {
                        top: "4px",
                        zIndex: 1,
                        height: "calc(100% - 8px)",
                        borderRadius: "6px",
                        background: y[n].primary,
                        boxShadow: v[n].tertiary
                      },
                      ...r === "underline" && {
                        bottom: "-2px",
                        height: "3px",
                        background: u,
                        borderRadius: "4px"
                      },
                      ...C
                    }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ a(E, { mode: "wait", children: s[o] && /* @__PURE__ */ a(
            h.div,
            {
              variants: {
                enter: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
                exit: { opacity: 0, x: 10, transition: { duration: 0.2, ease: "easeIn" } }
              },
              initial: "exit",
              animate: "enter",
              exit: "exit",
              className: l("Venomous-UI-React--Tabs.Content"),
              style: {
                width: "100%",
                padding: "16px 8px",
                position: "relative",
                boxSizing: "border-box",
                ...N
              },
              children: s[o].content
            },
            o
          ) })
        ]
      }
    );
  }
);
j.displayName = "Tab";
export {
  j as default
};
