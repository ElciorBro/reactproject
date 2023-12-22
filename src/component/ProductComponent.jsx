import { useEffect, useState, useReducer, useContext, createContext } from 'react'
import { BrowserRouter as Router,Routes, Route, Outlet, Link, useParams, Navigate, useLocation, useNavigate } from 'react-router-dom';
import styles from '../css/registrationForm.module.css';
import { useAppContext } from '../hooks/authHook.jsx';
import { useFetchData } from '../hooks/productHook';

export function ProductSection() {
    const { state, dispatch } = useAppContext();
    const { data, error, isLoading } = useFetchData();
  
    if (isLoading) {
      return <p>Se están cargando los datos...</p>;
    }
  
    if (error) {
      return <p>Hay un error: {error}</p>;
    }
  
    return (
      <>
        <h1>Sección con todos los productos</h1>
        <div>
          {data.map((producto) => (
            <div key={producto.id}>
              <img src={producto.image} alt="" />
              <h3>{producto.title}</h3>
              <p>Categoría: {producto.category.name}</p>
              {state.online?(
                <p>Precio: {producto.price}</p>
              ):(
                  <p>Se requiere estar registrado para ver el precio</p>
              )}
              <p>{producto.description}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
  