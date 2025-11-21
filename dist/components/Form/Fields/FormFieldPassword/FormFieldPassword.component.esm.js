import { jsxs as H, jsx as r } from "react/jsx-runtime";
import e from "react";
import a from "clsx";
import U from "../../../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as F } from "../../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as p } from "../../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../../constants/designs/BORDER_COLORS.esm.js";
import "../../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../../../Theme/ThemeProvider.context.esm.js";
import { FORM_FIELD_VARIANT_MAP as Y } from "../../_/FormFieldBase.types.esm.js";
import q from "../../../Icon/Icon.component.esm.js";
import { Space as y } from "../../../Space/index.esm.js";
import { useFormFieldPasswordActions as z, useFormFieldPasswordStyles as G } from "./FormFieldPassword.hooks.esm.js";
const J = e.memo(
  e.forwardRef(
    ({
      className: o,
      style: s,
      wrapperClassName: i,
      wrapperStyle: l,
      prefixClassName: m,
      prefixStyle: P,
      prefix: c = null,
      value: d,
      onChange: f,
      variant: S = Y.OUTLINED,
      error: N = !1,
      fullWidth: h = !1,
      disabled: t,
      readOnly: n,
      showVisibilityToggle: x = !0,
      onMouseEnter: g,
      onMouseLeave: A,
      onMouseDown: E,
      onMouseUp: M,
      ...C
    }, v) => {
      const {
        inputValue: I,
        isFocused: _,
        isHovered: T,
        showPassword: u,
        handleChange: V,
        onFocus: L,
        onBlur: O,
        togglePasswordVisibility: R,
        WrapperElementEvents: D
      } = z({
        value: d,
        onChange: f,
        disabled: t,
        readOnly: n,
        onMouseEnter: g,
        onMouseLeave: A,
        onMouseDown: E,
        onMouseUp: M
      }), {
        wrapperStyle: j,
        inputStyle: B,
        prefixStyle: W
      } = G({
        variant: S,
        fullWidth: h,
        error: N,
        disabled: t,
        readOnly: n,
        isFocused: _,
        isHovered: T
      }), k = d !== void 0 ? { value: I } : {};
      return /* @__PURE__ */ H(
        y.Flex,
        {
          as: "div",
          spacing: 8,
          className: a(p.FormFieldPassword, i),
          style: { ...j, ...l },
          ...D,
          children: [
            c && /* @__PURE__ */ r(
              U,
              {
                as: "div",
                className: a(p.FormFieldPasswordPrefix, m),
                style: { ...W, ...P },
                children: c
              }
            ),
            /* @__PURE__ */ r(
              "input",
              {
                type: u ? "text" : "password",
                ref: v,
                className: a(p.FormFieldPasswordInput, o),
                style: { ...B, ...s },
                ...k,
                onChange: V,
                onFocus: L,
                onBlur: O,
                disabled: t,
                readOnly: n,
                ...C
              }
            ),
            x && /* @__PURE__ */ r(
              w,
              {
                disabled: t,
                showPassword: u,
                togglePasswordVisibility: R
              }
            )
          ]
        }
      );
    }
  )
);
J.displayName = F.FormFieldPassword;
const w = e.memo(({ disabled: o, showPassword: s, togglePasswordVisibility: i }) => {
  const l = e.useMemo(
    () => ({
      width: "auto",
      color: "inherit",
      cursor: o ? "not-allowed" : "pointer",
      opacity: o ? 0.5 : 1
    }),
    [o]
  ), m = e.useMemo(
    () => ({
      cursor: o ? "not-allowed" : "pointer",
      transition: "opacity 0.25s ease-in-out"
    }),
    [o]
  );
  return /* @__PURE__ */ r(y.Flex, { as: "div", style: l, children: /* @__PURE__ */ r(
    q,
    {
      icon: s ? "solar:eye-linear" : "solar:eye-closed-linear",
      width: 20,
      onClick: o ? void 0 : i,
      style: m
    }
  ) });
});
w.displayName = F.FormFieldPasswordVisibilityToggle;
export {
  J as default
};
