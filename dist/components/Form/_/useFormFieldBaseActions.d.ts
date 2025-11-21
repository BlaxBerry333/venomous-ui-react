import React from "react";
/**
 * FormField 基础 Actions 参数
 */
export interface UseFormFieldBaseActionsParams<TValue> {
    /** 当前值 */
    value?: TValue;
    /** 值变化回调 */
    onChange?: (value: TValue, event: React.ChangeEvent<HTMLInputElement>) => void;
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否只读 */
    readOnly?: boolean;
    /** 鼠标进入事件 */
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    /** 鼠标离开事件 */
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
    /** 鼠标按下事件 */
    onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
    /** 鼠标抬起事件 */
    onMouseUp?: React.MouseEventHandler<HTMLDivElement>;
}
/**
 * FormField 基础 Actions Hook
 *
 * 为 FormFieldText、FormFieldNumber、FormFieldPassword 提供共用的事件处理逻辑。
 *
 * @template TValue - 输入值的类型（string、number | ""等）
 * @template TExtraState - 额外状态的类型（如 Password 的 showPassword，Number 的 min/max）
 *
 * @example
 * ```tsx
 * const baseActions = useFormFieldBaseActions({
 *   value,
 *   onChange,
 *   disabled,
 *   readOnly,
 *   onMouseEnter,
 *   onMouseLeave,
 *   onMouseDown,
 *   onMouseUp,
 *   initialValue: "",
 *   transformInputValue: (event) => event.target.value,
 * });
 * ```
 */
export declare function useFormFieldBaseActions<TValue>({ value, onChange, disabled, readOnly, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, initialValue, transformInputValue, }: UseFormFieldBaseActionsParams<TValue> & {
    /** 初始值 */
    initialValue: TValue;
    /** 输入值转换函数 */
    transformInputValue: (event: React.ChangeEvent<HTMLInputElement>) => TValue;
}): {
    inputValue: TValue;
    setInputValue: React.Dispatch<React.SetStateAction<TValue>>;
    isFocused: boolean;
    isHovered: boolean;
    isInteractionDisabled: boolean | undefined;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus: () => void;
    onBlur: () => void;
    WrapperElementEvents: {
        onMouseEnter: React.MouseEventHandler<HTMLDivElement>;
        onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
        onMouseDown: React.MouseEventHandler<HTMLDivElement>;
        onMouseUp: React.MouseEventHandler<HTMLDivElement>;
    };
};
//# sourceMappingURL=useFormFieldBaseActions.d.ts.map