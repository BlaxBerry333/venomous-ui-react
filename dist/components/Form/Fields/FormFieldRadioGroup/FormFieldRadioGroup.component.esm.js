import { jsxs as E, jsx as r } from "react/jsx-runtime";
import a from "react";
import A from "clsx";
import v from "../../../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as h } from "../../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as b } from "../../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../../constants/designs/BORDER_COLORS.esm.js";
import "../../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../../../Theme/ThemeProvider.context.esm.js";
import D from "../../../../hooks/useCustomComponentProps/index.esm.js";
import { useFormFieldRadioItemActions as G, useFormFieldRadioItemStyles as O, useFormFieldRadioGroupActions as P, useFormFieldRadioGroupStyles as M } from "./FormFieldRadioGroup.hooks.esm.js";
import { FORM_FIELD_RADIO_GROUP_DIRECTION_MAP as L } from "./FormFieldRadioGroup.types.esm.js";
function T({ option: e, name: l, checked: t, disabled: m, onChange: s }) {
  const o = m || e.disabled, { isFocused: n, isHovered: c, handleFocus: p, handleBlur: u, LabelElementEvents: F } = G({
    disabled: o
  }), { labelStyle: R, radioStyle: i, radioDotStyle: d } = O({
    checked: t,
    disabled: o,
    isHovered: c,
    isFocused: n
  }), f = a.useCallback(
    (I) => {
      o || s(e.value, I);
    },
    [o, s, e.value]
  );
  return /* @__PURE__ */ E("label", { className: b.FormFieldRadioItem, style: R, ...F, children: [
    /* @__PURE__ */ r(
      "input",
      {
        type: "radio",
        name: l,
        checked: t,
        disabled: o,
        onChange: f,
        onFocus: p,
        onBlur: u,
        style: j
      }
    ),
    /* @__PURE__ */ r("span", { className: b.FormFieldRadioItemRadio, style: i, children: /* @__PURE__ */ r("span", { style: d }) }),
    e.label
  ] });
}
const w = a.memo(T);
function x({
  className: e,
  style: l,
  name: t,
  options: m,
  value: s,
  defaultValue: o,
  onChange: n,
  disabled: c,
  direction: p,
  spacing: u,
  ...F
}, R) {
  const i = D({
    displayName: h.FormFieldRadioGroup
  }), d = c ?? i.disabled ?? !1, f = p ?? i.direction ?? L.VERTICAL, I = u ?? i.spacing ?? 8, y = a.useId(), S = t ?? y, { internalValue: _, handleChange: g } = P({
    value: s,
    defaultValue: o,
    onChange: n,
    disabled: d
  }), { groupStyle: C } = M({
    direction: f,
    spacing: I
  });
  return /* @__PURE__ */ r(
    v,
    {
      as: "div",
      ref: R,
      role: "radiogroup",
      className: A(b.FormFieldRadioGroup, e),
      style: { ...C, ...l },
      ...F,
      children: m.map((N) => /* @__PURE__ */ r(
        w,
        {
          option: N,
          name: S,
          checked: _ === N.value,
          disabled: d,
          onChange: g
        },
        String(N.value)
      ))
    }
  );
}
const B = a.memo(a.forwardRef(x));
B.displayName = h.FormFieldRadioGroup;
const j = {
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
  B as default
};
