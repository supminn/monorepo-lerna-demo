import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import { describe, expect, test } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";
import SignUpForm from ".";
import { Provider } from "react-redux";
import store from "../../store";
expect.extend(matchers);

describe("SignUpForm", () => {
  test("renders the form with the correct inputs and buttons", () => {
    render(
      <Provider store={store}>
        <SignUpForm />
      </Provider>
    );
    const nameInput = screen.getByPlaceholderText("Name");
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const confirmPasswordInput =
      screen.getByPlaceholderText("Confirm Password");
    const signUpButton = screen.getByRole("button", { name: "Sign Up" });
    const signInButton = screen.getByRole("button", { name: "Sign In" });
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
  });
});
