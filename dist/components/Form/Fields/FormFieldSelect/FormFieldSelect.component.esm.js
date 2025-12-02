import { jsxs as d, jsx as l, Fragment as F } from "react/jsx-runtime";
import i from "react";
import f from "clsx";
import de from "../../../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as x } from "../../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as h } from "../../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../../constants/designs/BORDER_COLORS.esm.js";
import "../../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../../../Theme/ThemeProvider.context.esm.js";
import { FORM_FIELD_VARIANT_MAP as me } from "../../_/FormFieldBase.types.esm.js";
import S from "../../../Icon/Icon.component.esm.js";
import { Menu as I } from "../../../Menu/index.esm.js";
import pe from "../../../Popover/Popover.component.esm.js";
import { Space as E } from "../../../Space/index.esm.js";
import { Typography as ue } from "../../../Typographies/index.esm.js";
import fe from "../../../../hooks/useCustomComponentProps/index.esm.js";
import { useFormFieldSelectDisplay as he } from "./FormFieldSelect.hooks.esm.js";
const Se = i.memo(
  i.forwardRef(
    ({
      wrapperClassName: N,
      wrapperStyle: w,
      dropdownClassName: D,
      dropdownStyle: O,
      optionClassName: P,
      optionStyle: L,
      multiple: M,
      value: y,
      defaultValue: b,
      onChange: _,
      placeholder: A,
      // eslint-disable-next-line react-x/no-unstable-default-props
      options: m = [],
      maxDropdownHeight: W,
      variant: T,
      error: k,
      fullWidth: q,
      disabled: H,
      name: V,
      form: R,
      required: j,
      onMouseEnter: B,
      onMouseLeave: K,
      onMouseDown: Y,
      onMouseUp: U,
      ...$
    }, a) => {
      const r = fe({
        displayName: x.FormFieldSelect
      }), p = M ?? r.multiple ?? !1, z = A ?? r.placeholder ?? "", G = W ?? r.maxDropdownHeight ?? 300, J = T ?? r.variant ?? me.OUTLINED, Q = k ?? r.error ?? !1, X = q ?? r.fullWidth ?? !1, u = H ?? r.disabled ?? !1, Z = j ?? r.required ?? !1, [ee, te] = i.useState(void 0), s = i.useRef(null);
      i.useEffect(() => {
        s.current && a && (typeof a == "function" ? a(s.current) : a.current = s.current);
      }, [a]);
      const v = y !== void 0, {
        actualValue: le,
        computedWrapperStyle: re,
        displayContentData: c,
        dropdownContentData: t,
        handleKeyDown: oe,
        WrapperElementEvents: ne
      } = he({
        options: m,
        multiple: p,
        value: y,
        defaultValue: b,
        onChange: _,
        placeholder: z,
        variant: J,
        error: Q,
        fullWidth: X,
        disabled: u,
        maxDropdownHeight: G,
        width: ee,
        autoCloseOnSelect: !0,
        isControlled: v,
        selectRef: s,
        dropdownClassName: D,
        dropdownStyle: O,
        optionClassName: P,
        optionStyle: L,
        onMouseEnter: B,
        onMouseLeave: K,
        onMouseDown: Y,
        onMouseUp: U
      }), ie = i.useMemo(() => {
        var o;
        const e = !c.multiple && ((o = c.selectedOption) == null ? void 0 : o.StartIcon);
        return /* @__PURE__ */ d(E.Flex, { spacing: 8, style: { flex: 1, color: "inherit", alignItems: "center", minWidth: 0 }, children: [
          e,
          /* @__PURE__ */ l(
            ue.Paragraph,
            {
              text: c.text,
              ellipsis: 1,
              style: {
                flex: 1,
                color: "inherit",
                opacity: c.opacity
              }
            }
          )
        ] });
      }, [c]), ae = i.useMemo(() => t.filteredOptions.length === 0 ? null : /* @__PURE__ */ l(
        I.List,
        {
          className: f(h.FormFieldSelectDropdown, t.dropdownClassName),
          style: t.mergedDropdownStyle,
          children: t.filteredOptions.map((e) => {
            var g, C;
            const o = t.multiple ? ((g = t.selectedValuesSet) == null ? void 0 : g.has(e.value)) ?? !1 : ((C = t.selectedOption) == null ? void 0 : C.value) === e.value, n = e.disabled || !1, se = e.StartIcon, ce = o ? /* @__PURE__ */ l(S, { icon: "solar:check-read-linear" }) : e.EndIcon ?? (t.multiple ? /* @__PURE__ */ l(S, { icon: "solar:square-outline" }) : void 0);
            return /* @__PURE__ */ l(
              I.Item,
              {
                className: f(h.FormFieldSelectOption, t.optionClassName),
                style: t.mergedOptionStyle,
                StartIcon: se,
                EndIcon: ce,
                label: e.label,
                LabelProps: { ellipsis: 1, ...e.LabelProps },
                subLabel: e.subLabel,
                SubLabelProps: e.SubLabelProps,
                selected: o,
                disabled: n,
                onClick: () => !n && t.handleSelect(e)
              },
              `${e.value}`
            );
          })
        }
      ), [t]);
      return /* @__PURE__ */ d(F, { children: [
        /* @__PURE__ */ l(
          "select",
          {
            ref: s,
            name: V,
            ...v ? { value: le } : { defaultValue: b },
            form: R,
            required: Z,
            disabled: u,
            multiple: p,
            "aria-hidden": "true",
            tabIndex: -1,
            onChange: void 0,
            style: ye,
            ...$,
            children: p ? m.map((e) => /* @__PURE__ */ l("option", { value: String(e.value), children: e.label }, String(e.value))) : /* @__PURE__ */ d(F, { children: [
              /* @__PURE__ */ l("option", { value: "", hidden: !0 }),
              m.map((e) => /* @__PURE__ */ l("option", { value: String(e.value), children: e.label }, String(e.value)))
            ] })
          }
        ),
        /* @__PURE__ */ l(
          pe,
          {
            defaultOpen: !1,
            placement: "bottom",
            triggerEvent: "click",
            autoCloseOnClickOutside: !0,
            trigger: ({ ref: e, isOpen: o }) => /* @__PURE__ */ d(
              E.Flex,
              {
                as: "div",
                ref: (n) => {
                  typeof e == "function" ? e(n) : e && "current" in e && (e.current = n), n && te(n.getBoundingClientRect().width);
                },
                className: f(h.FormFieldSelect, N),
                style: { ...re, ...w },
                tabIndex: u ? -1 : 0,
                onKeyDown: oe,
                spacing: 8,
                ...ne,
                children: [
                  ie,
                  /* @__PURE__ */ l(
                    de,
                    {
                      as: "div",
                      style: {
                        display: "flex",
                        alignItems: "center",
                        transition: "transform 0.25s ease-in-out",
                        transform: o ? "rotate(180deg)" : "rotate(0deg)",
                        color: "inherit"
                      },
                      children: /* @__PURE__ */ l(S, { icon: "solar:alt-arrow-down-linear" })
                    }
                  )
                ]
              }
            ),
            children: ae
          }
        )
      ] });
    }
  )
);
Se.displayName = x.FormFieldSelect;
const ye = {
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: 0,
  height: 0
};
export {
  Se as default
};
