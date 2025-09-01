import { jsx as h, jsxs as g } from "react/jsx-runtime";
import k from "clsx";
import o from "react";
import O from "../../hooks/useDesign/index.esm.js";
import v from "../../hooks/useElementHover/index.esm.js";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { getOpacityHex as R } from "../../utils/tools/get-colors.esm.js";
import { Buttons as E } from "../Button/index.esm.js";
import U from "../Icon/Icon.esm.js";
import { Space as n } from "../Space/index.esm.js";
import { Theme as j } from "../Theme/index.esm.js";
import { Typography as y } from "../Typography/index.esm.js";
import { MenuItemTagMap as F } from "./index.types.esm.js";
const L = o.memo(
  ({
    as: s = F.li,
    className: u,
    style: M,
    icon: m,
    iconStyle: c,
    text: w,
    subText: d,
    isDisabled: r = !1,
    isActive: x = !1,
    actionButtonProps: e = void 0,
    ...t
  }) => {
    const { themeColor: a } = j.useThemeColor(), l = O(), C = o.useMemo(() => x ? R(a, 0.1) : "transparent", [r, x, l]), f = o.useMemo(() => r ? l.TextColors.disabled : x ? a : l.TextColors.primary, [r, x, l, a]), { handleMouseDown: S, handleMouseUp: T, handleMouseLeave: I } = v({
      isDisabled: r
    }), p = o.useCallback(
      (i) => {
        r || (i.currentTarget.style.boxShadow = l.Shadows.tertiary);
      },
      [r, l]
    ), H = o.useCallback(
      (i) => {
        r || (i.currentTarget.style.boxShadow = "none");
      },
      [r]
    );
    return /* @__PURE__ */ h(
      s,
      {
        className: k("Venomous-UI-React--Menu.Item", u),
        style: {
          boxSizing: "border-box",
          listStyle: "none",
          WebkitTapHighlightColor: "transparent",
          minHeight: "40px",
          margin: 0,
          padding: "8px",
          paddingRight: e != null && e.icon ? "0px" : "8px",
          borderRadius: "8px",
          cursor: r ? "not-allowed" : t != null && t.onClick ? "pointer" : "default",
          backgroundColor: C,
          // transition: "box-shadow 0.2s ease-in-out",
          ...M
        },
        onMouseDown: S,
        onMouseUp: T,
        onMouseLeave: I,
        onMouseOver: p,
        onMouseOut: H,
        ...t,
        children: /* @__PURE__ */ g(n.Flex, { row: !0, style: { minHeight: "40px", height: "100%", alignItems: "center", color: f }, children: [
          m && /* @__PURE__ */ h(
            U,
            {
              icon: m,
              width: 24,
              style: {
                color: "inherit",
                ...c
              }
            }
          ),
          /* @__PURE__ */ g(
            n.Flex,
            {
              column: !0,
              gap: 0,
              style: {
                flex: 1,
                flexGrow: 1,
                maxWidth: m && !(e != null && e.icon) ? "calc(100% - 32px)" : !m && (e != null && e.icon) ? "calc(100% - 48px)" : m && (e != null && e.icon) ? "calc(100% - 80px)" : "100%"
              },
              children: [
                /* @__PURE__ */ h(
                  y.Text,
                  {
                    as: "strong",
                    text: w,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      lineHeight: "1rem",
                      color: "inherit"
                    }
                  }
                ),
                d && /* @__PURE__ */ h(
                  y.Text,
                  {
                    as: "small",
                    text: d,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      color: "inherit"
                    }
                  }
                )
              ]
            }
          ),
          !!(e != null && e.icon) && /* @__PURE__ */ h(
            E.Icon,
            {
              variant: "transparent",
              isDisabled: r,
              style: {
                height: "auto",
                width: "auto",
                color: "inherit",
                ...e.style
              },
              iconStyle: {
                color: f,
                ...e.iconStyle
              },
              ...e
            }
          )
        ] })
      }
    );
  }
);
L.displayName = "Menu.Item";
export {
  L as default
};
