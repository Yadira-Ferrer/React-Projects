import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas en useForm', () => {
  const initialForm = {
    name: 'Yadira',
    email: 'yferrer@gmail.com',
  };

  test('Debe retornar los valores por defecto.', () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChage: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test('Debe cambiar el nombre del formulario', () => {
    const newValue = 'Camille';
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChage } = result.current;

    act(() => {
      onInputChage({ target: { name: 'name', value: newValue } });
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  test('Debe reiniciar el formulario', () => {
    const newValue = 'Camille';
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChage, onResetForm } = result.current;

    act(() => {
      onInputChage({ target: { name: 'name', value: newValue } });
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
