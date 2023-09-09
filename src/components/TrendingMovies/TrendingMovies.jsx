
import { List, TrendTitle, WrapperList, Image, MovieTitle, MovieLink, ListItem } from "./TrendingMovies.styled";

const TrendingMovies = ({ trends }) => {

  return (
    <WrapperList>
      <TrendTitle>Trending today</TrendTitle>
      <List>
        {trends.map((movie) => (
          <ListItem key={movie.id}>
            <MovieLink to={`/movie/${movie.id}`} id={movie.id} >
              <Image src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title || movie.name} />
              <MovieTitle>{movie.title || movie.name} </MovieTitle>
              </MovieLink>
          </ListItem>
        ))}
      </List>
    </WrapperList>
  )
};

export default TrendingMovies;