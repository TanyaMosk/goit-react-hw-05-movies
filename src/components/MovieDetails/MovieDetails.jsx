import { useState, useEffect} from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import { fetchMovieById } from "services/api";

export const MovieDetails = () => {
    
    const {movieId} = useParams();
    // console.log(movieId);
    
    const [movie, setMovie] = useState([]);
    // const trendMovies = fetchMovieById(id);
    // console.log(trendMovies);

    useEffect(() => {
    async function fetchMovieId(movieId) {
      try {
        const response = await fetchMovieById(movieId);
          setMovie(response);
        //   console.log(response);
      } catch (error) {
        console.log(error);
        };
        };
    fetchMovieId(movieId);
      }, [movieId]);
    
    // console.log(movie)
    const { title, poster_path } = movie;

    return (
    <div>
        <div>
            <Link to='/'>Back</Link>
        </div>
        <h1>Movie details</h1>
        <div>
            <img src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt={title}/>
        </div>
        <div>
            <h2>{title}  {movie.release_date}</h2>            
            <h3>User vote</h3>
            <span>{movie.vote_average}</span>
            <h3>Overview</h3>
            <span>{movie.overview }</span>
            <h3>Genres</h3>
              {movie.genres && movie.genres.map(genre => (
            <span key={genre.id}> {genre.name}</span>
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
        </ul>
        <Outlet />
    </div>
    )
}