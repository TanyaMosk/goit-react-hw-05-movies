import { Link, useLocation } from "react-router-dom";
// import { useRef} from "react";

export const SearchMovies = ({ movies }) => {
    const location = useLocation();
 
    return (
    <div>
        <ul>
        {movies.map(({id, title}) => (
          <li key={id}>
          <Link to={`/movie/${id}`} state={{from: location}}>{title}</Link>                            
          </li>
          ))}
        </ul>
    </div>
    )
}