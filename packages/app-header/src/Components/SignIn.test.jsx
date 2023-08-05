import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import { describe, expect, test } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";
import { Provider } from "react-redux";
import store from "./../store";
import SignInForm from "./SignIn";
expect.extend(matchers);

describe("SignInForm", () => {
  test("renders the form with the correct inputs and buttons", () => {
    render(
      <Provider store={store}>
        <SignInForm />
      </Provider>
    );
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const signInButton = screen.getByRole("button", { name: "Sign In" });
    const signUpButton = screen.getByRole("button", { name: "Sign Up" });
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
  });
});
