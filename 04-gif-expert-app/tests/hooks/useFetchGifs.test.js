import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en Hook useFetchGifs', () => {
  // El estado inicial es images = [] e isLoading = true
  test('Debe regresar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs('Rugrats'));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('Debe retornar un arreglo de imagenes e isLoading en false', async () => {
    const { result } = renderHook(() => useFetchGifs('Rugrats'));

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      { timeout: 6000 }
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
