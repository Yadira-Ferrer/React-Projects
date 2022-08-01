import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'yadfer',
    email: 'yadiraferrer@gmail.com',
  });

  const { username, email } = formState;
  const onInputChage = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    //console.log('useEffect called :O');
  }, []); // [] -> useEffect se ejecuta una sola vez

  useEffect(() => {
    //console.log('formState changed...');
  }, [formState]);

  useEffect(() => {
    //console.log('email changed...');
  }, [email]);

  return (
    <>
      <h1> Formulario Simple </h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChage}
      />
      <input
        type="email"
        className="form-control  mt-2"
        placeholder="yyfm.95@gmail.com"
        name="email"
        value={email}
        onChange={onInputChage}
      />
      {username === 'yadfer' && <Message />}
    </>
  );
};

/* 
    Se recomienda crear efectos (useEffect) específicos por cada acción
    que deseamos ejecutar.
*/
