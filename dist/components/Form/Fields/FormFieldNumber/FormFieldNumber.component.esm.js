import { jsxs as w, jsx as o } from "react/jsx-runtime";
import r from "react";
import { clsx as m } from "../../../../node_modules/clsx/dist/clsx.esm.js";
import N from "../../../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as E } from "../../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as l } from "../../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../../constants/designs/BORDER_COLORS.esm.js";
import "../../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../../../Theme/ThemeProvider.context.esm.js";
import { FORM_FIELD_VARIANT_MAP as X } from "../../_/FormFieldBase.types.esm.js";
import S from "../../../Icon/Icon.component.esm.js";
import { Space as x } from "../../../Space/index.esm.js";
import { useFormFieldNumberActions as Z, useFormFieldNumberStyles as $ } from "./FormFieldNumber.hooks.esm.js";
let h = !1;
function ee() {
  if (h || typeof document > "u") return;
  const e = "__venomous-form-field-number-hide-spinner__";
  if (!document.getElementById(e)) {
    const t = document.createElement("style");
    t.id = e, t.textContent = `
      input[type="number"]::-webkit-outer-spin-button,
      input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    `, document.head.appendChild(t), h = !0;
  }
}
const te = r.memo(
  r.forwardRef(
    ({
      className: e,
      style: t,
      wrapperClassName: s,
      wrapperStyle: u,
      prefixClassName: n,
      prefixStyle: C,
      suffixClassName: I,
      suffixStyle: _,
      prefix: c = null,
      suffix: a = null,
      value: d,
      onChange: b,
      variant: v = X.OUTLINED,
      error: M = !1,
      fullWidth: P = !1,
      disabled: i,
      readOnly: p,
      min: f,
      max: y,
      step: F = 1,
      onMouseEnter: g,
      onMouseLeave: k,
      onMouseDown: j,
      onMouseUp: D,
      ...L
    }, O) => {
      r.useEffect(() => {
        ee();
      }, []);
      const {
        inputValue: R,
        isFocused: T,
        isHovered: B,
        handleChange: V,
        onFocus: H,
        onBlur: W,
        handleIncrement: U,
        handleDecrement: Y,
        WrapperElementEvents: q
      } = Z({
        value: d,
        onChange: b,
        min: f,
        max: y,
        step: F,
        disabled: i,
        readOnly: p,
        onMouseEnter: g,
        onMouseLeave: k,
        onMouseDown: j,
        onMouseUp: D
      }), {
        wrapperStyle: z,
        inputStyle: G,
        prefixStyle: J,
        suffixStyle: K
      } = $({
        variant: v,
        fullWidth: P,
        error: M,
        disabled: i,
        readOnly: p,
        isFocused: T,
        isHovered: B
      }), Q = d !== void 0 ? { value: R } : {};
      return /* @__PURE__ */ w(
        x.Flex,
        {
          as: "div",
          spacing: 8,
          className: m(l.FormFieldNumber, s),
          style: { ...z, ...u },
          ...q,
          children: [
            c && /* @__PURE__ */ o(
              N,
              {
                as: "div",
                className: m(l.FormFieldNumberPrefix, n),
                style: { ...J, ...C },
                children: c
              }
            ),
            /* @__PURE__ */ o(
              "input",
              {
                type: "number",
                ref: O,
                className: m(l.FormFieldNumberInput, e),
                style: { ...G, ...t },
                ...Q,
                onChange: V,
                onFocus: H,
                onBlur: W,
                disabled: i,
                readOnly: p,
                min: f,
                max: y,
                step: F,
                ...L
              }
            ),
            a && /* @__PURE__ */ o(
              N,
              {
                as: "div",
                className: m(l.FormFieldNumberSuffix, I),
                style: { ...K, ..._ },
                children: a
              }
            ),
            /* @__PURE__ */ o(
              A,
              {
                disabled: i,
                handleIncrement: U,
                handleDecrement: Y
              }
            )
          ]
        }
      );
    }
  )
);
te.displayName = E.FormFieldNumber;
const A = r.memo(({ disabled: e, handleIncrement: t, handleDecrement: s }) => {
  const u = r.useMemo(
    () => ({
      width: "auto",
      color: "inherit",
      cursor: e ? "not-allowed" : "pointer",
      opacity: e ? 0.5 : 1
    }),
    [e]
  ), n = r.useMemo(
    () => ({
      cursor: e ? "not-allowed" : "pointer",
      transition: "opacity 0.25s ease-in-out"
    }),
    [e]
  );
  return /* @__PURE__ */ w(x.Flex, { column: !0, as: "div", style: u, children: [
    /* @__PURE__ */ o(
      S,
      {
        icon: "solar:alt-arrow-up-linear",
        width: 16,
        onClick: e ? void 0 : t,
        style: n
      }
    ),
    /* @__PURE__ */ o(
      S,
      {
        icon: "solar:alt-arrow-down-linear",
        width: 16,
        onClick: e ? void 0 : s,
        style: n
      }
    )
  ] });
});
A.displayName = E.FormFieldNumberArrows;
export {
  te as default
};
