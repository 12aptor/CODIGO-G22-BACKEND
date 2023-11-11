import {API_URL} from '../lib/Enviroments'

export const signIn = async (user) =>{
    const response = await fetch(`${API_URL}/user/login`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(user)
    })
    const data = await response.json()
    const status = response.status
    return {data,status}
}