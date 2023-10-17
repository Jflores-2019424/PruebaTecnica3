import React from 'react'
import { MovieCard } from '../MovieCard/MovieCard'

export const MoviesList = () => {
  return (
    <div className='container'>
      <h1>Listado</h1>
      <div className="movie-container">
        <br />
        <ul className='list-group col-5' style={{listStyleType: 'none'}}>
            <li className=''><MovieCard/></li>
        </ul>
      </div>
    </div>
  )
}
