import React, { useEffect, useState } from 'react'
import { listTicket } from './ApiListTicket';
import { deleteTicket } from './ApiDeleteTicket';
import Swal from 'sweetalert2';

export const TicketCard = () => {

  const [ticket, setTicket] = useState([])
    useEffect(() =>{
        const fetchData = async () =>{
            const result = await listTicket();
            setTicket(result)
        };
        fetchData();
    }, [])

    const print = async (id) => {
    
      const result = await deleteTicket(id);
      if (result) {
        setTicket((prevTicket) => prevTicket.filter((ticket) => ticket._id !== id));
    
        Swal.fire({
          icon: 'success',
          title: 'Genial',
          text: 'Se ha eliminado la reservacion correctamente',
          confirmButtonText: 'Ok',
        });
      }
    };

  return (
    <div>
      {ticket.map((ticketActual, index)=>{
        const id = ticketActual._id
        return(
          <div key={id} className='container col-lg-8 col-lg-offset-2 centered'>
          <div className='card bg-dark m-3 p-2' style={{color: "white"}}>
              <h1>{ticketActual.movieId}</h1>
              <p>{ticketActual.date}</p>
              <p>{ticketActual.seat}</p>
              <button 
              onClick={() => print(id)}
              className='btn btn-danger'>
                Cancelar Reservacion
              </button>
          </div>
          </div>
        )
      })}
    </div>
  )
}