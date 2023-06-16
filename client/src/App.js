import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

function App(){
  return(
    <BrowserRouter>
      <Routes>
      
       <Route path="/"element={<Home/>}></Route>  
       <Route path="/login"element={<Login/>}></Route>
       <Route path="/register"element={<Register/>}></Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App