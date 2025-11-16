import { jsx as l, jsxs as m, Fragment as w } from "react/jsx-runtime";
import o from "react";
import { clsx as p } from "../../../../node_modules/clsx/dist/clsx.esm.js";
import F from "../../../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as ee } from "../../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as u } from "../../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../../constants/designs/BORDER_COLORS.esm.js";
import "../../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../../../Theme/ThemeProvider.context.esm.js";
import { FORM_FIELD_VARIANT_MAP as te } from "../../_/FormFieldBase.types.esm.js";
import N from "../../../Icon/Icon.component.esm.js";
import { Menu as O } from "../../../Menu/index.esm.js";
import le from "../../../Popover/Popover.component.esm.js";
import { Space as re } from "../../../Space/index.esm.js";
import { Typography as oe } from "../../../Typographies/index.esm.js";
import { useFormFieldSelectDisplay as ie } from "./FormFieldSelect.hooks.esm.js";
const ne = o.memo(
  o.forwardRef(
    ({
      wrapperClassName: E,
      wrapperStyle: x,
      dropdownClassName: D,
      dropdownStyle: I,
      optionClassName: b,
      optionStyle: M,
      multiple: c = !1,
      value: f,
      defaultValue: h,
      onChange: _,
      placeholder: A = "",
      // eslint-disable-next-line react-x/no-unstable-default-props
      options: d = [],
      maxDropdownHeight: P = 300,
      variant: L = te.OUTLINED,
      error: T = !1,
      fullWidth: k = !1,
      disabled: s = !1,
      name: V,
      form: R,
      required: W = !1,
      onMouseEnter: j,
      onMouseLeave: q,
      onMouseDown: B,
      onMouseUp: K,
      ...Y
    }, n) => {
      const [H, U] = o.useState(void 0), a = o.useRef(null);
      o.useEffect(() => {
        a.current && n && (typeof n == "function" ? n(a.current) : n.current = a.current);
      }, [n]);
      const y = f !== void 0, {
        open: S,
        actualValue: $,
        computedWrapperStyle: z,
        displayContentData: i,
        dropdownContentData: t,
        handleOpenChange: G,
        handleKeyDown: J,
        WrapperElementEvents: Q
      } = ie({
        options: d,
        multiple: c,
        value: f,
        defaultValue: h,
        onChange: _,
        placeholder: A,
        variant: L,
        error: T,
        fullWidth: k,
        disabled: s,
        maxDropdownHeight: P,
        width: H,
        autoCloseOnSelect: !0,
        isControlled: y,
        selectRef: a,
        dropdownClassName: D,
        dropdownStyle: I,
        optionClassName: b,
        optionStyle: M,
        onMouseEnter: j,
        onMouseLeave: q,
        onMouseDown: B,
        onMouseUp: K
      }), X = o.useMemo(
        () => /* @__PURE__ */ l(
          oe.Paragraph,
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
      ), Z = o.useMemo(() => t.filteredOptions.length === 0 ? null : /* @__PURE__ */ l(
        O.List,
        {
          className: p(u.FormFieldSelectDropdown, t.dropdownClassName),
          style: t.mergedDropdownStyle,
          children: t.filteredOptions.map((e) => {
            var C, v;
            const r = t.multiple ? ((C = t.selectedValuesSet) == null ? void 0 : C.has(e.value)) ?? !1 : ((v = t.selectedOption) == null ? void 0 : v.value) === e.value, g = e.disabled || !1;
            return /* @__PURE__ */ l(
              O.Item,
              {
                className: p(u.FormFieldSelectOption, t.optionClassName),
                style: t.mergedOptionStyle,
                Icon: t.multiple ? /* @__PURE__ */ l(N, { icon: r ? "solar:check-square-bold" : "solar:square-outline" }) : void 0,
                label: e.label,
                labelEllipsis: 1,
                selected: r,
                disabled: g,
                onClick: () => !g && t.handleSelect(e)
              },
              `${e.value}`
            );
          })
        }
      ), [t]);
      return /* @__PURE__ */ m(w, { children: [
        /* @__PURE__ */ l(
          "select",
          {
            ref: a,
            name: V,
            ...y ? { value: $ } : { defaultValue: h },
            form: R,
            required: W,
            disabled: s,
            multiple: c,
            "aria-hidden": "true",
            tabIndex: -1,
            onChange: void 0,
            style: ae,
            ...Y,
            children: c ? d.map((e) => /* @__PURE__ */ l("option", { value: String(e.value), children: e.label }, String(e.value))) : /* @__PURE__ */ m(w, { children: [
              /* @__PURE__ */ l("option", { value: "", hidden: !0 }),
              d.map((e) => /* @__PURE__ */ l("option", { value: String(e.value), children: e.label }, String(e.value)))
            ] })
          }
        ),
        /* @__PURE__ */ l(
          le,
          {
            open: S && !s,
            onOpenChange: G,
            placement: "bottom",
            trigger: "click",
            autoCloseOnClickOutside: !0,
            content: Z,
            children: ({ ref: e }) => /* @__PURE__ */ m(
              re.Flex,
              {
                as: "div",
                ref: (r) => {
                  typeof e == "function" ? e(r) : e && "current" in e && (e.current = r), r && U(r.getBoundingClientRect().width);
                },
                className: p(u.FormFieldSelect, E),
                style: { ...z, ...x },
                tabIndex: s ? -1 : 0,
                onKeyDown: J,
                spacing: 8,
                ...Q,
                children: [
                  /* @__PURE__ */ l(F, { as: "div", style: { flex: 1, color: "inherit" }, children: X }),
                  /* @__PURE__ */ l(
                    F,
                    {
                      as: "div",
                      style: {
                        display: "flex",
                        alignItems: "center",
                        transition: "transform 0.25s ease-in-out",
                        transform: S ? "rotate(180deg)" : "rotate(0deg)",
                        color: "inherit"
                      },
                      children: /* @__PURE__ */ l(N, { icon: "solar:alt-arrow-down-linear" })
                    }
                  )
                ]
              }
            )
          }
        )
      ] });
    }
  )
);
ne.displayName = ee.FormFieldSelect;
const ae = {
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: 0,
  height: 0
};
export {
  ne as default
};
