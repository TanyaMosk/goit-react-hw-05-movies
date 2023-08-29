import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { fetchSearchMovieByName } from "services/api";

const Movies = () => {
    const [query, setQuery] = useState('');
    const [searchMovie, setSearchMovie] = useState([])

    useEffect(() => {
        if (query === '') return;
        console.log(query);
        async function getMovie() {
            try {
                const response = await fetchSearchMovieByName(query);
                setSearchMovie(response.results);
                console.log(response.results);
            } catch (error) {
                console.log(error);
            }
        }
        getMovie()
    },[query]);

    const setMovie = evt => {
        evt.preventDefault()
        // console.log(value)
        // setQuery(value);
        const queryMovie = evt.target.elements.query.value.trim();
        console.log(queryMovie);

        if (queryMovie !== '') {
            changeQuery(queryMovie);
            evt.target.reset();
            return;
        }
    }

    const changeQuery = newQuery => {
        setQuery(newQuery);
    } 

    return (
        <div>
            <form onSubmit={setMovie}>
                <button>Search</button>
                <input
                name="query"           
                type="text"
                placeholder="Search movies"
                />
            </form>
            <div>
                <ul>
                    {searchMovie.map(({id,title}) => (
                        <li key={id}>
                            <Link>{title} </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Movies