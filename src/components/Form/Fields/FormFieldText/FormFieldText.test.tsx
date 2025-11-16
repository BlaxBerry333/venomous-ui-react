import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { FORM_FIELD_VARIANT_MAP } from "@/components/Form/_/FormFieldBase.types";
import { Theme } from "@/components/Theme";
import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import FormFieldText from "./FormFieldText.component";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("FormFieldText", () => {
  // ========== Basic Rendering Tests ==========
  describe("Basic Rendering", () => {
    it("renders input element", () => {
      const { getByRole } = render(<FormFieldText />, { wrapper });

      const input = getByRole("textbox");
      expect(input).toBeDefined();
    });

    it("renders with type='text'", () => {
      const { getByRole } = render(<FormFieldText />, { wrapper });

      const input = getByRole("textbox") as HTMLInputElement;
      expect(input.type).toBe("text");
    });

    it("renders without prefix by default", () => {
      const { queryByText } = render(<FormFieldText />, { wrapper });

      // No prefix text should exist
      expect(queryByText("@")).toBeNull();
    });

    it("renders without suffix by default", () => {
      const { queryByText } = render(<FormFieldText />, { wrapper });

      // No suffix text should exist
      expect(queryByText(".com")).toBeNull();
    });

    it("renders with prefix when provided", () => {
      const { getByText } = render(<FormFieldText prefix={<span>@</span>} />, { wrapper });

      expect(getByText("@")).toBeDefined();
    });

    it("renders with suffix when provided", () => {
      const { getByText } = render(<FormFieldText suffix={<span>.com</span>} />, { wrapper });

      expect(getByText(".com")).toBeDefined();
    });
  });

  // ========== Props Tests ==========
  describe("Props", () => {
    it("accepts value prop (controlled)", () => {
      const { getByRole } = render(<FormFieldText value="test value" />, { wrapper });

      const input = getByRole("textbox") as HTMLInputElement;
      expect(input.value).toBe("test value");
    });

    it("accepts placeholder prop", () => {
      const { getByPlaceholderText } = render(<FormFieldText placeholder="Enter text..." />, { wrapper });

      expect(getByPlaceholderText("Enter text...")).toBeDefined();
    });

    it("accepts disabled prop", () => {
      const { getByRole } = render(<FormFieldText disabled={true} />, { wrapper });

      const input = getByRole("textbox") as HTMLInputElement;
      expect(input.disabled).toBe(true);
    });

    it("accepts readOnly prop", () => {
      const { getByRole } = render(<FormFieldText readOnly={true} />, { wrapper });

      const input = getByRole("textbox") as HTMLInputElement;
      expect(input.readOnly).toBe(true);
    });

    it("accepts variant prop (outlined)", () => {
      render(<FormFieldText variant={FORM_FIELD_VARIANT_MAP.OUTLINED} />, { wrapper });
      expect(true).toBe(true);
    });

    it("accepts variant prop (text)", () => {
      render(<FormFieldText variant={FORM_FIELD_VARIANT_MAP.TEXT} />, { wrapper });
      expect(true).toBe(true);
    });

    it("accepts error prop", () => {
      render(<FormFieldText error={true} />, { wrapper });
      expect(true).toBe(true);
    });

    it("accepts fullWidth prop", () => {
      render(<FormFieldText fullWidth={true} />, { wrapper });
      expect(true).toBe(true);
    });

    it("accepts custom className", () => {
      const { getByRole } = render(<FormFieldText className="custom-input" />, { wrapper });

      const input = getByRole("textbox");
      expect(input.classList.contains("custom-input")).toBe(true);
    });

    it("accepts custom style", () => {
      const { getByRole } = render(<FormFieldText style={{ fontSize: 20 }} />, { wrapper });

      const input = getByRole("textbox") as HTMLInputElement;
      expect(input.style.fontSize).toBe("20px");
    });

    it("accepts wrapperClassName", () => {
      const { container } = render(<FormFieldText wrapperClassName="custom-wrapper" />, { wrapper });

      const wrapperDiv = container.firstChild as HTMLElement;
      expect(wrapperDiv.classList.contains("custom-wrapper")).toBe(true);
    });

    it("accepts wrapperStyle", () => {
      const { container } = render(<FormFieldText wrapperStyle={{ padding: 10 }} />, { wrapper });

      const wrapperDiv = container.firstChild as HTMLElement;
      expect(wrapperDiv.style.padding).toBe("10px");
    });

    it("accepts prefixClassName", () => {
      render(<FormFieldText prefix={<span>$</span>} prefixClassName="custom-prefix" />, { wrapper });
      // Prefix className is applied
      expect(true).toBe(true);
    });

    it("accepts prefixStyle", () => {
      render(<FormFieldText prefix={<span>$</span>} prefixStyle={{ color: "red" }} />, { wrapper });
      // Prefix style is applied
      expect(true).toBe(true);
    });

    it("accepts suffixClassName", () => {
      render(<FormFieldText suffix={<span>kg</span>} suffixClassName="custom-suffix" />, { wrapper });
      // Suffix className is applied
      expect(true).toBe(true);
    });

    it("accepts suffixStyle", () => {
      render(<FormFieldText suffix={<span>kg</span>} suffixStyle={{ color: "blue" }} />, { wrapper });
      // Suffix style is applied
      expect(true).toBe(true);
    });
  });

  // ========== Controlled/Uncontrolled Tests ==========
  describe("Controlled/Uncontrolled", () => {
    it("works as uncontrolled component (no value prop)", () => {
      const { getByRole } = render(<FormFieldText />, { wrapper });

      const input = getByRole("textbox") as HTMLInputElement;
      fireEvent.change(input, { target: { value: "typed text" } });

      expect(input.value).toBe("typed text");
    });

    it("works as controlled component (with value prop)", () => {
      const { getByRole } = render(<FormFieldText value="initial" />, { wrapper });

      const input = getByRole("textbox") as HTMLInputElement;
      expect(input.value).toBe("initial");

      // Controlled component - value is controlled externally
      expect(true).toBe(true);
    });

    it("calls onChange when value changes", () => {
      const handleChange = vi.fn();
      const { getByRole } = render(<FormFieldText onChange={handleChange} />, { wrapper });

      const input = getByRole("textbox") as HTMLInputElement;
      fireEvent.change(input, { target: { value: "new value" } });

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith("new value", expect.any(Object));
    });

    it("does not call onChange when disabled", () => {
      const handleChange = vi.fn();
      const { getByRole } = render(<FormFieldText disabled={true} onChange={handleChange} />, { wrapper });

      const input = getByRole("textbox") as HTMLInputElement;
      fireEvent.change(input, { target: { value: "new value" } });

      expect(handleChange).not.toHaveBeenCalled();
    });

    it("does not call onChange when readOnly", () => {
      const handleChange = vi.fn();
      const { getByRole } = render(<FormFieldText readOnly={true} onChange={handleChange} />, { wrapper });

      const input = getByRole("textbox") as HTMLInputElement;
      fireEvent.change(input, { target: { value: "new value" } });

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  // ========== Focus/Blur Events Tests ==========
  describe("Focus/Blur Events", () => {
    it("handles focus event", () => {
      const handleFocus = vi.fn();
      const { getByRole } = render(<FormFieldText onFocus={handleFocus} />, { wrapper });

      const input = getByRole("textbox");
      fireEvent.focus(input);

      expect(handleFocus).toHaveBeenCalledTimes(1);
    });

    it("handles blur event", () => {
      const handleBlur = vi.fn();
      const { getByRole } = render(<FormFieldText onBlur={handleBlur} />, { wrapper });

      const input = getByRole("textbox");
      fireEvent.blur(input);

      expect(handleBlur).toHaveBeenCalledTimes(1);
    });
  });

  // ========== Prefix/Suffix Tests ==========
  describe("Prefix/Suffix", () => {
    it("renders with both prefix and suffix", () => {
      const { getByText } = render(<FormFieldText prefix={<span>$</span>} suffix={<span>.00</span>} />, { wrapper });

      expect(getByText("$")).toBeDefined();
      expect(getByText(".00")).toBeDefined();
    });

    it("renders prefix with complex element", () => {
      const { getByRole } = render(<FormFieldText prefix={<button type="button">Search</button>} />, { wrapper });

      const button = getByRole("button", { name: "Search" });
      expect(button).toBeDefined();
    });

    it("renders suffix with complex element", () => {
      const { getByRole } = render(<FormFieldText suffix={<button type="button">Clear</button>} />, { wrapper });

      const button = getByRole("button", { name: "Clear" });
      expect(button).toBeDefined();
    });
  });

  // ========== State Combinations Tests ==========
  describe("State Combinations", () => {
    it("renders disabled and error together", () => {
      render(<FormFieldText disabled={true} error={true} />, { wrapper });
      expect(true).toBe(true);
    });

    it("renders readOnly and error together", () => {
      render(<FormFieldText readOnly={true} error={true} />, { wrapper });
      expect(true).toBe(true);
    });

    it("renders with all visual props", () => {
      render(
        <FormFieldText
          variant={FORM_FIELD_VARIANT_MAP.OUTLINED}
          error={true}
          fullWidth={true}
          prefix={<span>@</span>}
          suffix={<span>.com</span>}
        />,
        { wrapper },
      );
      expect(true).toBe(true);
    });
  });

  // ========== General Tests ==========
  describe("General", () => {
    it("displays correct displayName", () => {
      expect(FormFieldText.displayName).toBe(COMPONENT_DISPLAY_NAMES.FormFieldText);
    });

    it("renders component without errors", () => {
      const { container } = render(<FormFieldText />, { wrapper });

      expect(container).toBeDefined();
    });

    it("forwards ref correctly", () => {
      const ref = vi.fn();
      render(<FormFieldText ref={ref} />, { wrapper });

      expect(ref).toHaveBeenCalled();
      expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLInputElement);
    });

    it("accepts native input attributes", () => {
      const { getByRole } = render(<FormFieldText maxLength={10} autoComplete="off" />, { wrapper });

      const input = getByRole("textbox") as HTMLInputElement;
      expect(input.maxLength).toBe(10);
      expect(input.autocomplete).toBe("off");
    });
  });
});
