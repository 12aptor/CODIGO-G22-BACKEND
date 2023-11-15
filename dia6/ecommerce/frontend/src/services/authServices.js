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

export const isAuth = () =>{
    const token = localStorage.getItem('token')
    if(!token){
        return false
    }

    const payload = token.split(".")[1]
    const JsonPayload = JSON.parse(window.atob(payload))
    console.log(JsonPayload)
    if(JsonPayload.exp > new Date() / 1000){
        return true
    }else{
        return false
    }
}

export const logout = () =>{
    window.localStorage.removeItem('token')
    return (window.location.href = "/")
}