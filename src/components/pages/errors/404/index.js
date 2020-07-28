import React from 'react'
import PageDefault from '../../../PageDefault'
import { Link } from 'react-router-dom'

function Erro404() {
  return (
    <PageDefault>
      <h1>Erro 404</h1>
      <h2>Ops... Acredito que você esteja perdido.</h2>

      <Link to="/">
        Retornar a Página Inicial
      </Link>

    </PageDefault>
  )
}

const flappyBird = fetch("https://rafaasimi.github.io/Flappy-Bird/", {
  "method": "GET",
  "headers": {
    "user-agent": "vscode-restclient"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});

export default Erro404;