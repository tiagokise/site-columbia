import * as S from './Mission.styles';
import imageSite from '../../images/discovery_tela.png'

export default function Mission(){
  const siteClick = () => {
    window.open('https://www.eurekadigital.app/', '_blank');
  }

  return(
   <S.Mission>
    <S.MissionTitle>Nossa Missão</S.MissionTitle>
    <S.Wrapper>
      <S.MissionText>A equipe Columbia tem como objetivo, desenvolver a plataforma Eureka Digital Onboard, sendo assim temos como missão captar mais usuários para a plataforma, tornando sua experiência fácil, com visual atrativo e boa performance.</S.MissionText>
      {/* <S.MissionImage src={imageMission}/> */}
      <S.MissionImageBg onClick={siteClick}>
        <S.MissionSite src={imageSite}/>
      </S.MissionImageBg>
    </S.Wrapper>
   </S.Mission>
  )
}