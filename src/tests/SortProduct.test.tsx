import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { SortProduct } from "../components/Products/SortProducts";
import * as reactRedux from "react-redux";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => jest.fn(),
  useSelector: () => jest.fn(),
}));

describe("SortProduct", () => {
  it("should render the sorting options", () => {
    render(<SortProduct />);

    const sortDropdown = screen.getByRole("combobox");
    expect(sortDropdown).toBeInTheDocument();
    expect(sortDropdown).toHaveValue("sort by popularity");
    expect(screen.getByText("По популярности")).toBeInTheDocument();
    expect(screen.getByText("Названию")).toBeInTheDocument();
    expect(screen.getByText("Цена по возрастанию")).toBeInTheDocument();
    expect(screen.getByText("Цена по убыванию")).toBeInTheDocument();
  });

  it("should sort products by popularity by default", () => {
    const mockDispatch = jest.fn();

    jest.mock("react-redux", () => ({
      ...(jest.requireActual("react-redux") as any),
      useSelector: jest.fn(),
      useDispatch: () => mockDispatch,
    }));
    const mockProducts = [
      { id: "1", name: "Product 1", price: 10, brand: "Brand A" },
      { id: "2", name: "Product 2", price: 20, brand: "Brand B" },
    ];
    const mockFilteredProducts = [
      { id: "1", name: "Product 1", price: 10, brand: "Brand A" },
      { id: "2", name: "Product 2", price: 20, brand: "Brand B" },
    ];
    jest.mock("../Redux/all-product/selectors", () => ({
      selectAllProducts: jest.fn(() => mockProducts),
    }));
    jest.mock("../Redux/product-filter/selectors", () => ({
      selectFilteredProducts: jest.fn(() => mockFilteredProducts),
      manufactureFilter: jest.fn(() => []),
      brandFilter: jest.fn(() => []),
    }));
    jest.mock("../Redux/product-filter/actions", () => ({
      filteredProducts: jest.fn(),
    }));

    render(<SortProduct />);
    expect(mockDispatch).toHaveBeenCalledWith(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "FILTERED_PRODUCTS",
      payload: mockProducts,
    });
  });

  it("should sort products by price in increasing order", () => {
    const mockDispatch = jest.fn();
    jest.mock("react-redux", () => ({
      ...jest.requireActual("react-redux"),
      useSelector: jest.fn(),
      useDispatch: () => mockDispatch,
    }));
    const mockProducts = [
      { id: "1", name: "Product 1", price: 20, brand: "Brand A" },
      { id: "2", name: "Product 2", price: 10, brand: "Brand B" },
    ];
    const mockFilteredProducts = [
      { id: "1", name: "Product 1", price: 20, brand: "Brand A" },
      { id: "2", name: "Product 2", price: 10, brand: "Brand B" },
    ];
    jest.mock("../Redux/all-product/selectors", () => ({
      selectAllProducts: jest.fn(() => mockProducts),
    }));
    jest.mock("../Redux/product-filter/selectors", () => ({
      selectFilteredProducts: jest.fn(() => mockFilteredProducts),
      manufactureFilter: jest.fn(() => []),
      brandFilter: jest.fn(() => []),
    }));
    jest.mock("../Redux/product-filter/actions", () => ({
      filteredProducts: jest.fn(),
    }));
  });
});
