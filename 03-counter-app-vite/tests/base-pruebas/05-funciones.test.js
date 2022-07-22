import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {
  test('getUser debe de retornar un objeto', () => {
    const testuser = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };
    const user = getUser();
    // Cuando se comparan dos objetos se hace en base a su posición en memoria
    // para comparar objetos puede utilizar toEqual o toStrictEqual
    expect(testuser).toEqual(user);
  });

  test('getUsuarioActivo debe retornar un objeto', () => {
    const name = 'Fernando';
    const user = getUsuarioActivo(name);

    expect(user).toStrictEqual({
      uid: 'ABC567',
      username: name,
    });
  });
});
