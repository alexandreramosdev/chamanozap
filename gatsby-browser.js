exports.onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Este aplicativo tem uma atualização :)` +
      `Recarregue para exibir a versão mais recente?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
