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
    
    <div>
      <iframe class="iframe" src="https://rafaasimi.github.io/Flappy-Bird/" width="400" height="550" style={{overflow: "hidden" }}></iframe>
    </div>

    </PageDefault>
  )
}

export default Erro404;