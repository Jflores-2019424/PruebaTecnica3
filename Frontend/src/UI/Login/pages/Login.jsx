import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../helpers/ApiLogin'
import Swal from 'sweetalert2';
import "../../../index.css"

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async(e) =>{
    e.preventDefault();
    const result = await login(email, password);
    if(result){
        Swal.fire({
            icon: "success",
            title: "Genial!",
            text: "Ha iniciado sesión correctamente!",
            confirmButtonText: "Ok",
        }).then(r =>{
            if(r.isConfirmed){
                window.location.href = "/";
            } else {
                window.location.href = "/login";
            }
        });
    }
}

const onRegister = () =>{
  navigate("/register",{
      replace: true
  })
}

  return (
    <div className='form'>
    <form className='container bg-secondary p-3 position-absolute top-50 start-50 translate-middle'>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={({target: {value}}) => setEmail(value)} className="form-control form-control-sm" placeholder="Email"/>
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input type="password" value={password} onChange={({target: {value}}) => setPassword(value)} className="form-control form-control-sm" placeholder="Password"/>
        </div>

        <button onClick={(e) => onLogin(e)} className="btn btn-primary m-2">Login</button>
        <button onClick={onRegister} className="btn btn-primary">Register</button>
    </form>
    </div>
  )
}
