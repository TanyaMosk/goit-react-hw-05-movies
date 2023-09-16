import { styled } from 'styled-components';
import { NavLink } from "react-router-dom";

export const MovieDetailsSection = styled.section`
padding: 20px 40px;
`;

export const MovieDetailsWrapper = styled.div`
display: flex;
gap: 30px;
margin-top: 20px;
padding-bottom: 10px;
border-bottom: 1px solid gainsboro;
`;

export const MovieDetailsImage = styled.img`
 display: block;
  /* width: 100%; */
  height: auto;
`;

export const MovieDetailsGenres = styled.span`
margin-right: 6px;
color: gainsboro;
`;

export const CastReviewsWrapper = styled.div`
padding: 20px;
border-bottom: 1px solid gainsboro;
`
export const CastReviewsList = styled.ul`
display: flex;
flex-direction: column;
gap: 8px;
`;

export const SuspenseWrapper = styled.div`
margin: 50px;
`;

export const MovieTitle = styled.h2`
color: gainsboro;
`;

export const MovieText = styled.h3`
color: gainsboro;
`;

export const MovieDesc = styled.span`
color: gainsboro;
`;

export const NavLinkStyled = styled(NavLink)`
color: gainsboro;
text-decoration: none;

&:hover{
    color: orange;
    text-decoration: underline;
}
`;

export const WrapperImage = styled.div`
  position: relative;
  width: 50%;
`;

export const Overlay = styled.div`
position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 100%;
  transition: .5s ease;
  opacity:0;
  color: white;
  font-size: 18px;
  padding: 10px;
  text-align: center;

  ${WrapperImage}:hover &{
    opacity: 1;
  }  
`;

export const WrapperHomePage = styled.div`
display: flex;
align-items: center;
gap: 20px;
`;
