import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    /* No recargar la página */
    event.preventDefault();
    /* No enviar cadenas vacias */
    if (inputValue.trim().length <= 1) return;
    /* Añadir la nueva categoria */
    onNewCategory(inputValue.trim());
    /* Limpiar input */
    setInputValue('');
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmit} aria-label="form">
        <input
          type="text"
          placeholder="Buscar Gifs"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </div>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
