import axios from 'axios'
import {API_URL} from '../libs/Enviroments'

class ProductService{

    constructor(){
        this.enpoint = 'producto'
    }

    getAll(){
        return axios.get(API_URL+"/"+this.enpoint)
        .then(res=>{
            return res.data.content
        })
    }
}

export default new ProductService()