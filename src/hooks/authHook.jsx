import { useEffect, useState, useReducer, createContext, useContext } from 'react'
import { BrowserRouter as Router,Routes, Route, Outlet, Link, useParams } from 'react-router-dom';

function useAuth() {
  const [userConected, setUserConected] = useState(null)  

  
  function handleLogin({user}) {
    setUserConected(user)
  }

  function handleLogout({user}) {
    setUserConected(user)
  }

  return {
    userConected,
    handleLogin,
    handleLogout
  }


};


export default useAuth
