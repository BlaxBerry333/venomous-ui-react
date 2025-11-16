import { jsxs as S, jsx as o } from "react/jsx-runtime";
import r from "react";
import { clsx as L } from "../../../node_modules/clsx/dist/clsx.esm.js";
import { Typography as m } from "../../Typographies/index.esm.js";
import { COMPONENT_DISPLAY_NAMES as x } from "../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as C } from "../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../constants/designs/BORDER_COLORS.esm.js";
import { SEMANTIC_COLORS as E } from "../../../constants/designs/SEMANTIC_COLORS.esm.js";
import "../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import { useFormLabelStyles as O } from "./FormLabel.hooks.esm.js";
const _ = r.memo(
  r.forwardRef(
    ({ className: t, style: e, text: s, required: a = !1, disabled: l = !1, isError: i = !1, htmlFor: p, ...f }, c) => {
      const {
        componentStyle: n,
        __: { DynamicColor: N, DynamicCursor: y }
      } = O({ disabled: l, isError: i });
      return /* @__PURE__ */ S(
        "label",
        {
          ref: c,
          htmlFor: p,
          className: L(C.FormLabel, t),
          style: { ...n, ...e },
          ...f,
          children: [
            a && /* @__PURE__ */ o(m.Text, { text: "*", as: "strong", color: E.ERROR }),
            /* @__PURE__ */ o(
              m.Text,
              {
                text: s,
                as: "strong",
                color: N,
                style: { cursor: y, marginLeft: 4 }
              }
            )
          ]
        }
      );
    }
  )
);
_.displayName = x.FormLabel;
export {
  _ as default
};
