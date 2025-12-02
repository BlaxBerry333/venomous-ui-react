import { jsxs as c, jsx as l, Fragment as E } from "react/jsx-runtime";
import n from "react";
import u from "clsx";
import ee from "../../../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as te } from "../../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as f } from "../../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../../constants/designs/BORDER_COLORS.esm.js";
import "../../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../../../Theme/ThemeProvider.context.esm.js";
import { FORM_FIELD_VARIANT_MAP as le } from "../../_/FormFieldBase.types.esm.js";
import S from "../../../Icon/Icon.component.esm.js";
import { Menu as F } from "../../../Menu/index.esm.js";
import re from "../../../Popover/Popover.component.esm.js";
import { Space as g } from "../../../Space/index.esm.js";
import { Typography as oe } from "../../../Typographies/index.esm.js";
import { useFormFieldSelectDisplay as ne } from "./FormFieldSelect.hooks.esm.js";
const ae = n.memo(
  n.forwardRef(
    ({
      wrapperClassName: C,
      wrapperStyle: N,
      dropdownClassName: O,
      dropdownStyle: x,
      optionClassName: w,
      optionStyle: D,
      multiple: d = !1,
      value: h,
      defaultValue: y,
      onChange: L,
      placeholder: P = "",
      // eslint-disable-next-line react-x/no-unstable-default-props
      options: m = [],
      maxDropdownHeight: M = 300,
      variant: _ = le.OUTLINED,
      error: A = !1,
      fullWidth: T = !1,
      disabled: p = !1,
      name: k,
      form: V,
      required: W = !1,
      onMouseEnter: R,
      onMouseLeave: j,
      onMouseDown: B,
      onMouseUp: K,
      ...Y
    }, a) => {
      const [q, H] = n.useState(void 0), s = n.useRef(null);
      n.useEffect(() => {
        s.current && a && (typeof a == "function" ? a(s.current) : a.current = s.current);
      }, [a]);
      const v = h !== void 0, {
        actualValue: U,
        computedWrapperStyle: $,
        displayContentData: i,
        dropdownContentData: t,
        handleKeyDown: z,
        WrapperElementEvents: G
      } = ne({
        options: m,
        multiple: d,
        value: h,
        defaultValue: y,
        onChange: L,
        placeholder: P,
        variant: _,
        error: A,
        fullWidth: T,
        disabled: p,
        maxDropdownHeight: M,
        width: q,
        autoCloseOnSelect: !0,
        isControlled: v,
        selectRef: s,
        dropdownClassName: O,
        dropdownStyle: x,
        optionClassName: w,
        optionStyle: D,
        onMouseEnter: R,
        onMouseLeave: j,
        onMouseDown: B,
        onMouseUp: K
      }), J = n.useMemo(() => {
        var r;
        const e = !i.multiple && ((r = i.selectedOption) == null ? void 0 : r.StartIcon);
        return /* @__PURE__ */ c(g.Flex, { spacing: 8, style: { flex: 1, color: "inherit", alignItems: "center", minWidth: 0 }, children: [
          e,
          /* @__PURE__ */ l(
            oe.Paragraph,
            {
              text: i.text,
              ellipsis: 1,
              style: {
                flex: 1,
                color: "inherit",
                opacity: i.opacity
              }
            }
          )
        ] });
      }, [i]), Q = n.useMemo(() => t.filteredOptions.length === 0 ? null : /* @__PURE__ */ l(
        F.List,
        {
          className: u(f.FormFieldSelectDropdown, t.dropdownClassName),
          style: t.mergedDropdownStyle,
          children: t.filteredOptions.map((e) => {
            var b, I;
            const r = t.multiple ? ((b = t.selectedValuesSet) == null ? void 0 : b.has(e.value)) ?? !1 : ((I = t.selectedOption) == null ? void 0 : I.value) === e.value, o = e.disabled || !1, X = e.StartIcon, Z = r ? /* @__PURE__ */ l(S, { icon: "solar:check-read-linear" }) : e.EndIcon ?? (t.multiple ? /* @__PURE__ */ l(S, { icon: "solar:square-outline" }) : void 0);
            return /* @__PURE__ */ l(
              F.Item,
              {
                className: u(f.FormFieldSelectOption, t.optionClassName),
                style: t.mergedOptionStyle,
                StartIcon: X,
                EndIcon: Z,
                label: e.label,
                LabelProps: { ellipsis: 1, ...e.LabelProps },
                subLabel: e.subLabel,
                SubLabelProps: e.SubLabelProps,
                selected: r,
                disabled: o,
                onClick: () => !o && t.handleSelect(e)
              },
              `${e.value}`
            );
          })
        }
      ), [t]);
      return /* @__PURE__ */ c(E, { children: [
        /* @__PURE__ */ l(
          "select",
          {
            ref: s,
            name: k,
            ...v ? { value: U } : { defaultValue: y },
            form: V,
            required: W,
            disabled: p,
            multiple: d,
            "aria-hidden": "true",
            tabIndex: -1,
            onChange: void 0,
            style: se,
            ...Y,
            children: d ? m.map((e) => /* @__PURE__ */ l("option", { value: String(e.value), children: e.label }, String(e.value))) : /* @__PURE__ */ c(E, { children: [
              /* @__PURE__ */ l("option", { value: "", hidden: !0 }),
              m.map((e) => /* @__PURE__ */ l("option", { value: String(e.value), children: e.label }, String(e.value)))
            ] })
          }
        ),
        /* @__PURE__ */ l(
          re,
          {
            defaultOpen: !1,
            placement: "bottom",
            triggerEvent: "click",
            autoCloseOnClickOutside: !0,
            trigger: ({ ref: e, isOpen: r }) => /* @__PURE__ */ c(
              g.Flex,
              {
                as: "div",
                ref: (o) => {
                  typeof e == "function" ? e(o) : e && "current" in e && (e.current = o), o && H(o.getBoundingClientRect().width);
                },
                className: u(f.FormFieldSelect, C),
                style: { ...$, ...N },
                tabIndex: p ? -1 : 0,
                onKeyDown: z,
                spacing: 8,
                ...G,
                children: [
                  J,
                  /* @__PURE__ */ l(
                    ee,
                    {
                      as: "div",
                      style: {
                        display: "flex",
                        alignItems: "center",
                        transition: "transform 0.25s ease-in-out",
                        transform: r ? "rotate(180deg)" : "rotate(0deg)",
                        color: "inherit"
                      },
                      children: /* @__PURE__ */ l(S, { icon: "solar:alt-arrow-down-linear" })
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
ae.displayName = te.FormFieldSelect;
const se = {
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: 0,
  height: 0
};
export {
  ae as default
};
