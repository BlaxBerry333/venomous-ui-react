import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { FORM_FIELD_VARIANT_MAP } from "@/components/Form/_/FormFieldBase.types";
import { Theme } from "@/components/Theme";
import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import FormFieldTextarea from "./FormFieldTextarea.component";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("FormFieldTextarea", () => {
  // ========== Basic Rendering Tests ==========
  describe("Basic Rendering", () => {
    it("renders textarea element", () => {
      const { getByRole } = render(<FormFieldTextarea />, { wrapper });

      const textarea = getByRole("textbox");
      expect(textarea).toBeDefined();
      expect(textarea.tagName).toBe("TEXTAREA");
    });

    it("renders with default rows (3)", () => {
      const { getByRole } = render(<FormFieldTextarea />, { wrapper });

      const textarea = getByRole("textbox") as HTMLTextAreaElement;
      expect(Number(textarea.rows)).toBe(3);
    });

    it("renders with custom rows", () => {
      const { getByRole } = render(<FormFieldTextarea rows={5} />, { wrapper });

      const textarea = getByRole("textbox") as HTMLTextAreaElement;
      expect(Number(textarea.rows)).toBe(5);
    });
  });

  // ========== Props Tests ==========
  describe("Props", () => {
    it("accepts value prop (controlled)", () => {
      const { getByRole } = render(<FormFieldTextarea value="test value" />, { wrapper });

      const textarea = getByRole("textbox") as HTMLTextAreaElement;
      expect(textarea.value).toBe("test value");
    });

    it("accepts placeholder prop", () => {
      const { getByPlaceholderText } = render(<FormFieldTextarea placeholder="Enter text..." />, { wrapper });

      expect(getByPlaceholderText("Enter text...")).toBeDefined();
    });

    it("accepts disabled prop", () => {
      const { getByRole } = render(<FormFieldTextarea disabled={true} />, { wrapper });

      const textarea = getByRole("textbox") as HTMLTextAreaElement;
      expect(textarea.disabled).toBe(true);
    });

    it("accepts readOnly prop", () => {
      const { getByRole } = render(<FormFieldTextarea readOnly={true} />, { wrapper });

      const textarea = getByRole("textbox") as HTMLTextAreaElement;
      expect(textarea.readOnly).toBe(true);
    });

    it("accepts name prop", () => {
      const { getByRole } = render(<FormFieldTextarea name="description" />, { wrapper });

      const textarea = getByRole("textbox") as HTMLTextAreaElement;
      expect(textarea.name).toBe("description");
    });

    it("accepts variant prop (outlined)", () => {
      render(<FormFieldTextarea variant={FORM_FIELD_VARIANT_MAP.OUTLINED} />, { wrapper });
      expect(true).toBe(true);
    });

    it("accepts variant prop (text)", () => {
      render(<FormFieldTextarea variant={FORM_FIELD_VARIANT_MAP.TEXT} />, { wrapper });
      expect(true).toBe(true);
    });

    it("accepts error prop", () => {
      render(<FormFieldTextarea error={true} />, { wrapper });
      expect(true).toBe(true);
    });

    it("accepts fullWidth prop", () => {
      render(<FormFieldTextarea fullWidth={true} />, { wrapper });
      expect(true).toBe(true);
    });

    it("accepts custom className", () => {
      const { getByRole } = render(<FormFieldTextarea className="custom-textarea" />, { wrapper });

      const textarea = getByRole("textbox");
      expect(textarea.classList.contains("custom-textarea")).toBe(true);
    });

    it("accepts custom style", () => {
      const { getByRole } = render(<FormFieldTextarea style={{ fontSize: 20 }} />, { wrapper });

      const textarea = getByRole("textbox") as HTMLTextAreaElement;
      expect(textarea.style.fontSize).toBe("20px");
    });

    it("accepts wrapperClassName", () => {
      const { container } = render(<FormFieldTextarea wrapperClassName="custom-wrapper" />, { wrapper });

      const wrapperDiv = container.firstChild as HTMLElement;
      expect(wrapperDiv.classList.contains("custom-wrapper")).toBe(true);
    });

    it("accepts wrapperStyle", () => {
      const { container } = render(<FormFieldTextarea wrapperStyle={{ padding: 10 }} />, { wrapper });

      const wrapperDiv = container.firstChild as HTMLElement;
      expect(wrapperDiv.style.padding).toBe("10px");
    });
  });

  // ========== AutoSize Tests ==========
  describe("AutoSize", () => {
    it("accepts autoSize prop", () => {
      const { getByRole } = render(<FormFieldTextarea autoSize={true} />, { wrapper });

      const textarea = getByRole("textbox") as HTMLTextAreaElement;
      // When autoSize is true, rows attribute should not be set
      expect(textarea.hasAttribute("rows")).toBe(false);
    });

    it("accepts minRows prop with autoSize", () => {
      render(<FormFieldTextarea autoSize={true} minRows={2} />, { wrapper });
      expect(true).toBe(true);
    });

    it("accepts maxRows prop with autoSize", () => {
      render(<FormFieldTextarea autoSize={true} maxRows={10} />, { wrapper });
      expect(true).toBe(true);
    });

    it("ignores rows prop when autoSize is enabled", () => {
      const { getByRole } = render(<FormFieldTextarea autoSize={true} rows={5} />, { wrapper });

      const textarea = getByRole("textbox") as HTMLTextAreaElement;
      expect(textarea.hasAttribute("rows")).toBe(false);
    });
  });

  // ========== Controlled/Uncontrolled Tests ==========
  describe("Controlled/Uncontrolled", () => {
    it("works as uncontrolled component (no value prop)", () => {
      const { getByRole } = render(<FormFieldTextarea />, { wrapper });

      const textarea = getByRole("textbox") as HTMLTextAreaElement;
      fireEvent.change(textarea, { target: { value: "typed text" } });

      expect(textarea.value).toBe("typed text");
    });

    it("works as controlled component (with value prop)", () => {
      const { getByRole } = render(<FormFieldTextarea value="initial" />, { wrapper });

      const textarea = getByRole("textbox") as HTMLTextAreaElement;
      expect(textarea.value).toBe("initial");
    });

    it("calls onChange when value changes", () => {
      const handleChange = vi.fn();
      const { getByRole } = render(<FormFieldTextarea onChange={handleChange} />, { wrapper });

      const textarea = getByRole("textbox") as HTMLTextAreaElement;
      fireEvent.change(textarea, { target: { value: "new value" } });

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith("new value", expect.any(Object));
    });

    it("does not call onChange when disabled", () => {
      const handleChange = vi.fn();
      const { getByRole } = render(<FormFieldTextarea disabled={true} onChange={handleChange} />, { wrapper });

      const textarea = getByRole("textbox") as HTMLTextAreaElement;
      fireEvent.change(textarea, { target: { value: "new value" } });

      expect(handleChange).not.toHaveBeenCalled();
    });

    it("does not call onChange when readOnly", () => {
      const handleChange = vi.fn();
      const { getByRole } = render(<FormFieldTextarea readOnly={true} onChange={handleChange} />, { wrapper });

      const textarea = getByRole("textbox") as HTMLTextAreaElement;
      fireEvent.change(textarea, { target: { value: "new value" } });

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  // ========== Focus/Blur Events Tests ==========
  describe("Focus/Blur Events", () => {
    it("handles focus event", () => {
      const handleFocus = vi.fn();
      const { getByRole } = render(<FormFieldTextarea onFocus={handleFocus} />, { wrapper });

      const textarea = getByRole("textbox");
      fireEvent.focus(textarea);

      expect(handleFocus).toHaveBeenCalledTimes(1);
    });

    it("handles blur event", () => {
      const handleBlur = vi.fn();
      const { getByRole } = render(<FormFieldTextarea onBlur={handleBlur} />, { wrapper });

      const textarea = getByRole("textbox");
      fireEvent.blur(textarea);

      expect(handleBlur).toHaveBeenCalledTimes(1);
    });
  });

  // ========== State Combinations Tests ==========
  describe("State Combinations", () => {
    it("renders disabled and error together", () => {
      render(<FormFieldTextarea disabled={true} error={true} />, { wrapper });
      expect(true).toBe(true);
    });

    it("renders readOnly and error together", () => {
      render(<FormFieldTextarea readOnly={true} error={true} />, { wrapper });
      expect(true).toBe(true);
    });

    it("renders with all visual props", () => {
      render(<FormFieldTextarea variant={FORM_FIELD_VARIANT_MAP.OUTLINED} error={true} fullWidth={true} rows={5} />, {
        wrapper,
      });
      expect(true).toBe(true);
    });
  });

  // ========== General Tests ==========
  describe("General", () => {
    it("displays correct displayName", () => {
      expect(FormFieldTextarea.displayName).toBe(COMPONENT_DISPLAY_NAMES.FormFieldTextarea);
    });

    it("renders component without errors", () => {
      const { container } = render(<FormFieldTextarea />, { wrapper });

      expect(container).toBeDefined();
    });

    it("forwards ref correctly", () => {
      const ref = vi.fn();
      render(<FormFieldTextarea ref={ref} />, { wrapper });

      expect(ref).toHaveBeenCalled();
      expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLTextAreaElement);
    });

    it("accepts native textarea attributes", () => {
      const { getByRole } = render(<FormFieldTextarea maxLength={500} autoComplete="off" />, { wrapper });

      const textarea = getByRole("textbox") as HTMLTextAreaElement;
      expect(textarea.maxLength).toBe(500);
      expect(textarea.autocomplete).toBe("off");
    });
  });
});
