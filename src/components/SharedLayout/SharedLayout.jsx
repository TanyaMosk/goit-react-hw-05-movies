import { Outlet } from "react-router-dom";
import { Header, WrapperNav,StyledLink, Icon, WrapperDiv, WrapperIcon, Text } from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (
    <>
      <Header>        
          <WrapperNav>              
            <WrapperDiv>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movie">Movies</StyledLink> 
            </WrapperDiv>
            <WrapperIcon>
            <Text>Movie UA</Text>            
            <Icon />
            </WrapperIcon>            
        </WrapperNav>      
      </Header>
      <hr />
        <Outlet />
   </>
    )
}

