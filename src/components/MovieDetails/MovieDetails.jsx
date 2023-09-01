import { useState, useEffect, useRef} from "react";
import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import { fetchMovieById } from "services/api";
import {
  CastReviewsWrapper,
  MovieDetailsSection,
  MovieDetailsWrapper,
  MovieDetailsImage,
  CastReviewsList,
  MovieDetailsTextError,
  MovieDetailsDescr,
  MovieDetailsGenres
} from "./MovieDetails.styled";
import { takeYear,fixedNumber } from "helpers/dataFormat";


export const MovieDetails = () => {    
  const {movieId} = useParams();    
  const [movie, setMovie] = useState([]);
  const [noResults, setNoResults] = useState();  
  const location = useLocation(); 
  const backLinkLocationRef = useRef(location.state?.from ?? "/movie");
  
  useEffect(() => {
  async function fetchMovieId(movieId) {
    try {
      const response = await fetchMovieById(movieId);        
      setMovie(response);     
    } catch (error) {        
      if (error) {
      setNoResults(true);
      }
      console.log(error);
      }
    };
    
  fetchMovieId(movieId);
  }, [movieId]);    
 
  const { title, poster_path,release_date,vote_average,overview,genres} = movie;

  return (
    <MovieDetailsSection>
      <div>        
          {backLinkLocationRef.current !== '/movie' ? <Link to={backLinkLocationRef.current}> ←Go back</Link>: <Link to={'/'}>←Go back</Link>}
        </div>        
        {noResults ? <MovieDetailsTextError>Sorry, we have no information about this movie!</MovieDetailsTextError> : <>
        <MovieDetailsWrapper>
          <div>
            <MovieDetailsImage src={poster_path ? `https://image.tmdb.org/t/p/w342/${poster_path}`:'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'} alt={title}/>
          </div>
          <MovieDetailsDescr>
            {release_date ? <h2>{title}  ({takeYear(release_date)})</h2>
              : <h2>{title}</h2>}            
            <h3>User vote</h3>
            {vote_average ? <span>{fixedNumber(vote_average)}</span> : <span>{vote_average}</span> }
            {/* <span>{fixedNumber(vote_average)}</span> */}
            <h3>Overview</h3>
            {overview ? <span>{overview}</span> : <p>Sorry, we have no information.</p>}
            {/* <span>{overview}</span> */}
            <h3>Genres</h3>           
            {genres && genres.map(({id,name}) => (
            <MovieDetailsGenres key={id}> {name}</MovieDetailsGenres>))}            
          </MovieDetailsDescr>         
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
        <Outlet />
    </MovieDetailsSection>
  )
}