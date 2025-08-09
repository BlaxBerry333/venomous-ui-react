import { jsx as m } from "react/jsx-runtime";
import s from "clsx";
import c from "react";
import { Space as l } from "../Space/index.esm.js";
const i = c.memo(({ children: o, gap: r = 8, className: e, style: t, ...a }) => /* @__PURE__ */ m(
  "form",
  {
    className: s("Venomous-UI-React--Form", e),
    style: {
      width: "100%",
      ...t
    },
    ...a,
    children: /* @__PURE__ */ m(l.Flex, { column: !0, gap: r, children: o })
  }
));
i.displayName = "Form";
export {
  i as default
};
