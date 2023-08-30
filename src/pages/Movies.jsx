import { useEffect, useState } from "react"
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { fetchSearchMovieByName } from "services/api";

const Movies = () => {       
    const [searchMovie, setSearchMovie] = useState([]);        
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";    
    const location = useLocation();
    
    useEffect(() => {
        if (query === '') return;
        console.log(query);
        async function getMovie() {
            if (query === '') {
                return;
            }
             
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

    const handleSubmit = evt => {
        evt.preventDefault();      
        const queryMovie = evt.target.elements.query.value.trim();
        console.log(queryMovie);
        if (queryMovie === '') {
           setSearchParams({});   
            setSearchMovie([]); 
            return;
       }

        if (queryMovie !== '') {
        setSearchParams({query: queryMovie});        
        evt.target.reset();
            return;
        }       
    }      
       

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                            <Link to={`/movie/${id}`} state={{from: location}}>{title}</Link>
                            
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Movies


  