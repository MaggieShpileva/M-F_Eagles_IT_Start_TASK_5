import { render, screen, waitFor } from "@testing-library/react";
import { Price } from "../components/Products/Filters/Price";
import * as reactRedux from "react-redux";

jest.mock("react-redux");
describe("Testing input price", () => {
  jest.spyOn(reactRedux, "useDispatch");
  const inputStartValue = screen.findByTestId("start-value");
  const inputEndValue = screen.findByTestId("end-value");

  test("Products list is empty", () => {
    jest.spyOn(reactRedux, "useSelector").mockReturnValue([]);

    render(<Price />);
    waitFor(() => {
      expect(inputStartValue).toHaveValue(0);
      expect(inputEndValue).toHaveValue(0);
    });
  });

  test("Products list has one item", () => {
    jest.spyOn(reactRedux, "useSelector").mockReturnValue(dataItem);
    render(<Price />);

    waitFor(() => {
      expect(inputStartValue).toHaveValue(dataItem.price);
      expect(inputEndValue).toHaveValue(dataItem.price);
    });
  });

  test("Products list has more one  items", async () => {
    jest.spyOn(reactRedux, "useSelector").mockReturnValue(dataItems);

    let arr = dataItems.sort((a, b) => {
      return a.price > b.price ? 1 : -1;
    });
    render(<Price />);

    // fireEvent.change(await inputStartValue, { target: { value: 10 } });
    // fireEvent.change(await inputEndValue, { target: { value: -300 } });
    waitFor(() => {
      expect(inputStartValue).toHaveValue(arr[0].price);
      expect(inputEndValue).toHaveValue(arr[Attr.length - 1].price);
    });
  });
});

const dataItem = {
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
};

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
