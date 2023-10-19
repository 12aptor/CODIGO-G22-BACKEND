import axios from 'axios'
import {API_URL} from '../libs/Enviroments'

class UsuarioService{

    constructor(){
        this.endpoint = 'auth'
        this.token = localStorage.getItem('token')
    }

    getAll(){
        return axios.get(API_URL+"/"+this.endpoint+"/user",{
            headers:{
                Authorization: `Bearer ${this.token}`
            }
        })
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
        if(!this.token){
            return false
        }
        return axios.get(API_URL+'/'+this.endpoint+'/verifytoken',{
            headers:{
                Authorization: `Bearer ${this.token}`
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