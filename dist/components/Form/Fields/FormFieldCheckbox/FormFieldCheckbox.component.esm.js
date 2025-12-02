import { jsxs as _, Fragment as g, jsx as i } from "react/jsx-runtime";
import l from "react";
import v from "clsx";
import A from "../../../Icon/Icon.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as c } from "../../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as w } from "../../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../../constants/designs/BORDER_COLORS.esm.js";
import "../../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../../../Theme/ThemeProvider.context.esm.js";
import L from "../../../../hooks/useCustomComponentProps/index.esm.js";
import { useFormFieldCheckboxActions as I, useFormFieldCheckboxStyles as O } from "./FormFieldCheckbox.hooks.esm.js";
const R = l.memo(
  l.forwardRef(
    ({
      className: m,
      style: p,
      checked: o,
      defaultChecked: r,
      onChange: d,
      disabled: a,
      error: h,
      onMouseEnter: u,
      onMouseLeave: f,
      ...C
    }, F) => {
      const t = L({
        displayName: c.FormFieldCheckbox
      }), e = a ?? t.disabled ?? !1, b = h ?? t.error ?? !1, {
        internalChecked: n,
        isFocused: x,
        isHovered: k,
        setRefs: N,
        handleChange: E,
        handleFocus: M,
        handleBlur: S,
        handleClick: y,
        WrapperElementEvents: s
      } = I({
        checked: o,
        defaultChecked: r,
        onChange: d,
        disabled: e,
        onMouseEnter: u,
        onMouseLeave: f,
        externalRef: F
      }), { checkboxStyle: P } = O({
        checked: n,
        disabled: e,
        error: b,
        isHovered: k,
        isFocused: x
      });
      return /* @__PURE__ */ _(g, { children: [
        /* @__PURE__ */ i(
          "input",
          {
            type: "checkbox",
            ref: N,
            ...o !== void 0 ? { checked: o } : { defaultChecked: r },
            onChange: E,
            onFocus: M,
            onBlur: S,
            disabled: e,
            style: T,
            ...C
          }
        ),
        /* @__PURE__ */ i(
          A,
          {
            className: v(w.FormFieldCheckbox, m),
            style: { ...P, ...p },
            icon: n ? "fluent:checkbox-checked-24-filled" : "fluent:checkbox-unchecked-24-filled",
            onClick: y,
            onMouseEnter: s.onMouseEnter,
            onMouseLeave: s.onMouseLeave
          }
        )
      ] });
    }
  )
);
R.displayName = c.FormFieldCheckbox;
const T = {
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
  R as default
};
