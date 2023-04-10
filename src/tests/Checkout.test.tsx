import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import * as reactRedux from "react-redux";
import { Total } from "../components/CartPage/Total";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => jest.fn(),
  useSelector: () => jest.fn(),
}));

describe("Testing checkout", () => {
  test("Should render a button, when anything exist in cart", async () => {
    jest.spyOn(reactRedux, "useSelector").mockReturnValue(dataItems);
    const props = {
      total: 300,
      isModal: false,
      setIsModal: () => {},
    };
    render(<Total {...props} />);
    const button = screen.getAllByTestId("checkout-btn")[0];
    expect(button).toBeInTheDocument();
  });

  test("Should render 'Cart is empty', then don't exist data", async () => {
    jest.spyOn(reactRedux, "useSelector").mockReturnValue({});

    waitFor(() => {
      expect(screen.getByText("Ваша корзина пуста")).toBeInTheDocument();
    });
  });
});

const dataItems = [
  {
    filter: ["body_care"],
    url: "https://admin.only.kz/storage/product/images63b2d63310efb.png",
    name: "Бомбочка для ванны HAPPY WATERMELON",
    size_type: "50 гр",
    size: "",
    barcode: 4000099991,
    manufacturer: "BEAUTY",
    brand: "HEY BEAUTY",
    description:
      "Бомбочки HEY BEAUTY помогают превратить процесс купания в настоящую спа-процедуру. Они приятно шипят и производят мелкие пузырьки. Через минуту бомбочка наполняет комнату приятными ароматами. Можно выбрать любимые запахи — это станет отличной заменой ароматерапии. После погружения в воду натуральные ингредиенты оказывают положительное влияние на кожу.",
    price: 690,
    count_product: 0,
  },
  {
    filter: ["dishwashing_liquid"],
    url: "https://aosgel.ru/wp-content/uploads/2021/01/AOS_Crystal_450_front.jpg",
    name: "Средство для мытья посуды Crystal",
    size_type: "450 мл",
    size: "",
    barcode: 4000099993,
    manufacturer: "Нэфис",
    brand: "AOS",
    description: "",
    price: 320,
    count_product: 2,
  },
  {
    filter: ["washing_powder"],
    url: "https://img.fozzyshop.com.ua/dnipro/133974-medium_default/ariel-avt-gel-smz-zhidkij-v-rastvorimykh-kapsulakh-gornyj-istochnik-13x27g.jpg",
    name: " Автoмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник",
    size_type: "15 X 28.8 г",
    size: "",
    barcode: 4000099994,
    manufacturer: "Нэфис",
    brand: "AOS",
    description:
      "Автoмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник",
    price: 800,
    count_product: 2,
  },
];
