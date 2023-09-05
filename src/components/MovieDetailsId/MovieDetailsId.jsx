import { Link, Navigate, Outlet, useLocation} from "react-router-dom";
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
  SuspenseWrapper
} from "./MovieDetailsId.styled";

const MovieDetailsId = ({ movie, noResults }) => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/movie");

  const { title, poster_path, release_date, vote_average, overview, genres } = movie;
  return (
    <MovieDetailsSection>
      <div>
        {backLinkLocationRef.current !== '/movie' ? <Link to={backLinkLocationRef.current}> ←Go back</Link> : <Link to={'/'}>←Go back</Link>}
      </div>
      {noResults ? <Navigate to={"/"} /> :
        <>
          <MovieDetailsWrapper>
            <div>
              <MovieDetailsImage src={poster_path ? `https://image.tmdb.org/t/p/w342/${poster_path}` : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'} alt={title} />
            </div>
            <div>
              {release_date ? <h2>{title}  ({takeYear(release_date)})</h2>
                : <h2>{title}</h2>}
              {vote_average ? <p>User Score: {fixedNumber(vote_average)} %</p> : <p>User Score: {vote_average}</p>}
              <h3>Overview</h3>
              <span>{overview}</span> 
              <h3>Genres</h3>
              {genres && genres.map(({ id, name }) => (
                <MovieDetailsGenres key={id}> {name}</MovieDetailsGenres>))}
            </div>
          </MovieDetailsWrapper>
                
          <CastReviewsWrapper>
            <h2>Additional Information</h2>
            <CastReviewsList>
              <li>
                <Link to="cast">
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews">
                  Reviews
                </Link>
              </li>
            </CastReviewsList>
          </CastReviewsWrapper>
        </>}
            
      <Suspense fallback={<SuspenseWrapper>Loading...</SuspenseWrapper>}>
        <Outlet />
      </Suspense>
    </MovieDetailsSection>
  )
};

export default MovieDetailsId;