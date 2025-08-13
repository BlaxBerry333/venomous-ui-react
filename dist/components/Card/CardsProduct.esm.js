import { jsxs as s, jsx as o } from "react/jsx-runtime";
import m from "clsx";
import a from "react";
import { Buttons as c } from "../Button/index.esm.js";
import { Space as n } from "../Space/index.esm.js";
import { Typography as l } from "../Typography/index.esm.js";
import d from "./Card.esm.js";
import { CardTagMap as h } from "./index.types.esm.js";
const f = a.lazy(() => import("../Popover/index.esm.js").then((r) => ({ default: r.Popover }))), g = a.memo(({ className: r, title: i = "", description: e = "", renderMenu: t }) => /* @__PURE__ */ s(
  d,
  {
    as: h.article,
    className: m("Venomous-UI-React--Cards.Book", r),
    style: { position: "relative" },
    children: [
      (i || e) && /* @__PURE__ */ s(n.Flex, { column: !0, gap: 2, style: { paddingRight: "48px" }, children: [
        /* @__PURE__ */ o(l.Title, { as: "h6", text: i, ellipsis: 1 }),
        /* @__PURE__ */ o(l.Paragraph, { ellipsis: 3, children: e })
      ] }),
      /* @__PURE__ */ o(a.Suspense, { fallback: null, children: /* @__PURE__ */ o(
        f,
        {
          direction: "left",
          renderTrigger: (p) => /* @__PURE__ */ o(
            c.Icon,
            {
              icon: "solar:hamburger-menu-line-duotone",
              variant: "ghost",
              isDisabled: p,
              style: { boxShadow: "none" }
            }
          ),
          style: {
            position: "absolute",
            top: "4px",
            right: "4px",
            zIndex: 1
          },
          children: t == null ? void 0 : t()
        }
      ) })
    ]
  }
));
g.displayName = "Cards.Product";
export {
  g as default
};
