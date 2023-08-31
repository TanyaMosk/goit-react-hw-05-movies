import { useParams } from "react-router-dom"
import { useState, useEffect} from "react";
import { fetchMovieCastById } from "services/api";

export const Cast = () => {
    const { movieId } = useParams();
    const [casts, setCasts] = useState([]);    

    useEffect(() => {
    async function fetchMovieCast(movieId) {
      try {
        const response = await fetchMovieCastById(movieId);
        setCasts(response.cast);     
      } catch (error) {
        console.log(error);
     };
    };
       fetchMovieCast(movieId);
      }, [movieId]);
    
    return (
      <section>    
          <ul>
          {casts.map(({ id,name, profile_path}) => (
            <li key={id}>
            <img src = {profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : 
              'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'}                 
                alt={name} width={98} height={132}  /> 
            <p>{name}</p>
            </li>
            ))}      
        </ul>        
      </section>
    )
}