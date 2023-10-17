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
                    <div key={id} className="card bg-secondary m-2">
                        <div className="row">
                            <div className="col-4"> 
                                <img className='img-fluid rounded float-start' src={movieActual.image}/>
                            </div>

                            <div className="col-8">
                                <div className="card-body">

                                    <h3 className="card-title">{movieActual.title}</h3>
                                    <h5 className="card-text">{movieActual.clasification}</h5>                                                      

                                    <Link style={{color: "black"}} to={`/ticket`}>
                                        <h5>Comprar</h5>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>);
                })}
            </div>
  )
}
