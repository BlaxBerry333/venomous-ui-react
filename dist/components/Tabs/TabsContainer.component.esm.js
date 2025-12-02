import { jsxs as M, jsx as e } from "react/jsx-runtime";
import r from "react";
import S from "clsx";
import { Space as s } from "../Space/index.esm.js";
import { COMPONENT_DISPLAY_NAMES as a } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as x } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import P from "../../hooks/useCustomComponentProps/index.esm.js";
import { useTabsContainerStyles as A } from "./TabsContainer.hooks.esm.js";
import E from "./TabsTabList.component.esm.js";
import g from "./TabsTabPanel.component.esm.js";
const O = r.memo(
  r.forwardRef(
    ({
      className: p,
      style: i,
      activeTabValue: n,
      onTabChange: l,
      items: t,
      column: c,
      TabStyle: u,
      TabListStyle: f,
      TabPanelStyle: d,
      ...b
    }, C) => {
      const T = P({
        displayName: a.TabsContainer
      }), m = c ?? T.column ?? !1, { componentStyle: N } = A(), h = r.useMemo(() => t.map(({ content: o, keepMounted: _, ...y }) => y), [t]);
      return /* @__PURE__ */ M(
        s.Flex,
        {
          ref: C,
          column: !m,
          spacing: 0,
          className: S(x.TabsContainer, p),
          style: { ...N, ...i },
          ...b,
          children: [
            /* @__PURE__ */ e(
              E,
              {
                activeTabValue: n,
                onTabChange: l,
                tabs: h,
                TabStyle: { ...u },
                column: m,
                spacing: 4,
                style: { height: "100%", width: "100%", ...f }
              }
            ),
            /* @__PURE__ */ e(s.Flex, { column: !0, style: { flex: 1, height: "100%", width: "100%" }, children: t.map((o) => /* @__PURE__ */ e(
              g,
              {
                visible: n === o.value,
                keepMounted: o.keepMounted,
                style: d,
                children: o.content
              },
              o.value
            )) })
          ]
        }
      );
    }
  )
);
O.displayName = a.TabsContainer;
export {
  O as default
};
