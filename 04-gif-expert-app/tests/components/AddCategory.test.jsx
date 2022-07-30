import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
  test('Debe cambiar el valor del input', () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'Rugrats' } });

    expect(input.value).toBe('Rugrats');
    //screen.debug();
  });

  test('Debe llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Rugrats';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    //screen.debug();
    expect(input.value).toBe('');
    // Evalua que la función sea llamada
    expect(onNewCategory).toHaveBeenCalled();
    // Evalua que la función sea llamada una sola vez
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    // Evalua que la función sea llamada recibiendo como argumento el valor de inputValue
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('No debe llamar a onNewCategory si el input está vació', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    // Las dos pruebas son equivalentes.
    // expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});

/* 
  Un 'Mock' en el contexto de testing es una simulación, es decir,
  no es la implementación real de la función, es una simulación de esa función.
  Al ser un jest-mock nosotros tenemos el control absoluto de esa función.
*/
