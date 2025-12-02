import { render, screen } from "@testing-library/react";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Theme } from "@/components/Theme";

import TableCell from "./TableCell.component";
import {
  TABLE_CELL_ALIGN_MAP,
  TABLE_CELL_ELEMENT_MAP,
  TABLE_CELL_SORT_ORDER_MAP,
  type TableCellRef,
} from "./TableCell.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("TableCell", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // ========== Element Type Tests ==========
  describe("Element Type", () => {
    it("renders as td by default", () => {
      const { container } = render(
        <table>
          <tbody>
            <tr>
              <TableCell>Content</TableCell>
            </tr>
          </tbody>
        </table>,
        { wrapper },
      );

      const cell = container.querySelector<TableCellRef>(`td[class*='${COMPONENT_CLASSNAME_NAMES.TableCell}']`);
      expect(cell).toBeDefined();
      expect(cell?.tagName).toBe("TD");
    });

    it("renders as th when as='th'", () => {
      const { container } = render(
        <table>
          <thead>
            <tr>
              <TableCell as={TABLE_CELL_ELEMENT_MAP.TH}>Header</TableCell>
            </tr>
          </thead>
        </table>,
        { wrapper },
      );

      const cell = container.querySelector<TableCellRef>(`th[class*='${COMPONENT_CLASSNAME_NAMES.TableCell}']`);
      expect(cell).toBeDefined();
      expect(cell?.tagName).toBe("TH");
    });
  });

  // ========== Content Tests ==========
  describe("Content", () => {
    it("renders children correctly", () => {
      render(
        <table>
          <tbody>
            <tr>
              <TableCell>Cell Content</TableCell>
            </tr>
          </tbody>
        </table>,
        { wrapper },
      );

      expect(screen.getByText("Cell Content")).toBeDefined();
    });
  });

  // ========== Alignment Tests ==========
  describe("Alignment", () => {
    it("applies left alignment by default", () => {
      const { container } = render(
        <table>
          <tbody>
            <tr>
              <TableCell>Content</TableCell>
            </tr>
          </tbody>
        </table>,
        { wrapper },
      );

      const cell = container.querySelector<TableCellRef>(`td[class*='${COMPONENT_CLASSNAME_NAMES.TableCell}']`);
      expect(cell?.style.textAlign).toBe("left");
    });

    it("applies center alignment", () => {
      const { container } = render(
        <table>
          <tbody>
            <tr>
              <TableCell align={TABLE_CELL_ALIGN_MAP.CENTER}>Content</TableCell>
            </tr>
          </tbody>
        </table>,
        { wrapper },
      );

      const cell = container.querySelector<TableCellRef>(`td[class*='${COMPONENT_CLASSNAME_NAMES.TableCell}']`);
      expect(cell?.style.textAlign).toBe("center");
    });

    it("applies right alignment", () => {
      const { container } = render(
        <table>
          <tbody>
            <tr>
              <TableCell align={TABLE_CELL_ALIGN_MAP.RIGHT}>Content</TableCell>
            </tr>
          </tbody>
        </table>,
        { wrapper },
      );

      const cell = container.querySelector<TableCellRef>(`td[class*='${COMPONENT_CLASSNAME_NAMES.TableCell}']`);
      expect(cell?.style.textAlign).toBe("right");
    });
  });

  // ========== Width Tests ==========
  describe("Width", () => {
    it("applies custom width as number", () => {
      const { container } = render(
        <table>
          <tbody>
            <tr>
              <TableCell width={150}>Content</TableCell>
            </tr>
          </tbody>
        </table>,
        { wrapper },
      );

      const cell = container.querySelector<TableCellRef>(`td[class*='${COMPONENT_CLASSNAME_NAMES.TableCell}']`);
      expect(cell?.style.width).toBe("150px");
    });

    it("applies custom width as string", () => {
      const { container } = render(
        <table>
          <tbody>
            <tr>
              <TableCell width="20%">Content</TableCell>
            </tr>
          </tbody>
        </table>,
        { wrapper },
      );

      const cell = container.querySelector<TableCellRef>(`td[class*='${COMPONENT_CLASSNAME_NAMES.TableCell}']`);
      expect(cell?.style.width).toBe("20%");
    });
  });

  // ========== Bordered Tests ==========
  describe("Bordered", () => {
    it("applies borders when bordered is true", () => {
      const { container } = render(
        <table>
          <tbody>
            <tr>
              <TableCell bordered>Content</TableCell>
            </tr>
          </tbody>
        </table>,
        { wrapper },
      );

      const cell = container.querySelector<TableCellRef>(`td[class*='${COMPONENT_CLASSNAME_NAMES.TableCell}']`);
      expect(cell?.style.borderRight).toBeTruthy();
      expect(cell?.style.borderBottom).toBeTruthy();
    });

    it("only applies bottom border when bordered is false", () => {
      const { container } = render(
        <table>
          <tbody>
            <tr>
              <TableCell bordered={false}>Content</TableCell>
            </tr>
          </tbody>
        </table>,
        { wrapper },
      );

      const cell = container.querySelector<TableCellRef>(`td[class*='${COMPONENT_CLASSNAME_NAMES.TableCell}']`);
      expect(cell?.style.borderBottom).toBeTruthy();
      expect(cell?.style.borderRight).toBe("");
    });
  });

  // ========== Sortable Tests ==========
  describe("Sortable (th only)", () => {
    it("does not show sort icon when not sortable", () => {
      const { container } = render(
        <table>
          <thead>
            <tr>
              <TableCell as={TABLE_CELL_ELEMENT_MAP.TH}>Header</TableCell>
            </tr>
          </thead>
        </table>,
        { wrapper },
      );

      const icon = container.querySelector("svg");
      expect(icon).toBeNull();
    });

    it("shows default sort icon when sortable but not sorted", () => {
      const { container } = render(
        <table>
          <thead>
            <tr>
              <TableCell as={TABLE_CELL_ELEMENT_MAP.TH} sortable>
                Header
              </TableCell>
            </tr>
          </thead>
        </table>,
        { wrapper },
      );

      const icon = container.querySelector("svg");
      expect(icon).toBeDefined();
    });

    it("shows ascending arrow when sorted ascending", () => {
      const { container } = render(
        <table>
          <thead>
            <tr>
              <TableCell as={TABLE_CELL_ELEMENT_MAP.TH} sortable sorted sortOrder={TABLE_CELL_SORT_ORDER_MAP.ASC}>
                Header
              </TableCell>
            </tr>
          </thead>
        </table>,
        { wrapper },
      );

      const icon = container.querySelector("svg");
      expect(icon).toBeDefined();
    });

    it("shows descending arrow when sorted descending", () => {
      const { container } = render(
        <table>
          <thead>
            <tr>
              <TableCell as={TABLE_CELL_ELEMENT_MAP.TH} sortable sorted sortOrder={TABLE_CELL_SORT_ORDER_MAP.DESC}>
                Header
              </TableCell>
            </tr>
          </thead>
        </table>,
        { wrapper },
      );

      const icon = container.querySelector("svg");
      expect(icon).toBeDefined();
    });

    it("calls onSortChange when sortable th is clicked", () => {
      const onSortChange = vi.fn();
      const { container } = render(
        <table>
          <thead>
            <tr>
              <TableCell as={TABLE_CELL_ELEMENT_MAP.TH} sortable onSortChange={onSortChange}>
                Header
              </TableCell>
            </tr>
          </thead>
        </table>,
        { wrapper },
      );

      const cell = container.querySelector<TableCellRef>(`th[class*='${COMPONENT_CLASSNAME_NAMES.TableCell}']`);
      cell?.click();

      expect(onSortChange).toHaveBeenCalledTimes(1);
    });

    it("does not call onSortChange when td is clicked even if sortable", () => {
      const onSortChange = vi.fn();
      const { container } = render(
        <table>
          <tbody>
            <tr>
              <TableCell as={TABLE_CELL_ELEMENT_MAP.TD} sortable onSortChange={onSortChange}>
                Content
              </TableCell>
            </tr>
          </tbody>
        </table>,
        { wrapper },
      );

      const cell = container.querySelector<TableCellRef>(`td[class*='${COMPONENT_CLASSNAME_NAMES.TableCell}']`);
      cell?.click();

      expect(onSortChange).not.toHaveBeenCalled();
    });
  });

  // ========== General Tests ==========
  describe("General", () => {
    it("applies custom className", () => {
      const { container } = render(
        <table>
          <tbody>
            <tr>
              <TableCell className="custom-class">Content</TableCell>
            </tr>
          </tbody>
        </table>,
        { wrapper },
      );

      const cell = container.querySelector<TableCellRef>(`td[class*='${COMPONENT_CLASSNAME_NAMES.TableCell}']`);
      expect(cell?.className).toContain("custom-class");
      expect(cell?.className).toContain(COMPONENT_CLASSNAME_NAMES.TableCell);
    });

    it("applies custom styles", () => {
      const { container } = render(
        <table>
          <tbody>
            <tr>
              <TableCell style={{ color: "rgb(255, 0, 0)" }}>Content</TableCell>
            </tr>
          </tbody>
        </table>,
        { wrapper },
      );

      const cell = container.querySelector<TableCellRef>(`td[class*='${COMPONENT_CLASSNAME_NAMES.TableCell}']`);
      expect(cell?.style.color).toBe("rgb(255, 0, 0)");
    });

    it("forwards ref correctly", () => {
      const ref = React.createRef<TableCellRef>();

      render(
        <table>
          <tbody>
            <tr>
              <TableCell ref={ref}>Content</TableCell>
            </tr>
          </tbody>
        </table>,
        { wrapper },
      );

      expect(ref.current).toBeDefined();
      expect(ref.current?.tagName).toBe("TD");
    });

    it("passes through HTML attributes", () => {
      const { container } = render(
        <table>
          <tbody>
            <tr>
              <TableCell data-testid="test-cell" aria-label="Test cell">
                Content
              </TableCell>
            </tr>
          </tbody>
        </table>,
        { wrapper },
      );

      const cell = container.querySelector('[data-testid="test-cell"]');
      expect(cell).toBeDefined();
      expect(cell?.getAttribute("aria-label")).toBe("Test cell");
    });

    it("displays correct displayName", () => {
      expect(TableCell.displayName).toBe(COMPONENT_DISPLAY_NAMES.TableCell);
    });

    it("applies base styles correctly", () => {
      const { container } = render(
        <table>
          <tbody>
            <tr>
              <TableCell>Content</TableCell>
            </tr>
          </tbody>
        </table>,
        { wrapper },
      );

      const cell = container.querySelector<TableCellRef>(`td[class*='${COMPONENT_CLASSNAME_NAMES.TableCell}']`);
      expect(cell?.style.boxSizing).toBe("border-box");
      expect((cell?.style as any)["WebkitTapHighlightColor"]).toBe("transparent");
    });

    it("merges custom style with component styles", () => {
      const { container } = render(
        <table>
          <tbody>
            <tr>
              <TableCell style={{ padding: "20px" }}>Content</TableCell>
            </tr>
          </tbody>
        </table>,
        { wrapper },
      );

      const cell = container.querySelector<TableCellRef>(`td[class*='${COMPONENT_CLASSNAME_NAMES.TableCell}']`);
      expect(cell?.style.padding).toBe("20px");
      expect(cell?.style.boxSizing).toBe("border-box");
    });

    it("supports custom styles via Theme.Provider", () => {
      const customComponentProps = {
        "Table.Cell": {
          style: {
            backgroundColor: "rgb(250, 250, 250)",
          },
        },
      };

      const customWrapper = ({ children }: { children: React.ReactNode }) => (
        <Theme.Provider customComponentProps={customComponentProps}>{children}</Theme.Provider>
      );

      const { container } = render(
        <table>
          <tbody>
            <tr>
              <TableCell>Content</TableCell>
            </tr>
          </tbody>
        </table>,
        { wrapper: customWrapper },
      );

      const cell = container.querySelector<TableCellRef>(`td[class*='${COMPONENT_CLASSNAME_NAMES.TableCell}']`);
      expect(cell?.style.backgroundColor).toBe("rgb(250, 250, 250)");
    });
  });
});
