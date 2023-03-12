import { render, screen } from "@testing-library/react";
import store from "../component/redux-store/index";
import { Provider } from "react-redux";
import App from "../App";

describe("SignIn component", () => {
  test("displays input label and button", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const textEl = screen.getByText(/Hello there, Sign In to Continue/i);
    // console.log(textEl)
    // expect(textEl).toBeInTheDocument();
  });
});
