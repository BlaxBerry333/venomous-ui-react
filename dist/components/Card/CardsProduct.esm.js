import { jsxs as a, jsx as o } from "react/jsx-runtime";
import s from "react";
import { Buttons as l } from "../Button/index.esm.js";
import { Space as i } from "../Space/index.esm.js";
import { Typography as p } from "../Typography/index.esm.js";
import m from "./Card.esm.js";
const n = s.memo(({ children: r, title: t = "", description: e = "" }) => /* @__PURE__ */ a(m, { style: { position: "relative" }, children: [
  (t || e) && /* @__PURE__ */ a(i.Flex, { column: !0, gap: 2, style: { paddingRight: "48px" }, children: [
    /* @__PURE__ */ o(p.Title, { as: "h6", text: t, ellipsis: 1 }),
    /* @__PURE__ */ o(p.Paragraph, { ellipsis: 3, children: e })
  ] }),
  /* @__PURE__ */ o(
    l.Icon,
    {
      icon: "solar:hamburger-menu-line-duotone",
      variant: "ghost",
      style: { position: "absolute", top: "4px", right: "4px" }
    }
  ),
  r && /* @__PURE__ */ o(i.Flex, { column: !0, children: r })
] }));
n.displayName = "Cards.Product";
export {
  n as default
};
