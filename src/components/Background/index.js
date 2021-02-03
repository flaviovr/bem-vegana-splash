import styled from 'styled-components';

const QuizBackground = styled.div`
  width: 100%;
  background-repeat:no-repeat;
  background-size: cover;
  background-position: top center ;
  background-image: url(${({ theme }) => theme.bg});

  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
   /* -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: "FlipH"; */
  @media screen and (max-width: 600px) {
    background-repeat:no-repeat;
    background-size: cover;
    background-position: top;
    background-color:${({ theme }) => theme.colors.mainBg};
    background-image:
        /* linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}), */
        url(${({ theme }) => theme.bg});
    /* &:after {
      content: "";
      background-size: cover;
      background-position: bottom center;
      background-color:${({ theme }) => theme.colors.mainBg};
      background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}),
        url('/images/bg2.jpg');
      display: block;
      width: 100%;
    
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
      /* -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: "FlipH"; 
    }
    *:first-child {
      position: relative;
      z-index: 10;
    } */
  }
`;

export default QuizBackground;