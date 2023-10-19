import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import UsuarioServices from "../services/Usuario.services"
import { useNavigate } from 'react-router-dom'

function Admin(){
    const navigate = useNavigate()
    UsuarioServices.isAuth()
    .then(res=>{
        console.log(res)
        if(!res){
            navigate('/login')
        }
    })
    return(
        <>
        <NavBar/>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <h1>PANEL DE ADMINISTRACIÓN</h1>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Admin