import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Pruebas en todoReducer', () => {
  const initialState = [
    {
      id: 1,
      description: 'Demo Todo',
      done: false,
    },
  ];

  test('Debe retornar el estado inicial', () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test('Debe agregar un TODO', () => {
    const action = {
      type: '[TODO] Add Item',
      payload: {
        id: 2,
        description: 'Nuevo TODO #2',
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('Debe eliminar un TODO', () => {});

  test('Debe realizar el toggle del TODO', () => {});
});
