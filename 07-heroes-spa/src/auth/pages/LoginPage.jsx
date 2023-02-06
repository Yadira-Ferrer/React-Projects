import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    login('Yadira Ferrer');
    navigate(lastPath, { replace: true });
  };

  return (
    <div className="container mt-5">
      <div className="login-card">
        <h1 className="display-4">Login</h1>
        <button className="btn btn-dark" onClick={onLogin}>
          Ingresar
        </button>
      </div>
    </div>
  );
};
