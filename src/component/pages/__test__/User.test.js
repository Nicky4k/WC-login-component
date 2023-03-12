import React from "react";
import { render, screen } from "@testing-library/react";
import { useSelector } from "react-redux";
import Users from "../Users";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("Users", () => {
  const mockUsers = [
    { id: 1, name: "Adam", color: "#f00" },
    { id: 2, name: "Eve", color: "#0f0" },
  ];

  beforeEach(() => {
    useSelector.mockImplementation((selectorFn) =>
      selectorFn({
        loginStore: { users: mockUsers },
      })
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should render users list correctly", () => {
    render(<Users />);
    const userRows = screen.getAllByRole("row").slice(1);
    expect(userRows).toHaveLength(mockUsers.length);
  });
});
