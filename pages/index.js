import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import config from '../config.json';
import cardapio from '../cardapio.json';


import Background from '../src/components/Background';
import Container from '../src/components/Container';
import Topo from '../src/components/Topo';
import Widget from '../src/components/Widget';
import Category from '../src/components/Category';
import PecaJa from '../src/components/PecaJa';


export default function Home() {

  
  return (   
    <Background backgroundImage={config.bg}>
      
      <Head>
        <title>{config.title}</title>
        <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Bungee+Hairline&family=Roboto+Slab:ital,wght@0,300;0,700;1,400&display=swap" rel="stylesheet"></link>
        <meta property='og:image' content='https://bemvegana.vercel.app/images/page/logo-bem-vegana-fb-g.png'/>
        <meta property='og:description' content={config.desc}/>
        <meta property='og:title' content={config.title}/>
        <meta property='og:url' content='https://bemvegana.vercel.app/'/>
        <meta property="og:site_name" content="Bem Vegana!"/>
        <meta property="og:image:type" content="image/jpeg"/>
        <meta property="og:image:width" content="800"/> 
        <meta property="og:image:height" content="449"/> 
      </Head>

      <Container >
        
        <Topo />

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
        <p>*** 100% Plant based.</p>
      
        <PecaJa/>
     
      </Container>

    </Background>
  )

}