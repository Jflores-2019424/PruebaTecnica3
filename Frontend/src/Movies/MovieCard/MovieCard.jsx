import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { listMovies } from './ApiMovies'

export const MovieCard = () => {

    const [movie, setMovie] = useState([])
    useEffect(() =>{
        const fetchData = async () =>{
            const result = await listMovies();
            setMovie(result)
        };
        fetchData();
    }, [])
  return (
            <div>
                {movie.map((movieActual, index) =>{
                const id = movieActual._id || ''
                return(
                    <div key={id} className="card bg-secondary m-2" style={{width: 18 + "rem", display: "inline-block", maxHeight: 80 + "vh"}}>
                        <div className="row">
                        <img className='card-img-top' style={{height: 50 + "vh"}} src={movieActual.image}/>
                                <div className="card-body">

                                    <h5>{movieActual.title}</h5>
                                    <p>{movieActual.clasification}</p>                                                      
                                </div>
                        </div>
                    </div>);
                })}
            </div>
  )
}
