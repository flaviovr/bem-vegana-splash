import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1600px;
  
  margin: auto 15%;
  @media screen and (max-width: 720px) {
    margin: 0 5%;
    padding: 10px;
    width: auto;
  }
`;

export default Container;