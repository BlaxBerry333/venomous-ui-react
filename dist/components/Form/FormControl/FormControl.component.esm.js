import { jsx as F, jsxs as r } from "react/jsx-runtime";
import o from "react";
import N from "clsx";
import Y from "../FormLabel/FormLabel.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as L } from "../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as S } from "../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../constants/designs/BORDER_COLORS.esm.js";
import { SEMANTIC_COLORS as j } from "../../../constants/designs/SEMANTIC_COLORS.esm.js";
import "../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import q from "../../../hooks/useThemeDesigns/index.esm.js";
import "../../Theme/ThemeProvider.context.esm.js";
import { Space as y } from "../../Space/index.esm.js";
import { Typography as v } from "../../Typographies/index.esm.js";
import W from "../../../hooks/useCustomComponentProps/index.esm.js";
const B = o.memo(
  o.forwardRef(
    ({
      className: i,
      style: c,
      label: t,
      LabelExtra: s,
      children: R,
      message: p,
      column: h,
      spacing: A,
      reverse: M,
      required: w,
      isError: P,
      disabled: b,
      onMouseEnter: a,
      onMouseLeave: f
    }, u) => {
      const e = W({
        displayName: L.FormControl
      }), d = h ?? e.column ?? !0, _ = A ?? e.spacing ?? 4, D = M ?? e.reverse ?? !1, g = w ?? e.required ?? !1, l = P ?? e.isError ?? !1, m = b ?? e.disabled ?? !1, n = o.useId(), { TextColors: C } = q(), O = o.useMemo(() => m ? C.disabled : l ? j.ERROR : C[2], [m, l, C]), E = o.useMemo(() => R(n), [R, n]), x = o.useMemo(() => {
        if (!t && !s) return null;
        const I = t ? /* @__PURE__ */ F(Y, { text: t, required: g, disabled: m, isError: l, htmlFor: n }) : null;
        return s ? /* @__PURE__ */ r("div", { style: d ? U : X, children: [
          I ?? /* @__PURE__ */ F("span", {}),
          s
        ] }) : I;
      }, [t, s, g, m, l, n, d]), T = o.useMemo(
        () => p ? /* @__PURE__ */ F(v.Text, { text: p, as: "small", color: O }) : null,
        [p, O]
      );
      return d ? /* @__PURE__ */ r(
        y.Flex,
        {
          ref: u,
          column: !0,
          spacing: _,
          className: N(S.FormControl, i),
          style: c,
          onMouseEnter: a,
          onMouseLeave: f,
          children: [
            x,
            E,
            T
          ]
        }
      ) : D ? /* @__PURE__ */ r(
        y.Flex,
        {
          ref: u,
          column: !1,
          spacing: _,
          className: N(S.FormControl, i),
          style: { alignItems: "center", ...c },
          onMouseEnter: a,
          onMouseLeave: f,
          children: [
            E,
            x
          ]
        }
      ) : /* @__PURE__ */ r(
        y.Flex,
        {
          ref: u,
          column: !1,
          spacing: _,
          className: N(S.FormControl, i),
          style: { alignItems: "flex-start", ...c },
          onMouseEnter: a,
          onMouseLeave: f,
          children: [
            x,
            /* @__PURE__ */ r("div", { style: k, children: [
              E,
              T
            ] })
          ]
        }
      );
    }
  )
);
B.displayName = L.FormControl;
const U = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%"
}, X = {
  display: "flex",
  alignItems: "center",
  gap: 8
}, k = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: 4
};
export {
  B as default
};
