import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { listMovies } from '../MovieCard/ApiMovies';
import { createTicket } from './ApiTicket';
import Swal from 'sweetalert2';

export const Ticket = () => {
  const navigate = useNavigate();

  const seats = ["A01", "A02", "A03", "A04", "A05", "A06", "A07", "A08", "A09", "A10",
                  "B01", "B02", "B03", "B04", "B05", "B06", "B07", "B08", "B09", "B10",
                  "C01", "C02", "C03", "C04", "C05", "C06", "C07", "C08", "C09", "C10",
                  "D01", "D02", "D03", "D04", "D05", "D06", "D07", "D08", "D09", "D10",
                  "E01", "E02", "E03", "E04", "E05", "E06", "E07", "E08", "E09", "E10"]

  const [movie, setMovie] = useState([])
  const [movieId, setMovieId] = useState("")
  const [seat, setSeat] = useState("")
  const [date, setDate] = useState("")

  const print = async (e) => {
    e.preventDefault();
  
    const result = await createTicket(movieId, seat, date);
    if (result) {
      Swal.fire({
        icon: 'success',
        title: 'Genial',
        text: 'Asiento reservado',
        confirmButtonText: 'Ok',
      }).then((r) => {
        if (r.isConfirmed) {
          navigate('/');
        } else {
          navigate('/');
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo crear la reservacion',
        confirmButtonText: 'Ok',
      });
    }
  };
  

    useEffect(() =>{
        const fetchData = async () =>{
            const result = await listMovies();
            setMovie(result)
        };
        fetchData();
    }, [])

  const onBack = () =>{
    navigate("/",{
        replace: true
    })
}

  return (
    <div className='container'>
      <h1>Pelicula</h1>
      <select onChange={({target: {value}}) => setMovieId(value)} className='form-select'>
        <option>Seleccione una pelicula....</option>
          {movie.map((movieActual, index) =>{ 
                const id = movieActual._id
                return(
                    <option key={id} value={movieActual.title}>{movieActual.title}</option>
                );
                })} 
      </select>
      <h1>Asiento</h1>
      <select onChange={({target: {value}}) => setSeat(value)} className='form-select'>
        {seats.map((x) =>{
          return(
            <option key={x.toString()} value={x}>{x}</option>
          )
        })

        }
      </select>
      <h1>Fecha</h1>
      <input type="date" onChange={({target: {value}}) => setDate(value)} value={date} className='form-control' />
      <br />
      <button
      onClick={(e) =>print(e)}
       className='btn btn-info'
      >
        <i className="fa-solid fa-cart-shopping"></i>
      </button>

      <button
      className='btn btn-primary m-3'
      onClick={onBack}
      >
        <i className="fa-solid fa-house"></i>
      </button>
    </div>
  )
}
