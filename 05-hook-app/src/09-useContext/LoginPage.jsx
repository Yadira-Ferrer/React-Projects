import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>
        LoginPage | <i>{user?.name}</i>
      </h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button
        className="btn btn-info"
        onClick={() =>
          setUser({ id: 456, name: 'Stela', email: 'estela@gmail.com' })
        }
      >
        {' '}
        Establecer Usuario{' '}
      </button>
    </>
  );
};
