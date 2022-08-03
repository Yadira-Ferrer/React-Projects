import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
  const { formState, onInputChage, onResetForm, username, email, password } =
    useForm({
      username: '',
      email: '',
      password: '',
    });

  //const { username, email, password } = formState;

  return (
    <>
      <h1> Formulario con Custom Hook </h1>
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
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChage}
      />
      <input
        type="password"
        className="form-control  mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChage}
      />
      <button onClick={onResetForm} className="btn btn-info mt-2">
        Reset
      </button>
    </>
  );
};

/* 
    Se recomienda crear efectos (useEffect) específicos por cada acción
    que deseamos ejecutar.
*/
