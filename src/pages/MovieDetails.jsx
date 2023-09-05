import { useState, useEffect} from "react";
import { useParams, Navigate } from "react-router-dom";
import { fetchMovieById } from "services/api";
import MovieDetailsId from "components/MovieDetailsId";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [noResults, setNoResults] = useState();
  
  useEffect(() => {
    async function fetchMovieId(movieId) {
      
      try {
        const response = await fetchMovieById(movieId);
        setMovie(response);          
      } catch (error) {          
        setNoResults(true);             
         console.log(error);      
      }
    };
    
    fetchMovieId(movieId);
  }, [movieId]);

  return (
    <main>
      {noResults ? <Navigate to={"/"} /> : 
    <MovieDetailsId movie={movie} /> }           
    </main>
  )
};

export default MovieDetails;