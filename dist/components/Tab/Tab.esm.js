import { jsxs as x, jsx as a } from "react/jsx-runtime";
import l from "clsx";
import t from "react";
import V from "../../hooks/useDesign/index.esm.js";
import A from "../Icon/Icon.esm.js";
import { Space as h } from "../Space/index.esm.js";
import { Theme as D } from "../Theme/index.esm.js";
import { Typography as F } from "../Typography/index.esm.js";
import { motion as b, AnimatePresence as W } from "framer-motion";
const v = t.memo(
  ({
    tabs: s,
    defaultActiveIndex: I = 0,
    onChange: c,
    variant: r = "pills",
    tabContainerStyle: g,
    tabItemContainerStyle: T,
    tabItemStyle: R,
    tabIndicatorStyle: k,
    tabContentStyle: C
  }) => {
    const { themeColor: u } = D.useThemeColor(), n = V(), [y, p] = t.useState(!1), [o, S] = t.useState(I), [w, B] = t.useState({}), f = t.useRef([]), d = t.useCallback(() => {
      if (f.current[o]) {
        const e = f.current[o];
        if (e) {
          const i = !!s[o].icon, { offsetLeft: m, offsetWidth: U } = e;
          B({
            left: m,
            width: U + (y && i ? 24 : 0)
          });
        }
      }
    }, [o, r, s, y]);
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
    const N = t.useCallback(
      (e, i) => {
        p(!1), t.startTransition(() => {
          S(e);
        }), c == null || c(e, i);
      },
      [c]
    );
    return /* @__PURE__ */ x(
      h.Flex,
      {
        column: !0,
        gap: 0,
        className: l("Venomous-UI-React--Tabs.Container"),
        style: { width: "100%", ...g },
        children: [
          /* @__PURE__ */ x(
            h.Flex,
            {
              row: !0,
              className: l("Venomous-UI-React--Tabs.ItemContainer"),
              style: {
                position: "relative",
                ...r === "pills" && {
                  background: n.BackgroundColors.secondary,
                  borderRadius: "8px"
                },
                ...r === "underline" && {
                  borderBottomWidth: 1.5,
                  borderBottomStyle: "solid",
                  borderBottomColor: n.BorderColors.secondary
                },
                ...T
              },
              children: [
                s.map((e, i) => /* @__PURE__ */ x(
                  b.button,
                  {
                    ref: (m) => {
                      m && (f.current[i] = m);
                    },
                    onClick: () => {
                      e.isDisabled || N(i, e);
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
                      color: e.isDisabled ? n.TextColors.disabled : n.TextColors.primary,
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
                      ...R
                    },
                    children: [
                      e.icon && /* @__PURE__ */ a(
                        A,
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
                        F.Text,
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
                  b.div,
                  {
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { duration: 0.2, ease: "easeOut" },
                    layout: !0,
                    className: l("Venomous-UI-React--Tabs.Indicator"),
                    style: {
                      position: "absolute",
                      ...w,
                      ...r === "pills" && {
                        top: "4px",
                        zIndex: 1,
                        height: "calc(100% - 8px)",
                        borderRadius: "6px",
                        background: n.BackgroundColors.primary,
                        boxShadow: n.Shadows.tertiary
                      },
                      ...r === "underline" && {
                        bottom: "-2px",
                        height: "3px",
                        background: u,
                        borderRadius: "4px"
                      },
                      ...k
                    }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ a(W, { mode: "wait", children: s[o] && /* @__PURE__ */ a(
            b.div,
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
                ...C
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
v.displayName = "Tab";
export {
  v as default
};
