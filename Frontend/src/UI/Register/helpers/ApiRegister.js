import axios from "axios";

const URL = "http://localhost:3002/api/"

export const createUser = async (name, lastname, email, password, phone) =>{
    try{
        const user = {name, lastname, email, password, phone }
        const response = await axios.post(`${URL}create-user`, user)
        return response.data

    }catch(e){
        
    }

}