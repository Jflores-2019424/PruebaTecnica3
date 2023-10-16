import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUser } from '../helpers/ApiRegister';
import Swal from 'sweetalert2';

export const Register = () => {

  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")

  const print = async (e) => {
    e.preventDefault();
  
    const result = await createUser(name, lastname, email, password, phone);
    if (result) {
      Swal.fire({
        icon: 'success',
        title: 'Genial',
        text: 'Se ha creado el usuario correctamente',
        confirmButtonText: 'Ok',
      }).then((r) => {
        if (r.isConfirmed) {
          navigate('/login');
        } else {
          navigate('/login');
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo crear el usuario',
        confirmButtonText: 'Ok',
      });
    }
  };

  const onLogin = () =>{
    navigate("/login",{
        replace: true
    })
}

  return (
    <div className='container bg-secondary p-3 position-absolute top-50 start-50 translate-middle'>
      <div className="form-group">
          <label>Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control form-control-sm" placeholder="Email"/>
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input type="text" onChange={(e) => setPassword(e.target.value)} className="form-control form-control-sm" placeholder="Password"/>
        </div>
        <div className="form-group">
          <label>Nombres</label>
          <input type="text" onChange={(e) => setName(e.target.value)} className="form-control form-control-sm" placeholder="Password"/>
        </div>
        <div className="form-group">
          <label>Apellidos</label>
          <input type="text" onChange={(e) => setLastname(e.target.value)} className="form-control form-control-sm" placeholder="Password"/>
        </div>
        <div className="form-group">
          <label>Numero de telefono</label>
          <input type="number" onChange={(e) => setPhone(e.target.value)} className="form-control form-control-sm" placeholder="Password"/>
        </div>

        <button className='btn btn-primary m-2' onClick={onLogin}>Cancelar</button>
        <button className='btn btn-primary' onClick={print}>Registrarse</button>
    </div>
  )
}
