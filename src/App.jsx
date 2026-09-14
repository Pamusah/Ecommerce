import { useState } from "react";
import './App.css'
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import NavBar from "./components/NavBar";
import Auth from "./pages/Auth";
import AuthProvider from "./Context/AuthContext";

function App(){
  return (
    <AuthProvider>
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/checkout'element={<Checkout/>}/>
      </Routes>
    </div>
    </AuthProvider>
  )
}
export default App;