import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header, WrapperNav,StyledLink, Icon, WrapperDiv, WrapperIcon, TextLink, SuspenseWrapper } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <>
      <Header>
        <WrapperNav>
          
          <WrapperIcon to="/">
            <Icon />
            <TextLink >Movie UA</TextLink>            
          </WrapperIcon>
          <WrapperDiv>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movie">Movies</StyledLink>
          </WrapperDiv>
        </WrapperNav>
      </Header>
      <hr />
      <Suspense fallback={<SuspenseWrapper>Loading...</SuspenseWrapper>} >
        <Outlet />
      </Suspense>
    </>
  )
};

export default SharedLayout;