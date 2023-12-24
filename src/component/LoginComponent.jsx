import { useEffect, useState, useReducer, useContext, createContext } from 'react'
import { BrowserRouter as Router,Routes, Route, Outlet, Link, useParams, Navigate, useLocation, useNavigate } from 'react-router-dom';
import styles from '../css/principalComponent.module.css';
import { useAppContext } from '../hooks/authHook.jsx';
import { saveUserData, getUserData } from '../utils/saveUser';
import {useMutation, QueryClient, QueryClientProvider} from '@tanstack/react-query'


const loginMutation = async ({email, password}) => {
  const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
      method: 'POST', 
      headers: { 
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${token}` // Token de autorizacion
      },
      body: JSON.stringify({email, password})
  });

  if(!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
  }

  return response.json()
}

export function Login () {
  // const { state, dispatch } = useAppContext();
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  // const [error, setError] = useState(null)
  const mutation = useMutation({
    mutationFn: loginMutation,
    onSuccess: (data) => {
      console.log('Login exitoso:', data);
    },
    // Funcion si sale mal
    onError: (data) => {
        console.log('Algosalio mal', data)
    }
  })

  console.log(mutation.status)  
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // setError(null)
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de autenticación, por ejemplo, enviar los datos al servidor
    // const data = getUserData()
    // if (data){
    //   if(loginData.email === data.email){
    //     if(loginData.password === data.password) {
    //       dispatch({type: "LOGIN", payload: loginData})
    //       navigate("/")
    //     } else {setError("Contraseña Erronea")}
    //   } else {setError("Email Erroneo")}
    // }

    // console.log('Datos de inicio de sesión:', data);
    mutation.mutate({
      email: loginData.email,
      password: loginData.password
    })
  };

  useEffect(() => {
    // Este efecto se ejecutará cada vez que el estado de `error` cambie.
    // Puedes realizar acciones adicionales aquí si es necesario.
    console.log('Estado de error:', mutation.error);
  }, [mutation.error]);
  
  return (
    <div>
      {mutation.isError && <p style={{ color: 'red' }}>Error: {mutation.error.message}</p>}
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

        <button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? 'Iniciando Sesión...' : 'Iniciar Sesión'}
        </button>
      </form>
    </div>
  );
};
  