import React from 'react'
import PageDefault from '../../../PageDefault'
import { Link } from 'react-router-dom'

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  )
}

export default CadastroVideo;