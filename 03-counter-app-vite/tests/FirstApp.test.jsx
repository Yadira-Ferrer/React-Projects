import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
  /* test('Debe coincidir con el snapshot', () => {
    const title = 'Hola, soy FirtsAppTest';
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  }); */

  test('Debe mostrar el título en un h1', () => {
    const title = 'Hola, soy FirtsAppTest';
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );

    expect(getByText(title)).toBeTruthy();

    /* const h1 = container.querySelector('h1');
    expect(h1.innerHTML).toContain(title); */

    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('Debe mostrar el subtitulo enviado por props', () => {
    const title = 'Hola, soy FirtsAppTest';
    const subtitle = 'Soy un subtitulo';
    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subtitle} />
    );

    expect(getAllByText(subtitle).length).toBe(2);
  });
});
