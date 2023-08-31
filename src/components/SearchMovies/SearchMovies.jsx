import { Link, useLocation } from "react-router-dom";
import { SearchMoviesList } from "./SearchMovies.styled";
// import { useRef} from "react";

export const SearchMovies = ({ movies }) => {
    const location = useLocation();
 
    return (
    <div>
        <SearchMoviesList>
        {movies.map(({id, title}) => (
          <li key={id}>
          <Link to={`/movie/${id}`} state={{from: location}}>{title}</Link>                            
          </li>
          ))}
        </SearchMoviesList>
    </div>
    )
}