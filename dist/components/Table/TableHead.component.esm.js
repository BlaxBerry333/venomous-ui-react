import { jsx as i } from "react/jsx-runtime";
import e from "react";
import l from "clsx";
import { COMPONENT_DISPLAY_NAMES as s } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as d } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import { useTableHeadStyles as f } from "./TableHead.hooks.esm.js";
const N = e.memo(
  e.forwardRef(({ className: o, style: r, children: t, ...m }, a) => {
    const { tableHeadStyle: p } = f();
    return /* @__PURE__ */ i(
      "thead",
      {
        ref: a,
        className: l(d.TableHead, o),
        style: { ...p, ...r },
        ...m,
        children: t
      }
    );
  })
);
N.displayName = s.TableHead;
export {
  N as default
};
