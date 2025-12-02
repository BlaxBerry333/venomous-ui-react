import { jsxs as C, jsx as r } from "react/jsx-runtime";
import n from "react";
import s from "clsx";
import h from "../../../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as a } from "../../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as l } from "../../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../../constants/designs/BORDER_COLORS.esm.js";
import "../../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../../../Theme/ThemeProvider.context.esm.js";
import { FORM_FIELD_VARIANT_MAP as ne } from "../../_/FormFieldBase.types.esm.js";
import x from "../../../Icon/Icon.component.esm.js";
import { Space as v } from "../../../Space/index.esm.js";
import ie from "../../../../hooks/useCustomComponentProps/index.esm.js";
import { useFormFieldNumberActions as me, useFormFieldNumberStyles as se } from "./FormFieldNumber.hooks.esm.js";
let w = !1;
function le() {
  if (w || typeof document > "u") return;
  const e = "__venomous-form-field-number-hide-spinner__";
  if (!document.getElementById(e)) {
    const t = document.createElement("style");
    t.id = e, t.textContent = `
      input[type="number"]::-webkit-outer-spin-button,
      input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    `, document.head.appendChild(t), w = !0;
  }
}
const ue = n.memo(
  n.forwardRef(
    ({
      className: e,
      style: t,
      wrapperClassName: u,
      wrapperStyle: p,
      prefixClassName: i,
      prefixStyle: b,
      suffixClassName: A,
      suffixStyle: I,
      prefix: _,
      suffix: M,
      value: f,
      onChange: P,
      variant: g,
      error: k,
      fullWidth: W,
      disabled: m,
      readOnly: c,
      min: d,
      max: y,
      step: j,
      onMouseEnter: D,
      onMouseLeave: L,
      onMouseDown: O,
      onMouseUp: R,
      ...T
    }, B) => {
      const o = ie({
        displayName: a.FormFieldNumber
      }), F = _ ?? o.prefix ?? null, N = M ?? o.suffix ?? null, V = g ?? o.variant ?? ne.OUTLINED, H = k ?? o.error ?? !1, U = W ?? o.fullWidth ?? !1, S = j ?? o.step ?? 1;
      n.useEffect(() => {
        le();
      }, []);
      const {
        inputValue: Y,
        isFocused: q,
        isHovered: z,
        handleChange: G,
        onFocus: J,
        onBlur: K,
        handleIncrement: Q,
        handleDecrement: X,
        WrapperElementEvents: Z
      } = me({
        value: f,
        onChange: P,
        min: d,
        max: y,
        step: S,
        disabled: m,
        readOnly: c,
        onMouseEnter: D,
        onMouseLeave: L,
        onMouseDown: O,
        onMouseUp: R
      }), {
        wrapperStyle: $,
        inputStyle: ee,
        prefixStyle: te,
        suffixStyle: oe
      } = se({
        variant: V,
        fullWidth: U,
        error: H,
        disabled: m,
        readOnly: c,
        isFocused: q,
        isHovered: z
      }), re = f !== void 0 ? { value: Y } : {};
      return /* @__PURE__ */ C(
        v.Flex,
        {
          as: "div",
          spacing: 8,
          className: s(l.FormFieldNumber, u),
          style: { ...$, ...p },
          ...Z,
          children: [
            F && /* @__PURE__ */ r(
              h,
              {
                as: "div",
                className: s(l.FormFieldNumberPrefix, i),
                style: { ...te, ...b },
                children: F
              }
            ),
            /* @__PURE__ */ r(
              "input",
              {
                type: "number",
                ref: B,
                className: s(l.FormFieldNumberInput, e),
                style: { ...ee, ...t },
                ...re,
                onChange: G,
                onFocus: J,
                onBlur: K,
                disabled: m,
                readOnly: c,
                min: d,
                max: y,
                step: S,
                ...T
              }
            ),
            N && /* @__PURE__ */ r(
              h,
              {
                as: "div",
                className: s(l.FormFieldNumberSuffix, A),
                style: { ...oe, ...I },
                children: N
              }
            ),
            /* @__PURE__ */ r(
              E,
              {
                disabled: m,
                handleIncrement: Q,
                handleDecrement: X
              }
            )
          ]
        }
      );
    }
  )
);
ue.displayName = a.FormFieldNumber;
const E = n.memo(({ disabled: e, handleIncrement: t, handleDecrement: u }) => {
  const p = n.useMemo(
    () => ({
      width: "auto",
      color: "inherit",
      cursor: e ? "not-allowed" : "pointer",
      opacity: e ? 0.5 : 1
    }),
    [e]
  ), i = n.useMemo(
    () => ({
      cursor: e ? "not-allowed" : "pointer",
      transition: "opacity 0.25s ease-in-out"
    }),
    [e]
  );
  return /* @__PURE__ */ C(v.Flex, { column: !0, as: "div", style: p, children: [
    /* @__PURE__ */ r(
      x,
      {
        icon: "solar:alt-arrow-up-linear",
        width: 16,
        onClick: e ? void 0 : t,
        style: i
      }
    ),
    /* @__PURE__ */ r(
      x,
      {
        icon: "solar:alt-arrow-down-linear",
        width: 16,
        onClick: e ? void 0 : u,
        style: i
      }
    )
  ] });
});
E.displayName = a.FormFieldNumberArrows;
export {
  ue as default
};
