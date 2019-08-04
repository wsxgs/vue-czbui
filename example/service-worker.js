if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js').then(registration => {
    console.log('OK')
  })
}
