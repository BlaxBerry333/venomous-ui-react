import { jsx as h, jsxs as n } from "react/jsx-runtime";
import k from "clsx";
import o from "react";
import R from "../../hooks/useDesign/index.esm.js";
import v from "../../hooks/useElementHover/index.esm.js";
import { SEMANTIC_COLORS as E } from "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import "../../utils/design/ThemeBreakpoint.esm.js";
import "../../utils/design/TypographySize.esm.js";
import { getOpacityHex as L } from "../../utils/tools/get-colors.esm.js";
import { Buttons as N } from "../Button/index.esm.js";
import U from "../Icon/Icon.esm.js";
import { Space as y } from "../Space/index.esm.js";
import { Theme as j } from "../Theme/index.esm.js";
import { Typography as u } from "../Typography/index.esm.js";
import { MenuItemTagMap as F } from "./index.types.esm.js";
const W = o.memo(
  ({
    as: M = F.li,
    className: s,
    style: w,
    icon: m,
    iconStyle: S,
    text: c,
    subText: d,
    isDisabled: r = !1,
    isActive: t = !1,
    actionButtonProps: e = void 0,
    semanticColor: i,
    ...x
  }) => {
    const { themeColor: f } = j.useThemeColor(), l = R(), T = o.useMemo(() => t ? L(f, 0.1) : "transparent", [r, t, l]), g = o.useMemo(() => r ? l.TextColors.disabled : t ? f : i ? E[i] : l.TextColors.primary, [r, t, l, f, i]), { handleMouseDown: C, handleMouseUp: I, handleMouseLeave: p } = v({
      isDisabled: r
    }), O = o.useCallback(
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
      M,
      {
        className: k("Venomous-UI-React--Menu.Item", s),
        style: {
          boxSizing: "border-box",
          listStyle: "none",
          WebkitTapHighlightColor: "transparent",
          minHeight: "40px",
          margin: 0,
          padding: "8px",
          paddingRight: e != null && e.icon ? "0px" : "8px",
          borderRadius: "8px",
          cursor: r ? "not-allowed" : x != null && x.onClick ? "pointer" : "default",
          backgroundColor: T,
          // transition: "box-shadow 0.2s ease-in-out",
          ...w
        },
        onMouseDown: C,
        onMouseUp: I,
        onMouseLeave: p,
        onMouseOver: O,
        onMouseOut: H,
        ...x,
        children: /* @__PURE__ */ n(y.Flex, { row: !0, style: { minHeight: "40px", height: "100%", alignItems: "center", color: g }, children: [
          m && /* @__PURE__ */ h(
            U,
            {
              icon: m,
              width: 24,
              style: {
                color: "inherit",
                ...S
              }
            }
          ),
          /* @__PURE__ */ n(
            y.Flex,
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
                  u.Text,
                  {
                    as: "strong",
                    text: c,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      lineHeight: "1rem",
                      color: "inherit"
                    }
                  }
                ),
                d && /* @__PURE__ */ h(
                  u.Text,
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
            N.Icon,
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
                color: g,
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
W.displayName = "Menu.Item";
export {
  W as default
};
