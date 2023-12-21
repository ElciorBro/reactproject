import { useEffect, useState, useReducer, useContext, createContext } from 'react'
import { BrowserRouter as Router,Routes, Route, Outlet, Link, useParams, Navigate, useLocation } from 'react-router-dom';
import styles from '../css/principalComponent.module.css';

// export function Login() {
//     return <h1>Esta es la pagina del Login</h1>
// }


export function Login () {
    const [loginData, setLoginData] = useState({
      username: '',
      password: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setLoginData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes manejar la lógica de autenticación, por ejemplo, enviar los datos al servidor
      console.log('Datos de inicio de sesión:', loginData);
    };
  
    return (
      <div>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre de usuario:
            <input
              type="text"
              name="username"
              value={loginData.username}
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
  