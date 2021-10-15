import styled from 'styled-components';
import bgApresentation from '../../images/logo.jpg';


export const Header = styled.div`
  height: 500px;
  width: 100vw;
  display: grid;
  grid-template-areas:
    'text bg'
  ;
  grid-template-columns: 2fr 1fr;
`;

export const Apresentation = styled.div`
  grid-area: text;
`

export const ApresentationImage = styled.div`
  grid-area: bg;
  background: url(${bgApresentation});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`