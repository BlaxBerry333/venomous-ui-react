import { jsx as t } from "react/jsx-runtime";
import f from "react";
import n from "clsx";
import c from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as v } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as p } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import h from "../Icon/Icon.component.esm.js";
import { Typography as M } from "../Typographies/index.esm.js";
import T from "../../hooks/useCustomComponentProps/index.esm.js";
import { useAvatarStyles as _, useAvatarActions as L } from "./Avatar.hooks.esm.js";
import { AVATAR_SHAPE_MAP as O } from "./Avatar.types.esm.js";
const R = f.memo(
  f.forwardRef(
    ({ className: i, style: e, shape: u, width: S, src: x, alt: E, text: N, ...a }, s) => {
      const r = T({
        displayName: v.Avatar
      }), C = u ?? r.shape ?? O.CIRCLE, l = S ?? r.width ?? 40, o = x ?? r.src, I = E ?? r.alt, d = N ?? r.text, { componentStyle: m, insideImageStyle: g, insideIconStyle: A, insideTextStyle: P } = _({
        shape: C,
        width: l
      }), { isImageLoadError: y, setIsImageError: w } = L({ src: o });
      return o && !y ? /* @__PURE__ */ t(
        c,
        {
          as: "div",
          ref: s,
          className: n(p.Avatar, i),
          style: { ...m, ...e },
          ...a,
          children: /* @__PURE__ */ t(
            "img",
            {
              src: o,
              alt: I,
              loading: "lazy",
              style: { ...g },
              onError: () => w(!0)
            }
          )
        }
      ) : o && y ? /* @__PURE__ */ t(
        c,
        {
          as: "div",
          ref: s,
          className: n(p.Avatar, i),
          style: { ...m, ...e },
          ...a,
          children: /* @__PURE__ */ t(h, { icon: "mdi:help", width: l / 2, style: A })
        }
      ) : !o && d ? /* @__PURE__ */ t(
        c,
        {
          as: "div",
          ref: s,
          className: n(p.Avatar, i),
          style: { ...m, ...e },
          ...a,
          children: /* @__PURE__ */ t(M.Text, { as: "strong", text: d.trim().slice(0, 2).toUpperCase(), style: P })
        }
      ) : /* @__PURE__ */ t(
        c,
        {
          as: "div",
          ref: s,
          className: n(p.Avatar, i),
          style: { ...m, ...e },
          ...a,
          children: /* @__PURE__ */ t(h, { icon: "mdi:account", width: l / 2, style: A })
        }
      );
    }
  )
);
R.displayName = v.Avatar;
export {
  R as default
};
