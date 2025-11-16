import { jsxs as M, jsx as t } from "react/jsx-runtime";
import r from "react";
import { clsx as N } from "../../node_modules/clsx/dist/clsx.esm.js";
import { Space as s } from "../Space/index.esm.js";
import { COMPONENT_DISPLAY_NAMES as S } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as y } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import { useTabsContainerStyles as x } from "./TabsContainer.hooks.esm.js";
import C from "./TabsTabList.component.esm.js";
import A from "./TabsTabPanel.component.esm.js";
const E = r.memo(
  r.forwardRef(
    ({
      className: m,
      style: i,
      activeTabValue: a,
      onTabChange: p,
      items: o,
      column: n = !1,
      TabStyle: l,
      TabListStyle: c,
      TabPanelStyle: f,
      ...d
    }, b) => {
      const { componentStyle: u } = x(), T = r.useMemo(() => o.map(({ content: e, keepMounted: g, ...h }) => h), [o]);
      return /* @__PURE__ */ M(
        s.Flex,
        {
          ref: b,
          column: !n,
          spacing: 0,
          className: N(y.TabsContainer, m),
          style: { ...u, ...i },
          ...d,
          children: [
            /* @__PURE__ */ t(
              C,
              {
                activeTabValue: a,
                onTabChange: p,
                tabs: T,
                TabStyle: { ...l },
                column: n,
                spacing: 4,
                style: { height: "100%", width: "100%", ...c }
              }
            ),
            /* @__PURE__ */ t(s.Flex, { column: !0, style: { flex: 1, height: "100%", width: "100%" }, children: o.map((e) => /* @__PURE__ */ t(
              A,
              {
                visible: a === e.value,
                keepMounted: e.keepMounted,
                style: f,
                children: e.content
              },
              e.value
            )) })
          ]
        }
      );
    }
  )
);
E.displayName = S.TabsContainer;
export {
  E as default
};
