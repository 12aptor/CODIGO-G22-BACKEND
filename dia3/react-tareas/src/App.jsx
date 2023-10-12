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

  render(){
    return(
      <Container>
        <h1>Lista de Tareas</h1>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="text"/>
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
            </tr>
          </thead>
          <tbody>
            {this.state.tareas.map((tarea,index)=>{
              return(
                <tr key={index}>
                  <td>{tarea.id}</td>
                  <td>{tarea.descripcion}</td>
                  <td>{tarea.estado}</td>
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