import { render, screen } from "@testing-library/react";
import App from "../src/App.jsx";
import { useFetchGifs } from "../src/hooks/useFetchGifs.js";

jest.mock("../src/hooks/useFetchGifs.js");

describe("Pruebas en <App />", () => {
  const category = "One Punch";
  test("Debe de mostrar loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      loading: true,
    });
    render(<App />);
    expect(screen.getByText("Loading..."));
  });

  test("Debe mostrar imagenes cuando se realiza el useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Cualquier cosa",
        url: "https://localhost/cualquier/cosa.jpg",
      },
    ];
    useFetchGifs.mockReturnValue({
      gifs: gifs,
      loading: false,
    });

    render(<App />);
    expect(screen.getAllByTestId("gif-card").length).toBe(gifs.length);
  });

  test("Debe renderizar NavBar y SearchBar correctamente", () => {
    render(<App />);

    expect(screen.getByRole("navigation")).toBeTruthy();
    expect(screen.getByRole("form")).toBeTruthy();
  });
});
