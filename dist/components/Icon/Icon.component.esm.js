import { jsx as l } from "react/jsx-runtime";
import t from "react";
import { Icon as N } from "@iconify/react";
import I from "clsx";
import { COMPONENT_DISPLAY_NAMES as m } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as d } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import S from "../../hooks/useCustomComponentProps/index.esm.js";
import { useIconStyles as u } from "./Icon.hooks.esm.js";
const C = t.memo(
  t.forwardRef(({ className: r, style: s, width: c, color: n, ...e }, p) => {
    const o = S({
      displayName: m.Icon
    }), i = c ?? o.width ?? 24, a = n ?? o.color, { componentStyle: f } = u({ width: i, color: a });
    return /* @__PURE__ */ l(
      N,
      {
        ref: p,
        className: I(d.Icon, r),
        style: { ...f, ...s },
        ...e
      }
    );
  })
);
C.displayName = m.Icon;
export {
  C as default
};
