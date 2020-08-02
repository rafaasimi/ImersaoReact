import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}
      
        
      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={new Date()}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="Aprenda a ser mais produtivo utilizando algumas dicas e extensões disponibilizadas pelo Filipe Deschamps para o Visual Studio Code, podendo ser utilizada para a codificação em qualquer linguagem. "
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }
        
        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );

      })}

    </PageDefault>
  );
}

export default Home;
