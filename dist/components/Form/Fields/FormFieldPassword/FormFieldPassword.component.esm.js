import { jsxs as J, jsx as t } from "react/jsx-runtime";
import e from "react";
import a from "clsx";
import K from "../../../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as d } from "../../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as c } from "../../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../../constants/designs/BORDER_COLORS.esm.js";
import "../../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../../../Theme/ThemeProvider.context.esm.js";
import { FORM_FIELD_VARIANT_MAP as Q } from "../../_/FormFieldBase.types.esm.js";
import X from "../../../Icon/Icon.component.esm.js";
import { Space as f } from "../../../Space/index.esm.js";
import Z from "../../../../hooks/useCustomComponentProps/index.esm.js";
import { useFormFieldPasswordActions as $, useFormFieldPasswordStyles as b } from "./FormFieldPassword.hooks.esm.js";
const oo = e.memo(
  e.forwardRef(
    ({
      className: o,
      style: i,
      wrapperClassName: l,
      wrapperStyle: n,
      prefixClassName: m,
      prefixStyle: P,
      prefix: h,
      value: u,
      onChange: g,
      variant: N,
      error: S,
      fullWidth: x,
      disabled: s,
      readOnly: p,
      showVisibilityToggle: C,
      onMouseEnter: v,
      onMouseLeave: A,
      onMouseDown: E,
      onMouseUp: M,
      ...T
    }, V) => {
      const r = Z({
        displayName: d.FormFieldPassword
      }), y = h ?? r.prefix ?? null, I = N ?? r.variant ?? Q.OUTLINED, _ = S ?? r.error ?? !1, W = x ?? r.fullWidth ?? !1, L = C ?? r.showVisibilityToggle ?? !0, {
        inputValue: O,
        isFocused: R,
        isHovered: D,
        showPassword: F,
        handleChange: j,
        onFocus: B,
        onBlur: k,
        togglePasswordVisibility: H,
        WrapperElementEvents: U
      } = $({
        value: u,
        onChange: g,
        disabled: s,
        readOnly: p,
        onMouseEnter: v,
        onMouseLeave: A,
        onMouseDown: E,
        onMouseUp: M
      }), {
        wrapperStyle: Y,
        inputStyle: q,
        prefixStyle: z
      } = b({
        variant: I,
        fullWidth: W,
        error: _,
        disabled: s,
        readOnly: p,
        isFocused: R,
        isHovered: D
      }), G = u !== void 0 ? { value: O } : {};
      return /* @__PURE__ */ J(
        f.Flex,
        {
          as: "div",
          spacing: 8,
          className: a(c.FormFieldPassword, l),
          style: { ...Y, ...n },
          ...U,
          children: [
            y && /* @__PURE__ */ t(
              K,
              {
                as: "div",
                className: a(c.FormFieldPasswordPrefix, m),
                style: { ...z, ...P },
                children: y
              }
            ),
            /* @__PURE__ */ t(
              "input",
              {
                type: F ? "text" : "password",
                ref: V,
                className: a(c.FormFieldPasswordInput, o),
                style: { ...q, ...i },
                ...G,
                onChange: j,
                onFocus: B,
                onBlur: k,
                disabled: s,
                readOnly: p,
                ...T
              }
            ),
            L && /* @__PURE__ */ t(
              w,
              {
                disabled: s,
                showPassword: F,
                togglePasswordVisibility: H
              }
            )
          ]
        }
      );
    }
  )
);
oo.displayName = d.FormFieldPassword;
const w = e.memo(({ disabled: o, showPassword: i, togglePasswordVisibility: l }) => {
  const n = e.useMemo(
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
  return /* @__PURE__ */ t(f.Flex, { as: "div", style: n, children: /* @__PURE__ */ t(
    X,
    {
      icon: i ? "solar:eye-linear" : "solar:eye-closed-linear",
      width: 20,
      onClick: o ? void 0 : l,
      style: m
    }
  ) });
});
w.displayName = d.FormFieldPasswordVisibilityToggle;
export {
  oo as default
};
