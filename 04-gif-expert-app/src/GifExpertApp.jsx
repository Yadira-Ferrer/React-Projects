import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Los Simpson']);

  const onAddCategory = (newCategory) => {
    /* Validar que no existan repetidos */
    if (categories.includes(newCategory)) return;
    /* Añadir categoría */
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>
      {/* Input - Buscar */}
      <AddCategory onNewCategory={onAddCategory} />
      {/* Lista de GifItems */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

//TODO: Validar que no se inserten los mismos elementos No-CaseSensitive
