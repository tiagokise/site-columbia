import * as S from './Mission.styles';
import imageMission from '../../images/mission-image.svg'

export default function Mission(){
  return(
   <S.Mission>
    <S.MissionTitle>Nossa Missão</S.MissionTitle>
    <S.Wrapper>
      <S.MissionText>A equipe Columbia tem como objetivo, desenvolver a plataforma Eureka Digital Onboard, sendo assim temos como missão captar mais usuários para a plataforma, tornando sua experiência fácil, com visual atrativo e boa performance.</S.MissionText>
      <S.MissionImage src={imageMission}/>
    </S.Wrapper>
   </S.Mission>
  )
}