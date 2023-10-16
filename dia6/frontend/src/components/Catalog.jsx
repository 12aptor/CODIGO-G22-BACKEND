import {useState,useEffect} from 'react'
import ProductsServices from "../services/Products.services"

function Catalog(){
    const [listaProductos,setListaProductos] = useState([])
    const [refreshData,setRefreshData] = useState(false)

    useEffect(()=>{
        const fetchProductos = async() =>{
            const response = await ProductsServices.getAll()
            console.log("response ..",response)
            setListaProductos(response)
            console.log("productos : ",listaProductos)
        }
        fetchProductos()
    },[refreshData])

    return (
        <>
        <h1>lista productos</h1>
        {listaProductos.map(producto=>{
                <div className="col mb-5">
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
        })}
        </>
        
    )
}

export default Catalog