export interface FormLabelProps extends Omit<React.HTMLAttributes<HTMLLabelElement>, "children"> {
  text: string; // 标签文字
  required?: boolean; // 是否必填
  disabled?: boolean; // 是否禁用
  isError?: boolean; // 是否错误状态
  htmlFor?: string; // 关联的 input id
}

export type FormLabelRef = HTMLLabelElement;
