import { Link } from "react-router-dom";
import { List, TrendTitle, WrapperList } from "./TrendingMovies.styled";

export const TrendingMovies = ({ trends }) => {

    return (
        <WrapperList>
            <TrendTitle>Trending today</TrendTitle>
        <List>
        {trends.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`} id={movie.id} >{movie.original_title || movie.original_name} </Link>
          </li>                 
        ))}
        </List>
    </WrapperList>
    )
}