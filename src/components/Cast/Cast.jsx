import { useParams } from "react-router-dom"
import { useState, useEffect} from "react";
import { fetchMovieCastById } from "services/api";
import { CastWrapper, CastList, CastListItem, Image } from "./Cast.styled";
// import { Loader } from "components/Loader/Loader";

export default function Cast () {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]); 
  const [noResults, setNoResults] = useState(false);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {    
    async function fetchMovieCast(movieId) {

      // setLoading(true);
      try {
        const response = await fetchMovieCastById(movieId);
        if (response.cast.length === 0) {
          setNoResults(true);           
        };     
        
        setCasts(response.cast);          
        // setLoading(false);
      } catch (error) {
        console.log(error);
     };
    };
       fetchMovieCast(movieId);
    }, [movieId]);  
    
    return (
      <CastWrapper>   
        {/* {loading && <Loader/>} */}
        {noResults ? <h2>Sorry. We don't have cast information.</h2> : <CastList>
            {casts.map(({ id,name, profile_path,character}) => (
            <CastListItem key={id}>
            <Image src = {profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : 
              'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'}                 
                alt={name}/> 
              <p>{name}</p>
              <p>Character:
                <span> {character}</span>
              </p>              
            </CastListItem>
            ))}      
        </CastList> }                
      </CastWrapper>
    )
}

