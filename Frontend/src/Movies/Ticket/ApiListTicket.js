import axios from "axios"
const URL = "http://localhost:3002/api/"
export const listTicket = async () =>{
    try {
        const response = await axios.get(`${URL}list-ticket`);
        return response.data.ticket;
    } catch (e) {
        throw new Error(e);
    }
}