import axios from 'axios'
import {API_URL} from '../libs/Enviroments'

class UsuarioService{

    constructor(){
        this.enpoint = 'auth'
    }

    getAll(){
        return axios.get(API_URL+"/"+this.enpoint+"/user")
        .then(res=>{
            return res.data.content
        })
    }

    login(data){
        return axios.post(API_URL+"/"+this.endpoint+"/login",data)
        .then(res=>{
            return res.data
        })
    }
}

export default new UsuarioService()