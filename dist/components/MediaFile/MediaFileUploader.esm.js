import { jsxs as m, Fragment as g, jsx as a } from "react/jsx-runtime";
import n from "react";
import { Buttons as y } from "../Button/index.esm.js";
const h = n.memo(
  ({ handleFileUpload: o, multiple: l = !1, accept: i, style: s, isLoading: c, isDisabled: u }) => {
    const r = n.useRef(null), p = n.useCallback(() => {
      var e;
      (e = r.current) == null || e.click();
    }, []), f = n.useCallback(
      (e) => {
        const t = e.target.files;
        if (!(t != null && t.length))
          return;
        const d = Array.from(t);
        o(d), e.currentTarget.value = "";
      },
      [o]
    );
    return /* @__PURE__ */ m(g, { children: [
      /* @__PURE__ */ a(
        "input",
        {
          type: "file",
          ref: r,
          onChange: f,
          multiple: l,
          accept: i,
          style: { display: "none" }
        }
      ),
      /* @__PURE__ */ a(
        y.Icon,
        {
          icon: "solar:cloud-upload-outline",
          iconWidth: 32,
          variant: "ghost",
          isLoading: c,
          isDisabled: u,
          onClick: p,
          style: { padding: "32px 16px", ...s }
        }
      )
    ] });
  }
);
h.displayName = "MediaFile.Uploader";
export {
  h as default
};
