import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'Los Simpson',
    'Jimmy Neutron',
  ]);

  const onAddCategory = () => {
    setCategories(['Los chicos del barrio', ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>
      {/* Input - Buscar */}
      <AddCategory setCategories={setCategories} />
      {/* Lista de GifItems */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
