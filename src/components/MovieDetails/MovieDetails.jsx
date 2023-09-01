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
import { takeYear } from "helpers/dateFormat";
import {fixedNumber} from "helpers/fixedNumber";
import { Loader } from "components/Loader/Loader";


export const MovieDetails = () => {    
  const {movieId} = useParams();    
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState();  
  const location = useLocation(); 
  const backLinkLocationRef = useRef(location.state?.from ?? "/movie");
  
  useEffect(() => {    
    async function fetchMovieId(movieId) {
      setLoading(true);
      
    try {
      const response = await fetchMovieById(movieId);        
      setMovie(response);  
      setLoading(false);      
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
        {loading && <Loader/>}
        <MovieDetailsWrapper>
          <div>
            <MovieDetailsImage src={poster_path ? `https://image.tmdb.org/t/p/w342/${poster_path}`:'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'} alt={title}/>
          </div>
          <MovieDetailsDescr>
            {release_date ? <h2>{title}  ({takeYear(release_date)})</h2>
              : <h2>{title}</h2>}            
            {/* <h3>User Score</h3> */}
            {vote_average ? <p>User Score: {fixedNumber(vote_average)} %</p> : <p>User Score: {vote_average}</p> }
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