import { render } from "@testing-library/react";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import { Theme } from "@/components/Theme";

import TableBody from "./TableBody.component";
import type { TableBodyRef } from "./TableBody.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("TableBody", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders children correctly", () => {
    const { container } = render(
      <table>
        <TableBody>
          <tr>
            <td>Cell</td>
          </tr>
        </TableBody>
      </table>,
      { wrapper },
    );

    const tbody = container.querySelector<TableBodyRef>(`tbody[class*='${COMPONENT_CLASSNAME_NAMES.TableBody}']`);
    expect(tbody).toBeDefined();
    expect(tbody?.textContent).toContain("Cell");
  });

  it("renders as tbody element", () => {
    const { container } = render(
      <table>
        <TableBody>
          <tr>
            <td>Content</td>
          </tr>
        </TableBody>
      </table>,
      { wrapper },
    );

    const tbody = container.querySelector<TableBodyRef>(`tbody[class*='${COMPONENT_CLASSNAME_NAMES.TableBody}']`);
    expect(tbody).toBeDefined();
    expect(tbody?.tagName).toBe("TBODY");
  });

  it("applies custom className", () => {
    const { container } = render(
      <table>
        <TableBody className="custom-class">
          <tr>
            <td>Content</td>
          </tr>
        </TableBody>
      </table>,
      { wrapper },
    );

    const tbody = container.querySelector<TableBodyRef>(`tbody[class*='${COMPONENT_CLASSNAME_NAMES.TableBody}']`);
    expect(tbody?.className).toContain("custom-class");
    expect(tbody?.className).toContain(COMPONENT_CLASSNAME_NAMES.TableBody);
  });

  it("applies custom styles", () => {
    const { container } = render(
      <table>
        <TableBody style={{ backgroundColor: "rgb(240, 240, 240)" }}>
          <tr>
            <td>Content</td>
          </tr>
        </TableBody>
      </table>,
      { wrapper },
    );

    const tbody = container.querySelector<TableBodyRef>(`tbody[class*='${COMPONENT_CLASSNAME_NAMES.TableBody}']`);
    expect(tbody?.style.backgroundColor).toBe("rgb(240, 240, 240)");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<TableBodyRef>();

    render(
      <table>
        <TableBody ref={ref}>
          <tr>
            <td>Content</td>
          </tr>
        </TableBody>
      </table>,
      { wrapper },
    );

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("TBODY");
  });

  it("passes through HTML attributes", () => {
    const { container } = render(
      <table>
        <TableBody data-testid="test-tbody" aria-label="Test table body">
          <tr>
            <td>Content</td>
          </tr>
        </TableBody>
      </table>,
      { wrapper },
    );

    const tbody = container.querySelector('[data-testid="test-tbody"]');
    expect(tbody).toBeDefined();
    expect(tbody?.getAttribute("aria-label")).toBe("Test table body");
  });

  it("displays correct displayName", () => {
    expect(TableBody.displayName).toBe(COMPONENT_DISPLAY_NAMES.TableBody);
  });

  it("applies base styles correctly", () => {
    const { container } = render(
      <table>
        <TableBody>
          <tr>
            <td>Content</td>
          </tr>
        </TableBody>
      </table>,
      { wrapper },
    );

    const tbody = container.querySelector<TableBodyRef>(`tbody[class*='${COMPONENT_CLASSNAME_NAMES.TableBody}']`);
    expect(tbody?.style.boxSizing).toBe("border-box");
  });

  it("merges custom style with component styles", () => {
    const { container } = render(
      <table>
        <TableBody style={{ fontSize: "14px" }}>
          <tr>
            <td>Content</td>
          </tr>
        </TableBody>
      </table>,
      { wrapper },
    );

    const tbody = container.querySelector<TableBodyRef>(`tbody[class*='${COMPONENT_CLASSNAME_NAMES.TableBody}']`);
    expect(tbody?.style.fontSize).toBe("14px");
    expect(tbody?.style.boxSizing).toBe("border-box");
  });

  it("supports custom styles via Theme.Provider", () => {
    const customComponentProps = {
      "Table.Body": {
        style: {
          backgroundColor: "rgb(255, 255, 240)",
        },
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customComponentProps={customComponentProps}>{children}</Theme.Provider>
    );

    const { container } = render(
      <table>
        <TableBody>
          <tr>
            <td>Content</td>
          </tr>
        </TableBody>
      </table>,
      { wrapper: customWrapper },
    );

    const tbody = container.querySelector<TableBodyRef>(`tbody[class*='${COMPONENT_CLASSNAME_NAMES.TableBody}']`);
    expect(tbody?.style.backgroundColor).toBe("rgb(255, 255, 240)");
  });
});
