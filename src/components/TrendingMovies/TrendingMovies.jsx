import { Link } from "react-router-dom";
import { List, TrendTitle, WrapperList } from "./TrendingMovies.styled";

const TrendingMovies = ({ trends }) => {

  return (
    <WrapperList>
      <TrendTitle>Trending today</TrendTitle>
      <List>
        {trends.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`} id={movie.id} >{movie.title || movie.name} </Link>
          </li>
        ))}
      </List>
    </WrapperList>
  )
};

export default TrendingMovies;