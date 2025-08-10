import { jsx as o, jsxs as x } from "react/jsx-runtime";
import I from "clsx";
import p from "react";
import { TextColors as d } from "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { getOpacityHex as T } from "../../utils/tools/get-colors.esm.js";
import { Buttons as w } from "../Button/index.esm.js";
import k from "../Icon/Icon.esm.js";
import { Space as f } from "../Space/index.esm.js";
import { Theme as c } from "../Theme/index.esm.js";
import { Typography as h } from "../Typography/index.esm.js";
import { MenuItemTagMap as R } from "./index.types.esm.js";
const H = p.memo(
  ({
    as: g = R.li,
    className: u,
    style: y,
    icon: r,
    text: C,
    subText: n,
    isDisabled: l = !1,
    isActive: m = !1,
    actionButton: e = void 0,
    ...t
  }) => {
    const { themeMode: s } = c.useThemeMode(), { themeColor: a } = c.useThemeColor(), M = p.useMemo(() => m ? T(a, 0.1) : "transparent", [l, m, a, s]), i = p.useMemo(() => l ? d[s].disabled : m ? a : d[s].primary, [l, m, a, s]);
    return /* @__PURE__ */ o(
      g,
      {
        className: I("Venomous-UI-React--Menu.Item", u),
        style: {
          boxSizing: "border-box",
          listStyle: "none",
          WebkitTapHighlightColor: "transparent",
          margin: 0,
          padding: "8px",
          paddingRight: e ? "8px" : "16px",
          borderRadius: "8px",
          cursor: l ? "not-allowed" : t != null && t.onClick ? "pointer" : "default",
          backgroundColor: M,
          // transition: "box-shadow 0.2s ease-in-out",
          ...y
        },
        ...t,
        children: /* @__PURE__ */ x(f.Flex, { row: !0, style: { alignItems: "center" }, children: [
          r && /* @__PURE__ */ o(k, { icon: r, width: 24, style: { color: i } }),
          /* @__PURE__ */ x(
            f.Flex,
            {
              column: !0,
              gap: 0,
              style: {
                flex: 1,
                flexGrow: 1,
                maxWidth: r && !e ? "calc(100% - 32px)" : !r && e ? "calc(100% - 48px)" : r && e ? "calc(100% - 80px)" : "100%"
              },
              children: [
                /* @__PURE__ */ o(
                  h.Text,
                  {
                    as: "strong",
                    text: C,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      color: i,
                      lineHeight: "1rem"
                    }
                  }
                ),
                n && /* @__PURE__ */ o(
                  h.Text,
                  {
                    as: "small",
                    text: n,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      color: i
                    }
                  }
                )
              ]
            }
          ),
          !!(e != null && e.icon) && /* @__PURE__ */ o(
            w.Icon,
            {
              icon: e.icon,
              variant: "transparent",
              isDisabled: l,
              onClick: e.onClick,
              style: {
                ...e.style
              }
            }
          )
        ] })
      }
    );
  }
);
H.displayName = "Menu.Item";
export {
  H as default
};
