import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../Redux/reducers";
import { TypeProduct } from "../components/Products/TypeProduct";
import userEvent from "@testing-library/user-event";

describe("TypeProduct", () => {
  test("renders four type buttons", () => {
    const store = createStore(rootReducer);
    const { getAllByRole } = render(
      <Provider store={store}>
        <TypeProduct />
      </Provider>
    );
    const buttons = getAllByRole("button");
    expect(buttons.length).toEqual(4);
  });

  test("dispatches the filteredProducts action when a type button is clicked", () => {
    const products = [
      {
        barcode: 1,
        brand: "",
        description: "",
        filter: ["body_care"],
        manufacturer: "",
        name: "Product 1",
        price: 1234,
        size: "",
        size_type: "",
        url: "",
        count_product: 1,
        id: "2",
      },

      {
        barcode: 2,
        brand: "",
        description: "",
        filter: ["hand_care"],
        manufacturer: "",
        name: "Product 2",
        price: 123,
        size: "",
        size_type: "",
        url: "",
        count_product: 1,
        id: "2",
      },
    ];
    const store = createStore(rootReducer, {
      products: products,
    });
    const { getByRole } = render(
      <Provider store={store}>
        <TypeProduct />
      </Provider>
    );
    const bodyCareButton = getByRole("button", { name: "Уход за телом" });
    waitFor(() => {
      userEvent.click(bodyCareButton);
    });
    expect(store.getState().products.filteredProducts);
  });
});
