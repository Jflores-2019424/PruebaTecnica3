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
                <div key={id} className="card bg-info">
                    <div className="row no-gutters">
                        <div className="col-4"> 
                            <img className='img-fluid rounded float-start' src={movieActual.image}/>
                        </div>

                        <div className="col-8">
                            <div className="card-body">

                                <h5 className="card-title">{movieActual.title}</h5>
                                <p className="card-text">{movieActual.clasification}</p>                                                      
                                
                                <p className="card-text">
                                    <small className="text-muted"></small>
                                </p>                            

                                <Link to={`/ticket`}>
                                    Comprar
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>);
                })}
            </div>
  )
}
