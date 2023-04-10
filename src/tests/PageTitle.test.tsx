import React from "react";
import { render, screen } from "@testing-library/react";
import { PageTitle } from "../components/PageTitle";

describe("PageTitle", () => {
  test("should render with correct title", () => {
    const title = "Test title";
    render(<PageTitle title={title} />);
    const pageTitleElement = screen.getByText(title);

    expect(pageTitleElement).toBeInTheDocument();
  });
});
