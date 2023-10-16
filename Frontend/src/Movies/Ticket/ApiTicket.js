import axios from "axios";

const URL = "http://localhost:3002/api/"

export const createTicket = async (movieId, seat, date) =>{
    try{
        const ticket = {movieId, seat, date }
        const response = await axios.post(`${URL}create-ticket`, ticket)
        return response.data

    }catch(e){
        
    }

}