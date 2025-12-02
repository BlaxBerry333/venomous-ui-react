"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";

import TableBody from "./TableBody.component";
import TableCell from "./TableCell.component";
import { TABLE_CELL_ELEMENT_MAP } from "./TableCell.types";
import { useTableContainerStyles, useTableSorting } from "./TableContainer.hooks";
import type { TableContainerProps } from "./TableContainer.types";
import TableHead from "./TableHead.component";
import TableRow from "./TableRow.component";

function TableContainer<T>({
  className,
  style,
  columns,
  rows,
  rowKey,
  bordered: propBordered,
  TableHeadStyle,
  TableBodyStyle,
  TableHeadRowStyle,
  TableBodyRowStyle,
  TableHeadCellStyle,
  TableBodyCellStyle,
  ...props
}: TableContainerProps<T>) {
  // ========== 获取 customComponentProps ==========
  const customComponentProps = useCustomComponentProps<TableContainerProps<T>>({
    displayName: COMPONENT_DISPLAY_NAMES.Table,
  });

  // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
  const bordered = propBordered ?? customComponentProps.bordered ?? false;

  const { tableWrapperStyle, tableStyle } = useTableContainerStyles();

  const { sortedRows, currentSortColumn, currentSortOrder, handleSortChange } = useTableSorting({
    rows,
    columns,
  });

  const getRowKey = React.useCallback(
    (row: T, index: number): string => {
      if (rowKey === undefined) return String(index);
      if (typeof rowKey === "function") return String(rowKey(row, index));
      return String(row[rowKey]);
    },
    [rowKey],
  );

  return (
    <div className={clsx(COMPONENT_CLASSNAME_NAMES.Table, className)} style={{ ...tableWrapperStyle, ...style }}>
      <table style={{ ...tableStyle }} {...props}>
        {/* ========== Table Head ========== */}
        <TableHead style={{ ...TableHeadStyle }}>
          <TableRow style={{ ...TableHeadRowStyle }}>
            {columns.map((column) => (
              <TableCell
                key={String(column.key)}
                as={TABLE_CELL_ELEMENT_MAP.TH}
                align={column.align}
                width={column.width}
                bordered={bordered}
                sortable={column.sortable}
                sorted={currentSortColumn === column.key}
                sortOrder={currentSortColumn === column.key ? currentSortOrder : undefined}
                onSortChange={() => handleSortChange(column.key)}
                style={{ ...TableHeadCellStyle, ...column.TableHeadCellStyle }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* ========== Table Body ========== */}
        <TableBody style={{ ...TableBodyStyle }}>
          {sortedRows.map((row, rowIndex) => (
            <TableRow key={getRowKey(row, rowIndex)} style={{ ...TableBodyRowStyle }}>
              {columns.map((column) => (
                <TableCell
                  key={String(column.key)}
                  as={TABLE_CELL_ELEMENT_MAP.TD}
                  align={column.align}
                  width={column.width}
                  bordered={bordered}
                  style={{ ...TableBodyCellStyle, ...column.TableBodyCellStyle }}
                >
                  {column.renderCell ? column.renderCell(row, rowIndex) : String(row[column.key as keyof T] ?? "")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </table>
    </div>
  );
}

const MemoizedTable = React.memo(TableContainer) as typeof TableContainer;
(MemoizedTable as React.FC).displayName = COMPONENT_DISPLAY_NAMES.Table;
export default MemoizedTable;
