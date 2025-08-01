import { jsxs as m, jsx as a } from "react/jsx-runtime";
import t from "react";
import { Space as y } from "../Space/index.esm.js";
import { Theme as g } from "../Theme/index.esm.js";
import { Typography as v } from "../Typography/index.esm.js";
import E from "../Icon/Icon.esm.js";
import { BorderColors as j, BackgroundColors as b, TextColors as z } from "../../utils/design/colors.esm.js";
import { motion as f, AnimatePresence as L } from "framer-motion";
import { ThemeShadow as M } from "../../utils/design/ThemeShadow.esm.js";
const O = t.memo(
  ({
    tabs: n,
    defaultActiveIndex: I = 0,
    onChange: h,
    variant: i = "pills",
    tabContainerStyle: T,
    tabItemContainerStyle: k,
    tabItemStyle: R,
    tabIndicatorStyle: C,
    tabContentStyle: S
  }) => {
    const { themeMode: s } = g.useThemeMode(), { themeColor: d } = g.useThemeColor(), [x, p] = t.useState(!1), [o, w] = t.useState(I), [B, A] = t.useState({}), u = t.useRef([]), l = t.useCallback(() => {
      if (u.current[o]) {
        const e = u.current[o];
        if (e) {
          const r = !!n[o].icon, { offsetLeft: c, offsetWidth: W } = e;
          A({
            left: c,
            width: W + (x && r ? 24 : 0)
          });
        }
      }
    }, [o, i, n, x]);
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
    const F = t.useCallback(
      (e, r) => {
        p(!1), t.startTransition(() => {
          w(e);
        }), h(e, r);
      },
      [h]
    );
    return /* @__PURE__ */ m(y.Flex, { column: !0, gap: 0, style: { width: "100%", ...T }, children: [
      /* @__PURE__ */ m(
        y.Flex,
        {
          row: !0,
          style: {
            position: "relative",
            ...i === "pills" && {
              background: b[s].secondary,
              padding: "4px",
              borderRadius: "8px"
            },
            ...i === "underline" && {
              borderBottomWidth: 1.5,
              borderBottomStyle: "solid",
              borderBottomColor: j[s].secondary
            },
            ...k
          },
          children: [
            n.map((e, r) => /* @__PURE__ */ m(
              f.button,
              {
                ref: (c) => {
                  c && (u.current[r] = c);
                },
                onClick: () => F(r, e),
                style: {
                  WebkitTapHighlightColor: "transparent",
                  padding: "12px 20px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  fontWeight: "500",
                  outline: "none",
                  border: "none",
                  color: z[s].primary,
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
                  ...R
                },
                children: [
                  e.icon && /* @__PURE__ */ a(
                    E,
                    {
                      icon: e.icon,
                      width: 20,
                      style: {
                        marginRight: "8px",
                        color: r === o ? d : "inherit"
                      }
                    }
                  ),
                  /* @__PURE__ */ a(
                    v.Text,
                    {
                      text: e.label,
                      style: {
                        color: r === o ? d : "inherit"
                      }
                    }
                  )
                ]
              },
              e.key || r
            )),
            /* @__PURE__ */ a(
              f.div,
              {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.2, ease: "easeOut" },
                layout: !0,
                style: {
                  position: "absolute",
                  ...B,
                  ...i === "pills" && {
                    top: "4px",
                    zIndex: 1,
                    height: "calc(100% - 8px)",
                    borderRadius: "6px",
                    background: b[s].primary,
                    boxShadow: M[s].tertiary
                  },
                  ...i === "underline" && {
                    bottom: "-2px",
                    height: "3px",
                    background: d,
                    borderRadius: "4px"
                  },
                  ...C
                }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ a(L, { mode: "wait", children: n[o] && /* @__PURE__ */ a(
        f.div,
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
            ...S
          },
          children: n[o].content
        },
        o
      ) })
    ] });
  }
);
O.displayName = "Tab";
export {
  O as default
};
