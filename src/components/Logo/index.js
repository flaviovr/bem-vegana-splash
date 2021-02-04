import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';


import config from '../../../config.json';

function Logo() {
  //console.log(SVG)
  return (
    <LogoContainer>
        <img src="/images/page/logo-bem-vegana.png"/>
        <div>
            <p className='gray'>
              Atuamos em todo <br/>Rio de Janeiro!
              
            </p>
            <p className="green">
              Faça já sua Encomenda!<br/>
              <a href="https://api.whatsapp.com/send?phone=5521967413954&text=Nova Encomenda!" target='_blank'>(21) 96741-3954</a>
            </p>
        </div>
        <StylesPar>
          Refeição sustentável em todos os sentidos. Leve, cheia de fibras, proteínas vegetais, tudo isso preparado com os ingredientes naturais e temperos frescos. 
          O mínimo de calorias e gorduras com o máximo de sabor.Tudo prontinho e congelado em embalagens apropriadas para microondas, é só aquecer.
        </StylesPar>
    </LogoContainer>
  )

}

const StylesPar = styled.p`
  font-weight:500;
    font-family:"Roboto Slab";
    clear:both;
    padding:25px 0px;
`
const LogoContainer = styled.div`
  margin: 25px 0px;
  display:block;

  img {
    float:left;
    margin: 0 auto;
    width:300px;
    /* @media screen and (max-width: 720px) {
      width:200px;
    } */
  }
  div {
    float:right;
    text-align:right;
    margin-top:55px;
    .gray {
      
      font-family: "Bungee";
      font-size: 24px;
      font-weight: 500;
      line-height: 1;
      color:${({ theme }) => theme.colors.gray};
      margin-bottom:20px;
      
    }
    .green {
      color:${({ theme }) => theme.colors.secondary};
      font-family: "Bungee";
      font-size:20px;
      line-height:1;
      text-decoration:none;
      a{
        color:${({ theme }) => theme.colors.secondaryDark};
        font-size: 34px;
      }
    }

  }

`;

export default Logo;