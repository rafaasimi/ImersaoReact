import React from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../PageDefault'

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form>

        <label>
          Nome da Categoria:
          <input type="text" />
        </label>

        <label>
          Escolha uma Categoria
            <select name="select">
            <option>Escolha uma Categoria</option>
            <option value="valor1">Front-End</option>
            <option value="valor2">Back-End</option>
          </select>
        </label>

        <label>Cor
        <input type="color" id="body" name="body" value="#f6b73c" />
        </label>

        <label>
          <textarea></textarea>
        </label>

        <button>
          Cadastrar
        </button>
      </form>



      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;