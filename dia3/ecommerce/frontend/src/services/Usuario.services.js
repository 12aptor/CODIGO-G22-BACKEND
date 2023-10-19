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

    async isAuth(){
        const token = localStorage.getItem('token')
        if(!token){
            return false
        }
        return axios.get(API_URL+'/'+this.endpoint+'/verifytoken',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then(res=>{
            console.log(res.data)
            return true
        }).catch(error =>{
            console.log(error.message)
            return false
        })
       
    }
}

export default new UsuarioService()