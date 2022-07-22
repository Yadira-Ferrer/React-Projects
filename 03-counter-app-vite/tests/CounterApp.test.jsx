import { render, screen, fireEvent } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en <CounterApp />', () => {
  const value = 10;

  test('Debe coincidir con el snapshot', () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar el valor inicial de 10', () => {
    render(<CounterApp value={value} />);
    //expect(screen.getByText(value)).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(
      String(value)
    );
  });

  test('Debe incrementar con el botón "+1"', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText('11')).toBeTruthy();
  });

  test('Debe de decrementar con el botón "-1"', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('-1'));
    //screen.debug();
    expect(screen.getByText('9')).toBeTruthy();
  });

  test('Debe funcionar el botón "Reset"', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
    //fireEvent.click(screen.getByText('Reset'));
    //screen.debug();

    expect(screen.getByText(value)).toBeTruthy();
  });
});
