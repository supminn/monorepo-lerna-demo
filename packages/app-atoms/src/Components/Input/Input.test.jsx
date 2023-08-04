import { render } from "@testing-library/react";
import { Input } from "./Input";
import { describe, expect, test } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

describe("Input component", () => {
  test("renders a textarea when mutliLine prop is true", () => {
    const { container } = render(<Input mutliLine />);
    expect(container.firstChild.tagName).toBe("TEXTAREA");
  });

  test("renders an input when mutliLine prop is false", () => {
    const { container } = render(<Input />);
    expect(container.firstChild.tagName).toBe("INPUT");
  });

  //   test("renders the correct font size based on the size prop", () => {
  //     const { container } = render(<Input size="small" />);
  //     expect(container.firstChild).toHaveStyle("font-size: 12px");
  //   });

  //   test("renders the correct width based on the size prop", () => {
  //     const { container } = render(<Input size="large" />);
  //     expect(container.firstChild).toHaveStyle("width: 80%");
  //   });

  //   test("renders the correct height based on the size prop", () => {
  //     const { container } = render(<Input size="xl" />);
  //     expect(container.firstChild).toHaveStyle("height: 9rem");
  //   });
});
