import { useEffect, useState, useReducer, useContext, createContext } from 'react';
import { BrowserRouter as Router,Routes, Route, Outlet, Link, useParams, Navigate, useLocation } from 'react-router-dom';
import {NavBar, Footer, Layout, NoMatch } from './component/principalComponent.jsx';
import {  Home } from './component/home.jsx';

import './App.css'
import { Login } from './component/login.jsx';
import { Registration } from './component/register.jsx';
import { Carrito } from './component/carrito.jsx';

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path='*' element={<NoMatch/>}></Route>
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;




