import styled from 'styled-components';
  
export default function PecaJa() {
    //console.log(SVG)
    return (
      <PecaJaContainer>
        <p className='gray'>Atuamos em todo <br/>Rio de Janeiro!</p>
        <p className="green">
            Faça já sua Encomenda!<br/>
            <a href="https://api.whatsapp.com/send?phone=5521967413954&text=Nova Encomenda!" target='_blank'>(21) 96741-3954</a>
        </p>
      </PecaJaContainer>
    );
}


const PecaJaContainer = styled.div`
   
   text-align:center;
   margin:55px 0px;
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
 `