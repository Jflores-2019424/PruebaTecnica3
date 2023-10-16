import axios from "axios"
const URL = "http://localhost:3002/api/"
export const listMovies = async () =>{
    try {
        const response = await axios.get(`${URL}list-movie`);
        return response.data.movie;
    } catch (e) {
        throw new Error(e);
    }
}