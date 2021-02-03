import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1600px;
  padding-top: 15px;
  margin: auto 15%;
  @media screen and (max-width: 600px) {
    margin: 0 5%;
    padding: 10px;
    width: auto;
  }
`;

export default Container;