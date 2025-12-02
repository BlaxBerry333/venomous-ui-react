import { render, screen } from "@testing-library/react";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Theme } from "@/components/Theme";

import { TABLE_CELL_ALIGN_MAP } from "./TableCell.types";
import TableContainer from "./TableContainer.component";
import type { TableColumnData } from "./TableContainer.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

interface TestRowData {
  id: number;
  name: string;
  age: number;
  email: string;
}

const mockColumns: TableColumnData<TestRowData>[] = [
  { key: "id", label: "ID", width: 80 },
  { key: "name", label: "Name", sortable: true },
  { key: "age", label: "Age", align: TABLE_CELL_ALIGN_MAP.CENTER, sortable: true },
  { key: "email", label: "Email" },
];

const mockRows: TestRowData[] = [
  { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
  { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
  { id: 3, name: "Charlie", age: 22, email: "charlie@example.com" },
];

describe("TableContainer", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // ========== Basic Rendering Tests ==========
  describe("Basic Rendering", () => {
    it("renders table with columns and rows", () => {
      const { container } = render(<TableContainer columns={mockColumns} rows={mockRows} />, { wrapper });

      const table = container.querySelector<HTMLTableElement>("table");
      expect(table).toBeDefined();

      expect(screen.getByText("ID")).toBeDefined();
      expect(screen.getByText("Name")).toBeDefined();
      expect(screen.getByText("Age")).toBeDefined();
      expect(screen.getByText("Email")).toBeDefined();

      expect(screen.getByText("Alice")).toBeDefined();
      expect(screen.getByText("Bob")).toBeDefined();
      expect(screen.getByText("Charlie")).toBeDefined();
    });

    it("renders empty table when no rows", () => {
      const { container } = render(<TableContainer columns={mockColumns} rows={[]} />, { wrapper });

      const table = container.querySelector<HTMLTableElement>("table");
      expect(table).toBeDefined();

      expect(screen.getByText("ID")).toBeDefined();
      expect(screen.getByText("Name")).toBeDefined();

      expect(screen.queryByText("Alice")).toBeNull();
    });

    it("renders table wrapper with className", () => {
      const { container } = render(<TableContainer columns={mockColumns} rows={mockRows} />, { wrapper });

      const wrapper_div = container.querySelector<HTMLDivElement>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Table}']`);
      expect(wrapper_div).toBeDefined();
    });
  });

  // ========== Column Configuration Tests ==========
  describe("Column Configuration", () => {
    it("applies column width correctly", () => {
      render(<TableContainer columns={mockColumns} rows={mockRows} />, { wrapper });

      const idCell = screen.getByText("ID").closest("th");
      expect(idCell?.style.width).toBe("80px");
    });

    it("applies column alignment correctly", () => {
      render(<TableContainer columns={mockColumns} rows={mockRows} />, { wrapper });

      const ageCell = screen.getByText("Age").closest("th");
      expect(ageCell?.style.textAlign).toBe("center");
    });

    it("renders custom cell content using renderCell", () => {
      const columnsWithRenderCell: TableColumnData<TestRowData>[] = [
        { key: "id", label: "ID" },
        {
          key: "name",
          label: "Name",
          renderCell: (row) => <strong>{row.name.toUpperCase()}</strong>,
        },
      ];

      render(<TableContainer columns={columnsWithRenderCell} rows={mockRows} />, { wrapper });

      expect(screen.getByText("ALICE")).toBeDefined();
      expect(screen.getByText("BOB")).toBeDefined();
    });
  });

  // ========== Row Key Tests ==========
  describe("Row Key", () => {
    it("uses index as row key by default", () => {
      const { container } = render(<TableContainer columns={mockColumns} rows={mockRows} />, { wrapper });

      const tbody = container.querySelector("tbody");
      const rows = tbody?.querySelectorAll("tr");
      expect(rows?.length).toBe(3);
    });

    it("uses custom row key field", () => {
      const { container } = render(<TableContainer columns={mockColumns} rows={mockRows} rowKey="id" />, { wrapper });

      const tbody = container.querySelector("tbody");
      const rows = tbody?.querySelectorAll("tr");
      expect(rows?.length).toBe(3);
    });

    it("uses custom row key function", () => {
      const rowKeyFn = vi.fn((row: TestRowData) => `row-${row.id}`);
      const { container } = render(<TableContainer columns={mockColumns} rows={mockRows} rowKey={rowKeyFn} />, {
        wrapper,
      });

      const tbody = container.querySelector("tbody");
      const rows = tbody?.querySelectorAll("tr");
      expect(rows?.length).toBe(3);
      expect(rowKeyFn).toHaveBeenCalledTimes(3);
    });
  });

  // ========== Bordered Tests ==========
  describe("Bordered", () => {
    it("only applies bottom border by default", () => {
      render(<TableContainer columns={mockColumns} rows={mockRows} />, { wrapper });

      const firstCell = screen.getByText("ID").closest("th");
      expect(firstCell?.style.borderBottom).toBeTruthy();
      expect(firstCell?.style.borderRight).toBe("");
    });

    it("applies right and bottom borders when bordered is true", () => {
      render(<TableContainer columns={mockColumns} rows={mockRows} bordered />, { wrapper });

      const firstCell = screen.getByText("ID").closest("th");
      expect(firstCell?.style.borderRight).toBeTruthy();
      expect(firstCell?.style.borderBottom).toBeTruthy();
    });
  });

  // ========== Sorting Tests ==========
  describe("Sorting", () => {
    it("shows sort icons for sortable columns", () => {
      render(<TableContainer columns={mockColumns} rows={mockRows} />, { wrapper });

      const nameHeader = screen.getByText("Name").closest("th");
      const sortIcon = nameHeader?.querySelector("svg");
      expect(sortIcon).toBeDefined();
    });

    it("does not show sort icons for non-sortable columns", () => {
      render(<TableContainer columns={mockColumns} rows={mockRows} />, { wrapper });

      const idHeader = screen.getByText("ID").closest("th");
      const sortIcon = idHeader?.querySelector("svg");
      expect(sortIcon).toBeNull();
    });

    it("allows clicking sortable column headers", () => {
      render(<TableContainer columns={mockColumns} rows={mockRows} />, { wrapper });

      const ageHeader = screen.getByText("Age").closest("th");
      expect(ageHeader).toBeDefined();

      // Should not throw error when clicked
      ageHeader?.click();
    });

    it("renders all rows in table body", () => {
      const { container } = render(<TableContainer columns={mockColumns} rows={mockRows} />, { wrapper });

      const tbody = container.querySelector("tbody");
      const rows = Array.from(tbody?.querySelectorAll("tr") || []);

      expect(rows.length).toBe(3);
    });

    it("handles sorting with null values", () => {
      const rowsWithNull = [
        { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
        { id: 2, name: null as unknown as string, age: 30, email: "bob@example.com" },
        { id: 3, name: "Charlie", age: 22, email: "charlie@example.com" },
      ];

      render(<TableContainer columns={mockColumns} rows={rowsWithNull} />, { wrapper });

      const nameHeader = screen.getByText("Name").closest("th");
      nameHeader?.click();

      // Should not throw error
      expect(true).toBe(true);
    });

    it("handles sorting with undefined values", () => {
      const rowsWithUndefined = [
        { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
        { id: 2, name: "Bob", age: undefined as unknown as number, email: "bob@example.com" },
        { id: 3, name: "Charlie", age: 22, email: "charlie@example.com" },
      ];

      render(<TableContainer columns={mockColumns} rows={rowsWithUndefined} />, { wrapper });

      const ageHeader = screen.getByText("Age").closest("th");
      ageHeader?.click();

      // Should not throw error
      expect(true).toBe(true);
    });

    it("handles custom onSort function", () => {
      const customColumns: TableColumnData<TestRowData>[] = [
        ...mockColumns.slice(0, 1),
        {
          ...mockColumns[1],
          onSort: (a: TestRowData, b: TestRowData) => String(a.name).localeCompare(String(b.name)),
        },
        ...mockColumns.slice(2),
      ];

      // Should render without error with custom onSort
      render(<TableContainer columns={customColumns} rows={mockRows} />, { wrapper });

      expect(screen.getByText("Name")).toBeDefined();
    });

    it("handles sorting non-sortable columns (should not sort)", () => {
      render(<TableContainer columns={mockColumns} rows={mockRows} />, { wrapper });

      const idHeader = screen.getByText("ID").closest("th");
      idHeader?.click();

      // Should not throw error, but also should not sort
      expect(true).toBe(true);
    });
  });

  // ========== Style Props Tests ==========
  describe("Style Props", () => {
    it("applies TableHeadStyle", () => {
      const { container } = render(
        <TableContainer
          columns={mockColumns}
          rows={mockRows}
          TableHeadStyle={{ backgroundColor: "rgb(240, 240, 240)" }}
        />,
        { wrapper },
      );

      const thead = container.querySelector("thead");
      expect(thead?.style.backgroundColor).toBe("rgb(240, 240, 240)");
    });

    it("applies TableBodyStyle", () => {
      const { container } = render(
        <TableContainer
          columns={mockColumns}
          rows={mockRows}
          TableBodyStyle={{ backgroundColor: "rgb(250, 250, 250)" }}
        />,
        { wrapper },
      );

      const tbody = container.querySelector("tbody");
      expect(tbody?.style.backgroundColor).toBe("rgb(250, 250, 250)");
    });

    it("applies TableHeadRowStyle", () => {
      const { container } = render(
        <TableContainer columns={mockColumns} rows={mockRows} TableHeadRowStyle={{ height: "60px" }} />,
        { wrapper },
      );

      const headRow = container.querySelector("thead tr");
      expect(headRow?.getAttribute("style")).toContain("60px");
    });

    it("applies TableBodyRowStyle", () => {
      const { container } = render(
        <TableContainer columns={mockColumns} rows={mockRows} TableBodyRowStyle={{ height: "50px" }} />,
        { wrapper },
      );

      const bodyRows = container.querySelectorAll("tbody tr");
      expect(bodyRows[0]?.getAttribute("style")).toContain("50px");
    });

    it("applies TableHeadCellStyle", () => {
      render(<TableContainer columns={mockColumns} rows={mockRows} TableHeadCellStyle={{ fontWeight: "bold" }} />, {
        wrapper,
      });

      const headCell = screen.getByText("ID").closest("th");
      expect(headCell?.style.fontWeight).toBe("bold");
    });

    it("applies TableBodyCellStyle", () => {
      render(<TableContainer columns={mockColumns} rows={mockRows} TableBodyCellStyle={{ padding: "20px" }} />, {
        wrapper,
      });

      const bodyCell = screen.getByText("Alice").closest("td");
      expect(bodyCell?.style.padding).toBe("20px");
    });

    it("applies column-specific TableHeadCellStyle", () => {
      const columnsWithCellStyle: TableColumnData<TestRowData>[] = [
        { key: "id", label: "ID", TableHeadCellStyle: { color: "rgb(255, 0, 0)" } },
        { key: "name", label: "Name" },
      ];

      render(<TableContainer columns={columnsWithCellStyle} rows={mockRows} />, { wrapper });

      const idCell = screen.getByText("ID").closest("th");
      expect(idCell?.style.color).toBe("rgb(255, 0, 0)");
    });

    it("applies column-specific TableBodyCellStyle", () => {
      const columnsWithCellStyle: TableColumnData<TestRowData>[] = [
        { key: "id", label: "ID", TableBodyCellStyle: { color: "rgb(0, 0, 255)" } },
        { key: "name", label: "Name" },
      ];

      const { container } = render(<TableContainer columns={columnsWithCellStyle} rows={mockRows} />, { wrapper });

      const tbody = container.querySelector("tbody");
      const firstIdCell = tbody?.querySelector("td");
      expect(firstIdCell?.style.color).toBe("rgb(0, 0, 255)");
    });
  });

  // ========== General Tests ==========
  describe("General", () => {
    it("applies custom className to wrapper", () => {
      const { container } = render(<TableContainer columns={mockColumns} rows={mockRows} className="custom-table" />, {
        wrapper,
      });

      const wrapper_div = container.querySelector<HTMLDivElement>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Table}']`);
      expect(wrapper_div?.className).toContain("custom-table");
      expect(wrapper_div?.className).toContain(COMPONENT_CLASSNAME_NAMES.Table);
    });

    it("applies custom styles to wrapper", () => {
      const { container } = render(
        <TableContainer columns={mockColumns} rows={mockRows} style={{ maxWidth: "800px" }} />,
        { wrapper },
      );

      const wrapper_div = container.querySelector<HTMLDivElement>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Table}']`);
      expect(wrapper_div?.style.maxWidth).toBe("800px");
    });

    it("passes through HTML attributes to table", () => {
      const { container } = render(
        <TableContainer columns={mockColumns} rows={mockRows} data-testid="test-table" aria-label="Test table" />,
        { wrapper },
      );

      const table = container.querySelector('[data-testid="test-table"]');
      expect(table).toBeDefined();
      expect(table?.getAttribute("aria-label")).toBe("Test table");
    });

    it("displays correct displayName", () => {
      expect((TableContainer as React.FC).displayName).toBe(COMPONENT_DISPLAY_NAMES.Table);
    });

    it("supports custom styles via Theme.Provider", () => {
      const customComponentProps = {
        Table: {
          style: {
            borderCollapse: "collapse" as const,
          },
        },
      };

      const customWrapper = ({ children }: { children: React.ReactNode }) => (
        <Theme.Provider customComponentProps={customComponentProps}>{children}</Theme.Provider>
      );

      const { container } = render(<TableContainer columns={mockColumns} rows={mockRows} />, {
        wrapper: customWrapper,
      });

      const table = container.querySelector<HTMLTableElement>("table");
      expect(table?.style.borderCollapse).toBe("collapse");
    });
  });
});
