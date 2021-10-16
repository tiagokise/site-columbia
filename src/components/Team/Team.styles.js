import styled from 'styled-components';


export const Team = styled.div`
  padding: 20px;
`;

export const UserCard = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid black;
  display: grid;
  grid-template-areas: 'pic infos';
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr;
  position: relative;
`;

export const UserPicture = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-area: pic;
`

export const UserInfos = styled.div`
  grid-area: infos;

`

export const UserName = styled.p`
  grid-area: name;

`

export const UserOccupation = styled.p`
  grid-area: uccupation;

`