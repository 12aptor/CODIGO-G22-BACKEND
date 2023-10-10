import React from 'react'
import axios from 'axios'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = (
      {
        tareas : []
      }
    )
  }

  componentDidMount(){
    console.log("cargando tareas...")
    axios.get('http://localhost:5000/tarea')
    .then(res=>{
      console.log(res.data)
    })
  }
  render(){
    return(
      <h1>Hola mundo React</h1>
    )
  }
}

export default App
