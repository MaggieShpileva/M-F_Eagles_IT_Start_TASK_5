import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import App from "../App";

describe("App component", () => {
  test("renders MainPage component on default route", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByTestId("main-page")).toBeInTheDocument();
  });

  test("renders Catalog component on /catalog route", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    window.history.pushState({}, "Catalog page", "/catalog");
    expect(getByTestId("catalog-page")).toBeInTheDocument();
  });

  test("renders ProductPage component on /product/:filter/:barcode route", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    window.history.pushState({}, "Product page", "/product/electronics/123456");
    expect(getByTestId("product-page")).toBeInTheDocument();
  });

  test("renders CartPage component on /cart route", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    window.history.pushState({}, "Cart page", "/cart");
    expect(getByTestId("cart-page")).toBeInTheDocument();
  });
});
