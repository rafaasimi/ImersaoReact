import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm'
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField'
import Button from '../../../components/Button/styles'

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({});

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const validateCategory = categoryTitles.find((categoria) => {
          return categoria === values.categoria 
        });

        if(validateCategory !== values.categoria){
          alert('Categoria incorreta! Tente novamente.')
          return
        }

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        }).then(() => {
          console.log('Cadastrada com sucesso!');
          history.push('/');
        }).catch((err) => {
          console.error(err)
        });
      }}
      >
        <FormField
          input={true}
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          input={true}
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          input={true}
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

   
          <Button type="submit" style={{ background: "#141414" }}>
            Cadastrar
          </Button>
    
      </form>

      <br />
      <br />

      <Link to="/cadastro/categoria" >
        Cadastrar Categoria
      </Link>

      <br />
      <br />

    </PageDefault>
  );
}

export default CadastroVideo;