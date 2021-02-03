import styled from 'styled-components';
import Head from 'next/head'
import Link from 'next/link'

import config from '../config.json';
import cardapio from '../cardapio.json';

import Widget from '../src/components/Widget';
import Logo from '../src/components/Logo';
import Background from '../src/components/Background';
// import Footer from '../src/components/Footer';
import Container from '../src/components/Container';

export default function Home() {

  return (   
    <Background backgroundImage={config.bg}>
      <Head>
        <title>{config.title}</title>
        {/* <meta property='og:image' content='https://quizreact.vercel.app/{config.bg}'></meta> */}
      </Head>
    
      <Container >
        
        <Logo className='teste' mode='center'/>
        
        <h1>Refeições</h1>
        {cardapio.cardapio.map((item)=>{
          return (
            <Widget key={item.num}>
              <Widget.Header>
                <h1>{item.title}</h1>
                <p>{item.ingredients}</p>  
              </Widget.Header>
            </Widget>
          ) 
        })
        }
        <h1>Sobremesas</h1>
        {cardapio.sobremesas.map((item)=>{
          return (
            <Widget key={item.num}>
              <Widget.Header>
                <h1>{item.title}</h1>
                <p>{item.ingredients}</p>  
              </Widget.Header>
            </Widget>
          ) 
        })
        }
      </Container>

    </Background>
  )

}