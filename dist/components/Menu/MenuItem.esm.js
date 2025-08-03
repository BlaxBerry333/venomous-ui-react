import { jsx as m, jsxs as p } from "react/jsx-runtime";
import u from "react";
import { Buttons as k } from "../Button/index.esm.js";
import { Space as x } from "../Space/index.esm.js";
import { Theme as i } from "../Theme/index.esm.js";
import { Typography as c } from "../Typography/index.esm.js";
import { MenuItemTagMap as O } from "./index.types.esm.js";
import E from "../../hooks/useElementHover/index.esm.js";
import R from "../Icon/Icon.esm.js";
import { ThemeShadow as f } from "../../utils/design/ThemeShadow.esm.js";
import { TextColors as l } from "../../utils/design/colors.esm.js";
const b = u.memo(
  ({
    as: y = O.li,
    style: M,
    icon: t,
    text: g,
    subText: h,
    isDisabled: e = !1,
    isActive: s = !1,
    actionButton: r = void 0,
    ...a
  }) => {
    const { themeMode: o } = i.useThemeMode(), { themeColor: n } = i.useThemeColor(), { isHovering: w, handleMouseDown: T, handleMouseUp: C, handleMouseLeave: S } = E({
      isDisabled: e
    }), v = u.useCallback(
      (d) => {
        e || (d.currentTarget.style.boxShadow = f[o].tertiary);
      },
      [e]
    ), I = u.useCallback(
      (d) => {
        e || (d.currentTarget.style.boxShadow = w ? f[o].tertiary : "none");
      },
      [e]
    );
    return /* @__PURE__ */ m(
      y,
      {
        onMouseDown: T,
        onMouseUp: C,
        onMouseLeave: S,
        onMouseOver: v,
        onMouseOut: I,
        style: {
          boxSizing: "border-box",
          listStyle: "none",
          margin: 0,
          padding: "8px",
          paddingRight: r ? "8px" : "16px",
          borderRadius: "8px",
          cursor: e ? "not-allowed" : a != null && a.onClick ? "pointer" : "default",
          transition: "box-shadow 0.2s ease-in-out",
          ...M
        },
        ...a,
        children: /* @__PURE__ */ p(x.Flex, { row: !0, style: { alignItems: "center" }, children: [
          t && /* @__PURE__ */ m(
            R,
            {
              icon: t,
              width: 24,
              style: {
                color: e ? l[o].disabled : s ? n : l[o].primary
              }
            }
          ),
          /* @__PURE__ */ p(
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
                    text: g,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      color: e ? l[o].disabled : s ? n : l[o].primary
                    }
                  }
                ),
                h && /* @__PURE__ */ m(
                  c.Text,
                  {
                    as: "small",
                    text: h,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      color: e ? l[o].disabled : s ? n : l[o].quaternary
                    }
                  }
                )
              ]
            }
          ),
          !!(r != null && r.icon) && /* @__PURE__ */ m(
            k.Icon,
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
b.displayName = "Menu.Item";
export {
  b as default
};
