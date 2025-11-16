import { render } from "@testing-library/react";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import { Theme } from "@/components/Theme";

import TableHead from "./TableHead.component";
import type { TableHeadRef } from "./TableHead.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("TableHead", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders children correctly", () => {
    const { container } = render(
      <table>
        <TableHead>
          <tr>
            <th>Header</th>
          </tr>
        </TableHead>
      </table>,
      { wrapper },
    );

    const thead = container.querySelector<TableHeadRef>(`thead[class*='${COMPONENT_CLASSNAME_NAMES.TableHead}']`);
    expect(thead).toBeDefined();
    expect(thead?.textContent).toContain("Header");
  });

  it("renders as thead element", () => {
    const { container } = render(
      <table>
        <TableHead>
          <tr>
            <th>Content</th>
          </tr>
        </TableHead>
      </table>,
      { wrapper },
    );

    const thead = container.querySelector<TableHeadRef>(`thead[class*='${COMPONENT_CLASSNAME_NAMES.TableHead}']`);
    expect(thead).toBeDefined();
    expect(thead?.tagName).toBe("THEAD");
  });

  it("applies custom className", () => {
    const { container } = render(
      <table>
        <TableHead className="custom-class">
          <tr>
            <th>Content</th>
          </tr>
        </TableHead>
      </table>,
      { wrapper },
    );

    const thead = container.querySelector<TableHeadRef>(`thead[class*='${COMPONENT_CLASSNAME_NAMES.TableHead}']`);
    expect(thead?.className).toContain("custom-class");
    expect(thead?.className).toContain(COMPONENT_CLASSNAME_NAMES.TableHead);
  });

  it("applies custom styles", () => {
    const { container } = render(
      <table>
        <TableHead style={{ backgroundColor: "rgb(240, 240, 240)" }}>
          <tr>
            <th>Content</th>
          </tr>
        </TableHead>
      </table>,
      { wrapper },
    );

    const thead = container.querySelector<TableHeadRef>(`thead[class*='${COMPONENT_CLASSNAME_NAMES.TableHead}']`);
    expect(thead?.style.backgroundColor).toBe("rgb(240, 240, 240)");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<TableHeadRef>();

    render(
      <table>
        <TableHead ref={ref}>
          <tr>
            <th>Content</th>
          </tr>
        </TableHead>
      </table>,
      { wrapper },
    );

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("THEAD");
  });

  it("passes through HTML attributes", () => {
    const { container } = render(
      <table>
        <TableHead data-testid="test-thead" aria-label="Test table head">
          <tr>
            <th>Content</th>
          </tr>
        </TableHead>
      </table>,
      { wrapper },
    );

    const thead = container.querySelector('[data-testid="test-thead"]');
    expect(thead).toBeDefined();
    expect(thead?.getAttribute("aria-label")).toBe("Test table head");
  });

  it("displays correct displayName", () => {
    expect(TableHead.displayName).toBe(COMPONENT_DISPLAY_NAMES.TableHead);
  });

  it("applies base styles correctly", () => {
    const { container } = render(
      <table>
        <TableHead>
          <tr>
            <th>Content</th>
          </tr>
        </TableHead>
      </table>,
      { wrapper },
    );

    const thead = container.querySelector<TableHeadRef>(`thead[class*='${COMPONENT_CLASSNAME_NAMES.TableHead}']`);
    expect(thead?.style.boxSizing).toBe("border-box");
  });

  it("merges custom style with component styles", () => {
    const { container } = render(
      <table>
        <TableHead style={{ fontWeight: "bold" }}>
          <tr>
            <th>Content</th>
          </tr>
        </TableHead>
      </table>,
      { wrapper },
    );

    const thead = container.querySelector<TableHeadRef>(`thead[class*='${COMPONENT_CLASSNAME_NAMES.TableHead}']`);
    expect(thead?.style.fontWeight).toBe("bold");
    expect(thead?.style.boxSizing).toBe("border-box");
  });

  it("supports custom styles via Theme.Provider", () => {
    const customStyles = {
      "Table.Head": {
        backgroundColor: "rgb(255, 240, 240)",
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customStyles={customStyles}>{children}</Theme.Provider>
    );

    const { container } = render(
      <table>
        <TableHead>
          <tr>
            <th>Content</th>
          </tr>
        </TableHead>
      </table>,
      { wrapper: customWrapper },
    );

    const thead = container.querySelector<TableHeadRef>(`thead[class*='${COMPONENT_CLASSNAME_NAMES.TableHead}']`);
    expect(thead?.style.backgroundColor).toBe("rgb(255, 240, 240)");
  });
});
