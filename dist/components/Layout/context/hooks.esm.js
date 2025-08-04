import o from "react";
import { LayoutContext as e } from "./context.esm.js";
function u() {
  const t = o.useContext(e);
  if (t === void 0)
    throw new Error("useLayoutContext must be used within a LayoutProvider");
  return t;
}
export {
  u as useLayoutContext
};
