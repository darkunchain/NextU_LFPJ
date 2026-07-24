import React from 'react';
import './App.css';

function Helloworld(props){
  console.log(props)
  return(
    
    <div id="hello">
      <h3>{props.subtitulo}</h3>
      {props.texto}
    </div>
  )
}

class Helloclass extends React.Component {

  state = {
    show: false
  }

  render(){
    if(this.state.show) {
      return(
        <div id="hola"> 
          <h3> {this.props.subtitulo} </h3>          
          {this.props.texto}
          <hr/>
        </div>
      )
    }else{
      return(
        <div><h3>No se ha mostrado ningun elemento !!!</h3></div>
      )
    }
    
  }
}

/* class App extends React.Component {
  render(){
    return <div> Hello World!!! <Helloworld/> </div>
  }
} */  //El componente escrito como clase

// const App = () => <div>Hello World!!! <Helloworld/></div>     //El componente escrito como funcion flecha

function App() {
  return (
    <div className="App">
      Hello World!!! 
      <Helloworld texto="Texto 1" subtitulo="Subtitulo 1"/> 
      <Helloworld texto="Texto 2" subtitulo="Subtitulo 2"/> 
      <Helloworld texto="Texto 3" subtitulo="Subtitulo 3"/>
      <hr/>   
      <Helloclass texto="clase 1" subtitulo="Estado 1"/> 
      <Helloclass texto="Clase 2" subtitulo="Estado 2"/> 
      <Helloclass texto="Clase 3" subtitulo="Estado 3"/>
    </div>
  );
}  //El componente escrito como funcion

export default App;
