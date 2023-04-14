import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { SelectManufacturer } from "../components/Products/Filters/SelectManufacturer";

describe("SelectManufacturer component", () => {
  test("renders the component correctly", () => {
    render(<SelectManufacturer />);
    const title = screen.getByText("Производитель");
    expect(title).toBeInTheDocument();
  });

  test("handles manufacturer selection correctly", () => {
    render(<SelectManufacturer />);
    const checkbox = screen.getByLabelText("checkbox") as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  test("renders the 'Show all' button correctly", () => {
    render(<SelectManufacturer />);
    const button = screen.getByText("Показать все");
    fireEvent.click(button);
    expect(button).toHaveClass("show_all_active");
  });

  test("updates the manufacturer filter correctly", () => {
    render(<SelectManufacturer />);
    const checkbox = screen.getByLabelText("checkbox") as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
    expect(screen.getByText("Выбрано: 1")).toBeInTheDocument();
  });
});
