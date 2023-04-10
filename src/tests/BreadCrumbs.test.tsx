import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { BreadCrumbs } from "../components/BreadCrumbs/index";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => jest.fn(),
}));
describe("BreadCrumbs", () => {
  test("should render correct breadcrumbs", () => {
    const mockLocation = { pathname: "/catalog/hand_care" };
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
