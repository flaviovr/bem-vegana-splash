import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';


import config from '../../../config.json';

function Topo() {
  //console.log(SVG)
  return (
    <TopoContainer>
        <img src="/images/page/logo-bem-vegana.png"/>
        <div>
            <p className='gray'>
              Atuamos em todo <br/>Rio de Janeiro!
              
            </p>
            <p className="green">
              Faça já sua Encomenda!<br/>
              <a href="https://api.whatsapp.com/send?phone=5521967413954&text=Nova Encomenda!" target='_blank'>(21) 96741-3954</a>
            </p>
            <div className="clear"></div>
        </div>
        <StylesPar>
          Refeição sustentável em todos os sentidos. Leve, cheia de fibras, proteínas vegetais, tudo isso preparado com os ingredientes naturais e temperos frescos. 
          O mínimo de calorias e gorduras com o máximo de sabor.Tudo prontinho e congelado em embalagens apropriadas para microondas, é só aquecer.
        </StylesPar>
    </TopoContainer>
  )

}

const StylesPar = styled.p`
  font-weight:700;
  text-align:center;
    font-family:"Roboto Slab";
    font-size:18px;
    clear:both;
  
    margin:25px 0px;
    @media screen and (max-width:780px) {
      font-size:16px;
      
    }
    @media screen and (max-width:500px) {
      font-size:14px;
      font-weight:500;
    }
`
const TopoContainer = styled.div`
  margin: 25px 0px;
  display:block;

  img {
    float:left;
    margin: 0 auto;
    width:300px;
    @media screen and (max-width:780px) {
     
      width:250px;
    }
    @media screen and (max-width:680px) {
      float:none;
      display:block;
    
    }
  }
  div {
    float:right;
    text-align:right;
    margin-top:55px;
    @media screen and (max-width:780px) {
      
      margin-top:35px;
    }

    @media screen and (max-width:680px) {
      float:none;
      display:block;
      text-align:center;
      margin-top:20px;
    }
    .gray {
      
      font-family: "Bungee";
      font-size: 24px;
      font-weight: 500;
      line-height: 1;
      color:${({ theme }) => theme.colors.mainBg};
      margin-bottom:20px;
      text-shadow: 2px 2px 4px rgba(0,0,0, 0.7);
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
    .clear {
      clear: both;
    }

  }

`;

export default Topo;