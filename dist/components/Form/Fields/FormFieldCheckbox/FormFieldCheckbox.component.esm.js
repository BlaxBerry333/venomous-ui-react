import { jsxs as y, Fragment as P, jsx as i } from "react/jsx-runtime";
import s from "react";
import _ from "clsx";
import g from "../../../Icon/Icon.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as l } from "../../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as v } from "../../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../../constants/designs/BORDER_COLORS.esm.js";
import "../../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../../../Theme/ThemeProvider.context.esm.js";
import A from "../../../../hooks/useCustomComponentProps/index.esm.js";
import { useFormFieldCheckboxActions as w, useFormFieldCheckboxStyles as L } from "./FormFieldCheckbox.hooks.esm.js";
const I = s.memo(
  s.forwardRef(
    ({
      className: c,
      style: m,
      checked: o,
      defaultChecked: r,
      onChange: p,
      disabled: d,
      onMouseEnter: a,
      onMouseLeave: h,
      ...u
    }, f) => {
      const C = A({
        displayName: l.FormFieldCheckbox
      }), e = d ?? C.disabled ?? !1, {
        internalChecked: t,
        isFocused: F,
        isHovered: b,
        setRefs: x,
        handleChange: k,
        handleFocus: N,
        handleBlur: E,
        handleClick: M,
        WrapperElementEvents: n
      } = w({
        checked: o,
        defaultChecked: r,
        onChange: p,
        disabled: e,
        onMouseEnter: a,
        onMouseLeave: h,
        externalRef: f
      }), { checkboxStyle: S } = L({
        checked: t,
        disabled: e,
        isHovered: b,
        isFocused: F
      });
      return /* @__PURE__ */ y(P, { children: [
        /* @__PURE__ */ i(
          "input",
          {
            type: "checkbox",
            ref: x,
            ...o !== void 0 ? { checked: o } : { defaultChecked: r },
            onChange: k,
            onFocus: N,
            onBlur: E,
            disabled: e,
            style: O,
            ...u
          }
        ),
        /* @__PURE__ */ i(
          g,
          {
            className: _(v.FormFieldCheckbox, c),
            style: { ...S, ...m },
            icon: t ? "fluent:checkbox-checked-24-filled" : "fluent:checkbox-unchecked-24-filled",
            onClick: M,
            onMouseEnter: n.onMouseEnter,
            onMouseLeave: n.onMouseLeave
          }
        )
      ] });
    }
  )
);
I.displayName = l.FormFieldCheckbox;
const O = {
  position: "absolute",
  opacity: 0,
  width: 1,
  height: 1,
  margin: -1,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0
};
export {
  I as default
};
