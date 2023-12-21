import { useEffect, useState, useReducer, createContext, useContext } from 'react'
import { BrowserRouter as Router,Routes, Route, Outlet, Link, useParams } from 'react-router-dom';


const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = {
    name: null,
    email: '',
    password: '',
    telefono: '',
    direccion: '',
    Ofertas: null,
    fechaNacimiento: '',
    gender: '',
    online: false
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: action.payload,
          online: true,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          online: false,
        };
      // Agrega más casos según tus necesidades
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useAppContext = () => {
  return useContext(AppContext);
};
