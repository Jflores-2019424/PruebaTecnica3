import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Ticket = () => {
  const navigate = useNavigate();

  const onBack = () =>{
    navigate("/",{
        replace: true
    })
}

  return (
    <div className='container'>
      <h1>Pelicula</h1>
      <select>
        <option value="">Escoja su Pelicula...</option>
      </select>
      <h1>Fecha</h1>
      <input type="date"/>
      <br />
      <button>
        <i className="fa-solid fa-cart-shopping"></i>
      </button>

      <button
      onClick={onBack}
      >
        <i className="fa-solid fa-house"></i>
      </button>
    </div>
  )
}
