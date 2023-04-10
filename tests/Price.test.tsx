import { render, screen } from "@testing-library/react";
import { Price } from "../src/components/Products/Filters/Price";

test("123", () => {
  render(<Price />);
  const el = screen.getByText(/Цена/i);
  expect(el).toBeInDocument();
});
