import axios from 'axios'
import {API_URL} from '../libs/Enviroments'

class ProductService{

    constructor(){
        this.enpoint = 'producto'
    }

    async getAll(){
        const response = await axios.get(API_URL+"/"+this.enpoint)
        const data = await response.data.content
        return data
    }
}

export default new ProductService()