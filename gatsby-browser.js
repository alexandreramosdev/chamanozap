exports.onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Este Webapp tem uma atualização :) 

    Recarregue para exibir a versão mais recente?`
  )

  if (answer === true) {
    window.location.reload()
  }
}

exports.onInitialClientRender = () => {  
  // Detecta se o dispositivo está no iOS
  const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test( userAgent );
  }
  // Detects if device is in standalone mode
  const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);
  // Verifica se deve exibir notificação popup de instalação:
  if (isIos() && !isInStandaloneMode()) {
    this.setState({ showInstallMessage: true });
  }
}



