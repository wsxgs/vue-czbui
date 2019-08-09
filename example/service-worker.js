if (navigator.serviceWorker) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('serviceWorker register success')
      })
      .catch(e => {
        console.error('serviceWorker register failed')
      })
  })
}
