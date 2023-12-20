import { useEffect, useState, useReducer, useContext, createContext } from 'react'
import { BrowserRouter as Router,Routes, Route, Outlet, Link, useParams, Navigate, useLocation } from 'react-router-dom';
import styles from '../css/principalComponent.module.css';

export function Login() {
    return <h1>Esta es la pagina del Login</h1>
}