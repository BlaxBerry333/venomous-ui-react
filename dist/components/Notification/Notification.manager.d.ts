import { type Notification, type NotificationConfig } from "./Notification.types";
type NotificationListener = (notification: Notification) => void;
/**
 * Notification 事件管理器（单例模式）
 * 使用发布-订阅模式，避免 Context re-render
 */
declare class NotificationManager {
    private listeners;
    private idCounter;
    /**
     * 订阅通知事件（Container 组件使用）
     * @returns 取消订阅函数
     */
    subscribe(listener: NotificationListener): () => void;
    /**
     * 添加通知（notify 函数调用）
     * @returns 通知 ID
     */
    add(config: NotificationConfig): string;
    /**
     * 获取当前监听器数量（用于调试）
     */
    getListenerCount(): number;
}
declare const manager: NotificationManager;
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
export declare function notify(config: NotificationConfig): string;
export default manager;
//# sourceMappingURL=Notification.manager.d.ts.map