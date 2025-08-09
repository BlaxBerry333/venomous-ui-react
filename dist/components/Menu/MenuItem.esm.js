import { jsx as m, jsxs as h } from "react/jsx-runtime";
import O from "clsx";
import d from "react";
import { Buttons as R } from "../Button/index.esm.js";
import { Space as x } from "../Space/index.esm.js";
import { Theme as i } from "../Theme/index.esm.js";
import { Typography as c } from "../Typography/index.esm.js";
import { MenuItemTagMap as E } from "./index.types.esm.js";
import U from "../../hooks/useElementHover/index.esm.js";
import b from "../Icon/Icon.esm.js";
import { Shadows as f } from "../../utils/design/Shadow.esm.js";
import { TextColors as l } from "../../utils/design/colors.esm.js";
const j = d.memo(
  ({
    as: y = E.li,
    className: M,
    style: g,
    icon: t,
    text: w,
    subText: p,
    isDisabled: e = !1,
    isActive: a = !1,
    actionButton: r = void 0,
    ...s
  }) => {
    const { themeMode: o } = i.useThemeMode(), { themeColor: n } = i.useThemeColor(), { isHovering: T, handleMouseDown: C, handleMouseUp: I, handleMouseLeave: S } = U({
      isDisabled: e
    }), v = d.useCallback(
      (u) => {
        e || (u.currentTarget.style.boxShadow = f[o].tertiary);
      },
      [e]
    ), k = d.useCallback(
      (u) => {
        e || (u.currentTarget.style.boxShadow = T ? f[o].tertiary : "none");
      },
      [e]
    );
    return /* @__PURE__ */ m(
      y,
      {
        onMouseDown: C,
        onMouseUp: I,
        onMouseLeave: S,
        onMouseOver: v,
        onMouseOut: k,
        className: O("Venomous-UI-React--Menu.Item", M),
        style: {
          boxSizing: "border-box",
          listStyle: "none",
          margin: 0,
          padding: "8px",
          paddingRight: r ? "8px" : "16px",
          borderRadius: "8px",
          cursor: e ? "not-allowed" : s != null && s.onClick ? "pointer" : "default",
          transition: "box-shadow 0.2s ease-in-out",
          ...g
        },
        ...s,
        children: /* @__PURE__ */ h(x.Flex, { row: !0, style: { alignItems: "center" }, children: [
          t && /* @__PURE__ */ m(
            b,
            {
              icon: t,
              width: 24,
              style: {
                color: e ? l[o].disabled : a ? n : l[o].primary
              }
            }
          ),
          /* @__PURE__ */ h(
            x.Flex,
            {
              column: !0,
              gap: 0,
              style: {
                flex: 1,
                flexGrow: 1,
                maxWidth: t && !r ? "calc(100% - 32px)" : !t && r ? "calc(100% - 48px)" : t && r ? "calc(100% - 80px)" : "100%"
              },
              children: [
                /* @__PURE__ */ m(
                  c.Text,
                  {
                    text: w,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      color: e ? l[o].disabled : a ? n : l[o].primary
                    }
                  }
                ),
                p && /* @__PURE__ */ m(
                  c.Text,
                  {
                    as: "small",
                    text: p,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      color: e ? l[o].disabled : a ? n : l[o].quaternary
                    }
                  }
                )
              ]
            }
          ),
          !!(r != null && r.icon) && /* @__PURE__ */ m(
            R.Icon,
            {
              icon: r.icon,
              variant: "ghost",
              isDisabled: e,
              onClick: r.onClick
            }
          )
        ] })
      }
    );
  }
);
j.displayName = "Menu.Item";
export {
  j as default
};
