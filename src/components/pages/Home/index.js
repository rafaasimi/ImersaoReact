import React from 'react';
import Menu from '../../Menu'
import dadosIniciais from '../../../data/dados_iniciais.json'
import BannerMain from '../../BannerMain'
import Carousel from '../../Carousel'
import Footer from '../../Footer'


function Home() {
  return (
    <div style={{background: "#141414" }}>
      <Menu/>

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Highlights de Counter-Strike: Global Offensive"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Footer />

    </div>
  );
}

export default Home;
