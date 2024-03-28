import { authReducer } from '../../../src/auth/context/authReducer';
import { types } from '../../../src/auth/types/types';

describe('Pruebas en authReducer', () => {
  test('Debe retornar el estado por defecto', () => {
    const state = authReducer({ logged: false }, {});

    expect(state).toEqual({ logged: false });
  });

  test('Debe (login) llamar el login autenticar y establecer el usuario', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Joel',
        id: '123',
      },
    };

    const state = authReducer({ logged: false }, action);

    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test('Debe realizar (logout), borrar el nombre del usuario y establecer logged en false', () => {
    const state = {
      logged: true,
      user: {
        id: '123',
        name: 'Pedro',
      },
    };

    const action = {
      type: types.logout,
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual({ logged: false });
  });
});
