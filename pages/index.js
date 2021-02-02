import styled from 'styled-components';
import Head from 'next/head'
import Link from 'next/link'

import config from '../config.json';

import Widget from '../src/components/Widget';
import Logo from '../src/components/Logo';
import QuizBackground from '../src/components/QuizBackground';
// import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {

  return (   
    <QuizBackground backgroundImage={config.bg}>
      <Head>
        <title>{config.title}</title>
        {/* <meta property='og:image' content='https://quizreact.vercel.app/{config.bg}'></meta> */}
      </Head>
    
      <QuizContainer>
        
        <Logo className='teste' mode='center'/>

        <Widget>
          <Widget.Header>
            <h1>{config.title}</h1>
            <h2>{config.description}</h2>  
          </Widget.Header>
        </Widget>

      </QuizContainer>

    </QuizBackground>
  )

}