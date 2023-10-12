import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Table,Button,Form} from 'react-bootstrap'
import axios from 'axios'
import {API_URL} from './enviroments'

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = (
      {
        tareas : [],
        descripcion:'',
        estado:'pendiente',
        id:0,
        pos:null
      }
    )
    this.cambioDescripcion = this.cambioDescripcion.bind(this)
    this.guardar = this.guardar.bind(this)
    this.editar = this.editar.bind(this)
  }

  componentDidMount(){
    axios.get(`${API_URL}/tarea`)
    .then(res=>{
      console.log(res.data.content)
      this.setState({
        tareas : res.data.content
      })
    })
  }

  cambioDescripcion(e){
    this.setState({
      descripcion : e.target.value
    })
  }

  guardar(e){
    e.preventDefault()

    let cod = this.state.id

    const data = {
      descripcion : this.state.descripcion,
      estado : this.state.estado
    }
    console.log("enviando al servidor...",data)

    if(cod>0){
      //actualizar tarea
      axios.put(`${API_URL}/tarea/`+cod,data)
      .then(res=>{
        console.log("respuesta del servidor put :",res.data.content)
        let indexTarea = this.state.pos
        var temp = this.state.tareas
        temp[indexTarea] = res.data.content
        this.setState({
          tareas:temp,
          descripcion:'',
          pos:null,
          id:0
        })
      })
    }
    else{
      //insertar tarea
      axios.post(`${API_URL}/tarea`,data)
      .then(res=>{
        console.log("respuesta del servidor post : ",res.data.content)
        this.state.tareas.push(res.data.content)
        var temp = this.state.tareas
        this.setState({
          tareas:temp,
          descripcion:'',
          id:0,
          pos:null,
          estado:'pendiente'
        })
      })
    }
  }

  editar(cod,index){
    axios.get(`${API_URL}/tarea/`+cod)
    .then(res=>{
      this.setState({
        descripcion:res.data.content.descripcion,
        estado:res.data.content.estado,
        id:res.data.content.id,
        pos:index
      })
    })
  }

  render(){
    return(
      <Container>
        <h1>Lista de Tareas</h1>
        <Form onSubmit={this.guardar}>
          <Form.Group className="mb-3">
            <Form.Control type="text"
             value={this.state.descripcion}
             onChange={this.cambioDescripcion}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Descripción</th>
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.tareas.map((tarea,index)=>{
              return(
                <tr key={index}>
                  <td>{tarea.id}</td>
                  <td>{tarea.descripcion}</td>
                  <td>{tarea.estado}</td>
                  <td>
                    <Button variant="success"
                     onClick={()=>this.editar(tarea.id,index)}>
                      Editar
                     </Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
    )
  }

}

export default App