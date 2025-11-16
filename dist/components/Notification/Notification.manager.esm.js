var a = Object.defineProperty;
var d = (e, t, r) => t in e ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var i = (e, t, r) => d(e, typeof t != "symbol" ? t + "" : t, r);
import { NOTIFICATION_TYPE_MAP as c } from "./Notification.types.esm.js";
class l {
  constructor() {
    i(this, "listeners", /* @__PURE__ */ new Set());
    i(this, "idCounter", 0);
  }
  /**
   * 订阅通知事件（Container 组件使用）
   * @returns 取消订阅函数
   */
  subscribe(t) {
    return this.listeners.add(t), () => this.listeners.delete(t);
  }
  /**
   * 添加通知（notify 函数调用）
   * @returns 通知 ID
   */
  add(t) {
    const r = `notification-${Date.now()}-${++this.idCounter}`, n = {
      id: r,
      type: t.type ?? c.INFO,
      title: t.title ?? "",
      description: t.description ?? "",
      duration: t.duration ?? 4500,
      closable: t.closable ?? !0,
      createdAt: Date.now()
    };
    return this.listeners.forEach((s) => {
      try {
        s(n);
      } catch (o) {
        process.env.NODE_ENV === "development" && console.error("[Notification] Listener error:", o);
      }
    }), r;
  }
  /**
   * 获取当前监听器数量（用于调试）
   */
  getListenerCount() {
    return this.listeners.size;
  }
}
const u = new l();
function N(e) {
  return u.add(e);
}
export {
  u as default,
  N as notify
};
