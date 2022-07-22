import {
  getHeroeById,
  getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe retornar un héroe dado un ID', () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  });

  test('getHeroeById debe retornar "undefined" si no existe el ID', () => {
    const id = 100;
    const hero = getHeroeById(id);

    // toBeFalsy evalua que sea null | undefined | false
    expect(hero).toBeFalsy();
  });

  test('getHeroesByOwner debe retornar un arreglo con 3 elementos con heroes de DC', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(3);
    expect(heroes).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' },
    ]);
  });

  test('getHeroesByOwner debe retornar un arreglo con 2 elementos heroes de Marvel', () => {
    const owner = 'Marvel';
    const result = getHeroesByOwner(owner);

    expect(result.length).toBe(2);
    expect(result).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });
});
