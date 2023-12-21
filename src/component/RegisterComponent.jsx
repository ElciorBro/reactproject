import { useEffect, useState, useReducer, useContext, createContext } from 'react'
import { BrowserRouter as Router,Routes, Route, Outlet, Link, useParams, Navigate, useLocation, useNavigate } from 'react-router-dom';
import styles from '../css/registrationForm.module.css';
// import { saveUser } from '../utils/saveUser.js'

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
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: null,
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
      // saveUserDataToJson(user);
      navigate('/login');
    };
    
      return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Nombre:
            <input className={styles.input} type="text" name="name" value={user.name} onChange={handleInputChange} />
          </label>
          <br />
    
          <label className={styles.label}>
            Correo Electrónico:
            <input
              className={styles.input}
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
          </label>

          <label className={styles.label}>
            Contraseña:
            <input
              className={styles.input}
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
            />
          </label>

          <label className={styles.label}>
            Teléfono:
            <input
              className={styles.input}
              type="tel"
              name="telefono"
              value={user.telefono}
              onChange={handleInputChange}
            />
          </label>

          <label className={styles.label}>
            Dirección:
            <input
              className={styles.input}
              type="text"
              name="Direccion"
              value={user.Direccion}
              onChange={handleInputChange}
            />
          </label>

          <label className={styles.label}>
            Aceptar Ofertas:
            <input
              className={styles.input}
              type="checkbox"
              name="Ofertas"
              checked={user.Ofertas}
              onChange={handleInputChange}
            />
          </label>

          <label className={styles.label}>
            Fecha de Nacimiento:
            <input
              className={styles.input}
              type="date"
              name="fechaNacimiento"
              value={user.fechaNacimiento}
              onChange={handleInputChange}
            />
          </label>

          <label className={styles.label}>
            Género:
            <select
              className={styles.input}
              name="gender"
              value={user.gender}
              onChange={handleInputChange}
            >
              <option value="">Seleccionar</option>
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
              <option value="other">Otro</option>
            </select>
          </label>    
          <button type="submit">Registrarse</button>
        </form>
      );
    };
