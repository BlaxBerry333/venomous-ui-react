"use client";

import React from "react";

import clsx from "clsx";

import { Icon } from "@/components/Icon";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";

import { useTableCellStyles } from "./TableCell.hooks";
import {
  TABLE_CELL_ALIGN_MAP,
  TABLE_CELL_ELEMENT_MAP,
  TABLE_CELL_SORT_ORDER_MAP,
  type TableCellProps,
  type TableCellRef,
} from "./TableCell.types";

const TableCell = React.memo(
  React.forwardRef<TableCellRef, TableCellProps>(
    (
      {
        className,
        style,
        as: propAs,
        align: propAlign,
        width,
        bordered: propBordered,
        sortable: propSortable,
        sorted: propSorted,
        sortOrder,
        onSortChange,
        children,
        ...props
      },
      ref,
    ) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<TableCellProps>({
        displayName: COMPONENT_DISPLAY_NAMES.TableCell,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const __as = propAs ?? customComponentProps.as ?? TABLE_CELL_ELEMENT_MAP.TD;
      const align = propAlign ?? customComponentProps.align ?? TABLE_CELL_ALIGN_MAP.LEFT;
      const bordered = propBordered ?? customComponentProps.bordered ?? false;
      const sortable = propSortable ?? customComponentProps.sortable ?? false;
      const sorted = propSorted ?? customComponentProps.sorted ?? false;

      const { tableCellStyle } = useTableCellStyles({
        as: __as,
        align,
        width,
        bordered,
        sortable,
        sorted,
      });

      const Tag = __as;

      const renderSortIcon = React.useCallback(() => {
        if (__as !== TABLE_CELL_ELEMENT_MAP.TH || !sortable) return null;

        let icon: string = "solar:sort-vertical-linear";

        if (sorted && sortOrder === TABLE_CELL_SORT_ORDER_MAP.ASC) {
          icon = "solar:alt-arrow-up-linear";
        } else if (sorted && sortOrder === TABLE_CELL_SORT_ORDER_MAP.DESC) {
          icon = "solar:alt-arrow-down-linear";
        }

        return (
          <Icon
            icon={icon}
            style={{
              marginLeft: 8,
              verticalAlign: "middle",
              opacity: sorted ? 1 : 0.5,
            }}
          />
        );
      }, [__as, sortable, sorted, sortOrder]);

      return (
        <Tag
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.TableCell, className)}
          style={{ ...tableCellStyle, ...style }}
          onClick={sortable && __as === TABLE_CELL_ELEMENT_MAP.TH ? onSortChange : undefined}
          {...props}
        >
          <span style={{ display: "inline-flex", alignItems: "center" }}>
            {children}
            {renderSortIcon()}
          </span>
        </Tag>
      );
    },
  ),
);

TableCell.displayName = COMPONENT_DISPLAY_NAMES.TableCell;
export default TableCell;
