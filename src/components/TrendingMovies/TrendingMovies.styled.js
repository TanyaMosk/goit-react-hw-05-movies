import { styled } from 'styled-components';
import { NavLink } from "react-router-dom";

export const WrapperList = styled.div`
padding: 20px;
`;

export const List = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 15px;
list-style: none;
text-align: center;
`;

export const ListItem = styled.li`
width: 225px;
box-shadow: 0 10px 20px 5px #808080 inset;
border-radius: 10px;
transition: box-shadow 500ms linear, transform 500ms linear;

&:hover{
   transform: scale(1.02);
   box-shadow: rgba(0, 0, 128, 0.3) 0px -3em 3em inset, rgb(255, 255, 255) 0px 0px 0px 2px, rgba(0, 0, 0, 0.3) 0.3em 0.3em 1em;
}
`;

export const TrendTitle = styled.h2`
text-align: center;
text-transform: uppercase;
margin: 0 0 20px 25px;
color: white;
`;

export const Image = styled.img`
border-radius: 10px;
width: 225px;
object-fit: cover;
height: 340px;
`;

export const MovieTitle = styled.p`
color:  gainsboro;
text-transform: uppercase;
transition: color 500ms linear, text-decoration 500ms linear;

&:hover{
   color: orange;
   text-decoration: underline;
}
`;

export const MovieLink = styled(NavLink)`
text-decoration: none;
font-weight: 600;
`;
