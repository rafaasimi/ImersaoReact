import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../../hooks/useForm'
import changeIcon from '../../../assets/images/modifica.png';
import deleteIcon from '../../../assets/images/delete.png';
import { Th, Td } from '../../../components/Tabela/styles'; 
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Tabela from '../../../components/Tabela';
import Button, { WrapperButton } from '../../../components/Button/styles';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([]);
  const { handleChange, values, clearForm } = useForm(valoresIniciais)
  const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080/categorias'
  : 'https://rafaflixdev.herokuapp.com/categorias'
  
  useEffect(() => {
    update();
  }, []);
  
  function update(){
    fetch(URL)
    .then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([
        ...resposta,
      ]);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([
      ...categorias,
      values
    ]);
    addCategory();
    clearForm();
  }

  function addCategory(){
    fetch(URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then(async (response) => {
      const resposta = await response;
      if(resposta.status === 201) {
        console.log('deu');
      };
    });
  }

  function deleteCategory(e) {
    let question = window.confirm('Deseja mesmo excluir a categoria?');

    if(question === true){
      fetch(`${URL}/${e.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      })
      .then(res => res.json()) 
      .then(res => console.log(res));

      update();
    }
  }
  
  function changeCategory(e){
    let question = prompt('Qual o novo título de categoria?');

    if(question !== null){
      fetch(`${URL}/${e.id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "titulo": question,
          "cor": e.cor,
          "descricao": e.descricao,
        })
        })
        .then(res => res.json()) 
        .then(res => console.log(res));
        
        update();
    }
  }

  return (
    <PageDefault>
      <h1 style={{ alignItens: 'center' }}>
        Cadastro de Categoria:
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          input={true}
          value={values.titulo}
          onChange={handleChange}
          type="text"
          name="titulo"
          label="Nome da Categoria:"
        />

        <FormField
          input={false}
          value={values.descricao}
          onChange={handleChange}
          type="text"
          name="descricao"
          label="Descrição:"
        />

        <FormField
          input={true}
          value={values.cor}
          onChange={handleChange}
          type="color"
          name="cor"
          label="Cor:"
        />

        <WrapperButton>
          <Button style={{ background: "#141414", width: "143px" }} >
            Cadastrar
          </Button>
        </WrapperButton>

      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <Tabela>
        <thead>
          <tr>
            <Th>
              {categorias.map((categoria, indice) => {
                return (
                  <li key={`${categoria}${indice}`}>
                    {categoria.titulo}
                  </li>
                )
              })}
            </Th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <Td>
            {categorias.map((categoria, indice) => {
                return (
                  <li as="link" key={`${categoria}${indice}`}>
                    <img src={changeIcon} alt="modifica" style={{ cursor: "pointer", width: "18px", heigth: "18px" }} onClick={() => changeCategory(categoria)} />
                  </li>
                )
              })}
            </Td>
          </tr>
        </tbody>

        <tbody>    
          <tr>
            <Td>
            {categorias.map((categoria, indice) => {
                return (
                  <li as="link" key={`${categoria}${indice}`}>
                    <img src={deleteIcon} alt="delete" style={{ cursor: "pointer", width: "20px", heigth: "20px" }} onClick={() => deleteCategory(categoria)}/>
                  </li>
                )
              })}
            </Td>
          </tr>
        </tbody>
        
      </Tabela>


      <WrapperButton>
        <Button as={Link} to="/" style={{ marginBottom: "25px" }}>
          Ir para home
        </Button>
      </WrapperButton>
    </PageDefault>
  );
}

export default CadastroCategoria;