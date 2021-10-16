import styled from 'styled-components';


export const Team = styled.div`
  position: relative;
  padding: 14vw 20px 20px 20px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;

  @media screen{
    @media (min-width: 520px){
      padding: 80px 20px 20px 20px;
    }
  }
`;

export const TeamTitle = styled.h1`
  font-size: 9vw;
  color: blueviolet;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0px;

  @media screen {
    @media (min-width: 520px){
      font-size: 50px;
    }
  }
`

export const UserCard = styled.div`
  width: 100%;
  height: auto;
  max-width: 385px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px 0;
  flex: 1;
  margin: 0 auto;
`;

export const UserPicture = styled.img`
  display: flex;
  width: 180px;
  height: 180px;
  margin: auto;
  object-fit: cover;
  grid-area: pic;
  border-radius: 50%;

  @media screen{
    @media (min-width: 1024px){
      width: 250px;
      height: 250px;

    }
  }
`

export const UserInfos = styled.div`

`

export const UserName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`

export const UserOccupation = styled.p`

`