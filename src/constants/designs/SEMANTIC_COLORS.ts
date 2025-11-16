export const SEMANTIC_COLORS = {
  SUCCESS: "#4caf50",
  ERROR: "#f44336",
  WARNING: "#ff9800",
  INFO: "#2196f3",
} as const;

export type TSemanticColor = keyof typeof SEMANTIC_COLORS;
export type TSemanticColorValue = (typeof SEMANTIC_COLORS)[TSemanticColor];
