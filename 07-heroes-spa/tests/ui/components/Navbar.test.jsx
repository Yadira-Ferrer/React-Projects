import { render, screen, fireEvent } from '@testing-library/react';
import { AuthContext } from '../../../src/auth';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from '../../../src/ui';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('Pruebas en <Navbar />', () => {
  const contextValue = {
    logged: true,
    user: {
      id: '123',
      name: 'Monkey',
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test('Debe mostrar el nombre del usuario autenticado', () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(contextValue.user.name)).toBeTruthy();

    //screen.debug();
  });

  test('Debe llamar el logout y navegar cuando se hace click en el boton', () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const logoutBtn = screen.getByRole('button');
    fireEvent.click(logoutBtn);

    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
  });
});
