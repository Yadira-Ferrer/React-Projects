import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'Rugrats';

  // Esta prueba evalua el estado inicial del componente
  test('Debe mostrar el "loading" inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('Debe mostar items cuando se cargan las imágenes useFetchGifs', () => {
    const gifs = [
      { id: 'ABC', title: 'Rugrats', url: 'https://localhost/rugrats.jpg' },
      { id: 'XYZ', title: 'Homero', url: 'https://localhost/rugrats.jpg' },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);
    //screen.debug();
  });
});

/* 
    El componente GifGrid no tiene la responsabilidad de evaluar 
    el correcto funcionamiento del hook 'useFetchGifs'.
*/
