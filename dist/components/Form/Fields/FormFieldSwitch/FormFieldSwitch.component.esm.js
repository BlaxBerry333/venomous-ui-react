import { jsxs as x, Fragment as b, jsx as t } from "react/jsx-runtime";
import r from "react";
import g from "clsx";
import A from "../../../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as n } from "../../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as s } from "../../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../../constants/designs/BORDER_COLORS.esm.js";
import "../../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../../../Theme/ThemeProvider.context.esm.js";
import v from "../../../../hooks/useCustomComponentProps/index.esm.js";
import { useFormFieldSwitchActions as M, useFormFieldSwitchStyles as O } from "./FormFieldSwitch.hooks.esm.js";
const R = r.memo(
  r.forwardRef(
    ({
      className: l,
      style: m,
      checked: o,
      defaultChecked: i,
      onChange: a,
      disabled: p,
      ...d
    }, c) => {
      const h = v({
        displayName: n.FormFieldSwitch
      }), e = p ?? h.disabled ?? !1, {
        internalChecked: F,
        isFocused: S,
        isHovered: f,
        setRefs: u,
        handleChange: N,
        handleFocus: w,
        handleBlur: C,
        handleClick: y,
        WrapperElementEvents: E
      } = M({
        checked: o,
        defaultChecked: i,
        onChange: a,
        disabled: e,
        externalRef: c
      }), { trackStyle: P, handleStyle: _ } = O({
        checked: F,
        disabled: e,
        isHovered: f,
        isFocused: S
      });
      return /* @__PURE__ */ x(b, { children: [
        /* @__PURE__ */ t(
          "input",
          {
            type: "checkbox",
            ref: u,
            ...o !== void 0 ? { checked: o } : { defaultChecked: i },
            onChange: N,
            onFocus: w,
            onBlur: C,
            disabled: e,
            style: T,
            ...d
          }
        ),
        /* @__PURE__ */ t(
          A,
          {
            as: "div",
            className: g(s.FormFieldSwitch, l),
            style: { ...P, ...m },
            onClick: y,
            ...E,
            children: /* @__PURE__ */ t("span", { className: s.FormFieldSwitchHandle, style: _ })
          }
        )
      ] });
    }
  )
);
R.displayName = n.FormFieldSwitch;
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
