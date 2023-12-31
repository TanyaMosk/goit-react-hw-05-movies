import { styled } from 'styled-components';

export const CastWrapper = styled.section`
padding-top: 20px;
`;

export const CastList = styled.ul` 
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 30px;
`;

export const CastListItem = styled.li`
  margin-bottom: 30px; 
  width: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
width: 120px;
height: 160px;
border-radius: 10px;
`;

export const CastTitle = styled.h2`
color: gainsboro;
`;

export const CastText = styled.p`
color: gainsboro;
`;

export const CastTextChar = styled.span`
color: gainsboro;
`;
