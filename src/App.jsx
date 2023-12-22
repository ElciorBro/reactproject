import { useEffect, useState, useReducer, useContext, createContext } from 'react';
import { BrowserRouter as Router,Routes, Route, Outlet, Link, useParams, Navigate, useLocation } from 'react-router-dom';
import {NavBar, Footer, Layout, NoMatch } from './component/PrincipalComponents.jsx';
import {  Home } from './component/Home.jsx';
import { AppProvider } from './hooks/authHook.jsx';

import './App.css'
import { Login } from './component/LoginComponent.jsx';
import { Registration } from './component/RegisterComponent.jsx';
import { Carrito } from './component/CarritoComponent.jsx';
import { ProductSection } from './component/ProductComponent.jsx';


function App() {
  return (
    <>
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/productos" element={<ProductSection />} />
              <Route path='*' element={<NoMatch/>}></Route>
            </Route>
          </Routes>
        </Router>
      </AppProvider>
    </>
  );
}


export default App;




