import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { afterEach, describe, expect, test } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

describe("Button", () => {
  test("renders a button with the correct text", () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });
});

// describe("Button", () => {
//   test("renders a button with outline variant", () => {
//     render(
//       <Button variant="outline" color="primary">
//         Click me
//       </Button>
//     );
//     const buttonElement = screen.getByText(/click me/i);
//     expect(buttonElement).toBeInTheDocument();
//     expect(buttonElement).toHaveStyle("background-color: white");
//     expect(buttonElement).toHaveStyle("color: #000080");
//     expect(buttonElement).toHaveStyle("border: 2px solid #000080");
//   });
// });

// describe("Button component", () => {
//   test("renders children text", () => {
//     const text = "Click me!";
//     render(<Button>{text}</Button>);

//     expect(screen.getByText(text)).toBeInTheDocument();
//   });

//   test("applies correct styles for variant prop", () => {
//     render(<Button variant="outline">Outline</Button>);
//     expect(screen.getByText("Outline")).toHaveStyle(`
//         background-color: white;
//         color: #000080;
//         border: 2px solid #000080;
//       `);

//     render(<Button variant="text">Text</Button>);
//     expect(screen.getByText("Text")).toHaveStyle(`
//         background-color: transparent;
//         color: #000080;
//         border: none;
//         font-weight: bold;
//       `);
//   });

//   test("applies correct styles for color prop", () => {
//     render(<Button color="warning">Warning</Button>);
//     expect(screen.getByText("Warning")).toHaveStyle(`
//         background-color: #c83200;
//         color: white;
//       `);
//   });

//   test("applies correct styles for size prop", () => {
//     render(<Button size="small">Small</Button>);
//     expect(screen.getByText("Small")).toHaveStyle(`
//         font-size: 12px;
//       `);
//   });
// });

afterEach(() => {
  cleanup();
});
