import * as S from './Header.styles';

export default function Header(){
  return(
   <S.Header>
     <S.ApresentationImage>
      <S.HeaderLogo/>
      <S.Container>
        <h2>Bem vindo à</h2>
        <h1>Equipe Columbia</h1>
      </S.Container>
     </S.ApresentationImage>
   </S.Header>
  )
}