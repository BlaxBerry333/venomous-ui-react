import { jsx as h, jsxs as f } from "react/jsx-runtime";
import k from "clsx";
import o from "react";
import O from "../../hooks/useDesign/index.esm.js";
import v from "../../hooks/useElementHover/index.esm.js";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import "../../utils/design/ThemeBreakpoint.esm.js";
import "../../utils/design/TypographySize.esm.js";
import { getOpacityHex as R } from "../../utils/tools/get-colors.esm.js";
import { Buttons as E } from "../Button/index.esm.js";
import U from "../Icon/Icon.esm.js";
import { Space as g } from "../Space/index.esm.js";
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
    subText: n,
    isDisabled: r = !1,
    isActive: i = !1,
    actionButtonProps: e = void 0,
    ...t
  }) => {
    const { themeColor: x } = j.useThemeColor(), l = O(), C = o.useMemo(() => i ? R(x, 0.1) : "transparent", [r, i, l]), d = o.useMemo(() => r ? l.TextColors.disabled : i ? x : l.TextColors.primary, [r, i, l, x]), { handleMouseDown: S, handleMouseUp: T, handleMouseLeave: p } = v({
      isDisabled: r
    }), I = o.useCallback(
      (a) => {
        r || (a.currentTarget.style.boxShadow = l.Shadows.tertiary);
      },
      [r, l]
    ), H = o.useCallback(
      (a) => {
        r || (a.currentTarget.style.boxShadow = "none");
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
          padding: "0 8px",
          paddingRight: e != null && e.icon ? "0px" : "8px",
          borderRadius: "8px",
          cursor: r ? "not-allowed" : t != null && t.onClick ? "pointer" : "default",
          backgroundColor: C,
          color: d,
          ...M
        },
        onMouseDown: S,
        onMouseUp: T,
        onMouseLeave: p,
        onMouseOver: I,
        onMouseOut: H,
        ...t,
        children: /* @__PURE__ */ f(g.Flex, { style: { minHeight: "40px", height: "100%", alignItems: "center", color: "inherit" }, children: [
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
          /* @__PURE__ */ f(
            g.Flex,
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
                n && /* @__PURE__ */ h(
                  y.Text,
                  {
                    as: "small",
                    text: n,
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
L.displayName = "Menu.Item";
export {
  L as default
};
