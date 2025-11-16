import { NOTIFICATION_TYPE_MAP, type Notification, type NotificationConfig } from "./Notification.types";

type NotificationListener = (notification: Notification) => void;

/**
 * Notification 事件管理器（单例模式）
 * 使用发布-订阅模式，避免 Context re-render
 */
class NotificationManager {
  private listeners: Set<NotificationListener> = new Set();
  private idCounter = 0;

  /**
   * 订阅通知事件（Container 组件使用）
   * @returns 取消订阅函数
   */
  subscribe(listener: NotificationListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  /**
   * 添加通知（notify 函数调用）
   * @returns 通知 ID
   */
  add(config: NotificationConfig): string {
    const id = `notification-${Date.now()}-${++this.idCounter}`;
    const notification: Notification = {
      id,
      type: config.type ?? NOTIFICATION_TYPE_MAP.INFO,
      title: config.title ?? "",
      description: config.description ?? "",
      duration: config.duration ?? 4500,
      closable: config.closable ?? true,
      createdAt: Date.now(),
    };

    // 触发所有监听器（通知 Container 组件）
    this.listeners.forEach((listener) => {
      try {
        listener(notification);
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.error("[Notification] Listener error:", error);
        }
      }
    });

    return id;
  }

  /**
   * 获取当前监听器数量（用于调试）
   */
  getListenerCount(): number {
    return this.listeners.size;
  }
}

// 单例实例
const manager = new NotificationManager();

/**
 * 全局 notify 函数
 * 可在任意组件中调用，无需 Context
 *
 * @example
 * ```tsx
 * import { notify } from "venomous-ui-react/components";
 *
 * notify({
 *   type: "SUCCESS",
 *   title: "Success",
 *   description: "Operation completed!",
 * });
 * ```
 */
export function notify(config: NotificationConfig): string {
  return manager.add(config);
}

export default manager;
