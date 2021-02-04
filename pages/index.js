import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import config from '../config.json';
import cardapio from '../cardapio.json';

import Widget from '../src/components/Widget';
import Logo from '../src/components/Logo';
import Background from '../src/components/Background';
// import Footer from '../src/components/Footer';
import Container from '../src/components/Container';


  const Category = styled.h1`
    background-color:${({ theme }) => theme.colors.primaryDark};
    padding:15px;
    border-radius: ${({ theme }) => theme.borderRadius};
    font-family: 'Bungee Hairline';
   clear:both;
    color:${({ theme }) => theme.colors.primary};
    line-height:1;

    span{
      font-family: 'Bungee';
      float:right;
    }
  `
  const Pedido = styled.div`
   
    text-align:center;
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
  `
export default function Home() {

  
  return (   
    <Background backgroundImage={config.bg}>
      <Head>
        <title>{config.title}</title>
     
        <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Bungee+Hairline&family=Roboto+Slab:ital,wght@0,300;0,700;1,400&display=swap" rel="stylesheet"></link>
        <meta property='og:image' content='https://quizreact.vercel.app/images/page/logo-bem-vegana.png'></meta>
      </Head>
      <Container >
        
        <Logo className='teste' mode='center'/>
        
       

        <Category>Refeições<span>R$19,90</span></Category>


        {cardapio.cardapio.map((item)=>{
          return (
            <Widget key={item.num}>
                <div className='bloco'>
                {item.num}
                </div>
                <img
                  alt={item.title}
                  src={item.image}                  
                />
                <Widget.Content>
                <h1>{item.title}</h1>
                {item.description && <h2>{item.description}</h2>}
                <p>{item.ingredients}</p>
                </Widget.Content>
            </Widget>
          ) 
        })
        }
        <Category>Sobremesas<span>R$14,90</span></Category>
        {cardapio.sobremesas.map((item)=>{
          return (
            <Widget key={item.num}>
                <div className='bloco'>
                {item.num}
                </div>
                <img
                  alt={item.title}
                  src={item.image}                  
                />
                <Widget.Content>
                <h1>{item.title}</h1>
                <p>{item.ingredients}</p>
                </Widget.Content>
            </Widget>
          ) 
        })
        }
        <p>* Imagens meramente ilustrativas</p>
        <p>** Atuamos na cidade do Rio de Janeiro. Consulte os valores de entrega na sua região</p>
      
        <Pedido>
            <p className='gray'>
              Atuamos em todo <br/>Rio de Janeiro!
              
            </p>
            <p className="green">
              Faça já sua Encomenda!<br/>
              <a href="https://api.whatsapp.com/send?phone=5521967413954&text=Nova Encomenda!" target='_blank'>(21) 96741-3954</a>
            </p>
        </Pedido>
      </Container>

    </Background>
  )

}