import { useEffect, useState, useReducer, useContext, createContext } from 'react'
import { BrowserRouter as Router,Routes, Route, Outlet, Link, useParams, Navigate, useLocation } from 'react-router-dom';
import styles from '../css/home.module.css';

export function Home() {
    return (
        <>
            <FirstView />
            <SecondView />
        </>
    )
}

export function FirstView() {
    console.log("renderizando first view")

    return (
        <div className={styles.firstViewContainer}>
            <h1>Bienvenido a Smarthings!</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, blanditiis vero labore numquam similique consequatur?</p>
            <br />
            <br />
            <h2>Disfruta de los siguientes ofertones</h2>
            <br />
            <br />
            <p>Estas ofertas están disponibles hasta agotar Stock</p>
        </div>
    );
}

const CATEGORY = ['Categoria 1', 'categoria 2', 'categoria 3', 'categoria 4', 'categoria 5']

export function SecondView() {
    console.log("renderizando secondView")

    return (
        <div className={styles.secondViewContainer}>
            <h2>EXPLORA TODAS NUESTRAS CATEGORIAS DE PRODUCTOS</h2>
            <div className={styles.categoryList}>
                {CATEGORY.map((cat, index) => (
                    <div key={index}>
                        <a href="">{cat}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

