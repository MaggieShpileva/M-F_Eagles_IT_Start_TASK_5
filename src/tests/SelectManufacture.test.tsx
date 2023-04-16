import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { filteredProducts } from "../Redux/product-filter/actions";
import {
  brandFilter,
  manufactureFilter,
} from "../Redux/product-filter/selectors";
import { selectAllProducts } from "../Redux/all-product/selectors";
import { ShowButton } from "../components/Products/Filters/ShowButton";

describe("ShowButton", () => {
  const mockStore = configureStore([]);
  let store: any;

  beforeEach(() => {
    store = mockStore({
      products: data,
      filterProducts: {
        manufactureFilters: ["LuxaryBeauty"],
        brandFilters: ["BioMio"],
      },
    });
  });

  it("should dispatch the correct action when clicked", () => {
    const arrFilteredProducts = [
      {
        filter: ["hand_care", "face_care"],
        url: "https://cdn.eapteka.ru/upload/offer_photo/498/435/resized/450_450_1_18654cff2855c0f6e834ba35b6e95760.jpeg?t=1667302162&_cvc=1679455803",
        name: "BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот",
        size_type: "90 г",
        size: "",
        barcode: 4000099992,
        manufacturer: "LuxaryBeauty",
        brand: "BioMio",
        description:
          "BioMio – линейка эффективных средств для дома, использование которых приносит только удовольствие. Уборка помогает не только очистить и гармонизировать свое пространство, но и себя, свои мысли, поэтому важно ее делать с радостью. Средства, созданные с любовью и заботой, помогут в этом и идеально справятся с загрязнениями, оставаясь при этом абсолютно безопасными и экологичными. Благодаря действию натуральных эфирных масел, они поднимут настроение и подарят наслаждение, а натуральные активные компоненты бережно позаботятся о коже рук во время стирки и уборки",
        price: 48,
        count_product: 2,
      },
    ];

    const expectedAction = filteredProducts(arrFilteredProducts);

    const { getByRole } = render(
      <Provider store={store}>
        <ShowButton />
      </Provider>
    );

    fireEvent.click(getByRole("button", { name: /показать/i }));

    expect(store.getActions()).toContainEqual(expectedAction);
  });

  it("should filter the products based on selected brand and manufacture filters", () => {
    const expectedBrandFilter = ["Brand 1"];
    const expectedManufactureFilter = ["Manufacturer 3"];

    render(
      <Provider store={store}>
        <ShowButton />
      </Provider>
    );

    expect(store.getActions()).toHaveLength(0);

    expect(brandFilter(store.getState().productFilter)).toEqual(
      expectedBrandFilter
    );

    expect(manufactureFilter(store.getState().productFilter)).toEqual(
      expectedManufactureFilter
    );

    expect(selectAllProducts(store.getState())).toHaveLength(4);
  });
});

const data = [
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
    filter: ["hand_care", "face_care"],
    url: "https://cdn.eapteka.ru/upload/offer_photo/498/435/resized/450_450_1_18654cff2855c0f6e834ba35b6e95760.jpeg?t=1667302162&_cvc=1679455803",
    name: "BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот",
    size_type: "90 г",
    size: "",
    barcode: 4000099992,
    manufacturer: "LuxaryBeauty",
    brand: "BioMio",
    description:
      "BioMio – линейка эффективных средств для дома, использование которых приносит только удовольствие. Уборка помогает не только очистить и гармонизировать свое пространство, но и себя, свои мысли, поэтому важно ее делать с радостью. Средства, созданные с любовью и заботой, помогут в этом и идеально справятся с загрязнениями, оставаясь при этом абсолютно безопасными и экологичными. Благодаря действию натуральных эфирных масел, они поднимут настроение и подарят наслаждение, а натуральные активные компоненты бережно позаботятся о коже рук во время стирки и уборки",
    price: 48,
    count_product: 2,
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
  {
    filter: ["washing_powder"],
    url: "https://mybimax.ru/wp-content/uploads/2020/04/BiMAX_100pyaten_2400.jpg",
    name: "Порошок стиральный Автомат 100 пятен COMPACT",
    size_type: "1500 г",
    size: "",
    barcode: 4000099995,
    manufacturer: "Нэфис",
    brand: "BIMAX",
    description: "",
    price: 540,
    count_product: 2,
  },
];
