import styled from 'styled-components'

const Widget = styled.div `
  margin: 25px 0px;
  padding:0px;
  position:relative;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);

  color: ${({ theme }) => theme.colors.primary};
  display:flex;
  flex-wrap:wrap;
  align-items:flex-flex-start;
  background-color: #fff;
  border-radius: ${({ theme }) => theme.borderRadius};
  
  h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
    font-family: "Bungee";
    color:${({ theme }) => theme.colors.primaryDark}
  }
  h2{
    font-size:16px;
    margin:5px 0 0 0;
    color:${({ theme }) => theme.colors.primary};
    line-height:1;
    font-family: "Bungee";
  }
   p {
    font-family: "Roboto Slab";
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
    color:${({ theme }) => theme.colors.gray};
    margin-top:15px;
  }

  img {
    width:40%;
    border-radius: ${({ theme }) => theme.borderRadius} 0 0 ${({ theme }) => theme.borderRadius}  ;
    @media screen and (max-width: 820px) {
      border-radius: ${({ theme }) => theme.borderRadius}  ${({ theme }) => theme.borderRadius} 0 0;
      width:100%;
    }
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
  
  @media screen and (max-width: 820px) {
    width:100%;
    display:block;
    }
  padding: 25px;
  width:60%;
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