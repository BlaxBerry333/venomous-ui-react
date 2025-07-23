export enum ThemeColor {
  ScarletViper = "#C62828", // 猩红蝮蛇
  JadeAnaconda = "#26A69A", // 翡翠森蚺
  AmethystRattlesnake = "#7E57C2", // 紫晶响尾蛇
  AmberCobra = "#FFA000", // 琥珀眼镜蛇
  ObsidianBothrops = "#546E7A", // 石墨矛头蝰
}

export const Colors = {
  disabled: "#e4edf4", // 禁用
  success: "#4caf50", // 成功
  error: "#f44336", // 错误
  warning: "#ff9800", // 警告
  info: "#2196f3", // 信息
} as const;

export const BackgroundColors = {
  darkMode: "#181818",
  lightMode: "#ffffff",
} as const;

export const BorderColors = {
  darkMode: "rgba(255, 255, 255, 0.1)",
  lightMode: "rgba(0, 0, 0, 0.1)",
} as const;

export const ShadowColors = {
  darkMode: `
    rgba(255, 255, 255, 0.2) 0px 3px 5px -1px, 
    rgba(255, 255, 255, 0.14) 0px 6px 10px 0px, 
    rgba(255, 255, 255, 0.12) 0px 1px 8px 0px
    `,
  lightMode: `
    rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, 
    rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, 
    rgba(0, 0, 0, 0.12) 0px 1px 8px 0px
    `,
} as const;

export const TextColors = {
  darkMode: "#cccccc",
  lightMode: "#212121",
  grey: "#666666",
  white: "#ffffff",
  link: "#1976d2",
  disabled: Colors.disabled,
  success: Colors.success,
  error: Colors.error,
  warning: Colors.warning,
} as const;

export const IconColors = {
  auto: "auto",
  white: "#ffffff",
  success: Colors.success,
  error: Colors.error,
  warning: Colors.warning,
  info: Colors.info,
} as const;

export const ButtonColors = {
  auto: "auto",
  disabled: Colors.disabled,
  error: Colors.error,
} as const;
