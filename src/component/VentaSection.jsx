import { useEffect, useState, useReducer, useContext, createContext } from 'react';
import { BrowserRouter as Router,Routes, Route, Outlet, Link, useParams, Navigate, useLocation } from 'react-router-dom';

export function NewProduct() {
    return <h1>Seccion para agregar nuevo producto</h1>
}