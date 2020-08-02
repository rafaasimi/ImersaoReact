import config from '../config';

const URL_CATEGORIAS = `${config.URL_BACK}videos`

function create(objetoDoVideo) {
  
  return fetch(`${URL_CATEGORIAS}?_embed=videos`,  {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(objetoDoVideo)
    }).then(async (respostaDoServidor) => {
      
      if(respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível concluir.');
    }
  )
}

export default {
  create,
}