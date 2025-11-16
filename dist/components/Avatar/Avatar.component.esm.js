import { jsx as t } from "react/jsx-runtime";
import y from "react";
import { clsx as n } from "../../node_modules/clsx/dist/clsx.esm.js";
import s from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as I } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as l } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import f from "../Icon/Icon.component.esm.js";
import { Typography as g } from "../Typographies/index.esm.js";
import { useAvatarStyles as h, useAvatarActions as x } from "./Avatar.hooks.esm.js";
import { AVATAR_SHAPE_MAP as C } from "./Avatar.types.esm.js";
const M = y.memo(
  y.forwardRef(
    ({ className: o, style: i, shape: v = C.CIRCLE, width: A = 40, src: r, alt: S, text: d, ...e }, a) => {
      const { componentStyle: m, insideImageStyle: E, insideIconStyle: p, insideTextStyle: u } = h({
        shape: v,
        width: A
      }), { isImageLoadError: c, setIsImageError: N } = x({ src: r });
      return r && !c ? /* @__PURE__ */ t(
        s,
        {
          as: "div",
          ref: a,
          className: n(l.Avatar, o),
          style: { ...m, ...i },
          ...e,
          children: /* @__PURE__ */ t(
            "img",
            {
              src: r,
              alt: S,
              loading: "lazy",
              style: { ...E },
              onError: () => N(!0)
            }
          )
        }
      ) : r && c ? /* @__PURE__ */ t(
        s,
        {
          as: "div",
          ref: a,
          className: n(l.Avatar, o),
          style: { ...m, ...i },
          ...e,
          children: /* @__PURE__ */ t(f, { icon: "mdi:help", width: A / 2, style: p })
        }
      ) : !r && d ? /* @__PURE__ */ t(
        s,
        {
          as: "div",
          ref: a,
          className: n(l.Avatar, o),
          style: { ...m, ...i },
          ...e,
          children: /* @__PURE__ */ t(g.Text, { as: "strong", text: d.trim().slice(0, 2).toUpperCase(), style: u })
        }
      ) : /* @__PURE__ */ t(
        s,
        {
          as: "div",
          ref: a,
          className: n(l.Avatar, o),
          style: { ...m, ...i },
          ...e,
          children: /* @__PURE__ */ t(f, { icon: "mdi:account", width: A / 2, style: p })
        }
      );
    }
  )
);
M.displayName = I.Avatar;
export {
  M as default
};
