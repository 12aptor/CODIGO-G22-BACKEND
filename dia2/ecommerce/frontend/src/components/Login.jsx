import {useState} from 'react'
import UsuarioService from '../services/Usuario.services'
import { useNavigate } from 'react-router-dom'

function Login(){
    const [userCredentials,setUserCredentials] = useState({
        email:'',
        password:''
    })
    const [errorMessage,setErrorMessage] = useState('')

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
        try{
            UsuarioService.login(userCredentials)
            .then(res=>{
                console.log(res)
                if(res.status === true){
                    localStorage.setItem('token',res.token)
                    navigate('/admin')
                }else{
                    console.log(res.message)
                    setErrorMessage(res.message)
                }
                
            })
        }catch{
            console.log("credenciales invalidas")
        }
        
        
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
            {errorMessage !== '' && (
            <div className='alert alert-danger'>
                {errorMessage}
            </div>
            )}
        </form>
        
        </>
    )
}

export default Login