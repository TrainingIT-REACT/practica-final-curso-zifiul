import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Polyfills!
import '@babel/polyfill' ;
import 'whatwg-fetch' ;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// Instalamos el service worker

// Comprobamos que el navegador lo soporte:
if ('serviceWorker' in navigator) {
  // Esperamos a que cargue la web
  window.addEventListener('load', () => {
    // Intentamos instalar el Service worker
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      // Se ha registrado correctamente
      console.log('El service worker SW se ha registrado correctamente: ', registration.scope);
    }, (err) => {
      // registration failed :(
      console.log('El registro de SW ha fallado :(', err);
    });
  });
}
