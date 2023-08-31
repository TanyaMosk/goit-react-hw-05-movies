import { styled } from 'styled-components';
import { NavLink } from "react-router-dom";
import { GiFilmSpool } from 'react-icons/gi';

export const Header = styled.header`
padding: 10px 20px;
/* background: radial-gradient(circle at 50.3% 44.5%, rgb(116, 147, 179) 0%, rgb(62, 83, 104) 100.2%); */
background: linear-gradient(65.5deg, rgb(23, 205, 205) -15.1%, rgb(23, 25, 95) 71.5%);
`;

export const WrapperNav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
/* gap:30px; */
`;

export const WrapperDiv = styled.div`
display: flex;
gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  color: blue;
  text-decoration: none;
  padding: 10px 8px;  
  border-radius: 10px; 
  background-color:gainsboro; 

  &.active {
    color: white ;
    background-color: blue;
  }
`;

export const WrapperIcon = styled.div`
position: relative;
display: flex;
`;

export const Icon = styled(GiFilmSpool)`
width: 60px;
height: 60px;
/* position: absolute;
top:20%;
right:-5%; */
color: darkcyan;
`;

export const Text = styled.p`
font-weight: 700;
font-size: 20px;
margin-right: 20px;
background: -webkit-linear-gradient(280deg, rgb(115, 139, 252) 27%, rgb(241, 236, 102) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
