import { jsxs as l, jsx as r } from "react/jsx-runtime";
import e from "react";
import { Buttons as m } from "../Button/index.esm.js";
import { Space as i } from "../Space/index.esm.js";
import { Typography as n } from "../Typography/index.esm.js";
import d from "./Card.esm.js";
import { CardTagMap as c } from "./index.types.esm.js";
const u = e.lazy(() => import("../Popover/index.esm.js").then((o) => ({ default: o.Popover }))), h = e.memo(({ children: o, title: t = "", description: a = "", renderMenu: s }) => /* @__PURE__ */ l(d, { as: c.article, style: { position: "relative" }, children: [
  (t || a) && /* @__PURE__ */ l(i.Flex, { column: !0, gap: 2, style: { paddingRight: "48px" }, children: [
    /* @__PURE__ */ r(n.Title, { as: "h6", text: t, ellipsis: 1 }),
    /* @__PURE__ */ r(n.Paragraph, { ellipsis: 3, children: a })
  ] }),
  /* @__PURE__ */ r(e.Suspense, { fallback: null, children: /* @__PURE__ */ r(
    u,
    {
      placement: "bottom",
      renderTrigger: (p) => /* @__PURE__ */ r(
        m.Icon,
        {
          icon: "solar:hamburger-menu-line-duotone",
          variant: "ghost",
          isDisabled: p,
          style: { boxShadow: "none" }
        }
      ),
      style: { position: "absolute", top: "4px", right: "4px", zIndex: 1 },
      contentStyle: { transform: "translateY(-40px)" },
      children: s()
    }
  ) }),
  o && /* @__PURE__ */ r(i.Flex, { column: !0, children: o })
] }));
h.displayName = "Cards.Product";
export {
  h as default
};
