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
        //   console.log(response);
      } catch (error) {
        console.log(error);
     };
    };
       fetchMovieCast(movieId);
      }, [movieId]);
    console.log(casts);
    
    // const { name } = cast;
    // console.log(name)
    return (
        <section>    
            <ul>
            {casts.map(({ id,name, profile_path}) => (
                <li key={id}>
                <img src={`https://image.tmdb.org/t/p/w92/${profile_path}`} alt={name}/> 
                <p>{name}</p>
            </li>
            ))}      
        </ul>        
    </section>
    )
}