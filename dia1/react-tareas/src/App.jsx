import React from 'react'
import axios from 'axios'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = (
      {
        tareas : [],
        text:'',
        completed:0
      }
    )
    this.cambioText = this.cambioText.bind(this)
    this.agregarTarea = this.agregarTarea.bind(this)
  }

  cambioText(e){
    this.setState({
      text : e.target.value
    })
  }

  agregarTarea(e){
    e.preventDefault()
    console.log("agregando tarea...")
    const data = {
      text : this.state.text,
      completed : this.state.completed
    }
    axios.post('http://localhost:5000/tarea',data)
    .then(res=>{
      console.log("respuesta: ",res.data)
    })
  }

  componentDidMount(){
    console.log("cargando tareas...")
    axios.get('http://localhost:5000/tarea')
    .then(res=>{
      console.log(res.data)
      this.setState({
        tareas:res.data
      })
    })
  }
  render(){
    return(
      <div>
          <h1>Lista de Tareas</h1>
          <form onSubmit={this.agregarTarea}>
            <input type="text" value={this.state.text}
            onChange={this.cambioText}/>
            <input type="submit" value="Agregar Tarea"/>
          </form>
          <ul>
            {this.state.tareas.map((tarea,index)=>{
              return(
                <li key={index}>{tarea.text}</li>
              )
            })}
          </ul>
      </div>
      
    )
  }
}

export default App
