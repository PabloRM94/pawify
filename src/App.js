import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pawify</h1>
        <p className="message">
          Estamos trabajando en nuestra página web.
        </p>
        <p className="sub-message">
          ¡Vuelve pronto para descubrir todo lo que tenemos para ti y tu mascota!
        </p>
        <button 
          className="redirect-button"
          onClick={() => window.location.href = 'https://pawify.org/'}
        >
          Ir a la página actual
        </button>
      </header>
    </div>
  );
}

export default App;
