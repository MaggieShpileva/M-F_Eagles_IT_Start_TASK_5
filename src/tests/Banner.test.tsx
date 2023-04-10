import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Banner } from "../components/Banner";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useNavigate: () => jest.fn(),
}));

test("renders correctly", () => {
  const { container } = render(
    <MemoryRouter initialEntries={["/"]}>
      <Banner />
    </MemoryRouter>
  );

  expect(container.innerHTML).toMatch("Только самые выгодные предложения");
});
