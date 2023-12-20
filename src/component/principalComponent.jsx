import React from 'react';
import { useEffect, useState, useReducer, useContext, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styles from '../css/principalComponent.module.css';
import { Home } from './home.jsx';
import { Registration } from './register';
import { Login } from './login';
import { Carrito } from './carrito';

function NavBar() {
  console.log("renderizando navbar");

  return (
    <nav className={styles.navbarContainer}>
      <Link to="/" className={styles.logo}>Logo</Link>
      <Link to="/login" className={styles.links}>Login</Link>
      <Link to="/register" className={styles.links}>Register</Link>
      <input className={styles.links} type="text" placeholder="Search" />
      <Link to="/carrito" className={styles.links}>Carrito</Link>
    </nav>
  );
}

function NoMatch() {
    return (
        <h1>Pagina no encontrada</h1>
    )
}

function Layout({ children }) {
    return (
      <div>
        <NavBar />
        <CategoryNav />
        <div>
          {children}
        </div>
        <Footer />
      </div>
    );
}

function CategoryNav() {
  console.log("renderizando CategoryNav");

  return (
    <nav className={styles.categoryNavContainer}>
      <div className="nuevo"><Link to="/">Home</Link></div>
      <div className="art1"><Link to="/nuevo">Lo nuevo</Link></div>
      <div className="art2"><Link to="/productos">Productos</Link></div>
      <div className="art3"><Link to="/liquidacion">Liquidacion</Link></div>
      <div className="art4"><Link to="/contactenos">Contactenos</Link></div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.socialIcons}>
        <a href="#" title="Facebook"><i className="fab fa-facebook"></i></a>
        <a href="#" title="Twitter"><i className="fab fa-twitter"></i></a>
        <a href="#" title="Instagram"><i className="fab fa-instagram"></i></a>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.address}>123 Main St, Cityville</div>
        <div className={styles.phone}>Phone: +1 123-456-7890</div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </footer>
  );
}

export { NavBar, CategoryNav, Footer, NoMatch, Layout };
