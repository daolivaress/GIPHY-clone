import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en getGifs()", () => {
  test("Debe retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("One Punch");
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toHaveProperty("id", "title", "url", "authorName", "authorAvatar", "is_verified");
  });

  test("Debe retornar un arreglo vacio si la categoria no existe", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
