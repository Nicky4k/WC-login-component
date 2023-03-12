import { render, screen } from "@testing-library/react";
import store from "../redux-store/index";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import App from "../App";

describe("App component", () => {
  test("check hello text", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const textEl = screen.getByText(/Hello there, Sign In to Continue/i);

    expect(textEl).toBeInTheDocument();
  });

  it("renders SignIn page when user is not logged in", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const textEl = screen.queryByText(/Welcome user/i);

    expect(textEl).not.toBeInTheDocument();
  });
});
