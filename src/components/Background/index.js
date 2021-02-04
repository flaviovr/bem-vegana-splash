import styled from 'styled-components';

const QuizBackground = styled.div`
  width: 100%;
  
  
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top right;
  background-image: url(${({ theme }) => theme.bg});

  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
   /* -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: "FlipH"; */

`;

export default QuizBackground;