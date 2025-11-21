import { jsx as t } from "react/jsx-runtime";
import o from "react";
import x from "clsx";
import { Space as S } from "../Space/index.esm.js";
import { COMPONENT_DISPLAY_NAMES as L } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as M } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import y from "./TabsTab.component.esm.js";
import { useTabsTabListStyles as A } from "./TabsTabList.hooks.esm.js";
const E = o.memo(
  o.forwardRef(
    ({
      className: p,
      style: f,
      activeTabValue: s,
      onTabChange: i,
      tabs: e,
      TabStyle: m,
      column: l = !1,
      spacing: a = 0,
      as: d = "div",
      maxWidth: c,
      ...u
    }, n) => {
      const { componentStyle: T } = A(), N = o.useMemo(() => !e || e.length === 0 ? null : e.map((r) => /* @__PURE__ */ t(
        y,
        {
          value: r.value,
          label: r.label,
          selected: s === r.value,
          disabled: r.disabled,
          prefix: r.prefix,
          suffix: r.suffix,
          color: r.color,
          column: l,
          onClick: i,
          style: { ...m, ...r.style }
        },
        r.value
      )), [e, s, i, m]);
      return /* @__PURE__ */ t(
        S.Flex,
        {
          ref: n,
          as: d,
          maxWidth: c,
          column: l,
          spacing: a,
          className: x(M.TabsTabList, p),
          style: { ...T, ...f },
          ...u,
          children: N
        }
      );
    }
  )
);
E.displayName = L.TabsTabList;
export {
  E as default
};
