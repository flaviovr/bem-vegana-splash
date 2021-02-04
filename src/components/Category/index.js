import styled from 'styled-components';

const Category = styled.h1`
background-color:${({ theme }) => theme.colors.primaryDark};
padding:15px;
border-radius: ${({ theme }) => theme.borderRadius};
font-family: 'Bungee Hairline';
clear:both;
color:${({ theme }) => theme.colors.primary};
line-height:1;
@media screen and (max-width:500px) {
  font-size:26px;
}
span{
    font-family: 'Bungee';
    float:right;
    color:${({ theme }) => theme.colors.contrastText};
}
`

  export default Category;