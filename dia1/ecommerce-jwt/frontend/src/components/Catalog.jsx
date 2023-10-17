import {useState,useEffect} from 'react'
import ProductsServices from '../services/Products.services'

function Catalog(){
    const [listaProductos,setListaProductos] = useState([])

    useEffect(()=>{
        const fetchProductos = () =>{
            ProductsServices.getAll()
            .then(res=>{
                console.log(res)
                setListaProductos(res)
            })
        }
        fetchProductos()
    },[])

    return (
        <>
        {listaProductos.length > 0 && 
        listaProductos.map((producto,index)=>(
            <div className="col mb-5" key={index}>
                    <div className="card h-100">
                    
                        <img className="card-img-top" src={producto.imagen} alt="..."/>
                    
                        <div className="card-body p-4">
                            <div className="text-center">
                                
                                <h5 className="fw-bolder">{producto.nombre}</h5>
                            
                                ${producto.precio}
                            </div>
                        </div>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Ver Detalle</a></div>
                        </div>
                    </div>
            </div>
        ))}
        </>
    )
}

export default Catalog