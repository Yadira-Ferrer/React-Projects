import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'Los Simpson',
    'Jimmy Neutron',
  ]);

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
