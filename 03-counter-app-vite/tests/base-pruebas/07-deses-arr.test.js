import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr', () => {
  test('Debe retornar un string y un número', () => {
    const [letter, num] = retornaArreglo();

    expect(letter).toBe('ABC');
    expect(num).toBe(123);

    expect(typeof letter).toBe('string');
    expect(typeof num).toBe('number');

    expect(letter).toEqual(expect.any(String));
  });
});
