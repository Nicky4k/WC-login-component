import { render, screen } from "@testing-library/jest-dom";
import "@testing-library/jest-dom";
import SignIn from "../SignIn";
import { Provider } from "react-redux";
import store from "../../../component/redux-store/index";

describe("SignIn component", () => {
  test("displays input label and button", async () => {
    render(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );

    const submitButton = screen.getByRole("button", { name: "Next" });

    expect(submitButton).toBeInTheDocument();
  });
});
