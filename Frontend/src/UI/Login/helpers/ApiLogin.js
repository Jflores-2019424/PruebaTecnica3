import axios from "axios"
import Swal from "sweetalert2"

const URL = "http://localhost:3002/api/"
export const login = async(email, password)=>{
    try{
        const response = await axios.post(`${URL}login`, {email, password})
        const token = response.data.token
        token && localStorage.setItem("token", token)
        return token
    }catch (error){
        Swal.fire({
            icon: 'error',
            title: 'Algo Salió mal',
            text: 'No se ha podido iniciar sesión'
        })
    }
}