import { useState, useEffect} from "react";
import { useParams, } from "react-router-dom";

import { fetchMovieById } from "services/api";
import MovieDetailsId from "components/MovieDetailsId";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
        toast.error("Oops, something went wrong 🥺. Please try reloading the page!");         
        console.log(error);        
      }
    };
    
    fetchMovieId(movieId);
  }, [movieId]);

  return (
    <main>
    <MovieDetailsId movie={movie} noResults={noResults} />
    <ToastContainer
            autoClose={4000}
            position="top-right"
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
    </main>
  )
};

export default MovieDetails;