import React from 'react'
import { Link } from 'react-router-dom'

export const MovieCard = () => {
  const Images = {
    image1: new URL('https://images.app.goo.gl/UrSFFfA6SB2MHPW2A',  import.meta.url).href
  }

  return (
            <div className="card bg-info">
                <div className="row no-gutters">
                    <div className="col-4"> 
                        <img  src={Images.image1}/>  
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
