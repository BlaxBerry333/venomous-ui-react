import { jsx as l, jsxs as p, Fragment as C } from "react/jsx-runtime";
import r from "react";
import u from "clsx";
import F from "../../../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as X } from "../../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as f } from "../../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../../constants/designs/BORDER_COLORS.esm.js";
import "../../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../../../Theme/ThemeProvider.context.esm.js";
import { FORM_FIELD_VARIANT_MAP as Z } from "../../_/FormFieldBase.types.esm.js";
import N from "../../../Icon/Icon.component.esm.js";
import { Menu as O } from "../../../Menu/index.esm.js";
import ee from "../../../Popover/Popover.component.esm.js";
import { Space as te } from "../../../Space/index.esm.js";
import { Typography as le } from "../../../Typographies/index.esm.js";
import { useFormFieldSelectDisplay as oe } from "./FormFieldSelect.hooks.esm.js";
const re = r.memo(
  r.forwardRef(
    ({
      wrapperClassName: g,
      wrapperStyle: E,
      dropdownClassName: x,
      dropdownStyle: D,
      optionClassName: b,
      optionStyle: I,
      multiple: c = !1,
      value: h,
      defaultValue: S,
      onChange: M,
      placeholder: _ = "",
      // eslint-disable-next-line react-x/no-unstable-default-props
      options: d = [],
      maxDropdownHeight: P = 300,
      variant: A = Z.OUTLINED,
      error: L = !1,
      fullWidth: T = !1,
      disabled: m = !1,
      name: k,
      form: V,
      required: R = !1,
      onMouseEnter: W,
      onMouseLeave: j,
      onMouseDown: q,
      onMouseUp: B,
      ...K
    }, n) => {
      const [Y, H] = r.useState(void 0), a = r.useRef(null);
      r.useEffect(() => {
        a.current && n && (typeof n == "function" ? n(a.current) : n.current = a.current);
      }, [n]);
      const y = h !== void 0, {
        actualValue: U,
        computedWrapperStyle: $,
        displayContentData: i,
        dropdownContentData: t,
        handleKeyDown: z,
        WrapperElementEvents: G
      } = oe({
        options: d,
        multiple: c,
        value: h,
        defaultValue: S,
        onChange: M,
        placeholder: _,
        variant: A,
        error: L,
        fullWidth: T,
        disabled: m,
        maxDropdownHeight: P,
        width: Y,
        autoCloseOnSelect: !0,
        isControlled: y,
        selectRef: a,
        dropdownClassName: x,
        dropdownStyle: D,
        optionClassName: b,
        optionStyle: I,
        onMouseEnter: W,
        onMouseLeave: j,
        onMouseDown: q,
        onMouseUp: B
      }), J = r.useMemo(
        () => /* @__PURE__ */ l(
          le.Paragraph,
          {
            text: i.text,
            ellipsis: 1,
            style: {
              width: i.width,
              color: "inherit",
              opacity: i.opacity
            }
          }
        ),
        [i.text, i.width, i.opacity]
      ), Q = r.useMemo(() => t.filteredOptions.length === 0 ? null : /* @__PURE__ */ l(
        O.List,
        {
          className: u(f.FormFieldSelectDropdown, t.dropdownClassName),
          style: t.mergedDropdownStyle,
          children: t.filteredOptions.map((e) => {
            var v, w;
            const s = t.multiple ? ((v = t.selectedValuesSet) == null ? void 0 : v.has(e.value)) ?? !1 : ((w = t.selectedOption) == null ? void 0 : w.value) === e.value, o = e.disabled || !1;
            return /* @__PURE__ */ l(
              O.Item,
              {
                className: u(f.FormFieldSelectOption, t.optionClassName),
                style: t.mergedOptionStyle,
                StartIcon: t.multiple ? /* @__PURE__ */ l(N, { icon: s ? "solar:check-square-bold" : "solar:square-outline" }) : void 0,
                label: e.label,
                LabelProps: { ellipsis: 1 },
                selected: s,
                disabled: o,
                onClick: () => !o && t.handleSelect(e)
              },
              `${e.value}`
            );
          })
        }
      ), [t]);
      return /* @__PURE__ */ p(C, { children: [
        /* @__PURE__ */ l(
          "select",
          {
            ref: a,
            name: k,
            ...y ? { value: U } : { defaultValue: S },
            form: V,
            required: R,
            disabled: m,
            multiple: c,
            "aria-hidden": "true",
            tabIndex: -1,
            onChange: void 0,
            style: ie,
            ...K,
            children: c ? d.map((e) => /* @__PURE__ */ l("option", { value: String(e.value), children: e.label }, String(e.value))) : /* @__PURE__ */ p(C, { children: [
              /* @__PURE__ */ l("option", { value: "", hidden: !0 }),
              d.map((e) => /* @__PURE__ */ l("option", { value: String(e.value), children: e.label }, String(e.value)))
            ] })
          }
        ),
        /* @__PURE__ */ l(
          ee,
          {
            defaultOpen: !1,
            placement: "bottom",
            triggerEvent: "click",
            autoCloseOnClickOutside: !0,
            trigger: ({ ref: e, isOpen: s }) => /* @__PURE__ */ p(
              te.Flex,
              {
                as: "div",
                ref: (o) => {
                  typeof e == "function" ? e(o) : e && "current" in e && (e.current = o), o && H(o.getBoundingClientRect().width);
                },
                className: u(f.FormFieldSelect, g),
                style: { ...$, ...E },
                tabIndex: m ? -1 : 0,
                onKeyDown: z,
                spacing: 8,
                ...G,
                children: [
                  /* @__PURE__ */ l(F, { as: "div", style: { flex: 1, color: "inherit" }, children: J }),
                  /* @__PURE__ */ l(
                    F,
                    {
                      as: "div",
                      style: {
                        display: "flex",
                        alignItems: "center",
                        transition: "transform 0.25s ease-in-out",
                        transform: s ? "rotate(180deg)" : "rotate(0deg)",
                        color: "inherit"
                      },
                      children: /* @__PURE__ */ l(N, { icon: "solar:alt-arrow-down-linear" })
                    }
                  )
                ]
              }
            ),
            children: Q
          }
        )
      ] });
    }
  )
);
re.displayName = X.FormFieldSelect;
const ie = {
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: 0,
  height: 0
};
export {
  re as default
};
