import {useState,useEffect} from 'react'
import UsuarioServices from '../services/Usuario.services'

function Usuarios(){
    const [listaUsuarios,setListaUsuarios] = useState([])

    useEffect(()=>{
        const fechUsuarios = () =>{
            UsuarioServices.getAll()
            .then(res=>{
                console.log(res)
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
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default Usuarios