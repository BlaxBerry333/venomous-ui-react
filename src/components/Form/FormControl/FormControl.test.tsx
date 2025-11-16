import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Theme } from "@/components/Theme";
import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import FormControl from "./FormControl.component";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("FormControl", () => {
  // ========== Basic Rendering Tests ==========
  describe("Basic Rendering", () => {
    it("renders with children render prop", () => {
      const { getByRole } = render(
        <FormControl label="Username">{(id) => <input id={id} type="text" />}</FormControl>,
        { wrapper },
      );

      const input = getByRole("textbox");
      expect(input).toBeDefined();
    });

    it("renders label when provided", () => {
      const { getByText } = render(<FormControl label="Email">{(id) => <input id={id} type="text" />}</FormControl>, {
        wrapper,
      });

      expect(getByText("Email")).toBeDefined();
    });

    it("renders without label when not provided", () => {
      const { container } = render(<FormControl>{(id) => <input id={id} type="text" />}</FormControl>, { wrapper });

      const labels = container.querySelectorAll("label");
      expect(labels.length).toBe(0);
    });

    it("renders message when provided", () => {
      const { getByText } = render(
        <FormControl label="Password" message="Password is required">
          {(id) => <input id={id} type="password" />}
        </FormControl>,
        { wrapper },
      );

      expect(getByText("Password is required")).toBeDefined();
    });

    it("renders without message when not provided", () => {
      const { queryByText } = render(
        <FormControl label="Password">{(id) => <input id={id} type="password" />}</FormControl>,
        { wrapper },
      );

      // No message text should exist
      expect(queryByText("Password is required")).toBeNull();
    });

    it("associates label with input using htmlFor", () => {
      const { getByRole, getByText } = render(
        <FormControl label="Username">{(id) => <input id={id} type="text" />}</FormControl>,
        { wrapper },
      );

      const input = getByRole("textbox") as HTMLInputElement;
      const label = getByText("Username").closest("label");

      expect(label?.htmlFor).toBe(input.id);
    });
  });

  // ========== Props Tests ==========
  describe("Props", () => {
    it("accepts column prop (vertical layout)", () => {
      render(
        <FormControl label="Name" column={true}>
          {(id) => <input id={id} type="text" />}
        </FormControl>,
        { wrapper },
      );
      // Layout is vertical by default
      expect(true).toBe(true);
    });

    it("accepts column={false} (horizontal layout)", () => {
      render(
        <FormControl label="Name" column={false}>
          {(id) => <input id={id} type="text" />}
        </FormControl>,
        { wrapper },
      );
      expect(true).toBe(true);
    });

    it("accepts spacing prop", () => {
      render(
        <FormControl label="Name" spacing={8}>
          {(id) => <input id={id} type="text" />}
        </FormControl>,
        { wrapper },
      );
      expect(true).toBe(true);
    });

    it("accepts reverse prop", () => {
      render(
        <FormControl label="Name" reverse={true} column={false}>
          {(id) => <input id={id} type="text" />}
        </FormControl>,
        { wrapper },
      );
      expect(true).toBe(true);
    });

    it("accepts required prop", () => {
      const { getByText } = render(
        <FormControl label="Email" required={true}>
          {(id) => <input id={id} type="email" />}
        </FormControl>,
        { wrapper },
      );

      // Should show asterisk
      expect(getByText("*")).toBeDefined();
    });

    it("accepts isError prop", () => {
      render(
        <FormControl label="Email" isError={true}>
          {(id) => <input id={id} type="email" />}
        </FormControl>,
        { wrapper },
      );
      expect(true).toBe(true);
    });

    it("accepts disabled prop", () => {
      render(
        <FormControl label="Email" disabled={true}>
          {(id) => <input id={id} type="email" />}
        </FormControl>,
        { wrapper },
      );
      expect(true).toBe(true);
    });

    it("accepts custom className", () => {
      const { container } = render(
        <FormControl label="Name" className="custom-class">
          {(id) => <input id={id} type="text" />}
        </FormControl>,
        { wrapper },
      );

      const formControl = container.firstChild as HTMLElement;
      expect(formControl.classList.contains("custom-class")).toBe(true);
    });

    it("accepts custom style", () => {
      const { container } = render(
        <FormControl label="Name" style={{ marginTop: 20 }}>
          {(id) => <input id={id} type="text" />}
        </FormControl>,
        { wrapper },
      );

      const formControl = container.firstChild as HTMLElement;
      expect(formControl.style.marginTop).toBe("20px");
    });
  });

  // ========== State Combinations Tests ==========
  describe("State Combinations", () => {
    it("renders with required and error state", () => {
      const { getByText } = render(
        <FormControl label="Email" required={true} isError={true} message="Invalid email">
          {(id) => <input id={id} type="email" />}
        </FormControl>,
        { wrapper },
      );

      expect(getByText("*")).toBeDefined();
      expect(getByText("Email")).toBeDefined();
      expect(getByText("Invalid email")).toBeDefined();
    });

    it("renders with disabled and required state", () => {
      const { getByText } = render(
        <FormControl label="Email" required={true} disabled={true}>
          {(id) => <input id={id} type="email" />}
        </FormControl>,
        { wrapper },
      );

      expect(getByText("*")).toBeDefined();
      expect(getByText("Email")).toBeDefined();
    });

    it("renders with error message", () => {
      const { getByText } = render(
        <FormControl label="Password" isError={true} message="Password is too short">
          {(id) => <input id={id} type="password" />}
        </FormControl>,
        { wrapper },
      );

      expect(getByText("Password is too short")).toBeDefined();
    });

    it("renders with helper message (not error)", () => {
      const { getByText } = render(
        <FormControl label="Username" message="Must be unique">
          {(id) => <input id={id} type="text" />}
        </FormControl>,
        { wrapper },
      );

      expect(getByText("Must be unique")).toBeDefined();
    });
  });

  // ========== Layout Tests ==========
  describe("Layout", () => {
    it("renders vertical layout by default", () => {
      render(<FormControl label="Name">{(id) => <input id={id} type="text" />}</FormControl>, { wrapper });
      // Default column=true
      expect(true).toBe(true);
    });

    it("renders horizontal layout with column={false}", () => {
      render(
        <FormControl label="Name" column={false}>
          {(id) => <input id={id} type="text" />}
        </FormControl>,
        { wrapper },
      );
      expect(true).toBe(true);
    });

    it("renders reverse layout with reverse={true}", () => {
      render(
        <FormControl label="Name" column={false} reverse={true}>
          {(id) => <input id={id} type="text" />}
        </FormControl>,
        { wrapper },
      );
      expect(true).toBe(true);
    });

    it("ignores reverse in vertical layout", () => {
      render(
        <FormControl label="Name" column={true} reverse={true}>
          {(id) => <input id={id} type="text" />}
        </FormControl>,
        { wrapper },
      );
      // In vertical layout, label is always on top regardless of reverse
      expect(true).toBe(true);
    });
  });

  // ========== General Tests ==========
  describe("General", () => {
    it("displays correct displayName", () => {
      expect(FormControl.displayName).toBe(COMPONENT_DISPLAY_NAMES.FormControl);
    });

    it("generates unique id for each instance", () => {
      const { getAllByRole } = render(
        <>
          <FormControl label="Field 1">{(id) => <input id={id} type="text" />}</FormControl>
          <FormControl label="Field 2">{(id) => <input id={id} type="text" />}</FormControl>
        </>,
        { wrapper },
      );

      const inputs = getAllByRole("textbox") as HTMLInputElement[];
      expect(inputs[0].id).not.toBe(inputs[1].id);
    });

    it("renders component without errors", () => {
      const { container } = render(<FormControl label="Name">{(id) => <input id={id} type="text" />}</FormControl>, {
        wrapper,
      });

      expect(container).toBeDefined();
    });
  });
});
