import React from 'react'

export const TicketCard = () => {
  return (
    <div className='container col-lg-8 col-lg-offset-2 centered'>
    <div className='card bg-dark m-3 p-2' style={{color: "white"}}>
        <h1>Movie Title</h1>
        <p>Date</p>
        <button className='btn btn-danger'>
          Cancelar
        </button>
    </div>
    </div>
  )
}