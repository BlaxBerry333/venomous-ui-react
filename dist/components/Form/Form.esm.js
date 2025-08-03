import { jsx as r } from "react/jsx-runtime";
import a from "react";
import { Space as i } from "../Space/index.esm.js";
const l = a.memo(({ children: m, gap: o = 8, style: e, ...t }) => /* @__PURE__ */ r("form", { style: { width: "100%", ...e }, ...t, children: /* @__PURE__ */ r(i.Flex, { column: !0, gap: o, children: m }) }));
l.displayName = "Form";
export {
  l as default
};
