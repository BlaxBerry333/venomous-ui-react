import { render } from "@testing-library/react";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import { Theme } from "@/components/Theme";

import TableRow from "./TableRow.component";
import type { TableRowRef } from "./TableRow.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("TableRow", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders children correctly", () => {
    const { container } = render(
      <table>
        <tbody>
          <TableRow>
            <td>Cell 1</td>
            <td>Cell 2</td>
          </TableRow>
        </tbody>
      </table>,
      { wrapper },
    );

    const tr = container.querySelector<TableRowRef>(`tr[class*='${COMPONENT_CLASSNAME_NAMES.TableRow}']`);
    expect(tr).toBeDefined();
    expect(tr?.textContent).toContain("Cell 1");
    expect(tr?.textContent).toContain("Cell 2");
  });

  it("renders as tr element", () => {
    const { container } = render(
      <table>
        <tbody>
          <TableRow>
            <td>Content</td>
          </TableRow>
        </tbody>
      </table>,
      { wrapper },
    );

    const tr = container.querySelector<TableRowRef>(`tr[class*='${COMPONENT_CLASSNAME_NAMES.TableRow}']`);
    expect(tr).toBeDefined();
    expect(tr?.tagName).toBe("TR");
  });

  it("applies custom className", () => {
    const { container } = render(
      <table>
        <tbody>
          <TableRow className="custom-class">
            <td>Content</td>
          </TableRow>
        </tbody>
      </table>,
      { wrapper },
    );

    const tr = container.querySelector<TableRowRef>(`tr[class*='${COMPONENT_CLASSNAME_NAMES.TableRow}']`);
    expect(tr?.className).toContain("custom-class");
    expect(tr?.className).toContain(COMPONENT_CLASSNAME_NAMES.TableRow);
  });

  it("applies custom styles", () => {
    const { container } = render(
      <table>
        <tbody>
          <TableRow style={{ backgroundColor: "rgb(240, 240, 240)" }}>
            <td>Content</td>
          </TableRow>
        </tbody>
      </table>,
      { wrapper },
    );

    const tr = container.querySelector<TableRowRef>(`tr[class*='${COMPONENT_CLASSNAME_NAMES.TableRow}']`);
    expect(tr?.style.backgroundColor).toBe("rgb(240, 240, 240)");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<TableRowRef>();

    render(
      <table>
        <tbody>
          <TableRow ref={ref}>
            <td>Content</td>
          </TableRow>
        </tbody>
      </table>,
      { wrapper },
    );

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("TR");
  });

  it("passes through HTML attributes", () => {
    const { container } = render(
      <table>
        <tbody>
          <TableRow data-testid="test-tr" aria-label="Test table row">
            <td>Content</td>
          </TableRow>
        </tbody>
      </table>,
      { wrapper },
    );

    const tr = container.querySelector('[data-testid="test-tr"]');
    expect(tr).toBeDefined();
    expect(tr?.getAttribute("aria-label")).toBe("Test table row");
  });

  it("displays correct displayName", () => {
    expect(TableRow.displayName).toBe(COMPONENT_DISPLAY_NAMES.TableRow);
  });

  it("applies base styles correctly", () => {
    const { container } = render(
      <table>
        <tbody>
          <TableRow>
            <td>Content</td>
          </TableRow>
        </tbody>
      </table>,
      { wrapper },
    );

    const tr = container.querySelector<TableRowRef>(`tr[class*='${COMPONENT_CLASSNAME_NAMES.TableRow}']`);
    expect(tr?.style.boxSizing).toBe("border-box");
  });

  it("merges custom style with component styles", () => {
    const { container } = render(
      <table>
        <tbody>
          <TableRow style={{ height: "50px" }}>
            <td>Content</td>
          </TableRow>
        </tbody>
      </table>,
      { wrapper },
    );

    const tr = container.querySelector<TableRowRef>(`tr[class*='${COMPONENT_CLASSNAME_NAMES.TableRow}']`);
    expect(tr?.style.height).toBe("50px");
    expect(tr?.style.boxSizing).toBe("border-box");
  });

  it("supports custom styles via Theme.Provider", () => {
    const customComponentProps = {
      "Table.Row": {
        style: {
          borderBottom: "1px solid rgb(200, 200, 200)",
        },
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customComponentProps={customComponentProps}>{children}</Theme.Provider>
    );

    const { container } = render(
      <table>
        <tbody>
          <TableRow>
            <td>Content</td>
          </TableRow>
        </tbody>
      </table>,
      { wrapper: customWrapper },
    );

    const tr = container.querySelector<TableRowRef>(`tr[class*='${COMPONENT_CLASSNAME_NAMES.TableRow}']`);
    expect(tr?.style.borderBottom).toBe("1px solid rgb(200, 200, 200)");
  });
});
