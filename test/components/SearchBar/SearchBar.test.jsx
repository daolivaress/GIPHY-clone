import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "../../../src/components/SearchBar/SearchBar";

describe("Pruebas en <SearchBar/>", () => {
  test("Debe de cambiar el valor de la caja de texto", () => {
    render(<SearchBar onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "Sonic" } });
    expect(input.value).toBe("Sonic");
  });

  test("Debe de llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "Sonic";
    const onNewCategory = jest.fn();
    render(<SearchBar onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe(inputValue);

    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("No debe de llamar onNewCategory si el input esta vacio", () => {
    const onNewCategory = jest.fn();
    render(<SearchBar onNewCategory={onNewCategory} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
