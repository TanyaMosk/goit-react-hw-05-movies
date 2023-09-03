import { styled } from 'styled-components';
import { NavLink } from "react-router-dom";
import { GiFilmSpool } from 'react-icons/gi';

export const Header = styled.header`
padding: 10px 30px;
background: linear-gradient(65.5deg, rgb(23, 205, 205) -15.1%, rgb(23, 25, 95) 71.5%);
`;

export const WrapperNav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
`;

export const WrapperDiv = styled.div`
display: flex;
gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  color: white ;
  text-decoration: none;
  padding: 10px 8px;  
  border-radius: 10px;   
  background: radial-gradient(circle at 1.8% 4.8%, rgb(17, 23, 58) 0%, rgb(58, 85, 148) 90%);

  &.active {
    background: linear-gradient(135.8deg, rgb(26, 26, 29) 27.1%, rgb(111, 34, 50) 77.5%);
  }
`;

export const WrapperIcon = styled.div`
position: relative;
display: flex;
`;

export const Icon = styled(GiFilmSpool)`
width: 60px;
height: 60px;
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
