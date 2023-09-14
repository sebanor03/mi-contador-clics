import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import FreeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
   setNumClics(numClics + 1);
  }
  const reinciarContador = () => {
   setNumClics(0);
  }
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo'
        src={FreeCodeCampLogo}
        alt='Logo de freecodecamp'/>
      </div>
      <div className='contenedor-principal'>
      <Contador numClics={numClics} />

        <Boton 
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}
        />
        <Boton 
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reinciarContador}
        />
      </div>
    </div>
  );
}

export default App;
