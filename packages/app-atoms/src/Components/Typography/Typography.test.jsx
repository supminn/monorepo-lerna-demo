import { render } from "@testing-library/react";
import { Typography } from "./Typography";
import { describe, expect, test } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

describe("Typography component", () => {
  test("renders the correct HTML element based on the variant prop", () => {
    const { container } = render(<Typography variant="h1" />);
    expect(container.firstChild.tagName).toBe("H1");
  });

  test("renders the correct font styles based on the variant prop", () => {
    const { container } = render(<Typography variant="h1" />);
    expect(container.firstChild).toHaveStyle("font-size: 2em");
    expect(container.firstChild).toHaveStyle("font-weight: bold");
  });

  test("renders the correct text based on the children prop", () => {
    const { container } = render(<Typography>Test text</Typography>);
    expect(container.firstChild.textContent).toBe("Test text");
  });

  test("uses the default props when no props are passed", () => {
    const { container } = render(<Typography />);
    expect(container.firstChild.tagName).toBe("P");
  });
});

//   test("renders the correct color based on the color prop", () => {
//     const { container } = render(<Typography color="red" />);
//     expect(container.firstChild).toHaveStyle("color: red");
//   });

//   test("renders with the correct text alignment based on the textAlign prop", () => {
//     const { container } = render(<Typography textAlign="center" />);
//     expect(container.firstChild).toHaveStyle("text-align: center");
//   });

// test("uses the default props when no props are passed", () => {
//     const { container } = render(<Typography />);
//     expect(container.firstChild.tagName).toBe("P");
//     expect(container.firstChild).toHaveStyle("font-size: 1rem");
//     expect(container.firstChild).toHaveStyle("font-weight: normal");
//     expect(container.firstChild).toHaveStyle("line-height: 1.2222222222222223");
//     expect(container.firstChild).toHaveStyle("color: black");
//     expect(container.firstChild).not.toHaveStyle("text-transform: uppercase");
//   });
