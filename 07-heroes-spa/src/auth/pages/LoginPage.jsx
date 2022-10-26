import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate('/', { replace: true });
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
