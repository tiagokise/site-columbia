import * as S from './Team.styles';
import tiago from '../../images/tiago.png'
import joice from '../../images/joice.png'

const users = [
  {
    name: 'Tiago Kiseliauskas',
    occupation: 'Tech Lead | Front End',
    picture: tiago,
  },
  {
    name: 'Joice Lima',
    occupation: 'Front End',
    picture: joice,

  },
]

export default function Header(){
  return(
   <S.Team>
     {users.map((user) => 
      <S.UserCard>
        <S.UserPicture src={user.picture}/>
        <S.UserInfos>
          <S.UserName>{user.name}</S.UserName>
          <S.UserOccupation>{user.occupation}</S.UserOccupation>
        </S.UserInfos>
      </S.UserCard>
      )}
   </S.Team>
  )
}

