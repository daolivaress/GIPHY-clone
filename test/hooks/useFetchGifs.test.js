import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en el hook useFecthGifs", () => {
  test("Debe regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("One punch"));
    const { gifs, loading } = result.current;
    expect(gifs).toEqual([]);
    expect(loading).toBe(true);
  });

  test("Debe de retornar un arreglo de gifs y el loading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("One punch"));

    await waitFor(
      () => expect(result.current.gifs.length).toBeGreaterThan(0),
    );

    const { gifs, loading } = result.current;

    expect(gifs.length).toBeGreaterThan(0);
    expect(loading).toBe(false);
  });
});
