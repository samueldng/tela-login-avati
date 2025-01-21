import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';  // Importa os estilos
import App from './App';  // Importa o componente App
import 'bootstrap/dist/css/bootstrap.min.css';

// Renderiza o componente App dentro do elemento com id 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
