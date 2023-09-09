import { styled } from 'styled-components';
import { NavLink } from "react-router-dom";

export const SearchMoviesWrapper = styled.div`
padding: 10px 40px;
`;

export const SearchMoviesList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 15px;
list-style: none;
text-align: center;
`;

export const SearchMoviesItem = styled.li`
width: 342px;
`;

export const SearchMoviesImage = styled.img`
border-radius: 10px;
width: 342px;
height: 513px;
object-fit: cover;
`;

export const SearchMoviesTitle = styled.p`
color:  black;
text-transform: uppercase;

&:hover{
   color: blue;
   text-decoration: underline;
}
`;

export const SearchMoviesLink = styled(NavLink)`
text-decoration: none;
font-weight: 600;

`;


