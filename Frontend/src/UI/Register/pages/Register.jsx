import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Register = () => {

  const navigate = useNavigate();

  const onLogin = () =>{
    navigate("/login",{
        replace: true
    })
}

  return (
    <div className='container'>
      <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control form-control-sm" placeholder="Email"/>
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input type="text" className="form-control form-control-sm" placeholder="Password"/>
        </div>
        <div className="form-group">
          <label>Nombres</label>
          <input type="text" className="form-control form-control-sm" placeholder="Password"/>
        </div>
        <div className="form-group">
          <label>Apellidos</label>
          <input type="text" className="form-control form-control-sm" placeholder="Password"/>
        </div>
        <div className="form-group">
          <label>Numero de telefono</label>
          <input type="number" className="form-control form-control-sm" placeholder="Password"/>
        </div>

        <button className='btn btn-primary m-2' onClick={onLogin}>Cancelar</button>
        <button className='btn btn-primary' onClick={onLogin}>Registrarse</button>
    </div>
  )
}
