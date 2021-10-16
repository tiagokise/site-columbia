import styled from 'styled-components';
import bgApresentation from '../../images/img_columbia.svg';
import LogoWhite from '../Logo/LogoWhite'

export const Header = styled.div`
  width: 100vw;
  margin-bottom: 20px;

`;

export const ApresentationImage = styled.div`
  height: 80vh;
  grid-area: bg;
  background: url(${bgApresentation});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  color: #FFFFFF;
  position: relative;
  animation-duration: 3s;
  animation-name: bgsize;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  @keyframes bgsize {
    from {
      background-size: 230%;
    }
    to {
      background-size: 280%;
    }
  }

  @media screen{
    @media (min-width: 1024px){
      height: 400px;
      background-position: center;

      @keyframes bgsize {
        from {
          background-size: 100%;
        }
        to {
          background-size: 140%;
        }
      }
    }
  }

  
  >svg{
    position: absolute;
    bottom: 40%;
    left: 50%;
    transform: translate(-50%);

  }

`

export const HeaderLogo = styled(LogoWhite)`

`

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  >h1{
    font-size: 10vw;
    margin: 0; 
    text-shadow: 2px 2px 2px #00000050;
  }

  >h2{
    font-size: 8vw;
    text-shadow: 2px 2px 2px #00000050;
  }

  @media screen{
    @media (min-width: 520px){
      >h1{
        font-size: 50px;
      }
      >h2{
        font-size: 32px;
      }
    }
    @media (min-width: 1024px){
      font-size: 40vw;

    }
  }
`