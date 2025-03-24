import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pawify</h1>
        <div className="logo-container">
          <img src="/pawprint.png" alt="Pawify Logo" className="logo" />
        </div>
        <p className="message">
          Estamos trabajando en nuestra página web.
        </p>
        <p className="sub-message">
          ¡Vuelve pronto para descubrir todo lo que tenemos para ti y tu mascota!
        </p>
      </header>
    </div>
  );
}

export default App;
