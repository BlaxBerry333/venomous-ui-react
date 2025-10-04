import { jsx as o, jsxs as t } from "react/jsx-runtime";
import O from "clsx";
import x from "react";
import R from "../../hooks/useDesign/index.esm.js";
import v from "../../hooks/useElementHover/index.esm.js";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import "../../utils/design/ThemeBreakpoint.esm.js";
import "../../utils/design/TypographySize.esm.js";
import { getOpacityHex as L } from "../../utils/tools/get-colors.esm.js";
import { Buttons as U } from "../Button/index.esm.js";
import j from "../Icon/Icon.esm.js";
import { Space as u } from "../Space/index.esm.js";
import { Theme as F } from "../Theme/index.esm.js";
import { Typography as n } from "../Typography/index.esm.js";
import { MenuItemTagMap as N } from "./index.types.esm.js";
const W = x.memo(
  ({
    as: M = N.li,
    className: s,
    style: c,
    icon: l,
    iconStyle: p,
    text: w,
    subText: y,
    isDisabled: r = !1,
    isActive: h = !1,
    actionButtonProps: e = void 0,
    renderStartElement: f,
    ...a
  }) => {
    const { themeColor: g } = F.useThemeColor(), m = R(), C = x.useMemo(() => h ? L(g, 0.1) : "transparent", [r, h, m]), d = x.useMemo(() => r ? m.TextColors.disabled : h ? g : m.TextColors.primary, [r, h, m, g]), { handleMouseDown: T, handleMouseUp: I, handleMouseLeave: S } = v({
      isDisabled: r
    }), k = x.useCallback(
      (i) => {
        r || (i.currentTarget.style.boxShadow = m.Shadows.tertiary);
      },
      [r, m]
    ), H = x.useCallback(
      (i) => {
        r || (i.currentTarget.style.boxShadow = "none");
      },
      [r]
    );
    return /* @__PURE__ */ o(
      M,
      {
        className: O("Venomous-UI-React--Menu.Item", s),
        style: {
          boxSizing: "border-box",
          listStyle: "none",
          WebkitTapHighlightColor: "transparent",
          minHeight: "40px",
          margin: 0,
          padding: "4px 8px",
          paddingRight: e != null && e.icon ? "0px" : "8px",
          borderRadius: "8px",
          cursor: r ? "not-allowed" : a != null && a.onClick ? "pointer" : "default",
          backgroundColor: C,
          color: d,
          ...c
        },
        onMouseDown: T,
        onMouseUp: I,
        onMouseLeave: S,
        onMouseOver: k,
        onMouseOut: H,
        ...a,
        children: /* @__PURE__ */ t(u.Flex, { style: { minHeight: "40px", height: "100%", alignItems: "center", color: "inherit" }, children: [
          !f && l && /* @__PURE__ */ o(
            j,
            {
              icon: l,
              width: 24,
              style: {
                color: "inherit",
                ...p
              }
            }
          ),
          f && f({ isDisabled: r, isActive: h }),
          /* @__PURE__ */ t(
            u.Flex,
            {
              column: !0,
              gap: 0,
              style: {
                flex: 1,
                flexGrow: 1,
                marginLeft: l || f ? "8px" : "0px",
                maxWidth: l && !(e != null && e.icon) ? "calc(100% - 32px)" : !l && (e != null && e.icon) ? "calc(100% - 48px)" : l && (e != null && e.icon) ? "calc(100% - 80px)" : "100%"
              },
              children: [
                /* @__PURE__ */ o(
                  n.Text,
                  {
                    as: "strong",
                    text: w,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      color: "inherit"
                    }
                  }
                ),
                y && /* @__PURE__ */ o(
                  n.Text,
                  {
                    as: "small",
                    text: y,
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
          !!(e != null && e.icon) && /* @__PURE__ */ o(
            U.Icon,
            {
              variant: "transparent",
              isDisabled: r,
              ...e,
              style: {
                height: "auto",
                width: "auto",
                color: "inherit",
                ...e.style
              },
              iconStyle: {
                color: d,
                ...e.iconStyle
              }
            }
          )
        ] })
      }
    );
  }
);
W.displayName = "Menu.Item";
export {
  W as default
};
