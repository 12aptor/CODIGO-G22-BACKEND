import {useState} from 'react'
import UsuarioService from '../services/Usuario.services'
import { useNavigate } from 'react-router-dom'

function Login(){
    const [userCredentials,setUserCredentials] = useState({
        email:'',
        password:''
    })

    const navigate = useNavigate()

    const hanlderInputChange = (e) =>{
        const {name,value} = e.currentTarget

        setUserCredentials({
            ...userCredentials,
            [name]:value
        })
    }

    const handleLogin = (e) =>{
        e.preventDefault()
        console.log(userCredentials)
    }
    return(
        <>
        <form className='form-signin' onSubmit={handleLogin}>
            <h1>Login</h1>
            <label className="form-label">Email</label>
            <input type="email" id="email" name="email"
             className='form-control'
             onChange={hanlderInputChange}/>
            <label className="form-label">Password</label>
            <input type="password" id="password" name="password"
            className="form-control"
            onChange={hanlderInputChange}/>
            <button className="btn btn-primary" type="submit">LOGIN</button>
        </form>
        </>
    )
}

export default Login