import React from 'react'
import { MovieCard } from '../MovieCard/MovieCard'
import '../../index.css'

export const MoviesList = () => {
  return (
    <div className='container'>
      <h1>Listado</h1>
      <div className="movie-container">
        <br />
        <ul className='' style={{listStyleType: 'none'}}>
            <li style={{display: "inline-block"}}><MovieCard/></li>
        </ul>
      </div>
      <h1 className=''></h1>
    </div>
  )
}
