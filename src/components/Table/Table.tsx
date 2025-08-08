"use client";

import React from "react";

import { BackgroundColors, BorderColors, TextColors } from "@/utils";
import { Theme } from "../Theme";
import type { TableCellProps, TableProps, TableRowProps } from "./index.types";

const defaultRowUnionKey = (_: unknown, index: number): string => String(index);

function Table<T>({
  columns,
  rows,
  rowUnionKey = defaultRowUnionKey,
  style,
  renderRowActions,
  headProps,
  bodyProps,
  headRowProps,
  bodyRowProps,
  headRowCellProps,
  bodyRowCellProps,
  ...props
}: TableProps<T>) {
  return (
    <table
      style={{
        boxSizing: "border-box",
        display: "block",
        borderSpacing: 0,
        overflow: "scroll",
        position: "relative",
        ...style,
      }}
      {...props}
    >
      {/* table head */}
      <thead style={{ position: "sticky", top: 0, zIndex: 1, ...headProps?.style }} {...headProps}>
        <TableRow style={{ ...headRowProps?.style }} {...headRowProps}>
          {columns.map((column) => (
            <TableCell
              key={String(column.key)}
              as="th"
              style={{ ...headRowCellProps?.style }}
              {...headRowCellProps}
              {...column.headerCellProps}
            >
              {column.label}
            </TableCell>
          ))}
          {renderRowActions && <TableCell as="th" style={{ ...bodyRowCellProps?.style }} {...bodyRowCellProps} />}
        </TableRow>
      </thead>

      {/* table body */}
      <tbody style={{ ...bodyProps?.style }} {...bodyProps}>
        {rows.map((row, index) => (
          <TableRow key={String(rowUnionKey(row, index))} style={{ ...bodyRowProps?.style }} {...bodyRowProps}>
            {columns.map((column) => (
              <TableCell key={String(column.key)} as="td" style={{ ...bodyRowCellProps?.style }} {...bodyRowCellProps}>
                {column.renderCell?.(row, index) ?? String(row[column.key] ?? "")}
              </TableCell>
            ))}
            {renderRowActions && (
              <TableCell as="td" style={{ ...bodyRowCellProps?.style }} {...bodyRowCellProps}>
                {renderRowActions(row, index)}
              </TableCell>
            )}
          </TableRow>
        ))}
      </tbody>

      {/* table footer */}
      {/* <tfoot style={{ color: "inherit" }}></tfoot> */}
    </table>
  );
}

const MemoizedTable = React.memo(Table);
MemoizedTable.displayName = "Table";
export default MemoizedTable as typeof Table;

const TableRow = React.memo<TableRowProps>(({ style, ...props }) => {
  const { themeMode } = Theme.useThemeMode();
  return (
    <tr
      style={{
        boxSizing: "border-box",
        color: TextColors[themeMode].primary,
        ...style,
      }}
      {...props}
    />
  );
});

const TableCell = React.memo<TableCellProps>(({ as: Tag = "td", style, ...props }) => {
  const { themeMode } = Theme.useThemeMode();
  return (
    <Tag
      style={{
        boxSizing: "border-box",
        padding: "16px 24px",
        textAlign: "left",
        color: TextColors[themeMode].primary,
        backgroundColor: Tag === "td" ? "transparent" : BackgroundColors[themeMode].secondary,
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderBottomColor: BorderColors[themeMode].quaternary,
        ...style,
      }}
      {...props}
    />
  );
});
