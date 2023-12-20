import { useEffect, useState, useReducer, useContext, createContext } from 'react'
import { BrowserRouter as Router,Routes, Route, Outlet, Link, useParams, Navigate, useLocation } from 'react-router-dom';
import styles from '../css/principalComponent.module.css';

export function Registration() {

    return (
        <>
            <h1>Registracion a Smarthings!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore odio deleniti repellendus ipsa debitis, magni placeat dolore maiores molestias blanditiis.</p>
            <h2>A continuacion puedes rellenar el siguiente formulario de registracion</h2>
            <br />
            <div>
                <p><b>Deseamos que seas parte</b></p>
                <RegistrationForm />
                <p>Es importante que puedas rellenar todos los campos</p>
            </div>

        </>
    )
}


const RegistrationForm = () => {
    const [user, setUser] = useState({
      name: '',
      email: '',
      password: '',
      telefono: '',
      direccion: '',
      Ofertas: null,
      fechaNacimiento: '',
      gender: '',
      online: false
    });
  
    const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
      setUser((prevUser) => ({
        ...prevUser,
        [name]: type === 'checkbox' ? checked : value
      }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Usuario registrado:', user);
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
          </label>
          <br />
    
          <label>
            Correo Electrónico:
            <input type="email" name="email" value={user.email} onChange={handleInputChange} />
          </label>
          <br />
    
          <label>
            Contraseña:
            <input type="password" name="password" value={user.password} onChange={handleInputChange} />
          </label>
          <br />
    
          <label>
            Teléfono:
            <input type="tel" name="telefono" value={user.telefono} onChange={handleInputChange} />
          </label>
          <br />
    
          <label>
            Dirección:
            <input type="text" name="Direccion" value={user.Direccion} onChange={handleInputChange} />
          </label>
          <br />
    
          <label>
            Aceptar Ofertas:
            <input
              type="checkbox"
              name="Ofertas"
              checked={user.Ofertas}
              onChange={handleInputChange}
            />
          </label>
          <br />
    
          <label>
            Fecha de Nacimiento:
            <input
              type="date"
              name="fechaNacimiento"
              value={user.fechaNacimiento}
              onChange={handleInputChange}
            />
          </label>
          <br />
    
          <label>
            Género:
            <select name="gender" value={user.gender} onChange={handleInputChange}>
              <option value="">Seleccionar</option>
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
              <option value="other">Otro</option>
            </select>
          </label>
          <br />
    
          <label>
            Estado en línea:
            <input
              type="checkbox"
              name="online"
              checked={user.online}
              onChange={handleInputChange}
            />
          </label>
          <br />
    
          <button type="submit">Registrarse</button>
        </form>
      );
    };

