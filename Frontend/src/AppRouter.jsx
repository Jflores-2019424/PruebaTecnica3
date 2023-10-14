import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./UI/Login/pages/Login";
import { App } from "./App.jsx"
import { Register } from "./UI/Register/pages/Register"

export const AppRouter = () =>{
  return(  
    <>
      <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/*" element={<App/>}/>
      </Routes>
    </>
  )
}