import { useState, useEffect} from "react";
import { useParams,  } from "react-router-dom";
import { fetchMovieById } from "services/api";
import MovieDetailsId from "components/MovieDetails";

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
        if (error) {
          setNoResults(true);
        }
        console.log(error);
      }
    };
    
    fetchMovieId(movieId);
  }, [movieId]);

  return (
    <MovieDetailsId movie={movie} noResults={noResults} />
  )
};

export default MovieDetails;