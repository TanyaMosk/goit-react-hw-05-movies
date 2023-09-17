import { Outlet, useLocation} from "react-router-dom";
import { useRef, Suspense } from "react";
import { takeYear } from "helpers/dateFormat";
import { fixedNumber } from "helpers/fixedNumber";
import {
  CastReviewsWrapper,
  MovieDetailsSection,
  MovieDetailsWrapper,
  MovieDetailsImage,
  CastReviewsList, 
  MovieDetailsGenres,
  SuspenseWrapper,
  MovieTitle,
  MovieText,
  MovieDesc,
  NavLinkStyled,
  WrapperImage,
  Overlay,
  WrapperHomePage,
  MovieTextLink
} from "./MovieDetailsId.styled";

const MovieDetailsId = ({ movie }) => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/movie");    
  
  const { title, poster_path, release_date, vote_average, overview, genres, tagline, homepage } = movie;
  console.log(movie)
  return (
    <MovieDetailsSection>
      <div>
        {backLinkLocationRef.current !== '/movie' ? <NavLinkStyled to={backLinkLocationRef.current}> ←Go back</NavLinkStyled> : <NavLinkStyled to={'/'}>←Go back</NavLinkStyled>}
      </div>
        
        <>
          <MovieDetailsWrapper>
            <WrapperImage>
              <MovieDetailsImage src={poster_path ? `https://image.tmdb.org/t/p/w342/${poster_path}` : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'} alt={title} />
            {tagline === "" ? null : <Overlay>{ tagline }</Overlay> }
          </WrapperImage>
            <div>
              {release_date ? <MovieTitle>{title}  ({takeYear(release_date)})</MovieTitle>
                : <MovieTitle>{title}</MovieTitle>}
              {vote_average ? <MovieDesc>User Score: {fixedNumber(vote_average)} %</MovieDesc> : <MovieDesc>User Score: {vote_average}</MovieDesc>}
              <MovieText>Overview</MovieText>
              <MovieDesc>{overview}</MovieDesc> 
              <MovieText>Genres</MovieText>
              {genres && genres.map(({ id, name }) => (
                <MovieDetailsGenres key={id}> {name}</MovieDetailsGenres>))}
            {homepage === "" ? null : <WrapperHomePage>
              <MovieText>Homepage:</MovieText>
              <MovieTextLink href={homepage}>{homepage}</MovieTextLink>
            </WrapperHomePage> }         
          </div>          
          </MovieDetailsWrapper>
                
          <CastReviewsWrapper>
            <MovieTitle>Additional Information</MovieTitle>
            <CastReviewsList>
              <li>
                <NavLinkStyled to="cast">
                  Cast
                </NavLinkStyled>
              </li>
              <li>
                <NavLinkStyled to="reviews">
                  Reviews
                </NavLinkStyled>
              </li>
            </CastReviewsList>
          </CastReviewsWrapper>
      </>       
       
      <Suspense fallback={<SuspenseWrapper>Loading...</SuspenseWrapper>}>
        <Outlet />
      </Suspense>
    </MovieDetailsSection>
  )
};

export default MovieDetailsId;