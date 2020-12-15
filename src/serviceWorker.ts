export function register() {
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
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
