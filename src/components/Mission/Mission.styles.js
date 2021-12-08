import styled from 'styled-components';
import imageMission from '../../images/laptop_mock.png'

export const Mission = styled.div`
  margin-bottom: 20px;
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
`;

export const MissionTitle = styled.h1`
  font-size: 9vw;
  color: blueviolet;
  text-align: center;
  margin: 0 auto;

  @media screen {
    @media (min-width: 520px){
      font-size: 50px;
    }

  }
`
export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas: 'image' 'text';
  grid-template-columns: 1fr;
  grid-template-rows: auto 200px;

  @media screen{
    @media (min-width: 768px){
      grid-template-areas: 'image text';
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;

    }
  }

`

export const MissionText = styled.p`
  grid-area: text;
  line-height: 1.6;
  font-size: 18px;
  margin: 0;
  @media (min-width: 768px){
    text-align: left;
    align-self: center;
    padding-right: 40px;
  }
  @media (min-width: 1024px){
    font-size: 22px;
  }
`
export const MissionImageBg = styled.div`
  background-image: url(${imageMission});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  grid-area: image;
  width: 300px;
  height: 200px;
  position: relative;
  margin: auto;

  @media (min-width: 1024px){
    width: 540px;
    height: 340px;
  }
  cursor: pointer;
`
export const MissionSite = styled.img`
  width: 72%;
  grid-area: image;
  position: relative;
  top: 25px;
  z-index: -1;

  @media (min-width: 1024px){
    top: 38px;
  }
`
