import { jsxs as s, jsx as o } from "react/jsx-runtime";
import d from "clsx";
import e from "react";
import { Buttons as c } from "../Button/index.esm.js";
import { Space as l } from "../Space/index.esm.js";
import { Typography as i } from "../Typography/index.esm.js";
import u from "./Card.esm.js";
import { CardTagMap as h } from "./index.types.esm.js";
const x = e.lazy(() => import("../Popover/index.esm.js").then((r) => ({ default: r.Popover }))), f = e.memo(
  ({ children: r, className: n, title: t = "", description: a = "", renderMenu: p }) => /* @__PURE__ */ s(
    u,
    {
      as: h.article,
      className: d("Venomous-UI-React--Cards.Book", n),
      style: { position: "relative" },
      children: [
        (t || a) && /* @__PURE__ */ s(l.Flex, { column: !0, gap: 2, style: { paddingRight: "48px" }, children: [
          /* @__PURE__ */ o(i.Title, { as: "h6", text: t, ellipsis: 1 }),
          /* @__PURE__ */ o(i.Paragraph, { ellipsis: 3, children: a })
        ] }),
        /* @__PURE__ */ o(e.Suspense, { fallback: null, children: /* @__PURE__ */ o(
          x,
          {
            direction: "bottom",
            renderTrigger: (m) => /* @__PURE__ */ o(
              c.Icon,
              {
                icon: "solar:hamburger-menu-line-duotone",
                variant: "ghost",
                isDisabled: m,
                style: { boxShadow: "none" }
              }
            ),
            style: { position: "absolute", top: "4px", right: "4px", zIndex: 1 },
            contentStyle: { transform: "translateY(-40px)" },
            children: p()
          }
        ) }),
        r && /* @__PURE__ */ o(l.Flex, { column: !0, children: r })
      ]
    }
  )
);
f.displayName = "Cards.Product";
export {
  f as default
};
