import { jsx as l } from "react/jsx-runtime";
import r from "react";
import { clsx as y } from "../../node_modules/clsx/dist/clsx.esm.js";
import { COMPONENT_DISPLAY_NAMES as T } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as f } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import { useTypographyTitleStyles as N } from "./TypographyTitle.hooks.esm.js";
const c = r.memo(
  r.forwardRef(
    ({ className: t, style: m, as: o = "h3", text: p, color: e, ...i }, a) => {
      const { componentStyle: s } = N({ as: o, color: e });
      return /* @__PURE__ */ l(
        o,
        {
          ref: a,
          className: y(f.TypographyTitle, t),
          style: { ...s, ...m },
          ...i,
          children: p
        }
      );
    }
  )
);
c.displayName = T.TypographyTitle;
export {
  c as default
};
