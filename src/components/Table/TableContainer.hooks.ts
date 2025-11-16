"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";

import {
  TABLE_CELL_SORT_ORDER_MAP,
  type TABLE_CELL_SORT_ORDER_MAP as TABLE_CELL_SORT_ORDER_MAP_TYPE,
} from "./TableCell.types";
import type { TableContainerProps } from "./TableContainer.types";

export function useTableSorting<T>({ rows, columns }: Pick<TableContainerProps<T>, "rows" | "columns">) {
  // Internal state
  const [currentSortColumn, setCurrentSortColumn] = React.useState<keyof T | string | undefined>(undefined);
  const [currentSortOrder, setCurrentSortOrder] = React.useState<
    (typeof TABLE_CELL_SORT_ORDER_MAP_TYPE)[keyof typeof TABLE_CELL_SORT_ORDER_MAP_TYPE]
  >(TABLE_CELL_SORT_ORDER_MAP.ASC);

  // Default sort function
  const defaultSortFunction = React.useCallback(
    (
      a: T,
      b: T,
      key: keyof T | string,
      order: (typeof TABLE_CELL_SORT_ORDER_MAP_TYPE)[keyof typeof TABLE_CELL_SORT_ORDER_MAP_TYPE],
    ): number => {
      const aValue = a[key as keyof T];
      const bValue = b[key as keyof T];

      // null/undefined handling
      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return 1;
      if (bValue == null) return -1;

      // Number comparison
      if (typeof aValue === "number" && typeof bValue === "number") {
        return order === TABLE_CELL_SORT_ORDER_MAP.ASC ? aValue - bValue : bValue - aValue;
      }

      // String comparison
      const aStr = String(aValue);
      const bStr = String(bValue);
      const result = aStr.localeCompare(bStr);
      return order === TABLE_CELL_SORT_ORDER_MAP.ASC ? result : -result;
    },
    [],
  );

  // Sort rows
  const sortedRows = React.useMemo(() => {
    if (!currentSortColumn) return rows;

    const column = columns.find((col) => col.key === currentSortColumn);
    if (!column || !column.sortable) return rows;

    const sortedData = [...rows];
    sortedData.sort((a, b) => {
      if (column.onSort) {
        return column.onSort(a, b, currentSortOrder);
      }
      return defaultSortFunction(a, b, currentSortColumn, currentSortOrder);
    });

    return sortedData;
  }, [rows, columns, currentSortColumn, currentSortOrder, defaultSortFunction]);

  // Handle sort change
  const handleSortChange = React.useCallback(
    (columnKey: keyof T | string) => {
      const column = columns.find((col) => col.key === columnKey);
      if (!column || !column.sortable) return;

      // Toggle sort order: asc -> desc -> unsorted (undefined)
      if (currentSortColumn === columnKey) {
        if (currentSortOrder === TABLE_CELL_SORT_ORDER_MAP.ASC) {
          setCurrentSortOrder(TABLE_CELL_SORT_ORDER_MAP.DESC);
        } else {
          // Reset to unsorted
          setCurrentSortColumn(undefined);
          setCurrentSortOrder(TABLE_CELL_SORT_ORDER_MAP.ASC);
        }
      } else {
        setCurrentSortColumn(columnKey);
        setCurrentSortOrder(TABLE_CELL_SORT_ORDER_MAP.ASC);
      }
    },
    [columns, currentSortColumn, currentSortOrder],
  );

  return React.useMemo(
    () => ({
      sortedRows,
      currentSortColumn,
      currentSortOrder,
      handleSortChange,
    }),
    [sortedRows, currentSortColumn, currentSortOrder, handleSortChange],
  );
}

export function useTableContainerStyles() {
  const { BorderColors } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.Table });

  const DynamicBorderedStyles = React.useMemo<React.CSSProperties>(() => {
    // 始终使用 separate，避免边框合并导致与 wrapper 的 border 重叠
    return {
      borderCollapse: "separate",
      borderSpacing: 0,
    };
  }, []);

  const tableWrapperStyle = React.useMemo<React.CSSProperties>(
    () => ({
      width: "100%",
      overflow: "auto",
      // wrapper 始终有边框，确保滚动时容器边缘有边框
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: BorderColors[1],
    }),
    [BorderColors],
  );

  const tableStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",

      // -- default styles --
      width: "100%",
      minWidth: "100%",
      ...DynamicBorderedStyles,

      // -- custom styles --
      ...customStyle,
    }),
    [DynamicBorderedStyles, customStyle],
  );

  return {
    tableWrapperStyle,
    tableStyle,
    __: {
      DynamicBorderedStyles,
    },
  };
}
