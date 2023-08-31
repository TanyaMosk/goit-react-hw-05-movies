import { useState, useEffect, useRef} from "react";
import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import { fetchMovieById } from "services/api";
import { MovieDetailsSection, MovieDetailsWrapper } from "./MovieDetails.styled";
import { takeYear } from "helpers/dataFormat";

  


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
        {noResults ? <h2>Sorry, we have no information about this movie</h2> : <>
        <MovieDetailsWrapper>
          <div>
            <img src={poster_path ? `https://image.tmdb.org/t/p/w342/${poster_path}`:'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'} alt={title}/>
          </div>
          <div>
            {release_date ? <h2>{title}  ({takeYear(release_date)})</h2>
              : <h2>{title}</h2>}
            {/* <h2>{title}  ({takeYear(release_date)})</h2>  */}
            <h3>User vote</h3>
            <span>{vote_average}</span>
            <h3>Overview</h3>
            <span>{overview }</span>
            <h3>Genres</h3>
            {genres && genres.map(({id,name}) => (
            <span key={id}> {name}</span>
             ))}            
          </div>
        </MovieDetailsWrapper>
        
        <ul>        
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
        </ul></>}
        <Outlet />
    </MovieDetailsSection>
  )
}