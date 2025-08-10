import { jsx as t } from "react/jsx-runtime";
import e from "react";
import a from "./ProgressLoadingBar.esm.js";
const s = e.memo((o, ...r) => /* @__PURE__ */ t(
  a,
  {
    style: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 1,
      width: "80%",
      maxWidth: "500px",
      ...o
    },
    ...r
  }
));
s.displayName = "Progress.PageLoading";
export {
  s as default
};
