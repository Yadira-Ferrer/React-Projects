import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <span>{name}</span>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  //title: 'No hay título.',
  subTitle: 'No hay subtitulo.',
  name: 'Yadira Ferrer',
};

/*
 * Regla:
 * Siempre se debe retornar un elemento padre
 * y todos los elementos que deseemos dentro de el.
 * Para ello se utiliza <> ... </>
 */

/* Props - propiedades que se le envían a la función
 * Es un objeto que puede tener muchas propiedades.
 */
