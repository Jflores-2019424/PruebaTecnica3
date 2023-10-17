import axios from "axios"
import Swal from "sweetalert2";
const URL = "http://localhost:3002/api/"
export const deleteTicket = async (id) =>{
    try {
        const response = await axios.delete(`${URL}delete-ticket/${id}`);
        return response.data;
    } catch (e) {
        Swal.fire({
            icon: 'error',
            title: "Error",
            text: "no se pudo cancelar la reservacion",
            confirmButtonText: "Ok"
            });
    }
}