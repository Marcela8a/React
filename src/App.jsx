import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [nombre, setNombre] = useState('');
  const [formulario, setFormulario] = useState(false);

  const pepito = (e) => {
    setNombre(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre === '') {
      alert('Esto está mal');
    } else {
      setFormulario(true);
      alert('Formulario OK');
    }
  };

  return (
    <>
      <div className='App'>
        <h1>Carga de Estudiantes</h1>
        <form onSubmit={handleSubmit}>
          <label></label>
          <input value={nombre} onChange={pepito} />
          <input type='submit' />
        </form>
        <Card>
        <h2>Título del Card</h2>
          <p>Contenido adicional dentro del Card</p>
        </Card>
      </div>
    </>
  );
}

export default App;