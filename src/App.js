import './App.css';
import './compenentes/Boton.js'
import Boton from './compenentes/Boton.js';
import BotonClear from './compenentes/BotonClear';
import Pantalla from './compenentes/Pantalla.js';
import { useState} from 'react';
import { evaluate } from 'mathjs';
import Swal from 'sweetalert2';

function App() {
  const [input, setInput] = useState('');

  const agregarInput = val =>{
    setInput(input + val);

  }
const calcularResultado = () =>{
  if (input){
     setInput(evaluate(input))
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Algo salío mal',
      text: 'Por favor introduce un valor para realizar Cálculo',
      
    })
  }

 
};

 
  return (
    <div className="App">
      <header className="App-header">
     <h1>Calculadora</h1>
     
     <div className='contenedor-calculadora'>

      <Pantalla input={input}></Pantalla>
      
      <div className='fila'>
        <Boton manejarClic={agregarInput}>
          1
        </Boton>
        <Boton manejarClic={agregarInput}>
          2
        </Boton>
        <Boton manejarClic={agregarInput}>
          3
        </Boton>
        <Boton manejarClic={agregarInput}>
          +
        </Boton>
      </div>
      <div className='fila'>
      <Boton manejarClic={agregarInput}>
          4
        </Boton>
        <Boton manejarClic={agregarInput}>
          5
        </Boton>
        <Boton manejarClic={agregarInput}>
          6
        </Boton>
        <Boton manejarClic={agregarInput}>
          -
        </Boton>
      </div>
      <div className='fila'>
      <Boton manejarClic={agregarInput}>
          7
        </Boton>
        <Boton manejarClic={agregarInput}>
          8
        </Boton>
        <Boton manejarClic={agregarInput}>
          9
        </Boton>
        <Boton manejarClic={agregarInput}>
          *
        </Boton>
      </div>
      <div className='fila'>
      <Boton manejarClic={calcularResultado}>
          =
        </Boton >
        <Boton manejarClic={agregarInput}>
          0
        </Boton>
        <Boton manejarClic={agregarInput}>
          .
        </Boton>
        <Boton manejarClic={agregarInput}>
          /
        </Boton>
      </div>
      <div className='fila'>
      </div> 
      <div className='fila'>
        <BotonClear manejarClear={() => setInput('')}>
          Clear
        </BotonClear>
      </div>
     </div>
      </header>
    </div>
  );
}

export default App;
