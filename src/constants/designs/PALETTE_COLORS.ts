export const PALETTE_COLORS = {
  // 蝰蛇
  VIPER: {
    1: "#8B0000", // primary color: 暗色血红
    2: "#5C0000", // secondary color: 更深的暗红色
    3: "#CD7E7E", // tertiary color: 中浅血红色
  },

  // 曼巴蛇
  MAMBA: {
    1: "#4CAF50", // primary color: 毒蛇绿
    2: "#2E7D32", // secondary color: 更深的丛林绿
    3: "#B9DDAA", // tertiary color: 中浅背景薄荷绿
  },

  // 毒箭蛙
  DART_FROG: {
    1: "#0091FF", // primary color: 警示蓝
    2: "#004F8A", // secondary color: 更深的蓝
    3: "#8DB8D8", // tertiary color: 中浅背景蓝
  },

  // 乌头
  WOLFSBANE: {
    1: "#512DA8", // primary color: 深蓝紫
    2: "#311C6B", // secondary color: 蓝紫
    3: "#C9BFE3", // tertiary color: 中浅背景紫
  },

  // 夹竹桃
  OLEANDER: {
    1: "#CE347F", // primary color: 花瓣粉
    2: "#88194F", // secondary color: 梅子红
    3: "#E6BAD2", // tertiary color: 中浅背景粉
  },
} as const;

export type TPaletteColors = {
  1: string; // primary
  2: string; // secondary
  3: string; // tertiary
};
