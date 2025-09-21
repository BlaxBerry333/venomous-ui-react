import { jsx as h, jsxs as g } from "react/jsx-runtime";
import H from "clsx";
import o from "react";
import O from "../../hooks/useDesign/index.esm.js";
import v from "../../hooks/useElementHover/index.esm.js";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import "../../utils/design/ThemeBreakpoint.esm.js";
import "../../utils/design/TypographySize.esm.js";
import { getOpacityHex as R } from "../../utils/tools/get-colors.esm.js";
import { Buttons as E } from "../Button/index.esm.js";
import L from "../Icon/Icon.esm.js";
import { Space as n } from "../Space/index.esm.js";
import { Theme as U } from "../Theme/index.esm.js";
import { Typography as y } from "../Typography/index.esm.js";
import { MenuItemTagMap as j } from "./index.types.esm.js";
const F = o.memo(
  ({
    as: s = j.li,
    className: u,
    style: M,
    icon: l,
    iconStyle: c,
    text: w,
    subText: f,
    isDisabled: r = !1,
    isActive: x = !1,
    actionButtonProps: e = void 0,
    ...t
  }) => {
    const { themeColor: a } = U.useThemeColor(), m = O(), p = o.useMemo(() => x ? R(a, 0.1) : "transparent", [r, x, m]), d = o.useMemo(() => r ? m.TextColors.disabled : x ? a : m.TextColors.primary, [r, x, m, a]), { handleMouseDown: C, handleMouseUp: S, handleMouseLeave: T } = v({
      isDisabled: r
    }), I = o.useCallback(
      (i) => {
        r || (i.currentTarget.style.boxShadow = m.Shadows.tertiary);
      },
      [r, m]
    ), k = o.useCallback(
      (i) => {
        r || (i.currentTarget.style.boxShadow = "none");
      },
      [r]
    );
    return /* @__PURE__ */ h(
      s,
      {
        className: H("Venomous-UI-React--Menu.Item", u),
        style: {
          boxSizing: "border-box",
          listStyle: "none",
          WebkitTapHighlightColor: "transparent",
          minHeight: "40px",
          margin: 0,
          padding: "0 8px",
          paddingRight: e != null && e.icon ? "0px" : "8px",
          borderRadius: "8px",
          cursor: r ? "not-allowed" : t != null && t.onClick ? "pointer" : "default",
          backgroundColor: p,
          color: d,
          ...M
        },
        onMouseDown: C,
        onMouseUp: S,
        onMouseLeave: T,
        onMouseOver: I,
        onMouseOut: k,
        ...t,
        children: /* @__PURE__ */ g(n.Flex, { style: { minHeight: "40px", height: "100%", alignItems: "center", color: "inherit" }, children: [
          l && /* @__PURE__ */ h(
            L,
            {
              icon: l,
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
                marginLeft: l ? "8px" : "0px",
                maxWidth: l && !(e != null && e.icon) ? "calc(100% - 32px)" : !l && (e != null && e.icon) ? "calc(100% - 48px)" : l && (e != null && e.icon) ? "calc(100% - 80px)" : "100%"
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
                      color: "inherit"
                    }
                  }
                ),
                f && /* @__PURE__ */ h(
                  y.Text,
                  {
                    as: "small",
                    text: f,
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
                color: d,
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
F.displayName = "Menu.Item";
export {
  F as default
};
