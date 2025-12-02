import { jsxs as L, jsx as o } from "react/jsx-runtime";
import e from "react";
import S from "clsx";
import { Typography as m } from "../../Typographies/index.esm.js";
import { COMPONENT_DISPLAY_NAMES as t } from "../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as x } from "../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../constants/designs/BORDER_COLORS.esm.js";
import { SEMANTIC_COLORS as O } from "../../../constants/designs/SEMANTIC_COLORS.esm.js";
import "../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import _ from "../../../hooks/useCustomComponentProps/index.esm.js";
import { useFormLabelStyles as A } from "./FormLabel.hooks.esm.js";
const M = e.memo(
  e.forwardRef(
    ({
      className: s,
      style: i,
      text: a,
      required: l,
      disabled: p,
      isError: n,
      htmlFor: c,
      ...f
    }, d) => {
      const r = _({
        displayName: t.FormLabel
      }), u = l ?? r.required ?? !1, N = p ?? r.disabled ?? !1, y = n ?? r.isError ?? !1, {
        componentStyle: C,
        __: { DynamicColor: E, DynamicCursor: b }
      } = A({ disabled: N, isError: y });
      return /* @__PURE__ */ L(
        "label",
        {
          ref: d,
          htmlFor: c,
          className: S(x.FormLabel, s),
          style: { ...C, ...i },
          ...f,
          children: [
            u && /* @__PURE__ */ o(m.Text, { text: "*", as: "strong", color: O.ERROR }),
            /* @__PURE__ */ o(
              m.Text,
              {
                text: a,
                as: "strong",
                color: E,
                style: { cursor: b, marginLeft: 4 }
              }
            )
          ]
        }
      );
    }
  )
);
M.displayName = t.FormLabel;
export {
  M as default
};
