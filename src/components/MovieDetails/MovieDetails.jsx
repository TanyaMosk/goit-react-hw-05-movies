import { useState, useEffect, useRef} from "react";
import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import { fetchMovieById } from "services/api";

export const MovieDetails = () => {    
  const {movieId} = useParams();    
  const [movie, setMovie] = useState([]);
  const [noResults, setNoResults] = useState();  
  const location = useLocation(); 
  const backLinkLocationRef = useRef(location.state.from && "/movie");

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
    
  // console.log(movie)
  const { title, poster_path,release_date,vote_average,overview,genres} = movie;

  return (
    <div>
        <div>
            <Link to={backLinkLocationRef.current}>Back</Link>
        </div>
        <h1>Movie details</h1>
        {noResults ? <h2>Sorry, we have no information about this movie</h2> : <>
        <div>
            <img src={poster_path ? `https://image.tmdb.org/t/p/w342/${poster_path}`:'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'} alt={title}/>
        </div>
        <div>
            <h2>{title}  {release_date}</h2>            
            <h3>User vote</h3>
            <span>{vote_average}</span>
            <h3>Overview</h3>
            <span>{overview }</span>
            <h3>Genres</h3>
              {genres && genres.map(({id,name}) => (
            <span key={id}> {name}</span>
            ))}
            
        </div>
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
    </div>
  )
}