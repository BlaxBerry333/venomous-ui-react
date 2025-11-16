import { jsxs as M, Fragment as S, jsx as i } from "react/jsx-runtime";
import s from "react";
import { clsx as _ } from "../../../../node_modules/clsx/dist/clsx.esm.js";
import y from "../../../Icon/Icon.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as g } from "../../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as v } from "../../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../../constants/designs/BORDER_COLORS.esm.js";
import "../../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../../../Theme/ThemeProvider.context.esm.js";
import { useFormFieldCheckboxActions as A, useFormFieldCheckboxStyles as P } from "./FormFieldCheckbox.hooks.esm.js";
const w = s.memo(
  s.forwardRef(
    ({
      className: c,
      style: l,
      checked: o,
      defaultChecked: r,
      onChange: m,
      disabled: e = !1,
      error: p = !1,
      onMouseEnter: a,
      onMouseLeave: d,
      ...h
    }, f) => {
      const {
        internalChecked: t,
        isFocused: u,
        isHovered: x,
        setRefs: C,
        handleChange: F,
        handleFocus: k,
        handleBlur: E,
        handleClick: N,
        WrapperElementEvents: n
      } = A({
        checked: o,
        defaultChecked: r,
        onChange: m,
        disabled: e,
        onMouseEnter: a,
        onMouseLeave: d,
        externalRef: f
      }), { checkboxStyle: b } = P({
        checked: t,
        disabled: e,
        error: p,
        isHovered: x,
        isFocused: u
      });
      return /* @__PURE__ */ M(S, { children: [
        /* @__PURE__ */ i(
          "input",
          {
            type: "checkbox",
            ref: C,
            ...o !== void 0 ? { checked: o } : { defaultChecked: r },
            onChange: F,
            onFocus: k,
            onBlur: E,
            disabled: e,
            style: L,
            ...h
          }
        ),
        /* @__PURE__ */ i(
          y,
          {
            className: _(v.FormFieldCheckbox, c),
            style: { ...b, ...l },
            icon: t ? "fluent:checkbox-checked-24-filled" : "fluent:checkbox-unchecked-24-filled",
            onClick: N,
            onMouseEnter: n.onMouseEnter,
            onMouseLeave: n.onMouseLeave
          }
        )
      ] });
    }
  )
);
w.displayName = g.FormFieldCheckbox;
const L = {
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
  w as default
};
