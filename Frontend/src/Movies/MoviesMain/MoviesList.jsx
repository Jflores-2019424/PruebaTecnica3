import React from 'react'
import { MovieCard } from '../MovieCard/MovieCard'

export const MoviesList = () => {
  return (
    <div className='container'>
      <h1>Listado</h1>
      <div className="row rows-cols-1 row-cols-md-3 g-3">
        <br />
        <ul style={{listStyleType: 'none'}}>
            <li><MovieCard/></li>
        </ul>
      </div>
    </div>
  )
}
