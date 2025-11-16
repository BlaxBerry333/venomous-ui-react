import { jsx as y } from "react/jsx-runtime";
import r from "react";
import { clsx as T } from "../../node_modules/clsx/dist/clsx.esm.js";
import { COMPONENT_DISPLAY_NAMES as f } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as N } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import { useTypographyTextStyles as c } from "./TypographyText.hooks.esm.js";
const l = r.memo(
  r.forwardRef(
    ({ className: t, style: p, as: o = "span", text: m, color: e, ...a }, s) => {
      const { componentStyle: i } = c({ as: o, color: e });
      return /* @__PURE__ */ y(
        o,
        {
          ref: s,
          className: T(N.TypographyText, t),
          style: { ...i, ...p },
          ...a,
          children: m
        }
      );
    }
  )
);
l.displayName = f.TypographyText;
export {
  l as default
};
