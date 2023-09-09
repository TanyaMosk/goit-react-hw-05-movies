import { useLocation } from "react-router-dom";
import {
  SearchMoviesList,
  SearchMoviesWrapper,
  SearchMoviesLink,
  SearchMoviesTitle,
  SearchMoviesImage,
  SearchMoviesItem
} from "./SearchMovies.styled";

const SearchMovies = ({ movies }) => {
  const location = useLocation();
 
  return (
    <SearchMoviesWrapper>
      <SearchMoviesList>
        {movies.map(({ id, title, poster_path, name }) => (
          <SearchMoviesItem key={id}>
            <SearchMoviesLink to={`/movie/${id}`} state={{ from: location }}>
              <SearchMoviesImage src={poster_path ? `https://image.tmdb.org/t/p/w342/${poster_path}` : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'} alt={title || name}/>
              <SearchMoviesTitle>{title}</SearchMoviesTitle>
            </SearchMoviesLink>
          </SearchMoviesItem>
        ))}
      </SearchMoviesList>
    </SearchMoviesWrapper>
  )
};

export default SearchMovies;