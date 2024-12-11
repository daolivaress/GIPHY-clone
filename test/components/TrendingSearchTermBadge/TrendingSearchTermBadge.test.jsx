import { render, screen } from "@testing-library/react";
import TrendingSearchTermBadge from "../../../src/components/TrendingSearchTermBadge/TrendingSearchTermBadge";

describe("pruebas en <TrendingSearchTermBadge/>", () => {
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(
      <TrendingSearchTermBadge title=" " onNewCategory={() => {}} />
    );
    expect(container).toMatchSnapshot();
  });

  test("Debe cambiar de categoria", () => {
    const onNewCategory = jest.fn();
    const title = "hola";
    render(
      <TrendingSearchTermBadge
        title={title}
        onNewCategory={onNewCategory}
      />
    );
    screen.getByTestId("trending-search-term-badge").click();
    expect(onNewCategory).toHaveBeenCalledWith(title);
  });

  test("Debe mostrar el titulo en una etiqueta p", () => {
    render(<TrendingSearchTermBadge title="hola" onNewCategory={() => {}} />);
    expect(screen.getByRole("paragraph").textContent).toBe("hola");
  });

});
