import { jsx as E, jsxs as i, Fragment as a } from "react/jsx-runtime";
import r from "react";
import I from "clsx";
import { Space as L } from "../../Space/index.esm.js";
import { Typography as q } from "../../Typographies/index.esm.js";
import { COMPONENT_DISPLAY_NAMES as N } from "../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as v } from "../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../constants/designs/BORDER_COLORS.esm.js";
import { SEMANTIC_COLORS as j } from "../../../constants/designs/SEMANTIC_COLORS.esm.js";
import "../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import D from "../../../hooks/useThemeDesigns/index.esm.js";
import "../../Theme/ThemeProvider.context.esm.js";
import w from "../../../hooks/useCustomComponentProps/index.esm.js";
import Y from "../FormLabel/FormLabel.component.esm.js";
const k = r.memo(
  r.forwardRef(
    ({
      className: M,
      style: x,
      label: l,
      children: u,
      message: d,
      column: F,
      spacing: S,
      reverse: A,
      required: O,
      isError: T,
      disabled: g,
      onMouseEnter: h,
      onMouseLeave: R
    }, b) => {
      const o = w({
        displayName: N.FormControl
      }), p = F ?? o.column ?? !0, P = S ?? o.spacing ?? 4, f = A ?? o.reverse ?? !1, C = O ?? o.required ?? !1, e = T ?? o.isError ?? !1, t = g ?? o.disabled ?? !1, s = r.useId(), { TextColors: c } = D(), _ = r.useMemo(() => t ? c.disabled : e ? j.ERROR : c[2], [t, e, c]), m = r.useMemo(() => u(s), [u, s]), n = r.useMemo(
        () => l ? /* @__PURE__ */ E(Y, { text: l, required: C, disabled: t, isError: e, htmlFor: s }) : null,
        [l, C, t, e, s]
      ), y = r.useMemo(() => p ? /* @__PURE__ */ i(a, { children: [
        n,
        m
      ] }) : f ? /* @__PURE__ */ i(a, { children: [
        m,
        n
      ] }) : /* @__PURE__ */ i(a, { children: [
        n,
        m
      ] }), [p, f, n, m]);
      return /* @__PURE__ */ i(
        L.Flex,
        {
          ref: b,
          column: p,
          spacing: P,
          className: I(v.FormControl, M),
          style: x,
          onMouseEnter: h,
          onMouseLeave: R,
          children: [
            y,
            d && /* @__PURE__ */ E(q.Text, { text: d, as: "small", color: _ })
          ]
        }
      );
    }
  )
);
k.displayName = N.FormControl;
export {
  k as default
};
