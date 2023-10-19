import axios from 'axios'
import {API_URL} from '../libs/Enviroments'

class UsuarioService{

    constructor(){
        this.endpoint = 'auth'
    }

    getAll(){
        return axios.get(API_URL+"/"+this.endpoint+"/user")
        .then(res=>{
            return res.data.content
        })
    }

    login(data){
        return axios.post(API_URL+"/"+this.endpoint+"/login",data)
        .then(res=>{
            return res.data
        })
        .catch(error =>{
            console.log("error",error.message)
            return {
                status:false,
                message:'credenciales incorrectas'
            }
        })
        
       
    }
}

export default new UsuarioService()