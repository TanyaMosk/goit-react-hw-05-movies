import { styled } from 'styled-components';
import { NavLink } from "react-router-dom";

export const SearchMoviesWrapper = styled.div`
padding: 10px 40px;
`;

export const SearchMoviesList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 20px;
list-style: none;
text-align: center;
`;

export const SearchMoviesItem = styled.li`
width: 260px;
box-shadow: 0 10px 20px 5px #808080 inset;
border-radius: 10px;
transition: box-shadow 500ms linear, transform 500ms linear;

&:hover{
   transform: scale(1.02);
   box-shadow: rgba(0, 0, 128, 0.3) 0px -3em 3em inset, rgb(255, 255, 255) 0px 0px 0px 2px, rgba(0, 0, 0, 0.3) 0.3em 0.3em 1em;
}
`;

export const SearchMoviesImage = styled.img`
border-radius: 10px;
width: 260px;
height: 340px;
object-fit: cover;
`;

export const SearchMoviesTitle = styled.p`
color:  gainsboro;
text-transform: uppercase;
transition: color 500ms linear, text-decoration 500ms linear;

&:hover{
   color: orange;
   text-decoration: underline;
}
`;

export const SearchMoviesLink = styled(NavLink)`
text-decoration: none;
font-weight: 600;
`;


