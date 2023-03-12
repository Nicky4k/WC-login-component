import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignIn from "../SignIn";
import { Provider } from "react-redux";
import store from "../../../redux-store/index";

describe("SignIn component", () => {
  test("should render input fields and button", () => {
    render(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );

    const emailInput = screen.getByText("Email");
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByText("Password");
    expect(passwordInput).toBeInTheDocument();

    const submitButton = screen.getByRole("button", { name: "Next" });
    expect(submitButton).toBeInTheDocument();
  });

  test("should enable the submit button when form is valid", () => {
    render(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );

    const emailInput = screen.getByTestId("emailInput");
    const passwordInput = screen.getByTestId("passwordInput");
    const checkbox = screen.getByTestId("checkBoxInput");
    const submitButton = screen.getByRole("button");

    // Fill in the form fields with valid data
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(checkbox);

    // Check that the submit button is enabled
    expect(submitButton).toBeEnabled();
  });
});
