import { jsx as m } from "react/jsx-runtime";
import n from "clsx";
import o from "react";
import a from "../../hooks/useDesign/index.esm.js";
const l = o.memo(({ className: i, style: t, column: e = !1, ...s }) => {
  const r = a(), d = o.useMemo(() => e ? {
    border: "none",
    borderLeft: `1px solid ${r.BorderColors.tertiary}`,
    margin: "0 8px",
    height: "100%",
    width: "1px",
    writingMode: "vertical-lr"
  } : {
    border: "none",
    borderTop: `1px solid ${r.BorderColors.tertiary}`,
    margin: "8px 0",
    width: "100%"
  }, [e, r]);
  return /* @__PURE__ */ m(
    "hr",
    {
      className: n("Venomous-UI-React--Divider", i),
      style: {
        ...d,
        ...t
      },
      ...s
    }
  );
});
l.displayName = "Divider";
export {
  l as default
};
