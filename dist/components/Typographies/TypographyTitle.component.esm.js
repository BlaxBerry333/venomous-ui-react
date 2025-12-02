import { jsx as T } from "react/jsx-runtime";
import t from "react";
import f from "clsx";
import { COMPONENT_DISPLAY_NAMES as p } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as N } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import g from "../../hooks/useCustomComponentProps/index.esm.js";
import { useTypographyTitleStyles as h } from "./TypographyTitle.hooks.esm.js";
const S = t.memo(
  t.forwardRef(
    ({ className: m, style: s, as: e, text: a, color: i, ...l }, c) => {
      const o = g({
        displayName: p.TypographyTitle
      }), r = e ?? o.as ?? "h3", y = i ?? o.color, { componentStyle: n } = h({ as: r, color: y });
      return /* @__PURE__ */ T(
        r,
        {
          ref: c,
          className: f(N.TypographyTitle, m),
          style: { ...n, ...s },
          ...l,
          children: a
        }
      );
    }
  )
);
S.displayName = p.TypographyTitle;
export {
  S as default
};
