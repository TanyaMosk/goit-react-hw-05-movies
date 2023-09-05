import { useState, useEffect} from "react";
import { useParams, } from "react-router-dom";
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
    <MovieDetailsId movie={movie} noResults={noResults} />            
    </main>
  )
};

export default MovieDetails;