import { jsxs as M, jsx as P } from "react/jsx-runtime";
import t from "react";
import O from "clsx";
import { COMPONENT_DISPLAY_NAMES as e } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as _ } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import g from "../../hooks/useCustomComponentProps/index.esm.js";
import { useChatStreamTextStyles as B, useChatStreamTextActions as j } from "./ChatStreamText.hooks.esm.js";
const L = t.memo(
  t.forwardRef(
    ({
      className: r,
      style: s,
      text: m,
      speed: n,
      streaming: a,
      onComplete: i,
      skipAnimation: p,
      cursor: c,
      showCursor: l,
      cursorBlinkSpeed: u,
      ...C
    }, S) => {
      const o = g({
        displayName: e.ChatStreamText
      }), d = n ?? o.speed ?? 30, h = a ?? o.streaming ?? !1, f = i ?? o.onComplete, x = p ?? o.skipAnimation ?? !1, N = c ?? o.cursor ?? "|", A = l ?? o.showCursor ?? !0, T = u ?? o.cursorBlinkSpeed ?? 1e4, { containerStyle: y, cursorStyle: k } = B({ cursorBlinkSpeed: T }), { displayedText: w, showCursorNow: E } = j({
        text: m,
        speed: d,
        streaming: h,
        skipAnimation: x,
        onComplete: f
      });
      return /* @__PURE__ */ M(
        "span",
        {
          ref: S,
          className: O(_.ChatStreamText, r),
          style: { ...y, ...s },
          ...C,
          children: [
            w,
            A && E && /* @__PURE__ */ P("span", { style: k, "aria-hidden": "true", children: N })
          ]
        }
      );
    }
  )
);
L.displayName = e.ChatStreamText;
export {
  L as default
};
