exports.onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Este Webapp tem uma atualização :) 

    Recarregue para exibir a versão mais recente?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
