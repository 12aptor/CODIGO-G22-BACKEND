import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Table,Button,Form} from 'react-bootstrap'
import axios from 'axios'

class App extends React.Component{
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
        </Table>
      </Container>
    )
  }

}

export default App