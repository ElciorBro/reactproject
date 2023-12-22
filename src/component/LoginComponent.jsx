import { useEffect, useState, useReducer, useContext, createContext } from 'react'
import { BrowserRouter as Router,Routes, Route, Outlet, Link, useParams, Navigate, useLocation, useNavigate } from 'react-router-dom';
import styles from '../css/principalComponent.module.css';
import { useAppContext } from '../hooks/authHook.jsx';
import { saveUserData, getUserData } from '../utils/saveUser';


// export function Login() {
//     return <h1>Esta es la pagina del Login</h1>
// }


export function Login () {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null)
  
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError(null)
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de autenticación, por ejemplo, enviar los datos al servidor
    const data = getUserData()
    if (data){
      if(loginData.email === data.email){
        if(loginData.password === data.password) {
          dispatch({type: "LOGIN", payload: loginData})
          navigate("/")
        } else {setError("Contraseña Erronea")}
      } else {setError("Email Erroneo")}
    }
    console.log('Datos de inicio de sesión:', data);
  };

  useEffect(() => {
    // Este efecto se ejecutará cada vez que el estado de `error` cambie.
    // Puedes realizar acciones adicionales aquí si es necesario.
    console.log('Estado de error:', error);
  }, [error]);
  
  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Contraseña:
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};
  