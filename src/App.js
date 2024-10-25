
import './App.css';
import React from "react";
import Images from "./components/Images";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Artwork from './pages/Artwork';
import Account from './pages/Account';
import { Routes, Route } from "react-router-dom";


function App() {
  return (

    <>
      
      <div>
      
        <Routes>
          
          <Route path='/' element={<Home />}> </Route>
          <Route path='Login' element={<Login />}></Route>
          <Route path='Signup' element={<Signup />}></Route>
          <Route path='Artwork' element={<Artwork />}></Route>
          <Route path='Account' element={<Account />}></Route>
          
        </Routes>
        
      </div>


    </>

  );
}


export default App;

