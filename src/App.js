import React,{useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Login from './pages/LoginPage'
import Register from './pages/RegisterPage'
import {Route,Routes} from 'react-router-dom'
import { getFromSession} from "./utills.js";
function App() {
  function verifyLoggedIn() {
    const token = getFromSession("auth-token");
    return token ? true : false;
  }

  useEffect(() => {
    const loggedIn = verifyLoggedIn();
    console.log(loggedIn, "--------------");
    if (!loggedIn && window.location.pathname !=="/login") {
      window.history.replaceState({}, undefined, "/login");
      window.location.reload();
    } else {
      if (window.location.pathname === "/login" && loggedIn) {
        window.history.back();
        window.location.reload();
      }
    }
  }, [])
  return (
    <div className="App">
     <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Register/>} />
     </Routes>
    </div>
  );
}

export default App;
