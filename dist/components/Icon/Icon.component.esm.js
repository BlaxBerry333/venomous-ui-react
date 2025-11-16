import { jsx as f } from "react/jsx-runtime";
import o from "react";
import { Icon as p } from "@iconify/react";
import { clsx as a } from "../../node_modules/clsx/dist/clsx.esm.js";
import { COMPONENT_DISPLAY_NAMES as N } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as i } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import { useIconStyles as l } from "./Icon.hooks.esm.js";
const I = o.memo(
  o.forwardRef(({ className: m, style: r, width: t = 24, color: e, ...c }, s) => {
    const { componentStyle: n } = l({ width: t, color: e });
    return /* @__PURE__ */ f(
      p,
      {
        ref: s,
        className: a(i.Icon, m),
        style: { ...n, ...r },
        ...c
      }
    );
  })
);
I.displayName = N.Icon;
export {
  I as default
};
