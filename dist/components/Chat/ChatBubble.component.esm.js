import { jsxs as r, jsx as a } from "react/jsx-runtime";
import i from "react";
import I from "clsx";
import R from "../Icon/Icon.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as f } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as m } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import j from "../../hooks/useCustomComponentProps/index.esm.js";
import { formatDefaultTimestamp as H, useChatBubbleStyles as k } from "./ChatBubble.hooks.esm.js";
import { CHAT_BUBBLE_PLACEMENT_MAP as d } from "./ChatBubble.types.esm.js";
const F = i.memo(
  i.forwardRef(
    ({
      className: h,
      style: u,
      placement: b,
      loading: y,
      Avatar: N,
      senderName: C,
      timestamp: A,
      formatTimestamp: S,
      message: v,
      maxWidth: x,
      ...B
    }, M) => {
      const t = j({
        displayName: f.ChatBubble
      }), l = b ?? t.placement ?? d.LEFT, n = y ?? t.loading ?? !1, c = N ?? t.Avatar, s = C ?? t.senderName, e = A ?? t.timestamp, p = S ?? t.formatTimestamp ?? H, T = v ?? t.message, E = x ?? t.maxWidth ?? "75%", g = c != null, { containerStyle: P, bubbleStyle: _, metaStyle: w, senderNameStyle: D, timestampStyle: L } = k({
        placement: l,
        maxWidth: E
      }), o = i.useMemo(() => {
        if (!e) return null;
        const W = e instanceof Date ? e : new Date(e);
        return p(W);
      }, [e, p]), O = s || o;
      return /* @__PURE__ */ r(
        "div",
        {
          ref: M,
          className: I(m.ChatBubble, h),
          style: { ...P, ...u },
          role: "article",
          "aria-label": `Message from ${s || (l === d.RIGHT ? "you" : "assistant")}`,
          "aria-busy": n || void 0,
          ...B,
          children: [
            g && /* @__PURE__ */ a("div", { className: m.ChatBubbleAvatar, style: { flexShrink: 0 }, children: c }),
            /* @__PURE__ */ r("div", { style: { display: "flex", flexDirection: "column", minWidth: 0, flex: 1 }, children: [
              O && /* @__PURE__ */ r("div", { className: m.ChatBubbleMeta, style: w, children: [
                s && /* @__PURE__ */ a("span", { style: D, children: s }),
                o && /* @__PURE__ */ a("span", { style: L, children: o })
              ] }),
              /* @__PURE__ */ a("div", { className: m.ChatBubbleContent, style: _, children: n ? /* @__PURE__ */ a(R, { icon: "eos-icons:three-dots-loading", width: 24 }) : T })
            ] })
          ]
        }
      );
    }
  )
);
F.displayName = f.ChatBubble;
export {
  F as default
};
