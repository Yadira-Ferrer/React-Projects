import { useState } from 'react';

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
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
