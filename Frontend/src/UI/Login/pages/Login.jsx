import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const onLogin = () =>{
    navigate("/",{
        replace: true
    })
}

const onRegister = () =>{
  navigate("/register",{
      replace: true
  })
}

  return (
    <form className='container bg-secondary p-3 position-absolute top-50 start-50 translate-middle'>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control form-control-sm" placeholder="Email"/>
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input type="password" className="form-control form-control-sm" placeholder="Password"/>
        </div>

        <button onClick={onLogin} className="btn btn-primary m-2">Login</button>
        <button onClick={onRegister} className="btn btn-primary">Register</button>
    </form>
  )
}
