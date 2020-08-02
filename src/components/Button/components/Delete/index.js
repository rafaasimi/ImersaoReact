import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.button`
  background: url(${require(`../../../../assets/img/delete.png`)}) no-repeat;
  width: 17px;
  height: 17px;
`;


export function DeleteButton() {
  return(
    <Wrapper>
    </Wrapper>
  );
}

