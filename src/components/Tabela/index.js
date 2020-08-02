import React from 'react';
import { Table, Wrapper } from './styles';

function Tabela ({ children }) {
  return (
    <Wrapper >
    <Table>
      {children}
    </Table>
  </Wrapper>
  );
}

export default Tabela;