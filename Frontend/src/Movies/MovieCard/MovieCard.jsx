import React from 'react'
import { Link } from 'react-router-dom'


export const MovieCard = () => {

  return (
            <div className="card bg-info">
                <div className="row no-gutters">
                    <div className="col-4"> 
                        <img className='img-fluid rounded float-start' src="https://posters.movieposterdb.com/22_10/2021/15239576/l_shark-movie-poster_02ff9a3d.jpg"/>
                    </div>

                    <div className="col-8">
                        <div className="card-body">

                            <h5 className="card-title">sharks</h5>
                            <p className="card-text">Is about dfa  df kjafd asdfjl asdf k asdlfj</p>                                                      
                            
                            <p className="card-text">
                                <small className="text-muted">Q.50</small>
                            </p>                            

                            <Link to={`/ticket`}>
                                Comprar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
  )
}
