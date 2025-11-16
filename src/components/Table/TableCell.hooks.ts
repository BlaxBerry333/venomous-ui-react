"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";

import { TABLE_CELL_ALIGN_MAP, TABLE_CELL_ELEMENT_MAP, type TableCellProps } from "./TableCell.types";

export function useTableCellStyles({
  as: __as = TABLE_CELL_ELEMENT_MAP.TD,
  align = TABLE_CELL_ALIGN_MAP.LEFT,
  width,
  bordered = false,
  sortable = false,
  sorted = false,
}: Pick<TableCellProps, "as" | "align" | "width" | "bordered" | "sortable" | "sorted">) {
  const { TextColors, BackgroundColors, BorderColors, PaletteColors } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.TableCell });

  const DynamicAsStyles = React.useMemo<React.CSSProperties>(() => {
    if (__as === TABLE_CELL_ELEMENT_MAP.TH) {
      return { fontWeight: "bold", backgroundColor: BackgroundColors[2] };
    }
    return { fontWeight: "normal", backgroundColor: "transparent" };
  }, [__as, BackgroundColors]);

  const DynamicWidthStyles = React.useMemo<React.CSSProperties>(() => {
    if (width !== undefined) {
      const widthValue = typeof width === "number" ? `${width}px` : width;
      return {
        width: widthValue,
        minWidth: widthValue,
      };
    }
    return {};
  }, [width]);

  const DynamicBorderedStyles = React.useMemo<React.CSSProperties>(() => {
    if (bordered) {
      return {
        // bordered=true: 只设置右边框和下边框，形成内部分隔线
        // wrapper 提供外边框（顶、左、右、下）
        // 这样第一行/列由 wrapper 提供边框，其他 cell 提供内部分隔线
        borderRight: `1px solid ${BorderColors[1]}`,
        borderBottom: `1px solid ${BorderColors[1]}`,
      };
    }
    return {
      borderBottom: `1px solid ${BorderColors[1]}`,
    };
  }, [bordered, BorderColors]);

  const DynamicSortableStyles = React.useMemo<React.CSSProperties>(() => {
    if (__as === TABLE_CELL_ELEMENT_MAP.TH && sortable) {
      return {
        cursor: "pointer",
        userSelect: "none",
      };
    }
    return {};
  }, [__as, sortable]);

  const DynamicSortedStyles = React.useMemo<React.CSSProperties>(() => {
    if (__as === TABLE_CELL_ELEMENT_MAP.TH && sorted) {
      return {
        color: PaletteColors[1],
      };
    }
    return {};
  }, [__as, sorted, PaletteColors]);

  const tableCellStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",

      // -- default styles --
      padding: "12px 16px",
      color: TextColors[1],
      textAlign: align,
      ...DynamicAsStyles,
      ...DynamicWidthStyles,
      ...DynamicBorderedStyles,
      ...DynamicSortableStyles,
      ...DynamicSortedStyles,

      // -- custom styles --
      ...customStyle,
    }),
    [
      DynamicAsStyles,
      DynamicWidthStyles,
      DynamicBorderedStyles,
      DynamicSortableStyles,
      DynamicSortedStyles,
      TextColors,
      align,
      customStyle,
    ],
  );

  return {
    tableCellStyle,
    __: {
      DynamicAsStyles,
      DynamicWidthStyles,
      DynamicBorderedStyles,
      DynamicSortableStyles,
      DynamicSortedStyles,
    },
  };
}
