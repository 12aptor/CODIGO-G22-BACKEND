import {useState,useEffect} from 'react'
import UsuarioServices from '../services/Usuario.services'

function Usuarios(){
    const [listaUsuarios,setListaUsuarios] = useState([])

    useEffect(()=>{
        const fechUsuarios = () =>{
            UsuarioServices.getAll()
            .then(res=>{
                console.log(res)
                setListaUsuarios(res)

            })
        }
        fechUsuarios()
    },[])
    return(
        <>
        <table className="table table-dark">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                <th scope="col">Administrador</th>
                </tr>
            </thead>
            <tbody>
                {listaUsuarios.length > 0 &&
                listaUsuarios.map((usuario,index)=>(
                    <tr key={index}>
                    <th scope="row">{usuario.id}</th>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.email}</td>
                    <td><input className="form-check-input" type="checkbox" id="gridCheck1" 
                    checked={usuario.is_admin} /></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default Usuarios