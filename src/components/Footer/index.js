import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
        <img src="https://www.alura.com.br/assets/img/imersoes/react/logo-horizontal.1595623271.svg" height="50"/>
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      <p>Desenvolvido por: <a href="https://github.com/rafaasimi" target="_blank">Rafael Simionato</a></p>
    </FooterBase>
  );
}

export default Footer;
