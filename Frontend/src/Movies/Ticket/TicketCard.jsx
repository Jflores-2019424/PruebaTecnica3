import React, { useEffect, useState } from 'react'
import { listTicket } from './ApiListTicket';

export const TicketCard = () => {

  const [ticket, setTicket] = useState([])
    useEffect(() =>{
        const fetchData = async () =>{
            const result = await listTicket();
            setTicket(result)
        };
        fetchData();
    }, [])

  return (
    <div>
      {ticket.map((ticketActual, index)=>{
        const id = ticketActual._id
        return(
          <div key={id} className='container col-lg-8 col-lg-offset-2 centered'>
          <div className='card bg-dark m-3 p-2' style={{color: "white"}}>
              <h1>{ticketActual.movieId}</h1>
              <p>{ticketActual.date}</p>
              <button className='btn btn-danger'>
                Cancelar
              </button>
          </div>
          </div>
        )
      })}
    </div>
  )
}