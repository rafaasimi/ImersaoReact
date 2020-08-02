import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow-x: auto;
  margin-left:50px;
  margin-right: 50px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid var(--primary);
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: flex-start;
  justify-content: space-around;
  border-radius: 4px;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
`;

export const Th = styled.th`
  font-weight: 300;
  text-align: left;
  padding: 10px;
  color: #53585D;
  list-style-type: none;

`
export const Td = styled.td`
  text-align: right;
  color: #53585D;
  padding: 15px;
  list-style-type: none;
`

