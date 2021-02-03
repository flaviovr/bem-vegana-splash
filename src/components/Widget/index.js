import styled from 'styled-components'

const Widget = styled.div `
  margin: 15px 0px;
  padding:0px;
  position:relative;
  color: ${({ theme }) => theme.colors.mainText};
  display:flex;
  background-color: ${({ theme }) => {
    return theme.colors.contrastText;
  }};
  border-radius: ${({ theme }) => theme.borderRadius};
  
  h1, h2, h3 {
    font-size: 28px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
   p {
    font-size: 18px;
    font-weight: 300;
    line-height: 1;
  }

  img {
    width:40%;
    border-radius: ${({ theme }) => theme.borderRadius} 0px  0px ${({ theme }) => theme.borderRadius} ;
  }
  .bloco{
    background-color:#fff;
    padding:5px 10px;
    line-height:1;
    top:5px;left:5px;
    position:absolute;
    border-radius: ${({ theme }) => theme.borderRadius};
    font-weight:700;
    font-size:16px;
  }
  
`;

Widget.Content = styled.div `
  padding: 25px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;