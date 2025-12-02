import { jsx as p } from "react/jsx-runtime";
import r from "react";
import A from "clsx";
import { Space as E } from "../Space/index.esm.js";
import { COMPONENT_DISPLAY_NAMES as a } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as P } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import h from "../../hooks/useCustomComponentProps/index.esm.js";
import v from "./TabsTab.component.esm.js";
import { useTabsTabListStyles as O } from "./TabsTabList.hooks.esm.js";
const _ = r.memo(
  r.forwardRef(
    ({
      className: n,
      style: c,
      activeTabValue: e,
      onTabChange: i,
      tabs: s,
      TabStyle: t,
      column: f,
      spacing: u,
      as: d,
      maxWidth: T,
      ...x
    }, N) => {
      const m = h({
        displayName: a.TabsTabList
      }), l = f ?? m.column ?? !1, L = u ?? m.spacing ?? 0, S = d ?? m.as ?? "div", y = T ?? m.maxWidth, { componentStyle: C } = O(), M = r.useMemo(() => !s || s.length === 0 ? null : s.map((o) => /* @__PURE__ */ p(
        v,
        {
          value: o.value,
          label: o.label,
          selected: e === o.value,
          disabled: o.disabled,
          prefix: o.prefix,
          suffix: o.suffix,
          color: o.color,
          column: l,
          onClick: i,
          style: { ...t, ...o.style }
        },
        o.value
      )), [s, e, i, t]);
      return /* @__PURE__ */ p(
        E.Flex,
        {
          ref: N,
          as: S,
          maxWidth: y,
          column: l,
          spacing: L,
          className: A(P.TabsTabList, n),
          style: { ...C, ...c },
          ...x,
          children: M
        }
      );
    }
  )
);
_.displayName = a.TabsTabList;
export {
  _ as default
};
