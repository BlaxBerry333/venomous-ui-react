import { jsxs as a, jsx as r } from "react/jsx-runtime";
import l from "react";
import { Buttons as n } from "../Button/index.esm.js";
import { Space as i } from "../Space/index.esm.js";
import { Typography as p } from "../Typography/index.esm.js";
import d from "./Card.esm.js";
import { CardTagMap as c } from "./index.types.esm.js";
import u from "../Popover/Popover.esm.js";
const g = l.memo(({ children: o, title: t = "", description: e = "", renderMenu: m }) => /* @__PURE__ */ a(d, { as: c.article, style: { position: "relative" }, children: [
  (t || e) && /* @__PURE__ */ a(i.Flex, { column: !0, gap: 2, style: { paddingRight: "48px" }, children: [
    /* @__PURE__ */ r(p.Title, { as: "h6", text: t, ellipsis: 1 }),
    /* @__PURE__ */ r(p.Paragraph, { ellipsis: 3, children: e })
  ] }),
  /* @__PURE__ */ r(
    u,
    {
      placement: "bottom",
      renderTrigger: (s) => /* @__PURE__ */ r(n.Icon, { icon: "solar:hamburger-menu-line-duotone", variant: "ghost", isDisabled: s }),
      style: { position: "absolute", top: "4px", right: "4px", zIndex: 1 },
      contentStyle: { transform: "translateY(-40px)" },
      children: m()
    }
  ),
  o && /* @__PURE__ */ r(i.Flex, { column: !0, children: o })
] }));
g.displayName = "Cards.Product";
export {
  g as default
};
