import { useParams } from "react-router-dom"
import { useState, useEffect} from "react";
import { fetchMovieCastById } from "services/api";
import {
  CastWrapper,
  CastList,
  CastListItem,
  Image,
  CastTitle,
  CastText,
  CastTextChar
} from "./Cast.styled";

export default function Cast () {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]); 
  const [noResults, setNoResults] = useState(false); 

  useEffect(() => {    
    async function fetchMovieCast(movieId) {
      
      try {
        const response = await fetchMovieCastById(movieId);
        if (response.cast.length === 0) {
          setNoResults(true);           
        };     
        
        setCasts(response.cast);          
       
      } catch (error) {
        console.log(error);
     };
    };
       fetchMovieCast(movieId);
    }, [movieId]);  
   
    return (
      <CastWrapper>           
        {noResults ? <CastTitle>Sorry. We don't have cast information.</CastTitle> : <CastList>
            {casts.map(({ id,name, profile_path,character}) => (
            <CastListItem key={id}>
            <Image src = {profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : 
              'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'}                 
                alt={name}/> 
              <CastText>{name}</CastText>
               {character === "" ? null : <CastText>Character:
                <CastTextChar> {character}</CastTextChar>
              </CastText>}             
            </CastListItem>
            ))}      
        </CastList> }                
      </CastWrapper>
    )
};

