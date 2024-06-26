import { render, screen } from '@testing-library/react';
import { PrivateRoute } from '../../src/router/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';

describe('Pruebas en <PrivateRoute />', () => {
  test('Debe mostrar el "children" si esta autenticado', () => {
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        id: '123',
        name: 'Monkey',
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PrivateRoute>
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Ruta privada')).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'lastPath',
      '/search?q=batman'
    );
  });
});
