import { styled } from 'styled-components';
import { NavLink } from "react-router-dom";

export const WrapperList = styled.div`
padding: 20px 40px;
`;

export const List = styled.ul`
display: flex;
/* flex-direction: column; */
flex-wrap: wrap;
gap: 20px;
list-style: none;
text-align: center;
`;

export const ListItem = styled.li`
width: 342px;
box-shadow: 0 10px 20px 5px #808080 inset;
border-radius: 10px;
`;

export const TrendTitle = styled.h2`
text-align: center;
text-transform: uppercase;
margin: 0 0 20px 25px;
/* color: midnightblue; */
color: white;
`;

export const Image = styled.img`
border-radius: 10px;
`;

export const MovieTitle = styled.p`
color:  gainsboro;
text-transform: uppercase;


&:hover{
   color: orange;
   text-decoration: underline;
}
`;

export const MovieLink = styled(NavLink)`
text-decoration: none;
font-weight: 600;

`;
