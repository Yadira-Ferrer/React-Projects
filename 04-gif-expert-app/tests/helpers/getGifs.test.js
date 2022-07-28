import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs()', () => {
  test('Debe retornar una arreglo de gifs', async () => {
    jest.setTimeout(15000);
    const gifs = await getGifs('Rugrats');
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
