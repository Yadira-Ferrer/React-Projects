import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
  test('', () => {
    render(<GifExpertApp />);
    screen.debug();
  });
});

// TODO: Realizar pruebas sobre este componente.
/* 
    Evaluar:
    1. Escribir en el input
    2. Escribir en el formulario
    3. Qué pasa si se envía una categoría
 */
