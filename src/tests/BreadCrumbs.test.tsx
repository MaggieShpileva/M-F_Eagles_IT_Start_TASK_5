import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { BreadCrumbs } from "../components/BreadCrumbs/index";
import * as ReactRouterDOM from "react-router-dom";
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => jest.fn(),
}));
describe("BreadCrumbs", () => {
  test("should render correct breadcrumbs", () => {
    const mockLocation = {
      pathname: "/catalog/hand_care",
      state: {},
      key: "",
      search: "",
      hash: "",
    };
    jest.spyOn(ReactRouterDOM, "useLocation").mockReturnValue(mockLocation);

    render(
      <BrowserRouter>
        <BreadCrumbs />
      </BrowserRouter>
    );

    expect(screen.getByText("Главная")).toBeInTheDocument();
    expect(screen.getByText("Косметика и гигиена")).toBeInTheDocument();
    expect(screen.getByText("Уход за руками")).toBeInTheDocument();
  });
});
