import config from '../config';

const URL_CATEGORIAS = `${config.URL_BACK}categorias`

function getAllWithVideos() {
  
  console.log(config.URL_BACK)
  return fetch(`${URL_CATEGORIAS}?_embed=videos`,  {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  })
    .then(async (respostaDoServidor) => {
      
      if(respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível concluir.');
    }
  )
}

function getAll() {
  
  console.log(config.URL_BACK)
  return fetch(`${URL_CATEGORIAS}`,  {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  })
    .then(async (respostaDoServidor) => {
      
      if(respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível concluir.');
    }
  )
}


export default {
  getAllWithVideos,
  getAll,
}